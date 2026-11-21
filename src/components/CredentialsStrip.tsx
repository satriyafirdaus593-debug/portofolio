import { motion } from 'motion/react';
import { ACHIEVEMENTS, EDUCATION } from '../data/portfolioData';

export function CredentialsStrip() {
  return (
    <motion.section
      id="credentials"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.25, 0.8, 0.25, 1] }}
      className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[42px]"
    >
      {/* Left Card: Education */}
      <div className="bg-mustard/18 border-[1.5px] border-mustard rounded-[20px] px-6 py-[26px] backdrop-blur-[10px] shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
        <h2 className="font-pixel text-[14px] text-mustard-bright tracking-[1px] mb-[18px] flex items-center gap-2 border-b border-dashed border-mustard/35 pb-2.5">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
          </svg>
          <span>✦ EDUCATION</span>
        </h2>

        <div className="flex flex-col gap-4">
          {EDUCATION.map((item) => (
            <div key={item.title} className="flex flex-col gap-[3px]">
              <div className="text-[14px] font-bold text-cream">{item.title}</div>
              <div className="text-[12.5px] text-cream/75">{item.subtitle}</div>
              <div className="font-pixel text-[11px] text-mustard tabular-nums">{item.year}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Card: Achievements */}
      <div className="bg-mustard/18 border-[1.5px] border-mustard rounded-[20px] px-6 py-[26px] backdrop-blur-[10px] shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
        <h2 className="font-pixel text-[14px] text-mustard-bright tracking-[1px] mb-[18px] flex items-center gap-2 border-b border-dashed border-mustard/35 pb-2.5">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
          </svg>
          <span>✦ ACHIEVEMENTS</span>
        </h2>

        <div className="flex flex-col gap-4">
          {ACHIEVEMENTS.map((item) => (
            <div key={item.title} className="flex flex-col gap-[3px]">
              <div className="text-[14px] font-bold text-cream">{item.title}</div>
              <div className="text-[12.5px] text-cream/75">{item.subtitle}</div>
              <div className="font-pixel text-[11px] text-mustard tabular-nums">{item.year}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
