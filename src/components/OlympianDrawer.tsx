import React, { useEffect, useState, useRef } from 'react';
import { Olympian } from '../data/kshaData';
import { X, Award, Medal, Trophy, Share2, Copy, Check, Volume2, Play, Pause, MapPin } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface OlympianDrawerProps {
  athlete: Olympian | null;
  onClose: () => void;
  lang: 'en' | 'kn';
}

export const OlympianDrawer: React.FC<OlympianDrawerProps> = ({ athlete, onClose, lang }) => {
  const [copied, setCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (athlete) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [athlete, onClose]);

  // Audio simulation timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlayingAudio) {
      timer = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 10;
        });
      }, 400);
    }
    return () => clearInterval(timer);
  }, [isPlayingAudio]);

  useEffect(() => {
    setIsPlayingAudio(false);
    setAudioProgress(0);
    setCopied(false);
  }, [athlete]);

  if (!athlete) return null;

  const handleCopyCitation = () => {
    const citation = `${athlete.name} (${athlete.kannadaName}) · ${athlete.games} · ${athlete.position}. "${athlete.myth}" — Official KSHA Roll of Honour.`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    soundEngine.playSplitFlap();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleToggleAudio = () => {
    if (!isPlayingAudio) {
      soundEngine.playGoalRoar();
      setIsPlayingAudio(true);
      setAudioProgress(0);
    } else {
      setIsPlayingAudio(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100000] flex justify-end bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-athlete-title"
    >
      <div
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg h-full bg-white shadow-2xl flex flex-col overflow-y-auto border-l border-neutral-200 transform transition-transform duration-300 ease-out animate-slideInRight"
      >
        {/* Dark Hero Header */}
        <div className="bg-[#0A0A0A] text-white p-6 sm:p-7 relative border-b border-neutral-800">
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close dossier"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#E3000F] font-bold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>KSHA ROLL OF HONOUR · ANNEXURE 1</span>
          </div>

          <div className="flex items-start gap-4">
            {/* Athlete avatar / portrait */}
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#E3000F] shadow-lg bg-neutral-900 flex-shrink-0 flex items-center justify-center">
              {athlete.image ? (
                <img
                  src={athlete.image}
                  alt={athlete.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <span className="font-cinzel text-xl font-bold text-amber-400">
                  {athlete.name.charAt(0)}
                </span>
              )}
            </div>

            <div className="flex-1 pr-6">
              <h2 id="drawer-athlete-title" className="disp text-3xl sm:text-4xl text-white leading-tight">
                {athlete.name}
              </h2>
              <p className="font-kannada text-sm font-bold text-neutral-400 mt-0.5">
                {athlete.kannadaName}
              </p>
              <div className="inline-block mt-2 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-[#E3000F]/20 text-[#FF4D4D] border border-[#E3000F]/40">
                {athlete.designation || 'Olympic Legend'}
              </div>
            </div>
          </div>
        </div>

        {/* Drawer Body */}
        <div className="p-6 space-y-6 flex-1">
          {/* Full Portrait Card if image exists */}
          {athlete.image && (
            <div className="relative rounded-2xl overflow-hidden h-64 border border-neutral-200 shadow-md bg-neutral-950 group">
              <img
                src={athlete.image}
                alt={`${athlete.name} in action`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-4">
                <div className="text-white text-xs font-mono">
                  <span className="text-amber-400 font-bold block">{athlete.games}</span>
                  <span className="text-neutral-300">{athlete.position} · {athlete.district}</span>
                </div>
              </div>
            </div>
          )}

          {/* Audio Synthesizer / Audio Tribute */}
          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-800">
                <Volume2 className="w-4 h-4 text-[#E3000F]" />
                <span>ARCHIVAL STADIUM TRIBUTE</span>
              </div>
              <span className="text-[10px] font-mono text-neutral-500">
                {isPlayingAudio ? `${audioProgress}%` : 'READY'}
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden mb-3">
              <div
                className="bg-[#E3000F] h-full transition-all duration-300"
                style={{ width: `${audioProgress}%` }}
              />
            </div>

            <button
              onClick={handleToggleAudio}
              className="w-full py-2 px-3 rounded-lg bg-white border border-neutral-300 hover:border-black text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              {isPlayingAudio ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#E3000F]" />
                  <span>PAUSE TRIBUTE</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#E3000F] fill-current" />
                  <span>PLAY AUDIO FANFARE</span>
                </>
              )}
            </button>
          </div>

          {/* Key Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-[#FBF8F7] border border-[#E6DAD8]">
              <span className="text-neutral-500 uppercase block text-[10px]">Position</span>
              <span className="font-bold text-black text-sm mt-0.5 block">{athlete.position}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FBF8F7] border border-[#E6DAD8]">
              <span className="text-neutral-500 uppercase block text-[10px]">District Cradle</span>
              <span className="font-bold text-black text-sm mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#E3000F]" />
                {athlete.district}
              </span>
            </div>
          </div>

          {/* Historical Myth & Citation */}
          <div className="p-5 rounded-2xl bg-[#FBF8F7] border border-[#E6DAD8] space-y-2">
            <span className="text-[11px] font-mono text-[#E3000F] uppercase tracking-wider font-bold block">
              Official Citation & Lore
            </span>
            <p className="whisper text-xl text-neutral-900 leading-relaxed">
              &ldquo;{athlete.myth}&rdquo;
            </p>
          </div>

          {/* Official Career Record & Awards */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold block">
              Career Honors & Milestones
            </span>
            <div className="p-4 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-800 leading-relaxed font-sans shadow-sm">
              {athlete.record}
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {athlete.awards.map((aw, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-mono font-semibold"
                >
                  <Trophy className="w-3 h-3 text-amber-600" />
                  {aw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Action Footer */}
        <div className="p-4 sm:p-5 border-t border-neutral-200 bg-white flex items-center gap-3">
          <button
            onClick={handleCopyCitation}
            className="flex-1 py-2.5 px-4 rounded-xl bg-black text-white text-xs font-mono uppercase tracking-wider font-bold flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors shadow-md"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>CITATION COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>COPY CITATION</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="py-2.5 px-5 rounded-xl border border-neutral-300 hover:border-black text-xs font-mono uppercase tracking-wider font-bold text-neutral-700 transition-colors"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
