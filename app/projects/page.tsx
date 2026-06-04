"use client";

import { useState } from "react";

const projects = [
  {
    title: "GoLink- Distributed URL Shortener",
    imageUrl: "/proj/url.webp",
    date: "May 2026",
    pinned: true,
    description: `Problem:
Scaling a URL shortener to handle millions of redirects per second requires low-latency resolution, high availability, and efficient storage. Traditional relational database lookups become bottlenecks under heavy load.

Solution:
A highly scalable, distributed URL shortener built to handle massive traffic. Features a globally distributed database layer, high-performance in-memory caching, unique ID generation using a custom epoch-based generator, and robust redirection logic with integrated analytics.`,
    tech: ["GO", "REDIS", "POSTGRESQL", "DOCKER"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/golink.git" },
    ],
  },
  {
    title: "APE AI",
    imageUrl: "/proj/ape.webp",
    date: "May 2026",
    pinned: true,
    description: `Problem: 
Companies receive large volumes of customer feedback from multiple sources, but this data is unstructured and difficult to analyze. Product teams must manually review, categorize, and convert feedback into requirements, which is time-consuming, error-prone, and often leads to missed insights and delayed product improvements.

Solution: 
Automatically transforms raw customer feedback into structured product requirements. It analyzes feedback, identifies key issues, generates validated requirements, and converts them into engineering-ready tasks, enabling faster and more data-driven product decision-making.`,
    tech: ["AI Automation", "Gemini API", "Supabase", "Next.js"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://apeai-nine.vercel.app/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/apeai.git" },
    ],
  },
  {
    title: "TEDxNIT Hamirpur Website",
    imageUrl: "/proj/tedx.webp",
    date: "Dec 2025",
    pinned: true,
    description: `The official TEDx NIT Hamirpur 2026 website, designed and developed to represent the organization’s digital presence. Built with a modern, responsive interface, it delivers a seamless user experience across devices while showcasing events, speakers, and initiatives.`,
    tech: ["NEXT.JS", "TAILWIND", "ANIMATIONS"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://tedx-website-self.vercel.app/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/tedx-website.git" },
    ],
  },
  {
    title: "PathBound",
    imageUrl: "/proj/pathbound.webp",
    date: "Dec 2025",
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
    date: "Sept 2025",
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
    date: "Jan 2026",
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
    date: "Jan 2026",
    description: `Problem:
Identifying bugs and code issues in JavaScript often relies on executing the code or manual reviews.

Solution:
VeriJS provides a lightweight static analysis tool that detects issues without running the code by parsing code into an Abstract Syntax Tree (AST).`,
    tech: ["BABEL", "MONACO EDITOR", "JAVASCRIPT"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://veri-js-lake.vercel.app/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/VeriJS.git" },
    ],
  },
  {
    title: "Zenith",
    imageUrl: "/proj/zenith.webp",
    date: "March 2026",
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
    date: "Feb 2026",
    description: `Problem:
Finding nearby resources like hospitals or restaurants in real-time can be inefficient.

Solution:
GeoFinder addresses this by offering a WebGIS-based platform that integrates geolocation, geocoding, and real-time spatial queries.`,
    tech: ["LEAFLET", "AXIOS", "OPENSTREET MAP API"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://geofinder-5j69.onrender.com/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/GeoFinder.git" },
    ],
  },
  {
    title: "ECI-Secure Vote",
    imageUrl: "/proj/eci.webp",
    date: "Oct 2025",
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
    date: "March 2026",
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
    date: "Jul 2025",
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

  // Helper to extract a short snippet from the description for the card
  const getShortDescription = (desc: string) => {
    // Remove "Problem:" or "Solution:" and take the first paragraph
    const cleanDesc = desc.replace(/Problem:\s*/i, '').replace(/Solution:\s*/i, '');
    const firstPara = cleanDesc.split(/\n/)[0].trim();
    return firstPara.length > 120 ? firstPara.substring(0, 117) + '...' : firstPara;
  };

  return (
    <div className="relative min-h-screen">
      {/* Minimal Professional Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 flex justify-center overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-[-20%] w-[80%] md:w-[60%] h-[500px] bg-accent/10 blur-[120px] rounded-full" />
        {/* Lightweight Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.03] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-accent"></div>
              <span className="text-accent font-mono text-sm tracking-widest">02</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-foreground mb-6">
              My <span className="text-accent">Projects</span>
            </h2>
            <p className="text-secondary max-w-md leading-relaxed text-sm">
              A collection of things I've built, explored and shipped. Each project taught me something new.
            </p>
          </div>

          <div className="hidden md:block relative group">
            <div className="absolute inset-0 bg-accent/5 rounded-xl border border-accent/20 border-dashed transform -skew-x-6 transition-transform duration-500 group-hover:skew-x-0" />
            <div className="relative p-6 font-mono text-xs text-secondary leading-loose">
              <div className="flex items-center gap-3">
                <span className="text-accent">{'>'}</span>
                Building ideas. Solving problems.
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent">{'>'}</span>
                One project at a time.
              </div>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {[...projects]
            .sort((a, b) => {
              // Pin specifically marked projects to the top
              if (a.pinned && !b.pinned) return -1;
              if (!a.pinned && b.pinned) return 1;
              if (a.pinned && b.pinned) {
                // Maintain relative order as defined in the projects array
                return projects.findIndex(p => p.title === a.title) - projects.findIndex(p => p.title === b.title);
              }

              const months: Record<string, number> = {
                jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
                jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
              };
              const parseDate = (d: string) => {
                const parts = d.trim().split(/\s+/);
                if (parts.length === 2) {
                  const m = parts[0].toLowerCase().substring(0, 3);
                  const y = parseInt(parts[1], 10);
                  return new Date(y, months[m] ?? 0).getTime();
                }
                return 0;
              };
              return parseDate(b.date) - parseDate(a.date);
            })
            .map((project) => {
              const githubLink = project.links.find(l => l.label === "View Code")?.href;
              const demoLink = project.links.find(l => l.label === "Live Demo")?.href;
              const date = project.date;

              return (
                <div
                  key={project.title}
                  className="group flex flex-col bg-card/50 border border-edge rounded-[24px] overflow-hidden hover:border-accent/50 hover:bg-card transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] cursor-pointer"
                  onClick={() => setInfoOpen(project.title)}
                >
                  {/* Image Container (Replaced with Green Dots) */}
                  <div
                    className="relative h-[120px] overflow-hidden bg-card-alt shrink-0 transition-colors duration-500"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle,#10b981_1.5px,transparent_1.5px)] bg-[size:20px_20px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />
                  </div>

                  {/* Card Content */}
                  <div className="p-5 md:p-6 flex flex-col flex-1 relative z-10">
                    <div className="flex items-center gap-2 mb-3 text-accent font-mono text-xs font-bold uppercase">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {date}
                    </div>

                    <h3
                      className="text-xl md:text-xl font-black text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors"
                    >
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="bg-accent/5 text-[10px] font-bold text-accent px-2.5 py-1 rounded-md border border-accent/10 uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer / Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-edge/40 mt-auto">
                      <div className="flex items-center gap-4">
                        <button
                          className="text-secondary hover:text-foreground transition-colors p-1"
                          aria-label="More info"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
                          </svg>
                        </button>

                        {githubLink && (
                          <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-foreground transition-colors p-1"
                            aria-label="GitHub Repository"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                          </a>
                        )}
                      </div>

                      <a
                        href={demoLink || githubLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent text-[11px] font-black tracking-widest uppercase flex items-center gap-1.5 group/link hover:text-accent/80 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        VIEW PROJECT
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                          <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Info Modal */}
        {infoOpen && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={() => setInfoOpen(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
            <div
              className="relative bg-card border-[1.5px] border-edge rounded-[32px] p-8 md:p-10 max-w-lg w-full shadow-[0_20px_60px_rgba(0,0,0,0.5)] animate-[modalIn_0.2s_ease-out]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setInfoOpen(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full border border-edge bg-transparent text-foreground cursor-pointer flex items-center justify-center hover:bg-accent/10 hover:text-accent hover:border-accent transition-all duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {(() => {
                const project = projects.find((p) => p.title === infoOpen);
                if (!project) return null;
                return (
                  <>
                    <div className="mb-8 pr-12">
                      <h3 className="text-3xl font-black text-foreground mb-4">
                        {project.title}
                      </h3>
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((tag) => (
                          <span key={tag} className="bg-accent/10 text-accent px-3 py-1.5 rounded-full text-[11px] font-bold border border-accent/20 tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-edge/20">
                      <FormattedDescription text={project.description} />
                    </div>
                    <div className="mt-8 pt-8 border-t border-edge/20 flex gap-4">
                      {project.links.map(link => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-card-alt border border-edge hover:border-accent hover:text-accent transition-colors text-sm font-bold tracking-wider"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
