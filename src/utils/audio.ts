// Audio permanently disabled per user requirements
// Clean no-op interface ensuring zero sound output and zero memory/CPU overhead

class SoundEngine {
  public isMuted: boolean = true;

  public playStickStrike() {}
  public playSplitFlap() {}
  public playGloryChime() {}
  public playGoalRoar() {}
  public toggleAmbientDrone(_forcePlay?: boolean): boolean {
    return false;
  }
  public setMute(_muted: boolean) {
    this.isMuted = true;
  }
}

export const soundEngine = new SoundEngine();
