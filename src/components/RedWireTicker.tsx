import React, { useState } from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export const RedWireTicker: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative z-20 w-full select-none">
      
      {/* 1. Official Red Circular Banner */}
      <div className="bg-[#E3000F] text-white py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="font-mono font-bold tracking-[0.12em] uppercase text-xs">
              LATEST CIRCULAR · 1 SEPTEMBER 2026
            </span>
          </div>

          <div className="flex-1 min-w-[280px] font-sans text-sm sm:text-base font-medium">
            Membership admission fee rises to ₹5 lakh + GST from 1 January 2027.
          </div>

          <a
            href="#vault"
            onClick={() => soundEngine.playSplitFlap()}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold tracking-[0.1em] uppercase hover:underline"
          >
            <span>Read the circular</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 2. Winning Clubs Monumental Outlined Ticker */}
      <div
        className="bg-[#FFFFFF] border-b border-[#E6DAD8] overflow-hidden py-4 sm:py-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex items-center whitespace-nowrap ${
            isPaused ? '' : 'animate-marquee'
          }`}
          style={{ width: 'max-content' }}
        >
          {[0, 1].map((copy) => (
            <div key={copy} className="disp flex items-center gap-12 pr-12 text-3xl sm:text-5xl lg:text-7xl font-normal">
              <span className="outline">Shlok Hockey Club</span>
              <span className="text-[#E3000F]">◆</span>
              <span className="outline">Zoza Sports Academy</span>
              <span className="text-[#E3000F]">◆</span>
              <span className="outline">Coorg Direwolves</span>
              <span className="text-[#E3000F]">◆</span>
              <span className="outline">Garuda Hockey Club</span>
              <span className="text-[#E3000F]">◆</span>
              <span className="outline">Rail Wheel Factory</span>
              <span className="text-[#E3000F]">◆</span>
              <span className="outline">Canara Bank SC</span>
              <span className="text-[#E3000F]">◆</span>
              <span className="outline">Army Service Corps</span>
              <span className="text-[#E3000F]">◆</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
