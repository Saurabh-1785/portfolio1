"use client";

import { useState } from "react";

const workHistory = [
  {
    title: "Google Developers Groups Ludhiana - NITH Chapter",
    role: "Executive",
    description: "Actively involved in organizing technical workshops, hackathons, and community meetups to foster technological innovation and peer-to-peer learning. Working with the NITH Chapter to bridge the gap between academic learning and industry standards through Google technology-focused initiatives and collaborative projects.",
    duration: "2024 - Present",
    tags: ["Community", "Leadership", "Technical Events"],
  },
  {
    title: "TEDxNIT Hamirpur",
    role: "Core Team Member",
    description: "Designed and developed the official TEDx NIT Hamirpur 2026 website to represent the organization’s digital presence. Built with a modern, responsive interface, it delivers a seamless user experience across devices while showcasing events, speakers, and initiatives. The platform ensures structured content delivery, smooth navigation, and a professional interface for engaging audiences and promoting TEDx activities effectively.",
    duration: "2024 - Present",
    tags: ["Web Dev", "Branding", "Responsive Design"],
  },
  {
    title: "Google Student Ambassador",
    role: "Student Ambassador",
    description: "Representing Google technologies on campus, bridging the gap between developers and students. Organising peer-to-peer workshops, tech talks, and hackathons to build a vibrant developer community and help students grow their skill sets using Google Developer resources.",
    duration: "2026 - Present",
    tags: ["Community", "Google", "Advocacy"],
  },
];

export default function WorkPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 md:pb-12 border-b border-edge/20">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-accent"></div>
              <span className="text-accent font-mono text-sm tracking-widest">03</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-foreground mb-6">
              Work <span className="text-accent">Experience</span>
            </h2>
            <p className="text-secondary max-w-md leading-relaxed text-sm">
              My professional journey, community initiatives, and roles. Click on any experience to learn more about my responsibilities and achievements.
            </p>
          </div>

          <div className="hidden md:block relative group">
            <div className="absolute inset-0 bg-accent/5 rounded-xl border border-accent/20 border-dashed transform -skew-x-6 transition-transform duration-500 group-hover:skew-x-0" />
            <div className="relative p-6 font-mono text-xs text-secondary leading-loose">
              <div className="flex items-center gap-3">
                <span className="text-accent">{'>'}</span>
                Collaborating. Building.
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent">{'>'}</span>
                Learning continuously.
              </div>
            </div>
          </div>
        </div>

      {/* Horizontal Stack Section */}
      <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto mb-16">
        {workHistory.map((work, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <div
              key={work.title}
              onClick={() => toggleExpand(i)}
              className="group flex flex-col bg-card/50 border border-edge rounded-[24px] p-6 md:px-8 md:py-6 overflow-hidden hover:border-accent/50 hover:bg-card transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] cursor-pointer"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-accent text-[10px] font-black tracking-widest uppercase py-0.5 px-2 bg-accent/10 border border-accent/20 rounded">
                      0{i + 1}
                    </span>
                    <span className="text-muted text-[11px] font-bold tracking-wider uppercase opacity-60">
                      {work.duration}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                    {work.title}
                  </h3>
                  <p className="text-accent text-sm font-bold opacity-80">
                    {work.role}
                  </p>
                </div>

                {/* Right side tags & chevron */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-accent/5 text-[10px] font-bold text-accent px-2.5 py-1 rounded-md border border-accent/10 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-secondary/60 group-hover:text-accent transition-colors duration-300 ml-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Collapsible Expandable description using CSS Grid transition trick */}
              <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-edge/10" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="text-secondary text-sm md:text-base leading-relaxed text-justify opacity-90">
                    {work.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center pb-10">
        <p className="text-secondary text-sm opacity-60">
          More experiences coming soon...
        </p>
      </div>
    </div>
  </div>
  );
}
