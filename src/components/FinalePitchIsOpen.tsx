import React from 'react';
import { soundEngine } from '../utils/audio';
import { Trophy, Castle, Flag, UserCheck } from 'lucide-react';

interface FinalePitchIsOpenProps {
  lang: 'en' | 'kn';
}

export const FinalePitchIsOpen: React.FC<FinalePitchIsOpenProps> = ({ lang }) => {
  return (
    <section
      id="join"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-b border-[#E6DAD8] overflow-hidden text-center"
      style={{
        background: 'radial-gradient(closest-side at 50% 50%, rgba(227, 0, 15, 0.14), rgba(255, 255, 255, 1))',
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        
        <p className="chap mb-3">Finale</p>

        <h2 className="disp goldtxt text-6xl sm:text-8xl md:text-[140px] lg:text-[200px] leading-[0.88] my-6 drop-shadow-[0_0_60px_rgba(227,0,15,0.22)]">
          The pitch<br />is open.
        </h2>

        <p className="whisper text-2xl sm:text-3xl lg:text-4xl text-black max-w-2xl mx-auto mb-10 leading-snug">
          {lang === 'kn'
            ? 'ಇಡೀ ರಾಜ್ಯಕ್ಕೆ ಒಂದೇ ಪ್ರತಿಷ್ಠಿತ ಕ್ಲಬ್. ಆಡಲು ಬನ್ನಿ, ತರಬೇತಿ ನೀಡಿ, ಅಥವಾ ಸಂಸ್ಥೆಯ ಭಾಗವಾಗಿ.'
            : 'One club for a whole state. Come and play, coach, umpire, or simply belong.'}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pavilion"
            onClick={() => soundEngine.playGloryChime()}
            className="inline-flex items-center justify-center min-h-[56px] px-8 bg-[#E3000F] hover:bg-[#9E000B] text-white font-mono font-bold text-xs tracking-[0.14em] uppercase transition-all shadow-lg shadow-red-600/25"
          >
            Become a member
          </a>

          <a
            href="#cradles"
            onClick={() => soundEngine.playStickStrike()}
            className="inline-flex items-center justify-center min-h-[56px] px-8 bg-transparent hover:bg-[#E3000F] text-[#E3000F] hover:text-white border-2 border-[#E3000F] font-mono font-bold text-xs tracking-[0.14em] uppercase transition-all"
          >
            Join the academy
          </a>

          <a
            href="#immortals"
            onClick={() => soundEngine.playSplitFlap()}
            className="inline-flex items-center justify-center min-h-[56px] px-8 bg-[#FBF8F7] hover:bg-neutral-100 text-black border border-[#E6DAD8] font-mono font-medium text-xs tracking-[0.14em] uppercase transition-all"
          >
            Become an umpire
          </a>
        </div>

      </div>
    </section>
  );
};
