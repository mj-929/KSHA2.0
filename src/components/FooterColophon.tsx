import React from 'react';
import { soundEngine } from '../utils/audio';

export const FooterColophon: React.FC<{ lang: 'en' | 'kn' }> = ({ lang }) => {
  return (
    <footer id="contact" className="bg-[#FFFFFF] border-t border-[#E6DAD8] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E6DAD8]">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/ksha-crest.png"
                alt="KSHA Official Seal"
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="disp text-3xl text-[#E3000F] leading-tight">
                  Karnataka State<br />Hockey Association
                </p>
              </div>
            </div>

            <p className="text-sm text-[#3B3330] leading-relaxed">
              KSHA Hockey Stadium, Rhenius Street,<br />
              Langford Town, Bengaluru – 560 025
            </p>

            <div className="text-xs text-[#3B3330] space-y-1 font-mono">
              <div>
                <a href="mailto:karnatakastatehockey@gmail.com" className="hover:text-[#E3000F] transition-colors">
                  karnatakastatehockey@gmail.com
                </a>
              </div>
              <div>Office / WhatsApp: +91 78992 36355</div>
              <div>Hon. Secretary: +91 98452 78847</div>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <h3 className="chap mb-2 text-[#E3000F]">Explore</h3>
            <ul className="space-y-2 text-[#3B3330]">
              <li>
                <a href="#cup" onClick={() => soundEngine.playSplitFlap()} className="hover:text-[#E3000F] transition-colors">
                  The Travancore Cup
                </a>
              </li>
              <li>
                <a href="#battlegrounds" onClick={() => soundEngine.playSplitFlap()} className="hover:text-[#E3000F] transition-colors">
                  The Four League Divisions
                </a>
              </li>
              <li>
                <a href="#cradles" onClick={() => soundEngine.playSplitFlap()} className="hover:text-[#E3000F] transition-colors">
                  The Grassroots Academy
                </a>
              </li>
              <li>
                <a href="#immortals" onClick={() => soundEngine.playSplitFlap()} className="hover:text-[#E3000F] transition-colors">
                  The 15 Olympians & Legends
                </a>
              </li>
              <li>
                <a href="#colosseum" onClick={() => soundEngine.playSplitFlap()} className="hover:text-[#E3000F] transition-colors">
                  Langford Town Stadium (1,200 Lux)
                </a>
              </li>
              <li>
                <a href="#pavilion" onClick={() => soundEngine.playGloryChime()} className="hover:text-[#E3000F] transition-colors">
                  Private Clubhouse & Billiards
                </a>
              </li>
            </ul>
          </div>

          {/* Site & Statutory */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <h3 className="chap mb-2 text-[#E3000F]">Site & Gazette</h3>
            <ul className="space-y-2 text-[#3B3330]">
              <li>
                <a href="#vault" onClick={() => soundEngine.playSplitFlap()} className="hover:text-[#E3000F] transition-colors">
                  61 Member Clubs
                </a>
              </li>
              <li>
                <a href="#vault" onClick={() => soundEngine.playSplitFlap()} className="hover:text-[#E3000F] transition-colors">
                  Audited Balance Sheets
                </a>
              </li>
              <li>
                <a href="#vault" onClick={() => soundEngine.playSplitFlap()} className="hover:text-[#E3000F] transition-colors">
                  RTI Act Disclosures
                </a>
              </li>
              <li>
                <span className="text-[#5C5350]">GIGW 3.0 Accessible</span>
              </li>
            </ul>
          </div>

          {/* Club Operating Hours */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <h3 className="chap mb-2 text-[#E3000F]">Club Hours</h3>
            <div className="p-4 rounded-xl bg-[#FBF8F7] border border-[#E6DAD8] space-y-2">
              <div className="font-semibold text-black">Member & Dining Enclave</div>
              <p className="text-[#3B3330] leading-relaxed">
                11:30 AM – 3:30 PM (Lunch)<br />
                6:30 PM – 11:00 PM (Dinner & Terrace)
              </p>
              <div className="font-semibold text-black pt-2 border-t border-[#E6DAD8]">Sports Facilities</div>
              <p className="text-[#3B3330]">
                06:00 AM – 10:00 PM Daily
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5C5350]">
          <div>
            © 1937–2026 Karnataka State Hockey Association (Regd.). A private society; not a government body.
          </div>
          <div className="flex items-center gap-4">
            <span>Regd. No. 129/1937-38</span>
            <span>·</span>
            <span>Mysore Societies Act</span>
            <span>·</span>
            <span>All Rights Reserved</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
