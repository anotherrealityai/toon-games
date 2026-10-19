import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const modelFiles = import.meta.glob(['../assets/models/props/*.glb', '!../assets/models/props/basket.glb'], { query: '?url', import: 'default', eager: true });
export const SCALE = 2.10;
export const MODEL_URLS = Object.fromEntries(Object.entries(modelFiles).map(([path, url]) => [path.split('/').pop().replace('.glb', ''), url]));

export async function loadModels(onProgress) {
  const loader = new GLTFLoader(), models = {};
  let count = 0;
  await Promise.all(Object.entries(MODEL_URLS).map(async ([name, url]) => {
    const gltf = await loader.loadAsync(url);
    const root = gltf.scene;
    root.scale.setScalar(SCALE);
    root.traverse(mesh => {
      if (!mesh.isMesh) return;
      mesh.castShadow = true; mesh.receiveShadow = true;
      mesh.material.envMapIntensity = .65;
    });
    root.updateMatrixWorld(true);
    models[name] = root;
    onProgress(++count, Object.keys(MODEL_URLS).length);
  }));
  return models;
}

export function makeProp(models, type, centered = false) {
  const model = models[type].clone(true), group = new THREE.Group();
  group.add(model);
  if (centered) {
    group.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(group), center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);
    group.userData.radius = Math.max(box.getSize(new THREE.Vector3()).x, box.getSize(new THREE.Vector3()).y, box.getSize(new THREE.Vector3()).z) / 2;
  }
  group.userData.type = type;
  return group;
}

export function renderIcons(models) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setSize(144, 144); renderer.setPixelRatio(1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.22;
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xfff9ee, 0xba9c99, 2.3));
  const light = new THREE.DirectionalLight(0xfff7dc, 3); light.position.set(-2, 4, 5); scene.add(light);
  const camera = new THREE.PerspectiveCamera(29, 1, .1, 30), icons = {};
  for (const type of ['capsule', 'capsule-cherry', 'ear', 'horn', 'duck', 'star']) {
    const object = makeProp(models, type, true); scene.add(object);
    const box = new THREE.Box3().setFromObject(object), size = box.getSize(new THREE.Vector3());
    const distance = Math.max(size.x, size.y, size.z) * 2.65;
    camera.position.set(distance * .22, distance * .40, distance); camera.lookAt(0, 0, 0);
    renderer.render(scene, camera); icons[type] = renderer.domElement.toDataURL(); scene.remove(object);
  }
  renderer.dispose();
  return icons;
}
