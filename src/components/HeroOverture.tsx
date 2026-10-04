import React from 'react';
import { soundEngine } from '../utils/audio';
import { Trophy, Castle, ArrowDown } from 'lucide-react';

interface HeroOvertureProps {
  lang: 'en' | 'kn';
  isMotionPaused?: boolean;
}

export const HeroOverture: React.FC<HeroOvertureProps> = ({
  lang,
  isMotionPaused = false,
}) => {
  return (
    <section
      id="overture"
      aria-label="Overture"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#FFFFFF] pt-28 pb-24 px-4 sm:px-6 select-none"
    >
      {/* 1. Breathing Radial Vermilion Aura */}
      <div
        aria-hidden="true"
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[900px] pointer-events-none rounded-full ${
          isMotionPaused ? '' : 'animate-breathe'
        }`}
        style={{
          background: 'radial-gradient(closest-side, rgba(227, 0, 15, 0.16), rgba(255, 255, 255, 0))',
        }}
      />

      {/* 3. Architectural Field Hockey Pitch Drawing (Animated SVG) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
        fill="none"
        stroke="#E3000F"
        strokeWidth="1.5"
      >
        <rect className={isMotionPaused ? '' : 'draw'} x="15" y="15" width="970" height="570" rx="4" />
        <line className={isMotionPaused ? '' : 'draw'} x1="500" y1="15" x2="500" y2="585" strokeDasharray="6 4" />
        <circle className={isMotionPaused ? '' : 'draw'} cx="500" cy="300" r="42" />
        <line className={isMotionPaused ? '' : 'draw'} x1="250" y1="15" x2="250" y2="585" strokeOpacity="0.45" />
        <line className={isMotionPaused ? '' : 'draw'} x1="750" y1="15" x2="750" y2="585" strokeOpacity="0.45" />
        {/* Striking D circles */}
        <path className={isMotionPaused ? '' : 'draw'} d="M15 150 A150 150 0 0 1 15 450" />
        <path className={isMotionPaused ? '' : 'draw'} d="M985 450 A150 150 0 0 1 985 150" />
        <circle cx="500" cy="300" r="6" fill="#E3000F" stroke="none" />
      </svg>

      {/* 4. Foreground Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Kicker Chapter Tag */}
        <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#FBF8F7] border border-[#E6DAD8] text-[12px] font-mono tracking-[0.34em] text-[#E3000F] uppercase mb-4 shadow-xs">
          <img
            src="/ksha-crest.png"
            alt="KSHA Official Seal"
            className="w-5 h-5 object-contain"
          />
          <span>BENGALURU · FIELD HOCKEY · ESTD. 1937 · MMXXVI</span>
        </div>

        {/* Monumental Headline: KSHA in Anton font with Vermilion Top-to-Bottom Gradient */}
        <h1 className="disp tracking-[0.005em] leading-[0.9] text-[120px] sm:text-[200px] md:text-[280px] lg:text-[380px] my-1 drop-shadow-[0_0_55px_rgba(227,0,15,0.22)]">
          <span className="sr-only">Karnataka State Hockey Association</span>
          <span className="goldtxt block" aria-hidden="true">
            KSHA
          </span>
        </h1>

        {/* Official Kannada Name */}
        <p
          lang="kn"
          className="font-kannada text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E3000F] tracking-wide mb-4 drop-shadow-xs"
        >
          ಕರ್ನಾಟಕ ರಾಜ್ಯ ಹಾಕಿ ಸಂಸ್ಥೆ
        </p>

        {/* Aristocratic Cormorant Garamond Whisper Lede */}
        <p className="whisper text-2xl sm:text-3xl lg:text-4xl text-[#000000] max-w-3xl leading-snug mb-10">
          {lang === 'kn'
            ? 'ಒಂದು ಕಪ್‌ನ ತೊಂಬತ್ತನಾಲ್ಕು ಆವೃತ್ತಿಗಳು. ನಾಲ್ಕು ವಿಭಾಗಗಳು. ಲ್ಯಾಂಗ್‌ಫೋರ್ಡ್ ಟೌನ್‌ನಲ್ಲಿ ಒಂದು ಐತಿಹಾಸಿಕ ಕ್ರೀಡಾಂಗಣ.'
            : 'Ninety-four editions of one cup. Four divisions. One stadium in Langford Town.'}
        </p>

        {/* Direct Action CTAs with Web Audio Sound Effects */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#colosseum"
            onClick={() => soundEngine.playStickStrike()}
            className="inline-flex items-center justify-center min-h-[56px] px-8 bg-[#E3000F] hover:bg-[#9E000B] text-white font-mono font-bold text-sm tracking-[0.16em] uppercase transition-all duration-200 shadow-lg shadow-red-600/25 hover:shadow-red-600/40"
          >
            <Trophy className="w-4 h-4 mr-2.5" />
            <span>{lang === 'kn' ? 'ಕ್ರೀಡಾಂಗಣ ಪ್ರವೇಶಿಸಿ' : 'ENTER THE STADIUM'}</span>
          </a>

          <a
            href="#pavilion"
            onClick={() => soundEngine.playGloryChime()}
            className="inline-flex items-center justify-center min-h-[56px] px-8 bg-transparent hover:bg-[#E3000F] text-[#E3000F] hover:text-white border-2 border-[#E3000F] font-mono font-bold text-sm tracking-[0.16em] uppercase transition-all duration-200"
          >
            <Castle className="w-4 h-4 mr-2.5" />
            <span>{lang === 'kn' ? 'ಕ್ಲಬ್‌ಗೆ ಸೇರಿ' : 'JOIN THE CLUB'}</span>
          </a>

          <a
            href="#immortals"
            onClick={() => soundEngine.playSplitFlap()}
            className="inline-flex items-center justify-center min-h-[56px] px-8 bg-[#FBF8F7] hover:bg-neutral-100 text-[#000000] border border-[#E6DAD8] font-mono font-semibold text-sm tracking-[0.14em] uppercase transition-all duration-200"
          >
            <span>{lang === 'kn' ? '೧೫ ದಿಗ್ಗಜರು' : 'THE 15 IMMORTALS'}</span>
          </a>
        </div>

      </div>

      {/* 5. Minimalist Animated Drip Scroll Indicator */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 bottom-5 -translate-x-1/2 text-center text-[10px] font-mono tracking-[0.3em] text-[#5C5350] flex flex-col items-center gap-1.5"
      >
        <span>SCROLL</span>
        <div className={`w-[2px] h-10 bg-[#E3000F] ${isMotionPaused ? '' : 'animate-drip'}`} />
      </div>
    </section>
  );
};
