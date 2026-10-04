import React from 'react';
import { Crest3DStage } from './Crest3DStage';
import { Shield, Sparkles, ChevronDown, Trophy, Castle } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface HeroOvertureProps {
  lang: 'en' | 'kn';
}

export const HeroOverture: React.FC<HeroOvertureProps> = ({ lang }) => {
  return (
    <section
      id="overture"
      className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 flex flex-col justify-center items-center overflow-hidden bg-radial-glow"
    >
      {/* Background Subtle Pitch Grid & Radial Vignette */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-[11px] font-mono tracking-[0.25em] text-neutral-800 uppercase mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-ksha-red animate-pulse" />
          ESTD. 1937 · MYSORE STATE HOCKEY ASSOCIATION · BENGALURU
        </div>

        {/* Monumental Headline */}
        <h1 className="font-cinzel font-black tracking-[-0.02em] text-5xl sm:text-7xl lg:text-8xl leading-[1.02] text-neutral-950 max-w-5xl mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-800">
            {lang === 'kn' ? 'ದಿ ಹೌಸ್ ಆಫ್ ಗ್ಲೋರಿ' : 'THE HOUSE'}
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ksha-red via-[#DC2626] to-ksha-red drop-shadow-sm">
            {lang === 'kn' ? 'ಕರ್ನಾಟಕ ಹಾಕಿ ವೈಭವ' : 'OF GLORY'}
          </span>
        </h1>

        {/* Subtitle / Kannada synchronicity */}
        <div className="font-cinzel text-sm sm:text-base tracking-[0.25em] text-neutral-600 uppercase mb-6 font-bold">
          {lang === 'kn'
            ? '೮೯ ವರ್ಷಗಳ ಭಾರತೀಯ ಹಾಕಿ ಇತಿಹಾಸ ಮತ್ತು ಗಾಂಭೀರ್ಯ'
            : 'Eighty-Nine Years of Indian Hockey Royalty'}
        </div>

        {/* Literary Editorial Italic Lede */}
        <p className="font-editorial italic text-xl sm:text-2xl lg:text-3xl text-neutral-800 max-w-3xl leading-relaxed mb-10 text-center font-normal">
          &ldquo;Forty-eight flags came to the Olympic games. Fifteen men carried Karnataka&rsquo;s soul into the striking circle.&rdquo;
        </p>

        {/* 3D WebGL / Interactive Crest Emblem Stage */}
        <div className="my-4 relative">
          <Crest3DStage size={420} />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          
          <a
            href="#immortals"
            onClick={() => soundEngine.playStickStrike()}
            className="group flex items-center gap-3 px-6 py-3.5 rounded bg-ksha-red hover:bg-[#c00500] text-white font-cinzel font-bold text-xs sm:text-sm tracking-[0.16em] uppercase shadow-lg shadow-ksha-red/25 hover:shadow-ksha-red/40 transition-all duration-300"
          >
            <Trophy className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
            <span>{lang === 'kn' ? '೧೫ ದಿಗ್ಗಜರನ್ನು ವೀಕ್ಷಿಸಿ' : 'INSPECT THE 15 IMMORTALS'}</span>
          </a>

          <a
            href="#pavilion"
            onClick={() => soundEngine.playGloryChime()}
            className="flex items-center gap-3 px-6 py-3.5 rounded bg-white hover:bg-neutral-50 border border-neutral-300 hover:border-neutral-500 text-neutral-900 font-cinzel font-bold text-xs sm:text-sm tracking-[0.16em] uppercase transition-all duration-300 shadow-md"
          >
            <Castle className="w-4 h-4 text-neutral-600" />
            <span>{lang === 'kn' ? 'ಪ್ರೈವೇಟ್ ಕ್ಲಬ್ ಪೆವಿಲಿಯನ್' : 'THE GENTLEMEN’S PAVILION'}</span>
          </a>

        </div>

      </div>

      {/* Downward Chapter Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[9px] font-mono tracking-[0.25em] uppercase">SCROLL FOR CHAPTER I</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-neutral-600" />
      </div>

    </section>
  );
};
