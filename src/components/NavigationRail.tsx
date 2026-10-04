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
  { id: 'cup', num: 'I', name: 'The Cup', kannada: 'ಟ್ರಾವಂಕೂರ್ ಕಪ್' },
  { id: 'battlegrounds', num: 'II', name: 'The League', kannada: 'ಲೀಗ್ಸ್' },
  { id: 'cradles', num: 'III', name: 'The Heirs', kannada: '೧೮ ಜಿಲ್ಲೆಗಳು' },
  { id: 'immortals', num: 'IV', name: 'The Legends', kannada: 'ದಿಗ್ಗಜರು' },
  { id: 'club', num: 'V', name: 'The Club', kannada: 'ಕ್ಲಬ್ ಹೌಸ್' },
  { id: 'vault', num: 'VI', name: 'The Vault', kannada: 'ದಾಖಲೆಗಳು' },
  { id: 'join', num: 'VII', name: 'Finale', kannada: 'ಮುಕ್ತಾಯ' },
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
    <nav 
      aria-label="Chapter navigation"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center select-none pointer-events-auto"
    >
      {/* Sleek Vertical Pill Container */}
      <div className="flex flex-col items-center gap-1.5 bg-white/90 backdrop-blur-md py-3 px-1.5 rounded-full border border-neutral-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
        {CHAPTERS.map((ch) => {
          const isActive = activeChapter === ch.id;
          return (
            <button
              key={ch.id}
              onClick={() => scrollToChapter(ch.id)}
              className="group relative flex items-center justify-center w-8 h-8 rounded-full focus:outline-none"
              aria-label={`${ch.name} (${ch.num})`}
            >
              {/* Flyout Label on hover (Absolutely positioned to the left so it NEVER expands the rail pill) */}
              <div className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 z-50">
                <div className="bg-[#111111] text-white text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded shadow-lg whitespace-nowrap flex items-center gap-1.5">
                  <span className="text-ksha-red font-bold">{ch.num}</span>
                  <span>{lang === 'kn' ? ch.kannada : ch.name}</span>
                </div>
              </div>

              {/* Indicator Circle / Roman Numeral */}
              <span
                className={`font-cinzel text-[11px] font-bold rounded-full transition-all duration-200 flex items-center justify-center ${
                  isActive
                    ? 'w-7 h-7 bg-ksha-red text-white shadow-md shadow-ksha-red/40 scale-105'
                    : 'w-6 h-6 text-neutral-500 hover:text-black hover:bg-neutral-100'
                }`}
              >
                {ch.num}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

