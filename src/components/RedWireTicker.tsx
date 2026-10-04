import React, { useState } from 'react';
import { Radio, AlertCircle } from 'lucide-react';
import { RED_WIRE_NEWS } from '../data/kshaData';
import { soundEngine } from '../utils/audio';

export const RedWireTicker: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="relative z-30 w-full bg-gradient-to-r from-ksha-red via-[#B91C1C] to-ksha-red text-white py-2 px-4 shadow-[0_4px_25px_rgba(225,6,0,0.35)] border-y border-red-500/40 select-none overflow-hidden"
      onMouseEnter={() => {
        setIsPaused(true);
        soundEngine.playSplitFlap();
      }}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        
        {/* Urgent Gazette Badge */}
        <div className="flex items-center gap-2 bg-black/40 px-2.5 py-1 rounded text-[10px] font-mono tracking-widest uppercase font-bold shrink-0 border border-white/20">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-white">THE RED WIRE</span>
          <span className="text-white/60 hidden sm:inline">· GAZETTE</span>
        </div>

        {/* Marquee Headline Track */}
        <div className="relative overflow-hidden w-full h-5 flex items-center">
          <div
            className={`flex items-center gap-12 whitespace-nowrap text-xs font-mono font-medium tracking-wide ${
              isPaused ? '' : 'animate-marquee'
            }`}
          >
            {[...RED_WIRE_NEWS, ...RED_WIRE_NEWS].map((news, idx) => (
              <span key={idx} className="flex items-center gap-3">
                <span className="text-amber-300">⚡</span>
                <span className="hover:underline cursor-pointer">{news}</span>
                <span className="text-white/40">✦</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
