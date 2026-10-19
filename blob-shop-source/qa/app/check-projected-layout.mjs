// Geometric projection only. This does not launch a browser or render a frame.
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const root=new URL('../../',import.meta.url), source=fs.readFileSync(new URL('src/main.js',root),'utf8');
const literal=name=>vm.runInNewContext(`(${source.match(new RegExp(`const ${name} = ([\\s\\S]*?);`))[1]})`);
const layout=literal('layout'), stock=literal('stockData');
const cameraY=Number(source.match(/camera\.position[\s\S]*?new THREE\.Vector3\(0, ([\d.]+), 1\)/)[1]);
const bell=source.match(/bell\.position\.set\(([^)]+)\)/)[1].split(',').map(Number);
const props={},loader=new GLTFLoader();
for(const name of [...new Set(stock.map(x=>x.model))]){
 const b=fs.readFileSync(new URL(`assets/models/props/${name}.glb`,root));
 const g=await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');
 g.scene.scale.setScalar(2.1);g.scene.updateMatrixWorld(true);props[name]=new THREE.Box3().setFromObject(g.scene);
}
const results=[];
for(const [width,height] of [[360,740],[412,915],[590,900],[590,650]]){
 const worldHeight=height*.72,camera=new THREE.PerspectiveCamera(32,width/worldHeight,.1,80),target=new THREE.Vector3(0,.20,.02);
 const distance=7.65/(2*Math.tan(THREE.MathUtils.degToRad(16))*camera.aspect);
 camera.position.copy(target).add(new THREE.Vector3(0,cameraY,1).normalize().multiplyScalar(distance));camera.lookAt(target);camera.updateMatrixWorld(true);
 const project=p=>{const q=p.clone().project(camera);return {x:(q.x+1)*width/2,y:(1-q.y)*worldHeight/2+height*.28}};
 const sources=stock.map(s=>({type:s.type,...project(new THREE.Vector3(s.x,.125+props[s.model].getSize(new THREE.Vector3()).y/2,s.z))}));
 const bells=project(new THREE.Vector3(bell[0],bell[1]+.35,bell[2]));
 const interactive=[...sources,{type:'bell',...bells}],gaps=[];
 for(let i=0;i<interactive.length;i++){
   const p=interactive[i];assert.ok(p.x>=22&&p.x<=width-22&&p.y>=height*.28+22&&p.y<=height-53-22,`${p.type} out of play bounds`);
   for(let j=i+1;j<interactive.length;j++)gaps.push(Math.hypot(p.x-interactive[j].x,p.y-interactive[j].y));
 }
 const minimumCenterGap=Math.min(...gaps);assert.ok(minimumCenterGap>=44,`overlapping 44px targets: ${minimumCenterGap}`);
 results.push({viewport:[width,height],sources,bell:bells,minimumCenterGap,body:project(new THREE.Vector3(...layout.start)),basket:project(new THREE.Vector3(layout.basket.x,1,layout.basket.z))});
}
const report={method:'Three.js camera projection and parsed actual GLB bounds, no browser or raster render',cameraY,results};
fs.writeFileSync(new URL('qa/app/projected-layout.json',root),JSON.stringify(report,null,2));
console.log(JSON.stringify(results.map(r=>({viewport:r.viewport,minimumCenterGap:+r.minimumCenterGap.toFixed(3)}))));
