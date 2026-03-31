"use client";

import { useState } from "react";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

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
    description: "The official TEDx NIT Hamirpur 2026 website, designed and developed to represent the organization’s digital presence. Built with a modern, responsive interface, it delivers a seamless user experience across devices while showcasing events, speakers, and initiatives. The platform ensures structured content delivery, smooth navigation, and a professional interface for engaging audiences and promoting TEDx activities effectively.",
    duration: "2024 - Present",
    tags: ["Web Dev", "Branding", "Responsive Design"],
  },
];

export default function WorkPage() {
  const [infoOpen, setInfoOpen] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto py-6 md:py-8">
      <div className="text-center mb-10 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
          Work
        </h1>
      </div>

      <ScrollStack
        className="relative"
        cardGap={20}
        scaleStep={0.04}
        stackGap={12}
        pinOffset={0.15}
      >
        {workHistory.map((work, i) => (
          <ScrollStackItem key={i}>
            <div 
              onClick={() => setInfoOpen(work.title)}
              className="group bg-card border-[1.5px] border-edge rounded-[24px] p-6 md:px-10 md:py-8 transition-all duration-300 hover:border-edge-hover shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)] cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-accent text-[10px] font-black tracking-widest uppercase py-0.5 px-2 bg-accent/10 border border-accent/20 rounded">
                      0{i + 1}
                    </span>
                    <span className="text-muted text-[11px] font-bold tracking-wider uppercase opacity-60">
                      {work.duration}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-foreground mb-1">
                    {work.title}
                  </h3>
                  <p className="text-accent text-sm font-bold opacity-80 mb-4 md:mb-0">
                    {work.role}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 md:max-w-[300px] md:justify-end">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold text-muted border border-edge/20 px-2 py-0.5 rounded uppercase tracking-tight bg-card-alt"
                    >
                      {tag}
                    </span>
                  ))}
                  <div className="ml-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-edge/10">
                <p className="text-secondary text-sm leading-relaxed opacity-80 line-clamp-2 md:line-clamp-3">
                  {work.description}
                </p>
                <div className="mt-3 text-accent text-[11px] font-bold uppercase tracking-widest flex items-center gap-1.5 md:hidden">
                  Read More <span className="text-base">→</span>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>

      <div className="h-[20vh]" />

      <div className="text-center pb-10">
        <p className="text-secondary text-sm opacity-60">
          More coming soon...
        </p>
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
              const work = workHistory.find((e) => e.title === infoOpen);
              if (!work) return null;
              return (
                <>
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                       <span className="text-muted text-[11px] font-bold tracking-wider uppercase opacity-60">{work.duration}</span>
                    </div>
                    <h3 className="text-2xl font-black text-foreground mb-2">
                      {work.title}
                    </h3>
                    <p className="text-accent text-sm font-bold opacity-90 mb-4">{work.role}</p>
                    <div className="flex gap-1.5 flex-wrap">
                      {work.tags.map((tag) => (
                        <span key={tag} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-[11px] font-bold border border-accent/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-edge/10">
                    <p className="text-secondary text-sm md:text-base leading-relaxed text-justify opacity-90">
                      {work.description}
                    </p>
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
