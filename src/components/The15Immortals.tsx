import React, { useState } from 'react';
import { OLYMPIANS_DATA, Olympian } from '../data/kshaData';
import { Trophy, Medal, MapPin, Award, X, Sparkles, Star, Whistle, UserCheck } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface The15ImmortalsProps {
  lang: 'en' | 'kn';
}

const HONORED_LEGENDS = [
  {
    name: 'Asish Kumar Ballal',
    badge: 'Olympian & Arjuna Awardee',
    meta: 'Karnataka Rajyotsava Award (1 November 2025). Hero of the 1998 Asian Games Gold medal final penalty shootout.',
  },
  {
    name: 'Md. Raheel Mouseen',
    badge: 'Senior India International',
    meta: 'Dynamic attacking midfielder in the national squad; recipient of the prestigious Karnataka State Ekalavya Award.',
  },
  {
    name: 'H.S. Mohit & C.B. Poovanna',
    badge: 'National Team Rising Stars',
    meta: 'Karnataka’s new faces representing the senior Indian squad at the Sultan Azlan Shah Cup 2025.',
  },
  {
    name: 'C.B. Janardhan',
    badge: 'KSHA Life Member & Coach',
    meta: 'Assistant Coach of the Indian Junior Men’s Team at the FIH Men’s Junior World Cup.',
  },
];

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
    <section id="immortals" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FBF8F7] border-b border-[#E6DAD8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header: Chapter IV · The Legends */}
        <div className="mb-14">
          <p className="chap mb-3">Chapter IV</p>
          <h2 className="disp text-5xl sm:text-7xl lg:text-9xl text-black mb-4">
            {lang === 'kn' ? 'ದಿಗ್ಗಜರ ಸಾಲು' : 'The Legends'}
          </h2>
          <p className="whisper text-2xl sm:text-3xl lg:text-4xl text-black max-w-3xl mb-8 leading-snug">
            &ldquo;Karnataka does not need to be loud. The whistle was heard in two hundred international matches.&rdquo;
          </p>

          {/* R.V. Raghu Prasad Spotlight Feature */}
          <div className="bg-white rounded-2xl border border-[#E6DAD8] p-8 sm:p-12 mb-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E3000F] font-mono text-xs font-bold uppercase tracking-wider border border-red-200">
                  <span>WORLD UMPIRE OF THE YEAR 2025</span>
                </div>
                <h3 className="disp goldtxt text-5xl sm:text-7xl lg:text-8xl leading-none">
                  R.V. Raghu Prasad
                </h3>
                <p className="whisper text-xl sm:text-2xl text-[#3B3330]">
                  The sovereign titan of international officiating, born and groomed in Bengaluru.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-[#E3000F] p-2 flex items-center justify-center bg-red-50/50">
                  <img
                    src="/ksha-crest.png"
                    alt="KSHA Official Seal"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 mt-8 border-t border-[#E6DAD8]">
              <div>
                <div className="disp text-5xl sm:text-6xl text-black">200</div>
                <p className="text-xs font-mono text-[#5C5350] mt-1 uppercase tracking-wider">
                  International Matches Officiated
                </p>
                <p className="text-xs text-[#3B3330] mt-1 font-sans">
                  The first umpire from India and Asia to reach the historic 200 Golden Whistle landmark.
                </p>
              </div>

              <div>
                <div className="disp text-5xl sm:text-6xl text-black">3</div>
                <p className="text-xs font-mono text-[#5C5350] mt-1 uppercase tracking-wider">
                  Olympic Games Appointments
                </p>
                <p className="text-xs text-[#3B3330] mt-1 font-sans">
                  London 2012, Tokyo 2020, and Paris 2024 Olympic Games umpire.
                </p>
              </div>

              <div>
                <div className="disp text-5xl sm:text-6xl text-[#E3000F]">2025</div>
                <p className="text-xs font-mono text-[#5C5350] mt-1 uppercase tracking-wider">
                  FIH Male Umpire of the Year
                </p>
                <p className="text-xs text-[#3B3330] mt-1 font-sans">
                  Adjudged the world’s premier male field hockey umpire by the International Hockey Federation.
                </p>
              </div>
            </div>
          </div>

          {/* Hall of State Awardees */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {HONORED_LEGENDS.map((legend, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-[#E6DAD8] space-y-2">
                <span className="text-[10px] font-mono text-[#E3000F] uppercase tracking-wider font-bold block">
                  {legend.badge}
                </span>
                <h4 className="disp text-2xl text-black">{legend.name}</h4>
                <p className="text-xs text-[#3B3330] leading-relaxed">
                  {legend.meta}
                </p>
              </div>
            ))}
          </div>

          {/* The 15 Olympian Immortals Header */}
          <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 border-b border-[#E6DAD8] pb-6 mb-8">
            <div>
              <h3 className="disp text-3xl sm:text-5xl text-black">
                The Fifteen Immortals
              </h3>
              <p className="text-xs font-mono text-[#5C5350] uppercase tracking-widest mt-1">
                Karnataka’s 15 Field Hockey Olympians
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {[
                { id: 'all', label: 'All 15 Immortals' },
                { id: 'medalist', label: 'Medalists' },
                { id: 'captain', label: 'Captains of India' },
                { id: 'coorg', label: 'Kodagu Cradle' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundEngine.playSplitFlap();
                    setFilterEra(tab.id);
                  }}
                  className={`px-3 py-1.5 rounded-full border transition-all ${
                    filterEra === tab.id
                      ? 'bg-[#E3000F] text-white border-[#E3000F] font-bold shadow-xs'
                      : 'bg-white text-black border-[#C9B8B5] hover:border-black'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Olympian Monumental Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((olymp) => (
              <div
                key={olymp.id}
                onClick={() => openOlympian(olymp)}
                className="group relative p-6 rounded-2xl bg-white border border-[#E6DAD8] hover:border-[#E3000F] transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono tracking-widest text-[#E3000F] uppercase font-bold">
                      {olymp.games}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-amber-50 text-amber-900 border border-amber-200">
                      {olymp.medal}
                    </span>
                  </div>

                  <h4 className="disp text-3xl text-black group-hover:text-[#E3000F] transition-colors mb-1">
                    {olymp.name}
                  </h4>
                  <div className="text-[11px] font-kannada font-bold text-[#5C5350] mb-2">
                    {olymp.kannadaName}
                  </div>
                  <div className="text-xs font-mono text-[#E3000F] font-bold uppercase tracking-wider mb-3">
                    {olymp.position}
                  </div>

                  <p className="whisper text-lg text-[#3B3330] leading-snug line-clamp-3">
                    &ldquo;{olymp.legacyQuote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6DAD8] flex items-center justify-between text-xs font-mono text-[#5C5350]">
                  <span>{olymp.district}</span>
                  <span className="text-[#E3000F] font-bold group-hover:underline">
                    Inspect Record →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Olympian Record Inspection Modal */}
      {selectedOlympian && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-[#E6DAD8] shadow-2xl overflow-hidden p-6 sm:p-8">
            <div className="flex items-start justify-between border-b border-[#E6DAD8] pb-4 mb-6">
              <div>
                <span className="text-xs font-mono text-[#E3000F] uppercase tracking-widest font-bold">
                  OLYMPIAN DOSSIER · {selectedOlympian.games}
                </span>
                <h3 className="disp text-4xl sm:text-5xl text-black mt-1">
                  {selectedOlympian.name}
                </h3>
                <p className="font-kannada text-sm text-[#5C5350] font-bold">
                  {selectedOlympian.kannadaName}
                </p>
              </div>
              <button
                onClick={() => setSelectedOlympian(null)}
                className="p-1 rounded bg-neutral-100 hover:bg-neutral-200 text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded-lg bg-[#FBF8F7] border border-[#E6DAD8]">
                  <span className="text-[#5C5350] block uppercase">Position</span>
                  <span className="font-bold text-black text-sm">{selectedOlympian.position}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#FBF8F7] border border-[#E6DAD8]">
                  <span className="text-[#5C5350] block uppercase">District Unit</span>
                  <span className="font-bold text-black text-sm">{selectedOlympian.district}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FBF8F7] border border-[#E6DAD8]">
                <span className="text-[11px] font-mono text-[#5C5350] uppercase tracking-wider block mb-1">
                  Olympic Citation & Legacy
                </span>
                <p className="whisper text-xl text-black leading-relaxed">
                  &ldquo;{selectedOlympian.legacyQuote}&rdquo;
                </p>
              </div>

              <div className="text-xs text-[#3B3330] leading-relaxed font-sans">
                {selectedOlympian.bio}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E6DAD8] flex justify-end">
              <button
                onClick={() => setSelectedOlympian(null)}
                className="px-6 py-2 rounded bg-black hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider"
              >
                Close Record
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
