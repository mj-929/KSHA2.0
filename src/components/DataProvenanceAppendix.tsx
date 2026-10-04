import React, { useState } from 'react';
import { FileCheck, Search, ExternalLink, ShieldAlert, BookOpen } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface ProvenanceRow {
  section: string;
  field: string;
  fact: string;
  sourceDoc: string;
  citation: string;
}

export const DATA_PROVENANCE_ROWS: ProvenanceRow[] = [
  {
    section: 'Header & Red Wire Ticker',
    field: 'Membership Fee Revision',
    fact: 'Admission fee rises from ₹3.5L to ₹5.00L + 18% GST (Total ₹5,90,000) effective 1 January 2027',
    sourceDoc: 'CIRCULARs - KSHA.pdf',
    citation: 'Circular dated 01-09-2026, Section 1 (Page 1)'
  },
  {
    section: 'Hero & Split-Flap Ticker',
    field: 'Membership Counts',
    fact: '3,128 Total Members (1,088 Life Members, 1,994 Life Associates, 46 Temporary Members)',
    sourceDoc: '56th AGM - KSHA ANNUAL REPORT.pdf',
    citation: 'Section 4, Membership Register as on 31-03-2025'
  },
  {
    section: 'Hero & Split-Flap Ticker',
    field: 'Affiliated Clubs & Districts',
    fact: '79 Total Units (61 Affiliated Private/Institutional Clubs + 18 District Hockey Associations)',
    sourceDoc: '56th AGM - KSHA ANNUAL REPORT.pdf',
    citation: 'Annexures 3 & 4 (Pages 38–42)'
  },
  {
    section: 'Chapter I: The Travancore Cup',
    field: '94th Edition Tournament Data',
    fact: 'RWFSA won 94th edition defeating DPS; 13 teams, 21 matches; Best GK: Arun (DPS), Player of Tournament: Dhanush (RWFSA)',
    sourceDoc: '56th AGM - KSHA ANNUAL REPORT.pdf',
    citation: 'Section E: State Level Tournaments, Pages 30–31'
  },
  {
    section: 'Chapter I: D.S. Murthy Memorial',
    field: 'Memorial Cup Data',
    fact: 'Annual tournament instituted in honor of late past President D.S. Murthy for state talents',
    sourceDoc: '56th AGM - KSHA ANNUAL REPORT.pdf & Vercel MatchCenter.tsx',
    citation: 'Section E(ii), Page 31 & MatchCenter.tsx line 232'
  },
  {
    section: 'Chapter IV: The Legends',
    field: '15 Olympians Roll of Honour',
    fact: '15 Karnataka Olympians (from Dr. M.P. Ganesh 1972 to S.V. Sunil 2016) with specific Olympic years & medals',
    sourceDoc: '56th AGM - KSHA ANNUAL REPORT.pdf & /public/assets/olympians/',
    citation: 'Annexure 1: Roll of Honour & Vercel Asset Library'
  },
  {
    section: 'Chapter IV: The Legends',
    field: '11 Arjuna Awardees',
    fact: '11 Arjuna Awardees (7 Hockey + 2 Kabaddi + 2 Para Athletics/Swimming)',
    sourceDoc: '56th AGM - KSHA ANNUAL REPORT.pdf',
    citation: 'Annexure 2: National Honours Register'
  },
  {
    section: 'Chapter IV: The Legends',
    field: '4 International Umpires',
    fact: 'R.V. Raghu Prasad (Golden Whistle, 200 caps, 2025 FIH Umpire of the Year), K. Krishnamurthy, V.J. John, B.S. Prakash',
    sourceDoc: '56th AGM - KSHA ANNUAL REPORT.pdf',
    citation: 'Annexure 5: International Officiating Panel'
  },
  {
    section: 'Chapter V: The 18 Cradles',
    field: '18 District Units Register',
    fact: 'Official district list from Coorg Hockey Association (Madikeri) to Belgaum, Vijayapura, Dharwad, Kalaburgi, Shimoga',
    sourceDoc: '56th AGM - KSHA ANNUAL REPORT.pdf',
    citation: 'Annexure 4: Registered District Associations (Pages 41–42)'
  },
  {
    section: 'Chapter VI: Gentlemen Pavilion',
    field: 'Party Hall Charges',
    fact: 'Tariffs for 7 halls: Green Halls 1 & 2 (₹2,360–₹3,570), Ground A/C (₹4,720), 2nd Fl A/C (₹8,760–₹12,300), Roof Terrace (₹9,900–₹30,000)',
    sourceDoc: 'PARTY HALL CHARGES.docx & Party Hall.docx',
    citation: 'EC Resolution effective 01-02-2026'
  },
  {
    section: 'Chapter VI: Gentlemen Pavilion',
    field: 'Guest Rooms Tariffs',
    fact: 'Small Rooms (₹1,232/nt), Standard & Room 202 (₹1,680/nt), Heritage Suite 201 (₹2,016/nt) incl. CGST/SGST',
    sourceDoc: 'PARTY HALL CHARGES.docx',
    citation: 'EC Meeting Resolution dated 25-03-2023'
  },
  {
    section: 'Chapter VI: Gentlemen Pavilion',
    field: 'Clubhouse Session Timings',
    fact: 'Forenoon Session 11:30 AM–3:30 PM (last order 2:45 PM); Evening 6:30 PM–11:00 PM (last order 10:30 PM)',
    sourceDoc: 'CIRCULARs - KSHA.pdf',
    citation: 'Circular dated 11-02-2026, Item 6 (Page 3)'
  },
  {
    section: 'Chapter VI: Gentlemen Pavilion',
    field: 'LA to LM Migration Window',
    fact: 'Final opportunity to migrate from Life Associate to Life Member for ₹2 Lakh + GST, strictly capped at 100 members',
    sourceDoc: 'CIRCULARs - KSHA.pdf',
    citation: 'Circular dated 11-02-2026, Item 7 (Page 3)'
  },
  {
    section: 'Chapter VI: Gentlemen Pavilion',
    field: 'Mandatory Cover Charge',
    fact: 'Minimum ₹1,200 spend per 6-month half (Apr–Sep, Oct–Mar) or ₹1,500 cover charge levied along with subscription',
    sourceDoc: 'CIRCULARs - KSHA.pdf',
    citation: 'Circular dated 01-09-2026, Section 2 (Pages 1–2)'
  },
  {
    section: 'Chapter VI: Gentlemen Pavilion',
    field: 'Operational Directory',
    fact: 'Sri R. Viswanath Singh (Party Halls: 99809 05385), Sri A. Francis (Rooms: 98865 16936), Hon. Sec. K. Krishnamurthy (98452 78847)',
    sourceDoc: 'CIRCULARs - KSHA.pdf',
    citation: 'Circular dated 11-02-2026, Items 10 & 13'
  },
  {
    section: 'Chapter VII: The Imperial Vault',
    field: 'Audited Financial Statements',
    fact: 'Audited accounts by Praveen & Madan, Chartered Accountants, Bengaluru (Report dated 21-10-2025)',
    sourceDoc: '56th AGM - KSHA ACCOUNTS.pdf',
    citation: 'Audited Balance Sheet & Income/Expenditure 2024–25'
  },
  {
    section: 'Chapter VII: The Imperial Vault',
    field: 'Executive Council Roster',
    fact: 'Patron Sri N.A. Haris (MLA), President Sri Sushil Kumar Gupta, Hon. Secretary Sri K. Krishnamurthy, Hon. Treasurer Sri G. Suresh',
    sourceDoc: '56th AGM - KSHA ANNUAL REPORT.pdf',
    citation: 'Office Bearers & Managing Committee Directory (Page 3)'
  },
  {
    section: 'Chapter VII: The Imperial Vault',
    field: 'Reciprocal Clubs Directory',
    fact: '168 reciprocal clubs across India (Bowring Institute, Bangalore Club, Century Club, MCC Chennai, Calcutta CC&FC, etc.)',
    sourceDoc: 'KSHA-Reciprocal-Social-Clubs-2025-07-23.pdf & Vercel Data',
    citation: 'Annexure 15 / Master Club Registry'
  }
];

export const DataProvenanceAppendix: React.FC<{ lang?: 'en' | 'kn' }> = ({ lang = 'en' }) => {
  const [filterText, setFilterText] = useState('');

  const filteredRows = DATA_PROVENANCE_ROWS.filter((r) => {
    if (!filterText) return true;
    const q = filterText.toLowerCase();
    return (
      r.section.toLowerCase().includes(q) ||
      r.field.toLowerCase().includes(q) ||
      r.fact.toLowerCase().includes(q) ||
      r.sourceDoc.toLowerCase().includes(q) ||
      r.citation.toLowerCase().includes(q)
    );
  });

  return (
    <section id="appendix" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FBF8F7] border-b border-[#E6DAD8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#E6DAD8]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white font-mono text-xs font-bold uppercase tracking-wider mb-3">
              <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Data Provenance Register</span>
            </div>
            <h2 className="disp text-4xl sm:text-6xl text-black">
              {lang === 'kn' ? 'ಮಾಹಿತಿ ಮೂಲಗಳ ಅನುಬಂಧ' : 'Appendix: Data Provenance'}
            </h2>
            <p className="whisper text-lg sm:text-xl text-[#3B3330] mt-2 max-w-2xl">
              Strict audit table mapping every factual statement on this platform directly to its originating official KSHA annexure or circular. Zero synthetic fabrication.
            </p>
          </div>

          {/* Search filter input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search fact, document, or section..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 bg-white text-xs font-mono focus:outline-hidden focus:border-black"
            />
          </div>
        </div>

        {/* Provenance Table */}
        <div className="rounded-2xl border border-[#E6DAD8] bg-white overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-900 text-white font-mono text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 font-bold">Platform Section</th>
                  <th className="py-3.5 px-4 font-bold">Information / Field</th>
                  <th className="py-3.5 px-5 font-bold">Verified Factual Data</th>
                  <th className="py-3.5 px-4 font-bold">Originating Official File</th>
                  <th className="py-3.5 px-4 font-bold">Exact Citation / Resolution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {filteredRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-neutral-900 whitespace-nowrap">
                      {row.section}
                    </td>
                    <td className="py-3.5 px-4 font-sans font-semibold text-neutral-800">
                      {row.field}
                    </td>
                    <td className="py-3.5 px-5 font-sans text-neutral-700 leading-relaxed max-w-md">
                      {row.fact}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs font-bold text-[#E3000F] whitespace-nowrap">
                      {row.sourceDoc}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[11px] text-[#5C5350]">
                      {row.citation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono gap-2">
            <span>Showing {filteredRows.length} of {DATA_PROVENANCE_ROWS.length} audited data entries</span>
            <span className="flex items-center gap-1.5 text-neutral-700 font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              Source Directory: /Users/maheshjayashankar/Sideprojects/KSHA2.0
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
