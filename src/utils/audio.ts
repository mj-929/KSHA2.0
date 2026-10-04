// Web Audio API Synthesizer for KSHA Cinematic Experience
// No external MP3 downloads required; fully synthetic, latency-free audio

class SoundEngine {
  private ctx: AudioContext | null = null;
  public isMuted: boolean = false;
  private ambientGain: GainNode | null = null;
  private ambientOsc: OscillatorNode | null = null;
  private isAmbientPlaying: boolean = false;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Wooden field hockey stick strike sound
  public playStickStrike() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      
      // Resonant wood body strike
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(70, now + 0.08);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(450, now);
      filter.Q.setValueAtTime(4, now);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);

      // High transient snap (ball impact)
      const snapOsc = this.ctx.createOscillator();
      const snapGain = this.ctx.createGain();
      snapOsc.type = 'sine';
      snapOsc.frequency.setValueAtTime(1400, now);
      snapOsc.frequency.exponentialRampToValueAtTime(300, now + 0.03);

      snapGain.gain.setValueAtTime(0.25, now);
      snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

      snapOsc.connect(snapGain);
      snapGain.connect(this.ctx.destination);

      snapOsc.start(now);
      snapOsc.stop(now + 0.04);
    } catch {
      // AudioContext policy suppression
    }
  }

  // Mechanical split-flap board click
  public playSplitFlap() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(950, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.015);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.025);
    } catch {
      // Ignore
    }
  }

  // Deep cinematic imperial drone
  public playGloryChime() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(80, now);
      osc.frequency.exponentialRampToValueAtTime(55, now + 0.8);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.3);
    } catch {
      // Ignore
    }
  }

  // Celebratory stadium horn / goal roar
  public playGoalRoar() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Dual brass horns
      [220, 277.18, 329.63].forEach((freq) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.02, now + 0.6);

        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.75);
      });
    } catch {
      // Ignore
    }
  }

  // Ambient stadium drone toggle
  public toggleAmbientDrone(forcePlay?: boolean): boolean {
    this.initCtx();
    if (!this.ctx) return false;

    if (this.isAmbientPlaying && forcePlay !== true) {
      if (this.ambientGain) {
        this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      }
      setTimeout(() => {
        if (this.ambientOsc) {
          try { this.ambientOsc.stop(); } catch { /* ignore */ }
          this.ambientOsc.disconnect();
          this.ambientOsc = null;
        }
      }, 500);
      this.isAmbientPlaying = false;
      return false;
    } else {
      if (this.isMuted) this.isMuted = false;
      const now = this.ctx.currentTime;
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(55, now); // Low A

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.035, now + 1.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);

      this.ambientOsc = osc;
      this.ambientGain = gain;
      this.isAmbientPlaying = true;
      return true;
    }
  }

  public setMute(muted: boolean) {
    this.isMuted = muted;
    if (muted && this.isAmbientPlaying) {
      this.toggleAmbientDrone(false);
    }
  }
}

export const soundEngine = new SoundEngine();
