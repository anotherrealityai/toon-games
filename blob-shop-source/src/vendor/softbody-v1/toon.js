import * as THREE from 'three';

// Палитра Kurzgesagt — плоские яркие цвета.
export const PALETTE = [
  0xff6b6b, // коралловый
  0xffd93d, // жёлтый
  0x4ecdc4, // бирюзовый
  0xff9f43, // оранжевый
  0xf368e0, // розовый
  0x9ded6f, // лаймовый
];

export const OUTLINE_COLOR = 0x1a1a2e;

export function randomPaletteColor() {
  return PALETTE[Math.floor(Math.random() * PALETTE.length)];
}

// Ступенчатая gradientMap для тун-освещения:
// несколько значений серого + NearestFilter дают жёсткие ступени света.
function makeToonGradient(steps = 4) {
  const data = new Uint8Array(steps);
  for (let i = 0; i < steps; i++) {
    // от тёмного к светлому, распределены по диапазону
    data[i] = Math.round((i / (steps - 1)) * 255);
  }
  const tex = new THREE.DataTexture(data, steps, 1, THREE.RedFormat);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

const GRADIENT_MAP = makeToonGradient(4);

// ПЛАВНЫЙ градиент для КРУПНЫХ поверхностей планеты (вердикт Шефа 2026-08-30:
// «переходы в месте тени более плавные — речь про саму планету»). На сфере в
// пол-экрана 4 жёсткие ступени читаются полосами; 24 уровня + линейный фильтр
// дают мягкий переход, оставаясь тем же тун-светом. Блобы и пропсы НЕ трогаем:
// на малых формах ступени — это стиль, а не артефакт.
function makeSmoothGradient(steps = 24) {
  const data = new Uint8Array(steps);
  for (let i = 0; i < steps; i++) data[i] = Math.round((i / (steps - 1)) * 255);
  const tex = new THREE.DataTexture(data, steps, 1, THREE.RedFormat);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}
const SMOOTH_GRADIENT_MAP = makeSmoothGradient(24);

// Уникальный тун-материал с ПЛАВНЫМ светом — только для поверхностей планеты.
export function toonMaterialSmoothUnique(color, extra = {}) {
  return new THREE.MeshToonMaterial({ color, gradientMap: SMOOTH_GRADIENT_MAP, ...extra });
}

// Кэш материалов по цвету, чтобы не плодить дубликаты.
const toonCache = new Map();

export function toonMaterial(color) {
  if (toonCache.has(color)) return toonCache.get(color);
  const mat = new THREE.MeshToonMaterial({
    color,
    gradientMap: GRADIENT_MAP,
  });
  toonCache.set(color, mat);
  return mat;
}

// Уникальный (не кэшируемый) тун-материал — когда нужен свой цвет/emissive
// на конкретном объекте, который позже будет меняться (кристаллы, валуны).
export function toonMaterialUnique(color, extra = {}) {
  return new THREE.MeshToonMaterial({ color, gradientMap: GRADIENT_MAP, ...extra });
}

let outlineMat = null;
function outlineMaterial() {
  if (!outlineMat) {
    outlineMat = new THREE.MeshBasicMaterial({
      color: OUTLINE_COLOR,
      side: THREE.BackSide,
    });
  }
  return outlineMat;
}

// Обводка методом inverted hull: копия геометрии, вывернутая наизнанку
// (BackSide) и раздутая на scale. Возвращает Group [меш, обводка].
export function withOutline(geometry, color, scale = 1.05) {
  const group = new THREE.Group();

  const mesh = new THREE.Mesh(geometry, toonMaterial(color));
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  const outline = new THREE.Mesh(geometry, outlineMaterial());
  outline.scale.setScalar(scale);

  group.add(mesh);
  group.add(outline);
  return group;
}
