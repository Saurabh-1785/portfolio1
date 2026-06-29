import React from "react";
import Link from "next/link";

interface Project {
  title: string;
  shortDescription: string;
  description: string;
  github?: string;
  demo?: string;
  status: "Completed" | "In Progress";
  mobileOnly?: boolean;
}

interface WorkHistory {
  title: string;
  role: string;
  duration: string;
  icon: string;
}

interface ProjectGridProps {
  projects: Project[];
  workHistory: WorkHistory[];
  onOpenInfo: (title: string) => void;
}

// ==================== PREMIUM GLOWING SVG ICONS ====================

const BrainIcon = () => (
  <svg
    className="w-14 h-14 text-accent drop-shadow-[0_0_10px_rgba(20,184,166,0.6)] transition-all duration-300 group-hover:scale-105"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    {/* Left Brain Hemisphere */}
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-.75a5.25 5.25 0 0 1-5.25-5.25v-2c0-.5-.25-1-.7-1.3C2.3 13 2 12.5 2 12s.3-1 .8-1.3c.45-.3.7-.8.7-1.3v-2A5.25 5.25 0 0 1 8.75 2h.75z" />
    {/* Right Brain Hemisphere */}
    <path d="M14.5 2a2.5 2.5 0 0 0-2.5 2.5v15a2.5 2.5 0 0 0 2.5 2.5h.75A5.25 5.25 0 0 0 20.5 16.75v-2c0-.5.25-1 .7-1.3.5-.3.8-.8.8-1.3s-.3-1-.8-1.3c-.45-.3-.7-.8-.7-1.3v-2A5.25 5.25 0 0 0 15.25 2h-.75z" />
    {/* Neural Nodes (dots) */}
    <circle cx="9.5" cy="6" r="0.8" fill="currentColor" />
    <circle cx="14.5" cy="6" r="0.8" fill="currentColor" />
    <circle cx="6.5" cy="11.5" r="0.8" fill="currentColor" />
    <circle cx="17.5" cy="11.5" r="0.8" fill="currentColor" />
    <circle cx="9.5" cy="17" r="0.8" fill="currentColor" />
    <circle cx="14.5" cy="17" r="0.8" fill="currentColor" />
    {/* Synaptic Connections (lines) */}
    <path d="M9.5 6h2M14.5 6h-2M6.5 11.5h5.5M17.5 11.5h-5.5M9.5 17h2M14.5 17h-2" />
  </svg>
);

const MapRouteIcon = () => (
  <svg
    className="w-44 h-24 text-accent drop-shadow-[0_0_12px_rgba(20,184,166,0.65)] transition-all duration-300 group-hover:scale-[1.03]"
    viewBox="0 0 120 70"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    {/* Glow shadow/dock under starting pin (bottom left) */}
    <ellipse
      cx="45"
      cy="55.5"
      rx="3.5"
      ry="0.8"
      fill="currentColor"
      opacity="0.8"
      className="text-accent"
    />

    {/* Glow shadow/dock under ending pin (top right) */}
    <ellipse
      cx="80"
      cy="27.5"
      rx="2.5"
      ry="0.6"
      fill="currentColor"
      opacity="0.8"
      className="text-accent"
    />

    {/* Dashed Navigation Route Path (Smooth elegant S-curve) */}
    <path
      d="M 45 54 C 60 54, 70 50, 70 42 C 70 34, 58 34, 60 30 C 62 26, 70 26, 80 26"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeDasharray="3 3.5"
    />

    {/* Starting Location Pin (Bottom Left) */}
    <path
      d="M 45 54 C 42.5 50.5, 37.5 45, 37.5 40.5 A 7.5 7.5 0 1 1 52.5 40.5 C 52.5 45, 47.5 50.5, 45 54 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    {/* Inner circle hole for Starting Pin */}
    <circle
      cx="45"
      cy="40.5"
      r="2.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />

    {/* Ending Location Pin (Top Right) - Slightly smaller for depth/perspective */}
    <path
      d="M 80 26 C 78 23.2, 74 19, 74 15 A 6 6 0 1 1 86 15 C 86 19, 82 23.2, 80 26 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    {/* Inner circle hole for Ending Pin */}
    <circle
      cx="80"
      cy="15"
      r="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

const LinkIcon = () => (
  <svg
    className="w-14 h-14 text-accent drop-shadow-[0_0_10px_rgba(20,184,166,0.6)] transition-all duration-300 group-hover:scale-105"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const ResumeIcon = () => (
  <svg
    className="w-14 h-14 text-accent drop-shadow-[0_0_10px_rgba(20,184,166,0.6)] transition-all duration-300 group-hover:scale-105"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    {/* Document Outline */}
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
    <path d="M14 2v6h6" />
    {/* Document Text Lines */}
    <line x1="8" y1="13" x2="16" y2="13" strokeLinecap="round" />
    <line x1="8" y1="17" x2="13" y2="17" strokeLinecap="round" />
    {/* Badge checkmark indicator in bottom right */}
    <circle cx="18" cy="18" r="4" fill="#000" stroke="currentColor" strokeWidth="1.3" />
    <path d="M16.5 18l1 1 1.8-1.8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CodeSyncIcon = () => (
  <svg
    className="w-14 h-14 text-accent drop-shadow-[0_0_10px_rgba(20,184,166,0.6)] transition-all duration-300 group-hover:scale-105"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    {/* Left and Right Code Brackets */}
    <path d="M7 8l-4 4 4 4M17 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    {/* Sync Loop Arrows */}
    <path d="M12 4a8 8 0 0 1 6.5 3.5M18.5 5.5V8h-2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 20a8 8 0 0 1-6.5-3.5M5.5 18.5V16h2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GoSearchIcon = () => (
  <svg
    className="w-14 h-14 text-accent drop-shadow-[0_0_10px_rgba(20,184,166,0.6)] transition-all duration-300 group-hover:scale-105"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Magnifying Glass Outer */}
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
    {/* Document/Index Lines Inside */}
    <line x1="7" y1="8" x2="15" y2="8" />
    <line x1="7" y1="11" x2="12" y2="11" />
    <line x1="7" y1="14" x2="15" y2="14" />
  </svg>
);

// GDG Work Icon (Code Brackets inside square)
const CodeIcon = () => (
  <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

// TEDx Work Icon (People outline inside square)
const PeopleIcon = () => (
  <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// Calendar Icon for Badges
const CalendarIcon = () => (
  <svg className="w-3.5 h-3.5 text-secondary/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default function ProjectGrid({
  projects,
  workHistory,
  onOpenInfo,
}: ProjectGridProps) {
  return (
    <div
      data-spotlight-card
      className="md:col-span-3 lg:col-span-2 flex flex-col gap-8 p-6 md:p-7 bg-card transition-colors duration-200 delay-75 w-full h-full relative"
    >

      {/* ==================== WORK SECTION ==================== */}
      <div className="flex flex-col w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 w-full">
          <div className="flex flex-col gap-1 items-start">
            <h3 className="text-xs font-bold text-accent uppercase tracking-widest leading-none">
              WORK
            </h3>
            <div className="w-7 h-[2px] bg-accent/60 mt-1.5 rounded" />
          </div>
          <Link
            href="/work"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-[10px] font-bold text-secondary/80 border border-edge/15 hover:border-accent/40 rounded-lg hover:text-accent transition-all duration-200"
          >
            <span>VIEW ALL</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>

        {/* Timeline Content */}
        <div
          data-spotlight-card
          className="bg-card border border-edge/10 rounded-[20px] p-5 md:p-6 relative overflow-hidden"
        >
          <div className="relative flex flex-col gap-6 pl-1.5">
            {/* Thread Line */}
            <div className="absolute left-[54px] top-6 bottom-6 w-[1.5px] bg-edge/10 hidden sm:block" />

            {workHistory.map((work) => (
              <div key={work.title} className="relative flex items-center justify-between w-full min-w-0 group gap-4">
                <div className="flex items-center gap-4 sm:gap-6 min-w-0 flex-1">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/15 flex items-center justify-center shrink-0 z-10 relative">
                    {work.icon === "code" ? <CodeIcon /> : <PeopleIcon />}
                  </div>

                  {/* Cyan Glowing Timeline Dot */}
                  <div className="absolute left-[50px] w-2.5 h-2.5 rounded-full bg-accent border-[2px] border-[#000] z-20 shadow-[0_0_8px_rgba(20,184,166,0.7)] hidden sm:block" />

                  {/* Description Info */}
                  <div className="flex flex-col min-w-0 flex-1">
                    <h4 className="text-[13px] md:text-sm font-bold text-foreground truncate group-hover:text-accent transition-colors duration-250 pr-2">
                      {work.title}
                    </h4>
                    <span className="text-[11px] font-medium text-secondary/60 mt-0.5">
                      {work.role}
                    </span>
                    {/* Inline duration on mobile */}
                    <span className="text-[9px] font-bold text-accent/80 uppercase tracking-wider mt-1 sm:hidden">
                      {work.duration}
                    </span>
                  </div>
                </div>

                {/* Duration Pills (Desktop Only) */}
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/[0.02] border border-edge/10 shrink-0 select-none">
                  <CalendarIcon />
                  <span className="text-[9px] font-bold text-secondary/80 uppercase tracking-wider">
                    {work.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== PROJECTS SECTION ==================== */}
      <div className="flex flex-col w-full border-t border-edge/10 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 w-full">
          <div className="flex flex-col gap-1 items-start">
            <h3 className="text-xs font-bold text-accent uppercase tracking-widest leading-none">
              PROJECTS
            </h3>
            <div className="w-7 h-[2px] bg-accent/60 mt-1.5 rounded" />
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-[10px] font-bold text-secondary/80 border border-edge/15 hover:border-accent/40 rounded-lg hover:text-accent transition-all duration-200"
          >
            <span>VIEW ALL</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 min-[425px]:grid-cols-2 lg:grid-cols-3 gap-5 bg-transparent w-full">
          {projects.map((project) => (
            <div
              key={project.title}
              data-spotlight-card
              onClick={() => onOpenInfo(project.title)}
              className="bg-card border border-edge/10 rounded-[20px] p-4 md:p-5 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:translate-y-[-2px] group cursor-pointer"
            >
              {/* Card Visual Header with Dot Grid Background */}
              <div className="h-36 w-full flex items-center justify-center rounded-[14px] overflow-hidden mb-4 border border-edge/10 bg-accent/[0.01] relative select-none">
                <div
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(rgba(20, 184, 166, 0.2) 1px, transparent 1px)",
                    backgroundSize: "12px 12px"
                  }}
                />

                {/* Center Glowing Icon */}
                <div className="relative z-10 flex items-center justify-center">
                  {project.title === "GoLink" && <LinkIcon />}
                  {project.title === "APE AI" && <BrainIcon />}
                  {project.title === "GoSearch" && <GoSearchIcon />}
                  {project.title === "ResumeFlow" && <ResumeIcon />}
                </div>

                {/* Status Dot in top right */}
                <div className="absolute top-3.5 right-3.5" title={project.status}>
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${project.status === "Completed"
                      ? "bg-accent shadow-[0_0_8px_rgba(20,184,166,0.6)]"
                      : "bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                      }`}
                  />
                </div>
              </div>

              {/* Title */}
              <div className="flex-1 flex flex-col mb-3">
                <h4 className="text-[13px] md:text-sm font-bold text-foreground group-hover:text-accent transition-colors duration-250">
                  {project.title}
                </h4>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-between w-full mt-auto pt-1">
                <div className="flex items-center gap-1.5">
                  {/* Info Icon Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenInfo(project.title);
                    }}
                    className="w-7 h-7 rounded-full border border-edge/15 flex items-center justify-center text-secondary/70 hover:text-accent hover:border-accent/40 bg-accent/5 hover:scale-105 transition-all duration-200 cursor-pointer"
                    aria-label={`Info about ${project.title}`}
                  >
                    <svg
                      width="14"
                      height="14"
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

                  {/* GitHub Link Button */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-7 h-7 rounded-full border border-edge/15 flex items-center justify-center text-secondary/70 hover:text-accent hover:border-accent/40 bg-accent/5 hover:scale-105 transition-all duration-200"
                      aria-label={`${project.title} GitHub`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* View Project Button */}
                <a
                  href={project.demo || project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[10px] font-bold text-accent hover:text-white border border-accent/20 hover:border-accent hover:bg-accent px-3 py-1.5 rounded-lg transition-all duration-250 flex items-center gap-1 cursor-pointer"
                >
                  <span>View Project</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
