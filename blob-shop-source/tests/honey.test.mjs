import assert from 'node:assert/strict';
import * as THREE from 'three';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { ShopPhysics } from '../src/physics.js';
const source=readFileSync(new URL('../src/main.js',import.meta.url),'utf8');
const layout=vm.runInNewContext(`(${source.match(/const layout = ([\s\S]*?);/)[1]})`),H=1/120;
const make=()=>new ShopPhysics(new THREE.Scene(),layout);
const run=(sim,count)=>{for(let i=0;i<count;i++)sim.step(H);};
function healthy(sim){const m=sim.metrics();assert.equal(m.finite,true);assert.ok(m.volume>.85&&m.volume<1.15);assert.ok(m.particlePenetration<1e-9);assert.ok(m.skinPenetration<1e-9);return m;}
let checks=0;
function check(name,fn){fn();checks++;console.log(`PASS ${name}`);}
check('unheld honey spreads under gravity, stays fluid, and keeps its volume',()=>{
 const sim=make();try{
  run(sim,180);const before=healthy(sim);sim.setMaterial('honey');run(sim,240);const flowing=healthy(sim);run(sim,960);const settled=healthy(sim);
  const height=m=>m.max[1]-m.min[1],width=m=>m.max[0]-m.min[0];
  assert.equal(settled.pullCount,0);assert.ok(height(flowing)<height(before)*.85);assert.ok(height(settled)<height(before)*.70);assert.ok(width(settled)>width(before)*1.35);
  console.log(JSON.stringify({honeyIdle:{initialHeight:height(before),after2s:height(flowing),after10s:height(settled),initialWidth:width(before),finalWidth:width(settled),volume:settled.volume}}));
 }finally{sim.dispose();}
});
check('honey can be squeezed and stretched with two fingers inside the resized workspace',()=>{
 const sim=make();try{
  sim.setMaterial('honey');run(sim,360);
  const a=sim.surfacePoint(new THREE.Vector3(-1,.6,.3)),b=sim.surfacePoint(new THREE.Vector3(1,.6,.3));
  sim.beginPull(a,11);sim.beginPull(b,22);
  for(let i=0;i<480;i++){
   sim.setPullTarget(a.clone().add(new THREE.Vector3(Math.sin(i*.025)*.75,.5+Math.sin(i*.04)*.3,Math.cos(i*.03)*.4)),11);
   sim.setPullTarget(b.clone().add(new THREE.Vector3(-Math.sin(i*.025)*.75,.4-Math.sin(i*.04)*.3,-Math.cos(i*.03)*.4)),22);
   sim.step(H);if(i%30===0)healthy(sim);
  }
  sim.endPull(11);assert.equal(sim.metrics().pullCount,1);run(sim,120);healthy(sim);
  sim.endPull(22);run(sim,600);healthy(sim);
  sim.setMaterial('aqua');run(sim,120);assert.deepEqual(sim.body.springs.map(s=>s.rest),sim.baseRest);healthy(sim);
 }finally{sim.dispose();}
});
check('attached anchors remain valid throughout a long honey flow and reset',()=>{
 const sim=make();try{
  const anchor=sim.anchorAt(sim.surfacePoint(new THREE.Vector3(.3,.7,1))),indices=[...anchor.indices];
  sim.setMaterial('honey');
  for(let i=0;i<3600;i++){
   sim.step(H);
   if(i%120===0){const pose=sim.anchorPose(anchor);healthy(sim);assert.ok(Number.isFinite(pose.position.length()));assert.ok(Math.abs(pose.quaternion.length()-1)<1e-6);assert.deepEqual(anchor.indices,indices);}
  }
  sim.reset();healthy(sim);assert.equal(sim.materialId,'aqua');assert.deepEqual(sim.body.springs.map(s=>s.rest),sim.baseRest);
 }finally{sim.dispose();}
});
console.log(`${checks} honey/workspace groups passed.`);
