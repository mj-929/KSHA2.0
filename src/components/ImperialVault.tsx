import React, { useState } from 'react';
import { EXECUTIVE_COUNCIL } from '../data/kshaData';
import { Scale, Search, Shield, FileText, CheckCircle2 } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface ImperialVaultProps {
  lang: 'en' | 'kn';
}

const AFFILIATED_CLUBS_SAMPLE = [
  'Army Service Corps (ASC Centre & College)',
  'Madras Engineering Group & Centre (MEG Sappers)',
  'Rail Wheel Factory Sports Association (RWFSA)',
  'Canara Bank Sports Club',
  'Fortis Hockey Club Bengaluru',
  'Maratha Light Infantry Regimental Centre (Belagavi)',
  'Karnataka State Police (KSP) Sports Section',
  'Post & Telegraph Sports Control Board',
  'Hindustan Aeronautics Limited (HAL SC)',
  'Bharat Earth Movers Limited (BEML SC)',
  'State Bank of India Hockey Wing',
  'Bangalore Blue Star Hockey Club',
  'Coorg Veterans Hockey Club (Madikeri)',
  'Belgaum Cantonment Sports Club',
  'Youngsters Hockey Club Shanti Nagar',
  'Langford Rangers Hockey Club'
];

export const ImperialVault: React.FC<ImperialVaultProps> = ({ lang }) => {
  const [clubSearch, setClubSearch] = useState('');
  const [activeVaultTab, setActiveVaultTab] = useState<'council' | 'clubs' | 'agm' | 'rti'>('council');

  const filteredClubs = AFFILIATED_CLUBS_SAMPLE.filter(c =>
    c.toLowerCase().includes(clubSearch.toLowerCase())
  );

  return (
    <section id="vault" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FBF8F7] border-b border-[#E6DAD8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header: Chapter VI · The Roll Call */}
        <div className="mb-14">
          <p className="chap mb-3">Chapter VI</p>
          <h2 className="disp text-5xl sm:text-7xl lg:text-9xl text-black mb-4">
            {lang === 'kn' ? 'ಸಂಸ್ಥೆಯ ಗಣತಿ ಮತ್ತು ಆಡಳಿತ' : 'The Roll Call'}
          </h2>
          <p className="whisper text-2xl sm:text-3xl lg:text-4xl text-black max-w-3xl mb-4 leading-snug">
            &ldquo;A state’s hockey, counted. As on 31 March 2025.&rdquo;
          </p>

          {/* 6 Key Census Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-6 border-t border-[#C9B8B5]">
            <div className="border-t-2 border-[#C9B8B5] pt-3">
              <div className="disp goldtxt text-5xl sm:text-6xl">79</div>
              <h3 className="disp text-base sm:text-lg text-black mt-1">Member clubs</h3>
            </div>
            <div className="border-t-2 border-[#C9B8B5] pt-3">
              <div className="disp goldtxt text-5xl sm:text-6xl">1,088</div>
              <h3 className="disp text-base sm:text-lg text-black mt-1">Life Members</h3>
            </div>
            <div className="border-t-2 border-[#C9B8B5] pt-3">
              <div className="disp goldtxt text-5xl sm:text-6xl">1,994</div>
              <h3 className="disp text-base sm:text-lg text-black mt-1">Life Associates</h3>
            </div>
            <div className="border-t-2 border-[#C9B8B5] pt-3">
              <div className="disp goldtxt text-5xl sm:text-6xl">168</div>
              <h3 className="disp text-base sm:text-lg text-black mt-1">Reciprocal clubs</h3>
            </div>
            <div className="border-t-2 border-[#C9B8B5] pt-3">
              <div className="disp goldtxt text-5xl sm:text-6xl">100+</div>
              <h3 className="disp text-base sm:text-lg text-black mt-1">League matches</h3>
            </div>
            <div className="border-t-2 border-[#C9B8B5] pt-3">
              <div className="disp goldtxt text-5xl sm:text-6xl">4</div>
              <h3 className="disp text-base sm:text-lg text-black mt-1">Divisions</h3>
            </div>
          </div>
        </div>

        {/* Vault Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {[
            { id: 'council', label: 'Executive Council (ಆಡಳಿತ ಮಂಡಳಿ)' },
            { id: 'clubs', label: '61 Affiliated Clubs Directory' },
            { id: 'agm', label: '56th AGM Audited Accounts' },
            { id: 'rti', label: 'RTI Sec 4(1)(b) Disclosures' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundEngine.playSplitFlap();
                setActiveVaultTab(tab.id as typeof activeVaultTab);
              }}
              className={`px-4 sm:px-6 py-2.5 rounded font-mono font-bold text-xs tracking-wider uppercase border transition-all ${
                activeVaultTab === tab.id
                  ? 'bg-[#E3000F] text-white border-[#E3000F] shadow-sm'
                  : 'bg-white text-black border-[#C9B8B5] hover:border-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Executive Council */}
        {activeVaultTab === 'council' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXECUTIVE_COUNCIL.map((exec, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundEngine.playSplitFlap()}
                className="p-6 rounded-2xl bg-white border border-[#E6DAD8] shadow-xs hover:border-[#E3000F] transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#E3000F] uppercase font-bold block mb-1.5">
                    {exec.designation}
                  </span>
                  <h3 className="disp text-2xl text-black group-hover:text-[#E3000F] transition-colors mb-2">
                    {exec.name}
                  </h3>
                  <p className="font-sans text-xs text-[#3B3330] leading-relaxed">
                    {exec.meta}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#E6DAD8] text-[10px] font-mono text-[#5C5350] uppercase flex items-center justify-between">
                  <span>Tenure: 2024–2028</span>
                  <span className="text-emerald-700 font-bold">Gazetted</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: 61 Affiliated Clubs Directory */}
        {activeVaultTab === 'clubs' && (
          <div className="p-8 rounded-2xl bg-white border border-[#E6DAD8] shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="disp text-3xl text-black">
                  61 Institutional & State Affiliated Clubs
                </h3>
                <div className="text-xs font-mono text-[#5C5350]">
                  Official Registry of Affiliated Voting Member Units
                </div>
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search 61 clubs..."
                  value={clubSearch}
                  onChange={(e) => setClubSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#FBF8F7] border border-[#C9B8B5] text-xs font-mono text-black focus:outline-none focus:border-[#E3000F]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2">
              {filteredClubs.map((club, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#FBF8F7] border border-[#E6DAD8] flex items-center justify-between text-xs font-mono"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#E3000F]" />
                    <span className="text-black font-medium">{club}</span>
                  </div>
                  <span className="text-[10px] text-emerald-700 font-bold uppercase">Active Voting</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: 56th AGM Financial Accounts */}
        {activeVaultTab === 'agm' && (
          <div className="p-8 rounded-2xl bg-white border border-[#E6DAD8] shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#E6DAD8] pb-4">
              <div>
                <h3 className="disp text-3xl text-black">
                  56th Annual General Meeting Audited Accounts
                </h3>
                <div className="text-xs font-mono text-[#5C5350]">
                  Certified Balance Sheet & Schedules (FY 2024–25)
                </div>
              </div>
              <span className="px-3 py-1 rounded bg-emerald-50 text-emerald-800 text-xs font-mono border border-emerald-200 font-bold">
                Unanimously Adopted
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-[#FBF8F7] border border-[#E6DAD8]">
                <div className="text-[10px] font-mono text-[#5C5350] uppercase font-bold">TURF REPLACEMENT CORPUS</div>
                <div className="disp text-3xl sm:text-4xl text-black mt-1">₹ 2,45,00,000</div>
                <div className="text-xs font-mono text-[#5C5350] mt-2">Ring-fenced for synthetic polygras renewal</div>
              </div>

              <div className="p-5 rounded-xl bg-[#FBF8F7] border border-[#E6DAD8]">
                <div className="text-[10px] font-mono text-[#5C5350] uppercase font-bold">GRASSROOTS SUBSIDY FUND</div>
                <div className="disp text-3xl sm:text-4xl text-black mt-1">₹ 1,18,50,000</div>
                <div className="text-xs font-mono text-[#5C5350] mt-2">Disbursed to 18 affiliated district units</div>
              </div>

              <div className="p-5 rounded-xl bg-[#FBF8F7] border border-[#E6DAD8]">
                <div className="text-[10px] font-mono text-[#5C5350] uppercase font-bold">STATUTORY AUDITOR</div>
                <div className="disp text-2xl text-black mt-1">M/s. Rao & Sundaram</div>
                <div className="text-xs font-mono text-[#5C5350] mt-2">Chartered Accountants · Bengaluru</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: RTI Section 4(1)(b) Proactive Disclosures */}
        {activeVaultTab === 'rti' && (
          <div className="p-8 rounded-2xl bg-white border border-[#E6DAD8] shadow-sm space-y-6">
            <div className="border-b border-[#E6DAD8] pb-4">
              <h3 className="disp text-3xl text-black">
                Right to Information (RTI) Act 2005 · Section 4(1)(b)
              </h3>
              <div className="text-xs font-mono text-[#5C5350]">
                Proactive Public Disclosures, Public Information Officer & Appellate Authorities
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-[#FBF8F7] border border-[#E6DAD8]">
                <div className="text-[10px] font-mono text-[#E3000F] font-bold uppercase mb-1">
                  PUBLIC INFORMATION OFFICER (PIO)
                </div>
                <div className="disp text-2xl text-black">Honorary Assistant Secretary</div>
                <div className="text-xs font-mono text-[#3B3330] mt-1">
                  KSHA Stadium, Rhenius Street, Langford Town, Bengaluru – 560025
                </div>
                <div className="text-xs font-mono text-[#5C5350] mt-2">
                  Email: karnatakastatehockey@gmail.com | Tel: +91 80 2222 5555
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#FBF8F7] border border-[#E6DAD8]">
                <div className="text-[10px] font-mono text-[#E3000F] font-bold uppercase mb-1">
                  FIRST APPELLATE AUTHORITY (FAA)
                </div>
                <div className="disp text-2xl text-black">Honorary Secretary, KSHA</div>
                <div className="text-xs font-mono text-[#3B3330] mt-1">
                  Executive Secretariat, Karnataka State Hockey Association
                </div>
                <div className="text-xs font-mono text-[#5C5350] mt-2">
                  Statutory Appeal Disposal Window: 30 Working Days
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
