"use client";

import { useState } from "react";
import HeroCard from "@/components/HeroCard";
import AboutCard from "@/components/AboutCard";
import SocialCard from "@/components/SocialCard";
import ExpertiseCard from "@/components/ExpertiseCard";
import ProjectGrid from "@/components/ProjectGrid";
import StatsBar from "@/components/StatsBar";
import ProjectModal from "@/components/ProjectModal";
import GitHubContributionCard from "@/components/GitHubContributionCard";
import SpotlightGrid from "@/components/SpotlightGrid";

const skills = [
  "C/C++",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML/CSS",
  "Git/Github",
  "Node.js",
  "Express",
  "Python",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Postman",
  "Linux",
];

const projects = [
  {
    title: "APE AI",
    description:
      `Problem: 
    Companies receive large volumes of customer feedback from multiple sources, but this data is unstructured and difficult to analyze. Product teams must manually review, categorize, and convert feedback into requirements, which is time-consuming, error-prone, and often leads to missed insights and delayed product improvements.

    Solution: 
    Automatically transforms raw customer feedback into structured product requirements. It analyzes feedback, identifies key issues, generates validated requirements, and converts them into engineering-ready tasks, enabling faster and more data-driven product decision-making.`,
    status: "In Progress" as const,
  },
  {
    title: "PathBound",
    description: `
    Problem:
    Traditional currency exchange and remittance systems expose users to unpredictable exchange rates and hidden fees. In volatile markets, users often receive significantly less than expected, with little transparency or control over the conversion rate. Additionally, there is no mechanism to set conditions like minimum acceptable rates or timing, leaving users dependent on centralized intermediaries.

    Solution:
    PathBound addresses this by enabling rate-protected exchange intents using blockchain-based path payments. Users can define a minimum acceptable exchange rate and a valid time window for execution, ensuring better control and predictability. Funds remain secure under user custody until execution, and transactions are processed atomically, guaranteeing that exchanges either complete fully at the desired rate or not at all.`,
    github: "https://github.com/Saurabh-1785/PathBound.git",
    demo: "https://pathbound.vercel.app/",
    status: "Completed" as const,
  },
  {
    title: "CodeSync",
    description: `
    Problem:
    Traditional code collaboration relies on version control systems that are not truly real-time, leading to delays, merge conflicts, and inefficient teamwork. Developers often struggle with tracking changes, coordinating edits, and maintaining consistency when multiple people work on the same file simultaneously.

    Solution:
    CodeSync solves this by providing a real-time collaborative coding environment where multiple developers can edit code simultaneously with instant synchronization. Features like live cursors, user presence, and conflict-free editing using CRDTs ensure smooth collaboration. With built-in syntax highlighting and independent undo/redo history, it creates a seamless and efficient coding experience for teams working together from anywhere.`,
    github: "https://github.com/Saurabh-1785/CodeSync.git",
    demo: "https://code-sync-iv3p.vercel.app/",
    status: "Completed" as const,
  },
  {
    title: "ResumeFlow",
    description: `
    An AI-powered CV generator that converts user input into a polished, ATS-optimized resume with professional formatting. It leverages real-time LaTeX compilation to provide instant preview and high-quality PDF output, ensuring accuracy, customization, and a seamless resume-building experience across devices.`,
    github: "https://github.com/Saurabh-1785/ResumeFlow.git",
    demo: "https://resume-flow-project.vercel.app/",
    status: "Completed" as const,
  },
];

export default function HomePage() {
  const [infoOpen, setInfoOpen] = useState<string | null>(null);

  return (
    <>
      <SpotlightGrid className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden">
        <HeroCard />
        <AboutCard />
        <SocialCard />
        <ExpertiseCard skills={skills} />
        <ProjectGrid projects={projects} onOpenInfo={setInfoOpen} />
        <StatsBar />
        <GitHubContributionCard />
      </SpotlightGrid>

      <ProjectModal
        projects={projects}
        infoOpen={infoOpen}
        onClose={() => setInfoOpen(null)}
      />
    </>
  );
}
