import { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperiencePanelProps {
  respectCount: number;
  onGiveRespect: () => void;
}

export function ExperiencePanel({ respectCount, onGiveRespect }: ExperiencePanelProps) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      {/* HUD Connector Bar */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
        className="flex items-center justify-center gap-4 sm:gap-5 mt-12 mb-7 relative"
      >
        <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-mustard to-transparent" />

        <div className="flex items-center gap-3.5 sm:gap-4">
          <button
            type="button"
            onClick={onGiveRespect}
            title={`Give Respect! (${respectCount})`}
            aria-label={`Give Respect! Saat ini ${respectCount}`}
            className="w-11 h-11 rounded-xl bg-mustard border-2 border-mustard-bright text-ink flex items-center justify-center cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-mustard-bright hover:shadow-[0_6px_16px_rgba(242,201,99,0.4)] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>

          <div className="bg-cream text-ink px-4 py-2 rounded-xl border-2 border-mustard font-pixel font-bold text-[13px] flex items-center gap-2 shadow-[0_4px_14px_rgba(0,0,0,0.3)] whitespace-nowrap">
            <span>&lt;/&gt;</span>
            <span className="text-[10px] text-mustard-dark">CIRCUIT.SYS</span>
          </div>

          <a
            href="#contact"
            title="Contact Satriya"
            aria-label="Menuju bagian kontak"
            className="w-11 h-11 rounded-xl bg-mustard border-2 border-mustard-bright text-ink flex items-center justify-center cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-mustard-bright hover:shadow-[0_6px_16px_rgba(242,201,99,0.4)] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </a>
        </div>

        <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-mustard to-transparent" />
      </motion.div>

      {/* Experience Card Panel */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.55, ease: [0.25, 0.8, 0.25, 1] }}
        className="relative bg-mustard text-ink rounded-[24px] px-4 sm:px-6 pt-12 pb-9 hud-shadow mb-12"
      >
        {/* Overlapping Header Pill */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-cream text-ink px-6 sm:px-7 py-2 rounded-[14px] shadow-[0_4px_14px_rgba(0,0,0,0.2)] text-center border-[1.5px] border-black/10 whitespace-nowrap">
          <span className="block text-[10px] sm:text-[11px] font-bold tracking-[0.3px] text-ink/78">
            Spill pengalaman organisasi &amp; kepanitiaan
          </span>
          <h2 className="font-pixel text-[15px] sm:text-[17px] text-ink tracking-[1px]">EXPERIENCE &amp; ROLES</h2>
        </div>

        {/* Left Sticker Mascot */}
        <div
          className="hidden sm:block absolute -left-[18px] top-10 -rotate-10 drop-shadow-[0_6px_12px_rgba(0,0,0,0.3)] pointer-events-none"
          aria-hidden="true"
        >
          <svg width="44" height="44" viewBox="0 0 32 32">
            <rect x="4" y="6" width="24" height="20" rx="4" fill="#1C1F1C" stroke="#F8F6F0" strokeWidth="2" />
            <circle cx="11" cy="14" r="3" fill="#E6B84C" />
            <circle cx="21" cy="14" r="3" fill="#E6B84C" />
            <rect x="10" y="20" width="12" height="2" fill="#F8F6F0" />
            <path d="M12 2 L16 6 L20 2" stroke="#E6B84C" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Right Sticker Bubble */}
        <div
          className="hidden sm:block font-pixel absolute -right-4 top-[42px] bg-cream border-2 border-ink rounded-xl px-3.5 py-1.5 text-[11px] font-bold text-ink shadow-[0_6px_12px_rgba(0,0,0,0.25)] rotate-[5deg] pointer-events-none"
          aria-hidden="true"
        >
          IT PLN × UB
        </div>

        {/* Interactive Experience Accordion List */}
        <div className="max-w-[720px] mx-auto mt-4 flex flex-col gap-2.5">
          {EXPERIENCES.map((item) => {
            const isOpen = Boolean(openIds[item.id]);
            return (
              <div
                key={item.id}
                className="bg-white/35 hover:bg-white/60 border-[1.5px] border-ink/15 rounded-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-4 sm:px-[18px] py-3 flex items-center justify-between gap-3 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink rounded-[14px]"
                >
                  <div className="text-[13px] sm:text-[13.5px] font-bold leading-[1.4] text-ink">
                    <span>{item.role}</span> —{' '}
                    <span className="font-semibold opacity-85 text-[12px] sm:text-[12.5px]">{item.org}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-pixel text-[10px] sm:text-[11px] px-2 py-[3px] bg-ink text-mustard-bright rounded-md whitespace-nowrap tabular-nums">
                      {item.period}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`text-[16px] font-extrabold w-[22px] h-[22px] rounded-full bg-ink/10 flex items-center justify-center transition-transform duration-200 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </div>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-250 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-[18px] pb-3.5 pt-2 text-[12.5px] leading-[1.55] text-ink/90 border-t border-dashed border-ink/20 mx-4 sm:mx-[18px] !px-0">
                      {item.detail}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>
    </>
  );
}
