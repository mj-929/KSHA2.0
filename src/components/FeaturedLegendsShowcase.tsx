import React, { useRef, useState } from 'react';
import { Olympian } from '../data/kshaData';
import { ArrowLeft, ArrowRight, Award, Trophy, ChevronRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';
import { Card3DTilt } from './Card3DTilt';

interface FeaturedLegendsShowcaseProps {
  athletes: Olympian[];
  onSelectAthlete: (athlete: Olympian) => void;
  lang: 'en' | 'kn';
}

export const FeaturedLegendsShowcase: React.FC<FeaturedLegendsShowcaseProps> = ({
  athletes,
  onSelectAthlete,
  lang
}) => {
  const railRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Take the premier 6 legends with images / iconic status
  const featured = athletes.filter((a) => a.image).concat(athletes.filter((a) => !a.image)).slice(0, 6);

  const scrollToIndex = (idx: number) => {
    const clamped = Math.max(0, Math.min(featured.length - 1, idx));
    setCurrentIndex(clamped);
    soundEngine.playSplitFlap();
    if (railRef.current) {
      const cardWidth = 360;
      railRef.current.scrollTo({
        left: clamped * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-16">
      {/* Header with Title and Carousel Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E6DAD8]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#E3000F] font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'kn' ? 'ಪ್ರಮುಖ ದಿಗ್ಗಜರು' : 'FEATURED LEGENDS'}</span>
          </div>
          <h3 className="disp text-3xl sm:text-5xl text-black mt-1">
            {lang === 'kn' ? 'ಖ್ಯಾತ ಕ್ರೀಡಾಪಟುಗಳ ಪಟ್ಟಿ' : 'HALL OF FAME SPOTLIGHT'}
          </h3>
        </div>

        {/* Counter & Controls */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-neutral-500 tracking-wider">
            {String(currentIndex + 1).padStart(2, '0')} / {String(featured.length).padStart(2, '0')}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollToIndex(currentIndex - 1)}
              disabled={currentIndex === 0}
              aria-label="Previous legend"
              className="w-9 h-9 rounded-full border border-neutral-300 hover:border-black disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-colors bg-white shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-black" />
            </button>
            <button
              onClick={() => scrollToIndex(currentIndex + 1)}
              disabled={currentIndex === featured.length - 1}
              aria-label="Next legend"
              className="w-9 h-9 rounded-full border border-neutral-300 hover:border-black disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-colors bg-white shadow-sm"
            >
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Rail */}
      <div
        ref={railRef}
        className="flex gap-6 overflow-x-auto pt-6 pb-4 scroll-smooth snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {featured.map((athlete, idx) => (
          <Card3DTilt
            key={athlete.id}
            staggerIndex={idx}
            className="flex-shrink-0 w-[300px] sm:w-[350px] snap-start"
          >
            <article
              role="button"
              tabIndex={0}
              className="w-full h-full rounded-2xl bg-white border border-[#E6DAD8] hover:border-black shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#E3000F]"
              onClick={() => onSelectAthlete(athlete)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectAthlete(athlete);
                }
              }}
            >
              {/* Portrait Cover */}
              <div className="relative h-64 bg-neutral-900 overflow-hidden">
                {athlete.image ? (
                  <img
                    src={athlete.image}
                    alt={athlete.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-950">
                    <span className="font-cinzel text-5xl font-black text-amber-400/40">
                      {athlete.name.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-between p-4">
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-amber-300 border border-amber-400/40">
                      {athlete.games}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#E3000F] text-white text-[11px] font-mono font-bold flex items-center justify-center shadow-md">
                      {idx + 1}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-[#E3000F] uppercase font-bold tracking-wider block">
                      {athlete.position}
                    </span>
                    <h4 className="disp text-2xl text-white mt-0.5 drop-shadow-sm">
                      {athlete.name}
                    </h4>
                    <p className="font-kannada text-xs font-bold text-neutral-300">
                      {athlete.kannadaName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
                <p className="whisper text-base text-[#3B3330] line-clamp-3 leading-snug">
                  &ldquo;{athlete.myth}&rdquo;
                </p>

                <div className="pt-3 border-t border-[#E6DAD8] flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-500">{athlete.district}</span>
                  <span className="text-[#E3000F] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Dossier</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          </Card3DTilt>
        ))}
      </div>
    </div>
  );
};
