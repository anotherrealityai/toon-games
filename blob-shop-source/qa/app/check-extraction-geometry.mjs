// Actual mesh geometry check, independent of DOM/pointer handling.
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {ShopPhysics} from '../../src/physics.js';
const root=new URL('../../',import.meta.url),source=fs.readFileSync(new URL('src/main.js',root),'utf8');
const layout=vm.runInNewContext(`(${source.match(/const layout = ([\s\S]*?);/)[1]})`);
const sim=new ShopPhysics(new THREE.Scene(),layout),b=fs.readFileSync(new URL('assets/models/props/duck.glb',root));
const {scene:model}=await new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');
model.scale.setScalar(2.1);const toy=new THREE.Group();toy.add(model);toy.updateMatrixWorld(true);
const center=new THREE.Box3().setFromObject(toy).getCenter(new THREE.Vector3());model.position.sub(center);
const original=sim.body.com.clone().add(new THREE.Vector3(-.40,-.12,.12));
sim.group.updateMatrixWorld(true);
const bodyBounds=new THREE.Box3().setFromObject(sim.mesh), cases=[];
for(const [name,delta,expected]of[['drag deeper inside',[.56,0,0],false],['partial exit',[-.70,0,0],false],['full exit',[-1.6,0,0],true]]){
 toy.position.copy(original).add(new THREE.Vector3(...delta));
 const distance=toy.position.distanceTo(original),itemBounds=new THREE.Box3().setFromObject(toy);
 const complete=distance>.55&&!bodyBounds.intersectsBox(itemBounds);
 assert.equal(complete,expected,name);cases.push({name,distance,overlapsBody:bodyBounds.intersectsBox(itemBounds),canFinishExtraction:complete});
}
sim.dispose();fs.writeFileSync(new URL('qa/app/extraction-geometry.json',root),JSON.stringify({method:'actual GLB/world Box3; pointer UI not tested',cases},null,2));console.log(JSON.stringify(cases));
