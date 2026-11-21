import { useEffect } from 'react';
import { PROJECTS, type ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectModal({ project, onClose, onSelectProject }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentIdx = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProj = currentIdx > 0 ? PROJECTS[currentIdx - 1] : null;
  const nextProj = currentIdx < PROJECTS.length - 1 ? PROJECTS[currentIdx + 1] : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 bg-[#0E120F]/82 backdrop-blur-md flex items-center justify-center p-5 z-50"
    >
      <div className="w-full max-w-[540px] bg-[#252D26] border-2 border-mustard rounded-[24px] p-6 sm:p-[30px] shadow-[0_24px_60px_rgba(0,0,0,0.8)] relative text-cream">
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup modal detail"
          className="absolute top-[18px] right-[18px] w-8 h-8 rounded-full bg-mustard hover:bg-mustard-bright text-ink border-0 text-[18px] font-extrabold cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
        >
          ×
        </button>

        <div className="font-pixel text-[11px] text-mustard-bright mb-2 pr-8">
          {project.tag} · {project.period}
        </div>

        <h3 id="project-modal-title" className="text-[20px] font-bold text-cream leading-[1.3] mb-3">
          {project.title}
        </h3>

        <div className="flex gap-1.5 flex-wrap mb-4">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="font-pixel text-[9.5px] bg-mustard/18 text-mustard-bright px-2 py-0.5 rounded-[4px] border border-mustard/30"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="text-[14px] leading-[1.7] text-[#E6E8E4] mb-6 bg-black/25 px-4 py-3.5 rounded-xl border border-mustard/25">
          {project.desc}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            disabled={!prevProj}
            onClick={() => prevProj && onSelectProject(prevProj)}
            className="font-pixel px-3.5 py-3 rounded-xl bg-olive border border-mustard/50 text-mustard-bright text-[12px] disabled:opacity-35 disabled:cursor-not-allowed hover:border-mustard-bright transition-colors cursor-pointer"
            aria-label="Proyek sebelumnya"
          >
            &lt;
          </button>

          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 px-6 rounded-xl bg-ink hover:bg-olive text-cream border-2 border-ink font-bold text-[13px] cursor-pointer transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
          >
            Tutup Detail (Esc)
          </button>

          <button
            type="button"
            disabled={!nextProj}
            onClick={() => nextProj && onSelectProject(nextProj)}
            className="font-pixel px-3.5 py-3 rounded-xl bg-olive border border-mustard/50 text-mustard-bright text-[12px] disabled:opacity-35 disabled:cursor-not-allowed hover:border-mustard-bright transition-colors cursor-pointer"
            aria-label="Proyek berikutnya"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
