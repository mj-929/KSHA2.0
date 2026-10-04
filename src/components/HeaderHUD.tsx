import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Search, Shield, Radio, Globe } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface HeaderHUDProps {
  onOpenCommandPalette: () => void;
  lang: 'en' | 'kn';
  setLang: (lang: 'en' | 'kn') => void;
}

export const HeaderHUD: React.FC<HeaderHUDProps> = ({ onOpenCommandPalette, lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = soundEngine.toggleAmbientDrone();
    setIsAudioActive(active);
    soundEngine.playSplitFlap();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-ksha-void/90 backdrop-blur-md border-b border-ksha-border py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Left: Royal Seal & Title */}
        <a
          href="#overture"
          onClick={() => soundEngine.playStickStrike()}
          className="flex items-center gap-3.5 group cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-full bg-ksha-red flex items-center justify-center p-0.5 shadow-lg shadow-ksha-red/30 transition-transform group-hover:scale-105 border border-white/20">
            <div className="w-full h-full rounded-full border border-white/40 flex items-center justify-center bg-black/30">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -inset-1 rounded-full bg-ksha-red/20 blur group-hover:bg-ksha-red/40 transition-colors" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-cinzel font-bold text-sm tracking-[0.18em] text-white group-hover:text-ksha-red transition-colors">
                KSHA
              </span>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/10 text-neutral-300 border border-white/10">
                1937
              </span>
            </div>
            <div className="text-[10.5px] font-mono tracking-wider text-neutral-400 group-hover:text-neutral-200 transition-colors hidden sm:block">
              {lang === 'kn' ? 'ಕರ್ನಾಟಕ ಹಾಕಿ ಸಂಸ್ಥೆ & ಪ್ರೈವೇಟ್ ಕ್ಲಬ್' : 'HOCKEY ASSOCIATION & PRIVATE CLUB'}
            </div>
          </div>
        </a>

        {/* Center: Live Status Indicator */}
        <div className="hidden lg:flex items-center gap-3 px-3 py-1 rounded-full bg-black/60 border border-neutral-800 text-[11px] font-mono">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-turf-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-turf-green"></span>
            </span>
            <span className="text-neutral-200 tracking-wider">LANGFORD TOWN PITCH</span>
          </div>
          <span className="text-neutral-600">|</span>
          <span className="text-neutral-400">1,200 LUX READY</span>
          <span className="text-neutral-600">|</span>
          <span className="text-ksha-red font-semibold">SUPER DIVISION</span>
        </div>

        {/* Right: Controls & Directory */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono border transition-all ${
              isAudioActive
                ? 'bg-ksha-red/20 text-ksha-red border-ksha-red/50 shadow-[0_0_15px_rgba(225,6,0,0.3)]'
                : 'bg-white/5 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
            }`}
            title="Toggle Stadium Drone & Acoustic Synthesizer"
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-ksha-red animate-pulse" />
                <span className="hidden md:inline text-[10px] tracking-widest uppercase">SOUND ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden md:inline text-[10px] tracking-widest uppercase">AUDIO</span>
              </>
            )}
          </button>

          {/* Bilingual Toggle (English / Kannada) */}
          <button
            onClick={() => {
              soundEngine.playSplitFlap();
              setLang(lang === 'en' ? 'kn' : 'en');
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-mono bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-ksha-red/50 transition-all"
            title="Toggle Kannada / English"
          >
            <Globe className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-bold text-[11px]">{lang === 'en' ? 'ಕನ್ನಡ' : 'EN'}</span>
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              soundEngine.playSplitFlap();
              onOpenCommandPalette();
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-neutral-900 border border-neutral-700 hover:border-ksha-red text-neutral-200 hover:text-white transition-all text-xs font-mono group"
          >
            <Search className="w-3.5 h-3.5 text-neutral-400 group-hover:text-ksha-red transition-colors" />
            <span className="hidden sm:inline">Grand Directory</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] bg-black border border-neutral-700 rounded text-neutral-400 group-hover:text-white">
              ⌘K
            </kbd>
          </button>

        </div>

      </div>
    </header>
  );
};
