// Geometric projection only; browser screenshots verify the rendered composition separately.
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {ShopPhysics} from '../../src/physics.js';
const root=new URL('../../',import.meta.url),source=fs.readFileSync(new URL('src/main.js',root),'utf8');
const literal=name=>vm.runInNewContext(`(${source.match(new RegExp(`const ${name} = ([\\s\\S]*?);`))[1]})`);
const layout=literal('layout'),stock=literal('stockData');
const halfWidth=Number(source.match(/halfWidth = ([\d.]+)/)[1]);
const tilt=Number(source.match(/camera\.position[\s\S]*?new THREE\.Vector3\(0, ([\d.]+), 1\)/)[1]);
const bell=source.match(/bell\.position\.set\(([^)]+)\)/)[1].split(',').map(Number);
const props={},loader=new GLTFLoader(),sim=new ShopPhysics(new THREE.Scene(),layout);
for(let i=0;i<240;i++)sim.step(1/120);
for(const name of [...new Set(stock.map(x=>x.model))]){
 const b=fs.readFileSync(new URL(`assets/models/props/${name}.glb`,root));
 const g=await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');
 g.scene.scale.setScalar(2.1);g.scene.updateMatrixWorld(true);props[name]=new THREE.Box3().setFromObject(g.scene);
}
const results=[];
for(const [width,height]of[[360,740],[412,915],[1280,800],[590,650]]){
 const stageWidth=Math.min(width,590,height*.72),stageX=(width-stageWidth)/2,worldHeight=height*.75,aspect=stageWidth/worldHeight;
 const camera=new THREE.OrthographicCamera(-halfWidth,halfWidth,halfWidth/aspect,-halfWidth/aspect,.1,80),target=new THREE.Vector3(0,.20,.10);
 camera.position.copy(target).add(new THREE.Vector3(0,tilt,1).normalize().multiplyScalar(12));camera.lookAt(target);camera.updateMatrixWorld(true);
 const project=p=>{const q=p.clone().project(camera);return{x:stageX+(q.x+1)*stageWidth/2,y:(1-q.y)*worldHeight/2+height*.15}};
 const sources=stock.map(s=>({type:s.type,...project(new THREE.Vector3(s.x,.125+props[s.model].getSize(new THREE.Vector3()).y/2,s.z))}));
 const bells=project(new THREE.Vector3(bell[0],bell[1]+.35,bell[2])),interactive=[...sources,{type:'bell',...bells}],gaps=[];
 for(let i=0;i<interactive.length;i++){
  const p=interactive[i];assert.ok(p.x>=stageX+22&&p.x<=stageX+stageWidth-22&&p.y>=height*.15+22&&p.y<=height-75,`${p.type} out of play bounds`);
  for(let j=i+1;j<interactive.length;j++)gaps.push(Math.hypot(p.x-interactive[j].x,p.y-interactive[j].y));
 }
 const minimumCenterGap=Math.min(...gaps),body=project(sim.body.com);
 assert.ok(minimumCenterGap>=44,`overlapping 44px targets: ${minimumCenterGap}`);
 assert.ok(Math.abs(body.x-width/2)<10&&body.y>height*.45&&body.y<height*.60,'working body is not central');
 results.push({viewport:[width,height],stageWidth,sources,bell:bells,minimumCenterGap,body});
}
sim.dispose();fs.writeFileSync(new URL('qa/app/projected-layout.json',root),JSON.stringify({method:'Orthographic projection and actual GLB bounds, no browser execution',results},null,2));
console.log(JSON.stringify(results.map(r=>({viewport:r.viewport,minimumCenterGap:+r.minimumCenterGap.toFixed(3),body:r.body}))));
