"use client";

import { useState } from "react";
import HeroCard from "@/components/HeroCard";
import AboutCard from "@/components/AboutCard";
import SocialCard from "@/components/SocialCard";
import ExpertiseCard from "@/components/ExpertiseCard";
import ProjectGrid from "@/components/ProjectGrid";
import StatsBar from "@/components/StatsBar";
import ProjectModal from "@/components/ProjectModal";

const skills = [
  "Python",
  "C/C++",
  "JavaScript",
  "React",
  "Next.js",
  "HTML/CSS",
  "Git/Github",
  "Node.js",
  "Linux",
];

const projects = [
  {
    title: "PathBound",
    description:
      "A platform to discover and navigate personalized learning paths for career growth and skill development.",
    github: "https://github.com/Saurabh-1785/PathBound",
    demo: "https://pathbound.vercel.app/",
    status: "Completed" as const,
  },
  {
    title: "ResumeFlow",
    description:
      "An intuitive resume builder that helps users create professional resumes with customizable templates and real-time preview.",
    github: "https://github.com/Saurabh-1785/ResumeFlow.git",
    demo: "https://resume-flow-project.vercel.app/",
    status: "Completed" as const,
  },
  {
    title: "CodeSync",
    description:
      "A real-time collaborative code editor that allows multiple developers to write and sync code simultaneously.",
    github: "https://github.com/Saurabh-1785/CodeSync.git",
    demo: "https://code-sync-iv3p.vercel.app/",
    status: "Completed" as const,
  },
  {
    title: "VeriJS",
    description:
      "A JavaScript verification and testing utility that helps developers validate code logic and catch errors early.",
    github: "https://github.com/Saurabh-1785/VeriJS.git",
    demo: "https://veri-js-lake.vercel.app/",
    status: "In Progress" as const,
  },
];

export default function HomePage() {
  const [infoOpen, setInfoOpen] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden">
        <HeroCard />
        <AboutCard />
        <SocialCard />
        <ExpertiseCard skills={skills} />
        <ProjectGrid projects={projects} onOpenInfo={setInfoOpen} />
        <StatsBar />
      </div>

      <ProjectModal
        projects={projects}
        infoOpen={infoOpen}
        onClose={() => setInfoOpen(null)}
      />
    </>
  );
}
