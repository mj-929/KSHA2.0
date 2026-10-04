import React from 'react';
import { soundEngine } from '../utils/audio';
import { Trophy, History, Shield, Award } from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';

interface TheTravancoreCupProps {
  lang: 'en' | 'kn';
}

export const TheTravancoreCup: React.FC<TheTravancoreCupProps> = ({ lang }) => {
  return (
    <section id="cup" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-b border-[#E6DAD8] overflow-hidden">
      {/* Breathing background aura */}
      <div
        aria-hidden="true"
        className="absolute -right-72 top-1/4 w-[900px] h-[900px] rounded-full pointer-events-none animate-breathe"
        style={{
          background: 'radial-gradient(closest-side, rgba(227, 0, 15, 0.12), rgba(255, 255, 255, 0))',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Monumental "94" */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start justify-center">
            <Card3DTilt staggerIndex={0}>
              <div className="relative p-6 rounded-3xl bg-white/40 backdrop-blur-xs border border-[#E6DAD8]/50">
                <span
                  aria-hidden="true"
                  className="disp goldtxt block select-none text-[180px] sm:text-[280px] md:text-[380px] lg:text-[420px] leading-[0.78] drop-shadow-[0_0_70px_rgba(227,0,15,0.22)]"
                >
                  94
                </span>
                <div className="absolute -bottom-4 left-6 px-3.5 py-1 rounded bg-[#FBF8F7] border border-[#E6DAD8] text-[11px] font-mono tracking-widest text-[#E3000F] uppercase font-bold shadow-xs">
                  1928 – 2026 CONTINUOUS EDITIONS
                </div>
              </div>
            </Card3DTilt>
          </div>

          {/* Right Column: Editorial & Historical Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FBF8F7] border border-[#E6DAD8] text-[11px] font-mono tracking-[0.3em] text-[#E3000F] uppercase font-bold">
              <Trophy className="w-3.5 h-3.5 text-[#E3000F]" />
              CHAPTER I · THE TRAVANCORE CUP
            </div>

            <h2 className="disp text-5xl sm:text-7xl lg:text-8xl text-black leading-none">
              {lang === 'kn' ? 'ಟ್ರಾವಂಕೋರ್ ಕಪ್' : 'The Travancore Cup'}
            </h2>

            <p className="whisper text-2xl sm:text-3xl lg:text-4xl text-black font-normal leading-snug">
              &ldquo;Some trophies are older than the stadiums they are lifted in.&rdquo;
            </p>

            <p className="font-sans text-base sm:text-lg text-[#3B3330] leading-relaxed">
              Donated to the Mysore State Hockey Association (now KSHA) by the Maharaja of Travancore in 1928, this revered silverware represents one of the oldest and most fiercely contested state-level hockey championships in the subcontinent.
            </p>

            <Card3DTilt staggerIndex={1}>
              <div className="p-6 rounded-2xl bg-[#FBF8F7] border border-[#E6DAD8] space-y-4 shadow-xs">
                <div className="flex items-center justify-between border-b border-[#E6DAD8] pb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#5C5350]">94th Edition Summary</span>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold">
                    Defending Champions
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="disp text-3xl sm:text-4xl text-black">13</div>
                    <div className="text-[11px] font-mono text-[#5C5350] uppercase mt-0.5">Premier Teams</div>
                  </div>
                  <div>
                    <div className="disp text-3xl sm:text-4xl text-black">21</div>
                    <div className="text-[11px] font-mono text-[#5C5350] uppercase mt-0.5">Knockout Matches</div>
                  </div>
                  <div>
                    <div className="disp text-2xl sm:text-3xl text-[#E3000F]">RWFSA</div>
                    <div className="text-[11px] font-mono text-[#5C5350] uppercase mt-0.5">Gold Crown</div>
                  </div>
                </div>
              </div>
            </Card3DTilt>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#battlegrounds"
                onClick={() => soundEngine.playStickStrike()}
                className="inline-flex items-center justify-center min-h-[50px] px-6 bg-transparent hover:bg-[#E3000F] text-[#E3000F] hover:text-white border-2 border-[#E3000F] font-mono font-bold text-xs tracking-[0.14em] uppercase transition-all"
              >
                Explore League Cups
              </a>
              <a
                href="#charters"
                onClick={() => soundEngine.playSplitFlap()}
                className="inline-flex items-center justify-center min-h-[50px] px-6 bg-[#FBF8F7] hover:bg-neutral-100 text-black border border-[#E6DAD8] font-mono font-medium text-xs tracking-[0.14em] uppercase transition-all"
              >
                1937 Genesis Charters
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
