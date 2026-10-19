export class ShopAudio {
  constructor() { this.muted = false; this.context = null; }
  unlock() {
    if (!this.context) this.context = new (window.AudioContext || window.webkitAudioContext)();
    if (this.context.state === 'suspended') this.context.resume();
  }
  play(kind) {
    if (this.muted || !this.context) return;
    const notes = { pick: [430, .055, 'sine'], soft: [265, .11, 'sine'], pop: [610, .14, 'sine'], error: [240, .16, 'triangle'], bell: [1320, .8, 'sine'], success: [650, .35, 'sine'] };
    const [frequency, duration, type] = notes[kind] || notes.soft;
    const now = this.context.currentTime;
    const ring = (pitch, offset, volume) => {
      const oscillator = this.context.createOscillator(), gain = this.context.createGain();
      oscillator.type = type; oscillator.frequency.setValueAtTime(pitch, now + offset);
      if (kind === 'pop') oscillator.frequency.exponentialRampToValueAtTime(pitch * .55, now + offset + duration);
      gain.gain.setValueAtTime(.0001, now + offset);
      gain.gain.exponentialRampToValueAtTime(volume, now + offset + .009);
      gain.gain.exponentialRampToValueAtTime(.0001, now + offset + duration);
      oscillator.connect(gain); gain.connect(this.context.destination);
      oscillator.start(now + offset); oscillator.stop(now + offset + duration + .02);
    };
    ring(frequency, 0, kind === 'bell' ? .055 : .045);
    if (kind === 'bell') { ring(frequency * 2.01, 0, .012); ring(frequency * 3.96, 0, .006); }
    if (kind === 'success') { ring(frequency * 1.25, .1, .035); ring(frequency * 1.5, .2, .035); }
  }
}
