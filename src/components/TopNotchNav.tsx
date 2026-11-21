import { NAV_LINKS } from '../data/portfolioData';

interface TopNotchNavProps {
  activeSection: string;
}

export function TopNotchNav({ activeSection }: TopNotchNavProps) {
  return (
    <header className="sticky top-0 z-50 flex w-full justify-center pointer-events-none px-3">
      <div className="pointer-events-auto flex items-center gap-4 md:gap-7 bg-mustard text-ink px-4 sm:px-8 pt-2 pb-2.5 rounded-b-[20px] border-2 border-t-0 border-mustard-bright shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
        <a
          href="#about"
          className="font-pixel flex items-center gap-2 font-bold text-[13px] tracking-[0.5px] text-ink whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink rounded"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="8" cy="8" r="2" />
            <path d="M14 16h4M6 16h4M10 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>SF-2026</span>
        </a>

        <nav className="hidden sm:flex items-center gap-3 md:gap-5" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-[11px] md:text-[12px] font-bold uppercase tracking-[0.5px] text-ink whitespace-nowrap shrink-0 transition-all duration-200 hover:opacity-75 hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink rounded ${
                  isActive ? 'underline decoration-2 underline-offset-4' : ''
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
