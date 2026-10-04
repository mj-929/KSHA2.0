import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Search, Globe, Phone, Mail } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface HeaderHUDProps {
  onOpenCommandPalette: () => void;
  lang: 'en' | 'kn';
  setLang: (lang: 'en' | 'kn') => void;
  isMotionPaused: boolean;
  setIsMotionPaused: (paused: boolean) => void;
  textSize: 'sm' | 'md' | 'lg';
  setTextSize: (size: 'sm' | 'md' | 'lg') => void;
}

export const HeaderHUD: React.FC<HeaderHUDProps> = ({
  onOpenCommandPalette,
  lang,
  setLang,
  isMotionPaused,
  setIsMotionPaused,
  textSize,
  setTextSize,
}) => {
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Utility & Accessibility Bar */}
      <div className="bg-[#FBF8F7] border-b border-[#E6DAD8] text-[12px] font-sans py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-4 text-[#5C5350]">
            <span className="hidden sm:inline">Registered society · Private sports club · Bengaluru</span>
            <span className="hidden md:inline">·</span>
            <a
              href="mailto:karnatakastatehockey@gmail.com"
              className="hover:text-[#E3000F] transition-colors flex items-center gap-1"
            >
              <Mail className="w-3 h-3" />
              <span>karnatakastatehockey@gmail.com</span>
            </a>
            <span className="hidden lg:inline">·</span>
            <a
              href="tel:+917899236355"
              className="hover:text-[#E3000F] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>78992 36355</span>
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono">
            {/* Text Resizing Controls */}
            <button
              onClick={() => setTextSize('sm')}
              className={`px-1.5 py-0.5 border rounded ${
                textSize === 'sm' ? 'bg-black text-white border-black' : 'border-[#8F8482] text-black hover:border-black'
              }`}
              aria-label="Decrease text size"
            >
              A−
            </button>
            <button
              onClick={() => setTextSize('md')}
              className={`px-1.5 py-0.5 border rounded ${
                textSize === 'md' ? 'bg-black text-white border-black' : 'border-[#8F8482] text-black hover:border-black'
              }`}
              aria-label="Default text size"
            >
              A
            </button>
            <button
              onClick={() => setTextSize('lg')}
              className={`px-1.5 py-0.5 border rounded ${
                textSize === 'lg' ? 'bg-black text-white border-black' : 'border-[#8F8482] text-black hover:border-black'
              }`}
              aria-label="Increase text size"
            >
              A+
            </button>

            {/* Motion Pause Toggle */}
            <button
              onClick={() => setIsMotionPaused(!isMotionPaused)}
              className={`px-2 py-0.5 border rounded transition-colors ${
                isMotionPaused ? 'bg-black text-white border-black' : 'border-[#8F8482] text-black hover:border-black'
              }`}
              aria-pressed={isMotionPaused}
            >
              {isMotionPaused ? 'Play motion' : 'Pause motion'}
            </button>

            {/* Language Toggles */}
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 border rounded font-semibold ${
                lang === 'en' ? 'bg-[#E3000F] text-white border-[#E3000F]' : 'border-[#8F8482] text-black'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('kn')}
              className={`px-2 py-0.5 border rounded font-bold ${
                lang === 'kn' ? 'bg-[#E3000F] text-white border-[#E3000F]' : 'border-[#8F8482] text-black'
              }`}
              lang="kn"
            >
              ಕನ್ನಡ
            </button>
          </div>

        </div>
      </div>

      {/* Main Glass Header */}
      <div
        className={`px-4 sm:px-6 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E6DAD8] py-2.5 shadow-sm'
            : 'bg-white/80 backdrop-blur-sm border-b border-neutral-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Official Crest & Typography */}
          <a
            href="#overture"
            onClick={() => soundEngine.playStickStrike()}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src="/ksha-crest.png"
              alt="KSHA Official Seal"
              className="w-11 h-11 object-contain transition-transform group-hover:scale-105"
            />
            <div>
              <span className="disp text-2xl tracking-[0.06em] text-black group-hover:text-[#E3000F] transition-colors block">
                KSHA
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5C5350] block -mt-1">
                ESTD. 1937 · BENGALURU
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav aria-label="Main" className="hidden lg:flex items-center gap-1 font-mono text-xs uppercase tracking-[0.14em]">
            <a
              href="#cup"
              onClick={() => soundEngine.playSplitFlap()}
              className="px-3 py-2 text-black hover:text-[#E3000F] transition-colors font-medium"
            >
              {lang === 'kn' ? 'ಟ್ರಾವಂಕೋರ್ ಕಪ್' : 'The Cup'}
            </a>
            <a
              href="#battlegrounds"
              onClick={() => soundEngine.playSplitFlap()}
              className="px-3 py-2 text-black hover:text-[#E3000F] transition-colors font-medium"
            >
              {lang === 'kn' ? 'ಲೀಗ್' : 'The League'}
            </a>
            <a
              href="#cradles"
              onClick={() => soundEngine.playSplitFlap()}
              className="px-3 py-2 text-black hover:text-[#E3000F] transition-colors font-medium"
            >
              {lang === 'kn' ? 'ಅಕಾಡೆಮಿ & ಜಿಲ್ಲೆಗಳು' : 'The Heirs'}
            </a>
            <a
              href="#immortals"
              onClick={() => soundEngine.playSplitFlap()}
              className="px-3 py-2 text-black hover:text-[#E3000F] transition-colors font-medium"
            >
              {lang === 'kn' ? '೧೫ ದಿಗ್ಗಜರು' : 'The Legends'}
            </a>
            <a
              href="#colosseum"
              onClick={() => soundEngine.playSplitFlap()}
              className="px-3 py-2 text-black hover:text-[#E3000F] transition-colors font-medium"
            >
              {lang === 'kn' ? 'ಕ್ರೀಡಾಂಗಣ' : 'The Stadium'}
            </a>
            <a
              href="#pavilion"
              onClick={() => soundEngine.playGloryChime()}
              className="px-3 py-2 text-black hover:text-[#E3000F] transition-colors font-medium"
            >
              {lang === 'kn' ? 'ಪ್ರೈವೇಟ್ ಕ್ಲಬ್' : 'The Club'}
            </a>
            <a
              href="#booking-facilities"
              onClick={() => soundEngine.playStickStrike()}
              className="px-3 py-2 text-black hover:text-[#E3000F] transition-colors font-medium"
            >
              {lang === 'kn' ? 'ಬುಕಿಂಗ್ಸ್' : 'Bookings'}
            </a>
            <a
              href="#vault"
              onClick={() => soundEngine.playSplitFlap()}
              className="px-3 py-2 text-black hover:text-[#E3000F] transition-colors font-medium"
            >
              {lang === 'kn' ? 'ಆಡಳಿತ' : 'Gazette'}
            </a>
            <a
              href="#appendix"
              onClick={() => soundEngine.playSplitFlap()}
              className="px-3 py-2 text-[#5C5350] hover:text-[#E3000F] transition-colors font-medium"
            >
              {lang === 'kn' ? 'ಅನುಬಂಧ' : 'Appendix'}
            </a>
            <a
              href="#booking-facilities"
              onClick={() => soundEngine.playGloryChime()}
              className="ml-2 px-4 py-2 bg-[#E3000F] hover:bg-[#9E000B] text-white font-bold transition-all shadow-sm"
            >
              {lang === 'kn' ? 'ಬುಕ್ ಮಾಡಿ' : 'Book Hall'}
            </a>
          </nav>

          {/* Right Action Controls: Audio & Command Palette */}
          <div className="flex items-center gap-2.5">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono border transition-all ${
                isAudioActive
                  ? 'bg-red-50 text-[#E3000F] border-[#E3000F] font-semibold'
                  : 'bg-neutral-50 text-[#5C5350] border-neutral-300 hover:border-neutral-400 hover:text-black'
              }`}
              title="Toggle Stadium Synthesizer Drone"
            >
              {isAudioActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#E3000F] animate-pulse" />
                  <span className="hidden sm:inline text-[10px] tracking-wider uppercase">SOUND ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#5C5350]" />
                  <span className="hidden sm:inline text-[10px] tracking-wider uppercase">AUDIO</span>
                </>
              )}
            </button>

            {/* Spotlight Command Palette Trigger */}
            <button
              onClick={() => {
                soundEngine.playSplitFlap();
                onOpenCommandPalette();
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded bg-neutral-50 border border-neutral-300 hover:border-[#E3000F] text-neutral-900 transition-all text-xs font-mono group shadow-xs"
            >
              <Search className="w-3.5 h-3.5 text-[#5C5350] group-hover:text-[#E3000F] transition-colors" />
              <span className="hidden sm:inline font-medium">Directory</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] bg-white border border-neutral-300 rounded text-neutral-600 group-hover:text-black">
                ⌘K
              </kbd>
            </button>
          </div>

        </div>
      </div>

    </header>
  );
};
