import './style.css';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { ShopPhysics } from './physics.js';
import { Assembly, OrderSession, NAMES, TOYS, compareOrder } from './orders.js';
import { loadModels, makeProp, renderIcons, SCALE } from './assets.js';
import { Customer } from './customer.js';
import { ShopAudio } from './audio.js';

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
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = .95;
world.append(renderer.domElement);
renderer.domElement.setAttribute('aria-label', 'Мягкий блоб, добавки по бокам и колокольчик');
const pmrem = new THREE.PMREMGenerator(renderer);
const room = new RoomEnvironment();
const environment = pmrem.fromScene(room, .04).texture;
scene.environment = environment; room.dispose(); pmrem.dispose();
const ambient = new THREE.HemisphereLight(0xfffae8, 0xd1acb4, 2.4); scene.add(ambient);
const key = new THREE.DirectionalLight(0xfff2d5, 3.5);
key.position.set(-3, 8, 5); key.castShadow = true;
key.shadow.mapSize.set(1024, 1024); key.shadow.camera.left = -5; key.shadow.camera.right = 5;
key.shadow.camera.top = 5; key.shadow.camera.bottom = -5; key.shadow.camera.near = .5; key.shadow.camera.far = 20;
key.shadow.normalBias = .025; key.shadow.bias = -.0004; key.shadow.radius = 3;
key.target.position.set(0, 0, 0); scene.add(key, key.target);
const fill = new THREE.DirectionalLight(0xe5f8ff, 1.2); fill.position.set(4, 4, -4); scene.add(fill);

const layout = {
  radius: 1.05, start: [0, 1.24, .3],
  table: { minX: -3.95, maxX: 3.95, minZ: -2.55, maxZ: 2.55, floorY: .06 },
  basket: null,
};
let physics, models, icons, bell, bellButton, bellButtonRest = 0, bellTime = 0;
let frameAnchor, initialFrameInverse, faceParts = [], idCounter = 0;
let gesture = null, accepting = false, clockTime = 0, statusUntil = 0;
let deliveryTime = 0, lastTime = 0, ready = false, lastQaUpdate = 0;
const activePointers = new Set(), labels = [];
const pointer = new THREE.Vector2(), plane = new THREE.Plane();
const up = new THREE.Vector3(0, 1, 0);
const rayPoint = new THREE.Vector3(), viewDirection = new THREE.Vector3();
const stockData = [
  { type: 'aqua', model: 'capsule', x: -2.2, z: -1.3 },
  { type: 'cherry', model: 'capsule-cherry', x: -2.2, z: 0 },
  { type: 'ear', model: 'ear', x: -2.2, z: 1.3 },
  { type: 'horn', model: 'horn', x: 2.2, z: -1.3 },
  { type: 'duck', model: 'duck', x: 2.2, z: 0 },
  { type: 'star', model: 'star', x: 2.2, z: 1.3 },
];

function message(text, error = false, duration = 3.4) {
  $('#status').textContent = text; $('#status').classList.toggle('error', error); $('#status').classList.add('visible');
  statusUntil = clockTime + duration;
}
function addLabel(text, position, className = 'scene-label') {
  const element = document.createElement('span'); element.className = className; element.innerHTML = text;
  $('#labels').append(element); labels.push({ element, position }); return element;
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
  const aspect = rect.width / rect.height, halfWidth = 2.9;
  camera.left = -halfWidth; camera.right = halfWidth;
  camera.top = halfWidth / aspect; camera.bottom = -halfWidth / aspect;
  const target = new THREE.Vector3(0, .20, .10);
  camera.position.copy(target).add(new THREE.Vector3(0, 1.35, 1).normalize().multiplyScalar(12));
  camera.lookAt(target); camera.updateProjectionMatrix();
}

function makeFace() {
  const texture = (draw, width = 128, height = 128) => {
    const canvas = document.createElement('canvas'); canvas.width = width; canvas.height = height;
    draw(canvas.getContext('2d'), width, height);
    const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace; return map;
  };
  const eyeMap = texture(context => {
    context.fillStyle = '#493328'; context.beginPath(); context.ellipse(64, 65, 36, 38, 0, 0, Math.PI * 2); context.fill();
    context.fillStyle = '#ffffff'; context.beginPath(); context.ellipse(52, 44, 10, 12, -.2, 0, Math.PI * 2); context.fill();
    context.fillStyle = '#a17a5a'; context.beginPath(); context.ellipse(72, 88, 15, 5, -.3, 0, Math.PI * 2); context.fill();
  });
  const smileMap = texture(context => {
    context.strokeStyle = '#54382b'; context.lineWidth = 12; context.lineCap = 'round';
    context.beginPath(); context.moveTo(26, 48); context.quadraticCurveTo(64, 100, 102, 48); context.stroke();
  });
  const cheekMap = texture(context => {
    const gradient = context.createRadialGradient(64, 64, 5, 64, 64, 58);
    gradient.addColorStop(0, '#f4a8a1c0'); gradient.addColorStop(1, '#f4a8a100');
    context.fillStyle = gradient; context.fillRect(0, 0, 128, 128);
  });
  const definitions = [
    { direction: [-.28, .75, .90], map: eyeMap, w: .34, h: .37 },
    { direction: [.28, .75, .90], map: eyeMap, w: .34, h: .37 },
    { direction: [0, .53, 1], map: smileMap, w: .40, h: .24 },
    { direction: [-.43, .55, .95], map: cheekMap, w: .30, h: .19 },
    { direction: [.43, .55, .95], map: cheekMap, w: .30, h: .19 },
  ];
  faceParts = definitions.map(definition => {
    const anchor = physics.anchorAt(physics.surfacePoint(new THREE.Vector3(...definition.direction)));
    const material = new THREE.MeshBasicMaterial({ map: definition.map, transparent: true, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -1 });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(definition.w, definition.h), material);
    mesh.renderOrder = 4; scene.add(mesh); return { mesh, anchor };
  });
  frameAnchor = physics.anchorAt(physics.surfacePoint(new THREE.Vector3(0, .3, 1)));
  initialFrameInverse = physics.anchorPose(frameAnchor).quaternion.clone().invert();
}
const planeRotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
function updateFace() {
  for (const { mesh, anchor } of faceParts) {
    const pose = physics.anchorPose(anchor);
    mesh.position.copy(pose.position).addScaledVector(pose.normal, .015);
    mesh.quaternion.copy(pose.quaternion).multiply(planeRotation);
  }
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
  const mesh = makeProp(models, modelType || ({ aqua: 'capsule', cherry: 'capsule-cherry' }[type] || type), true);
  // The translucent shell's opaque shadow map would darken toys inside it.
  if (TOYS.has(type)) mesh.traverse(part => { if (part.isMesh) part.receiveShadow = false; });
  const item = { id: `item-${++idCounter}`, type, mesh, state: 'held', anchor: null, slot: null, elapsed: 0 };
  mesh.userData.itemId = item.id; scene.add(mesh); items.set(item.id, item); return item;
}
function discard(item) { scene.remove(item.mesh); items.delete(item.id); }
function returnItem(item) {
  item.state = 'returning'; item.elapsed = 0; item.start = item.mesh.position.clone();
  item.destination = stock.find(source => source.type === item.type).mesh.position.clone();
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
  const hit = bodyHit(event);
  if (hit) {
    if (['ear', 'horn'].includes(item.type)) attachItem(item, hit);
    else startAbsorption(item, hit);
    return;
  }
  // A small ray/sphere capture margin helps a real throw at the soft silhouette,
  // but the release must still be near the visible body and away from stock.
  setRay(event);
  const distance = raycaster.ray.distanceToPoint(physics.body.com);
  if (!['ear', 'horn'].includes(item.type) && distance < 1.13 && item.mesh.position.distanceTo(physics.body.com) < 2.5) {
    const near = raycaster.ray.closestPointToPoint(physics.body.com, new THREE.Vector3());
    const direction = near.sub(physics.body.com); if (direction.lengthSq() < .001) direction.copy(camera.position).sub(physics.body.com);
    startAbsorption(item, { point: physics.surfacePoint(direction.normalize()) });
  } else { returnItem(item); audio.play('soft'); }
}
function insideTarget(item) {
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
    } else if (item.state === 'inside') {
      const target = insideTarget(item);
      item.mesh.position.copy(target.position); item.mesh.quaternion.copy(target.rotation);
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
  $('#recipe').replaceChildren(...recipe.map(({ type, count, group }) => {
    const element = document.createElement('div'); element.className = `recipe-item ${group}`;
    const correct = group === 'material' ? actual.material === type : actual[group][type] === count;
    if (correct) element.classList.add('ok');
    const img = document.createElement('img'); img.src = icons[{ aqua: 'capsule', cherry: 'capsule-cherry' }[type] || type]; img.alt = NAMES[type];
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
  else if (result.missing.some(item => item.type === 'ear' || item.type === 'horn')) text = 'Прикрепите детали в любом месте';
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
  bellTime = .32; audio.play('bell');
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
  for (const part of faceParts) { scene.remove(part.mesh); part.mesh.geometry.dispose(); part.mesh.material.map.dispose(); part.mesh.material.dispose(); }
  makeFace(); updateFace(); updateRecipe();
}
function nextOrder() {
  session.advance(); accepting = false;
  if (session.complete) {
    $('#complete').hidden = false; customer.react('thanks', 100); $('#gesture-hint').textContent = 'До встречи в мастерской';
    return;
  }
  clearAssembly(); customer.react('idle', 1); message('А теперь — ещё один маленький друг', false, 2.8);
}

function hitObject(event, object) { setRay(event); return raycaster.intersectObject(object, true).length > 0; }
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
function pickStock(event) {
  // Prefer a real surface intersection. The 44px minimum disc is restricted to
  // the closest individual source; it never overlaps a nearby source's centre.
  setRay(event);
  const hit = raycaster.intersectObjects(stock.map(source => source.mesh), true)[0];
  if (hit) {
    let object = hit.object;
    while (object && !object.userData.stockType) object = object.parent;
    return stock.find(source => source.type === object?.userData.stockType) || null;
  }
  return nearestScreen(event, stock, 24);
}
function pointerDown(event) {
  if (!ready || accepting || session.complete || $('#help-dialog').open) return;
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  activePointers.add(event.pointerId);
  if (activePointers.size > 1) { cancelGesture(); return; }
  audio.unlock(); event.preventDefault(); renderer.domElement.setPointerCapture(event.pointerId);
  if (gesture) return;
  const start = { x: event.clientX, y: event.clientY };
  const selected = pickItem(event);
  if (selected) {
    const extracting = ['attached', 'inside'].includes(selected.state);
    if (extracting) assembly.beginExtraction(selected.id);
    gesture = { id: event.pointerId, mode: extracting ? 'extract' : 'item', item: selected, start, last: start, elapsed: 0, initialPosition: selected.mesh.position.clone(), initialQuaternion: selected.mesh.quaternion.clone(), originalState: selected.state, moved: false };
    selected.state = extracting ? 'extracting' : 'held';
    gesture.planeOrigin = selected.mesh.position.clone();
    gesture.offset = selected.mesh.position.clone().sub(pointOnPlane(event, gesture.planeOrigin));
    showHighlight(selected.mesh); message(`${NAMES[selected.type]} выбрана. Потяните наружу.`, false, 1.2);
    audio.play('pick'); updateHint(); return;
  }
  if (hitObject(event, bell) || (() => { const p = clientPosition(bell.position.clone().add(new THREE.Vector3(0, .3, 0))); return Math.hypot(event.clientX - p.x, event.clientY - p.y) < 25; })()) {
    gesture = { id: event.pointerId, mode: 'bell', start, last: start, elapsed: 0 }; bellTime = .20; return;
  }
  const source = pickStock(event);
  if (source) {
    const item = createItem(source.type); item.mesh.position.copy(source.mesh.position); item.mesh.quaternion.copy(source.mesh.quaternion);
    gesture = { id: event.pointerId, mode: 'item', item, start, last: start, elapsed: 0, planeOrigin: item.mesh.position.clone(), initialPosition: item.mesh.position.clone(), moved: false };
    gesture.offset = item.mesh.position.clone().sub(pointOnPlane(event, gesture.planeOrigin));
    item.mesh.position.y += .12; showHighlight(item.mesh); customer.setWorking(true); audio.play('pick'); return;
  }
  const hit = bodyHit(event);
  if (hit) {
    physics.beginPull(hit.point);
    gesture = { id: event.pointerId, mode: 'pull', start, last: start, elapsed: 0, moved: false, planeOrigin: hit.point.clone() };
    customer.setWorking(true); audio.play('soft');
  } else gesture = { id: event.pointerId, mode: 'empty', start, last: start, elapsed: 0 };
}
function pointerMove(event) {
  if (!ready) return;
  if (!gesture || gesture.id !== event.pointerId) {
    if (event.pointerType === 'mouse' && !accepting) {
      const chosen = pickItem(event), source = chosen || pickStock(event);
      renderer.domElement.style.cursor = chosen ? 'grab' : source ? 'grab' : bodyHit(event) ? 'grab' : hitObject(event, bell) ? 'pointer' : 'default';
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
    position.y = Math.max(.26, position.y); gesture.item.mesh.position.copy(position); showHighlight(gesture.item.mesh);
    return;
  }
  if (gesture.mode === 'pull') {
    const target = pointOnPlane(event, gesture.planeOrigin);
    target.y = Math.max(.1, target.y); physics.setPullTarget(target);
  }
}
function pointerUp(event) {
  activePointers.delete(event.pointerId);
  if (!gesture || gesture.id !== event.pointerId) return;
  event.preventDefault(); const current = gesture;
  if (current.mode === 'item') {
    if (current.moved) releaseItem(current.item, event);
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
      audio.play('pop'); message('Готово. Предмет можно взять и бросить снова.', false, 2.2);
    } else {
      assembly.cancelExtraction(current.item.id); current.item.state = current.originalState;
      message('Вытяните предмет за край блоба.', false, 2.2);
    }
    updateRecipe();
  } else if (current.mode === 'bell' && Math.hypot(event.clientX - current.start.x, event.clientY - current.start.y) < 20) ringBell();
  physics.endHold(); gesture = null; releaseCapture(current.id); finishGesture();
}
function releaseCapture(id) { if (renderer.domElement.hasPointerCapture(id)) renderer.domElement.releasePointerCapture(id); }
function finishGesture() { highlight.visible = false; updateHint(); }
function cancelGesture() {
  if (!gesture || !physics) return;
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
renderer.domElement.addEventListener('pointercancel', event => { activePointers.delete(event.pointerId); cancelGesture(); });
renderer.domElement.addEventListener('lostpointercapture', event => { if (gesture?.id === event.pointerId) cancelGesture(); });
renderer.domElement.addEventListener('contextmenu', event => event.preventDefault());
window.addEventListener('pointerup', event => activePointers.delete(event.pointerId));
window.addEventListener('blur', () => { activePointers.clear(); cancelGesture(); });
document.addEventListener('visibilitychange', () => { activePointers.clear(); cancelGesture(); lastTime = 0; });
window.addEventListener('resize', resize);
$('#sound').addEventListener('click', () => {
  audio.unlock(); audio.muted = !audio.muted; $('#sound').textContent = audio.muted ? '♪̸' : '♪'; $('#sound').classList.toggle('muted', audio.muted);
  $('#sound').setAttribute('aria-label', audio.muted ? 'Включить звук' : 'Выключить звук');
});
$('#help').addEventListener('click', () => { cancelGesture(); $('#help-dialog').showModal(); });
document.querySelectorAll('.dialog-close').forEach(button => button.addEventListener('click', () => $('#help-dialog').close()));
$('#reset-order').addEventListener('click', () => { clearAssembly(); $('#help-dialog').close(); message('Начнём с чистого блоба'); });
$('#replay').addEventListener('click', () => { session = new OrderSession(); $('#complete').hidden = true; clearAssembly(); customer.react('idle', 1); });

function qaSnapshot() {
  return {
    ready, order: session.index + 1, accepted: session.accepted.size, complete: session.complete,
    assembly: assembly.snapshot(), reservedToys: assembly.toySlots, settled: assembly.settled,
    body: physics ? { center: physics.body.com.toArray(), screen: clientPosition(physics.body.com), metrics: physics.metrics(), material: { transmission: physics.mesh.material.transmission, opacity: physics.mesh.material.opacity, roughness: physics.mesh.material.roughness } } : null,
    sources: stock.map(source => ({ type: source.type, ...clientPosition(source.mesh.position), minHitDiameter: 48 })),
    items: [...items.values()].map(item => ({ id: item.id, type: item.type, state: item.state, position: item.mesh.position.toArray(), screen: clientPosition(item.mesh.position) })),
    bell: bell ? clientPosition(bell.position.clone().add(new THREE.Vector3(0, .35, 0))) : null,
    gesture: gesture?.mode || 'none', customer: customer.current,
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
  physics.step(dt); updateItems(dt); updateFace();
  if (bellTime > 0) { bellTime = Math.max(0, bellTime - dt); if (bellButton) bellButton.position.y = bellButtonRest - Math.sin(Math.min(1, bellTime / .32) * Math.PI) * .014; }
  if (clockTime > statusUntil) $('#status').classList.remove('visible');
  customer.setWorking(Boolean(gesture) || [...items.values()].some(item => item.state === 'absorbing'));
  // Customer animation is temporarily paused at the initial idle illustration.
  if (accepting) {
    deliveryTime += dt;
    if (deliveryTime > 1.25) nextOrder();
  }
  for (const label of labels) { const position = screenPosition(label.position); label.element.style.left = `${position.x}px`; label.element.style.top = `${position.y}px`; }
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
  const mat = makeProp(models, 'mat'); mat.position.set(0, 0, .3); mat.scale.set(.9, 1, 1.3); scene.add(mat);
  for (const x of [-2.2, 2.2]) { const tray = makeProp(models, 'tray'); tray.position.set(x, .012, 0); tray.scale.set(.72, 1, 1.8); scene.add(tray); }
  for (const source of stockData) {
    const mesh = makeProp(models, source.model, true);
    const bounds = new THREE.Box3().setFromObject(mesh), size = bounds.getSize(new THREE.Vector3());
    mesh.position.set(source.x, .125 + size.y / 2, source.z);
    if (source.type === 'ear') mesh.rotation.z = -.16;
    if (source.type === 'star') mesh.rotation.z = .12;
    mesh.userData.stockType = source.type;
    scene.add(mesh); stock.push({ ...source, mesh });
    const dot = ['aqua', 'cherry'].includes(source.type) ? `<i class="cap-dot ${source.type}"></i>` : '';
    addLabel(dot + NAMES[source.type], new THREE.Vector3(source.x, .17, source.z + .39), 'stock-label');
  }
  bell = makeProp(models, 'bell'); bell.position.set(1.65, .015, 2.0); scene.add(bell);
  bellButton = bell.getObjectByName('bell_button'); bellButtonRest = bellButton?.position.y || 0;
  addLabel('выдать ♡', new THREE.Vector3(1.65, .1, 2.4));
  physics = new ShopPhysics(scene, layout);
  for (let i = 0; i < 90; i++) physics.step(1 / 120);
  physics.mesh.material.envMapIntensity = .9;
  makeFace(); updateFace();
  icons = renderIcons(models); updateRecipe();
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
