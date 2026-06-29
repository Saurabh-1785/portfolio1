import React from "react";

interface Project {
  title: string;
  description: string;
  status: "Completed" | "In Progress";
}

interface ProjectModalProps {
  projects: Project[];
  infoOpen: string | null;
  onClose: () => void;
}

export default function ProjectModal({ projects, infoOpen, onClose }: ProjectModalProps) {
  if (!infoOpen) return null;
  const project = projects.find((p) => p.title === infoOpen);
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal Card */}
      <div
        className="relative bg-card border-[1.5px] border-edge rounded-[20px] p-6 md:p-8 max-w-md w-full shadow-[0_24px_64px_var(--shadow)] animate-[modalIn_0.2s_ease-out] max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border-[1.5px] border-edge bg-transparent text-foreground cursor-pointer flex items-center justify-center transition-all duration-200 delay-75 hover:bg-btn hover:text-btn-text hover:border-btn z-10"
          aria-label="Close modal"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="flex items-center gap-3 mb-4 shrink-0 pr-8">
          <h3 className="text-xl font-bold text-foreground">
            {project.title}
          </h3>
          <span
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border-[1.5px] border-edge bg-card-alt text-secondary transition-all duration-200 delay-75`}
          >
            {project.status}
          </span>
        </div>
        <div className="text-secondary text-[13px] md:text-[15px] leading-[1.8] space-y-6 text-justify flex-1 overflow-y-auto pr-2 min-h-0">
          {project.description.split("\n\n").map((para, i) => (
            <p key={i}>
              {para.trim().split(/(\bProblem:|\bSolution:)/).map((part, j) => {
                if (part === "Problem:" || part === "Solution:") {
                  return <strong key={j} className="text-foreground">{part}</strong>;
                }
                return part;
              })}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
