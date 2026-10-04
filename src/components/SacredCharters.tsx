import React from 'react';
import { CONSTITUTIONAL_OATHS } from '../data/kshaData';
import { Scroll, Landmark, Feather, ShieldCheck } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface SacredChartersProps {
  lang: 'en' | 'kn';
}

export const SacredCharters: React.FC<SacredChartersProps> = ({ lang }) => {
  return (
    <section id="charters" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-t border-neutral-200 overflow-hidden">
      
      {/* Background seal watermarks */}
      <div className="absolute -right-32 top-1/4 w-96 h-96 rounded-full border border-ksha-red/10 pointer-events-none" />
      <div className="absolute -left-32 bottom-1/4 w-96 h-96 rounded-full border border-neutral-300 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-[10px] font-mono tracking-[0.25em] text-ksha-red uppercase mb-4 font-bold">
            <Scroll className="w-3.5 h-3.5" />
            CHAPTER II · THE CONSTITUTIONAL BIRTH
          </div>

          <h2 className="font-cinzel font-black text-4xl sm:text-6xl text-neutral-950 tracking-tight mb-4">
            {lang === 'kn' ? 'ಸಂವಿಧಾನದ ಜನನ · ೧೯೩೭' : 'Born in Bangalore. Forged in Gold.'}
          </h2>

          <p className="font-editorial italic text-xl sm:text-2xl text-neutral-700 font-normal">
            &ldquo;Before freedom, before statehood, there was the game.&rdquo;
          </p>
        </div>

        {/* The 1937 Historical Manuscript Banner */}
        <div className="relative mb-16 p-8 sm:p-12 rounded-2xl bg-white border border-neutral-300 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-ksha-red" />
                <span className="font-mono text-xs text-neutral-600 uppercase tracking-widest font-semibold">
                  MYSORE STATE HOCKEY ASSOCIATION · FOUNDED 1937
                </span>
              </div>

              <h3 className="font-cinzel font-bold text-2xl sm:text-3xl text-neutral-950">
                The Bangalore &ldquo;Hockey Paradise&rdquo; Era
              </h3>

              <p className="font-sans text-neutral-700 text-sm sm:text-base leading-relaxed">
                Founded in 1937 under the presidency of <strong className="text-neutral-950">Mr. Green</strong> and 
                Honorary Secretary <strong className="text-neutral-950">Mr. C. I. Reynolds</strong>, the association 
                served as the crucible of pre-independence Indian sports administration. Bangalore’s cool climate, 
                colonial parade grounds, and passionate cantonment garrisons forged the fastest stick handlers in Asia, 
                attracting global hockey teams to Langford Town long before synthetic turf was conceived.
              </p>
            </div>

            {/* Illuminated Wax Seal Plaque */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-neutral-50 border border-neutral-300 text-center shadow-md">
              <div className="w-16 h-16 rounded-full bg-ksha-red flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(225,6,0,0.3)]">
                <Landmark className="w-8 h-8 text-white" />
              </div>
              <div className="font-cinzel font-bold text-base text-neutral-950">MYSORE SOCIETIES ACT</div>
              <div className="text-[11px] font-mono text-neutral-600 mt-1 font-medium">REGISTRATION NO. 1937/01</div>
              <div className="text-[10px] font-mono text-ksha-red mt-2 tracking-widest uppercase font-bold">
                ★ SOVEREIGN CHARTER ★
              </div>
            </div>

          </div>
        </div>

        {/* The 6 Sacred Constitutional Charters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONSTITUTIONAL_OATHS.map((oath) => (
            <div
              key={oath.num}
              onMouseEnter={() => soundEngine.playSplitFlap()}
              className="relative p-6 sm:p-7 rounded-xl bg-white border border-neutral-200 hover:border-ksha-red transition-all duration-300 group flex flex-col justify-between shadow-md hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-cinzel font-black text-2xl text-neutral-400 group-hover:text-ksha-red transition-colors">
                    ARTICLE {oath.num}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-neutral-400 group-hover:text-ksha-red transition-colors" />
                </div>

                <h4 className="font-cinzel font-bold text-lg text-neutral-950 mb-1">
                  {oath.title}
                </h4>
                <div className="font-kannada text-xs text-neutral-600 mb-3 font-medium">
                  {oath.kannada}
                </div>

                <p className="font-sans text-xs text-neutral-700 leading-relaxed font-normal">
                  {oath.text}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-neutral-200 text-[10px] font-mono text-neutral-500 uppercase tracking-wider font-medium">
                Permanent Statutory Oath
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
