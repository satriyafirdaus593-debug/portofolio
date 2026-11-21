import { motion } from 'motion/react';

interface ConnectBannerProps {
  onCopyEmail: () => void;
}

export function ConnectBanner({ onCopyEmail }: ConnectBannerProps) {
  return (
    <>
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: [0.25, 0.8, 0.25, 1] }}
        className="bg-mustard text-ink rounded-[24px] px-6 py-[38px] mt-12 text-center hud-shadow relative"
      >
        <h2 className="font-pixel text-[20px] sm:text-[22px] tracking-[1px] text-ink">
          LET&apos;S COLLABORATE!
        </h2>
        <p className="text-[14px] leading-[1.6] max-w-[56ch] mx-auto mt-2.5 font-medium text-ink/88">
          Terbuka untuk kolaborasi proyek IoT, desain visual, manajemen media sosial, dan kepanitiaan.
        </p>

        <div className="flex gap-3.5 justify-center flex-wrap mt-[22px]">
          <a
            href="mailto:satriyafirdaus593@gmail.com"
            onClick={onCopyEmail}
            className="px-6 py-3 rounded-xl text-[13px] font-bold inline-flex items-center gap-2 transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.18)] bg-ink text-cream border-2 border-ink hover:bg-olive hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,0,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span>satriyafirdaus593@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/satriya-firdaus-3ab174370"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-[13px] font-bold inline-flex items-center gap-2 transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.18)] bg-cream text-ink border-2 border-ink hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,0,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>LinkedIn Profile ↗</span>
          </a>
        </div>
      </motion.section>

      <footer className="mt-9 text-center text-[12px] text-cream/65 leading-[1.6]">
        <p>© 2026 Satriya Firdaus · Duri Kosambi, Jakarta Barat · Retro-HUD Portfolio</p>
      </footer>
    </>
  );
}
