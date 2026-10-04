import React, { useState } from 'react';
import { EXECUTIVE_COUNCIL } from '../data/kshaData';
import { ShieldAlert, FileText, CheckCheck, Users, Landmark, Scale, Search, Download } from 'lucide-react';
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
    <section id="vault" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-mono tracking-[0.25em] text-ksha-red uppercase mb-4 font-bold">
            <Scale className="w-3.5 h-3.5" />
            CHAPTER VII · STATUTORY TRANSPARENCY
          </div>

          <h2 className="font-cinzel font-black text-4xl sm:text-6xl text-neutral-950 tracking-tight mb-4">
            {lang === 'kn' ? 'ಆಡಳಿತ ಮುದ್ರಿಕೆ & ಆರ್‌ಟಿಐ ವಾಲ್ಟ್' : 'The Official Gazette & Council'}
          </h2>

          <p className="font-editorial italic text-xl sm:text-2xl text-neutral-600">
            &ldquo;Registered under Mysore Societies Act 1937. Managed with sovereign public accountability.&rdquo;
          </p>
        </div>

        {/* Vault Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {[
            { id: 'council', label: 'Executive Council (ಆಡಳಿತ ಮಂಡಳಿ)' },
            { id: 'clubs', label: '61 Affiliated Clubs Directory' },
            { id: 'agm', label: '56th AGM Audited Statements' },
            { id: 'rti', label: 'RTI Sec 4(1)(b) Disclosures' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundEngine.playSplitFlap();
                setActiveVaultTab(tab.id as typeof activeVaultTab);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-cinzel font-bold text-xs tracking-wider uppercase border transition-all ${
                activeVaultTab === tab.id
                  ? 'bg-ksha-red text-white border-ksha-red shadow-[0_4px_14px_rgba(225,6,0,0.3)]'
                  : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:text-neutral-950 hover:bg-white'
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
                className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm hover:border-ksha-red/60 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-ksha-red uppercase font-semibold block mb-2">
                    {exec.designation}
                  </span>
                  <h3 className="font-cinzel font-bold text-xl text-neutral-950 group-hover:text-ksha-red transition-colors mb-2">
                    {exec.name}
                  </h3>
                  <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                    {exec.meta}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-neutral-100 text-[10px] font-mono text-neutral-500 uppercase flex items-center justify-between">
                  <span>Tenure: 2024-2028</span>
                  <span className="text-turf-green font-semibold">Gazetted</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: 61 Affiliated Clubs Directory */}
        {activeVaultTab === 'clubs' && (
          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-cinzel font-bold text-xl text-neutral-950">
                  61 Institutional & State Affiliated Clubs
                </h3>
                <div className="text-xs font-mono text-neutral-500">
                  Karnataka State Hockey Association Official Registry
                </div>
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Filter 61 affiliated clubs..."
                  value={clubSearch}
                  onChange={(e) => setClubSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white border border-neutral-300 text-xs font-mono text-neutral-900 focus:outline-none focus:border-ksha-red shadow-inner"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2">
              {filteredClubs.map((club, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-white border border-neutral-200 shadow-xs flex items-center justify-between text-xs font-mono"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ksha-red" />
                    <span className="text-neutral-800 font-medium">{club}</span>
                  </div>
                  <span className="text-[10px] text-turf-green font-bold">Active Voting</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: 56th AGM Financial Accounts */}
        {activeVaultTab === 'agm' && (
          <div className="p-8 sm:p-10 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-lg space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
              <div>
                <h3 className="font-cinzel font-bold text-xl text-neutral-950">
                  56th Annual General Meeting Audited Accounts
                </h3>
                <div className="text-xs font-mono text-neutral-500">
                  Statutory Schedules & Certified Balance Sheet (FY 2024–25)
                </div>
              </div>
              <span className="px-3 py-1 rounded bg-turf-green/10 text-turf-green text-xs font-mono border border-turf-green/30 font-semibold">
                Unanimously Adopted
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs">
                <div className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">TURF MAINTENANCE CORPUS</div>
                <div className="font-cinzel text-2xl font-bold text-neutral-950 mt-1">₹ 2,45,00,000</div>
                <div className="text-xs font-mono text-neutral-500 mt-2">Ring-fenced for synthetic turf replacement</div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs">
                <div className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">GRASSROOTS SUBSIDY FUND</div>
                <div className="font-cinzel text-2xl font-bold text-neutral-950 mt-1">₹ 1,18,50,000</div>
                <div className="text-xs font-mono text-neutral-500 mt-2">Disbursed to 18 affiliated district units</div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs">
                <div className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">STATUTORY AUDITOR</div>
                <div className="font-cinzel text-base font-bold text-neutral-950 mt-1">M/s. Rao & Sundaram</div>
                <div className="text-xs font-mono text-neutral-500 mt-2">Chartered Accountants · Bengaluru</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: RTI Section 4(1)(b) Proactive Disclosures */}
        {activeVaultTab === 'rti' && (
          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-lg space-y-6">
            <div className="border-b border-neutral-200 pb-4">
              <h3 className="font-cinzel font-bold text-xl text-neutral-950">
                Right to Information (RTI) Act 2005 · Section 4(1)(b)
              </h3>
              <div className="text-xs font-mono text-neutral-500">
                Proactive Public Disclosures, Public Information Officer & Appellate Authorities
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs">
                <div className="text-[10px] font-mono text-ksha-red font-bold uppercase mb-1">
                  PUBLIC INFORMATION OFFICER (PIO)
                </div>
                <div className="font-cinzel text-lg font-bold text-neutral-950">Honorary Assistant Secretary</div>
                <div className="text-xs font-mono text-neutral-700 mt-1">
                  KSHA Stadium, Akkithimmanahalli, Langford Town, Bengaluru – 560027
                </div>
                <div className="text-xs font-mono text-neutral-500 mt-2">
                  Email: secretariat@ksha.in | Tel: +91 80 2222 5555
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs">
                <div className="text-[10px] font-mono text-ksha-red font-bold uppercase mb-1">
                  FIRST APPELLATE AUTHORITY (FAA)
                </div>
                <div className="font-cinzel text-lg font-bold text-neutral-950">Honorary Secretary, KSHA</div>
                <div className="text-xs font-mono text-neutral-700 mt-1">
                  Executive Secretariat, Karnataka State Hockey Association
                </div>
                <div className="text-xs font-mono text-neutral-500 mt-2">
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
