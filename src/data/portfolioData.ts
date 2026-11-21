export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  detail: string;
}

export type ProjectIconType = 'hardware' | 'design' | 'event' | 'social' | 'system';

export interface ProjectItem {
  id: number;
  title: string;
  tag: string;
  period: string;
  tools: string[];
  desc: string;
  accent: string;
  icon: ProjectIconType;
}

export interface CredentialItem {
  title: string;
  subtitle: string;
  year: string;
}

export type DockToolId =
  | 'figma'
  | 'canva'
  | 'capcut'
  | 'fritzing'
  | 'kodular'
  | 'firebase'
  | 'fusion'
  | 'office';

export interface DockTool {
  id: DockToolId;
  name: string;
  role: string;
  color: string;
  relatedProjectIndex?: number;
}

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#works', label: 'Works' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Connect' },
] as const;

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'mtm-2026',
    role: 'PIC MEDIKRAF Kelompok 6 Mahasiswa Teknik Mengabdi (MTM)',
    org: 'Fakultas Teknik UB',
    period: '2026',
    detail:
      'Memimpin konsep publikasi, dokumentasi, branding visual, dan konten edukatif program pengabdian masyarakat desa binaan.',
  },
  {
    id: 'lab-iot-2026',
    role: 'Anggota Divisi MEDIKRAF Laboratorium Internet of Things (IoT)',
    org: 'Teknik Elektro UB',
    period: '2026',
    detail:
      'Memproduksi aset visual Instagram resmi Lab IoT serta merancang desain grafis jaket resmi asisten laboratorium.',
  },
  {
    id: 'hme-sosmed-2026',
    role: 'Anggota Sub-divisi Sosial Media MEDIKRAF HME',
    org: 'Himpunan Mahasiswa Teknik Elektro UB',
    period: '2026',
    detail:
      'Menyusun content planning, menganalisis tren digital untuk meningkatkan reach, dan mengemas informasi teknik bagi publik.',
  },
  {
    id: 'kendali-2026',
    role: 'Anggota Divisi PDD Kepanitiaan KENDALI',
    org: 'Teknik Elektro UB',
    period: '2026',
    detail:
      'Memproduksi konten harian Instagram Story serta mendokumentasikan rangkaian acara secara real-time.',
  },
  {
    id: 'hme-desain-2025',
    role: 'Anggota Sub-divisi Desain MEDIKRAF HME',
    org: 'Himpunan Mahasiswa Teknik Elektro UB',
    period: '2025 – 2026',
    detail:
      'Merancang media visual branding organisasi dan menyederhanakan informasi teknik yang rumit menjadi konten visual informatif.',
  },
  {
    id: 'ponsel-2025',
    role: 'PIC Sub-divisi Desain PDD PONSEL 2025',
    org: 'Pekan Olahraga dan Seni Teknik Elektro UB',
    period: '2025',
    detail:
      'Mengkoordinasikan tim desain dan quality control seluruh kebutuhan visual (banner, feed Instagram, ID card) bertema olahraga & seni.',
  },
  {
    id: 'pengmas-2025',
    role: 'Pemateri Internet of Things (IoT) — PENGMAS',
    org: 'Teknik Elektro UB di SMAN 4 Malang',
    period: '2025',
    detail:
      'Merangkai instalasi hardware alat peraga IoT dan membawakan materi presentasi edukasi interaktif untuk siswa SMA.',
  },
  {
    id: 'educomm-2023',
    role: 'Anggota Divisi Acara SMAMDA EDUCOMM',
    org: 'SMAS Muhammadiyah 2 Surabaya',
    period: '2023',
    detail:
      'Merancang alur kegiatan, penjadwalan lomba, rundown acara, serta koordinasi peserta dan juri.',
  },
  {
    id: 'fortasi-2022',
    role: 'Pendamping Kelompok (PINGPOK) FORTASI',
    org: 'SMAS Muhammadiyah 2 Surabaya',
    period: '2022',
    detail:
      'Mendampingi siswa baru selama masa orientasi serta menjadi penghubung komunikasi antara panitia inti dan peserta.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: 'Instalasi Hardware & Edukasi IoT',
    tag: 'IOT & EDUCATION',
    period: '2025',
    tools: ['Fritzing', 'Firebase', 'IoT Hardware'],
    desc: 'Merangkai, menguji, dan menyiapkan instalasi perangkat keras IoT sebagai alat peraga utama simulasi praktik bagi siswa SMAN 4 Malang.',
    accent: '#B82025',
    icon: 'hardware',
  },
  {
    id: 2,
    title: 'Apparel & Branding Lab IoT UB',
    tag: 'BRAND & APPAREL',
    period: '2026',
    tools: ['Figma', 'Canva'],
    desc: 'Merancang konsep dan desain grafis jaket resmi asisten Laboratorium IoT UB serta aset konten Instagram resmi laboratorium.',
    accent: '#00C4CC',
    icon: 'design',
  },
  {
    id: 3,
    title: 'Identitas Visual PONSEL 2025',
    tag: 'EVENT DESIGN',
    period: '2025',
    tools: ['Figma', 'Canva', 'CapCut'],
    desc: 'Memimpin sub-divisi desain untuk memproduksi banner, feed Instagram, dan ID card Pekan Olahraga & Seni Teknik Elektro UB.',
    accent: '#E6B84C',
    icon: 'event',
  },
  {
    id: 4,
    title: 'Kampanye Digital HME & MTM 2026',
    tag: 'SOCIAL MEDIA & PR',
    period: '2026',
    tools: ['Canva', 'CapCut', 'Figma'],
    desc: 'Mengelola strategi content planning, penyederhanaan informasi teknik bagi publik, dan dokumentasi lapangan desa binaan.',
    accent: '#673AB7',
    icon: 'social',
  },
  {
    id: 5,
    title: 'Prototipe Sistem IoT & Aplikasi',
    tag: 'IOT SYSTEM',
    period: '2025–2026',
    tools: ['Fritzing', 'Kodular', 'Firebase', 'Autodesk Fusion'],
    desc: 'Perancangan skematik rangkaian mikrokontroler, pemodelan 3D CAD, dan integrasi aplikasi mobile dengan database real-time.',
    accent: '#FFA000',
    icon: 'system',
  },
];

export const EDUCATION: CredentialItem[] = [
  {
    title: 'Institut Teknologi PLN',
    subtitle: 'S1 Teknik Informatika',
    year: '2026 – Sekarang',
  },
  {
    title: 'Universitas Brawijaya',
    subtitle: 'S1 Teknik Elektro',
    year: '2024 – 2026',
  },
  {
    title: 'SMAS Muhammadiyah 2 Surabaya',
    subtitle: 'MIPA',
    year: '2021 – 2024',
  },
];

export const ACHIEVEMENTS: CredentialItem[] = [
  {
    title: 'Medali Perunggu Bidang Kimia',
    subtitle: 'Olimpiade Sains Airlangga (OSA)',
    year: '2024',
  },
  {
    title: 'Peraih Diploma Perunggu (Mixed Youth Choir)',
    subtitle: '7th FESPA Universitas Surabaya',
    year: '2022',
  },
];

export const SOFT_SKILLS: string[] = [
  'Creativity & Innovation',
  'Analytical Skills',
  'Critical Thinking',
  'Teamwork',
  'Adaptive & Proactive',
  'Discipline & Responsibility',
];

export const DOCK_TOOLS: DockTool[] = [
  { id: 'figma', name: 'Figma', role: 'UI & Graphic Design', color: '#1E1E1E', relatedProjectIndex: 1 },
  { id: 'canva', name: 'Canva', role: 'Visual Content', color: '#00C4CC', relatedProjectIndex: 2 },
  { id: 'capcut', name: 'CapCut', role: 'Video Editing', color: '#111111', relatedProjectIndex: 3 },
  { id: 'fritzing', name: 'Fritzing', role: 'IoT Schematic', color: '#B82025', relatedProjectIndex: 0 },
  { id: 'kodular', name: 'Kodular', role: 'Mobile App Builder', color: '#673AB7', relatedProjectIndex: 4 },
  { id: 'firebase', name: 'Firebase', role: 'IoT Cloud & DB', color: '#FFA000', relatedProjectIndex: 0 },
  { id: 'fusion', name: 'Autodesk Fusion', role: '3D CAD Modeling', color: '#FF6B00', relatedProjectIndex: 4 },
  { id: 'office', name: 'Microsoft Office', role: 'Docs & Presentation', color: '#D83B01' },
];
