"use client";

import { useState } from "react";

const projects = [
  {
    title: "APE AI",
    imageUrl: "/proj/ape.webp",
    description: `
    Problem: 
    Companies receive large volumes of customer feedback from multiple sources, but this data is unstructured and difficult to analyze. Product teams must manually review, categorize, and convert feedback into requirements, which is time-consuming, error-prone, and often leads to missed insights and delayed product improvements.

    Solution: 
    Automatically transforms raw customer feedback into structured product requirements. It analyzes feedback, identifies key issues, generates validated requirements, and converts them into engineering-ready tasks, enabling faster and more data-driven product decision-making.
    `,
    tech: [],
    status: "In Progress" as const,
    links: [
    ],
  },
  {
    title: "TEDxNIT Hamirpur Website",
    imageUrl: "/proj/tedx.webp",
    description: `
    The official TEDx NIT Hamirpur 2026 website, designed and developed to represent the organization’s digital presence. Built with a modern, responsive interface, it delivers a seamless user experience across devices while showcasing events, speakers, and initiatives. The platform ensures structured content delivery, smooth navigation, and a professional interface for engaging audiences and promoting TEDx activities effectively.`,
    tech: [],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://www.tedxnithamirpur.com/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/tedx-website.git" },
    ],
  },
  {
    title: "PathBound",
    imageUrl: "/proj/pathbound.webp",
    description: `
    Problem:
    Traditional currency exchange and remittance systems expose users to unpredictable exchange rates and hidden fees. In volatile markets, users often receive significantly less than expected, with little transparency or control over the conversion rate. Additionally, there is no mechanism to set conditions like minimum acceptable rates or timing, leaving users dependent on centralized intermediaries.

    Solution:
    PathBound addresses this by enabling rate-protected exchange intents using blockchain-based path payments. Users can define a minimum acceptable exchange rate and a valid time window for execution, ensuring better control and predictability. Funds remain secure under user custody until execution, and transactions are processed atomically, guaranteeing that exchanges either complete fully at the desired rate or not at all.`,
    tech: ["NODE.JS", "REACT", "STELLAR"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://pathbound.vercel.app/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/PathBound" },
    ],
  },
  {
    title: "ResumeFlow",
    imageUrl: "/proj/resumeflow.webp",
    description: `
      An AI-powered CV generator that converts user input into a polished, ATS-optimized resume with professional formatting. It leverages real-time LaTeX compilation to provide instant preview and high-quality PDF output, ensuring accuracy, customization, and a seamless resume-building experience across devices.`,
    tech: ["REACT", "NODE.JS", "LATEX", "GOOGLE GEMINI API"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://resume-flow-project.vercel.app/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/ResumeFlow.git" },
    ],
  },
  {
    title: "CodeSync",
    imageUrl: "/proj/codesync.webp",
    description: `
    Problem:
    Traditional code collaboration relies on version control systems that are not truly real-time, leading to delays, merge conflicts, and inefficient teamwork. Developers often struggle with tracking changes, coordinating edits, and maintaining consistency when multiple people work on the same file simultaneously.

    Solution:
    CodeSync solves this by providing a real-time collaborative coding environment where multiple developers can edit code simultaneously with instant synchronization. Features like live cursors, user presence, and conflict-free editing using CRDTs ensure smooth collaboration. With built-in syntax highlighting and independent undo/redo history, it creates a seamless and efficient coding experience for teams working together from anywhere.`,
    tech: ["NEXT.JS", "CODE MIRROR", "YJS", "WEBSOCKETS"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://code-sync-iv3p.vercel.app/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/CodeSync.git" },
    ],
  },
  {
    title: "VeriJS",
    imageUrl: "/proj/verijs.webp",
    description: `
    Problem:
    Identifying bugs and code issues in JavaScript often relies on executing the code or manual reviews, which can be time-consuming and error-prone. Many developers miss structural or logical issues early in development, leading to inefficient debugging and reduced code quality. Additionally, existing tools can be complex or lack immediate, visual feedback during coding.

    Solution:
    VeriJS addresses this by providing a lightweight static analysis tool that detects issues without running the code. By parsing code into an Abstract Syntax Tree (AST) and applying rule-based analysis, it identifies potential bugs and bad practices in real time. With an interactive editor and instant visual feedback, developers can quickly understand and fix issues, improving code quality and development efficiency`,
    tech: ["BABEL","MONACO EDITOR","JAVASCRIPT"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://veri-js-lake.vercel.app/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/VeriJS.git" },
    ],
  },
  {
    title: "Zenith",
    imageUrl: "/proj/zenith.webp",
    description: `
    Problem:
    Manually assigning tasks to engineers is time-consuming and often inefficient, especially in teams with varying skill sets and workloads. It can lead to poor resource utilization, missed deadlines, and mismatches between task requirements and engineer capabilities.

    Solution:
    Zenith automates task allocation by intelligently matching tasks with the most suitable resources based on skills, availability, priority, and deadlines. By dynamically evaluating capacity and requirements, it ensures optimal workload distribution, improves efficiency, and helps teams deliver work faster and more effectively.`,
    tech: ["NEXT.JS", "EXPRESS.JS", "MYSQL"],
    status: "Completed" as const,
    links: [
      { label: "View Code", href: "https://github.com/Saurabh-1785/zenith.git" },
    ],
  },
  {
    title: "GeoFinder",
    imageUrl: "/proj/geofinder.webp",
    description: `
    Problem:
    Finding nearby resources like hospitals, restaurants, or services in real-time can be inefficient due to fragmented data sources and lack of intuitive visualization. Traditional systems often fail to provide accurate location-based results, dynamic filtering, and seamless interaction on maps, leading to a poor user experience.

    Solution:
    GeoFinder addresses this by offering a WebGIS-based platform that integrates geolocation, geocoding, and real-time spatial queries. It enables users to search and visualize nearby resources on an interactive map with accurate distance calculations, live suggestions, and dynamic clustering. This ensures fast, intuitive, and location-aware discovery of relevant places.`,
    tech: ["LEAFLET","AXIOS","OPENSTREET MAP API"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://geofinder-5j69.onrender.com/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/GeoFinder.git" },
    ],
  },
  {
    title: "ECI-Secure Vote",
    imageUrl: "/proj/eci.webp",
    description: `
    Problem:
    Traditional voting systems limit accessibility for citizens living abroad or serving in remote locations, while also raising concerns around security, transparency, and voter coercion. Existing digital solutions often struggle to balance privacy, verifiability, and resistance to tampering, making large-scale secure online voting difficult to implement.

    Solution:
    ECI Secure Vote addresses this by providing a secure, remote voting platform powered by advanced cryptography, AI-based security, and blockchain verification. It ensures voter authentication through biometrics, maintains anonymity using zero-knowledge principles, and guarantees tamper-proof, verifiable results. With real-time monitoring and anti-coercion mechanisms, the system enables safe, transparent, and accessible voting from anywhere in the world.`,
    tech: ["REACT", "MONGODB", "NODE.js"],
    status: "Completed" as const,
    links: [
      { label: "View Code", href: "https://github.com/Saurabh-1785/Online-Voting-System.git" },
    ],
  },
  {
    title: "RBAC",
    imageUrl: "/proj/rbac.webp",
    description: `
    A Role-Based Access Control (RBAC) system designed to manage and enforce secure authentication and authorization across applications. It implements OAuth-based login and token-driven access control, enabling users to securely authenticate and access resources based on assigned roles and permissions. The system ensures fine-grained control over protected routes, supports scalable user-role management, and follows best practices for session handling and API security, making it suitable for real-world, production-level applications.`,
    tech: ["JWT", "BCRYPT", "EXPRESS.JS"],
    status: "Completed" as const,
    links: [
      { label: "View Code", href: "https://github.com/Saurabh-1785/RBAC.git" },
    ],
  },
  {
    title: "Interactive Tip Calculator",
    imageUrl: "/proj/interactive.webp",
    description:
      "A very effective platform to calculate Tip amount and its distribution among every individual.",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://saurabh-1785.github.io/interactive-tip-calculator/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/interactive-tip-calculator" },
    ],
  },
];

// All projects data is defined at the top of the file

// Components
const FormattedDescription = ({ text }: { text: string }) => {
  return (
    <div className="space-y-4 text-justify">
      {text.trim().split(/\n\s*\n/).map((para, i) => {
        return (
          <div key={i} className="text-secondary text-[14px] leading-[1.7]">
            {para.trim().split('\n').map((line, j) => {
              const highlightMatch = line.trim().match(/^(Problem:|Solution:)/i);
              if (highlightMatch) {
                const header = highlightMatch[0];
                const content = line.trim().slice(header.length);
                return (
                  <div key={j} className="mb-1">
                    <span className="font-black text-foreground uppercase tracking-wider text-[11px] block mb-1.5 opacity-90">
                      {header}
                    </span>
                    <span className="block">{content.trim()}</span>
                  </div>
                );
              }
              return (
                <span key={j} className="block">
                  {line.trim()}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default function ProjectsPage() {
  const [infoOpen, setInfoOpen] = useState<string | null>(null);

  return (
    <>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold mb-3 text-foreground">
          My Projects
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project) => {
          const githubLink = project.links.find(
            (l) => l.label === "View Code" || (l.label === "View" && l.href.includes("github.com"))
          )?.href;
          const demoLink = project.links.find(
            (l) => l.label === "Live Demo" || (l.label === "View" && !l.href.includes("github.com"))
          )?.href;

          return (
            <div
              key={project.title}
              className="group bg-card border-[1.5px] border-edge rounded-[20px] transition-all duration-300 hover:border-edge-hover overflow-hidden relative flex flex-col cursor-pointer hover:shadow-[0_0_20px_rgba(20,184,166,0.15)] dark:hover:shadow-[0_0_20px_rgba(13,148,136,0.2)] w-full min-[425px]:w-[calc(50%-12px)] md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]"
            >
              {/* Logo/Header */}
              <div 
                className="h-[120px] relative overflow-hidden bg-card-alt transition-colors duration-300 group-hover:bg-edge/5"
                onClick={() => setInfoOpen(project.title)}
              >
                {project.imageUrl && (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale contrast-[1.1] brightness-[0.85] transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
                  />
                )}
                {/* Subtle Theme Overlay */}
                <div className="absolute inset-0 bg-edge/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="px-5 md:px-6 pt-4 md:pt-5 pb-5 md:pb-6 bg-edge/10 dark:bg-edge/20 relative flex-1 flex flex-col">
                <h4 className="text-lg font-bold mb-3 text-foreground">
                  {project.title}
                </h4>

                {/* Tech Stack on Card */}
                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="bg-card-alt text-[9px] font-bold text-muted px-2 py-0.5 rounded border border-edge/20 uppercase tracking-tighter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 items-center">
                  {/* Info Button */}
                  <button
                    onClick={() => setInfoOpen(project.title)}
                    className="text-secondary transition-all duration-200 delay-75 flex items-center hover:text-accent hover:scale-[1.15] bg-transparent border-none cursor-pointer p-0"
                    aria-label={`Info about ${project.title}`}
                  >
                    <svg
                      width="24"
                      height="24"
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

                  {githubLink && (
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="text-secondary transition-all duration-200 delay-75 flex items-center hover:text-accent hover:scale-[1.15]"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}

                  {demoLink && (
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Demo`}
                      className="text-secondary transition-all duration-200 delay-75 flex items-center hover:text-accent hover:scale-[1.15]"
                    >
                      <svg
                        width="24"
                        height="24"
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

                <span className="hidden md:inline-block absolute bottom-5 right-5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border-[1.5px] border-edge bg-card-alt text-secondary transition-all duration-200 delay-75 hover:bg-btn-hover hover:border-edge-hover">
                  {project.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-12 mb-6">
        <a
          href="https://github.com/Saurabh-1785?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary text-sm font-semibold tracking-wider uppercase transition-all duration-200 hover:text-accent flex items-center gap-2 group/link"
        >
          See all projects
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="transition-transform duration-200 group-hover/link:translate-x-1"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
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
                      className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border-[1.5px] border-edge bg-card-alt text-secondary transition-all duration-200 delay-75 hover:bg-btn-hover hover:border-edge-hover"
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tech.map((tag) => (
                      <span
                        className="bg-card-alt text-secondary px-3 py-1 rounded-3xl text-[11px] font-semibold border-[1.5px] border-edge transition-all duration-200 delay-75 hover:bg-btn hover:text-btn-text hover:border-btn"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-edge/10 pt-6">
                    <FormattedDescription text={project.description} />
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
}
