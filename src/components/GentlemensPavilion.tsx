import React, { useState } from 'react';
import { CLUB_FACILITIES, RECIPROCAL_CLUBS, ClubFacility } from '../data/kshaData';
import { Castle, Sparkles, Building2, Shield, HeartHandshake, CheckCircle2, X } from 'lucide-react';
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
    <section id="pavilion" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#060606] border-t border-neutral-900 overflow-hidden">
      
      {/* Background glow & royal motif */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-mono tracking-[0.25em] text-ksha-red uppercase mb-4">
            <Castle className="w-3.5 h-3.5" />
            CHAPTER VI · PRIVATE CLUB HERITAGE
          </div>

          <h2 className="font-cinzel font-black text-4xl sm:text-6xl text-white tracking-tight mb-4">
            {lang === 'kn' ? '೧೯೩೭ ಕ್ಲಬ್ ಹೌಸ್ & ಸ್ಪೋರ್ಟ್ಸ್ ಕಾಂಪ್ಲೆಕ್ಸ್' : 'The 1937 Club House & Sports Complex'}
          </h2>

          <p className="font-editorial italic text-xl sm:text-2xl text-neutral-400">
            &ldquo;Where Olympian tacticians debate the game over billiards and vintage timber.&rdquo;
          </p>
        </div>

        {/* Private Club Identity Banner */}
        <div className="mb-16 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#171717] via-[#101010] to-[#0A0A0A] border border-ksha-border-red/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded bg-ksha-red/20 text-red-300 font-mono text-xs border border-red-500/40">
                EXCLUSIVE PRIVATE MEMBERS’ ATHLETIC ENCLAVE
              </span>

              <h3 className="font-cinzel font-bold text-2xl sm:text-3xl text-white">
                An Aristocratic Sports Sanctuary in the Heart of Bengaluru
              </h3>

              <p className="font-sans text-neutral-300 leading-relaxed text-sm sm:text-base">
                Beyond its stature as a governing sports federation, KSHA is an exclusive private sporting club 
                founded alongside the historic cantonment elite in 1937. With members spanning international Olympians, 
                civil servants, corporate leaders, and legacy sports families, the Clubhouse at Akkithimmanahalli offers 
                unparalleled racquet, cue, aquatic, and wellness facilities paired with private field-view hospitality.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => {
                    soundEngine.playSplitFlap();
                    setIsEnquiryOpen(true);
                  }}
                  className="px-6 py-3 rounded bg-ksha-red hover:bg-[#c00500] text-white font-cinzel font-bold text-xs tracking-widest uppercase shadow-lg shadow-ksha-red/30 transition-all"
                >
                  Request Club Membership Dossier
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-black/60 p-6 rounded-xl border border-neutral-800 space-y-3 font-mono text-xs text-neutral-300">
              <div className="text-ksha-red font-bold uppercase tracking-wider text-[11px]">
                CLUB WING HIGHLIGHTS
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-turf-green shrink-0" />
                <span>8 Strachan 6811 Gold Billiards Tables</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-turf-green shrink-0" />
                <span>3 Canadian Maple Badminton Courts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-turf-green shrink-0" />
                <span>25m Semi-Olympic Hydrotherapy Pool</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-turf-green shrink-0" />
                <span>Cryo & Physiotherapy Recovery Clinic</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-turf-green shrink-0" />
                <span>6 Reciprocal Elite Clubs Nationwide</span>
              </div>
            </div>

          </div>
        </div>

        {/* Club Facilities Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {CLUB_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              onMouseEnter={() => {
                setSelectedFacility(facility);
                soundEngine.playSplitFlap();
              }}
              className="p-6 rounded-2xl bg-[#0F0F0F] border border-neutral-800 hover:border-ksha-red/80 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 text-neutral-400 border border-white/10 mb-4 inline-block">
                  {facility.category}
                </span>

                <h4 className="font-cinzel font-bold text-lg text-white group-hover:text-ksha-red transition-colors mb-2">
                  {facility.title}
                </h4>
                <div className="font-kannada text-xs text-neutral-400 mb-3">
                  {facility.kannadaTitle}
                </div>

                <div className="text-xs font-mono text-amber-300/90 mb-3">
                  ★ {facility.highlight}
                </div>

                <p className="font-sans text-xs text-neutral-300 leading-relaxed mb-4">
                  {facility.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-neutral-900 font-mono text-[11px] text-neutral-400">
                  {facility.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ksha-red" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-900 text-[10px] font-mono text-neutral-500 uppercase flex items-center justify-between">
                <span>Langford Town Complex</span>
                <span className="text-neutral-400 group-hover:text-white">Member Access</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reciprocal Clubs Network Section */}
        <div className="bg-[#0A0A0A] p-8 sm:p-12 rounded-2xl border border-neutral-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs text-ksha-red tracking-widest uppercase">
              RECIPROCAL PRIVILEGE NETWORK
            </span>
            <h3 className="font-cinzel font-bold text-2xl sm:text-3xl text-white mt-1">
              Affiliated Century-Old Clubs Across India
            </h3>
            <p className="font-sans text-neutral-400 text-xs sm:text-sm mt-2">
              KSHA members enjoy premier sporting, accommodation, and dining privileges at sister clubs throughout the subcontinent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RECIPROCAL_CLUBS.map((club, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundEngine.playSplitFlap()}
                className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-600 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase mb-2">
                    <span>{club.city}, {club.state}</span>
                    <span className="text-neutral-400 font-bold">ESTD {club.founded}</span>
                  </div>
                  <h4 className="font-cinzel font-bold text-base text-white mb-2">
                    {club.name}
                  </h4>
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                    {club.privileges}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-900 text-[10px] font-mono text-turf-green flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Reciprocal Card Recognized</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Membership Enquiry Modal */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#111111] rounded-2xl border border-neutral-700 p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => {
                soundEngine.playSplitFlap();
                setIsEnquiryOpen(false);
                setEnquirySubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {!enquirySubmitted ? (
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-ksha-red uppercase tracking-widest">
                  <Castle className="w-4 h-4" />
                  KSHA PRIVATE CLUB MEMBERSHIP ENQUIRY
                </div>

                <h3 className="font-cinzel font-black text-2xl text-white">
                  Join the 1937 Club Heritage
                </h3>

                <p className="font-sans text-xs text-neutral-400">
                  Applications for Life, Ordinary, and Sportsman Memberships are processed semi-annually under the purview of the Executive Council.
                </p>

                <div>
                  <label className="block text-xs font-mono text-neutral-300 uppercase mb-1">
                    Candidate Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Major R. K. Thimmaiah"
                    className="w-full px-3 py-2 rounded bg-neutral-950 border border-neutral-800 focus:border-ksha-red text-white text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-300 uppercase mb-1">
                    Contact Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    placeholder="+91 98450 XXXXX"
                    className="w-full px-3 py-2 rounded bg-neutral-950 border border-neutral-800 focus:border-ksha-red text-white text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-300 uppercase mb-1">
                    Membership Category
                  </label>
                  <select
                    value={applicantType}
                    onChange={(e) => setApplicantType(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-neutral-950 border border-neutral-800 focus:border-ksha-red text-white text-sm focus:outline-none"
                  >
                    <option value="Life Member">Life Member (Gentlemen&rsquo;s Pavilion & Sports)</option>
                    <option value="Sports Member">Sports Member (Billiards & Badminton Focus)</option>
                    <option value="Institutional Member">Corporate / Institutional Affiliation</option>
                    <option value="Olympian / Veteran">National / State Player Special Quota</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded bg-ksha-red hover:bg-[#c00500] text-white font-cinzel font-bold text-xs tracking-widest uppercase transition-all shadow-lg shadow-ksha-red/30 mt-2"
                >
                  Submit Application For Secretariat Review
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-turf-green/20 text-turf-green flex items-center justify-center mx-auto border border-turf-green/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-cinzel font-bold text-2xl text-white">Application Recorded</h4>
                <p className="font-sans text-xs text-neutral-300 max-w-sm mx-auto">
                  Thank you, <strong className="text-white">{applicantName}</strong>. The KSHA Secretariat at Akkithimmanahalli has logged your enquiry for {applicantType}. You will receive the official membership prospectus within 48 hours.
                </p>
                <button
                  onClick={() => setIsEnquiryOpen(false)}
                  className="px-6 py-2 rounded bg-neutral-900 border border-neutral-700 text-white text-xs font-mono"
                >
                  Close Window
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
