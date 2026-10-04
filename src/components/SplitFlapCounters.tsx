import React, { useState, useEffect } from 'react';
import { soundEngine } from '../utils/audio';

interface StatItem {
  value: number;
  label: string;
  sub: string;
  kannadaLabel: string;
}

const STATS: StatItem[] = [
  { value: 89, label: 'YEARS OF ROYALTY', sub: 'ESTD 1937 · MYSORE STATE', kannadaLabel: '೮೯ ವರ್ಷಗಳ ಇತಿಹಾಸ' },
  { value: 15, label: 'OLYMPIC IMMORTALS', sub: 'MUNICH 1972 TO RIO 2016', kannadaLabel: '೧೫ ಒಲಿಂಪಿಯನ್ನರು' },
  { value: 11, label: 'ARJUNA AWARDEES', sub: 'PRESIDENTIAL CITATIONS', kannadaLabel: '೧೧ ಅರ್ಜುನ ಪುರಸ್ಕೃತರು' },
  { value: 61, label: 'AFFILIATED CLUBS', sub: 'INSTITUTIONS & SERVICES', kannadaLabel: '೬೧ ಸಂಯೋಜಿತ ಕ್ಲಬ್‌ಗಳು' },
];

export const SplitFlapCounters: React.FC<{ lang: 'en' | 'kn' }> = ({ lang }) => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const duration = 1800;
    const steps = 40;
    const intervalTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts(STATS.map(s => Math.round(s.value * ease)));

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(STATS.map(s => s.value));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-20 py-12 px-4 border-y border-neutral-800 bg-[#090909]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {STATS.map((stat, idx) => (
          <div
            key={idx}
            onMouseEnter={() => soundEngine.playSplitFlap()}
            className="relative flex flex-col items-center text-center p-6 bg-ksha-void rounded-xl border border-neutral-800 hover:border-ksha-red/60 transition-all duration-300 group shadow-lg"
          >
            {/* Split Flap Reel Style Box */}
            <div className="relative mb-3 flex items-center justify-center">
              <div className="px-5 py-2.5 bg-neutral-950 rounded border border-neutral-700/80 shadow-inner group-hover:border-ksha-red/70 transition-colors">
                <span className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white group-hover:text-ksha-red transition-colors">
                  {counts[idx] < 10 ? `0${counts[idx]}` : counts[idx]}
                </span>
              </div>
              {/* Mechanical split line */}
              <div className="absolute left-0 right-0 top-1/2 h-[1.5px] bg-black/80 pointer-events-none" />
            </div>

            {/* Label */}
            <div className="font-cinzel font-bold text-xs sm:text-sm tracking-[0.14em] text-neutral-200 group-hover:text-white">
              {lang === 'kn' ? stat.kannadaLabel : stat.label}
            </div>

            {/* Subtitle */}
            <div className="text-[10px] font-mono tracking-wider text-neutral-500 mt-1 uppercase">
              {stat.sub}
            </div>

            {/* Bottom Glow Accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-ksha-red opacity-0 group-hover:opacity-100 group-hover:w-3/4 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};
