import React, { useState } from 'react';
import { CLUB_FACILITIES, RECIPROCAL_CLUBS, ClubFacility } from '../data/kshaData';
import { Castle, Sparkles, Building2, Shield, HeartHandshake, CheckCircle2, X, Clock, MapPin, ArrowRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface GentlemensPavilionProps {
  lang: 'en' | 'kn';
}

export const GentlemensPavilion: React.FC<GentlemensPavilionProps> = ({ lang }) => {
  const [selectedFacility, setSelectedFacility] = useState<ClubFacility>(CLUB_FACILITIES[0]);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantType, setApplicantType] = useState('Life Member');

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playStickStrike();
    soundEngine.playGloryChime();
    setEnquirySubmitted(true);
  };

  return (
    <section id="club" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E6DAD8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header: Chapter V · The Club */}
        <div className="mb-14">
          <p className="chap mb-3">Chapter V</p>
          <h2 className="disp text-5xl sm:text-7xl lg:text-9xl text-black mb-4">
            {lang === 'kn' ? 'ಪ್ರೈವೇಟ್ ಕ್ಲಬ್' : 'The Club'}
          </h2>
          <p className="whisper text-2xl sm:text-3xl lg:text-4xl text-black max-w-3xl mb-4 leading-snug">
            &ldquo;After the final whistle, the evening begins.&rdquo;
          </p>
          <p className="text-base sm:text-lg text-[#3B3330] max-w-3xl font-sans mb-12">
            The Mini Sports Complex opened on 1 February 2026, welcoming members, their dependents and visiting non-members into an aristocratic sporting sanctuary in the heart of Bengaluru.
          </p>

          {/* 4 Core Facility Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 border-t border-[#C9B8B5]">
            <div className="border-t-2 border-[#C9B8B5] pt-4">
              <div className="disp goldtxt text-6xl sm:text-7xl lg:text-8xl">3</div>
              <h3 className="disp text-2xl text-black mt-1">Badminton courts</h3>
              <p className="text-xs text-[#3B3330] mt-2 font-sans">
                Canadian maple hardwood shuttle courts, run by certified national badminton professionals.
              </p>
            </div>

            <div className="border-t-2 border-[#C9B8B5] pt-4">
              <div className="disp goldtxt text-6xl sm:text-7xl lg:text-8xl">8</div>
              <h3 className="disp text-2xl text-black mt-1">Billiards & snooker tables</h3>
              <p className="text-xs text-[#3B3330] mt-2 font-sans">
                Championship English slate draped in Strachan 6811 Gold cloth, with master coaching.
              </p>
            </div>

            <div className="border-t-2 border-[#C9B8B5] pt-4">
              <div className="disp goldtxt text-6xl sm:text-7xl lg:text-8xl">250</div>
              <h3 className="disp text-2xl text-black mt-1">Guests on the terrace</h3>
              <p className="text-xs text-[#3B3330] mt-2 font-sans">
                The panoramic third-floor function hall seats up to 250 with open floodlit pitch vistas.
              </p>
            </div>

            <div className="border-t-2 border-[#C9B8B5] pt-4">
              <div className="disp goldtxt text-6xl sm:text-7xl lg:text-8xl">12</div>
              <h3 className="disp text-2xl text-black mt-1">Renovated guest rooms</h3>
              <p className="text-xs text-[#3B3330] mt-2 font-sans">
                Boutique air-conditioned guest suites including an executive Presidential VIP suite.
              </p>
            </div>
          </div>
        </div>

        {/* Private Club Membership Banner & Action */}
        <div className="my-14 p-8 sm:p-12 rounded-2xl bg-[#FBF8F7] border border-[#E6DAD8]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="px-3 py-1 rounded bg-[#FFF1CC] text-[#6B4600] border border-[#D9B04A] font-mono text-xs font-bold uppercase">
                ADMISSION NOTICE · 1 JANUARY 2027 REVISION
              </span>
              <h3 className="disp text-3xl sm:text-4xl text-black">
                Request Private Club Membership Dossier
              </h3>
              <p className="text-sm text-[#3B3330] font-sans">
                Affiliation with 168 reciprocal elite clubs nationwide (including Bowring Institute, Bangalore Club, Century Club, Madras Cricket Club, Calcutta CC&FC). Membership admission fee rises to ₹5,00,000 + GST from 1 January 2027.
              </p>
            </div>

            <button
              onClick={() => {
                soundEngine.playGloryChime();
                setIsEnquiryOpen(true);
              }}
              className="inline-flex items-center justify-center min-h-[56px] px-8 bg-[#E3000F] hover:bg-[#9E000B] text-white font-mono font-bold text-xs tracking-[0.14em] uppercase transition-all shadow-md shrink-0"
            >
              Request Membership Dossier
            </button>
          </div>
        </div>

        {/* Reciprocal Clubs Grid */}
        <div className="mt-16">
          <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-[#E6DAD8]">
            <div>
              <h3 className="disp text-3xl sm:text-4xl text-black">
                168 Reciprocal Elite Clubs
              </h3>
              <p className="text-xs font-mono text-[#5C5350] uppercase tracking-wider mt-1">
                Pan-Indian Historic Gentlemen’s Club Affiliations
              </p>
            </div>
            <span className="text-xs font-mono text-[#E3000F] font-bold">
              ESTD. 1868 – 1946
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RECIPROCAL_CLUBS.map((club, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-[#E6DAD8] space-y-2 hover:border-black transition-colors">
                <span className="text-[10px] font-mono text-[#5C5350] uppercase">
                  ESTD. {club.founded} · {club.city}
                </span>
                <h4 className="disp text-xl text-black">{club.name}</h4>
                <p className="text-xs text-[#3B3330] leading-relaxed">
                  {club.privilege}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Membership Enquiry Modal */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-2xl border border-[#E6DAD8] shadow-2xl overflow-hidden p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-[#E6DAD8] pb-4 mb-6">
              <div>
                <span className="text-[10px] font-mono text-[#E3000F] uppercase tracking-widest font-bold">
                  ESTD. 1937 · PRIVATE CLUB WING
                </span>
                <h3 className="disp text-3xl text-black">
                  Club Membership Dossier
                </h3>
              </div>
              <button
                onClick={() => setIsEnquiryOpen(false)}
                className="p-1 rounded bg-neutral-100 hover:bg-neutral-200 text-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {enquirySubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="disp text-2xl text-black">Dossier Request Recorded</h4>
                <p className="text-xs text-[#3B3330] max-w-sm mx-auto font-sans">
                  The Honorary Secretary’s Secretariat has queued your prospectus. An imperial dossier and application token will be dispatched to {applicantPhone || applicantName}.
                </p>
                <button
                  onClick={() => {
                    setIsEnquiryOpen(false);
                    setEnquirySubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded bg-black text-white font-mono text-xs uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-[#5C5350] uppercase mb-1">Applicant Full Name</label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Enter full legal name..."
                    className="w-full p-2.5 rounded-lg border border-[#C9B8B5] text-black focus:outline-none focus:border-[#E3000F]"
                  />
                </div>

                <div>
                  <label className="block text-[#5C5350] uppercase mb-1">Mobile / WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    placeholder="+91 98450 00000"
                    className="w-full p-2.5 rounded-lg border border-[#C9B8B5] text-black focus:outline-none focus:border-[#E3000F]"
                  />
                </div>

                <div>
                  <label className="block text-[#5C5350] uppercase mb-1">Category of Membership</label>
                  <select
                    value={applicantType}
                    onChange={(e) => setApplicantType(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[#C9B8B5] text-black bg-white focus:outline-none focus:border-[#E3000F]"
                  >
                    <option>Life Member (₹5,00,000 + GST)</option>
                    <option>Life Associate (Sports Fraternity)</option>
                    <option>Corporate Institutional Patron</option>
                    <option>Permanent Olympian / International Honoris Causa</option>
                  </select>
                </div>

                <div className="p-3 rounded-lg bg-[#FBF8F7] border border-[#E6DAD8] text-[11px] text-[#5C5350] font-sans">
                  By submitting, you acknowledge that KSHA is an independent registered society under Mysore Societies Act 1937 with statutory committee balloting.
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#E3000F] hover:bg-[#9E000B] text-white font-mono font-bold text-xs uppercase tracking-[0.14em] transition-all rounded shadow-md"
                >
                  Submit Membership Request
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
