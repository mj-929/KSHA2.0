import React, { useState } from 'react';
import { LEAGUE_STANDINGS, FIXTURES_DATA } from '../data/kshaData';
import { Swords, Trophy, Calendar, Shield, Flame, ArrowRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface TheBattlegroundsProps {
  lang: 'en' | 'kn';
}

const DIVISION_DATA = {
  super: {
    title: 'Super Division',
    info: '12 teams · 28 matches',
    names: [
      'Shlok Hockey Club',
      'Railway Wheel Factory Sports Association (RWFSA)',
      'Hindustan Friends Club',
      'V. Raja Hockey Club',
    ],
  },
  a: {
    title: 'A Division',
    info: '14 teams · 35 matches',
    names: [
      'Zoza Sports Academy',
      'Sandeep Hockey Club',
      'Bengaluru Blues Hockey Club',
      'Wild Boar Hockey Club',
    ],
  },
  b: {
    title: 'B Division',
    info: '20 teams · 36 matches',
    names: [
      'Coorg Direwolves',
      'Blue Star Hockey Club “A”',
      'Bombers Hockey Club',
      'Adhiyaman College of Engineering',
    ],
  },
  c: {
    title: 'C Division',
    info: '25 teams · 45 matches',
    names: [
      'Garuda Hockey Club',
      'Bangalore Friends Hockey Club',
      'Southern Alpha Sports Academy',
      'Besant Hockey Club',
    ],
  },
};

const DIVISION_LABELS: [string, keyof typeof DIVISION_DATA][] = [
  ['Super Division', 'super'],
  ['A Division', 'a'],
  ['B Division', 'b'],
  ['C Division', 'c'],
];

const RANKS = ['Winner', 'Runner-up', 'Third place', 'Fourth place'];

export const TheBattlegrounds: React.FC<TheBattlegroundsProps> = ({ lang }) => {
  const [selectedDiv, setSelectedDiv] = useState<keyof typeof DIVISION_DATA>('super');
  const [showFullTable, setShowFullTable] = useState(false);

  const cur = DIVISION_DATA[selectedDiv];

  return (
    <section id="battlegrounds" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FBF8F7] border-b border-[#E6DAD8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="chap mb-3">Chapter II</p>
          <h2 className="disp text-5xl sm:text-7xl lg:text-9xl text-black mb-4">
            {lang === 'kn' ? 'ಲೀಗ್ ಚಾಂಪಿಯನ್‌ಶಿಪ್' : 'The League'}
          </h2>
          <p className="whisper text-2xl sm:text-3xl lg:text-4xl text-black max-w-3xl mb-3">
            Four divisions. More than a hundred matches in four months. Choose one, and see who stood on top.
          </p>
          <p className="text-xs font-mono tracking-widest uppercase text-[#5C5350]">
            Latest recorded season · KSHA State Hockey League Championship
          </p>
        </div>

        {/* Division Selector Buttons */}
        <div role="group" aria-label="Choose a division" className="flex flex-wrap gap-3 mb-10">
          {DIVISION_LABELS.map(([label, key]) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                soundEngine.playSplitFlap();
                setSelectedDiv(key);
              }}
              className={`min-h-[52px] px-7 font-mono font-bold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all border-2 ${
                selectedDiv === key
                  ? 'bg-[#E3000F] border-[#E3000F] text-white shadow-md'
                  : 'bg-transparent border-[#C9B8B5] text-black hover:border-[#E3000F]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Monumental Rank Roster Display */}
        <div className="bg-white rounded-2xl border border-[#E6DAD8] p-6 sm:p-10 shadow-sm mb-12">
          <div className="flex flex-wrap items-baseline gap-4 sm:gap-8 pb-6 border-b border-[#E6DAD8] mb-4">
            <h3 className="disp goldtxt text-4xl sm:text-6xl lg:text-7xl">
              {cur.title}
            </h3>
            <span className="font-mono text-sm sm:text-lg text-[#3B3330]">
              {cur.info}
            </span>
          </div>

          <div className="divide-y divide-[#E6DAD8]">
            {cur.names.map((name, i) => (
              <div key={i} className="flex items-baseline gap-6 sm:gap-12 py-5 sm:py-8 group">
                <span className="whisper text-3xl sm:text-5xl lg:text-6xl text-[#E3000F] min-w-[2.2em]">
                  {'0' + (i + 1)}
                </span>
                <div className="flex-1">
                  <div className="font-mono text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#5C5350] mb-1">
                    {RANKS[i]}
                  </div>
                  <div
                    className={`disp text-2xl sm:text-5xl lg:text-7xl group-hover:text-[#E3000F] transition-colors ${
                      i === 0 ? 'goldtxt' : 'text-black'
                    }`}
                  >
                    {name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Match Fixture Banner */}
        <div id="fixture" className="rounded-2xl bg-white border border-[#E6DAD8] p-8 sm:p-12 text-center shadow-sm">
          <p className="chap mb-3">Chapter VII · Match Centre</p>
          <h3 className="disp text-4xl sm:text-6xl lg:text-8xl text-black mb-4">
            The Next Whistle
          </h3>
          <p className="font-mono text-xs tracking-widest text-[#E3000F] uppercase font-bold mb-4">
            KSHA SUPER DIVISION PREMIER MATCH
          </p>
          <div className="disp text-3xl sm:text-5xl lg:text-7xl text-black leading-tight mb-4">
            Rail Wheel Factory SC
            <br />
            <span className="goldtxt">versus</span>
            <br />
            Canara Bank Sports Club
          </div>
          <p className="font-mono text-sm sm:text-base text-[#3B3330] mb-8">
            Saturday · 16:30 IST · KSHA Hockey Stadium, Langford Town Pitch
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                soundEngine.playStickStrike();
                alert('Match calendar reminder (.ics) scheduled for KSHA Super Division Clash!');
              }}
              className="inline-flex items-center justify-center min-h-[52px] px-8 bg-[#E3000F] hover:bg-[#9E000B] text-white font-mono font-bold text-xs tracking-[0.14em] uppercase transition-all shadow-md"
            >
              Add to calendar
            </button>
            <button
              onClick={() => {
                soundEngine.playSplitFlap();
                setShowFullTable(!showFullTable);
              }}
              className="inline-flex items-center justify-center min-h-[52px] px-8 bg-transparent hover:bg-[#E3000F] text-[#E3000F] hover:text-white border-2 border-[#E3000F] font-mono font-bold text-xs tracking-[0.14em] uppercase transition-all"
            >
              {showFullTable ? 'Hide Table' : 'Full Standings Table'}
            </button>
          </div>

          {/* Collapsible Full Table */}
          {showFullTable && (
            <div className="mt-8 pt-8 border-t border-[#E6DAD8] overflow-x-auto text-left">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-[#E6DAD8] text-[#5C5350] uppercase tracking-wider">
                    <th className="py-3 px-4">Pos</th>
                    <th className="py-3 px-4">Club</th>
                    <th className="py-3 px-4 text-center">P</th>
                    <th className="py-3 px-4 text-center">W</th>
                    <th className="py-3 px-4 text-center">D</th>
                    <th className="py-3 px-4 text-center">L</th>
                    <th className="py-3 px-4 text-center">GD</th>
                    <th className="py-3 px-4 text-right">Pts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6DAD8]">
                  {LEAGUE_STANDINGS.map((row) => (
                    <tr key={row.pos} className="hover:bg-neutral-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold">{row.pos}</td>
                      <td className="py-3.5 px-4 font-semibold text-black">{row.club}</td>
                      <td className="py-3.5 px-4 text-center">{row.played}</td>
                      <td className="py-3.5 px-4 text-center">{row.won}</td>
                      <td className="py-3.5 px-4 text-center">{row.drawn}</td>
                      <td className="py-3.5 px-4 text-center">{row.lost}</td>
                      <td className="py-3.5 px-4 text-center text-emerald-700 font-bold">{row.gd}</td>
                      <td className="py-3.5 px-4 text-right font-black text-black">{row.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
