import { motion } from 'motion/react';
import { DOCK_TOOLS, SOFT_SKILLS, type DockTool, type DockToolId } from '../data/portfolioData';

interface SkillsAndDockProps {
  motionPaused: boolean;
  onToggleMotion: () => void;
  onCycleShowcase: () => void;
  onSelectTool: (tool: DockTool) => void;
}

function ToolIconSVG({ id }: { id: DockToolId }) {
  switch (id) {
    case 'figma':
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
          <path
            d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4V2h-4zm0 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4v-4h-4zm0 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4v-4h-4z"
            fill="#0ACF83"
          />
          <path d="M20 10a4 4 0 1 0 0-8h-4v8h4zm-4 4h4a4 4 0 1 1-4 4v-4z" fill="#F24E1E" />
        </svg>
      );
    case 'canva':
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#fff" strokeWidth="2.5" />
          <path d="M8 12c1-3 4-3 5-1s3 4 5 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'capcut':
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
          <rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="#fff" strokeWidth="2" />
          <path d="M10 9l5 3-5 3V9z" fill="#fff" />
        </svg>
      );
    case 'fritzing':
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="#fff" strokeWidth="2" />
          <circle cx="8" cy="8" r="2" fill="#fff" />
          <circle cx="16" cy="16" r="2" fill="#fff" />
          <path d="M8 8l8 8" stroke="#fff" strokeWidth="2" />
        </svg>
      );
    case 'kodular':
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
          <path
            d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
          />
          <path d="M8 8v8l8-4-8-4z" fill="#fff" />
        </svg>
      );
    case 'firebase':
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
          <path d="M4 17l2-13 4 7-3 3 7-10 6 13-16 0z" fill="#FFCA28" />
          <path d="M4 17l12 0-3-4-9 4z" fill="#FFA000" />
        </svg>
      );
    case 'fusion':
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
          <path
            d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.5l6.5 3.6-6.5 3.6-6.5-3.6L12 4.5zM5 8.7l6 3.3v7.3l-6-3.3V8.7zm14 7.3l-6 3.3V12l6-3.3v7.3z"
            fill="#fff"
          />
        </svg>
      );
    case 'office':
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
          <rect x="4" y="4" width="7" height="7" fill="#F25022" />
          <rect x="13" y="4" width="7" height="7" fill="#7FBA00" />
          <rect x="4" y="13" width="7" height="7" fill="#00A4EF" />
          <rect x="13" y="13" width="7" height="7" fill="#FFB900" />
        </svg>
      );
  }
}

export function SkillsAndDock({
  motionPaused,
  onToggleMotion,
  onCycleShowcase,
  onSelectTool,
}: SkillsAndDockProps) {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.25, 0.8, 0.25, 1] }}
      className="mt-12 text-center"
    >
      {/* Soft Skills Badges */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-[30px]">
        {SOFT_SKILLS.map((skill) => (
          <span
            key={skill}
            className="bg-olive/70 border-[1.5px] border-mustard text-cream px-[18px] py-[7px] rounded-full text-[12px] font-semibold tracking-[0.3px] shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-all duration-200 hover:bg-mustard hover:text-ink hover:-translate-y-0.5 select-none"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Bottom macOS-Style Tool Dock */}
      <div className="flex items-center justify-center gap-4 relative mt-4">
        {/* Far Left HUD Node: Toggle Ambient Motion */}
        <button
          type="button"
          onClick={onToggleMotion}
          title={motionPaused ? 'Lanjutkan animasi HUD' : 'Jeda animasi HUD'}
          aria-label={motionPaused ? 'Lanjutkan animasi HUD' : 'Jeda animasi HUD'}
          aria-pressed={motionPaused}
          className="hidden md:flex w-[46px] h-[46px] rounded-full bg-black/45 hover:bg-black/65 border-2 border-mustard items-center justify-center shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] cursor-pointer transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
        >
          {motionPaused ? (
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-mustard" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-mustard" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
          )}
        </button>

        {/* Frosted Center Dock Bar */}
        <div className="bg-cream/12 backdrop-blur-lg border-[1.5px] border-mustard/45 rounded-[22px] px-5 py-3 flex flex-wrap md:flex-nowrap max-w-[320px] md:max-w-none gap-3.5 items-center justify-center shadow-[0_16px_36px_rgba(0,0,0,0.4)]">
          {DOCK_TOOLS.map((tool) => (
            <button
              key={tool.id}
              type="button"
              onClick={() => onSelectTool(tool)}
              style={{ backgroundColor: tool.color }}
              aria-label={`${tool.name} — ${tool.role}`}
              className="group relative w-[52px] h-[52px] rounded-[13px] cursor-pointer transition-all duration-250 ease-[cubic-bezier(.25,.8,.25,1)] flex items-center justify-center shadow-[0_6px_14px_rgba(0,0,0,0.3)] hover:scale-[1.22] hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.5)] hover:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard-bright"
            >
              <span className="font-pixel absolute -top-[34px] left-1/2 -translate-x-1/2 bg-ink text-mustard-bright border border-mustard rounded-md px-2 py-1 text-[10px] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 group-hover:-translate-y-0.5 transition-all duration-200 z-20">
                {tool.name} · {tool.role}
              </span>
              <ToolIconSVG id={tool.id} />
            </button>
          ))}
        </div>

        {/* Far Right HUD Node: Cycle Featured Work */}
        <button
          type="button"
          onClick={onCycleShowcase}
          title="Putar karya berikutnya di Spill Karya"
          aria-label="Putar karya berikutnya di Spill Karya"
          className="hidden md:flex w-[46px] h-[46px] rounded-full bg-black/45 hover:bg-black/65 border-2 border-mustard items-center justify-center shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] cursor-pointer transition-transform duration-200 hover:scale-105 hover:rotate-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
        >
          <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-mustard" aria-hidden="true">
            <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
          </svg>
        </button>
      </div>
    </motion.section>
  );
}
