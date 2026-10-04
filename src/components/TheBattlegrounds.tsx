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
    <section id="battlegrounds" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#080808] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-mono tracking-[0.25em] text-ksha-red uppercase mb-4">
            <Swords className="w-3.5 h-3.5" />
            CHAPTER IV · THE COMPETITIONS
          </div>

          <h2 className="font-cinzel font-black text-4xl sm:text-6xl text-white tracking-tight mb-4">
            {lang === 'kn' ? 'ಸ್ಪರ್ಧಾ ಕಣಗಳು' : 'The Arena of Collisions'}
          </h2>

          <p className="font-editorial italic text-xl sm:text-2xl text-neutral-400">
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
                  ? 'bg-ksha-red text-white border-ksha-red shadow-[0_0_20px_rgba(225,6,0,0.4)]'
                  : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>{tab.label}</span>
              <span className="text-[9px] font-mono bg-black/40 px-2 py-0.5 rounded border border-white/10">
                {tab.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Content Section: Super Division Standings vs Cup Brackets */}
        {activeTab === 'super-division' && (
          <div className="space-y-10">
            
            {/* Super Division League Table */}
            <div className="bg-[#0D0D0D] rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl">
              <div className="p-6 bg-neutral-900/60 border-b border-neutral-800 flex items-center justify-between">
                <div>
                  <h3 className="font-cinzel font-bold text-xl text-white">
                    Super Division Standings Table · 2026 Season
                  </h3>
                  <div className="text-xs font-mono text-neutral-400 mt-1">
                    Official Points Classification · Top 4 Qualify for Champions Playoff
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded bg-turf-green/10 border border-turf-green/30 text-turf-green font-mono text-xs">
                  <Flame className="w-3.5 h-3.5" />
                  Live Matchday 10
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs sm:text-sm">
                  <thead className="bg-black/60 text-neutral-400 uppercase text-[10px] tracking-wider border-b border-neutral-800">
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
                      <th className="py-3 px-4 text-center font-bold text-white">PTS</th>
                      <th className="py-3 px-4 text-center hidden lg:table-cell">Form</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800/80">
                    {LEAGUE_STANDINGS.map((row) => (
                      <tr
                        key={row.pos}
                        className="hover:bg-neutral-900/40 transition-colors group"
                      >
                        <td className="py-3.5 px-4 font-bold text-white">
                          <span
                            className={`w-6 h-6 rounded-full inline-flex items-center justify-center text-xs ${
                              row.pos <= 3 ? 'bg-ksha-red text-white' : 'text-neutral-500'
                            }`}
                          >
                            {row.pos}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-cinzel font-bold text-white group-hover:text-ksha-red transition-colors">
                          {row.club}
                        </td>
                        <td className="py-3.5 px-3 text-center text-neutral-300">{row.played}</td>
                        <td className="py-3.5 px-3 text-center text-neutral-300">{row.won}</td>
                        <td className="py-3.5 px-3 text-center text-neutral-400">{row.drawn}</td>
                        <td className="py-3.5 px-3 text-center text-neutral-400">{row.lost}</td>
                        <td className="py-3.5 px-3 text-center text-neutral-400 hidden md:table-cell">{row.gf}</td>
                        <td className="py-3.5 px-3 text-center text-neutral-400 hidden md:table-cell">{row.ga}</td>
                        <td className="py-3.5 px-3 text-center text-neutral-300">{row.gd}</td>
                        <td className="py-3.5 px-4 text-center font-bold text-lg text-white group-hover:text-ksha-red">
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
                                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                    : 'bg-red-500/20 text-red-400 border border-red-500/40'
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
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-neutral-800 shadow-2xl">
            <div className="max-w-3xl space-y-4">
              <span className="px-3 py-1 rounded bg-amber-500/20 text-amber-300 font-mono text-xs border border-amber-500/40">
                ASIA’S STORIED OPEN TROPHY · 92ND EDITION
              </span>
              <h3 className="font-cinzel font-black text-3xl sm:text-4xl text-white">
                The Travancore Royal Heritage Cup
              </h3>
              <p className="font-sans text-neutral-300 leading-relaxed text-sm sm:text-base">
                Instituted by the Royal House of Travancore in the early decades of the twentieth century, 
                this tournament represents the pinnacle of open club knockout competition in India. 
                Over 32 clubs from across the Indian subcontinent travel to Langford Town each season, 
                competing for the solid silver monarchical cup under the Akkithimmanahalli floodlights.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'murthy' && (
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-neutral-800 shadow-2xl">
            <div className="max-w-3xl space-y-4">
              <span className="px-3 py-1 rounded bg-ksha-red/20 text-red-300 font-mono text-xs border border-red-500/40">
                STATE JUNIOR & SENIOR MEMORIAL
              </span>
              <h3 className="font-cinzel font-black text-3xl sm:text-4xl text-white">
                D. S. Murthy Memorial State Cup
              </h3>
              <p className="font-sans text-neutral-300 leading-relaxed text-sm sm:text-base">
                Commemorating one of Karnataka&rsquo;s founding hockey pioneers, this tournament acts as the 
                supreme scouting tournament for Karnataka&rsquo;s Senior National squad. Players representing 
                districts from Belagavi to Kodagu battle under intense national selector observation.
              </p>
            </div>
          </div>
        )}

        {/* Fixtures Showcase Cards */}
        <div className="mt-12">
          <div className="font-cinzel font-bold text-lg text-white mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-ksha-red" />
            <span>Upcoming Langford Town Fixtures</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FIXTURES_DATA.map((fix, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundEngine.playSplitFlap()}
                className="p-6 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-ksha-red/60 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono tracking-widest text-ksha-red font-bold uppercase">
                      {fix.cup}
                    </span>
                    <span className="text-[9px] font-mono bg-white/5 px-2 py-0.5 rounded text-neutral-400 border border-white/10">
                      {fix.badge}
                    </span>
                  </div>

                  <h4 className="font-cinzel font-bold text-lg text-white group-hover:text-ksha-red transition-colors mb-2">
                    {fix.match}
                  </h4>

                  <div className="text-xs font-mono text-neutral-300 mb-1">
                    📅 {fix.date}
                  </div>
                  <div className="text-xs font-mono text-neutral-500">
                    📍 {fix.pitch}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>{fix.round}</span>
                  <span className="text-white group-hover:text-ksha-red group-hover:translate-x-1 transition-all">
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
