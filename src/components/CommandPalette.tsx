import React, { useState, useEffect } from 'react';
import { Search, Trophy, Medal, Castle, MapPin, Scale, X, ArrowRight } from 'lucide-react';
import { OLYMPIANS_DATA, DISTRICT_CRADLES, CLUB_FACILITIES } from '../data/kshaData';
import { soundEngine } from '../utils/audio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  // Handle ESC and ⌘K shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        soundEngine.playSplitFlap();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase();

  const matchingOlympians = OLYMPIANS_DATA.filter(o =>
    o.name.toLowerCase().includes(q) ||
    o.games.toLowerCase().includes(q) ||
    o.district.toLowerCase().includes(q) ||
    o.position.toLowerCase().includes(q)
  );

  const matchingDistricts = DISTRICT_CRADLES.filter(d =>
    d.name.toLowerCase().includes(q) ||
    d.headquarters.toLowerCase().includes(q) ||
    d.zone.toLowerCase().includes(q)
  );

  const matchingFacilities = CLUB_FACILITIES.filter(f =>
    f.title.toLowerCase().includes(q) ||
    f.highlight.toLowerCase().includes(q) ||
    f.category.toLowerCase().includes(q)
  );

  const navigateTo = (anchor: string) => {
    soundEngine.playStickStrike();
    onClose();
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-neutral-200 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-neutral-200 bg-neutral-50/80">
          <Search className="w-5 h-5 text-ksha-red mr-3 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Olympians, 1937 Club House, 18 Districts, Super Division..."
            className="w-full bg-transparent text-neutral-900 font-mono text-sm placeholder-neutral-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded bg-neutral-200 text-neutral-600 hover:text-neutral-950 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-6">
          
          {/* Olympians Results */}
          {matchingOlympians.length > 0 && (
            <div>
              <div className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 mb-2 px-2 flex items-center gap-1.5 font-bold">
                <Medal className="w-3.5 h-3.5 text-ksha-red" />
                <span>Olympians ({matchingOlympians.length})</span>
              </div>
              <div className="space-y-1">
                {matchingOlympians.slice(0, 5).map((olymp) => (
                  <div
                    key={olymp.id}
                    onClick={() => navigateTo('immortals')}
                    className="p-2.5 rounded-lg hover:bg-neutral-100 cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-cinzel font-bold text-sm text-neutral-900 group-hover:text-ksha-red transition-colors">
                        {olymp.name}
                      </div>
                      <div className="text-xs font-mono text-neutral-500">
                        {olymp.games} · {olymp.position}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Club Facilities Results */}
          {matchingFacilities.length > 0 && (
            <div>
              <div className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 mb-2 px-2 flex items-center gap-1.5 font-bold">
                <Castle className="w-3.5 h-3.5 text-amber-600" />
                <span>Private Club Wing & Amenities</span>
              </div>
              <div className="space-y-1">
                {matchingFacilities.map((fac) => (
                  <div
                    key={fac.id}
                    onClick={() => navigateTo('pavilion')}
                    className="p-2.5 rounded-lg hover:bg-neutral-100 cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-cinzel font-bold text-sm text-neutral-900 group-hover:text-amber-600 transition-colors">
                        {fac.title}
                      </div>
                      <div className="text-xs font-mono text-neutral-500">
                        {fac.highlight}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* District Cradles Results */}
          {matchingDistricts.length > 0 && (
            <div>
              <div className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 mb-2 px-2 flex items-center gap-1.5 font-bold">
                <MapPin className="w-3.5 h-3.5 text-turf-green" />
                <span>District Units ({matchingDistricts.length})</span>
              </div>
              <div className="space-y-1">
                {matchingDistricts.slice(0, 4).map((dist) => (
                  <div
                    key={dist.id}
                    onClick={() => navigateTo('cradles')}
                    className="p-2.5 rounded-lg hover:bg-neutral-100 cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-cinzel font-bold text-sm text-neutral-900 group-hover:text-turf-green transition-colors">
                        {dist.name}
                      </div>
                      <div className="text-xs font-mono text-neutral-500">
                        HQ: {dist.headquarters} · {dist.zone}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {matchingOlympians.length === 0 && matchingFacilities.length === 0 && matchingDistricts.length === 0 && (
            <div className="text-center py-10 font-mono text-xs text-neutral-500">
              No matching records found in the Grand Directory for &ldquo;{query}&rdquo;
            </div>
          )}

        </div>

        {/* Footer shortcuts */}
        <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span>Use ESC to close</span>
          <span>Karnataka State Hockey Association 1937 Registry</span>
        </div>

      </div>
    </div>
  );
};
