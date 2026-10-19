import * as THREE from 'three';
import {ShopPhysics} from '../../src/physics.js';
const H=1/120,layout={radius:1.05,start:[0,1.24,0],table:{minX:-1.95,maxX:1.95,minZ:-1.85,maxZ:1.85,floorY:.06},basket:null};
for(const material of ['aqua','coconut','honey']){
 const p=new ShopPhysics(new THREE.Scene(),layout);p.setMaterial(material);const rows=[];
 for(let i=0;i<1200;i++){p.step(H);if([59,239,599,1199].includes(i)){const m=p.metrics();rows.push({time:(i+1)/120,height:m.max[1]-m.min[1],width:m.max[0]-m.min[0],depth:m.max[2]-m.min[2],volume:m.volume,finite:m.finite});}}
 console.log(JSON.stringify({material,rows}));p.dispose();
}
