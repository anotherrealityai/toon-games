import { NAMES, CATEGORIES } from './orders.js';
import { MODEL_TYPES } from './assets.js';

export function makeInventory(element, icons, takeItem) {
  const sources = [], scrolls = new Map();
  for (const category of CATEGORIES) {
    const row = document.createElement('section'); row.className = 'inventory-row'; row.dataset.category = category.id;
    row.setAttribute('aria-label', category.name);
    const heading = document.createElement('div'); heading.className = 'inventory-heading';
    heading.innerHTML = `<strong>${category.name}</strong><span aria-hidden="true">↔</span>`;
    const rail = document.createElement('div'); rail.className = 'inventory-rail'; rail.tabIndex = 0;
    rail.setAttribute('aria-label', `${category.name}: прокрутка влево и вправо`);
    for (const type of category.types) {
      const card = document.createElement('div'); card.className = 'stock-card';
      const object = document.createElement('button'); object.className = 'stock-object'; object.dataset.type = type;
      object.setAttribute('aria-label', `Взять: ${NAMES[type]}`);
      const image = document.createElement('img'); image.src = icons[MODEL_TYPES[type] || type]; image.alt = ''; image.draggable = false;
      object.append(image);
      const name = document.createElement('span'); name.textContent = NAMES[type];
      card.append(object, name); rail.append(card); sources.push({ type, element: object, row, rail });
    }
    row.append(heading, rail); element.append(row);
    row.addEventListener('pointerdown', event => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      event.preventDefault();
      const object = event.target.closest('.stock-object');
      // The hit object decides the gesture. Direction never changes an item
      // pickup into scrolling, or a tray drag into an item pickup.
      if (object) { takeItem(object.dataset.type, event, object); return; }
      row.setPointerCapture(event.pointerId);
      scrolls.set(event.pointerId, { row, rail, x: event.clientX, left: rail.scrollLeft });
      row.classList.add('scrolling');
    });
    row.addEventListener('pointermove', event => {
      const drag = scrolls.get(event.pointerId); if (!drag) return;
      event.preventDefault(); drag.rail.scrollLeft = drag.left + drag.x - event.clientX;
    });
    const end = event => {
      const drag = scrolls.get(event.pointerId); if (!drag) return;
      scrolls.delete(event.pointerId); drag.row.classList.remove('scrolling');
      if (drag.row.hasPointerCapture(event.pointerId)) drag.row.releasePointerCapture(event.pointerId);
    };
    row.addEventListener('pointerup', end); row.addEventListener('pointercancel', end); row.addEventListener('lostpointercapture', end);
    rail.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault(); rail.scrollBy({ left: (event.key === 'ArrowLeft' ? -1 : 1) * rail.clientWidth * .6, behavior: 'smooth' });
    });
  }
  return { sources, cancel() {
    for (const [id, drag] of scrolls) {
      scrolls.delete(id); drag.row.classList.remove('scrolling');
      if (drag.row.hasPointerCapture(id)) drag.row.releasePointerCapture(id);
    }
  } };
}
