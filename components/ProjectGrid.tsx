import React from "react";
import Link from "next/link";

interface Project {
  title: string;
  github?: string;
  demo?: string;
  status: "Completed" | "In Progress";
  mobileOnly?: boolean;
}

interface WorkHistory {
  title: string;
  duration: string;
}

interface ProjectGridProps {
  projects: Project[];
  workHistory: WorkHistory[];
  onOpenInfo: (title: string) => void;
}

export default function ProjectGrid({
  projects,
  workHistory,
  onOpenInfo,
}: ProjectGridProps) {
  return (
    <div className="md:col-span-3 lg:col-span-2 flex flex-col gap-4 overflow-hidden">
      {/* Row 1: Work Card (full width) */}
      <div
        data-spotlight-card
        className="bg-card border-[1.5px] border-edge rounded-[20px] transition-colors duration-200 delay-75 hover:border-edge-hover overflow-hidden"
      >
        <div className="px-5 md:px-6 pt-5 pb-2">
          <h3 className="text-sm font-semibold text-label uppercase tracking-wide mb-4">
            Work
          </h3>
          <div className="flex flex-col gap-0">
            {workHistory.map((work, i) => (
              <div
                key={work.title}
                className={`flex items-center justify-between py-3.5 ${
                  i < workHistory.length - 1
                    ? "border-b border-edge/30"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <h4 className="text-sm font-semibold text-foreground truncate">
                    {work.title}
                  </h4>
                </div>
                <span className="text-[10px] font-bold text-muted uppercase tracking-wider shrink-0 ml-3">
                  {work.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Project Cards — 3 on desktop, 4 (2x2) on tablet/mobile */}
      <div className="grid grid-cols-1 min-[425px]:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            data-spotlight-card
            className={`bg-card border-[1.5px] border-edge rounded-[20px] transition-colors duration-200 delay-75 hover:border-edge-hover overflow-hidden relative${
              project.mobileOnly ? " lg:hidden" : ""
            }`}
          >
            <div className="h-[100px] min-[425px]:h-[90px] lg:h-[80px] bg-white dark:bg-black" />
            <div className="px-4 lg:px-4 pt-3 lg:pt-3 pb-4 lg:pb-4 bg-edge/10 dark:bg-edge/20 relative">
              <h4 className="text-sm lg:text-[13px] font-bold mb-2">
                {project.title}
              </h4>
              <div className="flex gap-3 items-center">
                {/* Info Button */}
                <button
                  onClick={() => onOpenInfo(project.title)}
                  className="text-secondary transition-all duration-200 delay-75 flex items-center hover:text-accent hover:scale-[1.15] bg-transparent border-none cursor-pointer p-0"
                  aria-label={`Info about ${project.title}`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </button>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="text-secondary transition-all duration-200 delay-75 flex items-center hover:text-accent hover:scale-[1.15]"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Live Demo`}
                    className="text-secondary transition-all duration-200 delay-75 flex items-center hover:text-accent hover:scale-[1.15]"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
              {/* Status Dot */}
              <div
                className="absolute top-3 right-3"
                title={project.status}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    project.status === "Completed"
                      ? "bg-accent"
                      : "bg-white"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Row 3: View All Projects */}
      <Link
        href="/projects"
        className="flex items-center justify-between py-3 px-1 text-secondary no-underline text-[12px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-accent group"
      >
        <span>View All Projects</span>
        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">↗</span>
      </Link>
    </div>
  );
}
