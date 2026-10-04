import React, { useState } from 'react';
import { LEAGUE_STANDINGS, FIXTURES_DATA } from '../data/kshaData';
import { Swords, Trophy, Calendar, Shield, Flame } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface TheBattlegroundsProps {
  lang: 'en' | 'kn';
}

export const TheBattlegrounds: React.FC<TheBattlegroundsProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'super-division' | 'travancore' | 'murthy'>('super-division');

  return (
    <section id="battlegrounds" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-[10px] font-mono tracking-[0.25em] text-ksha-red uppercase mb-4 font-bold">
            <Swords className="w-3.5 h-3.5" />
            CHAPTER IV · THE COMPETITIONS
          </div>

          <h2 className="font-cinzel font-black text-4xl sm:text-6xl text-neutral-950 tracking-tight mb-4">
            {lang === 'kn' ? 'ಸ್ಪರ್ಧಾ ಕಣಗಳು' : 'The Arena of Collisions'}
          </h2>

          <p className="font-editorial italic text-xl sm:text-2xl text-neutral-700 font-normal">
            &ldquo;Three Cups. One Turf. Zero Forgiveness.&rdquo;
          </p>
        </div>

        {/* League Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { id: 'super-division', label: 'KSHA Super Division League', badge: 'Tier 1 Elite' },
            { id: 'travancore', label: '92nd Travancore Cup', badge: 'Heritage Open' },
            { id: 'murthy', label: 'D. S. Murthy Memorial Cup', badge: 'State Trophy' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundEngine.playSplitFlap();
                setActiveTab(tab.id as typeof activeTab);
              }}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-cinzel font-bold text-xs tracking-wider uppercase border transition-all ${
                activeTab === tab.id
                  ? 'bg-ksha-red text-white border-ksha-red shadow-[0_0_15px_rgba(225,6,0,0.3)] font-semibold'
                  : 'bg-white text-neutral-800 border-neutral-300 hover:border-neutral-400 hover:text-black shadow-sm'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>{tab.label}</span>
              <span className="text-[9px] font-mono bg-neutral-100 px-2 py-0.5 rounded border border-neutral-300 text-neutral-700">
                {tab.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Content Section: Super Division Standings vs Cup Brackets */}
        {activeTab === 'super-division' && (
          <div className="space-y-10">
            
            {/* Super Division League Table */}
            <div className="bg-white rounded-2xl border border-neutral-300 overflow-hidden shadow-xl">
              <div className="p-6 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
                <div>
                  <h3 className="font-cinzel font-bold text-xl text-neutral-950">
                    Super Division Standings Table · 2026 Season
                  </h3>
                  <div className="text-xs font-mono text-neutral-600 mt-1 font-medium">
                    Official Points Classification · Top 4 Qualify for Champions Playoff
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded bg-turf-green/10 border border-turf-green/30 text-turf-green font-mono text-xs font-bold">
                  <Flame className="w-3.5 h-3.5" />
                  Live Matchday 10
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs sm:text-sm">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase text-[10px] tracking-wider border-b border-neutral-200 font-bold">
                    <tr>
                      <th className="py-3 px-4">#</th>
                      <th className="py-3 px-4">Club Entity</th>
                      <th className="py-3 px-3 text-center">P</th>
                      <th className="py-3 px-3 text-center">W</th>
                      <th className="py-3 px-3 text-center">D</th>
                      <th className="py-3 px-3 text-center">L</th>
                      <th className="py-3 px-3 text-center hidden md:table-cell">GF</th>
                      <th className="py-3 px-3 text-center hidden md:table-cell">GA</th>
                      <th className="py-3 px-3 text-center">GD</th>
                      <th className="py-3 px-4 text-center font-bold text-neutral-950">PTS</th>
                      <th className="py-3 px-4 text-center hidden lg:table-cell">Form</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {LEAGUE_STANDINGS.map((row) => (
                      <tr
                        key={row.pos}
                        className="hover:bg-neutral-50 transition-colors group"
                      >
                        <td className="py-3.5 px-4 font-bold text-neutral-950">
                          <span
                            className={`w-6 h-6 rounded-full inline-flex items-center justify-center text-xs ${
                              row.pos <= 3 ? 'bg-ksha-red text-white' : 'text-neutral-600 bg-neutral-100 border border-neutral-200'
                            }`}
                          >
                            {row.pos}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-cinzel font-bold text-neutral-950 group-hover:text-ksha-red transition-colors">
                          {row.club}
                        </td>
                        <td className="py-3.5 px-3 text-center text-neutral-800">{row.played}</td>
                        <td className="py-3.5 px-3 text-center text-neutral-800">{row.won}</td>
                        <td className="py-3.5 px-3 text-center text-neutral-600">{row.drawn}</td>
                        <td className="py-3.5 px-3 text-center text-neutral-600">{row.lost}</td>
                        <td className="py-3.5 px-3 text-center text-neutral-600 hidden md:table-cell">{row.gf}</td>
                        <td className="py-3.5 px-3 text-center text-neutral-600 hidden md:table-cell">{row.ga}</td>
                        <td className="py-3.5 px-3 text-center text-neutral-800 font-semibold">{row.gd}</td>
                        <td className="py-3.5 px-4 text-center font-bold text-lg text-neutral-950 group-hover:text-ksha-red">
                          {row.pts}
                        </td>
                        <td className="py-3.5 px-4 text-center hidden lg:table-cell">
                          <div className="flex items-center justify-center gap-1">
                            {row.form.map((f, i) => (
                              <span
                                key={i}
                                className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center ${
                                  f === 'W'
                                    ? 'bg-turf-green/20 text-turf-green border border-turf-green/40'
                                    : f === 'D'
                                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                                    : 'bg-red-100 text-red-700 border border-red-300'
                                }`}
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {activeTab === 'travancore' && (
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-neutral-300 shadow-xl">
            <div className="max-w-3xl space-y-4">
              <span className="px-3 py-1 rounded bg-amber-100 text-amber-900 font-mono text-xs border border-amber-300 font-semibold">
                ASIA’S STORIED OPEN TROPHY · 92ND EDITION
              </span>
              <h3 className="font-cinzel font-black text-3xl sm:text-4xl text-neutral-950">
                The Travancore Royal Heritage Cup
              </h3>
              <p className="font-sans text-neutral-700 leading-relaxed text-sm sm:text-base">
                Instituted by the Royal House of Travancore in the early decades of the twentieth century, 
                this tournament represents the pinnacle of open club knockout competition in India. 
                Over 32 clubs from across the Indian subcontinent travel to Langford Town each season, 
                competing for the solid silver monarchical cup under the Akkithimmanahalli floodlights.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'murthy' && (
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-neutral-300 shadow-xl">
            <div className="max-w-3xl space-y-4">
              <span className="px-3 py-1 rounded bg-red-100 text-red-900 font-mono text-xs border border-red-300 font-semibold">
                STATE JUNIOR & SENIOR MEMORIAL
              </span>
              <h3 className="font-cinzel font-black text-3xl sm:text-4xl text-neutral-950">
                D. S. Murthy Memorial State Cup
              </h3>
              <p className="font-sans text-neutral-700 leading-relaxed text-sm sm:text-base">
                Commemorating one of Karnataka&rsquo;s founding hockey pioneers, this tournament acts as the 
                supreme scouting tournament for Karnataka&rsquo;s Senior National squad. Players representing 
                districts from Belagavi to Kodagu battle under intense national selector observation.
              </p>
            </div>
          </div>
        )}

        {/* Fixtures Showcase Cards */}
        <div className="mt-12">
          <div className="font-cinzel font-bold text-lg text-neutral-950 mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-ksha-red" />
            <span>Upcoming Langford Town Fixtures</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FIXTURES_DATA.map((fix, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundEngine.playSplitFlap()}
                className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-ksha-red transition-all group flex flex-col justify-between shadow-md hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono tracking-widest text-ksha-red font-bold uppercase">
                      {fix.cup}
                    </span>
                    <span className="text-[9px] font-mono bg-neutral-100 px-2 py-0.5 rounded text-neutral-700 border border-neutral-300 font-semibold">
                      {fix.badge}
                    </span>
                  </div>

                  <h4 className="font-cinzel font-bold text-lg text-neutral-950 group-hover:text-ksha-red transition-colors mb-2">
                    {fix.match}
                  </h4>

                  <div className="text-xs font-mono text-neutral-800 mb-1 font-medium">
                    📅 {fix.date}
                  </div>
                  <div className="text-xs font-mono text-neutral-600">
                    📍 {fix.pitch}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-600 font-medium">
                  <span>{fix.round}</span>
                  <span className="text-neutral-900 group-hover:text-ksha-red group-hover:translate-x-1 transition-all font-bold">
                    Match Center →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
