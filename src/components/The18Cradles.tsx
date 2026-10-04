import React, { useState } from 'react';
import { DISTRICT_CRADLES, DistrictUnit } from '../data/kshaData';
import { MapPin, Navigation, Shield, Compass, Sparkles } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface The18CradlesProps {
  lang: 'en' | 'kn';
}

export const The18Cradles: React.FC<The18CradlesProps> = ({ lang }) => {
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [activeDistrict, setActiveDistrict] = useState<DistrictUnit>(DISTRICT_CRADLES[0]);

  const filteredDistricts = DISTRICT_CRADLES.filter(d => {
    if (selectedZone === 'all') return true;
    return d.zone === selectedZone;
  });

  return (
    <section id="cradles" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-ksha-void border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-mono tracking-[0.25em] text-ksha-red uppercase mb-4">
            <Compass className="w-3.5 h-3.5" />
            CHAPTER V · THE GRASSROOTS EMPIRE
          </div>

          <h2 className="font-cinzel font-black text-4xl sm:text-6xl text-white tracking-tight mb-4">
            {lang === 'kn' ? 'ಕೊಡಗಿನಿಂದ ಡೆಕ್ಕನ್‌ವರೆಗೆ' : 'From Kodagu Mist to Deccan Dust'}
          </h2>

          <p className="font-editorial italic text-xl sm:text-2xl text-neutral-400">
            &ldquo;In Kodagu, children are given a stick before they learn their first proverb.&rdquo;
          </p>
        </div>

        {/* Zone Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-mono text-xs">
          {[
            { id: 'all', label: 'All 18 District Cradles' },
            { id: 'Western Ghats / Coorg', label: 'Western Ghats & Coorg' },
            { id: 'Northern Deccan', label: 'Northern Deccan & Belagavi' },
            { id: 'Central & Hyderabad-K', label: 'Kalyana Karnataka & Doab' },
            { id: 'Southern Maidan', label: 'Southern Maidan & Bangalore' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundEngine.playSplitFlap();
                setSelectedZone(tab.id);
              }}
              className={`px-4 py-2 rounded-full border transition-all ${
                selectedZone === tab.id
                  ? 'bg-ksha-red text-white border-ksha-red shadow-[0_0_15px_rgba(225,6,0,0.3)]'
                  : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive District Cradles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDistricts.map((dist) => {
            const isCoorg = dist.name.toLowerCase().includes('coorg');
            return (
              <div
                key={dist.id}
                onMouseEnter={() => {
                  setActiveDistrict(dist);
                  soundEngine.playSplitFlap();
                }}
                className={`relative p-5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  activeDistrict.id === dist.id
                    ? 'bg-[#141414] border-ksha-red shadow-[0_4px_20px_rgba(225,6,0,0.2)]'
                    : 'bg-[#0B0B0B] border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase mb-2">
                    <span>UNIT #{dist.id < 10 ? `0${dist.id}` : dist.id}</span>
                    <span className="text-ksha-red font-semibold">ESTD. {dist.established}</span>
                  </div>

                  <h3 className="font-cinzel font-bold text-base text-white group-hover:text-ksha-red transition-colors mb-1">
                    {dist.name}
                  </h3>
                  <div className="font-kannada text-xs text-neutral-400 mb-3">
                    {dist.kannadaName}
                  </div>

                  <div className="text-xs font-mono text-neutral-300 flex items-center gap-1.5 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-ksha-red shrink-0" />
                    <span>HQ: {dist.headquarters}</span>
                  </div>

                  <div className="p-2.5 rounded bg-black/50 border border-neutral-800 text-xs font-sans text-neutral-400">
                    <strong className="text-neutral-200">Heritage: </strong>
                    {dist.keyTalent}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-900 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                  <span>{dist.zone}</span>
                  <span className="text-neutral-400 group-hover:text-white">Active District Registry</span>
                </div>

                {isCoorg && (
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[9px] font-mono border border-amber-500/40">
                    Olympians Cradle
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
