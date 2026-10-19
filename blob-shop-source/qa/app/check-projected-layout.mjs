// Verify the current scene against read-only DOM/QA snapshots captured through Browser Use.
import fs from 'node:fs';
import assert from 'node:assert/strict';
const folder=new URL('./browser/v04/',import.meta.url),results=[];
for(const [name,width,height] of [['360',360,740],['412',412,915],['short',590,650],['desktop',1280,800]]){
 const {state,dom}=JSON.parse(fs.readFileSync(new URL(`layout-${name}.json`,folder)));
 assert.equal(state.viewport.width,width);assert.equal(state.viewport.height,height);
 const stage=dom.bounds['#shop'],dock=dom.bounds['#inventory'],bell=dom.bounds['#bell-control'],work=dom.workArea;
 assert.equal(state.sources.length,12);assert.equal(state.trays.length,3);
 assert.ok(dock.y>=height*.55&&dock.bottom<=height-20);
 assert.ok(bell.x>=stage.x+stage.width*.8&&bell.y<height*.12);
 assert.ok(state.body.screen.y>=work.top+stage.y&&state.body.screen.y<=work.bottom+stage.y);
 assert.ok(state.body.screen.x>=stage.x&&state.body.screen.x<=stage.right);
 assert.ok(state.sources.every(s=>s.minHitDiameter>=44));
 for(let i=0;i<3;i++){
  const visible=state.sources.slice(i*4,i*4+4).filter(s=>s.visible);
  assert.ok(visible.length>=2);assert.ok(state.trays[i].maxScroll>0);
  for(let a=0;a<visible.length;a++)for(let b=a+1;b<visible.length;b++)assert.ok(Math.abs(visible[a].x-visible[b].x)>=44);
 }
 results.push({viewport:[width,height],stageWidth:stage.width,minItemTarget:Math.min(...state.sources.map(s=>s.minHitDiameter)),workArea:work,trayTop:dock.y,bell:{x:bell.x,y:bell.y}});
}
fs.writeFileSync(new URL('./projected-layout.json',import.meta.url),JSON.stringify({method:'Browser Use read-only DOM and runtime QA snapshots; not real-device touch',results},null,2)+'\n');
console.log(JSON.stringify({passed:results.length,viewports:results.map(x=>({size:x.viewport,minTarget:x.minItemTarget}))}));
