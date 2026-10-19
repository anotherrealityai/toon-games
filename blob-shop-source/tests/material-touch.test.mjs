import assert from 'node:assert/strict';
import * as THREE from 'three';
import { ShopPhysics } from '../src/physics.js';
import { prepareEye, poseEye, restEye } from '../src/eyes.js';

const H = 1 / 120;
const layout = { radius: 1.05, start: [0, 1.24, .3], table: { minX: -3.95, maxX: 3.95, minZ: -2.55, maxZ: 2.55, floorY: .06 }, basket: null };
const make = () => new ShopPhysics(new THREE.Scene(), layout);
const run = (sim, count) => { for (let i = 0; i < count; i++) sim.step(H); };
let checks = 0;
function check(name, fn) { fn(); checks++; console.log(`PASS ${name}`); }
function stable(sim) {
  const m = sim.metrics();
  assert.equal(m.finite, true); assert.ok(m.volume > .85 && m.volume < 1.15);
  assert.equal(m.particlePenetration, 0); assert.equal(m.skinPenetration, 0);
}
function distances(b) {
  const out = [];
  for (let i = 0; i < b.shellCount; i += 8) for (let j = i + 8; j < b.shellCount; j += 8) out.push(b.pos[i].distanceTo(b.pos[j]));
  return out;
}
function trial(material) {
  const sim = make();
  try {
    sim.setMaterial(material); run(sim, 180);
    const baseline = distances(sim.body);
    const deformation = () => Math.sqrt(distances(sim.body).reduce((sum, d, i) => sum + (d - baseline[i]) ** 2, 0) / baseline.length);
    const left = sim.surfacePoint(new THREE.Vector3(-1, .4, .25)), right = sim.surfacePoint(new THREE.Vector3(1, .4, .25));
    sim.beginPull(left, 17); sim.beginPull(right, 29);
    sim.setPullTarget(left.clone().add(new THREE.Vector3(-.8, .35, 0)), 17);
    sim.setPullTarget(right.clone().add(new THREE.Vector3(.8, .35, 0)), 29);
    run(sim, 30); const early = deformation();
    run(sim, 330); stable(sim); const worked = deformation();
    sim.endHold(); run(sim, 360); stable(sim); const residual = deformation();
    return { early, worked, residual, retained: residual / worked };
  } finally { sim.dispose(); }
}
check('two independent grips squeeze, release one, and keep the other active', () => {
  const sim = make();
  try {
    const left = sim.surfacePoint(new THREE.Vector3(-1, .5, .4)), right = sim.surfacePoint(new THREE.Vector3(1, .5, .4));
    sim.beginPull(left, 17); sim.beginPull(right, 29);
    assert.equal(sim.metrics().pullCount, 2);
    sim.setPullTarget(left.clone().add(new THREE.Vector3(.45, .2, 0)), 17);
    sim.setPullTarget(right.clone().add(new THREE.Vector3(-.45, -.1, 0)), 29); run(sim, 90); stable(sim);
    const second = sim._pulls.get(29), oldTarget = second.target.clone();
    sim.endPull(17); assert.equal(sim.metrics().pullCount, 1); assert.equal(sim.heldMode, 'pull');
    assert.deepEqual(sim.body.grabParticles, [...second.indices].sort((a, b) => a - b));
    sim.setPullTarget(right.clone().add(new THREE.Vector3(.4, .5, .3)), 29); run(sim, 90);
    assert.ok(second.target.distanceTo(oldTarget) > .3); stable(sim);
    sim.endPull(999); assert.equal(sim.metrics().pullCount, 1);
    sim.endPull(29); assert.equal(sim.heldMode, 'none'); assert.equal(sim.body.grabActive, false);
    assert.ok(sim.body.grabbedMask.every(v => !v));
  } finally { sim.dispose(); }
});
check('overlapping grabs have bounded force and cancel/reset clears every pointer', () => {
  const sim = make();
  try {
    sim.endPull('unknown');
    const point = sim.surfacePoint(new THREE.Vector3(0, 1, .4));
    for (const id of [1, 2, 3]) sim.beginPull(point, id);
    for (let frame = 0; frame < 480; frame++) {
      for (const id of [1, 2, 3]) sim.setPullTarget(point.clone().add(new THREE.Vector3(Math.sin(frame * .09 + id) * 2, Math.cos(frame * .05) * .6, Math.cos(frame * .03 + id))), id);
      if (frame === 120) sim.setMaterial('coconut');
      sim.step(H); if (frame % 30 === 0) stable(sim);
    }
    assert.equal(sim.metrics().pullCount, 3);
    sim.endHold(); assert.equal(sim.metrics().pullCount, 0); assert.equal(sim.heldMode, 'none');
    sim.beginPull(point, 8); sim.reset(); assert.equal(sim.metrics().pullCount, 0);
    assert.equal(sim.materialId, 'aqua'); assert.deepEqual(sim.body.springs.map(s => s.rest), sim.baseRest); stable(sim);
  } finally { sim.dispose(); }
});
check('coconut resists a short pull and retains the worked shape after release', () => {
  const aqua = trial('aqua'), coconut = trial('coconut');
  assert.ok(coconut.early < aqua.early * .5, JSON.stringify({ aqua, coconut }));
  assert.ok(coconut.worked > .15, 'coconut must still be workable');
  assert.ok(coconut.retained > .55 && coconut.retained > aqua.retained + .2);
  console.log(JSON.stringify({ aqua, coconut }));
});
check('changing materials preserves the body, anchors and active fingers, then restores elastic rest lengths', () => {
  const sim = make();
  try {
    const body = sim.body, position = body.pos, geometry = body.geo;
    const anchor = sim.anchorAt(sim.surfacePoint(new THREE.Vector3(0, .7, 1)));
    const indices = [...anchor.indices];
    sim.beginPull(sim.surfacePoint(new THREE.Vector3(-1, .3, .4)), 1);
    sim.beginPull(sim.surfacePoint(new THREE.Vector3(1, .3, .4)), 2);
    sim.setMaterial('coconut'); run(sim, 120);
    assert.equal(sim.metrics().pullCount, 2); assert.equal(sim.body, body); assert.equal(body.pos, position); assert.equal(body.geo, geometry);
    assert.deepEqual(anchor.indices, indices); assert.ok(Number.isFinite(sim.anchorPose(anchor).position.length()));
    const rest = body.springs.map(s => s.rest); sim.setMaterial('coconut'); assert.deepEqual(body.springs.map(s => s.rest), rest);
    sim.setMaterial('cherry'); run(sim, 120); assert.deepEqual(body.springs.map(s => s.rest), sim.baseRest);
    assert.equal(sim.metrics().pullCount, 2); stable(sim);
  } finally { sim.dispose(); }
});
check('eye gaze and blink animate only the eye parts and preserve attachment transforms', () => {
  const mesh = new THREE.Group(), root = new THREE.Group(); mesh.add(root); root.scale.setScalar(2.1);
  for (const name of ['eye_white', 'eye_iris', 'eye_pupil', 'eye_glint']) { const part = new THREE.Group(); part.name = name; root.add(part); }
  mesh.position.set(2, 3, 4); mesh.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), .4);
  const position = mesh.position.clone(), rotation = mesh.quaternion.clone(); prepareEye(mesh);
  poseEye(mesh, .09, new THREE.Vector3(1, 0, 1)); assert.ok(mesh.userData.eye.open < .1);
  assert.ok(root.getObjectByName('eye_pupil').position.length() > 0);
  assert.equal(root.getObjectByName('eye_white').position.length(), 0);
  poseEye(mesh, .5); assert.equal(mesh.userData.eye.open, 1);
  assert.ok(mesh.position.equals(position)); assert.ok(mesh.quaternion.equals(rotation));
  restEye(mesh); assert.deepEqual(root.scale.toArray(), [2.1, 2.1, 2.1]); assert.equal(root.getObjectByName('eye_pupil').position.length(), 0);
});
console.log(`${checks} material/touch/eye groups passed.`);
