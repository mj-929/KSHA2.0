import React, { useState } from 'react';
import { 
  Building2, 
  Bed, 
  Phone, 
  Clock, 
  Users, 
  ArrowUpRight,
  Shield,
  FileSpreadsheet,
  CheckCircle2,
  Calendar,
  X,
  Send
} from 'lucide-react';

interface HallSpace {
  id: string;
  name: string;
  name_kn: string;
  floor: string;
  capacity: string;
  purpose: string;
  startingPrice: number;
  tiers: {
    label: string;
    capacity: string;
    base: number;
    gst: number;
    cleaning: number;
    total: number;
    note?: string;
  }[];
}

interface RoomSpace {
  id: string;
  name: string;
  name_kn: string;
  type: string;
  baseRent: number;
  cgst: number;
  sgst: number;
  total: number;
  features: string[];
}

export const HALL_SPACES: HallSpace[] = [
  {
    id: 'green-halls',
    name: 'Green Party Halls',
    name_kn: 'ಹಸಿರು ಪಾರ್ಟಿ ಹಾಲ್ (೧ ಮತ್ತು ೨)',
    floor: 'Ground Level / Lawn',
    capacity: '20 – 40 Guests',
    purpose: 'Intimate family celebrations, committee meetings, and team luncheons opening directly into the verdant club lawns.',
    startingPrice: 2360,
    tiers: [
      {
        label: 'Single Hall (Hall 1 or Hall 2)',
        capacity: '20 Pax',
        base: 2000,
        gst: 360,
        cleaning: 0,
        total: 2360,
        note: 'Ideal for small private dinners & family gatherings'
      },
      {
        label: 'Combined Halls (Hall 1 & 2 Joint)',
        capacity: '40 Pax',
        base: 3000,
        gst: 570,
        cleaning: 0,
        total: 3570,
        note: 'Double hall setup with expansive lawn access'
      }
    ]
  },
  {
    id: 'ground-floor-ac',
    name: 'Ground Floor A/C Party Hall',
    name_kn: 'ನೆಲ ಮಹಡಿ ಹವಾನಿಯಂತ್ರಿತ ಸಭಾಂಗಣ',
    floor: 'Ground Floor',
    capacity: '50 Guests',
    purpose: 'Fully climate-controlled banqueting hall adjacent to the main dining wing, suited for receptions and corporate gatherings.',
    startingPrice: 4720,
    tiers: [
      {
        label: 'Standard Booking',
        capacity: '50 Pax',
        base: 4000,
        gst: 720,
        cleaning: 0,
        total: 4720,
        note: 'Air-conditioned comfort with dedicated service corridor'
      }
    ]
  },
  {
    id: 'ground-floor-chat',
    name: 'Ground Floor Hall (Snack Wing)',
    name_kn: 'ಚಾಟ್ ವಿಭಾಗದ ಪಕ್ಕದ ಸಭಾಂಗಣ',
    floor: 'Ground Floor',
    capacity: '35 Guests',
    purpose: 'Casual social get-togethers and birthday teas positioned adjacent to the popular club snack bar and chat section.',
    startingPrice: 3540,
    tiers: [
      {
        label: 'Standard Booking',
        capacity: '35 Pax',
        base: 3000,
        gst: 540,
        cleaning: 0,
        total: 3540,
        note: 'Direct connectivity to club fast-food counters'
      }
    ]
  },
  {
    id: 'skywalk-hall',
    name: 'Sky Walk Party Hall',
    name_kn: 'ಸ್ಕೈ ವಾಕ್ ಪಾರ್ಟಿ ಹಾಲ್',
    floor: 'Mezzanine Level',
    capacity: '45 Guests',
    purpose: 'Elevated social venue with open-air architectural breeze and panoramic perspective overlooking the stadium walkway.',
    startingPrice: 3540,
    tiers: [
      {
        label: 'Standard Booking',
        capacity: '45 Pax',
        base: 3000,
        gst: 540,
        cleaning: 0,
        total: 3540,
        note: 'Pleasant evening breeze with spectator promenade vista'
      }
    ]
  },
  {
    id: 'second-floor-ac',
    name: '2nd Floor A/C Banquet Hall',
    name_kn: '೨ನೇ ಮಹಡಿ ಎಸಿ ಸಭಾಂಗಣ',
    floor: 'Second Floor',
    capacity: '60 – 70 Guests',
    purpose: 'Executive multi-purpose conference and banquet hall fitted with high-efficiency HVAC, stage area, and audio-visual capability.',
    startingPrice: 8760,
    tiers: [
      {
        label: 'Normal Get-Together',
        capacity: '60 – 70 Pax',
        base: 7000,
        gst: 1260,
        cleaning: 500,
        total: 8760,
        note: 'Corporate meets, seminars & celebratory family lunches'
      },
      {
        label: 'Birthday & Festive Parties',
        capacity: '60 – 70 Pax',
        base: 10000,
        gst: 1800,
        cleaning: 500,
        total: 12300,
        note: 'Includes buffet staging space and intensive cleanup surcharge'
      }
    ]
  },
  {
    id: 'roof-terrace',
    name: 'Roof Terrace Open-Air Pavilion',
    name_kn: 'ರೂಫ್ ಟೆರೇಸ್ ಮುಕ್ತ ಸಭಾಂಗಣ',
    floor: 'Roof Level',
    capacity: 'Up to 250 Guests',
    purpose: 'The crown jewel of the clubhouse. Starlit rooftop venue for grand wedding ceremonies, sangeets, cocktail receptions, and corporate galas.',
    startingPrice: 9900,
    tiers: [
      {
        label: 'Intimate Gathering (< 100 Pax)',
        capacity: '< 100 Pax',
        base: 8000,
        gst: 1440,
        cleaning: 500,
        total: 9900,
        note: 'Rooftop breeze setting with evening decorative illumination'
      },
      {
        label: 'Grand Gala (> 100 Pax)',
        capacity: '100 – 150 Pax',
        base: 10000,
        gst: 1800,
        cleaning: 500,
        total: 12200,
        note: 'Expansive terrace arrangement with buffet perimeter'
      },
      {
        label: 'Theme Night & Birthday Bash',
        capacity: 'Up to 150 Pax',
        base: 15000,
        gst: 2700,
        cleaning: 500,
        total: 18200,
        note: 'Customized ambient lighting with high-load power setup'
      },
      {
        label: 'Weddings & Engagements',
        capacity: '150 – 250 Pax',
        base: 25000,
        gst: 4500,
        cleaning: 500,
        total: 30000,
        note: 'Grand stage facility. Bookings > 4 hrs subject to ₹10K surcharge'
      }
    ]
  },
  {
    id: 'lawn-garden',
    name: 'Open Lawn Party Area',
    name_kn: 'ತೆರೆದ ಲಾನ್ ಪಾರ್ಟಿ ಜಾಗ',
    floor: 'Ground Garden',
    capacity: '50 Guests',
    purpose: 'Lush natural manicured turf setting under Bengaluru skies, suited for evening cocktail hours and relaxed sports gatherings.',
    startingPrice: 2360,
    tiers: [
      {
        label: 'Weekday Sessions (Mon – Thu)',
        capacity: '50 Pax',
        base: 2000,
        gst: 360,
        cleaning: 0,
        total: 2360,
        note: 'Quiet weekday privilege rate'
      },
      {
        label: 'Weekend & Holiday Sessions (Fri – Sun)',
        capacity: '50 Pax',
        base: 2500,
        gst: 450,
        cleaning: 0,
        total: 2950,
        note: 'Prime weekend reservation under natural canopy'
      }
    ]
  }
];

export const ROOM_SPACES: RoomSpace[] = [
  {
    id: 'room-small',
    name: 'Small Guest Room',
    name_kn: 'ಕಿರು ಅತಿಥಿ ಕೊಠಡಿ',
    type: 'Single / Compact Double',
    baseRent: 1100,
    cgst: 66,
    sgst: 66,
    total: 1232,
    features: ['Attached En-Suite Bath', 'Work Table & Chair', 'Clubhouse Dining Access', 'Direct Courtyard View']
  },
  {
    id: 'room-standard',
    name: 'Standard Guest Room (Room 202)',
    name_kn: 'ಪ್ರಮಾಣಿತ ಅತಿಥಿ ಕೊಠಡಿ',
    type: 'Executive Twin / Double',
    baseRent: 1500,
    cgst: 90,
    sgst: 90,
    total: 1680,
    features: ['Split Air Conditioning', 'Smart Flat Screen TV', 'High-Speed Broadband', 'Renovated Modern Linens', 'Stadium View Window']
  },
  {
    id: 'room-suite-201',
    name: 'Superior Heritage Suite (Room 201)',
    name_kn: 'ಸುಪೀರಿಯರ್ ಹೆರಿಟೇಜ್ ಸೂಟ್',
    type: 'Premium Executive Suite',
    baseRent: 1800,
    cgst: 108,
    sgst: 108,
    total: 2016,
    features: ['Separate Living Room Lounge', 'King Sized Bed', 'Private Viewing Balcony', 'Modernized Granite Bath', 'Complimentary WiFi']
  }
];

interface BookingFacilitiesSectionProps {
  lang?: 'en' | 'kn';
}

export const BookingFacilitiesSection: React.FC<BookingFacilitiesSectionProps> = ({ lang = 'en' }) => {
  const [activeTab, setActiveTab] = useState<'halls' | 'rooms' | 'table' | 'guidelines'>('halls');
  const [selectedHall, setSelectedHall] = useState<HallSpace | null>(null);
  const [selectedTierIndex, setSelectedTierIndex] = useState<number>(0);
  const [selectedRoom, setSelectedRoom] = useState<RoomSpace | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquiryDate, setInquiryDate] = useState('');
  const [inquirySession, setInquirySession] = useState('evening');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMembershipNo, setInquiryMembershipNo] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openHallModal = (hall: HallSpace, tierIdx: number = 0) => {
    setSelectedHall(hall);
    setSelectedTierIndex(tierIdx);
    setSelectedRoom(null);
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const openRoomModal = (room: RoomSpace) => {
    setSelectedRoom(room);
    setSelectedHall(null);
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="booking-facilities" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FCFAF9] border-t border-[#E6DAD8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Minimalist Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E6DAD8]">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#E3000F] font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3000F]" />
              <span>ESTD. 1937 · CLUBHOUSE VENUES & LODGING</span>
            </div>
            
            <h2 className="disp text-4xl sm:text-6xl text-black tracking-tight leading-none">
              {lang === 'kn' ? 'ಪಾರ್ಟಿ ಹಾಲ್‌ಗಳು & ಕೊಠಡಿಗಳು' : 'PARTY HALLS & GUEST ROOMS'}
            </h2>

            <p className="font-kannada text-sm font-bold text-neutral-500 mt-2">
              {lang === 'kn' ? 'ಅಧಿಕೃತ ಕಾರ್ಯಕಾರಿ ಸಮಿತಿ ಅನುಮೋದಿತ ಶುಲ್ಕಗಳು' : 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಹಾಕಿ ಸಂಸ್ಥೆ · ಲ್ಯಾಂಗ್‌ಫೋರ್ಡ್ ಟೌನ್'}
            </p>
          </div>

          <p className="whisper text-lg sm:text-xl text-[#5C5350] max-w-md leading-relaxed md:text-right">
            {lang === 'kn'
              ? 'ಲ್ಯಾಂಗ್‌ಫೋರ್ಡ್ ಟೌನ್‌ನ ಕ್ರೀಡಾ ಸಂಕೀರ್ಣದಲ್ಲಿರುವ ೭ ಖಾಸಗಿ ಸಭಾಂಗಣಗಳು ಮತ್ತು ಸದಸ್ಯರ ವಿಶ್ರಾಂತಿ ಕೊಠಡಿಗಳು.'
              : 'Seven private gathering spaces and residential guest suites nestled within Langford Town. Official Executive Committee authorized tariffs.'}
          </p>
        </div>

        {/* Minimalist Quick Service & Timing Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E6DAD8] border-b border-[#E6DAD8] py-4 text-xs font-mono text-[#5C5350]">
          <div className="py-2 md:py-0 md:pr-6 flex items-center justify-between">
            <span className="text-neutral-400 uppercase tracking-wider text-[10px]">Session Hours</span>
            <span className="text-black font-semibold">Lunch 11:30–15:30 · Dinner 18:30–23:00</span>
          </div>

          <div className="py-2 md:py-0 md:px-6 flex items-center justify-between">
            <span className="text-neutral-400 uppercase tracking-wider text-[10px]">Halls & Accounts</span>
            <div className="text-right">
              <span className="text-black font-semibold">Sri R. Viswanath Singh</span>
              <a href="tel:9980905385" className="block text-[#E3000F] hover:underline font-bold mt-0.5">99809 05385</a>
            </div>
          </div>

          <div className="py-2 md:py-0 md:pl-6 flex items-center justify-between">
            <span className="text-neutral-400 uppercase tracking-wider text-[10px]">Guest Rooms Desk</span>
            <div className="text-right">
              <span className="text-black font-semibold">Sri A. Francis</span>
              <a href="tel:9886516936" className="block text-[#E3000F] hover:underline font-bold mt-0.5">98865 16936</a>
            </div>
          </div>
        </div>

        {/* Minimalist Tab Navigation */}
        <div className="flex items-center gap-8 border-b border-[#E6DAD8] mt-8 mb-10 overflow-x-auto text-xs font-mono tracking-wider uppercase">
          <button
            onClick={() => setActiveTab('halls')}
            className={`pb-3 font-semibold transition-all relative whitespace-nowrap ${
              activeTab === 'halls'
                ? 'text-black font-bold'
                : 'text-neutral-400 hover:text-black'
            }`}
          >
            <span>{lang === 'kn' ? 'ಪಾರ್ಟಿ ಹಾಲ್‌ಗಳು (೭)' : 'Party Halls (7 Venues)'}</span>
            {activeTab === 'halls' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E3000F]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('rooms')}
            className={`pb-3 font-semibold transition-all relative whitespace-nowrap ${
              activeTab === 'rooms'
                ? 'text-black font-bold'
                : 'text-neutral-400 hover:text-black'
            }`}
          >
            <span>{lang === 'kn' ? 'ಅತಿಥಿ ಕೊಠಡಿಗಳು (೩)' : 'Guest Suites (3 Tiers)'}</span>
            {activeTab === 'rooms' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E3000F]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('table')}
            className={`pb-3 font-semibold transition-all relative whitespace-nowrap ${
              activeTab === 'table'
                ? 'text-black font-bold'
                : 'text-neutral-400 hover:text-black'
            }`}
          >
            <span>{lang === 'kn' ? 'ಶುಲ್ಕ ಕೋಷ್ಟಕ' : 'Tariff Comparison'}</span>
            {activeTab === 'table' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E3000F]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('guidelines')}
            className={`pb-3 font-semibold transition-all relative whitespace-nowrap ${
              activeTab === 'guidelines'
                ? 'text-black font-bold'
                : 'text-neutral-400 hover:text-black'
            }`}
          >
            <span>{lang === 'kn' ? 'ನಿಯಮಗಳು & ವೋಟಿಂಗ್' : 'Rules & Guidelines'}</span>
            {activeTab === 'guidelines' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E3000F]" />
            )}
          </button>
        </div>

        {/* TAB 1: Minimalist Party Halls Cards */}
        {activeTab === 'halls' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HALL_SPACES.map((hall) => {
              const defaultTier = hall.tiers[0];
              const hasMultipleTiers = hall.tiers.length > 1;

              return (
                <article
                  key={hall.id}
                  className="bg-white rounded-xl border border-[#E6DAD8] hover:border-black transition-all duration-300 flex flex-col justify-between p-6 shadow-xs hover:shadow-md group"
                >
                  <div>
                    {/* Top Meta Tag */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-3 pb-2 border-b border-neutral-100">
                      <span className="uppercase tracking-wider font-semibold text-neutral-700">
                        {hall.floor}
                      </span>
                      <span className="flex items-center gap-1 text-[#E3000F] font-bold">
                        <Users className="w-3 h-3" />
                        {hall.capacity}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="disp text-2xl text-black group-hover:text-[#E3000F] transition-colors leading-tight">
                      {hall.name}
                    </h3>
                    <p className="font-kannada text-xs text-neutral-400 font-medium mt-1 mb-3">
                      {hall.name_kn}
                    </p>

                    {/* Purpose */}
                    <p className="text-xs text-[#5C5350] leading-relaxed mb-6 font-sans">
                      {hall.purpose}
                    </p>

                    {/* Minimalist Pricing Summary */}
                    <div className="py-3 px-3.5 rounded-lg bg-[#FAF7F6] border border-[#EFE8E6] mb-5">
                      <div className="flex items-baseline justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                          {hasMultipleTiers ? 'Starting from' : 'Total Payable'}
                        </span>
                        <div className="text-right">
                          <span className="font-mono text-lg font-bold text-black">
                            ₹{hall.startingPrice.toLocaleString('en-IN')}/-
                          </span>
                          <span className="text-[10px] font-mono text-neutral-400 block -mt-0.5">
                            incl. 18% GST
                          </span>
                        </div>
                      </div>

                      {hasMultipleTiers && (
                        <p className="text-[10px] font-mono text-neutral-500 mt-2 pt-2 border-t border-[#E8DFDD]">
                          {hall.tiers.length} event packages (₹{hall.tiers[0].total.toLocaleString('en-IN')} – ₹{hall.tiers[hall.tiers.length - 1].total.toLocaleString('en-IN')})
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Clean Bottom Action Button */}
                  <button
                    onClick={() => openHallModal(hall, 0)}
                    className="w-full py-2.5 px-4 rounded-lg bg-black text-white hover:bg-[#E3000F] font-mono text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Reserve / Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </article>
              );
            })}
          </div>
        )}

        {/* TAB 2: Minimalist Guest Rooms */}
        {activeTab === 'rooms' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROOM_SPACES.map((room) => (
              <article
                key={room.id}
                className="bg-white rounded-xl border border-[#E6DAD8] hover:border-black transition-all duration-300 flex flex-col justify-between p-6 shadow-xs hover:shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-3 pb-2 border-b border-neutral-100">
                    <span className="uppercase tracking-wider font-semibold text-neutral-700">
                      EC Authorized Lodging
                    </span>
                    <span className="text-emerald-700 font-bold">
                      {room.type}
                    </span>
                  </div>

                  <h3 className="disp text-2xl text-black group-hover:text-[#E3000F] transition-colors leading-tight">
                    {room.name}
                  </h3>
                  <p className="font-kannada text-xs text-neutral-400 font-medium mt-1 mb-4">
                    {room.name_kn}
                  </p>

                  {/* Clean Room Features List */}
                  <ul className="space-y-2 mb-6 font-mono text-xs text-[#5C5350]">
                    {room.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#E3000F]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price Block */}
                  <div className="py-3 px-3.5 rounded-lg bg-[#FAF7F6] border border-[#EFE8E6] mb-5 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                        Per Night Tariff
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        Base ₹{room.baseRent} + 12% GST
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-xl font-bold text-black">
                        ₹{room.total.toLocaleString('en-IN')}/-
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500 block">
                        net per night
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => openRoomModal(room)}
                  className="w-full py-2.5 px-4 rounded-lg bg-black text-white hover:bg-[#E3000F] font-mono text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Book Guest Room</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </article>
            ))}
          </div>
        )}

        {/* TAB 3: Minimalist Comparison Table */}
        {activeTab === 'table' && (
          <div className="bg-white rounded-xl border border-[#E6DAD8] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="bg-[#FAF7F6] border-b border-[#E6DAD8] text-neutral-600 uppercase text-[11px] tracking-wider">
                    <th className="py-3.5 px-4 font-bold">Venue / Space</th>
                    <th className="py-3.5 px-3 font-bold">Capacity</th>
                    <th className="py-3.5 px-3 font-bold">Level / Floor</th>
                    <th className="py-3.5 px-3 font-bold text-right">Base Rent</th>
                    <th className="py-3.5 px-3 font-bold text-right">GST</th>
                    <th className="py-3.5 px-3 font-bold text-right">Cleaning</th>
                    <th className="py-3.5 px-4 font-bold text-right text-black">Total Payable</th>
                    <th className="py-3.5 px-4 font-bold text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0EBE9]">
                  {HALL_SPACES.flatMap((hall) => 
                    hall.tiers.map((tier, idx) => (
                      <tr key={`${hall.id}-${idx}`} className="hover:bg-neutral-50 transition-colors">
                        <td className="py-3 px-4 font-medium text-black">
                          <div>
                            <span className="font-semibold block">{hall.name}</span>
                            <span className="text-[11px] text-neutral-400 font-sans">{tier.label}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-neutral-600">{tier.capacity}</td>
                        <td className="py-3 px-3 text-neutral-600">{hall.floor}</td>
                        <td className="py-3 px-3 text-right text-neutral-600">₹{tier.base.toLocaleString('en-IN')}</td>
                        <td className="py-3 px-3 text-right text-neutral-500">₹{tier.gst.toLocaleString('en-IN')}</td>
                        <td className="py-3 px-3 text-right text-neutral-500">{tier.cleaning > 0 ? `₹${tier.cleaning}` : '—'}</td>
                        <td className="py-3 px-4 text-right font-bold text-black">₹{tier.total.toLocaleString('en-IN')}/-</td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => openHallModal(hall, idx)}
                            className="px-2.5 py-1 rounded border border-neutral-300 hover:border-black hover:bg-black hover:text-white transition-colors text-[10px] uppercase font-bold"
                          >
                            Inquire
                          </button>
                        </td>
                      </tr>
                    ))
                  )}

                  {/* Rooms section header */}
                  <tr className="bg-[#FAF7F6] border-t-2 border-b border-[#E6DAD8]">
                    <td colSpan={8} className="py-2.5 px-4 font-bold text-neutral-900 uppercase text-[10px] tracking-wider">
                      Executive Guest Rooms & Suites (Per Night Tariffs)
                    </td>
                  </tr>

                  {ROOM_SPACES.map((room) => (
                    <tr key={room.id} className="hover:bg-neutral-50 transition-colors">
                      <td className="py-3 px-4 font-medium text-black">
                        <div>
                          <span className="font-semibold block">{room.name}</span>
                          <span className="text-[11px] text-neutral-400 font-sans">{room.type}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-neutral-600">2 Guests</td>
                      <td className="py-3 px-3 text-neutral-600">Clubhouse 2nd Flr</td>
                      <td className="py-3 px-3 text-right text-neutral-600">₹{room.baseRent.toLocaleString('en-IN')}</td>
                      <td className="py-3 px-3 text-right text-neutral-500">₹{(room.cgst + room.sgst).toLocaleString('en-IN')}</td>
                      <td className="py-3 px-3 text-right text-neutral-500">—</td>
                      <td className="py-3 px-4 text-right font-bold text-black">₹{room.total.toLocaleString('en-IN')}/-</td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => openRoomModal(room)}
                          className="px-2.5 py-1 rounded border border-neutral-300 hover:border-black hover:bg-black hover:text-white transition-colors text-[10px] uppercase font-bold"
                        >
                          Inquire
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: Minimalist Guidelines */}
        {activeTab === 'guidelines' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-[#E6DAD8] space-y-4">
              <div className="flex items-center gap-2 text-black font-mono font-bold text-sm uppercase tracking-wider pb-3 border-b border-neutral-100">
                <Clock className="w-4 h-4 text-[#E3000F]" />
                <span>Operational Session Timings</span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-[#FAF7F6] border border-[#EFE8E6]">
                  <span className="font-bold text-black block mb-0.5">FORENOON / LUNCH SESSION</span>
                  <p className="text-neutral-700">11:30 AM to 3:30 PM</p>
                  <p className="text-[11px] text-neutral-400 mt-1">Last F&B order: 2:45 PM • Hall vacated by 4:00 PM</p>
                </div>
                <div className="p-3 rounded-lg bg-[#FAF7F6] border border-[#EFE8E6]">
                  <span className="font-bold text-black block mb-0.5">EVENING / DINNER SESSION</span>
                  <p className="text-neutral-700">6:30 PM to 11:00 PM</p>
                  <p className="text-[11px] text-neutral-400 mt-1">Last F&B order: 10:30 PM • Hall vacated by 11:15 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E6DAD8] space-y-4">
              <div className="flex items-center gap-2 text-black font-mono font-bold text-sm uppercase tracking-wider pb-3 border-b border-neutral-100">
                <Shield className="w-4 h-4 text-[#E3000F]" />
                <span>Statutory Club Regulations</span>
              </div>
              <ul className="space-y-3 font-sans text-xs text-[#5C5350] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3000F] shrink-0 mt-1.5" />
                  <span><strong>Roof Terrace Duration:</strong> For bookings exceeding 4 hours or day-long celebrations, a statutory surcharge of ₹10,000/- is levied as per EC resolution.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3000F] shrink-0 mt-1.5" />
                  <span><strong>Clean-up Charges:</strong> A standard sanitization fee of ₹500/- is applicable on 2nd Floor and Roof Terrace gatherings.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3000F] shrink-0 mt-1.5" />
                  <span><strong>Vehicle Entry:</strong> Entry inside KSHA premises requires an official vehicle pass issued upon submitting RC copy at the clubhouse office.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

      </div>

      {/* Minimalist Reservation Inquire Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-xl border border-neutral-300 w-full max-w-md p-6 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                <div>
                  <span className="text-[10px] text-[#E3000F] uppercase tracking-wider font-bold block">
                    KSHA Clubhouse Reservation Desk
                  </span>
                  <h3 className="disp text-2xl text-black mt-0.5">
                    {selectedHall ? selectedHall.name : selectedRoom?.name}
                  </h3>
                  {selectedHall && (
                    <div className="mt-1">
                      <select
                        value={selectedTierIndex}
                        onChange={(e) => setSelectedTierIndex(Number(e.target.value))}
                        className="w-full text-xs font-mono p-1.5 bg-[#FAF7F6] border border-[#E6DAD8] rounded focus:outline-hidden"
                      >
                        {selectedHall.tiers.map((t, i) => (
                          <option key={i} value={i}>
                            {t.label} — ₹{t.total.toLocaleString('en-IN')}/-
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  {selectedRoom && (
                    <p className="text-xs text-neutral-500 mt-1">
                      Tariff: ₹{selectedRoom.total.toLocaleString('en-IN')}/- per night
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="text-[10px] uppercase text-neutral-500 block mb-1">
                      Date of Event
                    </label>
                    <input
                      type="date"
                      required
                      value={inquiryDate}
                      onChange={(e) => setInquiryDate(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded border border-neutral-300 text-xs focus:outline-hidden focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-neutral-500 block mb-1">
                      Session
                    </label>
                    <select
                      value={inquirySession}
                      onChange={(e) => setInquirySession(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded border border-neutral-300 text-xs bg-white focus:outline-hidden focus:border-black"
                    >
                      <option value="lunch">Lunch (11:30–15:30)</option>
                      <option value="dinner">Dinner (18:30–23:00)</option>
                      <option value="fullday">Full Day (4+ hrs)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase text-neutral-500 block mb-1">
                    Full Name (Member / Guest)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sri / Smt."
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded border border-neutral-300 text-xs focus:outline-hidden focus:border-black"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] uppercase text-neutral-500 block mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="98XXXXXXXX"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded border border-neutral-300 text-xs focus:outline-hidden focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-neutral-500 block mb-1">
                      KSHA Member No.
                    </label>
                    <input
                      type="text"
                      placeholder="LM/LA No. (if member)"
                      value={inquiryMembershipNo}
                      onChange={(e) => setInquiryMembershipNo(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded border border-neutral-300 text-xs focus:outline-hidden focus:border-black"
                    />
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-4 rounded bg-[#E3000F] hover:bg-[#9E000B] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="py-2.5 px-4 rounded border border-neutral-300 text-neutral-700 text-xs uppercase font-semibold hover:border-black"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-4 font-mono">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="disp text-xl text-black">Inquiry Registered</h4>
                <p className="text-xs text-neutral-600 font-sans max-w-xs mx-auto">
                  Thank you, <strong>{inquiryName}</strong>. Your inquiry for{' '}
                  <strong>{selectedHall ? selectedHall.name : selectedRoom?.name}</strong> has been logged.
                </p>
                <div className="p-3 rounded bg-[#FAF7F6] border border-[#E6DAD8] text-left text-xs space-y-1">
                  <p className="text-neutral-500 text-[10px]">Contact Desk:</p>
                  <p className="font-bold text-black">Sri R. Viswanath Singh (Halls) · 99809 05385</p>
                  <p className="font-bold text-black">Sri A. Francis (Rooms) · 98865 16936</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="py-2 px-6 rounded bg-black text-white text-xs uppercase font-bold"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
