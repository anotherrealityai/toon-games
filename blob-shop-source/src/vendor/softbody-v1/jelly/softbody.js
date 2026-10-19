import * as THREE from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { toonMaterialUnique } from '../toon.js';

// ============================================================================
//  Мягкое тело (желе) — собственный XPBD/верлет-солвер, без Rapier.
//
//  Частицы:  ~42 на оболочке (икосфера) + 1 в центре.
//  Связи:    пружины-рёбра оболочки + пружины к центру (PBD-констрейнты).
//  Объём:    pressure-model — считаем текущий объём и давим частицы наружу
//            пропорционально (V0 - V)/V0 → «надутость» и восстановление формы.
//  Интеграция: верлет, фиксированный шаг (120 Гц) с несколькими итерациями.
//  Коллизии: делегируются миру (maze.resolveParticle) — projection + трение.
// ============================================================================

// ---- Настройки солвера (подобраны на «сочное, медленное» АСМР-колыхание) ----
const FIXED_DT = 1 / 120;      // фиксированный шаг физики
const MAX_SUBSTEPS = 6;        // предохранитель от спирали смерти
const ITERATIONS = 8;          // итераций проектирования констрейнтов за шаг
// ВАЖНО: PBD-жёсткости применяются ITERATIONS раз за субшаг, эффективная
// жёсткость ≈ 1-(1-s)^8 — числа ниже уже учитывают это (0.04 → эфф. ~0.28).
const SHELL_STIFFNESS = 0.02;  // жёсткость рёбер оболочки (при 0.04 щель 65% уже НЕ проходится!)
const CENTER_STIFFNESS = 0.005; // пружины к центру символические → растекается
const PRESSURE_K = 6;          // «надутость» для упругого отскока (форму держит объём-констрейнт)
// PBD-сохранение объёма: проекция позиций к V0. В отличие от давления-силы,
// расправляет даже смятую/вывернутую оболочку → желе не «сдувается» навсегда
// после протискивания. Несжимаемость = желе: в щели тело вытягивается, а не сдувается.
const VOLUME_STIFF = 0.25;     // доля коррекции за итерацию
const GRAVITY = -6.5;          // лёгкая гравитация вниз
const VEL_DAMP = 0.986;        // демпфирование колыхания (мягко оседает, не дрожит)
// Клэмп смещения за субшаг = клэмп СКОРОСТИ. 0.45 < половины толщины самой тонкой
// стены (1.0) → сила «пальца» может быть большой, а прострела сквозь стену нет.
const MAX_STEP = 0.45;

// ---------------- Генерация икосферы (subdivisions подразбиений) ----------------
function buildIcosphere(radius, subdivisions = 1) {
  const t = (1 + Math.sqrt(5)) / 2;
  let verts = [
    [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
    [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
    [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
  ].map((v) => new THREE.Vector3(v[0], v[1], v[2]));
  let faces = [
    [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
    [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
    [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
    [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
  ];

  for (let s = 0; s < subdivisions; s++) {
    const midCache = new Map();
    const midpoint = (a, b) => {
      const key = a < b ? a + '_' + b : b + '_' + a;
      if (midCache.has(key)) return midCache.get(key);
      const m = verts[a].clone().add(verts[b]).multiplyScalar(0.5);
      const idx = verts.length;
      verts.push(m);
      midCache.set(key, idx);
      return idx;
    };
    const faces2 = [];
    for (const [a, b, c] of faces) {
      const ab = midpoint(a, b);
      const bc = midpoint(b, c);
      const ca = midpoint(c, a);
      faces2.push([a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca]);
    }
    faces = faces2;
  }

  verts = verts.map((v) => v.normalize().multiplyScalar(radius));
  return { verts, faces }; // 1 подразбиение: 42 вершины; 2: 162 вершины
}

// -------------------------------- SoftBody ---------------------------------
export class SoftBody {
  constructor(scene, center, radius = 2, opts = {}) {
    this.scene = scene;
    this.radius = radius;
    // Масса (Локо Роко): объём в условных единицах = radius³. Базовый R=2 → 8,
    // малыш (после деления) — доля от общего объёма. Плиты суммируют это поле.
    this.volumeUnits = opts.volumeUnits ?? radius ** 3;
    // Тюнинг-параметры (дефолты = модульные константы; можно переопределить).
    this.particleRadius = opts.particleRadius ?? 0.22; // мал → оболочка пролезает в щели
    this.shellStiffness = opts.shellStiffness ?? SHELL_STIFFNESS;
    this.centerStiffness = opts.centerStiffness ?? CENTER_STIFFNESS;
    this.pressureK = opts.pressureK ?? PRESSURE_K;
    // Живой множитель жёсткости рёбер оболочки: пружины ЗАХВАТЫВАЮТ базовую
    // жёсткость при создании (spring.stiff), а этот множитель применяется в
    // солвере каждый шаг → можно плавно размягчать тело (сон-распластывание) и
    // возвращать назад, не трогая ни модульные константы, ни базы пружин. 1 = норма.
    this.shellStiffScale = 1;
    this.velDamp = opts.velDamp ?? VEL_DAMP;

    // ---- Гравитация: плоская (по умолчанию, вниз) ИЛИ радиальная к точке. ----
    // gravityCenter (THREE.Vector3) → каждая частица притягивается к этой точке
    // ускорением gravityStrength (планетная гравитация). Плоские игры не трогаем:
    // без gravityCenter поведение прежнее (ускорение GRAVITY по -Y).
    this.gravityCenter = opts.gravityCenter ?? null;
    this.gravityStrength = opts.gravityStrength ?? Math.abs(GRAVITY);
    // ---- Хвост тяготения: выше gravityFalloffR сила слабеет как (R/r)^p ----
    // Кто включает: planet/slingshot.beginFlight на время полёта снаряда из
    // рогатки, и он же выключает на посадке. В обычной жизни планеты поле
    // выключено (null) — рука, прыжки, сон и танец живут в прежнем мире.
    // Зачем: при гравитации ПОСТОЯННОЙ величины орбита в потенциале U ∝ r имеет
    // апсидальный угол π/√3 = 103.9°, поэтому траектория, запущенная С ЗЕМЛИ,
    // возвращается к земле максимум через 208° — облёт планеты по кругу был
    // физически невозможен ни при какой силе выстрела. Со степенным хвостом
    // апсидальный угол становится π/√(3−p): при p > 2 он больше 180°, и орбита
    // успевает замкнуться. Ниже gravityFalloffR — по-прежнему константа, то есть
    // ВСЯ наземная жизнь (прыжки, сон, танец, тычки) не меняется ни на йоту.
    // По умолчанию null — поведение бит-в-бит прежнее (гоняется регрессией).
    this.gravityFalloffR = opts.gravityFalloffR ?? null;
    this.gravityFalloffP = opts.gravityFalloffP ?? 2;
    // ---- Водная зона (озеро планеты): опциональна, по умолчанию ВЫКЛЮЧЕНА ----
    // { center, dir, cosAng, level, buoyancy, drag, maxDepth } — сектор вокруг
    // направления dir (частица «в секторе», если косинус угла до dir больше
    // cosAng) ниже уровня level. Частица под водой получает ДВЕ непрерывные силы
    // в том же цикле, что и гравитацию:
    //   • выталкивание вдоль радиали, пропорциональное глубине погружения, с
    //     клэмпом maxDepth (без клэмпа дно чаши «стреляло» бы: там глубина вдвое
    //     больше, чем у плавающего тела);
    //   • вязкость −v·drag, гасящую и полёт в воде, и покачивание.
    // Разовых импульсов нет (грабля №8): вода — это поле, а не пинок.
    // По умолчанию null — поведение солвера бит-в-бит прежнее (гоняется
    // регрессией «суша бит-в-бит» в симтесте).
    this.waterZone = opts.waterZone ?? null;

    // ---- Внешность (дефолты = розовое желе-тропы; планета переопределяет) ----
    this.gelColor = opts.gelColor ?? 0xffa3b8;
    this.coreColor = opts.coreColor ?? 0xff3b63;
    this.outlineColor = opts.outlineColor ?? 0x3a1f30;
    this.gelOpacity = opts.gelOpacity ?? 0.8;
    // externalFace: не строить/не обновлять встроенные глазки-бусинки — лицо
    // собирается снаружи (planet/blob.js) через surfaceAlong().
    this.externalFace = opts.externalFace ?? false;

    // 2 подразбиения (162 частицы) для крупного тела — кругленькое; 1 (42) для мелких.
    this.subdivisions = opts.subdivisions ?? 2;
    const { verts, faces } = buildIcosphere(radius, this.subdivisions);
    this.faces = faces;
    this.shellCount = verts.length;

    // Частицы: [оболочка..., центр]. Позиция/пред.позиция/внешняя сила.
    this.pos = [];
    this.prev = [];
    this.ext = [];
    for (const v of verts) {
      const p = v.clone().add(center);
      this.pos.push(p);
      this.prev.push(p.clone());
      this.ext.push(new THREE.Vector3());
    }
    this.centerIdx = this.pos.length;
    this.pos.push(center.clone());
    this.prev.push(center.clone());
    this.ext.push(new THREE.Vector3());

    // Рёбра оболочки (уникальные) + пружины к центру.
    const edgeSet = new Set();
    this.springs = [];
    const addSpring = (a, b, stiff, shell) => {
      const key = a < b ? a + '_' + b : b + '_' + a;
      if (edgeSet.has(key)) return;
      edgeSet.add(key);
      this.springs.push({ a, b, rest: this.pos[a].distanceTo(this.pos[b]), stiff, shell });
    };
    for (const [a, b, c] of faces) {
      addSpring(a, b, this.shellStiffness, true);
      addSpring(b, c, this.shellStiffness, true);
      addSpring(c, a, this.shellStiffness, true);
    }
    for (let i = 0; i < this.shellCount; i++) {
      addSpring(i, this.centerIdx, this.centerStiffness, false);
    }

    this.restVolume = this._volume();

    // COM и скорость (для глазок, звука, камеры).
    this.com = center.clone();
    this.prevCom = center.clone();
    this.velocity = new THREE.Vector3();
    this.compression = 0; // (V0 - V)/V0, >0 = сжато

    // Захват мышью («хвостик»): при беру-держу несколько ближайших к точке
    // захвата частиц оболочки тянутся к курсору → оболочка вытягивается
    // «сосочком». Чисто визуально-физическая добавка малой силой через ext[]
    // (НЕ хард-констрейнт) — проходимость не трогает, PBD-объём не даёт порваться.
    this.grabActive = false;
    this.grabParticles = [];
    this.grabLook = null; // точка, на которую скошены глаза при захвате
    // Щип-подъём: центроид захваченных частиц позиционно притягивается к
    // grabPoint с жёсткостью grabStiff (мягкий «зажим пальцами» — тело висит
    // капелькой под ними). Реализовано в _step внутри итераций констрейнтов.
    this.grabPoint = new THREE.Vector3();
    this.grabStiff = 0;
    // Маска захваченных частиц: рёбра, инцидентные им, размягчаются во время
    // щипа (neckSoft) → тело провисает капелькой на растянутой шейке, а не
    // поднимается жёстким шаром за пальцем.
    this.grabbedMask = null; // Uint8Array, лениво после сборки частиц
    this.neckSoft = opts.neckSoft ?? 0.12;

    // Поле-страховка дальнего улёта: за returnRadius от gravityCenter к базовой
    // радиальной гравитации добавляется мягкая доводящая сила (не телепорт).
    this.returnRadius = opts.returnRadius ?? null;
    this.returnStrength = opts.returnStrength ?? 1.5;

    this._buildMesh();

    // Переиспользуемые векторы — никаких аллокаций в кадре.
    this._t1 = new THREE.Vector3();
    this._t2 = new THREE.Vector3();
    this._t3 = new THREE.Vector3();
    this._n = new THREE.Vector3();
    this._up = new THREE.Vector3(0, 1, 0);
    this._right = new THREE.Vector3();
    this._dir = new THREE.Vector3();

    this._acc = 0;

    // Градиенты объёма (по одному вектору на частицу оболочки, переиспользуются).
    this._volGrad = [];
    for (let i = 0; i < this.shellCount; i++) this._volGrad.push(new THREE.Vector3());
  }

  // ---- PBD-констрейнт объёма: сдвигаем частицы вдоль ∂V/∂p к restVolume ----
  _projectVolume(k) {
    const V = this._volume();
    const dV = this.restVolume - V;
    if (Math.abs(dV) < 1e-6 * this.restVolume) return;
    for (const g of this._volGrad) g.set(0, 0, 0);
    // V = (1/6) Σ p0·(p1×p2) → ∂V/∂p0=(p1×p2)/6, ∂V/∂p1=(p2×p0)/6, ∂V/∂p2=(p0×p1)/6
    for (const [a, b, c] of this.faces) {
      this._volGrad[a].addScaledVector(this._t1.crossVectors(this.pos[b], this.pos[c]), 1 / 6);
      this._volGrad[b].addScaledVector(this._t1.crossVectors(this.pos[c], this.pos[a]), 1 / 6);
      this._volGrad[c].addScaledVector(this._t1.crossVectors(this.pos[a], this.pos[b]), 1 / 6);
    }
    let denom = 1e-9;
    for (const g of this._volGrad) denom += g.lengthSq();
    const lambda = (k * dV) / denom;
    for (let i = 0; i < this.shellCount; i++) {
      this.pos[i].addScaledVector(this._volGrad[i], lambda);
    }
  }

  // ---- Текущий объём оболочки (теорема о дивергенции, инвариант к сдвигу) ----
  _volume() {
    let vol = 0;
    for (const [a, b, c] of this.faces) {
      const p0 = this.pos[a], p1 = this.pos[b], p2 = this.pos[c];
      vol += p0.x * (p1.y * p2.z - p2.y * p1.z)
        - p0.y * (p1.x * p2.z - p2.x * p1.z)
        + p0.z * (p1.x * p2.y - p2.x * p1.y);
    }
    return vol / 6;
  }

  // -------------------------------- Меш желе --------------------------------
  _buildMesh() {
    // Гель: полупрозрачный toon-материал + inverted-hull обводка в стиле проекта.
    // Геометрия хранится В ЛОКАЛЕ относительно COM → обводка/ядро масштабируются
    // вокруг центра желе корректно даже при деформации.
    this.group = new THREE.Group();

    // mergeVertices сваривает дубликаты UV-шва и полюсов SphereGeometry в одну
    // вершину → при скиннинге к частицам нет расходящихся дубликатов, а значит
    // нет щелей/прорезей в меше и швов на нормалях.
    // Перед сваркой удаляем uv/normal: mergeVertices сваривает только вершины с
    // РАВНЫМИ атрибутами, а на UV-шве сферы uv различаются → шов не сваривался и
    // по телу проступало ребро нормалей (текстур нет, uv не нужен; нормали
    // пересчитываются каждый кадр).
    const rawGeo = new THREE.SphereGeometry(this.radius, 26, 18);
    rawGeo.deleteAttribute('uv');
    rawGeo.deleteAttribute('normal');
    this.geo = mergeVertices(rawGeo);
    // Гель: полупрозрачный, но depthTest ВКЛ — front-грани закрашивают перед
    // обводкой, поэтому тёмный inverted-hull остаётся лишь тонким контуром-силуэтом,
    // а не заливает нутро.
    const gelMat = toonMaterialUnique(this.gelColor, {
      transparent: true,
      opacity: this.gelOpacity,
      depthWrite: false,
    });
    this.mesh = new THREE.Mesh(this.geo, gelMat);
    this.mesh.castShadow = true;
    this.mesh.renderOrder = 2;
    this.group.add(this.mesh);

    // Обводка (inverted hull): непрозрачная, рисуется первой (пишет глубину),
    // видна только по силуэту. Тёмно-сливовый вместо чёрного — мягче.
    const outlineMat = new THREE.MeshBasicMaterial({
      color: this.outlineColor,
      side: THREE.BackSide,
    });
    this.outline = new THREE.Mesh(this.geo, outlineMat);
    this.outline.scale.setScalar(1.04);
    this.outline.renderOrder = 0;
    this.group.add(this.outline);

    // «Ядрышко» — сфера насыщеннее у центра масс (видно в просвете геля).
    this.core = new THREE.Mesh(
      new THREE.SphereGeometry(this.radius * 0.46, 16, 12),
      toonMaterialUnique(this.coreColor)
    );
    this.core.renderOrder = 1;
    this.group.add(this.core);

    // Глазки-бусинки: белок + зрачок — отдельные меши, каждый кадр сажаются НА
    // фактическую поверхность (по ближайшей фронтальной частице + вынос по нормали),
    // поэтому не тонут в теле при сжатии. Зрачок вынесен ещё дальше наружу.
    this.eyeWhites = [];
    this.eyePupils = [];
    if (!this.externalFace) {
      const eyeWhiteMat = new THREE.MeshToonMaterial({ color: 0xffffff });
      const pupilMat = new THREE.MeshBasicMaterial({ color: 0x1a1a2e });
      for (const side of [-1, 1]) {
        const white = new THREE.Mesh(new THREE.SphereGeometry(0.34, 14, 12), eyeWhiteMat);
        const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 10), pupilMat);
        white.userData.side = side;
        white.renderOrder = 3;
        pupil.renderOrder = 4;
        this.eyeWhites.push(white);
        this.eyePupils.push(pupil);
        this.group.add(white, pupil);
      }
    }
    this.front = new THREE.Vector3(0, 0, 1); // сглаженное направление «лица»

    this.scene.add(this.group);

    // Привязка вершин меша к 3-4 ближайшим частицам (веса ~ 1/dist).
    this._bindMesh();
  }

  _bindMesh() {
    const posAttr = this.geo.attributes.position;
    const n = posAttr.count;
    this.binds = new Array(n);
    const v = new THREE.Vector3();
    for (let i = 0; i < n; i++) {
      v.fromBufferAttribute(posAttr, i).add(this.com); // вершина в мире
      const dists = [];
      for (let j = 0; j < this.shellCount; j++) {
        dists.push({ j, d: v.distanceTo(this.pos[j]) });
      }
      dists.sort((a, b) => a.d - b.d);
      // 6 соседей + мягкий сглаживающий член в весах → гладкая поверхность
      // без огранки (жёсткие 1/d² на 4 соседях давали видимые плоские грани).
      const picks = dists.slice(0, 6);
      const soft = this.radius * 0.12;
      let wsum = 0;
      for (const p of picks) {
        p.w = 1 / (p.d * p.d + soft * soft * 4);
        wsum += p.w;
      }
      for (const p of picks) p.w /= wsum;
      this.binds[i] = picks;
    }
  }

  // ---------------------- Внешние силы (заполняет main) ----------------------
  clearForces() {
    for (const f of this.ext) f.set(0, 0, 0);
  }

  // Равномерное «дуновение» (WASD) на все частицы оболочки.
  addWind(vec) {
    for (let i = 0; i < this.shellCount; i++) this.ext[i].add(vec);
  }

  // Мягкая сила пальцем: тянет ближайшие к точке частицы к ней (с клэмпом).
  addPointerPull(point, radius, strength) {
    const d = this._t1;
    for (let i = 0; i < this.shellCount; i++) {
      d.copy(point).sub(this.pos[i]);
      const dist = d.length();
      if (dist > radius) continue;
      const falloff = 1 - dist / radius;
      // Клэмп: сила не растёт с расстоянием → нельзя порвать/телепортировать.
      d.multiplyScalar((strength * falloff) / (dist + 0.001));
      const max = strength;
      if (d.length() > max) d.setLength(max);
      this.ext[i].add(d);
    }
  }

  // ---- Захват «хвостиком»: зафиксировать 3-5 ближайших к точке частиц ----
  // Вызывается на pointerdown. Дальше pullGrab(cursor) каждый кадр тянет ИМЕННО
  // эти частицы к курсору, оболочка вытягивается носиком за пальцем.
  beginGrab(point, count = 5) {
    const arr = [];
    for (let i = 0; i < this.shellCount; i++) {
      arr.push({ i, d: point.distanceToSquared(this.pos[i]) });
    }
    arr.sort((a, b) => a.d - b.d);
    this.grabParticles = arr.slice(0, count).map((o) => o.i);
    this.grabActive = true;
    if (!this.grabbedMask) this.grabbedMask = new Uint8Array(this.pos.length);
    else this.grabbedMask.fill(0);
    for (const i of this.grabParticles) this.grabbedMask[i] = 1;
  }

  // Мягкая тяга захваченных частиц к курсору (ограниченная — не рвёт оболочку).
  // strength мал: это милота, а не движок. Основное движение — направленный
  // толчок (addWind), см. main.js.
  pullGrab(point, strength = 9) {
    if (!this.grabActive) return;
    const d = this._t1;
    const cap = strength * 1.25; // ограничение растяжения «сосочка»
    for (const i of this.grabParticles) {
      d.copy(point).sub(this.pos[i]);
      const dist = d.length();
      // Пружина, растущая до ~1.2 ед. и затем насыщающаяся.
      const f = strength * Math.min(dist, 1.2);
      d.multiplyScalar(f / (dist + 0.001));
      if (d.length() > cap) d.setLength(cap);
      this.ext[i].add(d);
    }
    this.grabLook = point; // глаза скошены к точке захвата
  }

  // Обновить цель щипа (каждый кадр при подъёме): точка пальца + жёсткость.
  setGrabTarget(point, stiff = 0.5) {
    this.grabPoint.copy(point);
    this.grabStiff = stiff;
    this.grabLook = point; // глаза косятся к пальцу
  }

  endGrab() {
    this.grabActive = false;
    this.grabStiff = 0;
    this.grabLook = null;
    if (this.grabbedMask) this.grabbedMask.fill(0);
  }

  // Задать телу дополнительную скорость (используется при делении/слиянии).
  addVelocity(v) {
    for (let i = 0; i <= this.centerIdx; i++) {
      this.prev[i].addScaledVector(v, -FIXED_DT);
    }
  }

  // «Комета»: разогнать нос тела и придержать хвост вдоль dir — частица получает
  // добавку скорости, пропорциональную её проекции на эту ось. Из проекций
  // вычитается СРЕДНЕЕ по тем же частицам, поэтому сумма добавок равна нулю
  // ТОЧНО: скорость центра масс не меняется вовсе, COM летит ровно так же (и
  // прогноз-дуга остаётся честной), тело лишь вытягивается — пружины с
  // объём-констрейнтом возвращают форму за доли секунды.
  // Работаем по оболочке (COM считается по ней же); центральная частица лежит у
  // самого центра, её проекция всё равно ~0, а пружины дотянут её сами.
  // Зовётся ОДИН раз, в момент выстрела (грабля №8: в полёте — ничего).
  stretchAlong(dir, k) {
    const dl = Math.hypot(dir.x, dir.y, dir.z) || 1;
    const nx = dir.x / dl, ny = dir.y / dl, nz = dir.z / dl;
    const n = this.shellCount;
    let mean = 0;
    for (let i = 0; i < n; i++) {
      const p = this.pos[i];
      mean += (p.x - this.com.x) * nx + (p.y - this.com.y) * ny + (p.z - this.com.z) * nz;
    }
    mean /= n;
    for (let i = 0; i < n; i++) {
      const p = this.pos[i];
      const s = (p.x - this.com.x) * nx + (p.y - this.com.y) * ny + (p.z - this.com.z) * nz - mean;
      const d = k * s * FIXED_DT;
      this.prev[i].x -= nx * d;
      this.prev[i].y -= ny * d;
      this.prev[i].z -= nz * d;
    }
  }

  // Импульс-подскок (на финише).
  hop(power) {
    for (let i = 0; i <= this.centerIdx; i++) {
      this.prev[i].y -= power * (0.6 + Math.random() * 0.4) * FIXED_DT;
    }
  }

  // ------------------------------- Один шаг ---------------------------------
  _step(world) {
    const V = this._volume();
    const pressure = (this.pressureK * (this.restVolume - V)) / this.restVolume;

    // Давление: сила по нормали грани (площадь-взвешенная), делится на 3 вершины.
    if (pressure !== 0) {
      for (const [a, b, c] of this.faces) {
        const p0 = this.pos[a], p1 = this.pos[b], p2 = this.pos[c];
        this._t1.subVectors(p1, p0);
        this._t2.subVectors(p2, p0);
        this._n.crossVectors(this._t1, this._t2); // |n| = 2*area, наружу
        this._n.multiplyScalar(pressure / 6);
        this.ext[a].add(this._n);
        this.ext[b].add(this._n);
        this.ext[c].add(this._n);
      }
    }

    // Гравитация: плоская вниз ИЛИ радиальная к gravityCenter (планета).
    const gc = this.gravityCenter;
    const gStr = this.gravityStrength;
    // Вода: скраты зоны наружу цикла (в кадре — ноль аллокаций и ноль лишних
    // разыменований на 163 частицы).
    const wz = this.waterZone;
    const wc = wz ? wz.center : null;
    const wDrag = wz ? wz.drag / FIXED_DT : 0;   // −v·drag как УСКОРЕНИЕ
    // Верлет-интеграция (масса = 1, ускорение = ext + гравитация).
    for (let i = 0; i <= this.centerIdx; i++) {
      const p = this.pos[i];
      const pr = this.prev[i];
      const vx = (p.x - pr.x) * this.velDamp;
      const vy = (p.y - pr.y) * this.velDamp;
      const vz = (p.z - pr.z) * this.velDamp;
      pr.copy(p);
      let ax = this.ext[i].x;
      let ay = this.ext[i].y;
      let az = this.ext[i].z;
      if (gc) {
        // Радиальная гравитация: единичный вектор к центру × сила.
        const gx = gc.x - p.x, gy = gc.y - p.y, gz = gc.z - p.z;
        const gl = Math.sqrt(gx * gx + gy * gy + gz * gz) || 1e-6;
        // Хвост: выше gravityFalloffR величина падает как (R/r)^p (непрерывно —
        // ровно на стыке множитель равен 1). Ниже — константа, как было.
        const fr = this.gravityFalloffR;
        let s = (fr !== null && gl > fr)
          ? (gStr * Math.pow(fr / gl, this.gravityFalloffP)) / gl
          : gStr / gl;
        // Страховка: далеко за returnRadius добавляем доводящую силу, растущую
        // с расстоянием, — мягко возвращает улетевший блоб (без телепорта).
        if (this.returnRadius && gl > this.returnRadius) {
          s += (this.returnStrength * (gl - this.returnRadius)) / gl;
        }
        ax += gx * s; ay += gy * s; az += gz * s;
      } else {
        ay += GRAVITY;
      }
      // Вода: та же частица, тот же цикл. Сначала проверяем СЕКТОР и уровень —
      // на суше (а её вокруг озера вся планета) это два умножения и выход.
      if (wz) {
        const wx = p.x - wc.x, wy = p.y - wc.y, wz2 = p.z - wc.z;
        const wl = Math.sqrt(wx * wx + wy * wy + wz2 * wz2) || 1e-6;
        if (wl < wz.level
          && (wx * wz.dir.x + wy * wz.dir.y + wz2 * wz.dir.z) / wl > wz.cosAng) {
          // Выталкивание ∝ глубине (с клэмпом), вдоль радиали НАРУЖУ.
          const depth = Math.min(wz.level - wl, wz.maxDepth);
          const b = (wz.buoyancy * depth) / (wz.maxDepth * wl);
          ax += wx * b; ay += wy * b; az += wz2 * b;
          // Вязкость: непрерывная сила −v·drag (v = смещение за шаг / dt).
          ax -= vx * wDrag; ay -= vy * wDrag; az -= vz * wDrag;
        }
      }
      let dx = vx + ax * FIXED_DT * FIXED_DT;
      let dy = vy + ay * FIXED_DT * FIXED_DT;
      let dz = vz + az * FIXED_DT * FIXED_DT;
      // Клэмп смещения — предохранитель от взрыва.
      const step2 = dx * dx + dy * dy + dz * dz;
      if (step2 > MAX_STEP * MAX_STEP) {
        const s = MAX_STEP / Math.sqrt(step2);
        dx *= s; dy *= s; dz *= s;
      }
      p.x += dx; p.y += dy; p.z += dz;
    }

    // Итерации PBD-констрейнтов (пружины) — всегда сходятся, не взрываются.
    for (let it = 0; it < ITERATIONS; it++) {
      // Щип-подъём: захваченные частицы тянутся К ТОЧКЕ ПАЛЬЦА каждая (не блоком)
      // → сходятся в мягкий носик-«сосок», а тело провисает капелькой под ним на
      // растянутой шейке. Тело поднимается: пружины тянут низ к носику. grabStiff
      // — доля за итерацию (мягкий позиционный зажим, объём-констрейнт не рвёт).
      if (this.grabActive && this.grabStiff > 0) {
        const gp = this.grabPoint, k = this.grabStiff;
        for (const gi of this.grabParticles) {
          const p = this.pos[gi];
          p.x += (gp.x - p.x) * k; p.y += (gp.y - p.y) * k; p.z += (gp.z - p.z) * k;
        }
      }
      const gm = this.grabActive ? this.grabbedMask : null;
      for (const s of this.springs) {
        const pa = this.pos[s.a];
        const pb = this.pos[s.b];
        const dx = pb.x - pa.x, dy = pb.y - pa.y, dz = pb.z - pa.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1e-6;
        // Рёбра к захваченным частицам мягче → тянется шейка-хвостик; ВСЕ
        // структурные пружины (оболочка + к центру, они держат шар) дополнительно
        // множатся на живой shellStiffScale → сон-размягчение растекает тело.
        const soft = (gm && (gm[s.a] || gm[s.b])) ? this.neckSoft : 1;
        const diff = ((dist - s.rest) / dist) * 0.5 * s.stiff * this.shellStiffScale * soft;
        const cx = dx * diff, cy = dy * diff, cz = dz * diff;
        pa.x += cx; pa.y += cy; pa.z += cz;
        pb.x -= cx; pb.y -= cy; pb.z -= cz;
      }
      // Сохранение объёма (несжимаемость желе + расправление после сжатий).
      this._projectVolume(VOLUME_STIFF);
      // Коллизии с миром после каждого прохода (стабильно у стен), но ТРЕНИЕ —
      // только на последней итерации, иначе оно умножается ×ITERATIONS и желе
      // «приклеивается» к полу (источник непроходимости щелей).
      if (world) {
        const fr = it === ITERATIONS - 1;
        for (let i = 0; i <= this.centerIdx; i++) {
          world.resolveParticle(this.pos[i], this.prev[i], this.particleRadius, fr);
        }
      }
    }
  }

  // ---------------------- Обновление за кадр (dt реальный) -------------------
  update(dt, world) {
    this._acc += Math.min(dt, 0.05);
    let steps = 0;
    while (this._acc >= FIXED_DT && steps < MAX_SUBSTEPS) {
      this._step(world);
      this._acc -= FIXED_DT;
      steps++;
    }

    // Центр масс и скорость.
    this.prevCom.copy(this.com);
    this.com.set(0, 0, 0);
    for (let i = 0; i < this.shellCount; i++) this.com.add(this.pos[i]);
    this.com.multiplyScalar(1 / this.shellCount);
    if (dt > 0) this.velocity.copy(this.com).sub(this.prevCom).multiplyScalar(1 / dt);

    // Компрессия (для звука/анимации).
    const V = this._volume();
    this.compression = (this.restVolume - V) / this.restVolume;

    this._syncMesh();
  }

  _syncMesh() {
    // Позиции вершин = взвешенная сумма привязанных частиц, в локале COM.
    const posAttr = this.geo.attributes.position;
    const v = this._t1;
    for (let i = 0; i < posAttr.count; i++) {
      v.set(0, 0, 0);
      for (const b of this.binds[i]) {
        v.addScaledVector(this.pos[b.j], b.w);
      }
      posAttr.setXYZ(i, v.x - this.com.x, v.y - this.com.y, v.z - this.com.z);
    }
    posAttr.needsUpdate = true;
    this.geo.computeVertexNormals();

    this.group.position.copy(this.com);

    // Ядрышко — к центральной частице (в локале).
    this._t2.copy(this.pos[this.centerIdx]).sub(this.com);
    this.core.position.copy(this._t2);

    if (!this.externalFace) this._updateEyes();
  }

  // ---- Публичный помощник для внешнего лица (planet/blob.js) ----------------
  // По мировому направлению dir (от COM) находит ближайшую по направлению
  // частицу оболочки и возвращает ЛОКАЛЬНУЮ точку на поверхности (относительно
  // COM) + вынос extra наружу вдоль dir. Так глаза/рот/щёки сидят на фактической
  // поверхности и не тонут при сжатии. out — переиспользуемый THREE.Vector3.
  surfaceAlong(dir, extra, out) {
    const dl = Math.hypot(dir.x, dir.y, dir.z) || 1;
    const nx = dir.x / dl, ny = dir.y / dl, nz = dir.z / dl;
    let best = 0, bestDot = -2;
    for (let i = 0; i < this.shellCount; i++) {
      const dx = this.pos[i].x - this.com.x;
      const dy = this.pos[i].y - this.com.y;
      const dz = this.pos[i].z - this.com.z;
      const len = Math.hypot(dx, dy, dz) || 1;
      const dot = (dx * nx + dy * ny + dz * nz) / len;
      if (dot > bestDot) { bestDot = dot; best = i; }
    }
    out.set(
      this.pos[best].x - this.com.x + nx * extra,
      this.pos[best].y - this.com.y + ny * extra,
      this.pos[best].z - this.com.z + nz * extra,
    );
    return out;
  }

  // Глазки сидят НА поверхности: для каждого целевого направления берём ближайшую
  // по направлению частицу оболочки и выносим глаз наружу вдоль этого направления.
  _updateEyes() {
    const vel = this._t3.copy(this.velocity);
    vel.y = 0;
    if (vel.lengthSq() > 0.05) {
      vel.normalize();
      this.front.lerp(vel, 0.12).normalize();
    }
    // При захвате глаза косятся к курсору (сильнее, чем следование за скоростью).
    if (this.grabLook) {
      const g = this._t3.copy(this.grabLook).sub(this.com);
      g.y = 0;
      if (g.lengthSq() > 0.02) { g.normalize(); this.front.lerp(g, 0.3).normalize(); }
    }
    const right = this._right.crossVectors(this._up, this.front).normalize();

    for (let e = 0; e < 2; e++) {
      const side = this.eyeWhites[e].userData.side;
      // Цель: вперёд + вбок + чуть вверх.
      const dir = this._dir.copy(this.front)
        .addScaledVector(right, 0.42 * side)
        .addScaledVector(this._up, 0.34)
        .normalize();

      // Ближайшая по направлению частица оболочки.
      let best = 0, bestDot = -2;
      for (let i = 0; i < this.shellCount; i++) {
        const dx = this.pos[i].x - this.com.x;
        const dy = this.pos[i].y - this.com.y;
        const dz = this.pos[i].z - this.com.z;
        const len = Math.hypot(dx, dy, dz) || 1;
        const dot = (dx * dir.x + dy * dir.y + dz * dir.z) / len;
        if (dot > bestDot) { bestDot = dot; best = i; }
      }
      // Локальные позиции (группа стоит в COM): белок на поверхности + вынос,
      // зрачок ещё дальше наружу — всегда поверх геля.
      const sp = this._t2.copy(this.pos[best]).sub(this.com).addScaledVector(dir, 0.16);
      this.eyeWhites[e].position.copy(sp);
      this.eyePupils[e].position.copy(sp).addScaledVector(dir, 0.26);
    }
  }

  dispose() {
    this.scene.remove(this.group);
    this.geo.dispose();
  }
}
