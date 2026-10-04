import React, { useState } from 'react';
import { OLYMPIANS_DATA, Olympian, ARJUNA_AWARDEES_DATA, INTERNATIONAL_UMPIRES_DATA } from '../data/kshaData';
import { Trophy, Medal, MapPin, Award, UserCheck, Shield, ChevronRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';
import { FeaturedLegendsShowcase } from './FeaturedLegendsShowcase';
import { OlympianDrawer } from './OlympianDrawer';

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
  const [activeTab, setActiveTab] = useState<'olympians' | 'arjuna' | 'umpires'>('olympians');

  const filtered = OLYMPIANS_DATA.filter((o) => {
    if (filterEra === 'all') return true;
    if (filterEra === 'medalist') return o.medal !== 'Olympian';
    if (filterEra === 'coorg')
      return o.district.toLowerCase().includes('kodagu') || o.district.toLowerCase().includes('coorg');
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

          {/* Featured Legends Showcase Carousel */}
          <FeaturedLegendsShowcase
            athletes={OLYMPIANS_DATA}
            onSelectAthlete={openOlympian}
            lang={lang}
          />

          {/* R.V. Raghu Prasad Spotlight Feature */}
          <div className="bg-white rounded-2xl border border-[#E6DAD8] p-8 sm:p-12 mb-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E3000F] font-mono text-xs font-bold uppercase tracking-wider border border-red-200">
                  <Shield className="w-3.5 h-3.5" />
                  <span>FIH WORLD UMPIRE OF THE YEAR 2025</span>
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
                  Olympic Games Officiated
                </p>
                <p className="text-xs text-[#3B3330] mt-1 font-sans">
                  London 2012, Rio 2016, and Tokyo 2020. Plus 4 Senior World Cups and 4 Asian Games.
                </p>
              </div>

              <div>
                <div className="disp text-5xl sm:text-6xl text-black">KSHA</div>
                <p className="text-xs font-mono text-[#5C5350] mt-1 uppercase tracking-wider">
                  Life Member & Academy Mentor
                </p>
                <p className="text-xs text-[#3B3330] mt-1 font-sans">
                  Continues to mentor state umpires on Langford Town turf and sits on the FIH World Panel.
                </p>
              </div>
            </div>
          </div>

          {/* Honored Legends & Awardees Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {HONORED_LEGENDS.map((legend, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#E6DAD8] space-y-2 hover:border-black transition-colors"
              >
                <span className="text-[10px] font-mono text-[#E3000F] font-bold uppercase tracking-wider">
                  {legend.badge}
                </span>
                <h4 className="disp text-2xl text-black">{legend.name}</h4>
                <p className="text-xs text-[#3B3330] leading-relaxed font-sans">
                  {legend.meta}
                </p>
              </div>
            ))}
          </div>

          {/* Official Roster Section with Navigation Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('olympians')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                  activeTab === 'olympians'
                    ? 'bg-black text-white'
                    : 'bg-white text-neutral-600 hover:text-black border border-neutral-300'
                }`}
              >
                15 Olympic Immortals
              </button>
              <button
                onClick={() => setActiveTab('arjuna')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                  activeTab === 'arjuna'
                    ? 'bg-black text-white'
                    : 'bg-white text-neutral-600 hover:text-black border border-neutral-300'
                }`}
              >
                11 Arjuna Awardees
              </button>
              <button
                onClick={() => setActiveTab('umpires')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                  activeTab === 'umpires'
                    ? 'bg-black text-white'
                    : 'bg-white text-neutral-600 hover:text-black border border-neutral-300'
                }`}
              >
                International Umpires
              </button>
            </div>

            {/* Filter Tabs for Olympians */}
            {activeTab === 'olympians' && (
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {[
                  { id: 'all', label: 'All 15' },
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
            )}
          </div>

          {/* TAB 1: 15 Olympians Grid */}
          {activeTab === 'olympians' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((olymp) => (
                <div
                  key={olymp.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => openOlympian(olymp)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openOlympian(olymp);
                    }
                  }}
                  className="group relative p-6 rounded-2xl bg-white border border-[#E6DAD8] hover:border-[#E3000F] transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md focus:outline-hidden focus:ring-2 focus:ring-[#E3000F]"
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

                    <div className="flex items-center gap-3 mb-2">
                      {olymp.image && (
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-400 flex-shrink-0">
                          <img
                            src={olymp.image}
                            alt={olymp.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <h4 className="disp text-3xl text-black group-hover:text-[#E3000F] transition-colors leading-none">
                          {olymp.name}
                        </h4>
                        <div className="text-[11px] font-kannada font-bold text-[#5C5350] mt-0.5">
                          {olymp.kannadaName}
                        </div>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-[#E3000F] font-bold uppercase tracking-wider mb-3">
                      {olymp.position}
                    </div>

                    <p className="whisper text-lg text-[#3B3330] leading-snug line-clamp-3">
                      &ldquo;{olymp.myth}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E6DAD8] flex items-center justify-between text-xs font-mono text-[#5C5350]">
                    <span>{olymp.district}</span>
                    <span className="text-[#E3000F] font-bold group-hover:underline flex items-center gap-1">
                      <span>Inspect Record</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: 11 Arjuna Awardees Grid */}
          {activeTab === 'arjuna' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ARJUNA_AWARDEES_DATA.map((awardee) => (
                <div
                  key={awardee.sNo}
                  className="p-5 rounded-2xl bg-white border border-[#E6DAD8] hover:border-black transition-colors space-y-2 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-amber-50 text-amber-900 border border-amber-200">
                      {awardee.category} · {awardee.year}
                    </span>
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      #{awardee.sNo}
                    </span>
                  </div>
                  <h4 className="disp text-2xl text-black">{awardee.name}</h4>
                  <p className="font-kannada text-xs font-bold text-neutral-500">
                    {awardee.name_kn}
                  </p>
                  <div className="text-xs font-mono text-neutral-600 pt-2 border-t border-neutral-100 flex items-center justify-between">
                    <span>Sport: {awardee.event}</span>
                    <span className="text-emerald-700 font-bold">KSHA Life Member</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: International Umpires Grid */}
          {activeTab === 'umpires' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {INTERNATIONAL_UMPIRES_DATA.map((umpire) => (
                <div
                  key={umpire.sNo}
                  className="p-6 rounded-2xl bg-white border border-[#E6DAD8] hover:border-[#E3000F] transition-colors space-y-3 shadow-xs"
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#E3000F] font-bold block">
                    OFFICIAL UMPIRE #{umpire.sNo}
                  </span>
                  <h4 className="disp text-2xl text-black">{umpire.name}</h4>
                  <p className="font-kannada text-xs font-bold text-neutral-500">
                    {umpire.name_kn}
                  </p>
                  <p className="text-xs text-[#3B3330] leading-relaxed pt-2 border-t border-neutral-100">
                    {umpire.cadre}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

      {/* Slide-In Olympian Drawer from Right */}
      <OlympianDrawer
        athlete={selectedOlympian}
        onClose={() => setSelectedOlympian(null)}
        lang={lang}
      />
    </section>
  );
};
