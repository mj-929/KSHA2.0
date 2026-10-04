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
    <section id="cradles" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E6DAD8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header: Chapter III · The Heirs */}
        <div className="mb-14">
          <p className="chap mb-3">Chapter III</p>
          <h2 className="disp text-5xl sm:text-7xl lg:text-9xl text-black mb-4">
            {lang === 'kn' ? 'ಮುಂದಿನ ಪೀಳಿಗೆ' : 'The Heirs'}
          </h2>
          <p className="whisper text-2xl sm:text-3xl lg:text-4xl text-black max-w-3xl mb-8 leading-snug">
            &ldquo;Every Saturday and Sunday, the next generation arrives with a stick that is slightly too big.&rdquo;
          </p>

          {/* Key Academy Stats (The Heirs Metrics) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[#C9B8B5]">
            <div className="border-t-2 border-[#C9B8B5] pt-4">
              <div className="disp goldtxt text-7xl sm:text-8xl lg:text-9xl">70</div>
              <h3 className="disp text-2xl text-black mt-1">Players in the academy</h3>
              <p className="text-sm text-[#3B3330] mt-2 max-w-xs font-sans">
                School-going boys and girls train at weekends, then play for clubs across the four league tiers.
              </p>
            </div>

            <div className="border-t-2 border-[#C9B8B5] pt-4">
              <div className="disp goldtxt text-7xl sm:text-8xl lg:text-9xl">2</div>
              <h3 className="disp text-2xl text-black mt-1">Decades and counting</h3>
              <p className="text-sm text-[#3B3330] mt-2 max-w-xs font-sans">
                The KSHA Hockey Academy has been nurturing grassroots talent in Langford Town for two decades.
              </p>
            </div>

            <div className="border-t-2 border-[#C9B8B5] pt-4">
              <div className="disp goldtxt text-7xl sm:text-8xl lg:text-9xl">40</div>
              <h3 className="disp text-2xl text-black mt-1">Summer camp trainees</h3>
              <p className="text-sm text-[#3B3330] mt-2 max-w-xs font-sans">
                Around forty high-potential junior players attended the April–May 2025 intensive residential camp.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#E6DAD8] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#5C5350]">
            <p className="max-w-3xl">
              Coached by A.E. Brient (late), T.C. Vinoba, N. Mahalingam, Md. Naseeruddin, A.N. Somaiah, Joseph Vijay and Ravindran Dsa, under chairman A.B. Palangappa.
            </p>
            <span className="px-3 py-1 rounded bg-[#FBF8F7] border border-[#E6DAD8] text-[#E3000F] font-bold uppercase tracking-wider">
              18 Affiliated District Units
            </span>
          </div>
        </div>

        {/* Grassroots District Cradles Map & Zone Filters */}
        <div className="mt-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h3 className="disp text-3xl sm:text-4xl text-black">
              18 District Cradles of Karnataka
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All 18 Districts' },
                { id: 'Western Ghats / Coorg', label: 'Kodagu (Coorg)' },
                { id: 'Northern Deccan', label: 'Northern Deccan & Belagavi' },
                { id: 'Central & Hyderabad-K', label: 'Kalyana Karnataka' },
                { id: 'Southern Maidan', label: 'Bengaluru & Mysuru' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundEngine.playSplitFlap();
                    setSelectedZone(tab.id);
                  }}
                  className={`px-3.5 py-1.5 rounded font-mono text-xs uppercase tracking-wider border transition-all ${
                    selectedZone === tab.id
                      ? 'bg-[#E3000F] text-white border-[#E3000F] font-bold shadow-xs'
                      : 'bg-white text-black border-[#C9B8B5] hover:border-black'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDistricts.map((district) => (
              <div
                key={district.id}
                onClick={() => {
                  soundEngine.playStickStrike();
                  setActiveDistrict(district);
                }}
                className={`p-5 rounded-xl border transition-all cursor-pointer ${
                  activeDistrict.id === district.id
                    ? 'bg-[#FBF8F7] border-[#E3000F] shadow-sm'
                    : 'bg-white border-[#E6DAD8] hover:border-[#8F8482]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="disp text-xl sm:text-2xl text-black">
                    {district.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#E3000F] uppercase font-bold px-2 py-0.5 rounded bg-red-50 border border-red-100">
                    {district.hqCode}
                  </span>
                </div>
                <div className="text-xs font-mono text-[#5C5350] mb-2">
                  HQ: {district.headquarters} · {district.zone}
                </div>
                <p className="text-xs text-[#3B3330] leading-relaxed">
                  {district.historicLore}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
