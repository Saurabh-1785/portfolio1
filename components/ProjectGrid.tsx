import React from "react";
import Link from "next/link";

interface Project {
  title: string;
  github?: string;
  demo?: string;
  status: "Completed" | "In Progress";
}

interface ProjectGridProps {
  projects: Project[];
  onOpenInfo: (title: string) => void;
}

export default function ProjectGrid({ projects, onOpenInfo }: ProjectGridProps) {
  return (
    <div className="md:col-span-2 flex flex-col gap-4 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-card border-[1.5px] border-edge rounded-[20px] transition-colors duration-200 delay-75 hover:border-edge-hover overflow-hidden relative"
          >
            <div className="h-[120px] md:h-[140px] bg-white dark:bg-black" />
            <div className="px-5 md:px-6 pt-4 md:pt-5 pb-5 md:pb-6">
              <h4 className="text-base font-bold mb-2.5">
                {project.title}
              </h4>
              <div className="flex gap-3 items-center">
                {/* Info Button */}
                <button
                  onClick={() => onOpenInfo(project.title)}
                  className="text-foreground transition-all duration-200 delay-75 flex items-center hover:text-accent hover:scale-[1.15] bg-transparent border-none cursor-pointer p-0"
                  aria-label={`Info about ${project.title}`}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
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
                    className="text-foreground transition-all duration-200 delay-75 flex items-center hover:text-accent hover:scale-[1.15]"
                  >
                    <svg
                      width="22"
                      height="22"
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
                    className="text-foreground transition-all duration-200 delay-75 flex items-center hover:text-accent hover:scale-[1.15]"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
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
              <span
                className={`absolute bottom-5 right-5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border-[1.5px] border-edge bg-card-alt text-secondary transition-all duration-200 delay-75 hover:bg-btn-hover`}
              >
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/projects"
        className="flex items-center justify-between py-3.5 px-5 bg-btn text-btn-text no-underline rounded-xl text-sm font-semibold transition-colors duration-200 delay-75 hover:bg-btn-hover border-[1.5px] border-edge focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        View All Projects
        <span className="text-lg">↗</span>
      </Link>
    </div>
  );
}
