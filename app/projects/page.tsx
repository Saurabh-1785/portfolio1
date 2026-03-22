"use client";

import { useState } from "react";

const projects = [
  {
    title: "PathBound",
    description:
      "A platform to discover and navigate personalized learning paths for career growth and skill development.",
    tech: ["NEXT.JS", "REACT", "TAILWIND"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://pathbound.vercel.app/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/PathBound" },
    ],
  },
  {
    title: "ResumeFlow",
    description:
      "An intuitive resume builder that helps users create professional resumes with customizable templates and real-time preview.",
    tech: ["REACT", "NODE.JS", "CSS"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://resume-flow-project.vercel.app/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/ResumeFlow.git" },
    ],
  },
  {
    title: "CodeSync",
    description:
      "A real-time collaborative code editor that allows multiple developers to write and sync code simultaneously.",
    tech: ["REACT", "SOCKET.IO", "NODE.JS"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://code-sync-iv3p.vercel.app/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/CodeSync.git" },
    ],
  },
  {
    title: "VeriJS",
    description:
      "A JavaScript verification and testing utility that helps developers validate code logic and catch errors early.",
    tech: ["JAVASCRIPT", "NODE.JS"],
    status: "In Progress" as const,
    links: [
      { label: "Live Demo", href: "https://veri-js-lake.vercel.app/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/VeriJS.git" },
    ],
  },
  {
    title: "Interactive Tip Calculator",
    description:
      "A very effective platform to calculate Tip amount and its distribution among every individual.",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://saurabh-1785.github.io/interactive-tip-calculator/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/interactive-tip-calculator" },
    ],
  },
  {
    title: "Alternate Site Designs",
    description:
      "Figma based alternate design for various websites like Amazon, YouTube, and more — exploring modern UI patterns.",
    tech: ["FIGMA"],
    status: "In Progress" as const,
    links: [
      { label: "View", href: "https://www.figma.com/design/85sA25E2qpJEFeIbyxxelf/Alternate-design-sites?node-id=0-1&t=mPPWaAYJ0SUyhF9y-1" },
    ],
  },
  {
    title: "DevBoard",
    description:
      "A developer dashboard that aggregates GitHub stats, task management, and project tracking in one unified interface.",
    tech: ["REACT", "TYPESCRIPT", "TAILWIND"],
    status: "In Progress" as const,
    links: [
      { label: "View Code", href: "#" },
    ],
  },
  {
    title: "SnapNote",
    description:
      "A lightweight note-taking app with markdown support, tag-based organization, and cloud sync for seamless productivity.",
    tech: ["NEXT.JS", "MONGODB", "CSS"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "#" },
      { label: "View Code", href: "#" },
    ],
  },
  {
    title: "QuizForge",
    description:
      "An interactive quiz platform where users can create, share, and attempt quizzes with real-time scoring and leaderboards.",
    tech: ["REACT", "FIREBASE", "TAILWIND"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "#" },
      { label: "View Code", href: "#" },
    ],
  },
  {
    title: "BudgetBuddy",
    description:
      "A personal finance tracker that helps users manage expenses, set budgets, and visualize spending patterns with charts.",
    tech: ["REACT", "CHART.JS", "NODE.JS"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "#" },
      { label: "View Code", href: "#" },
    ],
  },
  {
    title: "LinkTree Clone",
    description:
      "A customizable link-in-bio page builder with theme options, analytics tracking, and drag-and-drop link ordering.",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "#" },
      { label: "View Code", href: "#" },
    ],
  },
  {
    title: "CloudDeploy CLI",
    description:
      "A command-line tool that simplifies deploying web apps to cloud providers with one-command setup and configuration.",
    tech: ["NODE.JS", "PYTHON", "DOCKER"],
    status: "In Progress" as const,
    links: [
      { label: "View Code", href: "#" },
    ],
  },
];

// Gradient presets for card headers
const gradients = [
  "bg-[linear-gradient(135deg,#e8d5f5,#d1c4e9_50%,#bbdefb)] dark:bg-[linear-gradient(135deg,#2d1b4e,#1a1a3e_50%,#1b2a4a)]",
  "bg-[linear-gradient(135deg,#fce4ec,#f8bbd0_50%,#f3e5f5)] dark:bg-[linear-gradient(135deg,#3e1929,#2d1b3e_50%,#1b1a4a)]",
  "bg-[linear-gradient(135deg,#e0f7fa,#b2ebf2_50%,#b3e5fc)] dark:bg-[linear-gradient(135deg,#0d3b3e,#0d2b3e_50%,#0d1b4a)]",
  "bg-[linear-gradient(135deg,#fff9c4,#fff176_50%,#ffe082)] dark:bg-[linear-gradient(135deg,#3e3b0d,#3e2d0d_50%,#4a3b0d)]",
  "bg-[linear-gradient(135deg,#c8e6c9,#a5d6a7_50%,#b2dfdb)] dark:bg-[linear-gradient(135deg,#1b3e1d,#1a3e2d_50%,#1b3e3e)]",
  "bg-[linear-gradient(135deg,#ffccbc,#ffab91_50%,#ff8a65)] dark:bg-[linear-gradient(135deg,#3e1d0d,#3e2d1b_50%,#4a2d1b)]",
];

export default function ProjectsPage() {
  const [infoOpen, setInfoOpen] = useState<string | null>(null);

  return (
    <>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold mb-3 text-foreground">
          My Projects
        </h2>
        <p className="text-muted text-base">
          Here are some of the projects I&apos;ve built recently
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            className="bg-card border-[1.5px] border-edge rounded-[20px] transition-all duration-200 delay-75 hover:-translate-y-1 hover:shadow-[0_12px_40px_var(--shadow)] hover:border-edge-hover overflow-hidden relative flex flex-col"
            key={project.title}
          >
            {/* Gradient Header */}
            <div className={`h-[120px] ${gradients[index % gradients.length]}`} />

            {/* Card Body */}
            <div className="px-6 pt-5 pb-6 flex flex-col flex-1">
              <h3 className="text-lg font-bold mb-2 text-foreground">
                {project.title}
              </h3>
              <p className="text-muted mb-4 text-[14px] leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                {project.tech.map((tag) => (
                  <span
                    className="bg-card-alt text-secondary px-3 py-1 rounded-3xl text-[11px] font-semibold border-[1.5px] border-edge transition-all duration-200 delay-75 hover:bg-btn hover:text-btn-text hover:border-btn hover:cursor-pointer"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 items-center justify-between mt-auto">
                <div className="flex gap-2.5 items-center flex-wrap">
                  {/* Info Button */}
                  <button
                    onClick={() => setInfoOpen(project.title)}
                    className="text-foreground transition-all duration-200 delay-75 flex items-center hover:text-accent hover:scale-[1.15] bg-transparent border-none cursor-pointer p-0"
                    aria-label={`Info about ${project.title}`}
                  >
                    <svg
                      width="20"
                      height="20"
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

                  {project.links.map((link) => (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-4 bg-transparent border-[1.5px] border-edge text-foreground no-underline rounded-3xl text-[12px] font-semibold transition-all duration-200 delay-75 hover:bg-edge hover:text-page hover:border-edge-hover focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                      key={link.label}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Modal */}
      {infoOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setInfoOpen(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal Card */}
          <div
            className="relative bg-card border-[1.5px] border-edge rounded-[20px] p-8 max-w-md w-full shadow-[0_24px_64px_var(--shadow)] animate-[modalIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setInfoOpen(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border-[1.5px] border-edge bg-transparent text-foreground cursor-pointer flex items-center justify-center transition-all duration-200 delay-75 hover:bg-btn hover:text-btn-text hover:border-btn"
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

            {(() => {
              const project = projects.find((p) => p.title === infoOpen);
              if (!project) return null;
              return (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border-[1.5px] ${project.status === "Completed"
                        ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30"
                        : "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30"
                        }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-secondary text-[15px] leading-[1.8]">
                    {project.description}
                  </p>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
}
