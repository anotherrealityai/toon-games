import * as THREE from 'three';

export function prepareEye(mesh) {
  const root = mesh.children[0], pupils = [];
  root.traverse(part => {
    if (/^eye_(iris|pupil|glint)/.test(part.name)) pupils.push({ part, origin: part.position.clone() });
  });
  mesh.userData.eye = { root, pupils, scale: root.scale.clone(), open: 1, gaze: [0, 0] };
}

export function poseEye(mesh, time, worldDirection = null) {
  const eye = mesh.userData.eye;
  if (!eye) return;
  const phase = time % 3.8;
  eye.open = phase < .18 ? Math.max(.07, Math.abs(phase - .09) / .09) : 1;
  const direction = worldDirection?.clone().applyQuaternion(mesh.quaternion.clone().invert());
  const x = direction ? THREE.MathUtils.clamp(direction.x * .025, -.018, .018) : Math.sin(Math.floor(time / 1.7) * 2.1) * .012;
  const z = direction ? THREE.MathUtils.clamp(direction.z * .025, -.022, .022) : Math.cos(Math.floor(time / 2.3) * 1.7) * .010;
  eye.gaze[0] += (x - eye.gaze[0]) * .14; eye.gaze[1] += (z - eye.gaze[1]) * .14;
  eye.root.scale.z = eye.scale.z * eye.open;
  for (const { part, origin } of eye.pupils) part.position.copy(origin).add(new THREE.Vector3(eye.gaze[0], 0, eye.gaze[1]));
}

export function restEye(mesh) {
  const eye = mesh.userData.eye;
  if (!eye) return;
  eye.root.scale.copy(eye.scale); eye.open = 1; eye.gaze = [0, 0];
  for (const { part, origin } of eye.pupils) part.position.copy(origin);
}
