import React from 'react';
import { Shield, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export const FooterColophon: React.FC<{ lang: 'en' | 'kn' }> = ({ lang }) => {
  return (
    <footer className="relative bg-neutral-50 text-neutral-600 font-sans border-t border-neutral-200 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-200">
          
          {/* Brand & Crest Heritage */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ksha-red flex items-center justify-center border border-white/50 shadow-md shadow-ksha-red/30">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-cinzel font-black text-lg text-neutral-950 tracking-widest block">
                  KSHA BENGALURU
                </span>
                <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                  MYSORE STATE HOCKEY ASSOCIATION · ESTD. 1937
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-neutral-600 leading-relaxed max-w-sm">
              The sovereign apex governing body of field hockey in Karnataka and custodian of the historic 1937 Private Sports Club and Gentlemen&rsquo;s Pavilion at Akkithimmanahalli.
            </p>

            <div className="text-[11px] font-mono text-neutral-600 space-y-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-ksha-red shrink-0 mt-0.5" />
                <span>KSHA Hockey Stadium, Akkithimmanahalli, Langford Town, Shanti Nagar, Bengaluru – 560027</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-ksha-red shrink-0" />
                <span>+91 80 2222 5555 / +91 80 2227 8989</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-ksha-red shrink-0" />
                <span>secretariat@ksha.in · president@ksha.in</span>
              </div>
            </div>
          </div>

          {/* Quick Chapter Navigation */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <div className="font-cinzel font-bold text-neutral-950 text-sm tracking-wider uppercase mb-2">
              The Chapters
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#overture" onClick={() => soundEngine.playSplitFlap()} className="hover:text-ksha-red transition-colors">
                  ◆ Chapter 0: The House of Glory
                </a>
              </li>
              <li>
                <a href="#immortals" onClick={() => soundEngine.playSplitFlap()} className="hover:text-ksha-red transition-colors">
                  I. The Fifteen Immortals
                </a>
              </li>
              <li>
                <a href="#charters" onClick={() => soundEngine.playSplitFlap()} className="hover:text-ksha-red transition-colors">
                  II. The 1937 Constitutional Charters
                </a>
              </li>
              <li>
                <a href="#colosseum" onClick={() => soundEngine.playSplitFlap()} className="hover:text-ksha-red transition-colors">
                  III. Langford Town at 1,200 Lux
                </a>
              </li>
              <li>
                <a href="#battlegrounds" onClick={() => soundEngine.playSplitFlap()} className="hover:text-ksha-red transition-colors">
                  IV. The Super Division Battlegrounds
                </a>
              </li>
              <li>
                <a href="#cradles" onClick={() => soundEngine.playSplitFlap()} className="hover:text-ksha-red transition-colors">
                  V. The 18 Grassroots Cradles
                </a>
              </li>
              <li>
                <a href="#pavilion" onClick={() => soundEngine.playSplitFlap()} className="hover:text-ksha-red transition-colors">
                  VI. The Gentlemen&rsquo;s Pavilion (Private Club)
                </a>
              </li>
              <li>
                <a href="#vault" onClick={() => soundEngine.playSplitFlap()} className="hover:text-ksha-red transition-colors">
                  VII. The Imperial Vault & RTI
                </a>
              </li>
            </ul>
          </div>

          {/* Private Club Wing & Reciprocal Access */}
          <div className="lg:col-span-4 space-y-3 font-mono text-xs">
            <div className="font-cinzel font-bold text-neutral-950 text-sm tracking-wider uppercase mb-2">
              Private Club Sanctuary
            </div>
            <p className="text-neutral-600 text-xs font-sans leading-relaxed">
              KSHA Club features 8 Championship Billiards & Snooker Tables (Strachan 6811 Gold baize), 3 Maple Badminton Courts, Olympic Hydrotherapy Lap Pool, and Reciprocal Affiliations with Bowring Institute, Century Club, Madras Cricket Club, and Calcutta CC&FC.
            </p>
            <div className="p-3 rounded-lg bg-white border border-neutral-200 text-[11px] text-neutral-600 shadow-xs">
              <strong className="text-neutral-950 block mb-1">Club Hours</strong>
              Billiards & Badminton: 06:00 – 22:00 Daily<br />
              Olympian Lounge & Terrace: 11:00 – 23:00
            </div>
          </div>

        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © 1937–2026 Karnataka State Hockey Association (KSHA). All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-900 cursor-pointer">GIGW 3.0 Accessible</span>
            <span>·</span>
            <span className="hover:text-neutral-900 cursor-pointer">RTI Act Compliance</span>
            <span>·</span>
            <span className="hover:text-neutral-900 cursor-pointer">Mysore Societies Act 1937</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
