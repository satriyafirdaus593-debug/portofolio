import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS, type ProjectIconType, type ProjectItem } from '../data/portfolioData';

interface ProjectCoverflowProps {
  activeIndex: number;
  isModalOpen: boolean;
  onChangeIndex: (next: number) => void;
  onSelectProject: (project: ProjectItem) => void;
}

function ProjectArtSVG({ iconType, accent }: { iconType: ProjectIconType; accent: string }) {
  if (iconType === 'hardware') {
    return (
      <svg viewBox="0 0 100 80" className="w-full h-full" aria-hidden="true">
        <rect x="20" y="20" width="60" height="40" rx="4" fill="#2E3830" stroke={accent} strokeWidth="2" />
        <circle cx="35" cy="40" r="6" fill={accent} />
        <circle cx="50" cy="40" r="4" fill="#F2C963" />
        <circle cx="65" cy="40" r="4" fill="#00E5FF" />
        <path
          d="M20 30 H10 M20 40 H10 M20 50 H10 M80 30 H90 M80 40 H90 M80 50 H90"
          stroke="#F8F6F0"
          strokeWidth="2"
        />
      </svg>
    );
  }
  if (iconType === 'design') {
    return (
      <svg viewBox="0 0 100 80" className="w-full h-full" aria-hidden="true">
        <path
          d="M30 25 C30 25 50 15 70 25 C70 35 60 45 50 45 C40 45 30 35 30 25 Z"
          fill={accent}
          opacity="0.8"
        />
        <rect x="35" y="30" width="30" height="36" rx="4" fill="#252D26" stroke="#F8F6F0" strokeWidth="1.5" />
        <circle cx="50" cy="48" r="6" fill="#F2C963" />
      </svg>
    );
  }
  if (iconType === 'event') {
    return (
      <svg viewBox="0 0 100 80" className="w-full h-full" aria-hidden="true">
        <polygon
          points="50,15 62,38 88,38 67,54 75,78 50,62 25,78 33,54 12,38 38,38"
          fill="none"
          stroke={accent}
          strokeWidth="2"
        />
        <circle cx="50" cy="45" r="8" fill="#F2C963" />
      </svg>
    );
  }
  if (iconType === 'social') {
    return (
      <svg viewBox="0 0 100 80" className="w-full h-full" aria-hidden="true">
        <rect x="25" y="16" width="50" height="48" rx="8" fill="#1C1F1C" stroke={accent} strokeWidth="2" />
        <circle cx="50" cy="40" r="12" fill="none" stroke="#F2C963" strokeWidth="2" />
        <circle cx="65" cy="26" r="3" fill="#F8F6F0" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 80" className="w-full h-full" aria-hidden="true">
      <rect x="18" y="24" width="30" height="32" rx="4" fill="#252D26" stroke="#F2C963" strokeWidth="1.5" />
      <rect x="52" y="24" width="30" height="32" rx="4" fill="#252D26" stroke={accent} strokeWidth="1.5" />
      <path d="M48 40 H52" stroke="#F8F6F0" strokeWidth="2" />
      <circle cx="33" cy="40" r="4" fill="#00E5FF" />
      <circle cx="67" cy="40" r="4" fill="#F2C963" />
    </svg>
  );
}

export function ProjectCoverflow({
  activeIndex,
  isModalOpen,
  onChangeIndex,
  onSelectProject,
}: ProjectCoverflowProps) {
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number>(0);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth <= 640);
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        onChangeIndex(Math.max(0, activeIndex - 1));
      } else if (e.key === 'ArrowRight') {
        onChangeIndex(Math.min(PROJECTS.length - 1, activeIndex + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, isModalOpen, onChangeIndex]);

  const stepX = isMobile ? 85 : 120;
  const farStepX = isMobile ? 150 : 215;

  const goPrev = () => onChangeIndex(Math.max(0, activeIndex - 1));
  const goNext = () => onChangeIndex(Math.min(PROJECTS.length - 1, activeIndex + 1));

  return (
    <motion.section
      id="works"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.25, 0.8, 0.25, 1] }}
      className="my-14 relative text-center"
    >
      <div className="relative px-2 sm:px-8">
        {/* Bracket Arc Frame on sides */}
        <span
          className="hidden md:block font-pixel absolute top-1/2 -translate-y-1/2 left-0 text-[130px] text-mustard/40 select-none pointer-events-none leading-none"
          aria-hidden="true"
        >
          (
        </span>
        <span
          className="hidden md:block font-pixel absolute top-1/2 -translate-y-1/2 right-0 text-[130px] text-mustard/40 select-none pointer-events-none leading-none"
          aria-hidden="true"
        >
          )
        </span>

        {/* Coverflow Arrow Navigation Buttons */}
        <button
          type="button"
          onClick={goPrev}
          disabled={activeIndex === 0}
          aria-label="Proyek sebelumnya"
          className="font-pixel absolute top-1/2 -translate-y-1/2 left-1 sm:left-3 w-[42px] h-[42px] bg-mustard hover:bg-mustard-bright disabled:opacity-40 disabled:cursor-not-allowed text-ink border-2 border-mustard-bright rounded-[10px] flex items-center justify-center cursor-pointer z-25 text-[18px] font-extrabold shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-all duration-200 hover:scale-108 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
        >
          &lt;
        </button>

        <button
          type="button"
          onClick={goNext}
          disabled={activeIndex === PROJECTS.length - 1}
          aria-label="Proyek berikutnya"
          className="font-pixel absolute top-1/2 -translate-y-1/2 right-1 sm:right-3 w-[42px] h-[42px] bg-mustard hover:bg-mustard-bright disabled:opacity-40 disabled:cursor-not-allowed text-ink border-2 border-mustard-bright rounded-[10px] flex items-center justify-center cursor-pointer z-25 text-[18px] font-extrabold shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-all duration-200 hover:scale-108 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
        >
          &gt;
        </button>

        {/* 3D Coverflow Stage */}
        <div
          className="h-[380px] relative flex items-center justify-center overflow-hidden [perspective:1200px]"
          onTouchStart={(e) => {
            touchStartX.current = e.changedTouches[0].screenX;
          }}
          onTouchEnd={(e) => {
            const diff = e.changedTouches[0].screenX - touchStartX.current;
            if (diff > 45) goPrev();
            else if (diff < -45) goNext();
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {PROJECTS.map((proj, idx) => {
              const offset = idx - activeIndex;
              let transform = 'translateX(0px) scale(1) rotateY(0deg)';
              let zIndex = 10;
              let filter = 'brightness(1)';
              let borderColor = '#F2C963';
              let opacity = 1;

              if (offset === -1) {
                transform = `translateX(-${stepX}px) scale(0.86) rotateY(10deg)`;
                zIndex = 7;
                filter = 'brightness(0.72)';
                borderColor = '#E6B84C';
                opacity = 0.9;
              } else if (offset === 1) {
                transform = `translateX(${stepX}px) scale(0.86) rotateY(-10deg)`;
                zIndex = 7;
                filter = 'brightness(0.72)';
                borderColor = '#E6B84C';
                opacity = 0.9;
              } else if (offset < -1) {
                transform = `translateX(-${farStepX}px) scale(0.74) rotateY(16deg)`;
                zIndex = 4;
                filter = 'brightness(0.48)';
                borderColor = '#9E7B28';
                opacity = 0.6;
              } else if (offset > 1) {
                transform = `translateX(${farStepX}px) scale(0.74) rotateY(-16deg)`;
                zIndex = 4;
                filter = 'brightness(0.48)';
                borderColor = '#9E7B28';
                opacity = 0.6;
              }

              const isCenter = offset === 0;

              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => {
                    if (isCenter) {
                      onSelectProject(proj);
                    } else {
                      onChangeIndex(idx);
                    }
                  }}
                  aria-label={
                    isCenter
                      ? `Buka detail proyek ${proj.title}`
                      : `Fokus ke proyek ${proj.title}`
                  }
                  style={{
                    transform,
                    zIndex,
                    filter,
                    borderColor,
                    opacity,
                  }}
                  className="absolute w-[275px] sm:w-[290px] h-[320px] bg-[#252D26] border-2 rounded-[20px] overflow-hidden flex flex-col cursor-pointer transition-all duration-[450ms] ease-[cubic-bezier(.25,.8,.25,1)] shadow-[0_16px_36px_rgba(0,0,0,0.6)] select-none text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mustard-bright"
                >
                  <div className="h-[150px] w-full bg-[#1B211C] flex items-center justify-center relative border-b-2 border-mustard-dark p-3">
                    <ProjectArtSVG iconType={proj.icon} accent={proj.accent} />
                  </div>

                  <div className="p-4 flex flex-col flex-1 justify-between w-full">
                    <div>
                      <div className="font-pixel text-[10px] text-mustard-bright tracking-[0.5px]">
                        {proj.tag} · {proj.period}
                      </div>
                      <h3 className="text-[15px] font-bold text-cream mt-[3px] leading-[1.3]">
                        {proj.title}
                      </h3>
                      <div className="flex gap-1.5 flex-wrap mt-2">
                        {proj.tools.map((tool) => (
                          <span
                            key={tool}
                            className="font-pixel text-[9.5px] bg-mustard/18 text-mustard-bright px-[7px] py-[2px] rounded-[4px] border border-mustard/30"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="font-pixel text-[10px] text-cream/60 flex items-center gap-1 mt-2.5">
                      <span>{isCenter ? '[+] KLIK UNTUK DETAIL' : '[·] KLIK UNTUK FOKUS'}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section Footer Pill */}
      <button
        type="button"
        onClick={() => onSelectProject(PROJECTS[activeIndex])}
        className="font-pixel inline-block mt-[18px] bg-ink/92 hover:bg-ink border-2 border-mustard hover:border-mustard-bright px-8 py-2.5 rounded-full text-[16px] text-mustard-bright tracking-[1px] shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
      >
        SPILL KARYA
      </button>
    </motion.section>
  );
}
