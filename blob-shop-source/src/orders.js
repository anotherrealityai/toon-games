export const ORDERS = Object.freeze([
  { id: 'aqua-bunny', title: 'Нежного зайчонка', material: 'aqua', details: { ear: 2 }, toys: { duck: 1 } },
  { id: 'cherry-stars', title: 'Вишнёвое чудо', material: 'cherry', details: { horn: 2 }, toys: { star: 2 } },
  { id: 'little-mix', title: 'Необычного друга', material: 'aqua', details: { ear: 1, horn: 1 }, toys: { duck: 2, star: 1 } },
]);

export const NAMES = { aqua: 'Аква', cherry: 'Вишня', ear: 'Ушко', horn: 'Рожок', duck: 'Уточка', star: 'Звезда' };
export const TOYS = new Set(['duck', 'star']);
export const DETAILS = new Set(['ear', 'horn']);

// Composition changes only here. Pending and extracting toys keep their places.
export class Assembly {
  constructor() { this.clear(); }
  clear() { this.material = null; this.items = new Map(); this.materialSequence = 0; this.pendingMaterial = false; }
  reserve(id, type) {
    if (this.items.has(id) || (!TOYS.has(type) && !DETAILS.has(type))) return false;
    if (TOYS.has(type) && this.toySlots >= 3) return false;
    this.items.set(id, { id, type, state: 'pending' });
    return true;
  }
  commit(id) {
    const item = this.items.get(id);
    if (!item || item.state !== 'pending') return false;
    item.state = TOYS.has(item.type) ? 'inside' : 'attached';
    return true;
  }
  beginExtraction(id) {
    const item = this.items.get(id);
    if (!item || !['inside', 'attached'].includes(item.state)) return false;
    item.previousState = item.state;
    item.state = 'extracting';
    return true;
  }
  cancelExtraction(id) {
    const item = this.items.get(id);
    if (!item || item.state !== 'extracting') return false;
    item.state = item.previousState;
    delete item.previousState;
    return true;
  }
  remove(id) { return this.items.delete(id); }
  get toySlots() { return [...this.items.values()].filter(item => TOYS.has(item.type)).length; }
  get settled() { return !this.pendingMaterial && [...this.items.values()].every(item => ['inside', 'attached'].includes(item.state)); }
  nextMaterial() { this.pendingMaterial = true; return ++this.materialSequence; }
  applyMaterial(id, sequence) {
    if (sequence !== this.materialSequence || !['aqua', 'cherry'].includes(id)) return false;
    this.material = id;
    this.pendingMaterial = false;
    return true;
  }
  snapshot() {
    const details = {}, toys = {};
    for (const item of this.items.values()) {
      if (!['inside', 'attached'].includes(item.state)) continue;
      const counts = TOYS.has(item.type) ? toys : details;
      counts[item.type] = (counts[item.type] || 0) + 1;
    }
    return { material: this.material, details, toys };
  }
}

export function compareOrder(order, assembly) {
  const actual = assembly instanceof Assembly ? assembly.snapshot() : assembly;
  const missing = [], extra = [];
  for (const group of ['details', 'toys']) {
    for (const type of new Set([...Object.keys(order[group]), ...Object.keys(actual[group])])) {
      const difference = (order[group][type] || 0) - (actual[group][type] || 0);
      if (difference > 0) missing.push({ type, count: difference });
      if (difference < 0) extra.push({ type, count: -difference });
    }
  }
  const wrongMaterial = actual.material !== order.material;
  return { ok: !wrongMaterial && !missing.length && !extra.length, wrongMaterial, material: order.material, missing, extra };
}

export class OrderSession {
  constructor() { this.index = 0; this.accepted = new Set(); }
  get order() { return ORDERS[this.index] || null; }
  get complete() { return this.index >= ORDERS.length; }
  ring(assembly) {
    if (!this.order || this.accepted.has(this.order.id)) return { status: 'already' };
    if (!assembly.settled) return { status: 'settling' };
    const comparison = compareOrder(this.order, assembly);
    if (!comparison.ok) return { status: 'incorrect', ...comparison };
    this.accepted.add(this.order.id);
    return { status: 'accepted', id: this.order.id };
  }
  advance() {
    if (!this.order || !this.accepted.has(this.order.id)) return false;
    this.index++;
    return true;
  }
}
