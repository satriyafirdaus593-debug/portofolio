import { useCallback, useEffect, useRef, useState } from 'react';
import { TopNotchNav } from './components/TopNotchNav';
import { HeroCard } from './components/HeroCard';
import { ExperiencePanel } from './components/ExperiencePanel';
import { ProjectCoverflow } from './components/ProjectCoverflow';
import { CredentialsStrip } from './components/CredentialsStrip';
import { SkillsAndDock } from './components/SkillsAndDock';
import { ConnectBanner } from './components/ConnectBanner';
import { ProjectModal } from './components/ProjectModal';
import { PROJECTS, type DockTool, type ProjectItem } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [respectCount, setRespectCount] = useState(0);
  const [motionPaused, setMotionPaused] = useState(false);
  const [toastText, setToastText] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  const showToast = useCallback((message: string) => {
    if (toastTimerRef.current !== null) {
      window.clearTimeout(toastTimerRef.current);
    }
    setToastText(message);
    toastTimerRef.current = window.setTimeout(() => {
      setToastText(null);
    }, 2400);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current !== null) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'works', 'skills', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: 0.05 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleGiveRespect = () => {
    setRespectCount((prev) => {
      const next = prev + 1;
      showToast(`+1 Respect Recorded! (${next})`);
      return next;
    });
  };

  const handleMonogramClick = () => {
    showToast('SF · Satriya Firdaus — IoT & Visual Designer');
  };

  const handleToggleMotion = () => {
    setMotionPaused((prev) => {
      const next = !prev;
      showToast(next ? 'HUD Animation Paused' : 'HUD Animation Resumed');
      return next;
    });
  };

  const handleCycleShowcase = () => {
    const nextIdx = (activeProjectIndex + 1) % PROJECTS.length;
    setActiveProjectIndex(nextIdx);
    showToast(`Focused: ${PROJECTS[nextIdx].title}`);
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleSelectTool = (tool: DockTool) => {
    if (typeof tool.relatedProjectIndex === 'number') {
      setActiveProjectIndex(tool.relatedProjectIndex);
      showToast(`${tool.name} → ${PROJECTS[tool.relatedProjectIndex].title}`);
      document.getElementById('works')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      showToast(`${tool.name} · ${tool.role}`);
    }
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText('satriyafirdaus593@gmail.com').catch(() => {});
    }
    showToast('Email disalin: satriyafirdaus593@gmail.com');
  };

  return (
    <div className={motionPaused ? 'motion-paused' : ''}>
      <TopNotchNav activeSection={activeSection} />

      <main className="max-w-[880px] mx-auto px-5 pb-20 relative">
        <HeroCard onMonogramClick={handleMonogramClick} />

        <ExperiencePanel respectCount={respectCount} onGiveRespect={handleGiveRespect} />

        <ProjectCoverflow
          activeIndex={activeProjectIndex}
          isModalOpen={selectedProject !== null}
          onChangeIndex={setActiveProjectIndex}
          onSelectProject={setSelectedProject}
        />

        <CredentialsStrip />

        <SkillsAndDock
          motionPaused={motionPaused}
          onToggleMotion={handleToggleMotion}
          onCycleShowcase={handleCycleShowcase}
          onSelectTool={handleSelectTool}
        />

        <ConnectBanner onCopyEmail={handleCopyEmail} />
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => {
          setSelectedProject(proj);
          const idx = PROJECTS.findIndex((p) => p.id === proj.id);
          if (idx !== -1) setActiveProjectIndex(idx);
        }}
      />

      {/* Floating Pixel Toast */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 right-6 bg-ink border-2 border-mustard-bright text-mustard-bright px-[18px] py-2.5 rounded-lg font-pixel text-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.6)] z-50 flex items-center gap-2 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
          toastText ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-24 opacity-0 pointer-events-none'
        }`}
      >
        <span aria-hidden="true">★</span>
        <span>{toastText ?? '+1 Respect Recorded!'}</span>
      </div>
    </div>
  );
}
