import React, { useState } from 'react';
import { OLYMPIANS_DATA, Olympian } from '../data/kshaData';
import { Trophy, Medal, MapPin, Award, X, Sparkles, Star } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface The15ImmortalsProps {
  lang: 'en' | 'kn';
}

export const The15Immortals: React.FC<The15ImmortalsProps> = ({ lang }) => {
  const [selectedOlympian, setSelectedOlympian] = useState<Olympian | null>(null);
  const [filterEra, setFilterEra] = useState<string>('all');

  const filtered = OLYMPIANS_DATA.filter(o => {
    if (filterEra === 'all') return true;
    if (filterEra === 'medalist') return o.medal !== 'Olympian';
    if (filterEra === 'coorg') return o.district.toLowerCase().includes('kodagu') || o.district.toLowerCase().includes('coorg');
    if (filterEra === 'captain') return o.position.toLowerCase().includes('captain');
    return true;
  });

  const openOlympian = (olymp: Olympian) => {
    soundEngine.playStickStrike();
    soundEngine.playGloryChime();
    setSelectedOlympian(olymp);
  };

  return (
    <section id="immortals" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-neutral-200">
      
      {/* Chapter Rail Anchor Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-[10px] font-mono tracking-[0.25em] text-ksha-red uppercase mb-4 font-bold">
          <Medal className="w-3.5 h-3.5" />
          CHAPTER I · THE HALL OF OLYMPIANS
        </div>

        <h2 className="font-cinzel font-black text-4xl sm:text-6xl text-neutral-950 tracking-tight mb-4">
          {lang === 'kn' ? '೧೫ ಒಲಿಂಪಿಕ್ ದಿಗ್ಗಜರು' : 'The Fifteen Immortals'}
        </h2>

        <p className="font-editorial italic text-xl sm:text-2xl text-neutral-700 max-w-2xl mx-auto mb-8 font-normal">
          &ldquo;Before turf was synthetic, Karnataka turned European grass into fire.&rdquo;
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
          {[
            { id: 'all', label: 'All 15 Immortals (೧೫ ದಿಗ್ಗಜರು)' },
            { id: 'medalist', label: 'Olympic / World Medalists' },
            { id: 'captain', label: 'Captains of India' },
            { id: 'coorg', label: 'Kodagu (Coorg) Cradle' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundEngine.playSplitFlap();
                setFilterEra(tab.id);
              }}
              className={`px-4 py-2 rounded-full border transition-all ${
                filterEra === tab.id
                  ? 'bg-ksha-red text-white border-ksha-red shadow-[0_0_15px_rgba(225,6,0,0.3)] font-semibold'
                  : 'bg-neutral-100 text-neutral-800 border-neutral-300 hover:border-neutral-400 hover:text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

      </div>

      {/* Grid of Olympian Monumental Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((olymp) => {
          const isMedalist = olymp.medal !== 'Olympian';
          return (
            <div
              key={olymp.id}
              onClick={() => openOlympian(olymp)}
              className="group relative bg-[#FFFFFF] rounded-xl border border-neutral-200 hover:border-ksha-red transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between p-6 shadow-md hover:shadow-2xl"
            >
              {/* Card Header & Era Badge */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-600 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-ksha-red" />
                    {olymp.years}
                  </span>

                  {isMedalist ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-mono border border-amber-300 font-semibold">
                      <Medal className="w-3 h-3 text-amber-600" />
                      {olymp.medal} Medal
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-neutral-700 bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded font-medium">
                      Olympian
                    </span>
                  )}
                </div>

                {/* Olympian Name */}
                <h3 className="font-cinzel font-bold text-2xl text-neutral-950 group-hover:text-ksha-red transition-colors mb-1">
                  {olymp.name}
                </h3>
                <div className="font-kannada text-xs text-neutral-600 mb-3 font-medium">
                  {olymp.kannadaName}
                </div>

                {/* Role / Position */}
                <div className="text-xs font-mono text-neutral-700 uppercase tracking-wider mb-4 border-l-2 border-ksha-red pl-2.5 font-medium">
                  {olymp.position}
                </div>

                {/* Mythological Quote */}
                <blockquote className="font-editorial italic text-base text-neutral-800 line-clamp-3 mb-5 border-t border-neutral-200 pt-4 leading-relaxed">
                  &ldquo;{olymp.myth}&rdquo;
                </blockquote>
              </div>

              {/* Card Footer: District & Inspect Action */}
              <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-600">
                <span className="flex items-center gap-1 text-neutral-700 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-ksha-red" />
                  {olymp.district}
                </span>
                <span className="text-neutral-900 group-hover:text-ksha-red group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                  Inspect Record →
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep Inspection Olympian Modal */}
      {selectedOlympian && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-neutral-300 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => {
                soundEngine.playSplitFlap();
                setSelectedOlympian(null);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 text-neutral-700 hover:text-black hover:bg-neutral-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header / Citation */}
            <div className="flex items-center gap-2 text-xs font-mono text-ksha-red uppercase tracking-widest mb-3 font-bold">
              <Trophy className="w-4 h-4" />
              ANNEXURE 1 · OFFICIAL OLYMPIC GAZETTE RECORD
            </div>

            <h3 className="font-cinzel font-black text-3xl sm:text-4xl text-neutral-950 mb-1">
              {selectedOlympian.name}
            </h3>
            <div className="font-kannada text-base text-neutral-600 mb-4 font-medium">
              {selectedOlympian.kannadaName}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded bg-neutral-100 border border-neutral-300 text-xs font-mono text-neutral-800 font-medium">
                {selectedOlympian.games}
              </span>
              <span className="px-3 py-1 rounded bg-neutral-100 border border-neutral-300 text-xs font-mono text-neutral-800 font-medium">
                {selectedOlympian.position}
              </span>
              <span className="px-3 py-1 rounded bg-neutral-100 border border-neutral-300 text-xs font-mono text-neutral-800 font-medium">
                Cradle: {selectedOlympian.district}
              </span>
            </div>

            {/* The Myth Poetic Narrative */}
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 mb-6">
              <div className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mb-1 font-bold">
                HISTORICAL REPUTE & LEGEND
              </div>
              <p className="font-editorial italic text-xl text-neutral-900 leading-relaxed font-normal">
                &ldquo;{selectedOlympian.myth}&rdquo;
              </p>
            </div>

            {/* Career Record Breakdown */}
            <div className="mb-6">
              <div className="text-xs font-mono tracking-widest text-neutral-600 uppercase mb-2 font-bold">
                VERBATIM CAREER RECORD
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-mono text-neutral-900 leading-relaxed">
                {selectedOlympian.record}
              </div>
            </div>

            {/* Presidential & Federation Citations */}
            <div>
              <div className="text-xs font-mono tracking-widest text-neutral-600 uppercase mb-2 font-bold">
                ACCREDITATIONS & HONORS
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedOlympian.awards.map((aw, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-red-50 border border-red-200 text-red-900 text-xs font-mono font-semibold"
                  >
                    <Award className="w-3.5 h-3.5 text-ksha-red" />
                    {aw}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
