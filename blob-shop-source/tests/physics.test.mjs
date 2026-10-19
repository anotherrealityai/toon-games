import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import * as THREE from 'three';
import {ShopPhysics} from '../src/physics.js';

const R=1.05,H=1/120;
const manifest=JSON.parse(readFileSync(new URL('../assets/models/props/manifest.json',import.meta.url)));
const scale=2*R,basketAsset=manifest.assets.basket;
// The actual exported opening and liner, not the abandoned Blender blockout.
const layout={radius:R,start:[-1.15,1.24,-.55],table:{minX:-3.95,maxX:3.95,minZ:-2.55,maxZ:2.55,floorY:.06},basket:{x:1.65,z:-1.05,width:basketAsset.inner_opening_xy_B[0]*scale,depth:basketAsset.inner_opening_xy_B[1]*scale,floorY:basketAsset.inner_floor_z_B*scale,rimY:basketAsset.rim_z_B*scale,wallThickness:.13}};
const make=()=>new ShopPhysics(new THREE.Scene(),layout);
const measurements={volumeMin:Infinity,volumeMax:-Infinity,particlePenetration:0,skinPenetration:0,trianglePenetration:0,skinCorrection:0};
function fixtures(){
  const b=layout.basket,x0=b.x-b.width/2,x1=b.x+b.width/2,z0=b.z-b.depth/2,z1=b.z+b.depth/2,t=b.wallThickness;
  return [
    [[x0-t,b.floorY,z0-t],[x0,b.rimY,z1+t]],[[x1,b.floorY,z0-t],[x1+t,b.rimY,z1+t]],
    [[x0,b.floorY,z0-t],[x1,b.rimY,z0]],[[x0,b.floorY,z1],[x1,b.rimY,z1+t]],
    [[x0-t,layout.table.floorY-.2,z0-t],[x1+t,b.floorY,z1+t]],
  ];
}
const boxes=fixtures();
function penetration(point,r=0){
  const t=layout.table;
  let depth=Math.max(0,t.minX+r-point.x,point.x-t.maxX+r,t.minZ+r-point.z,point.z-t.maxZ+r,t.floorY+r-point.y);
  for(const [min,max] of boxes){
    const x=Math.min(point.x-min[0]+r,max[0]+r-point.x),y=Math.min(point.y-min[1]+r,max[1]+r-point.y),z=Math.min(point.z-min[2]+r,max[2]+r-point.z);
    if(x>0&&y>0&&z>0)depth=Math.max(depth,Math.min(x,y,z));
  }
  return depth;
}
const vertexScratch=[],sampleScratch=new THREE.Vector3();
function inspect(sim,triangles=false){
  const b=sim.body,volume=b._volume()/b.restVolume;
  measurements.volumeMin=Math.min(measurements.volumeMin,volume);measurements.volumeMax=Math.max(measurements.volumeMax,volume);
  assert.ok(Number.isFinite(volume)&&volume>.85&&volume<1.15,`invalid volume ${volume}`);
  for(const p of b.pos){
    assert.ok(Number.isFinite(p.x+p.y+p.z),'nonfinite physical particle');
    const depth=penetration(p,b.particleRadius);measurements.particlePenetration=Math.max(measurements.particlePenetration,depth);
    assert.ok(depth<2e-6,`physical particle crossed fixture: ${depth}`);
  }
  const a=b.geo.attributes.position,idx=b.geo.index,vertices=vertexScratch;
  for(let i=0;i<a.count;i++){
    const p=(vertices[i]??=new THREE.Vector3()).fromBufferAttribute(a,i).add(b.com);
    assert.ok(Number.isFinite(p.x+p.y+p.z),'nonfinite visible vertex');
    const depth=penetration(p);measurements.skinPenetration=Math.max(measurements.skinPenetration,depth);
    assert.ok(depth<=.015*R,`visible vertex crossed fixture: ${depth}`);
  }
  if(triangles)for(let i=0;i<idx.count;i+=3){
    const a=vertices[idx.getX(i)],b=vertices[idx.getX(i+1)],c=vertices[idx.getX(i+2)];
    for(let j=0;j<4;j++){
      if(j===0)sampleScratch.copy(a).add(b).add(c).multiplyScalar(1/3);
      else if(j===1)sampleScratch.copy(a).add(b).multiplyScalar(.5);
      else if(j===2)sampleScratch.copy(b).add(c).multiplyScalar(.5);
      else sampleScratch.copy(c).add(a).multiplyScalar(.5);
      const depth=penetration(sampleScratch);measurements.trianglePenetration=Math.max(measurements.trianglePenetration,depth);
      assert.ok(depth<=.015*R,`visible facet crossed fixture: ${depth}`);
    }
  }
  measurements.skinCorrection=Math.max(measurements.skinCorrection,sim._skinCorrection);
}
function run(sim,count,triangles=false){for(let i=0;i<count;i++){sim.step(H);inspect(sim,triangles);}}
let passed=0;
function check(name,fn){fn();passed++;console.log(`PASS ${name}`);}

check('unchanged source snapshots have recorded SHA256',()=>{
  const p=JSON.parse(readFileSync(new URL('../src/vendor/softbody-v1/provenance.json',import.meta.url)));
  const expected=['82c174400d62b3c9f3699c82c27a4895c4419bc1e23d0b1daf13e708c1c4ef8e','361606e597917e619e8b6d31802655f45a4930d1c0c6576fb018a5464c52cdd1'];
  p.files.forEach((file,i)=>{const bytes=readFileSync(new URL(`../src/vendor/softbody-v1/${file.copy}`,import.meta.url));assert.equal(createHash('sha256').update(bytes).digest('hex'),expected[i]);assert.equal(file.sha256,expected[i]);});
});

check('real-size idle, surface geometry and conservative containment',()=>{
  const sim=make();try{
    assert.equal(sim.body.radius,R);assert.equal(sim.body.shellCount,162);run(sim,240,true);
    assert.equal(sim.fitsBasket(),false);assert.ok(sim.containsSphere(sim.body.com,.2));assert.equal(sim.containsSphere(sim.body.com,2*R),false);
    const direction=new THREE.Vector3(1,.3,.2).normalize(),point=sim.surfacePoint(direction);
    assert.ok(point.clone().sub(sim.body.com).normalize().dot(direction)>1-1e-9);
    assert.equal(sim.containsSphere(point.clone().addScaledVector(direction,.1),.01),false);
    const anchor=sim.anchorAt(point),pose=sim.anchorPose(anchor);
    assert.ok(pose.position.distanceTo(point)<1e-6);assert.ok(new THREE.Vector3(0,1,0).applyQuaternion(pose.quaternion).dot(pose.normal)>1-1e-9);
  }finally{sim.dispose();}
});

check('free workspace rotates through a local physical pull without a basket or render rotation',()=>{
  const sim=new ShopPhysics(new THREE.Scene(),{radius:R,start:[0,1.24,.3],table:{minX:-3.95,maxX:3.95,minZ:-2.55,maxZ:2.55,floorY:.06},basket:null});
  try{
    for(let i=0;i<240;i++)sim.step(H);
    assert.equal(sim.world.boxes.length,0);
    const anchor=sim.anchorAt(sim.surfacePoint(new THREE.Vector3(0,.75,.9))),normal=sim.anchorPose(anchor).normal;
    const point=sim.surfacePoint(new THREE.Vector3(-1,.3,1));
    sim.beginPull(point);sim.setPullTarget(point.clone().add(new THREE.Vector3(-.6,.6,.7)));
    for(let i=0;i<240;i++)sim.step(H);
    assert.equal(sim.heldMode,'pull');
    assert.ok(normal.angleTo(sim.anchorPose(anchor).normal)>.35,'local force did not turn the anchored surface');
    assert.ok(sim.group.quaternion.angleTo(new THREE.Quaternion())<1e-12,'rotation was applied only to the render group');
    sim.endHold();for(let i=0;i<240;i++)sim.step(H);
    const m=sim.metrics();assert.ok(m.finite&&m.volume>.85&&m.volume<1.15);assert.equal(m.particlePenetration,0);assert.equal(m.skinPenetration,0);assert.equal(sim.heldMode,'none');
  }finally{sim.dispose();}
});

for(const angle of [Math.PI/2,Math.PI])check(`physical ${angle===Math.PI?'180':'90'} degree rotation, anchors and released orientation`,()=>{
  const sim=make();try{
    const b=sim.body,reference=b.pos.slice(0,b.shellCount).map(p=>p.clone().sub(b.com));
    const anchor=sim.anchorAt(sim.surfacePoint(new THREE.Vector3(0,1,0))),indices=[...anchor.indices],weights=[...anchor.weights],before=sim.anchorPose(anchor);
    const face=sim.anchorAt(sim.surfacePoint(new THREE.Vector3(0,0,1))),faceBefore=sim.anchorPose(face);
    const target=b.com.clone();target.y=2.4;const q=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),angle);
    sim.beginWhole();sim.setWholeTarget(target,q);run(sim,360);
    const score=()=>reference.reduce((sum,p,i)=>sum+p.clone().applyQuaternion(q).normalize().dot(b.pos[i].clone().sub(b.com).normalize()),0)/reference.length;
    assert.ok(score()>.99,'particles did not perform requested rotation');
    assert.ok(b.pos[0].clone().sub(b.com).distanceTo(reference[0])>.5*R,'mesh-only rotation');
    assert.ok(sim.group.quaternion.angleTo(new THREE.Quaternion())<1e-12);assert.ok(sim.mesh.quaternion.angleTo(new THREE.Quaternion())<1e-12);
    assert.ok(sim.anchorPose(anchor).normal.dot(before.normal.clone().applyQuaternion(q))>.98,'anchor stayed upright');
    assert.ok(sim.anchorPose(face).quaternion.angleTo(q.clone().multiply(faceBefore.quaternion))<.08,'face tangent basis did not rotate with physical body');
    assert.deepEqual(anchor.indices,indices);assert.deepEqual(anchor.weights,weights);assert.equal(b.grabActive,false);
    sim.endHold();run(sim,300);
    assert.equal(sim.heldMode,'none');assert.ok(score()>.93,'released material orientation returned to upright');
    assert.ok(sim.anchorPose(anchor).normal.dot(before.normal.clone().applyQuaternion(q))>.93,'released anchor returned upright');
  }finally{sim.dispose();}
});

check('local pull, profile replacement on the same stretched body and cancellation',()=>{
  const sim=make();try{
    const b=sim.body,geo=b.geo,index=Array.from(geo.index.array),rest=b.restVolume,springs=b.springs.map(s=>s.rest),anchor=sim.anchorAt(sim.surfacePoint(new THREE.Vector3(-1,.3,0))),indices=[...anchor.indices],weights=[...anchor.weights];
    const start=sim.surfacePoint(new THREE.Vector3(-1,.3,0)),target=start.clone().add(new THREE.Vector3(-.6,.9,.1));
    sim.beginPull(start);sim.setPullTarget(target);run(sim,180);
    assert.equal(b.grabParticles.length,18);assert.equal(b.grabStiff,0);assert.equal(sim.heldMode,'pull');
    const pulled=b.grabParticles.reduce((v,i)=>v.add(b.pos[i]),new THREE.Vector3()).multiplyScalar(1/18);
    assert.ok(pulled.distanceTo(start)>.2*R,'local particles did not move');
    sim.setMaterial('cherry');run(sim,90);
    assert.equal(sim.body,b);assert.equal(b.geo,geo);assert.deepEqual(Array.from(geo.index.array),index);assert.equal(b.restVolume,rest);assert.deepEqual(b.springs.map(s=>s.rest),springs);
    assert.equal(sim.materialId,'cherry');assert.ok(Math.abs(b.pressureK-7)<1e-10);assert.ok(Math.abs(b.velDamp-.987)<1e-10);
    for(const spring of b.springs)assert.ok(Math.abs(spring.stiff-(spring.shell?.015:.005))<1e-10,'spring profile not changed');
    assert.deepEqual(anchor.indices,indices);assert.deepEqual(anchor.weights,weights);assert.ok(Number.isFinite(sim.anchorPose(anchor).position.length()));
    sim.setMaterial('aqua');sim.step(.1);sim.setMaterial('cherry');run(sim,90);assert.ok(Math.abs(b.pressureK-7)<1e-10,'old material effect overwrote latest request');
    sim.endHold();assert.equal(b.grabActive,false);assert.equal(b.grabStiff,0);run(sim,240);
    sim.beginWhole();sim.endHold();run(sim,120);assert.equal(sim.heldMode,'none');
    sim.beginPull(sim.surfacePoint(new THREE.Vector3(0,1,0)));sim.reset();assert.equal(sim.heldMode,'none');assert.equal(sim.materialId,'aqua');assert.equal(b.grabActive,false);
  }finally{sim.dispose();}
});

check('contact press changes physical particles without changing assembly or topology',()=>{
  const sim=make(),control=make();try{
    const point=sim.surfacePoint(new THREE.Vector3(0,1,0));const closest=sim.body.pos.slice(0,sim.body.shellCount).map((p,i)=>({i,d:p.distanceToSquared(point)})).sort((a,b)=>a.d-b.d)[0].i;
    sim.pressAt(point,.55,180);run(sim,12);run(control,12);
    assert.ok(sim.body.pos[closest].y<control.body.pos[closest].y-.002*R,'press has no physical effect');run(sim,180);
  }finally{sim.dispose();control.dispose();}
});

check('whole basket placement, tip-only and airborne/held rejection',()=>{
  const sim=make();try{
    const b=sim.body;sim.beginWhole();const target=new THREE.Vector3(layout.basket.x,2.4,layout.basket.z);sim.setWholeTarget(target,new THREE.Quaternion());run(sim,360,true);
    assert.equal(sim.fitsBasket(),false,'held body accepted');sim.endHold();assert.equal(sim.fitsBasket(),false,'airborne body accepted');run(sim,480,true);assert.equal(sim.fitsBasket(),true,'complete settled body rejected');
    const saved=b.pos.map(p=>p.clone()),center=b.com.clone();
    b.pos[0].x=layout.basket.x-layout.basket.width/2-.2;assert.equal(sim.fitsBasket(),false,'COM-only acceptance ignored outside particle');
    b.pos.forEach((p,i)=>p.copy(saved[i]));b.com.copy(center);
    const attr=b.geo.attributes.position,previous=attr.getX(0);attr.setX(0,layout.basket.width+1);assert.equal(sim.fitsBasket(),false,'outside visible shell accepted');attr.setX(0,previous);
    sim.beginPull(sim.surfacePoint(new THREE.Vector3(0,1,0)));assert.equal(sim.fitsBasket(),false);sim.endHold();
  }finally{sim.dispose();}
});

check('swept collisions stop a complete thin-wall traversal and do not multiply friction',()=>{
  const sim=make();try{
    const b=layout.basket,wallX=b.x-b.width/2,p=new THREE.Vector3(wallX-.3,.45,b.z),previous=p.clone();
    const body={pos:[p]};sim.world.prepare(body);p.x=wallX+.3;sim.world.resolveParticle(p,previous,.075,false);
    assert.ok(p.x<=wallX-b.wallThickness-.075+1e-9,'particle tunneled completely through rim');
    const sideX=p.x;p.set(sideX,.45,b.z+.1);previous.set(sideX,.45,b.z);sim.world.starts.get(p).set(sideX-.01,.45,b.z);
    sim.world.resolveParticle(p,previous,.075,false);assert.ok(Math.abs((p.z-previous.z)-.1)<1e-9,'nonfinal constraint pass applied friction');
  }finally{sim.dispose();}
});

check('real low local drag cannot pull particles or visible facets through the basket rim',()=>{
  const sim=make();try{
    const point=sim.surfacePoint(new THREE.Vector3(1,-.15,0));sim.beginPull(point);sim.setPullTarget(new THREE.Vector3(2.4,.3,-.6));run(sim,480,true);
    assert.equal(sim.fitsBasket(),false,'body draped across rim counted as delivered');sim.endHold();run(sim,180,true);
  }finally{sim.dispose();}
});

check('bounded frame time and zero/negative time',()=>{
  const a=make(),b=make();try{
    const initial=a.body.pos.map(p=>p.toArray());a.step(0);a.step(-1);assert.deepEqual(a.body.pos.map(p=>p.toArray()),initial);
    a.step(99);for(let i=0;i<6;i++)b.step(H);a.body.pos.forEach((p,i)=>assert.ok(p.distanceTo(b.body.pos[i])<1e-10));
  }finally{a.dispose();b.dispose();}
});

function stress(seed){
  let state=seed;const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;};
  const sim=make();try{
    for(let cycle=0;cycle<5;cycle++){
      sim.beginWhole();const center=new THREE.Vector3(-1.2+(random()-.5)*.3,2.1+random()*.4,-.2+(random()-.5)*.3),axis=new THREE.Vector3(random()-.5,random()-.5,random()-.5).normalize(),q=new THREE.Quaternion().setFromAxisAngle(axis,(random()-.5)*Math.PI*2);sim.setWholeTarget(center,q);run(sim,240,cycle===0);
      sim.setMaterial(cycle%2?'aqua':'cherry');run(sim,60);sim.endHold();run(sim,180,cycle===0);
      const grip=sim.surfacePoint(new THREE.Vector3(-1,.5,random()-.5).normalize());sim.beginPull(grip);sim.setPullTarget(grip.clone().add(new THREE.Vector3(-random()*.25,.3+random()*.3,(random()-.5)*.3)));run(sim,90);sim.endHold();run(sim,120);
    }
    return sim.body.pos.flatMap(p=>p.toArray()).map(n=>Number(n.toFixed(9)));
  }finally{sim.dispose();}
}
check('deterministic stress: three independent seeds and repeated exact trajectories',()=>{
  for(const seed of [19,419,2026])assert.deepEqual(stress(seed),stress(seed),`nondeterministic seed ${seed}`);
});
console.log(`Physics: ${passed} groups passed`);
console.log(JSON.stringify(Object.fromEntries(Object.entries(measurements).map(([k,v])=>[k,Number(v.toFixed(9))]))));
