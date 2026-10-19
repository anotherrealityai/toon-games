import './style.css';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { ShopPhysics } from './physics.js';
import { Assembly, OrderSession, NAMES, TOYS, DETAILS, compareOrder } from './orders.js';
import { loadModels, makeProp, renderIcons, SCALE, MODEL_TYPES } from './assets.js';
import { Customer } from './customer.js';
import { ShopAudio } from './audio.js';
import { prepareEye, poseEye, restEye } from './eyes.js';
import { makeInventory } from './inventory.js';

const $ = selector => document.querySelector(selector);
const world = $('#world'), shop = $('#shop');
const qaEnabled = new URLSearchParams(location.search).has('qa');
const audio = new ShopAudio(), customer = new Customer();
let session = new OrderSession();
const assembly = new Assembly(), items = new Map(), stock = [];
const scene = new THREE.Scene(), raycaster = new THREE.Raycaster();
const camera = new THREE.OrthographicCamera(-2.9, 2.9, 4.5, -4.5, .1, 80);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
renderer.setClearColor(0xf7e3c5, 0);
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.8));
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = .88;
world.append(renderer.domElement);
renderer.domElement.setAttribute('aria-label', 'Мягкий блоб на рабочем поле');
const pmrem = new THREE.PMREMGenerator(renderer);
const room = new RoomEnvironment();
const environment = pmrem.fromScene(room, .04).texture;
scene.environment = environment; room.dispose(); pmrem.dispose();
const ambient = new THREE.HemisphereLight(0xfffae8, 0x9ba1a5, 1.25); scene.add(ambient);
const key = new THREE.DirectionalLight(0xfff0d8, 2.7);
key.position.set(-3, 8, 5); key.castShadow = true;
key.shadow.mapSize.set(1024, 1024); key.shadow.camera.left = -5; key.shadow.camera.right = 5;
key.shadow.camera.top = 5; key.shadow.camera.bottom = -5; key.shadow.camera.near = .5; key.shadow.camera.far = 20;
key.shadow.normalBias = .025; key.shadow.bias = -.0004; key.shadow.radius = 3;
key.target.position.set(0, 0, 0); scene.add(key, key.target);
const fill = new THREE.DirectionalLight(0xe5f0ff, .8); fill.position.set(4, 4, -4); scene.add(fill);

const layout = {
  radius: 1.05, start: [0, 1.24, 0],
  table: { minX: -1.95, maxX: 1.95, minZ: -1.85, maxZ: 1.85, floorY: .06 },
  basket: null,
};
let physics, models, icons, inventory;
let frameAnchor, initialFrameInverse, idCounter = 0;
let gesture = null, accepting = false, clockTime = 0, statusUntil = 0;
let deliveryTime = 0, lastTime = 0, ready = false, lastQaUpdate = 0;
const bodyGestures = new Map();
let gazeTarget = null, gazeTime = 0;
const pointer = new THREE.Vector2(), plane = new THREE.Plane();
const up = new THREE.Vector3(0, 1, 0);
const rayPoint = new THREE.Vector3(), viewDirection = new THREE.Vector3();


function message(text, error = false, duration = 3.4) {
  $('#status').textContent = text; $('#status').classList.toggle('error', error); $('#status').classList.add('visible');
  statusUntil = clockTime + duration;
}
function screenPosition(position) {
  const p = position.clone().project(camera), rect = world.getBoundingClientRect(), stage = shop.getBoundingClientRect();
  return { x: (p.x + 1) * rect.width / 2 + rect.left - stage.left, y: (1 - p.y) * rect.height / 2 + rect.top - stage.top };
}
function clientPosition(position) {
  const screen = screenPosition(position), stage = shop.getBoundingClientRect();
  return { x: screen.x + stage.left, y: screen.y + stage.top };
}
function setRay(event) {
  const rect = world.getBoundingClientRect();
  pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
  raycaster.setFromCamera(pointer, camera);
}
function pointOnPlane(event, origin, horizontal = false) {
  setRay(event);
  if (horizontal) plane.setFromNormalAndCoplanarPoint(up, origin);
  else { camera.getWorldDirection(viewDirection); plane.setFromNormalAndCoplanarPoint(viewDirection, origin); }
  return raycaster.ray.intersectPlane(plane, rayPoint)?.clone() || origin.clone();
}
function bodyHit(event) { setRay(event); return raycaster.intersectObject(physics.mesh, false)[0] || null; }
function resize() {
  cancelGesture();
  const rect = world.getBoundingClientRect();
  renderer.setSize(rect.width, rect.height);
  const stage = shop.getBoundingClientRect();
  const workTop = Math.max($('#customer').getBoundingClientRect().bottom, $('.wish').getBoundingClientRect().bottom) + 10;
  const workBottom = $('#inventory').getBoundingClientRect().top - 12;
  const workHeight = Math.max(150, workBottom - workTop);
  const pixelsPerUnit = Math.min(rect.width / 4.1, workHeight / 2.85), halfWidth = rect.width / (2 * pixelsPerUnit);
  const aspect = rect.width / rect.height;
  camera.left = -halfWidth; camera.right = halfWidth;
  camera.top = halfWidth / aspect; camera.bottom = -halfWidth / aspect;
  const referenceY = workTop + workHeight * .48;
  const screenUp = new THREE.Vector3(0, 1, -1.35).normalize();
  const target = new THREE.Vector3(0, .65, 0).addScaledVector(screenUp, -(rect.top + rect.height / 2 - referenceY) / pixelsPerUnit);
  camera.position.copy(target).add(new THREE.Vector3(0, 1.35, 1).normalize().multiplyScalar(12));
  camera.lookAt(target); camera.updateProjectionMatrix();
  shop.dataset.workArea = JSON.stringify({ top: workTop - stage.top, bottom: workBottom - stage.top, referenceY: referenceY - stage.top, pixelsPerUnit });
}

function makeBodyFrame() {
  frameAnchor = physics.anchorAt(physics.surfacePoint(new THREE.Vector3(0, .3, 1)));
  initialFrameInverse = physics.anchorPose(frameAnchor).quaternion.clone().invert();
}

function makeHighlight() {
  const mesh = new THREE.Mesh(new THREE.TorusGeometry(.46, .018, 6, 48), new THREE.MeshBasicMaterial({ color: '#fff4c7', transparent: true, opacity: .9, depthTest: false }));
  mesh.renderOrder = 10; mesh.visible = false; scene.add(mesh); return mesh;
}
const highlight = makeHighlight();
function showHighlight(object) {
  if (!object) { highlight.visible = false; return; }
  highlight.visible = true; highlight.position.copy(object.position);
  const size = object.userData.radius || .35;
  highlight.scale.setScalar(Math.max(.7, size / .46 * 1.08));
  highlight.quaternion.copy(camera.quaternion);
}

function createItem(type, modelType) {
  const mesh = makeProp(models, modelType || (MODEL_TYPES[type] || type), true);
  // The translucent shell's opaque shadow map would darken toys inside it.
  if (TOYS.has(type)) mesh.traverse(part => { if (part.isMesh) part.receiveShadow = false; });
  if (type === 'eye') prepareEye(mesh);
  const item = { id: `item-${++idCounter}`, type, mesh, state: 'held', anchor: null, slot: null, elapsed: 0 };
  mesh.userData.itemId = item.id; scene.add(mesh); items.set(item.id, item); return item;
}
function discard(item) { scene.remove(item.mesh); items.delete(item.id); }
function returnItem(item) {
  item.state = 'returning'; item.elapsed = 0; item.start = item.mesh.position.clone();
  const rect = stock.find(source => source.type === item.type).element.getBoundingClientRect();
  item.destination = pointOnPlane({ clientX: rect.x + rect.width / 2, clientY: rect.y + rect.height / 2 }, physics.body.com);
  item.mesh.visible = true;
}
function attachItem(item, hit) {
  if (!assembly.reserve(item.id, item.type)) return false;
  item.anchor = physics.anchorAt(hit.point, hit.faceIndex);
  item.state = 'attached'; item.elapsed = 0;
  // External GLB pivots are at the attachment base, unlike held/inside toys.
  const root = item.mesh.children[0]; root.position.set(0, 0, 0);
  assembly.commit(item.id); physics.pressAt(hit.point, .35, 11);
  audio.play('soft'); updateRecipe(); return true;
}
function chooseSlot() {
  const occupied = new Set([...items.values()].filter(item => item.slot !== null && ['absorbing', 'inside', 'extracting'].includes(item.state)).map(item => item.slot));
  return [0, 1, 2].find(index => !occupied.has(index));
}
function startAbsorption(item, hit) {
  if (TOYS.has(item.type)) {
    if (!assembly.reserve(item.id, item.type)) {
      message('Внутри уже три игрушки. Вытяните одну, чтобы добавить новую.', true); audio.play('error'); returnItem(item); return;
    }
    item.slot = chooseSlot();
  } else item.materialSequence = assembly.nextMaterial();
  item.state = 'absorbing'; item.elapsed = 0; item.start = item.mesh.position.clone();
  item.contactDirection = hit.point.clone().sub(physics.body.com).normalize();
  item.contacted = false; customer.setWorking(true);
}
function releaseItem(item, event) {
  item.mesh.visible = true;
  const hit = bodyHit(event);
  if (hit) {
    if (DETAILS.has(item.type)) attachItem(item, hit);
    else startAbsorption(item, hit);
    return;
  }
  // A small ray/sphere capture margin helps a real throw at the soft silhouette,
  // but the release must still be near the visible body and away from stock.
  setRay(event);
  const distance = raycaster.ray.distanceToPoint(physics.body.com);
  if (!DETAILS.has(item.type) && distance < 1.13 && item.mesh.position.distanceTo(physics.body.com) < 2.5) {
    const near = raycaster.ray.closestPointToPoint(physics.body.com, new THREE.Vector3());
    const direction = near.sub(physics.body.com); if (direction.lengthSq() < .001) direction.copy(camera.position).sub(physics.body.com);
    startAbsorption(item, { point: physics.surfacePoint(direction.normalize()) });
  } else { returnItem(item); audio.play('soft'); }
}
function insideTarget(item) {
  if (physics.materialId === 'honey') {
    // A flowing puddle does not carry a fixed material frame like elastic gel.
    // Keep the rigid toys spread out and partly submerged above the table.
    const offsets = [[-.62, -.25], [.62, -.25], [0, .50]], offset = offsets[item.slot || 0];
    const position = physics.body.com.clone(); position.x += offset[0]; position.z += offset[1];
    position.y = Math.max(position.y, layout.table.floorY + item.mesh.userData.radius + .02);
    return { position, rotation: new THREE.Quaternion() };
  }
  const offsets = [new THREE.Vector3(-.40, .22, -.24), new THREE.Vector3(.40, .22, -.24), new THREE.Vector3(0, .58, -.16)];
  const rotation = physics.anchorPose(frameAnchor).quaternion.clone().multiply(initialFrameInverse);
  const offset = offsets[item.slot || 0].applyQuaternion(rotation), radius = item.mesh.userData.radius * .72;
  const target = physics.body.com.clone().add(offset);
  // A rigid toy keeps its modeled size. Its centre is confined instead of scaling
  // the toy down when the shell is squeezed or physically turned.
  for (let i = 0; i < 4 && !physics.containsSphere(target, radius); i++) target.lerp(physics.body.com, .45);
  return { position: target, rotation };
}
function updateItems(dt) {
  for (const item of items.values()) {
    if (item.state === 'attached') {
      const pose = physics.anchorPose(item.anchor);
      item.mesh.position.copy(pose.position); item.mesh.quaternion.copy(pose.quaternion);
      if (item.type === 'eye') poseEye(item.mesh, clockTime, gazeTarget && clockTime - gazeTime < 2 ? gazeTarget.clone().sub(pose.position) : null);
    } else if (item.state === 'inside') {
      const target = insideTarget(item);
      item.mesh.position.lerp(target.position, 1 - Math.exp(-18 * dt)); item.mesh.quaternion.slerp(target.rotation, 1 - Math.exp(-18 * dt));
    } else if (item.state === 'absorbing') {
      item.elapsed += dt;
      const contact = physics.surfacePoint(item.contactDirection), toy = TOYS.has(item.type);
      if (item.elapsed < .23) item.mesh.position.lerpVectors(item.start, contact, THREE.MathUtils.smoothstep(item.elapsed / .23, 0, 1));
      else {
        if (!item.contacted) { item.contacted = true; physics.pressAt(contact, .48, 24); audio.play('pop'); }
        const amount = THREE.MathUtils.smoothstep((item.elapsed - .23) / .62, 0, 1);
        const target = toy ? insideTarget(item).position : physics.body.com;
        item.mesh.position.lerpVectors(contact, target, amount);
        if (!toy) item.mesh.scale.setScalar(1 - amount * .98);
        if (amount >= 1) {
          if (toy) { assembly.commit(item.id); item.state = 'inside'; }
          else {
            if (assembly.applyMaterial(item.type, item.materialSequence)) { physics.setMaterial(item.type); audio.play('soft'); }
            discard(item);
          }
          updateRecipe();
        }
      }
    } else if (item.state === 'returning') {
      item.elapsed += dt; const amount = Math.min(1, item.elapsed / .3);
      item.mesh.position.lerpVectors(item.start, item.destination, THREE.MathUtils.smoothstep(amount, 0, 1));
      item.mesh.scale.setScalar(1 - amount * .85);
      if (amount >= 1) discard(item);
    } else if (item.state === 'dropping') {
      item.elapsed += dt;
      item.mesh.position.lerpVectors(item.start, item.destination, THREE.MathUtils.smoothstep(item.elapsed / .22, 0, 1));
      if (item.elapsed >= .22) item.state = 'loose';
    }
  }
}

function updateRecipe() {
  const order = session.order;
  if (!order) return;
  const actual = assembly.snapshot();
  $('#order-number').textContent = `Заказ ${session.index + 1} из 3`;
  $('#wish-text').textContent = session.index ? order.title : 'Мне, пожалуйста…';
  const recipe = [{ type: order.material, count: 1, group: 'material' }];
  for (const group of ['details', 'toys']) for (const [type, count] of Object.entries(order[group])) recipe.push({ type, count, group });
  $('#recipe').classList.toggle('many', recipe.length > 4);
  $('#recipe').replaceChildren(...recipe.map(({ type, count, group }) => {
    const element = document.createElement('div'); element.className = `recipe-item ${group}`;
    const correct = group === 'material' ? actual.material === type : actual[group][type] === count;
    if (correct) element.classList.add('ok');
    const img = document.createElement('img'); img.src = icons[MODEL_TYPES[type] || type]; img.alt = NAMES[type];
    element.append(img);
    if (count > 1) { const badge = document.createElement('b'); badge.textContent = count; element.append(badge); }
    const name = document.createElement('span'); name.textContent = NAMES[type]; element.append(name); return element;
  }));
  $('#order-dots').setAttribute('aria-label', `Выполнено ${session.accepted.size} из 3`);
  [...$('#order-dots').children].forEach((dot, index) => { dot.className = index < session.index ? 'done' : index === session.index ? 'current' : ''; });
  updateHint();
}
function updateHint() {
  if (!session.order) return;
  const actual = assembly.snapshot(), result = compareOrder(session.order, actual);
  let text = 'Всё готово. Позвоните в колокольчик';
  if (gesture?.mode === 'extract') text = 'Вытяните выбранный предмет за край блоба';
  else if (!actual.material || result.wrongMaterial) text = 'Бросьте капсулу на блоба';
  else if (result.extra.length) text = 'Лишнее можно выбрать и вытянуть';
  else if (result.missing.some(item => DETAILS.has(item.type))) text = 'Прикрепите детали в любом месте';
  else if (result.missing.length) text = 'Бросьте игрушку — блоб её обнимет';
  $('#gesture-hint').textContent = text;
}
function explainMismatch(result) {
  const list = entries => entries.map(entry => `${NAMES[entry.type].toLowerCase()} ×${entry.count}`).join(', ');
  const parts = [];
  if (result.wrongMaterial) parts.push(`Нужен материал «${NAMES[result.material]}»`);
  if (result.missing.length) parts.push(`Не хватает: ${list(result.missing)}`);
  if (result.extra.length) parts.push(`Лишнее: ${list(result.extra)}`);
  return parts.join('. ');
}
function ringBell() {
  audio.play('bell');
  const result = session.ring(assembly);
  if (result.status === 'already') return;
  if (result.status === 'settling') { message('Подождите, блоб ещё впитывает добавку.', false, 2); return; }
  if (result.status === 'incorrect') { message(explainMismatch(result), true, 6); customer.react('error', 3); return; }
  if (result.status === 'accepted') {
    accepting = true; deliveryTime = 0; customer.react('receive_start', .75);
    message('Какой чудесный! Спасибо ♡', false, 2.2); audio.play('success');
  }
}
function clearAssembly() {
  cancelGesture();
  for (const item of items.values()) scene.remove(item.mesh);
  items.clear(); assembly.clear(); physics.reset();
  makeBodyFrame(); updateRecipe();
}
function nextOrder() {
  session.advance(); accepting = false;
  if (session.complete) {
    $('#complete').hidden = false; customer.react('thanks', 100); $('#gesture-hint').textContent = 'До встречи в мастерской';
    return;
  }
  clearAssembly(); resize(); customer.react('idle', 1); message('А теперь — ещё один маленький друг', false, 2.8);
}

function nearestScreen(event, candidates, minimumRadius) {
  let nearest = null, best = Infinity;
  for (const entry of candidates) {
    const object = entry.mesh, position = object.getWorldPosition(new THREE.Vector3());
    const screen = clientPosition(position), distance = Math.hypot(event.clientX - screen.x, event.clientY - screen.y);
    if (distance < minimumRadius && distance < best) { best = distance; nearest = entry; }
  }
  return nearest;
}
function pickItem(event) {
  const candidates = [...items.values()].filter(item => ['attached', 'inside', 'loose'].includes(item.state));
  setRay(event);
  const hits = raycaster.intersectObjects(candidates.map(item => item.mesh), true);
  if (hits.length) {
    const hit = hits[0]; let object = hit.object;
    while (object && !object.userData.itemId) object = object.parent;
    return items.get(object?.userData.itemId);
  }
  return nearestScreen(event, candidates, 14);
}
function takeFromInventory(type, event, element) {
  if (!ready || accepting || session.complete || gesture || bodyGestures.size || $('#help-dialog').open) return;
  audio.unlock(); event.preventDefault(); renderer.domElement.setPointerCapture(event.pointerId);
  const item = createItem(type), origin = physics.body.com.clone();
  item.mesh.position.copy(pointOnPlane(event, origin)); item.mesh.visible = false;
  const start = { x: event.clientX, y: event.clientY };
  gesture = { id: event.pointerId, mode: 'item', item, fromInventory: true, start, last: start, elapsed: 0, planeOrigin: origin, initialPosition: item.mesh.position.clone(), offset: new THREE.Vector3(), moved: false };
  $('#drag-preview img').src = element.querySelector('img').src;
  $('#drag-preview').hidden = false; movePreview(event);
  customer.setWorking(true); audio.play('pick');
}
function movePreview(event) {
  const rect = shop.getBoundingClientRect(), preview = $('#drag-preview');
  preview.style.left = `${event.clientX - rect.left}px`; preview.style.top = `${event.clientY - rect.top}px`;
}
function pointerDown(event) {
  if (!ready || accepting || session.complete || $('#help-dialog').open) return;
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  if (gesture) return;
  if (bodyGestures.size) {
    const hit = bodyHit(event);
    if (hit) startBodyPull(event, hit);
    return;
  }
  audio.unlock(); event.preventDefault(); renderer.domElement.setPointerCapture(event.pointerId);
  const start = { x: event.clientX, y: event.clientY };
  const selected = pickItem(event);
  if (selected) {
    const extracting = ['attached', 'inside'].includes(selected.state);
    if (selected.type === 'eye') restEye(selected.mesh);
    if (extracting) assembly.beginExtraction(selected.id);
    gesture = { id: event.pointerId, mode: extracting ? 'extract' : 'item', item: selected, start, last: start, elapsed: 0, initialPosition: selected.mesh.position.clone(), initialQuaternion: selected.mesh.quaternion.clone(), originalState: selected.state, moved: false };
    selected.state = extracting ? 'extracting' : 'held';
    gesture.planeOrigin = selected.mesh.position.clone();
    gesture.offset = selected.mesh.position.clone().sub(pointOnPlane(event, gesture.planeOrigin));
    showHighlight(selected.mesh); message(`${NAMES[selected.type]} выбрана. Потяните наружу.`, false, 1.2);
    audio.play('pick'); updateHint(); return;
  }
  const hit = bodyHit(event);
  if (hit) startBodyPull(event, hit);
  else gesture = { id: event.pointerId, mode: 'empty', start, last: start, elapsed: 0 };
}
function startBodyPull(event, hit) {
  event.preventDefault(); renderer.domElement.setPointerCapture(event.pointerId);
  physics.beginPull(hit.point, event.pointerId);
  bodyGestures.set(event.pointerId, { planeOrigin: hit.point.clone() });
  highlight.visible = false; customer.setWorking(true); audio.play('soft');
}
function endBodyPull(id) {
  if (!bodyGestures.delete(id)) return false;
  physics.endPull(id); releaseCapture(id); finishGesture(); return true;
}

function pointerMove(event) {
  if (!ready) return;
  gazeTarget = pointOnPlane(event, physics.body.com); gazeTime = clockTime;
  const bodyGesture = bodyGestures.get(event.pointerId);
  if (bodyGesture) {
    event.preventDefault();
    const target = pointOnPlane(event, bodyGesture.planeOrigin); target.y = Math.max(.1, target.y);
    physics.setPullTarget(target, event.pointerId); return;
  }
  if (bodyGestures.size) return;
  if (!gesture || gesture.id !== event.pointerId) {
    if (event.pointerType === 'mouse' && !accepting) {
      const chosen = pickItem(event);
      renderer.domElement.style.cursor = chosen || bodyHit(event) ? 'grab' : 'default';
      showHighlight(chosen?.mesh || null);
    }
    return;
  }
  event.preventDefault();
  gesture.last = { x: event.clientX, y: event.clientY };
  const distance = Math.hypot(event.clientX - gesture.start.x, event.clientY - gesture.start.y);
  if (distance > 9) gesture.moved = true;
  if (gesture.mode === 'item' || gesture.mode === 'extract') {
    const position = pointOnPlane(event, gesture.planeOrigin).add(gesture.offset);
    position.y = Math.max(.26, position.y); gesture.item.mesh.position.copy(position);
    if (gesture.fromInventory) movePreview(event); else showHighlight(gesture.item.mesh);
    return;
  }

}
function pointerUp(event) {
  if (endBodyPull(event.pointerId)) { event.preventDefault(); return; }
  if (!gesture || gesture.id !== event.pointerId) return;
  event.preventDefault(); const current = gesture;
  if (current.mode === 'item') {
    if (current.moved) releaseItem(current.item, event);
    else if (current.fromInventory) discard(current.item);
    else if (current.originalState === 'loose') { current.item.state = 'loose'; current.item.mesh.position.copy(current.initialPosition); }
    else returnItem(current.item);
  }
  else if (current.mode === 'extract') {
    const distance = current.item.mesh.position.distanceTo(current.initialPosition);
    const outsideBody = !new THREE.Box3().setFromObject(physics.mesh).intersectsBox(new THREE.Box3().setFromObject(current.item.mesh));
    if (distance > .55 && current.moved && outsideBody) {
      assembly.remove(current.item.id); current.item.slot = null; current.item.state = 'dropping'; current.item.elapsed = 0;
      current.item.start = current.item.mesh.position.clone();
      const floor = .18 + current.item.mesh.userData.radius;
      current.item.destination = pointOnPlane(event, new THREE.Vector3(0, floor, 0), true);
      const margin = current.item.mesh.userData.radius + .15, table = layout.table;
      current.item.destination.x = THREE.MathUtils.clamp(current.item.destination.x, table.minX + margin, table.maxX - margin);
      current.item.destination.z = THREE.MathUtils.clamp(current.item.destination.z, table.minZ + margin, table.maxZ - margin);
      const bodyBounds = new THREE.Box3().setFromObject(physics.mesh).expandByScalar(margin), destination = current.item.destination;
      if (destination.x > bodyBounds.min.x && destination.x < bodyBounds.max.x && destination.z > bodyBounds.min.z && destination.z < bodyBounds.max.z) {
        destination.z = bodyBounds.max.z <= table.maxZ - margin ? bodyBounds.max.z : bodyBounds.min.z;
      }
      current.item.destination.y = floor;
      const dock = $('#inventory').getBoundingClientRect();
      if (event.clientY >= dock.top || destination.x < table.minX + margin || destination.x > table.maxX - margin || destination.z < table.minZ + margin || destination.z > table.maxZ - margin) returnItem(current.item);
      audio.play('pop'); message(current.item.state === 'returning' ? 'Предмет вернулся в свой лоток.' : 'Готово. Предмет можно взять и бросить снова.', false, 2.2);
    } else {
      assembly.cancelExtraction(current.item.id); current.item.state = current.originalState;
      message('Вытяните предмет за край блоба.', false, 2.2);
    }
    updateRecipe();
  }
  gesture = null; releaseCapture(current.id); finishGesture();
}
function releaseCapture(id) { if (renderer.domElement.hasPointerCapture(id)) renderer.domElement.releasePointerCapture(id); }
function finishGesture() { highlight.visible = false; $('#drag-preview').hidden = true; updateHint(); }
function cancelGesture() {
  inventory?.cancel();
  if (!physics) return;
  for (const id of [...bodyGestures.keys()]) endBodyPull(id);
  if (!gesture) return;
  const current = gesture; gesture = null;
  physics.endHold();
  if (current.mode === 'item') {
    if (current.originalState === 'loose') { current.item.state = 'loose'; current.item.mesh.position.copy(current.initialPosition); }
    else discard(current.item);
  } else if (current.mode === 'extract') {
    assembly.cancelExtraction(current.item.id); current.item.state = current.originalState;
    current.item.mesh.position.copy(current.initialPosition); current.item.mesh.quaternion.copy(current.initialQuaternion);
  }
  releaseCapture(current.id); finishGesture();
}
renderer.domElement.addEventListener('pointerdown', pointerDown);
renderer.domElement.addEventListener('pointermove', pointerMove);
renderer.domElement.addEventListener('pointerup', pointerUp);
renderer.domElement.addEventListener('pointercancel', event => { if (!endBodyPull(event.pointerId) && gesture?.id === event.pointerId) cancelGesture(); });
renderer.domElement.addEventListener('lostpointercapture', event => { if (!endBodyPull(event.pointerId) && gesture?.id === event.pointerId) cancelGesture(); });
renderer.domElement.addEventListener('contextmenu', event => event.preventDefault());
window.addEventListener('blur', () => { cancelGesture(); });
document.addEventListener('visibilitychange', () => { cancelGesture(); lastTime = 0; });
window.addEventListener('resize', resize);
$('#bell-control').addEventListener('click', () => { if (ready && !accepting && !session.complete && !gesture && !bodyGestures.size) { audio.unlock(); ringBell(); } });
$('#sound').addEventListener('click', () => {
  audio.unlock(); audio.muted = !audio.muted; $('#sound').textContent = audio.muted ? '♪̸' : '♪'; $('#sound').classList.toggle('muted', audio.muted);
  $('#sound').setAttribute('aria-label', audio.muted ? 'Включить звук' : 'Выключить звук');
});
$('#help').addEventListener('click', () => { cancelGesture(); $('#help-dialog').showModal(); });
document.querySelectorAll('.dialog-close').forEach(button => button.addEventListener('click', () => $('#help-dialog').close()));
$('#reset-order').addEventListener('click', () => { clearAssembly(); $('#help-dialog').close(); message('Начнём с чистого блоба'); });
$('#replay').addEventListener('click', () => { session = new OrderSession(); $('#complete').hidden = true; clearAssembly(); resize(); customer.react('idle', 1); });

function qaSnapshot() {
  return {
    ready, order: session.index + 1, accepted: session.accepted.size, complete: session.complete,
    assembly: assembly.snapshot(), reservedToys: assembly.toySlots, settled: assembly.settled,
    body: physics ? { center: physics.body.com.toArray(), screen: clientPosition(physics.body.com), metrics: physics.metrics(), material: { transmission: physics.mesh.material.transmission, opacity: physics.mesh.material.opacity, roughness: physics.mesh.material.roughness } } : null,
    sources: stock.map(source => { const r = source.element.getBoundingClientRect(), rail = source.rail.getBoundingClientRect(); return { type: source.type, x: r.x + r.width / 2, y: r.y + r.height / 2, visible: r.left >= rail.left && r.right <= rail.right, minHitDiameter: Math.min(r.width, r.height) }; }),
    trays: stock.filter((source, i) => i % 4 === 0).map(source => ({ category: source.row.dataset.category, scroll: source.rail.scrollLeft, maxScroll: source.rail.scrollWidth - source.rail.clientWidth })),
    items: [...items.values()].map(item => ({ id: item.id, type: item.type, state: item.state, position: item.mesh.position.toArray(), screen: clientPosition(item.mesh.position), eye: item.mesh.userData.eye ? { open: item.mesh.userData.eye.open, gaze: item.mesh.userData.eye.gaze } : null })),
    bell: (() => { const r = $('#bell-control').getBoundingClientRect(); return { x: r.x + r.width / 2, y: r.y + r.height / 2 }; })(),
    gesture: bodyGestures.size ? 'pull' : gesture?.mode || 'none', bodyPointers: [...bodyGestures.keys()], customer: customer.current,
    viewport: { width: innerWidth, height: innerHeight, dpr: devicePixelRatio, stage: { width: shop.clientWidth, height: shop.clientHeight } },
    render: { triangles: renderer.info.render.triangles, calls: renderer.info.render.calls, geometries: renderer.info.memory.geometries, textures: renderer.info.memory.textures },
  };
}

function animate(timestamp) {
  requestAnimationFrame(animate);
  const dt = lastTime ? Math.min(.05, (timestamp - lastTime) / 1000) : 1 / 60; lastTime = timestamp;
  if (!ready || document.hidden) return;
  clockTime += dt;
  if (gesture) gesture.elapsed += dt;
  physics.step(dt); updateItems(dt);

  if (clockTime > statusUntil) $('#status').classList.remove('visible');
  customer.setWorking(Boolean(gesture) || bodyGestures.size > 0 || [...items.values()].some(item => item.state === 'absorbing'));
  // Customer animation is temporarily paused at the initial idle illustration.
  if (accepting) {
    deliveryTime += dt;
    if (deliveryTime > 1.25) nextOrder();
  }

  updateHint();
  renderer.render(scene, camera);
  if (qaEnabled && clockTime - lastQaUpdate > .5) {
    lastQaUpdate = clockTime;
    const state = qaSnapshot(); $('#qa').dataset.state = JSON.stringify(state); $('#qa').textContent = `QA · заказ ${state.order} · принято ${state.accepted}\n${JSON.stringify(state.assembly)}\nхват ${state.gesture} · ${state.render.calls} calls / ${state.render.triangles} triangles\n${JSON.stringify(state.body?.metrics)}`;
  }
}

async function start() {
  resize();
  [models] = await Promise.all([loadModels((count, total) => { $('#loading-detail').textContent = `Расставляем мелочи · ${count} / ${total}`; }), customer.load($('#customer'))]);
  const counter = makeProp(models, 'counter'); counter.position.y = -1.185 * SCALE; scene.add(counter);
  const mat = makeProp(models, 'mat'); mat.position.set(0, 0, 0); mat.scale.set(1.15, 1, 1.2); scene.add(mat);
  physics = new ShopPhysics(scene, layout);
  for (let i = 0; i < 90; i++) physics.step(1 / 120);
  physics.mesh.material.envMapIntensity = .5;
  makeBodyFrame();
  icons = renderIcons(models); inventory = makeInventory($('#inventory'), icons, takeFromInventory); stock.push(...inventory.sources);
  $('#bell-control img').src = icons.bell; updateRecipe(); resize();
  ready = true; $('#loading').classList.add('hidden');
  if (qaEnabled) {
    $('#qa').hidden = false;
    // Inspection only: there are deliberately no methods to add, accept or reset
    // orders here. Automated play must use the same pointer gestures as a player.
    Object.defineProperty(window, '__blobShopQA', { get: qaSnapshot, configurable: false });
  }
  requestAnimationFrame(animate);
}
start().catch(error => { console.error(error); $('#loading-detail').textContent = 'Не удалось открыть мастерскую. Обновите страницу.'; $('#loading strong').textContent = 'Что-то задержалось в пути'; });
