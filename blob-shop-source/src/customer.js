const manifestURL = new URL('../assets/textures/2d-manifest.json', import.meta.url);
const atlasURL = new URL('../assets/textures/customer-atlas.png', import.meta.url);

export class Customer {
  async load(element) {
    this.element = element;
    this.canvas = element.querySelector('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = 520; this.canvas.height = 640;
    const manifest = await fetch(manifestURL).then(response => response.json());
    this.frames = Object.fromEntries(manifest.customer.frames.map(frame => [frame.name, frame]));
    this.atlas = new Image(); this.atlas.src = atlasURL.href;
    await this.atlas.decode();
    this.current = 'idle'; this.previous = 'idle'; this.transition = 1;
    this.time = 0; this.nextBlink = 2.4; this.blinkUntil = 0;
    this.poseUntil = 0; this.pose = null; this.working = false;
    this.draw();
  }
  react(name, duration = 1.5) { this.pose = name; this.poseUntil = this.time + duration; }
  setWorking(value) { this.working = value; }
  update(dt) {
    this.time += dt;
    if (this.time >= this.nextBlink) {
      this.blinkUntil = this.time + .13;
      this.nextBlink = this.time + 2.7 + Math.random() * 2.4;
    }
    let desired = this.working ? 'watch' : 'idle';
    if (this.pose && this.time < this.poseUntil) desired = this.pose;
    else if (this.time < this.blinkUntil) desired = this.working ? 'watch_blink' : 'blink';
    if (desired !== this.current) {
      this.previous = this.current; this.current = desired; this.transition = 0;
    }
    this.transition = Math.min(1, this.transition + dt / (desired.includes('blink') ? .045 : .15));
    // The poses and blinks carry the animation. A slow posture shift is subtle enough
    // to retain the illustrated body, and is anchored behind the actual counter.
    const lean = this.working ? -.8 : .5;
    this.element.style.transform = `translateY(${Math.sin(this.time * 1.2) * .65}px) rotate(${lean}deg)`;
    this.draw();
  }
  drawFrame(name, alpha) {
    const frame = this.frames[name] || this.frames.idle;
    const [x, y, width, height] = frame.sourceRect;
    const targetHeight = 620, targetWidth = targetHeight * width / height;
    this.context.globalAlpha = alpha;
    this.context.drawImage(this.atlas, x, y, width, height, (520 - targetWidth) / 2, 640 - targetHeight, targetWidth, targetHeight);
  }
  draw() {
    this.context.clearRect(0, 0, 520, 640);
    if (this.transition < 1) this.drawFrame(this.previous, 1 - this.transition);
    this.drawFrame(this.current, this.transition);
    this.context.globalAlpha = 1;
  }
}
