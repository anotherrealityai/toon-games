import * as THREE from 'three';
import {SoftBody} from './vendor/softbody-v1/jelly/softbody.js';

const H=1/120, MAX_STEPS=6, PARTICLE_RADIUS=.075, SKIN_MARGIN=.008;
const AXES=['x','y','z'];
const PROFILES={
  aqua:{shell:.0045,center:.001,pressure:2.5,damping:.974,color:'#75d7e3',roughness:.17,transmission:.72,thickness:.6,ior:1.18,attenuation:'#a0ecf4'},
  cherry:{shell:.015,center:.005,pressure:7,damping:.987,color:'#d64b78',roughness:.12,transmission:.82,thickness:.65,ior:1.22,attenuation:'#ef87ac'},
};
const vector=p=>p.isVector3?p.clone():new THREE.Vector3(...p);
const box=(min,max,sideAxis=null)=>({min:new THREE.Vector3(...min),max:new THREE.Vector3(...max),sideAxis});
const inside=(p,b,r=0)=>p.x>b.min.x-r&&p.x<b.max.x+r&&p.y>b.min.y-r&&p.y<b.max.y+r&&p.z>b.min.z-r&&p.z<b.max.z+r;

// Segment/slab test also catches a complete traversal of a thin wall. A final
// position-only overlap test would miss that case.
function entry(start,end,b,r){
  let near=0,far=1,axis=-1,face=0;
  for(let i=0;i<3;i++){
    const k=AXES[i],lo=b.min[k]-r,hi=b.max[k]+r,d=end[k]-start[k];
    if(Math.abs(d)<1e-12){if(start[k]<lo||start[k]>hi)return null;continue;}
    let a=(lo-start[k])/d,c=(hi-start[k])/d,f=lo;
    if(a>c){[a,c]=[c,a];f=hi;}
    if(a>=near){near=a;axis=i;face=f;}
    far=Math.min(far,c);
    if(near>far)return null;
  }
  return axis>=0&&near>=0&&near<=1&&far>=0?{axis,face}:null;
}

function nearestFace(p,b,r){
  let best=Infinity,axis=0,face=0;
  for(let i=0;i<3;i++)for(const f of [b.min[AXES[i]]-r,b.max[AXES[i]]+r]){
    const d=Math.abs(p[AXES[i]]-f);
    if(d<best){best=d;axis=i;face=f;}
  }
  return {axis,face};
}

function projectBox(p,previous,r,b,friction,start){
  const overlap=inside(p,b,r);
  const hit=start&&!inside(start,b,r)?entry(start,p,b,r):null;
  if(!overlap&&!hit)return;
  const {axis,face}=hit??nearestFace(p,b,r),k=AXES[axis],before=p[k];
  p[k]=face;
  if(!previous)return;
  previous[k]+=face-before;
  const sign=face<(b.min[k]+b.max[k])/2?-1:1;
  if((p[k]-previous[k])*sign<0)previous[k]=p[k];
  if(friction)for(const t of AXES)if(t!==k)previous[t]=p[t]-(p[t]-previous[t])*.94;
}

class ShopWorld{
  constructor(layout){
    this.table={...layout.table};this.basket={...layout.basket};
    const b=this.basket,x=b.x,z=b.z,hw=b.width/2,hd=b.depth/2,t=b.wallThickness;
    this.boxes=[
      box([x-hw-t,b.floorY,z-hd-t],[x-hw,b.rimY,z+hd+t],'x'),
      box([x+hw,b.floorY,z-hd-t],[x+hw+t,b.rimY,z+hd+t],'x'),
      box([x-hw,b.floorY,z-hd-t],[x+hw,b.rimY,z-hd],'z'),
      box([x-hw,b.floorY,z+hd],[x+hw,b.rimY,z+hd+t],'z'),
      box([x-hw-t,this.table.floorY-.2,z-hd-t],[x+hw+t,b.floorY,z+hd+t]),
    ];
    this.starts=new Map();
  }
  prepare(body){for(const p of body.pos){let start=this.starts.get(p);if(!start){start=new THREE.Vector3();this.starts.set(p,start);}start.copy(p);}}
  resolveParticle(p,previous,r,friction){
    const t=this.table;
    for(const [k,lo,hi] of [['x',t.minX+r,t.maxX-r],['z',t.minZ+r,t.maxZ-r]]){
      const value=THREE.MathUtils.clamp(p[k],lo,hi);
      if(value!==p[k]){p[k]=value;previous[k]=value;}
    }
    if(p.y<t.floorY+r){
      p.y=t.floorY+r;previous.y=p.y;
      if(friction){previous.x=p.x-(p.x-previous.x)*.94;previous.z=p.z-(p.z-previous.z)*.94;}
    }
    for(const b of this.boxes)projectBox(p,previous,r,b,friction,this.starts.get(p));
  }
  projectSkinPoint(p,boxes){
    const t=this.table;
    p.x=THREE.MathUtils.clamp(p.x,t.minX+SKIN_MARGIN,t.maxX-SKIN_MARGIN);
    p.z=THREE.MathUtils.clamp(p.z,t.minZ+SKIN_MARGIN,t.maxZ-SKIN_MARGIN);
    p.y=Math.max(p.y,t.floorY+SKIN_MARGIN);
    for(const b of boxes)projectBox(p,null,SKIN_MARGIN,b,false,null);
  }
  penetration(p,r=0){
    const t=this.table;
    let depth=Math.max(0,t.minX+r-p.x,p.x-t.maxX+r,t.minZ+r-p.z,p.z-t.maxZ+r,t.floorY+r-p.y);
    for(const b of this.boxes)if(inside(p,b,r))depth=Math.max(depth,Math.min(p.x-b.min.x+r,b.max.x+r-p.x,p.y-b.min.y+r,b.max.y+r-p.y,p.z-b.min.z+r,b.max.z+r-p.z));
    return depth;
  }
}

export class ShopPhysics{
  constructor(scene,layout){
    this.layout=layout;this.radius=layout.radius??1.05;this.world=new ShopWorld(layout);
    this.start=vector(layout.start);this.materialId='aqua';this.heldMode='none';
    const p=PROFILES.aqua;
    this.body=new SoftBody(scene,this.start,this.radius,{subdivisions:2,externalFace:true,particleRadius:PARTICLE_RADIUS,shellStiffness:p.shell,centerStiffness:p.center,pressureK:p.pressure,velDamp:p.damping,gelColor:p.color,gelOpacity:1});
    this.mesh=this.body.mesh;this.group=this.body.group;
    this.mesh.material.dispose();
    this.mesh.material=new THREE.MeshPhysicalMaterial({metalness:0,clearcoat:1,clearcoatRoughness:.1,attenuationDistance:4.5});
    this.mesh.castShadow=this.mesh.receiveShadow=true;this.body.outline.visible=false;this.body.core.visible=false;
    this.initial=this.body.pos.map(p=>p.clone());
    this.accumulator=0;this.presses=[];this._profile=null;this._whole=null;this._pull=null;
    this._triangle=new THREE.Triangle();this._a=new THREE.Vector3();this._b=new THREE.Vector3();this._c=new THREE.Vector3();this._sample=new THREE.Vector3();this._closest=new THREE.Vector3();
    this._vertices=Array.from({length:this.body.geo.attributes.position.count},()=>new THREE.Vector3());
    this._skinCorrection=0;this._steps=0;
    this._applyProfile(p);this.reset();
  }
  _applyProfile(p){
    const b=this.body;
    b.shellStiffness=p.shell;b.centerStiffness=p.center;b.pressureK=p.pressure;b.velDamp=p.damping;b.shellStiffScale=1;
    for(const spring of b.springs)spring.stiff=spring.shell?p.shell:p.center;
    const m=this.mesh.material;
    m.color.set(p.color);m.roughness=p.roughness;m.transmission=p.transmission;m.thickness=p.thickness;m.ior=p.ior;m.attenuationColor.set(p.attenuation);
  }
  setMaterial(id){
    if(!PROFILES[id])throw new RangeError(`Unknown blob material: ${id}`);
    if(id===this.materialId)return this.materialId;
    const b=this.body,m=this.mesh.material;
    this._profile={elapsed:0,from:{shell:b.shellStiffness,center:b.centerStiffness,pressure:b.pressureK,damping:b.velDamp,color:`#${m.color.getHexString()}`,roughness:m.roughness,transmission:m.transmission,thickness:m.thickness,ior:m.ior,attenuation:`#${m.attenuationColor.getHexString()}`},to:PROFILES[id]};
    this.materialId=id;return id;
  }
  _updateProfile(){
    if(!this._profile)return;
    const t=this._profile;t.elapsed=Math.min(.45,t.elapsed+H);
    const s=THREE.MathUtils.smoothstep(t.elapsed/.45,0,1),p={};
    for(const k of ['shell','center','pressure','damping','roughness','transmission','thickness','ior'])p[k]=THREE.MathUtils.lerp(t.from[k],t.to[k],s);
    p.color=new THREE.Color(t.from.color).lerp(new THREE.Color(t.to.color),s);
    p.attenuation=new THREE.Color(t.from.attenuation).lerp(new THREE.Color(t.to.attenuation),s);
    this._applyProfile(p);
    if(t.elapsed>=.45)this._profile=null;
  }
  beginPull(point){
    this.endHold();const p=vector(point),b=this.body;b.beginGrab(p,18);
    this._pull={target:p.clone(),requested:p.clone(),offsets:b.grabParticles.map(i=>b.pos[i].clone().sub(p))};this.heldMode='pull';
  }
  setPullTarget(point){if(this._pull)this._pull.requested.copy(point);}
  beginWhole(){
    this.endHold();const b=this.body;
    this._whole={center:b.com.clone(),requested:b.com.clone(),quaternion:new THREE.Quaternion(),requestedQuaternion:new THREE.Quaternion(),offsets:b.pos.map(p=>p.clone().sub(b.com))};this.heldMode='whole';
  }
  setWholeTarget(center,relativeQuaternion){
    if(!this._whole)return;
    this._whole.requested.copy(center);this._whole.requestedQuaternion.copy(relativeQuaternion).normalize();
  }
  endHold(){this.body.endGrab();this._pull=this._whole=null;this.heldMode='none';}
  pressAt(point,radius,strength){
    const p=vector(point),normal=p.clone().sub(this.body.com).normalize();
    this.presses.push({point:p,normal,radius,strength,remaining:.12});
  }
  _forces(){
    const b=this.body,delta=this._a,target=this._b,velocity=this._c;
    if(this._pull){
      const p=this._pull;delta.copy(p.requested).sub(p.target);p.target.addScaledVector(delta,Math.min(1,3.9*H/Math.max(1e-9,delta.length())));
      b.grabParticles.forEach((id,n)=>{
        target.copy(p.target).add(p.offsets[n]);delta.copy(target).sub(b.pos[id]).multiplyScalar(180);velocity.copy(b.pos[id]).sub(b.prev[id]).multiplyScalar(8/H);delta.sub(velocity).clampLength(0,220);b.ext[id].add(delta);
      });
    }
    if(this._whole){
      const w=this._whole;delta.copy(w.requested).sub(w.center);w.center.addScaledVector(delta,Math.min(1,3.9*H/Math.max(1e-9,delta.length())));w.quaternion.rotateTowards(w.requestedQuaternion,2.4*H);
      for(let i=0;i<b.pos.length;i++){
        target.copy(w.offsets[i]).applyQuaternion(w.quaternion).add(w.center);
        delta.copy(target).sub(b.pos[i]).multiplyScalar(180);velocity.copy(b.pos[i]).sub(b.prev[i]).multiplyScalar(26/H);delta.sub(velocity);delta.y+=6.5;delta.clampLength(0,220);b.ext[i].add(delta);
      }
    }
    for(const p of this.presses){
      const gain=Math.max(0,p.remaining/.12);
      for(let i=0;i<b.shellCount;i++){
        const distance=b.pos[i].distanceTo(p.point);
        if(distance<p.radius)b.ext[i].addScaledVector(p.normal,-p.strength*gain*(1-distance/p.radius));
      }
      p.remaining-=H;
    }
    this.presses=this.presses.filter(p=>p.remaining>1e-9);
  }
  step(dt){
    this.accumulator+=THREE.MathUtils.clamp(dt,0,H*MAX_STEPS);
    let steps=0;
    while(this.accumulator>=H-1e-12&&steps<MAX_STEPS){
      this.world.prepare(this.body);this.body.clearForces();this._updateProfile();this._forces();this.body.update(H,this.world);this._confineSkin();
      this.accumulator=Math.max(0,this.accumulator-H);steps++;this._steps++;
    }
  }
  _confineSkin(){
    const b=this.body,a=b.geo.attributes.position,idx=b.geo.index,vertices=this._vertices;
    for(let i=0;i<a.count;i++)vertices[i].fromBufferAttribute(a,i).add(b.com);
    const min=new THREE.Vector3(Infinity,Infinity,Infinity),max=new THREE.Vector3(-Infinity,-Infinity,-Infinity);for(const p of vertices){min.min(p);max.max(p);}
    const active=this.world.boxes.filter(box=>AXES.every(k=>max[k]>box.min[k]-SKIN_MARGIN&&min[k]<box.max[k]+SKIN_MARGIN));
    for(let pass=0;pass<(active.length?5:1);pass++){
      for(const p of vertices)this.world.projectSkinPoint(p,active);
      if(!active.length)break;
      let corrected=false;
      for(let i=0;i<idx.count;i+=3){
        const ids=[idx.getX(i),idx.getX(i+1),idx.getX(i+2)];
        for(const box of active)for(const sampleIds of [[0,1,2],[0,1],[1,2],[2,0]]){
          this._sample.set(0,0,0);for(const j of sampleIds)this._sample.add(vertices[ids[j]]);this._sample.multiplyScalar(1/sampleIds.length);
          if(!inside(this._sample,box,SKIN_MARGIN))continue;
          // A triangle spanning both sides of a thin rim has to pass over it.
          // Choosing each sample's nearest left/right face makes neighboring
          // triangles alternately pull their shared vertex across the wall.
          const n=box.sideAxis,bridges=n&&Math.min(...ids.map(id=>vertices[id][n]))<=box.min[n]-SKIN_MARGIN+1e-7&&Math.max(...ids.map(id=>vertices[id][n]))>=box.max[n]+SKIN_MARGIN-1e-7;
          const {axis,face}=bridges?{axis:1,face:box.max.y+SKIN_MARGIN}:nearestFace(this._sample,box,SKIN_MARGIN),k=AXES[axis],side=face<(box.min[k]+box.max[k])/2?-1:1;
          for(const id of ids)if((vertices[id][k]-face)*side<0)vertices[id][k]=face;
          corrected=true;
        }
      }
      if(!corrected)break;
    }
    this._skinCorrection=0;
    for(let i=0;i<vertices.length;i++){
      this._sample.fromBufferAttribute(a,i).add(b.com);this._skinCorrection=Math.max(this._skinCorrection,this._sample.distanceTo(vertices[i]));const p=vertices[i].sub(b.com);a.setXYZ(i,p.x,p.y,p.z);
    }
    a.needsUpdate=true;b.geo.computeVertexNormals();b.geo.computeBoundingSphere();b.geo.computeBoundingBox();
  }
  _face(index){
    const g=this.body.geo,idx=g.index,a=g.attributes.position;
    this._a.fromBufferAttribute(a,idx.getX(index*3));this._b.fromBufferAttribute(a,idx.getX(index*3+1));this._c.fromBufferAttribute(a,idx.getX(index*3+2));
    return this._triangle.set(this._a,this._b,this._c);
  }
  anchorAt(worldPoint,faceIndex){
    const point=vector(worldPoint).sub(this.body.com),g=this.body.geo;let index=faceIndex,closest=new THREE.Vector3(),distance=Infinity;
    if(index===undefined){
      for(let i=0;i<g.index.count/3;i++){
        this._face(i).closestPointToPoint(point,this._closest);const d=this._closest.distanceToSquared(point);
        if(d<distance){distance=d;index=i;closest.copy(this._closest);}
      }
    }else this._face(index).closestPointToPoint(point,closest);
    const triangle=this._face(index),weights=triangle.getBarycoord(closest,new THREE.Vector3()),normal=triangle.getNormal(new THREE.Vector3());
    const e1=triangle.b.clone().sub(triangle.a),e2=triangle.c.clone().sub(triangle.a),front=new THREE.Vector3(0,0,1).addScaledVector(normal,-normal.z);
    if(front.lengthSq()<1e-8)front.set(1,0,0).addScaledVector(normal,-normal.x);front.normalize();
    const aa=e1.dot(e1),bb=e1.dot(e2),cc=e2.dot(e2),denom=aa*cc-bb*bb;
    const u=(front.dot(e1)*cc-front.dot(e2)*bb)/denom,v=(front.dot(e2)*aa-front.dot(e1)*bb)/denom;
    return {indices:[g.index.getX(index*3),g.index.getX(index*3+1),g.index.getX(index*3+2)],weights:weights.toArray(),tangent:[u,v],lastNormal:normal,lastQuaternion:new THREE.Quaternion()};
  }
  anchorPose(anchor){
    const a=this.body.geo.attributes.position,[ia,ib,ic]=anchor.indices;
    const p=new THREE.Vector3().fromBufferAttribute(a,ia),e1=new THREE.Vector3().fromBufferAttribute(a,ib).sub(p),e2=new THREE.Vector3().fromBufferAttribute(a,ic).sub(p);
    const position=p.clone().addScaledVector(e1,anchor.weights[1]).addScaledVector(e2,anchor.weights[2]).add(this.body.com),normal=new THREE.Vector3().crossVectors(e1,e2);
    let quaternion=anchor.lastQuaternion.clone();
    if(normal.lengthSq()>1e-14){
      normal.normalize();const front=e1.clone().multiplyScalar(anchor.tangent[0]).addScaledVector(e2,anchor.tangent[1]);front.addScaledVector(normal,-front.dot(normal));
      if(front.lengthSq()>1e-14){front.normalize();const right=new THREE.Vector3().crossVectors(normal,front).normalize();front.crossVectors(right,normal).normalize();quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(right,normal,front));anchor.lastQuaternion.copy(quaternion);}
      anchor.lastNormal.copy(normal);
    }else normal.copy(anchor.lastNormal);
    return {position,normal,quaternion};
  }
  surfacePoint(direction){
    const dir=vector(direction).normalize(),ray=new THREE.Ray(new THREE.Vector3(),dir);let distance=Infinity,result=null;
    for(let i=0;i<this.body.geo.index.count/3;i++){
      const t=this._face(i),p=ray.intersectTriangle(t.a,t.b,t.c,false,this._closest);
      if(p&&p.lengthSq()<distance){distance=p.lengthSq();result=p.clone();}
    }
    return (result??dir.multiplyScalar(this.radius)).add(this.body.com);
  }
  containsSphere(center,radius){
    const point=vector(center).sub(this.body.com),bounds=this.body.geo.boundingBox,margin=radius+SKIN_MARGIN;
    if(AXES.some(k=>point[k]-margin<bounds.min[k]||point[k]+margin>bounds.max[k]))return false;
    let angle=0;
    for(let i=0;i<this.body.geo.index.count/3;i++){
      const t=this._face(i);t.closestPointToPoint(point,this._closest);
      if(this._closest.distanceToSquared(point)<margin*margin)return false;
      const ax=t.a.x-point.x,ay=t.a.y-point.y,az=t.a.z-point.z,bx=t.b.x-point.x,by=t.b.y-point.y,bz=t.b.z-point.z,cx=t.c.x-point.x,cy=t.c.y-point.y,cz=t.c.z-point.z;
      const la=Math.hypot(ax,ay,az),lb=Math.hypot(bx,by,bz),lc=Math.hypot(cx,cy,cz),det=ax*(by*cz-bz*cy)+ay*(bz*cx-bx*cz)+az*(bx*cy-by*cx);
      angle+=2*Math.atan2(det,la*lb*lc+(ax*bx+ay*by+az*bz)*lc+(ax*cx+ay*cy+az*cz)*lb+(bx*cx+by*cy+bz*cz)*la);
    }
    return Math.abs(angle)>Math.PI*2;
  }
  fitsBasket(){
    if(this.heldMode!=='none')return false;
    const b=this.layout.basket,body=this.body,x0=b.x-b.width/2,x1=b.x+b.width/2,z0=b.z-b.depth/2,z1=b.z+b.depth/2,tolerance=.015*this.radius;
    const insideXZ=p=>p.x>=x0-tolerance&&p.x<=x1+tolerance&&p.z>=z0-tolerance&&p.z<=z1+tolerance;
    let bottom=Infinity;
    for(let i=0;i<body.shellCount;i++){const p=body.pos[i];if(!insideXZ(p)||p.y<b.floorY-tolerance)return false;bottom=Math.min(bottom,p.y-body.particleRadius);}
    const a=body.geo.attributes.position;
    for(let i=0;i<a.count;i++){this._sample.fromBufferAttribute(a,i).add(body.com);if(!insideXZ(this._sample)||this._sample.y<b.floorY-tolerance)return false;}
    return Math.abs(bottom-b.floorY)<.12*this.radius;
  }
  reset(){
    this.endHold();const b=this.body;b.pos.forEach((p,i)=>{p.copy(this.initial[i]);b.prev[i].copy(p);});b.com.copy(this.start);b.prevCom.copy(this.start);b.velocity.set(0,0,0);b._acc=0;b.clearForces();
    this.accumulator=0;this.presses=[];this._profile=null;this.materialId='aqua';this._applyProfile(PROFILES.aqua);
    for(let i=0;i<90;i++){this.world.prepare(b);b.clearForces();b.update(1/60,this.world);}this._confineSkin();
  }
  metrics(){
    const b=this.body,a=b.geo.attributes.position,min=new THREE.Vector3(Infinity,Infinity,Infinity),max=new THREE.Vector3(-Infinity,-Infinity,-Infinity);let finite=true,particlePenetration=0,skinPenetration=0;
    for(const p of b.pos){finite=finite&&Number.isFinite(p.x+p.y+p.z);min.min(p);max.max(p);particlePenetration=Math.max(particlePenetration,this.world.penetration(p,b.particleRadius));}
    for(let i=0;i<a.count;i++){this._sample.fromBufferAttribute(a,i).add(b.com);finite=finite&&Number.isFinite(this._sample.x+this._sample.y+this._sample.z);skinPenetration=Math.max(skinPenetration,this.world.penetration(this._sample));}
    return {finite,volume:b._volume()/b.restVolume,center:b.com.toArray(),min:min.toArray(),max:max.toArray(),heldMode:this.heldMode,materialId:this.materialId,particlePenetration,skinPenetration,skinCorrection:this._skinCorrection,steps:this._steps};
  }
  dispose(){
    this.endHold();const geometries=new Set(),materials=new Set();this.group.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material);});this.group.removeFromParent();for(const g of geometries)g.dispose();for(const m of materials)m.dispose();this.world.starts.clear();
  }
}
