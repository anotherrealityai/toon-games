import * as THREE from 'three';
import {ShopPhysics} from '../../src/physics.js';
const H=1/120,layout={radius:1.05,start:[0,1.24,.3],table:{minX:-3.95,maxX:3.95,minZ:-2.55,maxZ:2.55,floorY:.06},basket:null};
function distances(b){const out=[];for(let i=0;i<b.shellCount;i+=8)for(let j=i+8;j<b.shellCount;j+=8)out.push(b.pos[i].distanceTo(b.pos[j]));return out;}
for(const material of ['aqua','cherry','coconut']){
 const p=new ShopPhysics(new THREE.Scene(),layout);p.setMaterial(material);for(let i=0;i<180;i++)p.step(H);
 const baseline=distances(p.body),deform=()=>Math.sqrt(distances(p.body).reduce((sum,d,i)=>sum+(d-baseline[i])**2,0)/baseline.length);
 const l=p.surfacePoint(new THREE.Vector3(-1,.4,.25)),r=p.surfacePoint(new THREE.Vector3(1,.4,.25));
 p.beginPull(l,1);p.beginPull(r,2);p.setPullTarget(l.clone().add(new THREE.Vector3(-.8,.35,0)),1);p.setPullTarget(r.clone().add(new THREE.Vector3(.8,.35,0)),2);
 let short;for(let i=0;i<360;i++){p.step(H);if(i===29)short=deform();}
 const worked=deform();p.endHold();for(let i=0;i<360;i++)p.step(H);
 const retained=deform();console.log(JSON.stringify({material,short,worked,retained,ratio:retained/worked,metrics:p.metrics(),restRMS:Math.sqrt(p.body.springs.reduce((sum,s,i)=>sum+(s.rest/p.baseRest[i]-1)**2,0)/p.baseRest.length)}));p.dispose();
}
