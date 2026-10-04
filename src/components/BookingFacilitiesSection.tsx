import React, { useState } from 'react';
import { 
  Building2, 
  Bed, 
  Phone, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Users, 
  ChevronRight,
  ShieldCheck,
  Send,
  FileText
} from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface HallTariff {
  id: string;
  name: string;
  name_kn: string;
  capacity: string;
  purpose: string;
  baseRent: number;
  gst: number;
  cleaning: number;
  total: number;
  note?: string;
  floor: string;
}

interface RoomTariff {
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

export const HALLS_DATA: HallTariff[] = [
  {
    id: 'green-hall-single',
    name: 'Green Party Hall (Hall 1 or 2)',
    name_kn: 'ಹಸಿರು ಪಾರ್ಟಿ ಹಾಲ್ (ಹಾಲ್ 1 ಅಥವಾ 2)',
    capacity: '20 Pax',
    purpose: 'Intimate family gatherings & executive meetings',
    baseRent: 2000,
    gst: 360,
    cleaning: 0,
    total: 2360,
    floor: 'Ground Level / Lawn',
    note: 'Individual hall booked separately (either Hall 1 or Hall 2)'
  },
  {
    id: 'green-hall-combined',
    name: 'Green Party Hall 1 & 2 Combined',
    name_kn: 'ಹಸಿರು ಪಾರ್ಟಿ ಹಾಲ್ 1 ಮತ್ತು 2 ಜಂಟಿ',
    capacity: '40 Pax',
    purpose: 'Mid-sized club reunions & team lunches',
    baseRent: 3000,
    gst: 570,
    cleaning: 0,
    total: 3570,
    floor: 'Ground Level / Lawn',
    note: 'Combined dual hall opening with open lawn access'
  },
  {
    id: 'ground-floor-ac',
    name: 'Ground Floor A/C Party Hall',
    name_kn: 'ನೆಲ ಮಹಡಿ ಹವಾನಿಯಂತ್ರಿತ ಸಭಾಂಗಣ',
    capacity: '50 Pax',
    purpose: 'All-day air-conditioned banquets & receptions',
    baseRent: 4000,
    gst: 720,
    cleaning: 0,
    total: 4720,
    floor: 'Ground Floor',
    note: 'Adjacent to dining wing; fully climate controlled'
  },
  {
    id: 'ground-floor-chat',
    name: 'Ground Floor Hall (Next to Chat Section)',
    name_kn: 'ಚಾಟ್ ವಿಭಾಗದ ಪಕ್ಕದ ಸಭಾಂಗಣ',
    capacity: '35 Pax',
    purpose: 'Casual social events & evening get-togethers',
    baseRent: 3000,
    gst: 540,
    cleaning: 0,
    total: 3540,
    floor: 'Ground Floor',
    note: 'Convenient access to club snack bar & chat station'
  },
  {
    id: 'skywalk-hall',
    name: 'Sky Walk Party Hall',
    name_kn: 'ಸ್ಕೈ ವಾಕ್ ಪಾರ್ಟಿ ಹಾಲ್',
    capacity: '45 Pax',
    purpose: 'Open-view evening social gatherings',
    baseRent: 3000,
    gst: 540,
    cleaning: 0,
    total: 3540,
    floor: 'Mezzanine Sky Walk',
    note: 'Panoramic view over the stadium promenade'
  },
  {
    id: 'second-floor-ac-normal',
    name: '2nd Floor A/C Party Hall (Normal Get-Together)',
    name_kn: '2ನೇ ಮಹಡಿ ಎಸಿ ಹಾಲ್ (ಸಾಮಾನ್ಯ ಕೂಟ)',
    capacity: '60 – 70 Pax',
    purpose: 'Corporate presentations, anniversary celebrations',
    baseRent: 7000,
    gst: 1260,
    cleaning: 500,
    total: 8760,
    floor: '2nd Floor',
    note: 'Includes audio-visual prep space & dedicated restroom'
  },
  {
    id: 'second-floor-ac-birthday',
    name: '2nd Floor A/C Party Hall (Birthday Party)',
    name_kn: '2ನೇ ಮಹಡಿ ಎಸಿ ಹಾಲ್ (ಹುಟ್ಟುಹಬ್ಬದ ಸಂಭ್ರಮ)',
    capacity: '60 – 70 Pax',
    purpose: 'Birthday parties with festive music and buffet setup',
    baseRent: 10000,
    gst: 1800,
    cleaning: 500,
    total: 12300,
    floor: '2nd Floor',
    note: 'Heavy cleanup fee included; buffet staging area provided'
  },
  {
    id: 'roof-terrace-small',
    name: 'Roof Terrace Party Hall (< 100 Guests)',
    name_kn: 'ರೂಫ್ ಟೆರೇಸ್ ಹಾಲ್ (100 ಕ್ಕಿಂತ ಕಡಿಮೆ ಅತಿಥಿಗಳು)',
    capacity: 'Up to 100 Pax',
    purpose: 'Evening open-air breeze parties & cocktail dinners',
    baseRent: 8000,
    gst: 1440,
    cleaning: 500,
    total: 9900,
    floor: 'Roof Terrace Level',
    note: 'Additional ₹10,000 levied if booked for entire day (>4 hours)'
  },
  {
    id: 'roof-terrace-large',
    name: 'Roof Terrace Party Hall (> 100 Guests)',
    name_kn: 'ರೂಫ್ ಟೆರೇಸ್ ಹಾಲ್ (100 ಕ್ಕಿಂತ ಹೆಚ್ಚು ಅತಿಥಿಗಳು)',
    capacity: '100 – 150 Pax',
    purpose: 'Grand club galas, social assemblies',
    baseRent: 10000,
    gst: 1800,
    cleaning: 500,
    total: 12200,
    floor: 'Roof Terrace Level',
    note: 'Additional ₹10,000 levied if booked for entire day (>4 hours)'
  },
  {
    id: 'roof-terrace-birthday',
    name: 'Roof Terrace Hall (Birthday & Theme Night)',
    name_kn: 'ರೂಫ್ ಟೆರೇಸ್ ಹುಟ್ಟುಹಬ್ಬ ಮತ್ತು ಥೀಮ್ ಪಾರ್ಟಿ',
    capacity: 'Up to 150 Pax',
    purpose: 'Large birthday bashes & milestone anniversaries',
    baseRent: 15000,
    gst: 2700,
    cleaning: 500,
    total: 18200,
    floor: 'Roof Terrace Level',
    note: 'Roof terrace lighting included'
  },
  {
    id: 'roof-terrace-wedding',
    name: 'Roof Terrace (Marriage / Mehendi / Engagements)',
    name_kn: 'ರೂಫ್ ಟೆರೇಸ್ (ವಿವಾಹ / ಮೆಹಂದಿ / ನಿಶ್ಚಿತಾರ್ಥ)',
    capacity: '150 – 250 Pax',
    purpose: 'Weddings, sangeet, mehendi ceremonies, engagement banquets',
    baseRent: 25000,
    gst: 4500,
    cleaning: 500,
    total: 30000,
    floor: 'Roof Terrace Level',
    note: 'Grand stage area; full day package available with surcharge'
  },
  {
    id: 'lawn-party-weekday',
    name: 'Lawn Party Area (Mon – Thu)',
    name_kn: 'ಲಾನ್ ಪಾರ್ಟಿ ಜಾಗ (ಸೋಮ - ಗುರು)',
    capacity: '50 Pax',
    purpose: 'Open green lawn casual get-togethers',
    baseRent: 2000,
    gst: 360,
    cleaning: 0,
    total: 2360,
    floor: 'Ground Lawn Level',
    note: 'Available Monday to Thursday only'
  },
  {
    id: 'lawn-party-weekend',
    name: 'Lawn Party Area (Fri – Sun & Public Holidays)',
    name_kn: 'ಲಾನ್ ಪಾರ್ಟಿ ಜಾಗ (ಶುಕ್ರ - ಭಾನು ಮತ್ತು ರಜಾದಿನ)',
    capacity: '50 Pax',
    purpose: 'Weekend lawn parties under evening canopy',
    baseRent: 2500,
    gst: 450,
    cleaning: 0,
    total: 2950,
    floor: 'Ground Lawn Level',
    note: 'Peak weekend rate applies'
  }
];

export const ROOMS_DATA: RoomTariff[] = [
  {
    id: 'room-small',
    name: 'Small Guest Room',
    name_kn: 'ಕಿರು ಅತಿಥಿ ಕೊಠಡಿ',
    type: 'Single / Compact Double',
    baseRent: 1100,
    cgst: 66,
    sgst: 66,
    total: 1232,
    features: ['Attached Bath', 'Work Table', 'Quiet Courtyard View', 'Clubhouse Dining Access']
  },
  {
    id: 'room-standard',
    name: 'Standard Guest Room & Renovated Room 202',
    name_kn: 'ಪ್ರಮಾಣಿತ ಅತಿಥಿ ಕೊಠಡಿ ಮತ್ತು ಕೊಠಡಿ ಸಂ. 202',
    type: 'Executive Twin / Double',
    baseRent: 1500,
    cgst: 90,
    sgst: 90,
    total: 1680,
    features: ['Air Conditioned', 'Smart TV & WiFi', 'Upgraded Linens', 'Stadium View Window']
  },
  {
    id: 'room-suite-201',
    name: 'Renovated Suite Room 201',
    name_kn: 'ನವೀಕೃತ ಸುಪೀರಿಯರ್ ಸೂಟ್ ಕೊಠಡಿ 201',
    type: 'Premium Heritage Suite',
    baseRent: 1800,
    cgst: 108,
    sgst: 108,
    total: 2016,
    features: ['Living Lounge Area', 'Premium King Bed', 'Modernized En-Suite Bath', 'Private Balcony', 'High-Speed Broadband']
  }
];

interface BookingFacilitiesSectionProps {
  lang?: 'en' | 'kn';
}

export const BookingFacilitiesSection: React.FC<BookingFacilitiesSectionProps> = ({ lang = 'en' }) => {
  const [activeTab, setActiveTab] = useState<'halls' | 'rooms' | 'rules'>('halls');
  const [selectedItem, setSelectedItem] = useState<HallTariff | RoomTariff | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquiryDate, setInquiryDate] = useState('');
  const [inquirySession, setInquirySession] = useState('evening');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMembershipNo, setInquiryMembershipNo] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpenBooking = (item: HallTariff | RoomTariff) => {
    soundEngine.playStickStrike();
    setSelectedItem(item);
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playGloryChime();
    setIsSubmitted(true);
  };

  return (
    <section id="booking-facilities" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E6DAD8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Badge & Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E3000F] border border-red-200 font-mono text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Official EC Tariff · 2026 Authorisation</span>
          </div>
          <h2 className="disp text-4xl sm:text-6xl lg:text-7xl text-black">
            {lang === 'kn' ? 'ಪಾರ್ಟಿ ಹಾಲ್‌ಗಳು ಮತ್ತು ಕೊಠಡಿಗಳ ಕಾಯ್ದಿರಿಸುವಿಕೆ' : 'Party Halls & Guest Rooms'}
          </h2>
          <p className="whisper text-xl sm:text-2xl text-[#3B3330] max-w-3xl mt-2 leading-relaxed">
            {lang === 'kn'
              ? 'ಕೆಎಸ್‌ಎಚ್‌ಎ ಕ್ಲಬ್‌ಹೌಸ್ ಸಭಾಂಗಣಗಳು ಮತ್ತು ಸದಸ್ಯರ ಅತಿಥಿ ಕೊಠಡಿಗಳ ಅಧಿಕೃತ ಶುಲ್ಕ ಪಟ್ಟಿ ಮತ್ತು ಮುಂಗಡ ಕಾಯ್ದಿರಿಸುವಿಕೆ ವಿವರಗಳು.'
              : 'Official tariffs and reservation directory for the 7 private event halls and residential guest suites at KSHA Clubhouse.'}
          </p>
        </div>

        {/* Quick Contact Bar for Inquiries */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 p-5 rounded-2xl bg-[#FBF8F7] border border-[#E6DAD8]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 text-[#E3000F] flex items-center justify-center font-bold shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-bold">Party Halls & Accounts</p>
              <p className="font-bold text-sm text-neutral-900">Sri R. Viswanath Singh</p>
              <a href="tel:9980905385" className="text-xs font-mono font-bold text-[#E3000F] hover:underline">99809 05385</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 text-[#E3000F] flex items-center justify-center font-bold shrink-0">
              <Bed className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-bold">Guest Rooms Reservation</p>
              <p className="font-bold text-sm text-neutral-900">Sri A. Francis</p>
              <a href="tel:9886516936" className="text-xs font-mono font-bold text-[#E3000F] hover:underline">98865 16936</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 text-[#E3000F] flex items-center justify-center font-bold shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-bold">Sessions & Timings</p>
              <p className="text-xs text-neutral-800 font-semibold">Lunch: 11:30 AM – 3:30 PM</p>
              <p className="text-xs text-neutral-800 font-semibold">Dinner: 6:30 PM – 11:00 PM</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-[#E6DAD8] mb-8 pb-3">
          <button
            onClick={() => {
              soundEngine.playSplitFlap();
              setActiveTab('halls');
            }}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'halls'
                ? 'bg-black text-white shadow-md'
                : 'bg-white text-neutral-600 hover:text-black hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Party Halls ({HALLS_DATA.length})</span>
          </button>

          <button
            onClick={() => {
              soundEngine.playSplitFlap();
              setActiveTab('rooms');
            }}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'rooms'
                ? 'bg-black text-white shadow-md'
                : 'bg-white text-neutral-600 hover:text-black hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            <Bed className="w-4 h-4" />
            <span>Guest Rooms ({ROOMS_DATA.length})</span>
          </button>

          <button
            onClick={() => {
              soundEngine.playSplitFlap();
              setActiveTab('rules');
            }}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'rules'
                ? 'bg-black text-white shadow-md'
                : 'bg-white text-neutral-600 hover:text-black hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Rules & Timings</span>
          </button>
        </div>

        {/* TAB 1: Party Halls Cards & Table */}
        {activeTab === 'halls' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {HALLS_DATA.map((hall) => (
                <div
                  key={hall.id}
                  className="rounded-2xl border border-[#E6DAD8] bg-[#FBF8F7] hover:border-black p-6 flex flex-col justify-between transition-all duration-200 shadow-xs hover:shadow-md group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-700 font-bold">
                        {hall.floor}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#E3000F] flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {hall.capacity}
                      </span>
                    </div>

                    <h3 className="disp text-2xl text-black group-hover:text-[#E3000F] transition-colors leading-tight">
                      {hall.name}
                    </h3>
                    <p className="font-kannada text-xs font-bold text-neutral-500 mt-1 mb-3">
                      {hall.name_kn}
                    </p>
                    <p className="text-xs text-[#5C5350] leading-relaxed mb-4">
                      {hall.purpose}
                    </p>

                    {/* Breakdown pill */}
                    <div className="p-3 rounded-xl bg-white border border-neutral-200 space-y-1.5 font-mono text-xs mb-4">
                      <div className="flex justify-between text-neutral-500 text-[11px]">
                        <span>Base Rent</span>
                        <span>₹{hall.baseRent.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-neutral-500 text-[11px]">
                        <span>GST (18%)</span>
                        <span>₹{hall.gst.toLocaleString('en-IN')}</span>
                      </div>
                      {hall.cleaning > 0 && (
                        <div className="flex justify-between text-neutral-500 text-[11px]">
                          <span>Cleaning Charges</span>
                          <span>₹{hall.cleaning.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                      <div className="pt-1.5 border-t border-neutral-100 flex justify-between font-bold text-neutral-900 text-sm">
                        <span>Total Payable</span>
                        <span className="text-[#E3000F]">₹{hall.total.toLocaleString('en-IN')}/-</span>
                      </div>
                    </div>

                    {hall.note && (
                      <p className="text-[11px] text-amber-900 bg-amber-50 border border-amber-200/60 p-2.5 rounded-lg mb-4">
                        ℹ️ {hall.note}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => handleOpenBooking(hall)}
                    className="w-full py-2.5 px-4 rounded-xl bg-black text-white hover:bg-[#E3000F] font-mono text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Book / Inquire Hall</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Special Note Banner */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">Full Day & Prolonged Bookings:</strong>
                <p className="mt-1 leading-relaxed text-amber-900">
                  As per EC resolution, for Roof Terrace Party Hall bookings availed for <strong>more than 4 hours or an entire day</strong>, an additional surcharge of <strong>₹10,000/-</strong> will be levied. Hall clean-up charges of ₹500/- are mandatory on larger gatherings.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Guest Rooms */}
        {activeTab === 'rooms' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ROOMS_DATA.map((room) => (
                <div
                  key={room.id}
                  className="rounded-2xl border border-[#E6DAD8] bg-[#FBF8F7] hover:border-black p-6 flex flex-col justify-between transition-all duration-200 shadow-xs hover:shadow-md group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                        EC 25-03-2023 Order
                      </span>
                      <span className="text-xs font-mono font-bold text-neutral-600">
                        {room.type}
                      </span>
                    </div>

                    <h3 className="disp text-3xl text-black group-hover:text-[#E3000F] transition-colors leading-tight">
                      {room.name}
                    </h3>
                    <p className="font-kannada text-xs font-bold text-neutral-500 mt-1 mb-4">
                      {room.name_kn}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 mb-5">
                      {room.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price Card */}
                    <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1.5 font-mono text-xs mb-5">
                      <div className="flex justify-between text-neutral-500 text-[11px]">
                        <span>Room Rent</span>
                        <span>₹{room.baseRent.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-neutral-500 text-[11px]">
                        <span>CGST + SGST</span>
                        <span>₹{room.cgst} + ₹{room.sgst} = ₹{room.cgst + room.sgst}</span>
                      </div>
                      <div className="pt-2 border-t border-neutral-100 flex justify-between font-bold text-neutral-900 text-base">
                        <span>Per Night</span>
                        <span className="text-[#E3000F]">₹{room.total.toLocaleString('en-IN')}/-</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenBooking(room)}
                    className="w-full py-2.5 px-4 rounded-xl bg-black text-white hover:bg-[#E3000F] font-mono text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Reserve Guest Room</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-neutral-900">Member Guest Privileges:</strong>
                <p className="mt-1 leading-relaxed">
                  Guest rooms are exclusively reserved for KSHA Life Members, Life Associates, and affiliated reciprocal club visitors. Valid membership verification required at check-in. Contact <strong>Sri A. Francis</strong> at <strong>98865 16936</strong> for immediate key allotment.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Rules & Sessions */}
        {activeTab === 'rules' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#FBF8F7] border border-[#E6DAD8] space-y-4">
              <div className="flex items-center gap-2 text-neutral-900 font-bold text-lg">
                <Clock className="w-5 h-5 text-[#E3000F]" />
                <h4>Clubhouse Daily Operational Sessions</h4>
              </div>
              <p className="text-xs text-[#5C5350] leading-relaxed">
                As per Circular Item 6, clubhouse facilities and party halls operate in two strict daily sessions:
              </p>
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <span className="text-[#E3000F] font-bold block mb-1">FORENOON SESSION</span>
                  <p className="text-neutral-800">11:30 AM – 3:30 PM</p>
                  <p className="text-neutral-500 text-[11px] mt-0.5">Last F&B order: 2:45 PM • Premises vacated by 4:00 PM</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <span className="text-[#E3000F] font-bold block mb-1">EVENING SESSION</span>
                  <p className="text-neutral-800">6:30 PM – 11:00 PM</p>
                  <p className="text-neutral-500 text-[11px] mt-0.5">Last F&B order: 10:30 PM • Premises vacated by 11:15 PM</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF8F7] border border-[#E6DAD8] space-y-4">
              <div className="flex items-center gap-2 text-neutral-900 font-bold text-lg">
                <ShieldCheck className="w-5 h-5 text-[#E3000F]" />
                <h4>Vehicle Passes & Statutory Regulations</h4>
              </div>
              <ul className="space-y-2.5 text-xs text-[#3B3330] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#E3000F] font-bold">•</span>
                  <span><strong>Vehicle Pass Mandatory:</strong> Entry inside KSHA premises requires an official vehicle sticker/pass issued after presenting RC book copy at the office (11:30 AM – 8:00 PM).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E3000F] font-bold">•</span>
                  <span><strong>Catering Coordination:</strong> In-house canteen coordination with Sri Siddaraju (99010 74133). External catering requires prior written approval from Hon. Secretary.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E3000F] font-bold">•</span>
                  <span><strong>Co-Working & Child Care:</strong> Dedicated laptop workspace available on hourly tariff; dedicated baby feeding lounge available on ground floor.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

      </div>

      {/* Reservation & Booking Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl border border-neutral-200 w-full max-w-lg p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-neutral-200 hover:border-black flex items-center justify-center text-neutral-500 hover:text-black transition-colors"
            >
              ✕
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#E3000F] font-bold block">
                    KSHA Clubhouse Booking Application
                  </span>
                  <h3 className="disp text-2xl text-black mt-1">
                    {selectedItem.name}
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5">
                    Total Tariff: ₹{selectedItem.total.toLocaleString('en-IN')}/- (incl. GST)
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="text-[11px] font-mono uppercase text-neutral-600 font-bold block mb-1">
                      Event / Check-in Date
                    </label>
                    <input
                      type="date"
                      required
                      value={inquiryDate}
                      onChange={(e) => setInquiryDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs font-mono focus:outline-hidden focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase text-neutral-600 font-bold block mb-1">
                      Session
                    </label>
                    <select
                      value={inquirySession}
                      onChange={(e) => setInquirySession(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs font-mono focus:outline-hidden focus:border-black bg-white"
                    >
                      <option value="forenoon">Forenoon (11:30 AM – 3:30 PM)</option>
                      <option value="evening">Evening (6:30 PM – 11:00 PM)</option>
                      <option value="fullday">Full Day (Subject to ₹10K surcharge)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase text-neutral-600 font-bold block mb-1">
                    Member / Applicant Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sri / Smt. Member Name"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs font-mono focus:outline-hidden focus:border-black"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-mono uppercase text-neutral-600 font-bold block mb-1">
                      Contact Phone No.
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="98XXXXXXXX"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs font-mono focus:outline-hidden focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase text-neutral-600 font-bold block mb-1">
                      KSHA Membership / Card No.
                    </label>
                    <input
                      type="text"
                      placeholder="LM / LA - XXXX"
                      value={inquiryMembershipNo}
                      onChange={(e) => setInquiryMembershipNo(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs font-mono focus:outline-hidden focus:border-black"
                    />
                  </div>
                </div>

                <p className="text-[10px] text-neutral-500 font-sans leading-tight pt-1">
                  Upon submission, your reservation request is transmitted to Senior Accounts Manager Sri R. Viswanath Singh (99809 05385) or Sri A. Francis (98865 16936) for calendar confirmation and formal receipting.
                </p>

                <div className="flex gap-3 pt-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#E3000F] hover:bg-[#9E000B] text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Confirm Booking Request</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="py-3 px-5 rounded-xl border border-neutral-300 hover:border-black font-mono text-xs uppercase tracking-wider font-bold text-neutral-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="disp text-2xl text-black">Reservation Request Logged!</h4>
                <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{inquiryName || 'Member'}</strong>. Your request for <strong>{selectedItem.name}</strong> on <strong>{inquiryDate || 'Selected Date'}</strong> has been registered.
                </p>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-left font-mono text-xs space-y-1">
                  <p className="text-neutral-500">Contact Officer:</p>
                  <p className="font-bold text-neutral-900">Sri R. Viswanath Singh · 99809 05385</p>
                  <p className="text-neutral-500 pt-1">Guest Rooms Desk:</p>
                  <p className="font-bold text-neutral-900">Sri A. Francis · 98865 16936</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="py-2.5 px-6 rounded-xl bg-black text-white font-mono text-xs uppercase tracking-wider font-bold"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
