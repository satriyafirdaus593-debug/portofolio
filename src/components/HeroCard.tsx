import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface HeroCardProps {
  onMonogramClick: () => void;
}

export function HeroCard({ onMonogramClick }: HeroCardProps) {
  const [litCount, setLitCount] = useState(0);

  useEffect(() => {
    const timers: number[] = [];
    for (let i = 1; i <= 7; i++) {
      timers.push(
        window.setTimeout(() => {
          setLitCount(i);
        }, i * 130)
      );
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.25, 0.8, 0.25, 1] }}
      className="relative mt-[76px] rounded-[28px] border-2 border-mustard bg-gradient-to-b from-mustard/35 to-mustard/12 backdrop-blur-md px-5 sm:px-9 pt-[68px] pb-[48px] hud-shadow text-center"
    >
      {/* Monogram Paperclip top-left */}
      <button
        type="button"
        onClick={onMonogramClick}
        title="Satriya Firdaus Initials"
        aria-label="Satriya Firdaus Monogram"
        className="group absolute -top-[18px] left-5 sm:left-7 z-15 flex items-center gap-1.5 cursor-pointer bg-transparent border-0 p-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mustard-bright rounded-full"
      >
        <svg
          width="24"
          height="42"
          viewBox="0 0 24 42"
          fill="none"
          className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]"
          aria-hidden="true"
        >
          <path
            d="M7 12V30C7 34 10 37 14 37C18 37 21 34 21 30V8C21 4 17 1 12 1C7 1 3 4 3 8V32"
            stroke="#E6B84C"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <div className="font-pixel w-[38px] h-[38px] rounded-full bg-ink border-2 border-mustard-bright text-mustard-bright flex items-center justify-center text-[13px] font-bold shadow-[0_4px_10px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
          SF
        </div>
      </button>

      {/* Center Avatar Badge */}
      <div className="absolute -top-[68px] left-1/2 -translate-x-1/2 z-20">
        <div className="animate-rotate-arc absolute -inset-[10px] rounded-full border-2 border-dashed border-mustard pointer-events-none" />
        <div className="absolute top-[10px] -right-[12px] w-3.5 h-3.5 rounded-full bg-mustard-bright shadow-[0_0_12px_#F2C963]" />
        <div className="animate-idle-float relative w-[136px] h-[136px] rounded-full bg-mustard border-4 border-olive shadow-[0_8px_24px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden">
          <svg viewBox="0 0 120 120" width="118" height="118" role="img" aria-label="Ilustrasi Avatar Satriya Firdaus">
            <defs>
              <linearGradient id="avatarSkin" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFD4A3" />
                <stop offset="100%" stopColor="#EAA672" />
              </linearGradient>
              <linearGradient id="avatarJacket" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2D362E" />
                <stop offset="100%" stopColor="#1A201A" />
              </linearGradient>
            </defs>
            <rect width="120" height="120" fill="#E6B84C" />
            <path
              d="M10 20 H30 V40 M90 20 H70 V40 M20 90 H40 V75 M100 90 H80 V75"
              stroke="#9E7B28"
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M22 120 C22 96 40 86 60 86 C80 86 98 96 98 120 Z" fill="url(#avatarJacket)" />
            <path d="M50 86 L60 102 L70 86 Z" fill="#F8F6F0" />
            <path d="M42 88 L52 110 M78 88 L68 110" stroke="#E6B84C" strokeWidth="2" />
            <rect x="52" y="74" width="16" height="16" fill="#EAA672" rx="3" />
            <path
              d="M38 52 C38 34 50 28 60 28 C70 28 82 34 82 52 C82 68 72 76 60 76 C48 76 38 68 38 52 Z"
              fill="url(#avatarSkin)"
            />
            <path
              d="M36 46 C35 32 45 20 60 20 C72 20 84 27 84 42 C81 37 74 34 68 35 C60 36 52 32 45 36 C40 39 38 43 36 46 Z"
              fill="#1C1F1C"
            />
            <rect x="42" y="46" width="14" height="10" rx="3" fill="none" stroke="#1C1F1C" strokeWidth="2.2" />
            <rect x="64" y="46" width="14" height="10" rx="3" fill="none" stroke="#1C1F1C" strokeWidth="2.2" />
            <path d="M56 50 H64" stroke="#1C1F1C" strokeWidth="2" />
            <circle cx="49" cy="51" r="1.8" fill="#1C1F1C" />
            <circle cx="71" cy="51" r="1.8" fill="#1C1F1C" />
            <path d="M54 64 Q60 69 66 64" stroke="#874720" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Top Left Retro Loading Bar */}
      <div className="absolute top-6 left-4 sm:left-7 text-left">
        <div className="font-pixel text-[10px] text-mustard-bright tracking-[1px] mb-1">LOADING</div>
        <div className="flex gap-[3px]" aria-label="Progress 70 persen">
          {Array.from({ length: 10 }).map((_, index) => {
            const isLit = index < litCount;
            return (
              <div
                key={index}
                className={`w-[6px] h-[10px] rounded-[1px] transition-colors duration-200 ${
                  isLit ? 'bg-cream shadow-[0_0_6px_rgba(248,246,240,0.7)]' : 'bg-cream/20'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Top Right Greeting */}
      <div className="absolute top-4 sm:top-5 right-4 sm:right-7 text-right text-[10px] sm:text-[11px] leading-[1.4] bg-ink/60 border border-mustard/20 px-3 py-1.5 rounded-[10px] text-cream">
        Hi, I&apos;m <strong className="font-bold">Satriya</strong> 👋
        <br />
        <span className="text-mustard-bright">Salam kenal!</span>
      </div>

      {/* Centered Hero Title */}
      <div className="mt-8 sm:mt-6 inline-block relative">
        <div className="animate-bob-mascot absolute -top-6 -right-7" aria-hidden="true">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <path d="M6 5 L12 2 L18 5 L12 7 Z" fill="#F2C963" />
            <circle cx="12" cy="2" r="1.5" fill="#E6B84C" />
            <rect x="4" y="7" width="16" height="12" rx="3" fill="#1C1F1C" stroke="#F2C963" strokeWidth="1.5" />
            <rect x="7" y="10" width="3" height="3" fill="#00E5FF" />
            <rect x="14" y="10" width="3" height="3" fill="#00E5FF" />
            <path d="M9 15 H15" stroke="#F2C963" strokeWidth="1.5" />
          </svg>
        </div>

        <h1 className="text-[clamp(48px,8.5vw,84px)] leading-none text-cream tracking-[-1px]">
          <span className="font-serif font-bold italic">Port</span>
          <span className="font-pixel text-mustard-bright text-[0.9em] ml-0.5 [text-shadow:0_4px_18px_rgba(242,201,99,0.4)]">
            folio
          </span>
        </h1>
        <div className="font-pixel text-[12px] sm:text-[13px] text-mustard-bright mt-1.5 tracking-[1px]">
          IoT &amp; DESIGN 2026 ←
        </div>
      </div>

      {/* Bio Copy */}
      <p className="max-w-[62ch] mx-auto mt-5 mb-8 text-[14px] leading-[1.7] text-[#E6E8E4] font-normal">
        Mahasiswa S1 Teknik Informatika Institut Teknologi PLN dengan minat mendalam dalam bidang Internet of Things
        (IoT), desain visual, dan public relations. Terampil merancang sistem berbasis IoT menggunakan Fritzing,
        Kodular, dan Firebase serta mengolah media visual dengan Figma, Canva, dan CapCut.
      </p>

      {/* Bottom Overlapping Mustard Pill */}
      <a
        href="#experience"
        className="hero-pill-shadow absolute -bottom-[22px] left-1/2 -translate-x-1/2 bg-mustard hover:bg-mustard-bright text-ink font-extrabold text-[11px] sm:text-[13px] px-5 sm:px-7 py-2.5 rounded-full whitespace-nowrap tracking-[0.4px] z-10 transition-all duration-150 active:translate-y-[3px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
      >
        Satriya Firdaus | IoT &amp; Visual Designer
      </a>
    </motion.section>
  );
}
