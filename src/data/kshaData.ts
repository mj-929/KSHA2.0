export interface Olympian {
  id: string;
  name: string;
  kannadaName: string;
  years: string;
  games: string;
  medal: 'Gold' | 'Silver' | 'Bronze' | 'Olympian';
  position: string;
  designation?: string;
  designation_kn?: string;
  myth: string;
  record: string;
  awards: string[];
  district: string;
  image?: string;
}

export interface ArjunaAwardee {
  sNo: number;
  name: string;
  name_kn: string;
  year: number;
  event: string;
  category: 'Hockey' | 'Kabaddi' | 'Para Olympics';
}

export interface InternationalUmpire {
  sNo: number;
  name: string;
  name_kn: string;
  cadre: string;
  cadre_kn: string;
}

export interface PartyHallCharge {
  name: string;
  capacity: string;
  purpose: string;
  baseCharge: number;
  gst: number;
  cleaning: number;
  total: number;
}

export interface DistrictUnit {
  id: number;
  name: string;
  kannadaName: string;
  zone: 'Western Ghats / Coorg' | 'Northern Deccan' | 'Central & Hyderabad-K' | 'Southern Maidan';
  established: string;
  headquarters: string;
  keyTalent: string;
}

export interface ClubFacility {
  id: string;
  title: string;
  kannadaTitle: string;
  highlight: string;
  description: string;
  specs: string[];
  category: 'Sports Arena' | 'Club Wing' | 'Wellness & Recovery' | 'Privileges';
}

export interface ReciprocalClub {
  name: string;
  city: string;
  state: string;
  founded: string;
  privileges: string;
}

export const OLYMPIANS_DATA: Olympian[] = [
  {
    id: 'mp-ganesh',
    name: 'Dr. M. P. Ganesh',
    kannadaName: 'ಪದ್ಮಶ್ರೀ ಡಾ. ಎಂ. ಪಿ. ಗಣೇಶ್',
    years: '1972',
    games: '1972 Munich Olympics',
    medal: 'Bronze',
    position: 'Right Wing / Captain',
    designation: 'Olympian & Arjuna Awardee',
    designation_kn: 'ಒಲಿಂಪಿಯನ್ ಮತ್ತು ಅರ್ಜುನ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತರು',
    myth: 'The General of the Wings. Captain of India, 1973 World Cup Silver. A whirlwind down the right touchline that no defense could tether.',
    record: '1972 Munich Olympics (Bronze) • 1971 World Cup (Bronze) • 1973 World Cup (Silver, Captain) • Arjuna Award 1973 • Padma Shri 2020',
    awards: ['Padma Shri', 'Arjuna Award (1973)', 'Olympic Bronze 1972'],
    district: 'Kodagu (Coorg)',
    image: '/assets/olympians/mp-ganesh.jpg'
  },
  {
    id: 'bp-govinda',
    name: 'B. P. Govinda',
    kannadaName: 'ಬಿ. ಪಿ. ಗೋವಿಂದ',
    years: '1972, 1976',
    games: '1972 Munich & 1976 Montreal',
    medal: 'Bronze',
    position: 'Forward / Left In',
    designation: 'Dual Olympian & Arjuna Awardee',
    designation_kn: 'ಎರಡು ಬಾರಿ ಒಲಿಂಪಿಯನ್ ಮತ್ತು ಅರ್ಜುನ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತರು',
    myth: 'The 1975 World Champion. A smile that disarmed kingdoms, and a reverse-stick strike that left goalkeepers frozen.',
    record: '1972 Munich (Bronze) • 1976 Montreal • 1975 World Cup Gold (Kuala Lumpur) • Arjuna Award 1975',
    awards: ['World Cup Gold 1975', 'Arjuna Award (1975)', 'Olympic Bronze 1972'],
    district: 'Somwarpet (Kodagu)'
  },
  {
    id: 'joaquim-carvalho',
    name: 'Joaquim Carvalho',
    kannadaName: 'ಜೋಕಿಂ ಕಾರ್ವಾಲೋ',
    years: '1984',
    games: '1984 Los Angeles Olympics',
    medal: 'Olympian',
    position: 'Center Half',
    designation: 'Olympian & Arjuna Awardee',
    designation_kn: 'ಒಲಿಂಪಿಯನ್ ಮತ್ತು ಅರ್ಜುನ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತರು',
    myth: 'The Midfield Metronome. Anchored India’s engine room with ruthless tactical poise and visionary distribution.',
    record: '1984 Los Angeles Olympics • 1982 World Cup (Mumbai) • 1982 Asian Games (Silver) • Arjuna Award 1986',
    awards: ['Arjuna Award (1986)', 'Asian Games Silver (1982)'],
    district: 'Bengaluru'
  },
  {
    id: 'bk-subramani',
    name: 'B. K. Subramani',
    kannadaName: 'ಬಿ. ಕೆ. ಸುಬ್ರಮಣಿ',
    years: '1988',
    games: '1988 Seoul Olympics',
    medal: 'Olympian',
    position: 'Inside Right',
    designation: 'Olympian',
    designation_kn: 'ಒಲಿಂಪಿಯನ್',
    myth: 'Tenacity forged in Coorg. Relentless work rate across Asia and Europe that wore down the world’s elite half-backs.',
    record: '1988 Seoul Olympics • 1986 Asian Games (Bronze) • Multiple Indira Gandhi Gold Cups',
    awards: ['Asian Games Bronze (1986)', 'Seoul 1988 Olympian'],
    district: 'Kodagu'
  },
  {
    id: 'jude-felix',
    name: 'Jude Felix',
    kannadaName: 'ಜ್ಯೂಡ್ ಫೆಲಿಕ್ಸ್',
    years: '1988, 1992',
    games: '1988 Seoul & 1992 Barcelona',
    medal: 'Olympian',
    position: 'Center Half / Captain',
    designation: 'Dual Olympian & Arjuna Awardee',
    designation_kn: 'ಎರಡು ಬಾರಿ ಒಲಿಂಪಿಯನ್ ಮತ್ತು ಅರ್ಜುನ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತರು',
    myth: 'The Grand Architect. Captained India with unmatched elegance; founded the Jude Felix Hockey Academy to nurture underprivileged youth.',
    record: '1988 Seoul & 1992 Barcelona (Captain) • 250+ International Caps • Arjuna Award 1994 • Dronacharya Award 2020',
    awards: ['Arjuna Award (1994)', 'Dronacharya Award (2020)', 'Seoul 1988 & Barcelona 1992 Captain'],
    district: 'Bengaluru',
    image: '/assets/olympians/jude-felix.jpg'
  },
  {
    id: 'ashish-ballal',
    name: 'Ashish Ballal',
    kannadaName: 'ಆಶಿಶ್ ಬಲ್ಲಾಳ್',
    years: '1992',
    games: '1992 Barcelona Olympics',
    medal: 'Olympian',
    position: 'Goalkeeper',
    designation: 'Olympian & Arjuna Awardee',
    designation_kn: 'ಒಲಿಂಪಿಯನ್ ಮತ್ತು ಅರ್ಜುನ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತರು',
    myth: 'Bangkok, 1998. Sudden-death tiebreaker against South Korea. Two penalty saves that buried a 32-year Asian Games curse.',
    record: '1992 Barcelona Olympics • 1998 Asian Games Gold (Hero of Final) • Arjuna Award 1996 • 275+ Caps',
    awards: ['Asian Games Gold 1998', 'Arjuna Award (1996)', '1992 Olympian'],
    district: 'Bengaluru',
    image: '/assets/olympians/ashish-ballal.jpg'
  },
  {
    id: 'cs-poonacha',
    name: 'C. S. Poonacha',
    kannadaName: 'ಸಿ. ಎಸ್. ಪೂಣಚ್ಚ',
    years: '1992',
    games: '1992 Barcelona Olympics',
    medal: 'Olympian',
    position: 'Full Back',
    myth: 'Uncompromising discipline. The backbone of India’s penalty corner defense and defensive lockdown.',
    record: '1992 Barcelona Olympics • 1990 Asian Games (Silver) • Renowned National Coach',
    awards: ['Asian Games Silver (1990)', '1992 Olympian'],
    district: 'Kodagu'
  },
  {
    id: 'anil-aldrin',
    name: 'Anil Aldrin',
    kannadaName: 'ಅನಿಲ್ ಆಲ್ಡ್ರಿನ್',
    years: '1996',
    games: '1996 Atlanta Olympics',
    medal: 'Olympian',
    position: 'Full Back / Captain',
    myth: 'The Fortress. Commanded the deep defense with surgical authority, immaculate tackling and calm distribution.',
    record: '1996 Atlanta Olympics • 1998 Asian Games Gold • Captain of India 1999',
    awards: ['Asian Games Gold 1998', '1996 Olympian'],
    district: 'Bengaluru'
  },
  {
    id: 'sabu-varkey',
    name: 'Sabu Varkey',
    kannadaName: 'ಸಾಬು ವಾರ್ಕಿ',
    years: '1996',
    games: '1996 Atlanta Olympics',
    medal: 'Olympian',
    position: 'Midfielder / Playmaker',
    myth: 'Electric acceleration. Turned defense into counter-attack in three strides with deceptive stick fakes.',
    record: '1996 Atlanta Olympics • 1998 Asian Games Gold • 1995 SAF Games Gold',
    awards: ['Asian Games Gold 1998', '1996 Olympian'],
    district: 'Bengaluru'
  },
  {
    id: 'arjun-halappa',
    name: 'Arjun Halappa',
    kannadaName: 'ಅರ್ಜುನ್ ಹಾಲಪ್ಪ',
    years: '2004',
    games: '2004 Athens Olympics',
    medal: 'Olympian',
    position: 'Forward / Midfield / Captain',
    designation: 'Olympian & Captain',
    designation_kn: 'ಒಲಿಂಪಿಯನ್ ಮತ್ತು ನಾಯಕ',
    myth: 'The Magician of Somwarpet. Hands that made the ball stick to wood like mercury in the circle.',
    record: '2004 Athens Olympics • 2010 Commonwealth Games Silver • 2010 Asian Games Bronze • Arjuna Award 2010',
    awards: ['Arjuna Award (2010)', 'CWG Silver 2010', '2004 Olympian'],
    district: 'Somwarpet (Kodagu)',
    image: '/assets/olympians/arjun-halappa.jpg'
  },
  {
    id: 'bharath-chetri',
    name: 'Bharath Chetri, MLA',
    kannadaName: 'ಭರತ್ ಛೇತ್ರಿ, ಶಾಸಕರು',
    years: '2012',
    games: '2012 London Olympics (Captain)',
    medal: 'Olympian',
    position: 'Goalkeeper / Captain',
    designation: 'Olympian & Captain',
    designation_kn: 'ಒಲಿಂಪಿಯನ್ ಮತ್ತು ನಾಯಕ',
    myth: 'The Guardian of the Goal. Led India back to the Olympic stage under the London skies after an 8-year hiatus.',
    record: '2012 London Olympics (Captain) • 2010 Asian Games Bronze • 2010 CWG Silver • Life Member KSHA',
    awards: ['Olympic Captain 2012', 'CWG Silver 2010', 'Life Member KSHA'],
    district: 'Bengaluru'
  },
  {
    id: 'sk-uthappa',
    name: 'S. K. Uthappa',
    kannadaName: 'ಎಸ್. ಕೆ. ಉತ್ತಪ್ಪ',
    years: '2012, 2016',
    games: '2012 London & 2016 Rio',
    medal: 'Olympian',
    position: 'Midfield Engine',
    designation: 'Dual Olympian',
    designation_kn: 'ಎರಡು ಬಾರಿ ಒಲಿಂಪಿಯನ್',
    myth: 'Two Olympic campaigns. The relentless midfield engine that never ran out of breath in high-press battles.',
    record: '2012 & 2016 Olympics • 2014 Asian Games Gold (Incheon) • 2014 Champions Trophy Silver • 120+ Caps',
    awards: ['Asian Games Gold 2014', 'Dual Olympian 2012, 2016'],
    district: 'Kodagu'
  },
  {
    id: 'vr-raghunath',
    name: 'V. R. Raghunath',
    kannadaName: 'ವಿ. ಆರ್. ರಘುನಾಥ್',
    years: '2012, 2016',
    games: '2012 London & 2016 Rio',
    medal: 'Olympian',
    position: 'Full Back / Dragflicker',
    designation: 'Dual Olympian & Arjuna Awardee',
    designation_kn: 'ಎರಡು ಬಾರಿ ಒಲಿಂಪಿಯನ್ ಮತ್ತು ಅರ್ಜುನ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತರು',
    myth: '120 km/h from the top of the D. When he took dragflick guard, the world’s defenses held their breath.',
    record: '2012 & 2016 Olympics • 2014 Asian Games Gold • 2014 CWG Silver • Arjuna Award 2016 • 132 International Goals',
    awards: ['Arjuna Award (2016)', 'Asian Games Gold 2014', 'Dual Olympian'],
    district: 'Kodagu',
    image: '/assets/olympians/vr-raghunath.jpg'
  },
  {
    id: 'sv-sunil',
    name: 'S. V. Sunil',
    kannadaName: 'ಎಸ್. ವಿ. ಸುನಿಲ್',
    years: '2012, 2016',
    games: '2012 London & 2016 Rio',
    medal: 'Olympian',
    position: 'Right Wing / Lightning Striker',
    designation: 'Dual Olympian & Arjuna Awardee',
    designation_kn: 'ಎರಡು ಬಾರಿ ಒಲಿಂಪಿಯನ್ ಮತ್ತು ಅರ್ಜುನ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತರು',
    myth: 'The Jet of Coorg. The fastest winger in world hockey. A blur along the baseline that decimated defenses.',
    record: '2012 & 2016 Olympics • 2014 Asian Games Gold • 2016 Champions Trophy Silver • Arjuna Award 2017 • FIH Player of the Year nominee',
    awards: ['Arjuna Award (2017)', 'Asian Games Gold 2014', 'Dual Olympian'],
    district: 'Somwarpet (Kodagu)',
    image: '/assets/olympians/sv-sunil.jpg'
  },
  {
    id: 'nikkin-thimmaiah',
    name: 'Nikkin Thimmaiah',
    kannadaName: 'ನಿಕ್ಕಿನ್ ತಿಮ್ಮಯ್ಯ',
    years: '2016',
    games: '2016 Rio de Janeiro Olympics',
    medal: 'Olympian',
    position: 'Striker / Poacher',
    myth: 'The Opportunist. Deflections and predatory finishes scored when milliseconds decided historical glory.',
    record: '2016 Rio Olympics • 2014 Asian Games Gold (Incheon) • 2016 Asian Champions Trophy Gold',
    awards: ['Asian Games Gold 2014', '2016 Rio Olympian'],
    district: 'Kodagu'
  }
];

export const CONSTITUTIONAL_OATHS = [
  {
    num: 'I',
    title: 'FOSTER & REGULATE',
    kannada: 'ರಾಜ್ಯಾದ್ಯಂತ ಹಾಕಿ ನಿಯಂತ್ರಣ ಮತ್ತು ಪ್ರೋತ್ಸಾಹ',
    text: 'To foster, promote, regulate and control the game of field hockey throughout the State of Karnataka, safeguarding its traditional dignity and unyielding standards of fair play.'
  },
  {
    num: 'II',
    title: 'CONDUCT PRESTIGIOUS CUPS',
    kannada: 'ಪ್ರತಿಷ್ಠಿತ ಪಂದ್ಯಾವಳಿಗಳ ಆಯೋಜನೆ',
    text: 'To conduct the annual Karnataka State Championships, the historic 92nd Travancore Cup, the D.S. Murthy Memorial Trophy, and the flagship KSHA Super Division League.'
  },
  {
    num: 'III',
    title: 'GRASSROOTS RECONNAISSANCE',
    kannada: 'ಗ್ರಾಮೀಣ ಮತ್ತು ಜಿಲ್ಲಾ ಮಟ್ಟದ ಪ್ರತಿಭೆ ಶೋಧನೆ',
    text: 'To scout, support, and finance emerging talents across all 18 affiliated district units from the misty hills of Coorg to the northern expanses of Belagavi and Bidar.'
  },
  {
    num: 'IV',
    title: 'COLOSSEUM CUSTODIANSHIP',
    kannada: 'ಅಂತಾರಾಷ್ಟ್ರೀಯ ದರ್ಜೆಯ ಸಿಂಥೆಟಿಕ್ ಟರ್ಫ್ ನಿರ್ವಹಣೆ',
    text: 'To maintain an international standard synthetic turf hockey stadium at Langford Town equipped with 1,200 Lux broadcast-ready floodlights and comprehensive athlete recovery suites.'
  },
  {
    num: 'V',
    title: 'PLAYER DIGNITY & CAREERS',
    kannada: 'ಕ್ರೀಡಾಪಟುಗಳ ಉದ್ಯೋಗ ಭದ್ರತೆ ಮತ್ತು ಗೌರವ',
    text: 'To champion athlete economic dignity, securing permanent corporate and governmental employment in public sector undertakings (RWF, Canara Bank, MEG, ASC, Police) for state hockey luminaries.'
  },
  {
    num: 'VI',
    title: 'DISCIPLINARY AMATEUR SANCTITY',
    kannada: 'ಶಿಸ್ತು ಮತ್ತು ಕ್ರೀಡಾ ಮನೋಭಾವದ ರಕ್ಷಣೆ',
    text: 'To arbitrate all disputes impartially, sanction official affiliations, stamp out corruption or malpractice, and uphold the sovereign amateur spirit of the Mysore Societies Act of 1937.'
  }
];

export const DISTRICT_CRADLES: DistrictUnit[] = [
  { id: 1, name: 'Coorg Hockey Association (Madikeri)', kannadaName: 'ಕೊಡಗು ಹಾಕಿ ಸಂಸ್ಥೆ (ಮಡಿಕೇರಿ)', zone: 'Western Ghats / Coorg', established: '1948', headquarters: 'Madikeri', keyTalent: 'Birthplace of 10+ Olympians' },
  { id: 2, name: 'Belgaum District Hockey Association', kannadaName: 'ಬೆಳಗಾವಿ ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ', zone: 'Northern Deccan', established: '1962', headquarters: 'Belagavi', keyTalent: 'Maratha LI Nursery' },
  { id: 3, name: 'Bangalore Urban & Cantonment Units', kannadaName: 'ಬೆಂಗಳೂರು ನಗರ ಮತ್ತು ಕಂಟೋನ್ಮೆಂಟ್ ಘಟಕ', zone: 'Southern Maidan', established: '1937', headquarters: 'Langford Town', keyTalent: 'MEG & ASC Powerhouse' },
  { id: 4, name: 'Bellary District Hockey Association', kannadaName: 'ಬಳ್ಳಾರಿ ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ', zone: 'Central & Hyderabad-K', established: '1971', headquarters: 'Ballari', keyTalent: 'Deccan speed & stamina' },
  { id: 5, name: 'Bijapur District Hockey Association', kannadaName: 'ವಿಜಯಪುರ ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ', zone: 'Northern Deccan', established: '1974', headquarters: 'Vijayapura', keyTalent: 'North Karnataka juniors' },
  { id: 6, name: 'Bagalkot City Sports Club Unit', kannadaName: 'ಬಾಗಲಕೋಟೆ ಸ್ಪೋರ್ಟ್ಸ್ ಕ್ಲಬ್', zone: 'Northern Deccan', established: '1982', headquarters: 'Bagalkot', keyTalent: 'Ghataprabha grassroots' },
  { id: 7, name: 'Chitradurga District Hockey Association', kannadaName: 'ಚಿತ್ರದುರ್ಗ ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ', zone: 'Southern Maidan', established: '1979', headquarters: 'Chitradurga', keyTalent: 'Fortress defensive grit' },
  { id: 8, name: 'Dhyanchand Hockey Club, Tumkur', kannadaName: 'ಧ್ಯಾನ್‌ಚಂದ್ ಹಾಕಿ ಕ್ಲಬ್, ತುಮಕೂರು', zone: 'Southern Maidan', established: '1976', headquarters: 'Tumakuru', keyTalent: 'Midfield tacticians' },
  { id: 9, name: 'Friends Hockey Club, Kalaburgi', kannadaName: 'ಫ್ರೆಂಡ್ಸ್ ಹಾಕಿ ಕ್ಲಬ್, ಕಲಬುರ್ಗಿ', zone: 'Central & Hyderabad-K', established: '1985', headquarters: 'Kalaburagi', keyTalent: 'Kalyana Karnataka stars' },
  { id: 10, name: 'Gulbarga District Hockey Association', kannadaName: 'ಗುಲ್ಬರ್ಗಾ ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ', zone: 'Central & Hyderabad-K', established: '1968', headquarters: 'Gulbarga', keyTalent: 'Regional tournament hub' },
  { id: 11, name: 'Hassan District Hockey Association', kannadaName: 'ಹಾಸನ ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ', zone: 'Western Ghats / Coorg', established: '1975', headquarters: 'Hassan', keyTalent: 'Malnad feeder pipeline' },
  { id: 12, name: 'Haveri District Hockey Association', kannadaName: 'ಹಾವೇರಿ ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ', zone: 'Northern Deccan', established: '1988', headquarters: 'Haveri', keyTalent: 'Cardamom city dragflickers' },
  { id: 13, name: 'Kolar District Hockey Association', kannadaName: 'ಕೋಲಾರ ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ', zone: 'Southern Maidan', established: '1965', headquarters: 'KGF / Kolar', keyTalent: 'Gold Fields cantonment teams' },
  { id: 14, name: 'Major Dhyanchand H.C., Dharwad', kannadaName: 'ಮೇಜರ್ ಧ್ಯಾನ್‌ಚಂದ್ ಕ್ಲಬ್, ಧಾರವಾಡ', zone: 'Northern Deccan', established: '1970', headquarters: 'Dharwad', keyTalent: 'University champions' },
  { id: 15, name: 'Om Sai Hockey Club, Dharwad', kannadaName: 'ಓಂ ಸಾಯಿ ಹಾಕಿ ಕ್ಲಬ್, ಧಾರವಾಡ', zone: 'Northern Deccan', established: '1992', headquarters: 'Hubballi-Dharwad', keyTalent: 'Cadet Academy training' },
  { id: 16, name: 'Sahyadri Hockey Club, Shimoga', kannadaName: 'ಸಹ್ಯಾದ್ರಿ ಹಾಕಿ ಕ್ಲಬ್, ಶಿವಮೊಗ್ಗ', zone: 'Western Ghats / Coorg', established: '1980', headquarters: 'Shivamogga', keyTalent: 'Tunga river wingers' },
  { id: 17, name: 'Hanuman Blessing Sports Club', kannadaName: 'ಹನುಮಾನ್ ಬ್ಲೆಸ್ಸಿಂಗ್ ಸ್ಪೋರ್ಟ್ಸ್ ಕ್ಲಬ್', zone: 'Southern Maidan', established: '1984', headquarters: 'Mandya / Mysore', keyTalent: 'Forward line finishers' },
  { id: 18, name: 'Raichur District Hockey Association', kannadaName: 'ರಾಯಚೂರು ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ', zone: 'Central & Hyderabad-K', established: '1986', headquarters: 'Raichur', keyTalent: 'Doab endurance specialists' }
];

export const CLUB_FACILITIES: ClubFacility[] = [
  {
    id: 'billiards-snooker',
    title: '8 Championship Billiards & Snooker Tables',
    kannadaTitle: '೮ ಚಾಂಪಿಯನ್‌ಶಿಪ್ ಬಿಲಿಯರ್ಡ್ಸ್ & ಸ್ನೂಕರ್ ಟೇಬಲ್‌ಗಳು',
    highlight: 'Classic English slate tables draped in Strachan 6811 tournament cloth',
    description: 'The storied Billiards Room has witnessed legendary battles since 1937. With vintage teak scoreboard markers and tournament-calibrated lighting, it serves as the evening gathering hall for Olympian veterans and club patrons.',
    specs: ['8 Full-size 12ft Tables', 'Riley & Wiraka slate beds', 'Strachan 6811 Gold cloth', 'Private Cue Locker Vaults'],
    category: 'Club Wing'
  },
  {
    id: 'badminton-courts',
    title: '3 Indoor Wooden Badminton Courts',
    kannadaTitle: '೩ ಒಳಾಂಗಣ ಮರದ ಬ್ಯಾಡ್ಮಿಂಟನ್ ಕೋರ್ಟ್‌ಗಳು',
    highlight: 'Shock-absorbent Canadian Maple hardwood flooring with anti-glare illumination',
    description: 'Championship-standard wooden courts dedicated to member fitness, inter-club tournaments, and morning high-intensity drills with professional coaching academies.',
    specs: ['3 BWF-Compliant Courts', 'Cushioned Timber Subfloor', 'LED Shadow-free Fixtures', 'Spectator Balcony Seating'],
    category: 'Sports Arena'
  },
  {
    id: 'olympic-recovery-pool',
    title: 'Olympic Swimming Pool & Hydrotherapy Sanctuary',
    kannadaTitle: 'ಈಜುಕೊಳ ಮತ್ತು ಹೈಡ್ರೋಥೆರಪಿ ಸೆಂಟರ್',
    highlight: 'Semi-Olympic temperature-stabilized lap pool with hydrotherapy massage jets',
    description: 'Engineered specifically for athlete muscular recovery after 60-minute turf warfare, paired with dedicated leisure lanes for club members and children’s training academies.',
    specs: ['25m Lap Pool (6 Lanes)', 'Sub-surface Hydro Jets', 'Automated UV Filtration', 'Sun Lounger Deck'],
    category: 'Wellness & Recovery'
  },
  {
    id: 'rehab-steam-sauna',
    title: 'Sports Injury & Physiotherapy Clinic with Steam/Sauna',
    kannadaTitle: 'ಸ್ಪೋರ್ಟ್ಸ್ ಇಂಜುರಿ & ಫಿಸಿಯೋಥೆರಪಿ ಕ್ಲಿನಿಕ್',
    highlight: 'Cryotherapy chambers, deep-tissue sports massage, and Finnish pine sauna suites',
    description: 'Staffed by resident sports medicine physiotherapists who attend to both national team squad members and private club patrons seeking rehabilitation and vitality.',
    specs: ['Cryotherapy Ice Plunges', 'Nordic Pine Dry Sauna', 'Eucalyptus Steam Vault', 'Electro-therapy Units'],
    category: 'Wellness & Recovery'
  },
  {
    id: 'gentlemens-dining',
    title: 'The 1937 Pavilion Dining & Olympian Lounge',
    kannadaTitle: '೧೯೩೭ ಪೆವಿಲಿಯನ್ ಡೈನಿಂಗ್ ಮತ್ತು ಲೌಂಜ್',
    highlight: 'Heritage colonial bar counter, vintage teak paneling, and field-view terrace',
    description: 'Overlooking the floodlit blue turf, the Member Pavilion offers signature Anglo-Indian and Karavali cuisines, rare single malts, and an intimate museum gallery honoring state captains.',
    specs: ['Field-View Verandah', 'Private Boardroom for 20', 'Centenary Archives Display', 'Member-Only Access'],
    category: 'Club Wing'
  }
];

export const RECIPROCAL_CLUBS: ReciprocalClub[] = [
  { name: 'Bowring Institute', city: 'Bengaluru', state: 'Karnataka', founded: '1868', privileges: 'Full dining, tennis, and heritage lounge privileges' },
  { name: 'Century Club', city: 'Bengaluru', state: 'Karnataka', founded: '1917', privileges: 'Sir M. Visvesvaraya founded estate access' },
  { name: 'Madras Cricket Club (MCC)', city: 'Chennai', state: 'Tamil Nadu', founded: '1846', privileges: 'Chepauk precinct access, squash, billiards & dining' },
  { name: 'Secunderabad Club', city: 'Hyderabad', state: 'Telangana', founded: '1878', privileges: 'Sailing annex, residential chambers, colonial lawns' },
  { name: 'Calcutta Cricket & Football Club (CC&FC)', city: 'Kolkata', state: 'West Bengal', founded: '1792', privileges: 'World’s second oldest cricket club sporting access' },
  { name: 'Delhi Gymkhana Club', city: 'New Delhi', state: 'Delhi NCR', founded: '1913', privileges: 'Safdarjung dining, grass tennis courts, guest rooms' }
];

export const LEAGUE_STANDINGS = [
  { pos: 1, club: 'ASC Centre & College', played: 10, won: 8, drawn: 2, lost: 0, gf: 34, ga: 11, gd: '+23', pts: 26, form: ['W', 'W', 'W', 'D', 'W'] },
  { pos: 2, club: 'Rail Wheel Factory (RWFSA)', played: 10, won: 7, drawn: 2, lost: 1, gf: 29, ga: 14, gd: '+15', pts: 23, form: ['W', 'W', 'D', 'W', 'W'] },
  { pos: 3, club: 'MEG & Centre (Sappers)', played: 10, won: 6, drawn: 3, lost: 1, gf: 25, ga: 13, gd: '+12', pts: 21, form: ['D', 'W', 'W', 'W', 'D'] },
  { pos: 4, club: 'Canara Bank Hockey Team', played: 10, won: 5, drawn: 2, lost: 3, gf: 22, ga: 17, gd: '+5', pts: 17, form: ['L', 'W', 'D', 'W', 'W'] },
  { pos: 5, club: 'Fortis Hockey Club', played: 10, won: 4, drawn: 2, lost: 4, gf: 18, ga: 19, gd: '-1', pts: 14, form: ['W', 'L', 'L', 'W', 'D'] },
  { pos: 6, club: 'Maratha Light Infantry RC', played: 10, won: 3, drawn: 3, lost: 4, gf: 16, ga: 20, gd: '-4', pts: 12, form: ['D', 'D', 'L', 'W', 'L'] },
];

export const FIXTURES_DATA = [
  {
    cup: 'KSHA Super Division League',
    match: 'ASC Centre vs Rail Wheel Factory',
    date: 'Saturday, 17:30 IST',
    pitch: 'Main Pitch 1 · Under 1,200 Lux Floodlights',
    round: 'Super-6 Round Robin Clash',
    badge: 'LIVE ON STADIUM HUD'
  },
  {
    cup: '92nd Travancore Cup',
    match: 'MEG Sappers vs Canara Bank',
    date: 'Sunday, 16:00 IST',
    pitch: 'Main Pitch 1 · Langford Town',
    round: 'Quarter-Final 2',
    badge: 'HERITAGE TROPHY'
  },
  {
    cup: 'D. S. Murthy Memorial Cup',
    match: 'Coorg XI vs Bangalore City HC',
    date: 'Wednesday, 15:30 IST',
    pitch: 'Turf Arena B',
    round: 'Semi-Final 1',
    badge: 'STATE MEMORIAL'
  }
];

export const EXECUTIVE_COUNCIL = [
  { designation: 'Patron', name: 'Sri N. A. Haris', meta: 'Hon’ble Member of Legislative Assembly, Karnataka' },
  { designation: 'President', name: 'Sri Sushil Kumar Gupta', meta: 'Eminent Sports Administrator & Industrialist' },
  { designation: 'Hon. Secretary', name: 'Sri K. Krishnamurthy', meta: 'Veteran State Hockey Administrator' },
  { designation: 'Hon. Treasurer', name: 'Sri G. Suresh', meta: 'Chartered Accounting & Financial Governance' },
  { designation: 'Senior Vice President', name: 'Sri P. N. Divakar', meta: 'State Championship Director' },
  { designation: 'Senior Vice President', name: 'Smt. M. K. Devarajamma', meta: 'Women’s Hockey Development Committee' }
];

export const RED_WIRE_NEWS = [
  'LATEST CIRCULAR: Membership admission fee revised from ₹3.50L to ₹5.00L (+18% GST) effective 1st Jan 2027.',
  'AGM 2026 RESOLUTION: Annual subscription set at ₹3,000 + ₹600 Sports Development Fund (+GST = ₹4,248) due by 30 June.',
  'PARTY HALLS OPEN: Fully air-conditioned venues, roof terrace, and skywalk halls available with updated 2026 tariff cards.',
  'HONOURED LEGEND: Asish Kumar Ballal bestowed with Karnataka Rajyotsava Award on 1 November 2025.',
  'FIH GLOBAL RECOGNITION: R.V. Raghu Prasad officiates 200th international match; nominated FIH Umpire of the Year 2025.'
];

export const ARJUNA_AWARDEES_DATA: ArjunaAwardee[] = [
  { sNo: 1, name: "Padmashri Dr. M. P. Ganesh", name_kn: "ಪದ್ಮಶ್ರೀ ಡಾ. ಎಂ. ಪಿ. ಗಣೇಶ್", year: 1973, event: "Hockey", category: "Hockey" },
  { sNo: 2, name: "B. P. Govinda", name_kn: "ಬಿ. ಪಿ. ಗೋವಿಂದ", year: 1975, event: "Hockey", category: "Hockey" },
  { sNo: 3, name: "Joaquim Carvalho", name_kn: "ಜೋಕಿಂ ಕಾರ್ವಾಲೋ", year: 1986, event: "Hockey", category: "Hockey" },
  { sNo: 4, name: "Jude Felix", name_kn: "ಜ್ಯೂಡ್ ಫೆಲಿಕ್ಸ್", year: 1994, event: "Hockey", category: "Hockey" },
  { sNo: 5, name: "Ashish Ballal", name_kn: "ಆಶಿಶ್ ಬಲ್ಲಾಳ್", year: 1996, event: "Hockey", category: "Hockey" },
  { sNo: 6, name: "V. R. Raghunath", name_kn: "ವಿ. ಆರ್. ರಘುನಾಥ್", year: 2016, event: "Hockey", category: "Hockey" },
  { sNo: 7, name: "S. V. Sunil", name_kn: "ಎಸ್. ವಿ. ಸುನಿಲ್", year: 2017, event: "Hockey", category: "Hockey" },
  { sNo: 8, name: "Honappa Gowda C.", name_kn: "ಹೊನ್ನಪ್ಪ ಗೌಡ ಸಿ.", year: 2000, event: "Kabaddi", category: "Kabaddi" },
  { sNo: 9, name: "Ramesh B.C.", name_kn: "ರಮೇಶ್ ಬಿ.ಸಿ.", year: 2011, event: "Kabaddi", category: "Kabaddi" },
  { sNo: 10, name: "Mahadeva M.", name_kn: "ಮಹದೇವ ಎಂ.", year: 1992, event: "Para Olympics", category: "Para Olympics" },
  { sNo: 11, name: "Padmashri Girisha H.N.", name_kn: "ಪದ್ಮಶ್ರೀ ಗಿರೀಶ ಹೆಚ್.ಎನ್.", year: 2014, event: "Para Olympics", category: "Para Olympics" }
];

export const INTERNATIONAL_UMPIRES_DATA: InternationalUmpire[] = [
  { sNo: 1, name: "Kannan Krishnamurthy", name_kn: "ಕಣ್ಣನ್ ಕೃಷ್ಣಮೂರ್ತಿ", cadre: "International Hockey Umpire", cadre_kn: "ಅಂತಾರಾಷ್ಟ್ರೀಯ ಹಾಕಿ ಅಂಪೈರ್" },
  { sNo: 2, name: "A. E. Venu Uthappa", name_kn: "ಎ. ಇ. ವೇಣು ಉತ್ತಪ್ಪ", cadre: "International Hockey Umpire", cadre_kn: "ಅಂತಾರಾಷ್ಟ್ರೀಯ ಹಾಕಿ ಅಂಪೈರ್" },
  { sNo: 3, name: "A. B. Palangappa", name_kn: "ಎ. ಬಿ. ಪಾಲಂಗಪ್ಪ", cadre: "International Hockey Umpire", cadre_kn: "ಅಂತಾರಾಷ್ಟ್ರೀಯ ಹಾಕಿ ಅಂಪೈರ್" },
  { sNo: 4, name: "R. V. Raghu Prasad", name_kn: "ಆರ್. ವಿ. ರಘು ಪ್ರಸಾದ್", cadre: "FIH World Panel Umpire (200+ Caps, 3 Olympics)", cadre_kn: "ಎಫ್.ಐ.ಎಚ್ ವಿಶ್ವ ಪ್ಯಾನೆಲ್ ಅಂಪೈರ್" }
];

export const PARTY_HALL_CHARGES_DATA: PartyHallCharge[] = [
  { name: "Green Party Hall (1 or 2)", capacity: "20 Pax", purpose: "Get-togethers / Meetings", baseCharge: 2000, gst: 360, cleaning: 0, total: 2360 },
  { name: "Green Party Hall (1 & 2 Combined)", capacity: "40 Pax", purpose: "Family Gatherings / Lunches", baseCharge: 3000, gst: 570, cleaning: 0, total: 3570 },
  { name: "Ground Floor A/C Party Hall", capacity: "50 Pax", purpose: "Conferences / Receptions", baseCharge: 4000, gst: 720, cleaning: 0, total: 4720 },
  { name: "2nd Floor A/C Party Hall (Get-Together)", capacity: "60-70 Pax", purpose: "Normal Get-Together", baseCharge: 7000, gst: 1260, cleaning: 500, total: 8760 },
  { name: "2nd Floor A/C Party Hall (Birthday)", capacity: "60-70 Pax", purpose: "Birthday Celebrations", baseCharge: 10000, gst: 1800, cleaning: 500, total: 12300 },
  { name: "Roof Terrace Party Hall (<100 Pax)", capacity: "Up to 100 Pax", purpose: "Terrace Dinner / Evening Social", baseCharge: 8000, gst: 1440, cleaning: 500, total: 9940 },
  { name: "Roof Terrace Party Hall (>100 Pax)", capacity: "100-250 Pax", purpose: "Grand Evening Get-Together", baseCharge: 10000, gst: 1800, cleaning: 500, total: 12300 },
  { name: "Roof Terrace Grand Wedding / Engagement", capacity: "250+ Pax", purpose: "Marriage / Mehendi / Reception", baseCharge: 25000, gst: 4500, cleaning: 500, total: 30000 }
];

export const CLUB_OPERATIONS_DATA = {
  timings: {
    forenoon: { session: "11:30 AM – 3:30 PM", lastOrder: "2:45 PM", vacate: "4:00 PM" },
    evening: { session: "6:30 PM – 11:00 PM", lastOrder: "10:30 PM", vacate: "11:15 PM" }
  },
  subscription: {
    annualFee: 3000,
    sportsDevFund: 600,
    gstRate: 0.18,
    totalAnnual: 4248,
    dueDate: "30 June of every financial year",
    dependentAnnual: 1416
  },
  admission: {
    currentFee: "₹3,50,000 + 18% GST (Total: ₹4,13,000)",
    revisedFee: "₹5,00,000 + 18% GST (Total: ₹5,90,000)",
    effectiveDate: "1 January 2027",
    migrationFee: "₹2,00,000 + GST (LA to LM, capped at 100 members)"
  },
  coverCharge: {
    amount: "₹1,500 per 6-month cycle",
    minSpend: "₹1,200 (April–September & October–March)",
    exemptions: "Members aged 65+, residing outside Bengaluru, service personnel posted outside Bengaluru, dependents"
  },
  contacts: [
    { section: "Hon. Secretary", contact: "Sri K. Krishnamurthy", phone: "98452 78847" },
    { section: "Shuttle Badminton", contact: "Sri A.N. Somaiah", phone: "99012 34234" },
    { section: "Billiards / Snooker", contact: "Sri Md. Naseeruddin / Domnic Savio", phone: "99458 29416" },
    { section: "Party Halls & Accounts", contact: "Sri R. Viswanath Singh", phone: "99809 05385" },
    { section: "Guest Rooms", contact: "Sri A. Francis", phone: "98865 16936" },
    { section: "Canteen & Catering", contact: "Sri Siddaraju", phone: "99010 74133" },
    { section: "Sports Massage / Sauna", contact: "Sri Ashish Kuswaha", phone: "88924 05403" },
    { section: "Sports Injury / Rehab", contact: "Sri Vivek Ramakrishna", phone: "99161 11227" }
  ]
};

