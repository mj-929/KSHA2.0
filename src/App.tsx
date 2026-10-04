import React, { useState } from 'react';
import { HeaderHUD } from './components/HeaderHUD';
import { NavigationRail } from './components/NavigationRail';
import { RedWireTicker } from './components/RedWireTicker';
import { SplitFlapCounters } from './components/SplitFlapCounters';
import { HeroOverture } from './components/HeroOverture';
import { The15Immortals } from './components/The15Immortals';
import { SacredCharters } from './components/SacredCharters';
import { TheColosseum } from './components/TheColosseum';
import { TheBattlegrounds } from './components/TheBattlegrounds';
import { The18Cradles } from './components/The18Cradles';
import { GentlemensPavilion } from './components/GentlemensPavilion';
import { ImperialVault } from './components/ImperialVault';
import { FooterColophon } from './components/FooterColophon';
import { CommandPalette } from './components/CommandPalette';

export function App() {
  const [lang, setLang] = useState<'en' | 'kn'>('en');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ksha-void text-white film-grain selection:bg-ksha-red selection:text-white">
      {/* Top Floating Glass HUD */}
      <HeaderHUD
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        lang={lang}
        setLang={setLang}
      />

      {/* Side Roman Numeral Chapter Rail */}
      <NavigationRail lang={lang} />

      {/* Main Cinematic Scroll Spine */}
      <main>
        {/* Chapter 0 · Overture: The House of Glory & 3D Crest Stage */}
        <HeroOverture lang={lang} />

        {/* The Red Wire Emergency Gazette Ticker */}
        <RedWireTicker />

        {/* The Numbers of Eternity (Split-Flap Scoreboard Reels) */}
        <SplitFlapCounters lang={lang} />

        {/* Chapter I · The 15 Immortals */}
        <The15Immortals lang={lang} />

        {/* Chapter II · The Sacred Charters (1937 Genesis) */}
        <SacredCharters lang={lang} />

        {/* Chapter III · The Colosseum (Langford Town at 1,200 Lux) */}
        <TheColosseum lang={lang} />

        {/* Chapter IV · The Battlegrounds (The Leagues & Cups) */}
        <TheBattlegrounds lang={lang} />

        {/* Chapter V · The 18 Cradles (Districts of Karnataka) */}
        <The18Cradles lang={lang} />

        {/* Chapter VI · The Gentlemen's Pavilion (Private Club Heritage) */}
        <GentlemensPavilion lang={lang} />

        {/* Chapter VII · The Imperial Vault (Governance & RTI) */}
        <ImperialVault lang={lang} />
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
