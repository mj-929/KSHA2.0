import React, { useEffect, useState } from 'react';
import { soundEngine } from '../utils/audio';

interface Chapter {
  id: string;
  num: string;
  name: string;
  kannada: string;
}

const CHAPTERS: Chapter[] = [
  { id: 'overture', num: '◆', name: 'Overture', kannada: 'ಮುನ್ನುಡಿ' },
  { id: 'immortals', num: 'I', name: 'Legends', kannada: '೧೫ ದಿಗ್ಗಜರು' },
  { id: 'charters', num: 'II', name: 'Genesis', kannada: 'ಸಂವಿಧಾನ' },
  { id: 'colosseum', num: 'III', name: 'Arena', kannada: 'ರಂಗಭೂಮಿ' },
  { id: 'battlegrounds', num: 'IV', name: 'Leagues', kannada: 'ಲೀಗ್ಸ್' },
  { id: 'cradles', num: 'V', name: 'Cradles', kannada: '೧೮ ಜಿಲ್ಲೆಗಳು' },
  { id: 'pavilion', num: 'VI', name: 'Pavilion', kannada: 'ಕ್ಲಬ್ ಹೌಸ್' },
  { id: 'vault', num: 'VII', name: 'Vault', kannada: 'ಆಡಳಿತ ವಾಲ್ಟ್' },
];

interface NavigationRailProps {
  lang: 'en' | 'kn';
}

export const NavigationRail: React.FC<NavigationRailProps> = ({ lang }) => {
  const [activeChapter, setActiveChapter] = useState('overture');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const el = document.getElementById(CHAPTERS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveChapter(CHAPTERS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (id: string) => {
    soundEngine.playSplitFlap();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3.5 select-none pointer-events-auto">
      <div className="text-[9px] font-mono uppercase tracking-[0.25em] text-neutral-500 mb-1 pr-1 rotate-90 origin-right translate-x-3">
        CHAPTERS
      </div>

      <div className="flex flex-col items-end gap-2.5 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/5">
        {CHAPTERS.map((ch) => {
          const isActive = activeChapter === ch.id;
          return (
            <button
              key={ch.id}
              onClick={() => scrollToChapter(ch.id)}
              className="group flex items-center gap-3 relative py-1 px-1.5 focus:outline-none"
              title={`${ch.num} · ${ch.name}`}
            >
              {/* Flyout Label on hover */}
              <span
                className={`text-[10px] font-mono tracking-wider transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none translate-x-2 group-hover:translate-x-0 ${
                  isActive ? 'text-ksha-red font-semibold' : 'text-neutral-400'
                }`}
              >
                {lang === 'kn' ? ch.kannada : ch.name}
              </span>

              {/* Indicator Pill / Roman Numeral */}
              <div
                className={`flex items-center justify-center font-cinzel text-[11px] font-bold rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-7 h-7 bg-ksha-red text-white shadow-[0_0_12px_rgba(225,6,0,0.8)] scale-110'
                    : 'w-6 h-6 bg-neutral-900 text-neutral-400 group-hover:text-white group-hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {ch.num}
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
