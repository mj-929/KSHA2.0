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
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200 py-3 shadow-md'
          : 'bg-white/40 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Left: Royal Seal & Title */}
        <a
          href="#overture"
          onClick={() => soundEngine.playStickStrike()}
          className="flex items-center gap-3.5 group cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-full bg-ksha-red flex items-center justify-center p-0.5 shadow-lg shadow-ksha-red/20 transition-transform group-hover:scale-105 border border-white">
            <div className="w-full h-full rounded-full border border-white/60 flex items-center justify-center bg-black/20">
              <Shield className="w-5 h-5 text-white" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-cinzel font-bold text-sm tracking-[0.18em] text-neutral-950 group-hover:text-ksha-red transition-colors">
                KSHA
              </span>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-800 border border-neutral-300">
                1937
              </span>
            </div>
            <div className="text-[10.5px] font-mono tracking-wider text-neutral-600 group-hover:text-neutral-900 transition-colors hidden sm:block">
              {lang === 'kn' ? 'ಕರ್ನಾಟಕ ಹಾಕಿ ಸಂಸ್ಥೆ & ಪ್ರೈವೇಟ್ ಕ್ಲಬ್' : 'HOCKEY ASSOCIATION & PRIVATE CLUB'}
            </div>
          </div>
        </a>

        {/* Center: Live Status Indicator */}
        <div className="hidden lg:flex items-center gap-3 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-300 text-[11px] font-mono">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-turf-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-turf-green"></span>
            </span>
            <span className="text-neutral-900 font-semibold tracking-wider">LANGFORD TOWN PITCH</span>
          </div>
          <span className="text-neutral-400">|</span>
          <span className="text-neutral-600">1,200 LUX READY</span>
          <span className="text-neutral-400">|</span>
          <span className="text-ksha-red font-bold">SUPER DIVISION</span>
        </div>

        {/* Right: Controls & Directory */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono border transition-all ${
              isAudioActive
                ? 'bg-ksha-red/10 text-ksha-red border-ksha-red shadow-[0_0_15px_rgba(225,6,0,0.2)] font-semibold'
                : 'bg-neutral-100 text-neutral-700 border-neutral-300 hover:border-neutral-400 hover:text-black'
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
                <VolumeX className="w-3.5 h-3.5 text-neutral-600" />
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
            className="flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-mono bg-neutral-100 border border-neutral-300 text-neutral-800 hover:text-black hover:border-ksha-red/50 transition-all"
            title="Toggle Kannada / English"
          >
            <Globe className="w-3.5 h-3.5 text-neutral-600" />
            <span className="font-bold text-[11px]">{lang === 'en' ? 'ಕನ್ನಡ' : 'EN'}</span>
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              soundEngine.playSplitFlap();
              onOpenCommandPalette();
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-neutral-100 border border-neutral-300 hover:border-ksha-red text-neutral-900 hover:text-black transition-all text-xs font-mono group shadow-sm"
          >
            <Search className="w-3.5 h-3.5 text-neutral-600 group-hover:text-ksha-red transition-colors" />
            <span className="hidden sm:inline font-medium">Grand Directory</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] bg-white border border-neutral-300 rounded text-neutral-600 group-hover:text-black">
              ⌘K
            </kbd>
          </button>

        </div>

      </div>
    </header>
  );
};
