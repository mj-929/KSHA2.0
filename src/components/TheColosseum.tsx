import React, { useState, useRef } from 'react';
import { Maximize2, Compass, MapPin, Eye } from 'lucide-react';

interface TheColosseumProps {
  lang: 'en' | 'kn';
}

export interface TourArea {
  nodeId: string;
  en: string;
  kn: string;
  category: string;
}

export const TOUR_AREAS: TourArea[] = [
  { nodeId: 'node44', en: 'Hockey Stadium', kn: 'ಹಾಕಿ ಕ್ರೀಡಾಂಗಣ', category: 'Main Arena' },
  { nodeId: 'node41', en: "Bird's Eye View", kn: 'ಪಕ್ಷಿನೋಟ', category: 'Aerial' },
  { nodeId: 'node11', en: 'Entrance', kn: 'ಪ್ರವೇಶ ದ್ವಾರ', category: 'Grounds' },
  { nodeId: 'node10', en: 'Reception', kn: 'ಸ್ವಾಗತ ಕೊಠಡಿ', category: 'Clubhouse' },
  { nodeId: 'node16', en: 'Banquet & Party Halls', kn: 'ಔತಣ ಕೂಟದ ಸಭಾಂಗಣಗಳು', category: 'Events' },
  { nodeId: 'node24', en: 'Accommodation / Rooms', kn: 'ಅತಿಥಿ ಕೊಠಡಿಗಳು', category: 'Stay' },
  { nodeId: 'node4', en: 'Restaurants & Dining', kn: 'ಊಟದ ಕೊಠಡಿಗಳು', category: 'Dining' },
  { nodeId: 'node34', en: 'Sports Rehab Center', kn: 'ಕ್ರೀಡಾ ಪುನರ್ವಸತಿ ಕೇಂದ್ರ', category: 'Sports' },
  { nodeId: 'node1', en: 'Gymnasium', kn: 'ಜಿಮ್', category: 'Fitness' },
  { nodeId: 'node28', en: 'Indoor Games & Billiards', kn: 'ಒಳಾಂಗಣ ಕ್ರೀಡೆಗಳು', category: 'Recreation' },
];

export const TheColosseum: React.FC<TheColosseumProps> = ({ lang }) => {
  const [activeArea, setActiveArea] = useState<TourArea>(TOUR_AREAS[0]); // Default to Hockey Stadium
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <section id="colosseum" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E6DAD8] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBF8F7] border border-[#E6DAD8] text-[11px] font-mono tracking-[0.25em] text-[#E3000F] uppercase mb-4 font-bold shadow-xs">
            <Compass className="w-3.5 h-3.5" />
            <span>CHAPTER V · 360° IMMERSIVE PANORAMA</span>
          </div>

          <h2 className="disp text-4xl sm:text-6xl text-black tracking-tight mb-2">
            {lang === 'kn' ? '೩೬೦° ವರ್ಚುವಲ್ ಪ್ರವಾಸ' : 'STADIUM & CLUBHOUSE 360° TOUR'}
          </h2>

          <p
            lang="kn"
            className="font-kannada text-lg sm:text-xl font-bold text-[#E3000F] tracking-wide mb-3"
          >
            {lang === 'kn' ? 'ಕೆ.ಎಸ್.ಎಚ್.ಎ ಕ್ರೀಡಾಂಗಣ ಮತ್ತು ಕ್ಲಬ್ ಹೌಸ್ ನೈಜ ವೀಕ್ಷಣೆ' : 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಹಾಕಿ ಸಂಸ್ಥೆ · ಲ್ಯಾಂಗ್‌ಫೋರ್ಡ್ ಟೌನ್'}
          </p>

          <p className="whisper text-xl sm:text-2xl text-[#3B3330] leading-snug">
            {lang === 'kn'
              ? 'ಲ್ಯಾಂಗ್‌ಫೋರ್ಡ್ ಟೌನ್‌ನಲ್ಲಿರುವ ಕೆ.ಎಸ್.ಎಚ್.ಎ ಹಾಕಿ ಕ್ರೀಡಾಂಗಣ ಮತ್ತು ಕ್ಲಬ್ ಹೌಸ್‌ನ ನೈಜ ೩೬೦° ಛಾಯಾಚಿತ್ರಿತ ಪ್ರವಾಸ. ಯಾವುದೇ ಪ್ರದೇಶವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ನೇರವಾಗಿ ಅನ್ವೇಷಿಸಿ.'
              : 'A real, photographed 360° interactive walkthrough of the KSHA Hockey Stadium and Clubhouse at Langford Town. Select an area below to jump directly, or navigate hotspots inside the viewer.'}
          </p>
        </div>

        {/* Area Selection Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-800 uppercase tracking-wider">
              <Eye className="w-4 h-4 text-[#E3000F]" />
              <span>{lang === 'kn' ? 'ಪ್ರದೇಶವನ್ನು ಆಯ್ಕೆಮಾಡಿ (೧೦ ವಲಯಗಳು)' : 'Select Facility Zone (10 Areas)'}</span>
            </div>

            <div className="text-[11px] font-mono text-neutral-500 hidden sm:block">
              {lang === 'kn' ? 'ವೀಕ್ಷಿಸುತ್ತಿರುವುದು: ' : 'Now Viewing: '}
              <strong className="text-black font-semibold">
                {lang === 'kn' ? activeArea.kn : activeArea.en}
              </strong>
            </div>
          </div>

          {/* Scrollable / Wrap Area Pills */}
          <div className="flex flex-wrap gap-2">
            {TOUR_AREAS.map((area) => {
              const isSelected = activeArea.nodeId === area.nodeId;
              return (
                <button
                  key={area.nodeId}
                  onClick={() => setActiveArea(area)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 border ${
                    isSelected
                      ? 'bg-[#E3000F] text-white border-[#E3000F] font-bold shadow-sm'
                      : 'bg-[#FBF8F7] text-neutral-800 border-[#E6DAD8] hover:border-black hover:text-black font-medium'
                  }`}
                  aria-pressed={isSelected}
                >
                  <MapPin className={`w-3 h-3 ${isSelected ? 'text-white' : 'text-[#E3000F]'}`} />
                  <span>{lang === 'kn' ? area.kn : area.en}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 360 Viewer Frame Container */}
        <div
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden bg-black border border-[#E6DAD8] shadow-2xl"
        >
          {/* Top Viewer Control Strip */}
          <div className="bg-neutral-900 text-white px-4 sm:px-6 py-3 flex items-center justify-between border-b border-neutral-800">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-neutral-400 uppercase">{lang === 'kn' ? 'ಸಕ್ರಿಯ ವೀಕ್ಷಣೆ:' : 'ACTIVE SCENE:'}</span>
                <span className="font-bold text-white tracking-wide">
                  {lang === 'kn' ? activeArea.kn : activeArea.en}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 uppercase hidden sm:inline-block">
                  {activeArea.category}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleFullscreen}
                className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-mono flex items-center gap-1.5 transition-colors border border-white/20"
                title="Toggle Fullscreen"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{lang === 'kn' ? 'ಪೂರ್ಣ ಪರದೆ' : 'Fullscreen'}</span>
              </button>
            </div>
          </div>

          {/* The Pano2VR 360 Iframe */}
          <div className="relative w-full h-[520px] sm:h-[620px] lg:h-[700px] bg-black">
            <iframe
              key={activeArea.nodeId}
              title={`KSHA 360 Tour - ${activeArea.en}`}
              src={`/virtual-tour/index.html#${activeArea.nodeId}`}
              className="w-full h-full border-0 block"
              allow="fullscreen; accelerometer; gyroscope; xr-spatial-tracking"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Bottom Helpful Navigation Guide */}
          <div className="bg-[#FBF8F7] px-4 sm:px-6 py-3 border-t border-[#E6DAD8] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#5C5350]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3000F]" />
              <span>
                {lang === 'kn'
                  ? 'ವೀಕ್ಷಣೆಯನ್ನು ತಿರುಗಿಸಲು ಮೌಸ್ ಅಥವಾ ಬೆರಳಿನಿಂದ ಎಳೆಯಿರಿ. ಮುಂದಿನ ಸ್ಥಳಗಳಿಗೆ ಹೋಗಲು ಹಾಟ್‌ಸ್ಪಾಟ್‌ಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.'
                  : 'Click & drag inside the viewer to look around 360°. Click on screen hotspots to move between rooms.'}
              </span>
            </div>
            <div className="text-[11px] text-neutral-500">
              Pano2VR 360° Engine · KSHA Langford Town
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
