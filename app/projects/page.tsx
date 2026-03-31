"use client";

import { useState } from "react";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

const projects = [
  {
    title: "APE AI",
    imageUrl: "/proj/ape.webp",
    description: `Problem: 
Companies receive large volumes of customer feedback from multiple sources, but this data is unstructured and difficult to analyze. Product teams must manually review, categorize, and convert feedback into requirements, which is time-consuming, error-prone, and often leads to missed insights and delayed product improvements.

Solution: 
Automatically transforms raw customer feedback into structured product requirements. It analyzes feedback, identifies key issues, generates validated requirements, and converts them into engineering-ready tasks, enabling faster and more data-driven product decision-making.`,
    tech: ["AI Automation", "REACT"],
    status: "In Progress" as const,
    links: [],
  },
  {
    title: "TEDxNIT Hamirpur Website",
    imageUrl: "/proj/tedx.webp",
    description: `The official TEDx NIT Hamirpur 2026 website, designed and developed to represent the organization’s digital presence. Built with a modern, responsive interface, it delivers a seamless user experience across devices while showcasing events, speakers, and initiatives.`,
    tech: ["NEXT.JS", "TAILWIND", "ANIMATIONS"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://www.tedxnithamirpur.com/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/tedx-website.git" },
    ],
  },
  {
    title: "PathBound",
    imageUrl: "/proj/pathbound.webp",
    description: `Problem:
Traditional currency exchange and remittance systems expose users to unpredictable exchange rates and hidden fees. 

Solution:
PathBound addresses this by enabling rate-protected exchange intents using blockchain-based path payments. Users can define a minimum acceptable exchange rate and a valid time window for execution, ensuring better control and predictability.`,
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
    description: `An AI-powered CV generator that converts user input into a polished, ATS-optimized resume with professional formatting. It leverages real-time LaTeX compilation to provide instant preview and high-quality PDF output.`,
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
    description: `Problem:
Traditional code collaboration relies on version control systems that are not truly real-time.

Solution:
CodeSync provides a real-time collaborative coding environment where multiple developers can edit code simultaneously with instant synchronization features like live cursors and conflict-free editing.`,
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
    description: `Problem:
Identifying bugs and code issues in JavaScript often relies on executing the code or manual reviews.

Solution:
VeriJS provides a lightweight static analysis tool that detects issues without running the code by parsing code into an Abstract Syntax Tree (AST).`,
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
    description: `Problem:
Manually assigning tasks to engineers is time-consuming and often inefficient.

Solution:
Zenith automates task allocation by intelligently matching tasks with the most suitable resources based on skills, availability, and priority.`,
    tech: ["NEXT.JS", "EXPRESS.JS", "MYSQL"],
    status: "Completed" as const,
    links: [
      { label: "View Code", href: "https://github.com/Saurabh-1785/zenith.git" },
    ],
  },
  {
    title: "GeoFinder",
    imageUrl: "/proj/geofinder.webp",
    description: `Problem:
Finding nearby resources like hospitals or restaurants in real-time can be inefficient.

Solution:
GeoFinder addresses this by offering a WebGIS-based platform that integrates geolocation, geocoding, and real-time spatial queries.`,
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
    description: `Problem:
Traditional voting systems limit accessibility and raise concerns around security and coercion.

Solution:
ECI Secure Vote provides a secure remote voting platform powered by advanced cryptography, AI-based security, and blockchain verification.`,
    tech: ["REACT", "MONGODB", "NODE.JS"],
    status: "Completed" as const,
    links: [
      { label: "View Code", href: "https://github.com/Saurabh-1785/Online-Voting-System.git" },
    ],
  },
  {
    title: "RBAC",
    imageUrl: "/proj/rbac.webp",
    description: `A Role-Based Access Control (RBAC) system designed to manage and enforce secure authentication and authorization across applications.`,
    tech: ["JWT", "BCRYPT", "EXPRESS.JS"],
    status: "Completed" as const,
    links: [
      { label: "View Code", href: "https://github.com/Saurabh-1785/RBAC.git" },
    ],
  },
  {
    title: "Interactive Tip Calculator",
    imageUrl: "/proj/interactive.webp",
    description: "A platform to calculate Tip amount and its distribution among every individual.",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://saurabh-1785.github.io/interactive-tip-calculator/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/interactive-tip-calculator" },
    ],
  },
];

const FormattedDescription = ({ text }: { text: string }) => {
  return (
    <div className="space-y-4 text-justify">
      {text.trim().split(/\n\s*\n/).map((para, i) => (
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
            return <span key={j} className="block">{line.trim()}</span>;
          })}
        </div>
      ))}
    </div>
  );
};

export default function ProjectsPage() {
  const [infoOpen, setInfoOpen] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto py-6 md:py-8">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
          My Projects
        </h2>
      </div>

      <ScrollStack
        className="relative"
        cardGap={24}
        scaleStep={0.03}
        stackGap={12}
        pinOffset={0.15}
      >
        {projects.map((project, i) => {
          const githubLink = project.links.find(l => l.label === "View Code")?.href;
          const demoLink = project.links.find(l => l.label === "Live Demo")?.href;

          return (
            <ScrollStackItem key={project.title}>
              <div 
                className="group bg-card border-[1.5px] border-edge rounded-[24px] transition-all duration-300 hover:border-edge-hover overflow-hidden relative flex flex-col md:flex-row shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)] h-auto md:h-[160px] cursor-pointer"
                onClick={() => setInfoOpen(project.title)}
              >
                {/* Image Section */}
                <div className="w-full md:w-[220px] h-[140px] md:h-full relative overflow-hidden bg-card-alt shrink-0">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale contrast-[1.1] brightness-[0.85] transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-edge/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Content Section */}
                <div className="p-5 md:px-8 md:py-0 flex-1 flex flex-col justify-center relative">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-black text-foreground truncate max-w-[70%]">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${project.status === "Completed" ? "bg-accent" : "bg-white/40"}`} />
                      <span className="text-[10px] font-bold text-muted uppercase tracking-wider">{project.status}</span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="bg-accent/5 text-[9px] font-bold text-accent px-2 py-0.5 rounded border border-accent/20 uppercase tracking-tight"
                      >
                        {tag}
                      </span>
                    ))}
                    <div className="text-accent text-[11px] font-bold uppercase tracking-widest flex items-center md:hidden ml-1">
                      Read More <span className="text-base">→</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-5 items-center">
                    <div className="text-secondary hover:text-accent transition-all duration-200 flex items-center gap-1.5">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                    </div>

                    {githubLink && (
                      <a 
                        href={githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-secondary hover:text-accent transition-all duration-200 z-10 p-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    )}

                    {demoLink && (
                      <a 
                        href={demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-secondary hover:text-accent transition-all duration-200 z-10 p-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          );
        })}
      </ScrollStack>

      <div className="h-[20vh]" />

      <div className="flex justify-center mt-12 mb-6">
        <a
          href="https://github.com/Saurabh-1785?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:text-accent flex items-center gap-2 group/link"
        >
          See all projects
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover/link:translate-x-1">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      {/* Info Modal */}
      {infoOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setInfoOpen(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
          <div
            className="relative bg-card border-[1.5px] border-edge rounded-[24px] p-8 max-w-md w-full shadow-2xl animate-[modalIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setInfoOpen(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-edge bg-transparent text-foreground cursor-pointer flex items-center justify-center hover:bg-accent/10 hover:text-accent hover:border-accent transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {(() => {
              const project = projects.find((p) => p.title === infoOpen);
              if (!project) return null;
              return (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-foreground mb-3 truncate">
                      {project.title}
                    </h3>
                    <div className="flex gap-1.5 flex-wrap">
                      {project.tech.map((tag) => (
                        <span key={tag} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-[11px] font-bold border border-accent/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-edge/10">
                    <FormattedDescription text={project.description} />
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
