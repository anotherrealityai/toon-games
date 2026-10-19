import assert from 'node:assert/strict';
import { Assembly, OrderSession, ORDERS, compareOrder } from '../src/orders.js';

let checks = 0;
function test(name, callback) { callback(); checks++; console.log(`✓ ${name}`); }
function assemble(order) {
  const assembly = new Assembly();
  assembly.applyMaterial(order.material, assembly.nextMaterial());
  let id = 0;
  for (const group of ['details', 'toys']) for (const [type, count] of Object.entries(order[group])) {
    for (let i = 0; i < count; i++) { assembly.reserve(String(++id), type); assembly.commit(String(id)); }
  }
  return assembly;
}
test('All three exact recipes pass, additions in any order', () => {
  for (const order of ORDERS) assert.equal(compareOrder(order, assemble(order)).ok, true);
});
test('Material is an explicit choice and fully replaced', () => {
  const assembly = assemble(ORDERS[0]);
  const old = assembly.nextMaterial(), latest = assembly.nextMaterial();
  assert.equal(assembly.applyMaterial('cherry', latest), true);
  assert.equal(assembly.applyMaterial('aqua', old), false);
  assert.equal(assembly.material, 'cherry');
  assert.equal(assembly.toySlots, 1);
  assembly.applyMaterial('aqua', assembly.nextMaterial());
  assert.equal(compareOrder(ORDERS[0], assembly).ok, true);
});
test('A capsule in flight blocks delivery until its latest material commits', () => {
  const session = new OrderSession(), assembly = assemble(ORDERS[0]);
  const cherry = assembly.nextMaterial();
  assert.equal(assembly.material, 'aqua');
  assert.equal(assembly.settled, false);
  assert.equal(session.ring(assembly, true).status, 'settling');
  assert.equal(session.accepted.size, 0);
  assembly.applyMaterial('cherry', cherry);
  assert.equal(assembly.settled, true);
  assert.equal(session.ring(assembly, true).status, 'incorrect');
  const aqua = assembly.nextMaterial();
  assert.equal(session.ring(assembly, true).status, 'settling');
  assembly.applyMaterial('aqua', aqua);
  assert.equal(session.ring(assembly, true).status, 'accepted');
});
test('A stale capsule callback cannot unblock the latest pending material', () => {
  const session = new OrderSession(), assembly = assemble(ORDERS[0]);
  const older = assembly.nextMaterial(), latest = assembly.nextMaterial();
  assert.equal(assembly.applyMaterial('aqua', older), false);
  assert.equal(assembly.settled, false);
  assert.equal(session.ring(assembly, true).status, 'settling');
  assert.equal(assembly.applyMaterial('cherry', latest), true);
  assert.equal(assembly.settled, true);
  assert.equal(session.ring(assembly, true).status, 'incorrect');
  assert.equal(assembly.applyMaterial('aqua', older), false);
  assert.equal(assembly.material, 'cherry');
});
test('The fourth toy cannot displace any of three pending reservations', () => {
  const assembly = new Assembly();
  for (const id of ['a', 'b', 'c']) assert.equal(assembly.reserve(id, 'duck'), true);
  assert.equal(assembly.reserve('d', 'star'), false);
  assert.deepEqual([...assembly.items.keys()], ['a', 'b', 'c']);
  for (const id of ['a', 'b', 'c']) assembly.commit(id);
  assert.equal(assembly.toySlots, 3);
});
test('Repeated reservation and absorption callbacks cannot duplicate contents', () => {
  const assembly = new Assembly();
  assert.equal(assembly.reserve('a', 'duck'), true);
  assert.equal(assembly.reserve('a', 'duck'), false);
  assert.equal(assembly.commit('a'), true);
  assert.equal(assembly.commit('a'), false);
  assert.deepEqual(assembly.snapshot().toys, { duck: 1 });
});
test('Extracting one chosen toy keeps its reservation until it has left', () => {
  const assembly = assemble(ORDERS[2]);
  const chosen = [...assembly.items.values()].find(item => item.type === 'duck').id;
  assert.equal(assembly.beginExtraction(chosen), true);
  assert.equal(assembly.toySlots, 3);
  assert.equal(assembly.reserve('new', 'star'), false);
  assert.equal(assembly.settled, false);
  assembly.remove(chosen);
  assert.deepEqual(assembly.snapshot().toys, { duck: 1, star: 1 });
  assert.equal(assembly.reserve('new', 'star'), true);
});
test('Cancellation restores the selected toy and no other instance changes', () => {
  const assembly = assemble(ORDERS[2]);
  const before = assembly.snapshot();
  const chosen = [...assembly.items.values()].find(item => item.type === 'duck').id;
  assembly.beginExtraction(chosen); assembly.cancelExtraction(chosen);
  assert.deepEqual(assembly.snapshot(), before);
});
test('Unlimited mixed external details, with precise excess reported', () => {
  const assembly = assemble(ORDERS[0]);
  for (let i = 0; i < 140; i++) { assembly.reserve(`extra-${i}`, i % 2 ? 'ear' : 'horn'); assembly.commit(`extra-${i}`); }
  const result = compareOrder(ORDERS[0], assembly);
  assert.equal(assembly.items.size, 143);
  assert.equal(result.ok, false);
  assert.deepEqual(result.extra, [{ type: 'ear', count: 70 }, { type: 'horn', count: 70 }]);
});
test('Missing and excess types are distinguished even when totals match', () => {
  const assembly = assemble(ORDERS[0]);
  const ear = [...assembly.items.values()].find(item => item.type === 'ear').id;
  assembly.remove(ear); assembly.reserve('horn', 'horn'); assembly.commit('horn');
  const result = compareOrder(ORDERS[0], assembly);
  assert.deepEqual(result.missing, [{ type: 'ear', count: 1 }]);
  assert.deepEqual(result.extra, [{ type: 'horn', count: 1 }]);
});
test('A bell requires the whole released body in the basket', () => {
  const session = new OrderSession(), assembly = assemble(ORDERS[0]);
  assert.equal(session.ring(assembly, false).status, 'basket');
  assert.equal(session.index, 0);
  assert.equal(session.accepted.size, 0);
});
test('Incorrect assembly stays with the same customer, correction can pass', () => {
  const session = new OrderSession(), assembly = assemble(ORDERS[0]);
  assembly.reserve('extra', 'star'); assembly.commit('extra');
  assert.equal(session.ring(assembly, true).status, 'incorrect');
  assert.equal(session.index, 0);
  assembly.remove('extra');
  assert.equal(session.ring(assembly, true).status, 'accepted');
  assert.equal(session.ring(assembly, true).status, 'already');
  assert.equal(session.accepted.size, 1);
});
test('Exactly three atomic deliveries finish a session', () => {
  const session = new OrderSession();
  for (const order of ORDERS) {
    assert.equal(session.ring(assemble(order), true).status, 'accepted');
    assert.equal(session.ring(assemble(order), true).status, 'already');
    assert.equal(session.advance(), true);
  }
  assert.equal(session.complete, true);
  assert.equal(session.accepted.size, 3);
  assert.equal(session.advance(), false);
});
console.log(`${checks} order/composition tests passed.`);
