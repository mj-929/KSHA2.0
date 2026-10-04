import React, { useState, useEffect } from 'react';
import { Sun, Moon, Compass, Wind, Droplets, Thermometer, Eye, Zap, MapPin } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface TheColosseumProps {
  lang: 'en' | 'kn';
}

interface WeatherTelemetry {
  temp: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  updatedAt: string;
}

export const TheColosseum: React.FC<TheColosseumProps> = ({ lang }) => {
  const [luxLevel, setLuxLevel] = useState<number>(1200); // 0 to 1200 Lux
  const [activeTab, setActiveTab] = useState<'pitch' | 'spectator' | 'turf-spec'>('pitch');
  const [weather, setWeather] = useState<WeatherTelemetry>({
    temp: 24.5,
    humidity: 62,
    windSpeed: 11.2,
    condition: 'Optimal Turf Conditions',
    updatedAt: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
  });

  // Fetch real-time weather from Open-Meteo for Bengaluru (Lat 12.9619, Lon 77.6033)
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=12.9619&longitude=77.6033&current=temperature_2m,relative_humidity_2m,wind_speed_10m'
        );
        if (res.ok) {
          const data = await res.json();
          if (data.current) {
            setWeather({
              temp: data.current.temperature_2m,
              humidity: data.current.relative_humidity_2m,
              windSpeed: data.current.wind_speed_10m,
              condition: 'Live Langford Town Telemetry',
              updatedAt: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
            });
          }
        }
      } catch {
        // Fallback already pre-populated
      }
    };

    fetchWeather();
  }, []);

  const handleLuxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setLuxLevel(val);
    if (val % 200 === 0) {
      soundEngine.playSplitFlap();
    }
  };

  // Compute lighting styles based on lux level slider
  const floodlightOpacity = luxLevel / 1200;
  const isNightMatch = luxLevel > 600;

  return (
    <section id="colosseum" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-neutral-200 overflow-hidden">
      
      {/* Floodlight Glow Simulation Overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse at 50% 15%, rgba(225, 6, 0, ${floodlightOpacity * 0.08}) 0%, transparent 85%)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-[10px] font-mono tracking-[0.25em] text-ksha-red uppercase mb-4 font-bold">
            <Zap className="w-3.5 h-3.5" />
            CHAPTER III · THE ARENA
          </div>

          <h2 className="font-cinzel font-black text-4xl sm:text-6xl text-neutral-950 tracking-tight mb-4">
            {lang === 'kn' ? 'ಲ್ಯಾಂಗ್‌ಫೋರ್ಡ್ ಟೌನ್ · ೧೨೦೦ ಲಕ್ಸ್' : 'Langford Town at 1,200 Lux'}
          </h2>

          <p className="font-editorial italic text-xl sm:text-2xl text-neutral-700 font-normal">
            &ldquo;100 yards of blue turf. 1,200 lux floodlights. Where Bangalore gathers to witness champions.&rdquo;
          </p>
        </div>

        {/* Telemetry HUD Card */}
        <div className="mb-12 p-6 rounded-2xl bg-neutral-50 border border-neutral-300 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-4 mb-6">
            
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-turf-green animate-pulse" />
              <span className="font-mono text-xs font-bold text-neutral-950 uppercase tracking-wider">
                LIVE METEOROLOGICAL TELEMETRY
              </span>
              <span className="text-[10px] font-mono text-neutral-600">
                · LAT 12.9619° N, LON 77.6033° E (AKKITHIMMANAHALLI)
              </span>
            </div>

            <div className="text-xs font-mono text-neutral-600">
              STAMP: <span className="text-neutral-950 font-bold">{weather.updatedAt} IST</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center gap-3">
              <Thermometer className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <div className="text-[10px] font-mono uppercase text-neutral-500 font-bold">TEMPERATURE</div>
                <div className="text-xl font-mono font-bold text-neutral-950">{weather.temp}°C</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center gap-3">
              <Droplets className="w-5 h-5 text-blue-500 shrink-0" />
              <div>
                <div className="text-[10px] font-mono uppercase text-neutral-500 font-bold">TURF MOISTURE</div>
                <div className="text-xl font-mono font-bold text-neutral-950">{weather.humidity}% RH</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center gap-3">
              <Wind className="w-5 h-5 text-teal-600 shrink-0" />
              <div>
                <div className="text-[10px] font-mono uppercase text-neutral-500 font-bold">WIND VELOCITY</div>
                <div className="text-xl font-mono font-bold text-neutral-950">{weather.windSpeed} km/h</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center gap-3">
              <Zap className="w-5 h-5 text-ksha-red shrink-0" />
              <div>
                <div className="text-[10px] font-mono uppercase text-neutral-500 font-bold">FLOODLIGHT ILLUM</div>
                <div className="text-xl font-mono font-bold text-ksha-red">{luxLevel} LUX</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Lighting Slider Controls */}
        <div className="mb-10 p-6 rounded-2xl bg-neutral-50 border border-neutral-300 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <Sun className={`w-6 h-6 transition-colors ${luxLevel < 400 ? 'text-amber-500' : 'text-neutral-400'}`} />
            <div>
              <div className="font-cinzel font-bold text-sm text-neutral-950">Interactive Lighting Intensity Controller</div>
              <div className="text-xs font-mono text-neutral-600">
                Dial between natural morning sunlight (0 Lux) and full broadcast illumination (1,200 Lux)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-80">
            <span className="font-mono text-xs text-neutral-600 font-bold">0L</span>
            <input
              type="range"
              min="0"
              max="1200"
              step="50"
              value={luxLevel}
              onChange={handleLuxChange}
              className="w-full accent-ksha-red cursor-pointer"
            />
            <span className="font-mono text-xs text-ksha-red font-bold">1200L</span>
            <Moon className={`w-6 h-6 transition-colors ${luxLevel > 800 ? 'text-blue-600' : 'text-neutral-400'}`} />
          </div>
        </div>

        {/* Stadium Colosseum Stage Viewport */}
        <div className="relative rounded-2xl overflow-hidden border border-neutral-300 shadow-2xl bg-[#091E36]">
          
          {/* Pitch Visualization */}
          <div
            className="relative h-96 sm:h-[480px] w-full flex items-center justify-center p-8 transition-colors duration-500"
            style={{
              backgroundColor: isNightMatch ? '#091E36' : '#143C65',
              boxShadow: `inset 0 0 ${luxLevel / 10}px rgba(255, 255, 255, ${floodlightOpacity * 0.4})`,
            }}
          >
            {/* Field Lines (FIH Standard 91.4m x 55m) */}
            <div className="relative w-full max-w-4xl h-full border-2 border-white/60 rounded-sm flex items-center justify-center">
              {/* Half-way line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/60" />
              {/* Center Circle */}
              <div className="w-28 h-28 rounded-full border-2 border-white/60 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white shadow-lg shadow-white" />
              </div>
              {/* 23m Lines */}
              <div className="absolute left-[25%] top-0 bottom-0 w-0.5 border-r border-dashed border-white/40" />
              <div className="absolute right-[25%] top-0 bottom-0 w-0.5 border-r border-dashed border-white/40" />
              {/* Left Striking Circle (D) */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-28 h-44 border-r-2 border-y-2 border-white/60 rounded-r-full" />
              {/* Right Striking Circle (D) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-28 h-44 border-l-2 border-y-2 border-white/60 rounded-l-full" />

              {/* Pitch Info Overlay Badge */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/20 text-xs font-mono">
                <div className="text-white font-bold">KSHA STADIUM MAIN ARENA</div>
                <div className="text-[10px] text-neutral-300">FIH Certified Category 1 Synthetic Water-Based Turf</div>
              </div>

              {/* Floodlight Beam Cones */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                  opacity: floodlightOpacity,
                  background: 'radial-gradient(circle at 10% 10%, rgba(255,255,255,0.2) 0%, transparent 60%), radial-gradient(circle at 90% 10%, rgba(255,255,255,0.2) 0%, transparent 60%)',
                }}
              />
            </div>
          </div>

          {/* Stadium Specs Strip */}
          <div className="bg-white p-6 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-[10px] font-mono text-neutral-500 uppercase font-bold">CAPACITY</div>
              <div className="font-cinzel text-lg font-bold text-neutral-950">7,000 Spectators</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-neutral-500 uppercase font-bold">TURF SURFACE</div>
              <div className="font-cinzel text-lg font-bold text-turf-green">Poligras Water-Based</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-neutral-500 uppercase font-bold">LIGHTING ARRAY</div>
              <div className="font-cinzel text-lg font-bold text-amber-600">1,200 Lux Musco LED</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-neutral-500 uppercase font-bold">LOCATION</div>
              <div className="font-cinzel text-lg font-bold text-neutral-950">Langford Town, BLR</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
