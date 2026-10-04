import React, { useState } from 'react';
import { HeaderHUD } from './components/HeaderHUD';
import { NavigationRail } from './components/NavigationRail';
import { HeroOverture } from './components/HeroOverture';
import { RedWireTicker } from './components/RedWireTicker';
import { SplitFlapCounters } from './components/SplitFlapCounters';
import { TheTravancoreCup } from './components/TheTravancoreCup';
import { TheBattlegrounds } from './components/TheBattlegrounds';
import { The18Cradles } from './components/The18Cradles';
import { The15Immortals } from './components/The15Immortals';
import { TheColosseum } from './components/TheColosseum';
import { GentlemensPavilion } from './components/GentlemensPavilion';
import { BookingFacilitiesSection } from './components/BookingFacilitiesSection';
import { ImperialVault } from './components/ImperialVault';
import { DataProvenanceAppendix } from './components/DataProvenanceAppendix';
import { FinalePitchIsOpen } from './components/FinalePitchIsOpen';
import { FooterColophon } from './components/FooterColophon';
import { CommandPalette } from './components/CommandPalette';

export function App() {
  const [lang, setLang] = useState<'en' | 'kn'>('en');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isMotionPaused, setIsMotionPaused] = useState(false);
  const [textSize, setTextSize] = useState<'sm' | 'md' | 'lg'>('md');

  // Font size scale class
  const textSizeClass =
    textSize === 'sm' ? 'text-[14px]' : textSize === 'lg' ? 'text-[18px]' : 'text-[16px]';

  return (
    <div
      className={`min-h-screen bg-[#FFFFFF] text-[#0A0A0A] font-sans selection:bg-[#E3000F] selection:text-white ${textSizeClass} ${
        isMotionPaused ? 'motion-reduce' : ''
      }`}
    >
      {/* Top Floating Utility HUD with Accessibility & Official Crest */}
      <HeaderHUD
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        lang={lang}
        setLang={setLang}
        isMotionPaused={isMotionPaused}
        setIsMotionPaused={setIsMotionPaused}
        textSize={textSize}
        setTextSize={setTextSize}
      />

      {/* Side Roman Numeral Chapter Rail */}
      <NavigationRail lang={lang} />

      {/* Main Cinematic Scroll Spine */}
      <main id="top">
        {/* Chapter 0 · Overture: Monumental Hero with Flying 3D Background Particles */}
        <HeroOverture lang={lang} isMotionPaused={isMotionPaused} />

        {/* Official Circular Alert & Winning Clubs Outlined Ticker */}
        <RedWireTicker />

        {/* The Numbers of Eternity (Split-Flap Scoreboard Reels) */}
        <SplitFlapCounters lang={lang} />

        {/* Chapter I · The Travancore Cup (94th Edition Monumental Feature) */}
        <TheTravancoreCup lang={lang} />

        {/* Chapter II · The League (Interactive Division Switcher & Standings) */}
        <TheBattlegrounds lang={lang} />

        {/* Chapter III · The Heirs (Grassroots Academy & 18 District Units) */}
        <The18Cradles lang={lang} />

        {/* Chapter IV · The Legends (R.V. Raghu Prasad, Honored Legends & 15 Olympians) */}
        <The15Immortals lang={lang} />

        {/* Chapter V · The Colosseum (Langford Town Stadium at 1,200 Lux) */}
        <TheColosseum lang={lang} />

        {/* Chapter VI · The Club (Mini Sports Complex, Billiards, 168 Reciprocal Clubs) */}
        <GentlemensPavilion lang={lang} />

        {/* Facility Booking · Party Halls & Guest Rooms (Official 2026/2023 EC Tariffs) */}
        <BookingFacilitiesSection lang={lang} />

        {/* Chapter VII · The Roll Call & Statutory Imperial Vault (Census & RTI) */}
        <ImperialVault lang={lang} />

        {/* Official Appendix · Full Data Provenance & Source Document Register */}
        <DataProvenanceAppendix lang={lang} />

        {/* Finale · The Pitch Is Open */}
        <FinalePitchIsOpen lang={lang} />
      </main>

      {/* Colophon & Statutory Disclosures */}
      <FooterColophon lang={lang} />

      {/* Spotlight Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </div>
  );
}

export default App;
