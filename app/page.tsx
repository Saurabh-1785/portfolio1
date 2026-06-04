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

const workHistory = [
  {
    title: "Google Developers Groups Ludhiana - NITH Chapter",
    role: "Community Member",
    duration: "2024 - PRESENT",
    icon: "code",
  },
  {
    title: "TEDxNIT Hamirpur",
    role: "Core Team Member",
    duration: "2024 - PRESENT",
    icon: "people",
  },
];

const projects = [
  {
    title: "GoLink",
    shortDescription: "A highly-scalable distributed URL shortener designed to redirect traffic with microsecond latency.",
    description: `Problem:
    Scaling a URL shortener to handle millions of redirects per second requires low-latency resolution, high availability, and efficient storage. Traditional relational database lookups become bottlenecks under heavy load.

    Solution:
    A highly scalable, distributed URL shortener built to handle massive traffic. Features a globally distributed database layer, high-performance in-memory caching, unique ID generation using a custom epoch-based generator, and robust redirection logic with integrated analytics.`,
    github: "https://github.com/Saurabh-1785/golink.git",
    demo: "",
    status: "Completed" as const,
  },
  {
    title: "APE AI",
    shortDescription: "AI-powered platform that helps users generate, refine and optimize content using advanced language models.",
    description:
      `Problem: 
    Companies receive large volumes of customer feedback from multiple sources, but this data is unstructured and difficult to analyze. Product teams must manually review, categorize, and convert feedback into requirements, which is time-consuming, error-prone, and often leads to missed insights and delayed product improvements.

    Solution: 
    Automatically transforms raw customer feedback into structured product requirements. It analyzes feedback, identifies key issues, generates validated requirements, and converts them into engineering-ready tasks, enabling faster and more data-driven product decision-making.`,
    github: "https://github.com/Saurabh-1785/apeai.git",
    demo: "https://apeai-nine.vercel.app/",
    status: "In Progress" as const,
  },
  {
    title: "PathBound",
    shortDescription: "A travel companion that helps users discover personalized routes, nearby places and plan memorable journeys.",
    description: `
    Problem:
    Traditional currency exchange and remittance systems expose users to unpredictable exchange rates and hidden fees. In volatile markets, users often receive significantly less than expected, with little transparency or control over the conversion rate. Additionally, there is no mechanism to set conditions like minimum acceptable rates or timing, leaving users dependent on centralized intermediaries.

    Solution:
    PathBound addresses this by enabling rate-protected exchange intents using blockchain-based path payments. Users can define a minimum acceptable exchange rate and a valid time window for execution, ensuring better control and predictability. Funds remain secure under user custody until execution, and transactions are processed atomically, guaranteeing that exchanges either complete fully at the desired rate or not at all.`,
    github: "https://github.com/Saurabh-1785/PathBound.git",
    demo: "https://pathbound.vercel.app/",
    status: "Completed" as const,
  },
];

export default function HomePage() {
  const [infoOpen, setInfoOpen] = useState<string | null>(null);

  return (
    <>
      <div className="w-screen relative left-1/2 -translate-x-1/2 -mt-8 md:-mt-20">
        <SpotlightGrid className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-0 overflow-hidden shadow-2xl">
          <HeroCard />
          <AboutCard />
          <SocialCard />
          <ExpertiseCard skills={skills} />
          <ProjectGrid projects={projects} workHistory={workHistory} onOpenInfo={setInfoOpen} />
          {/* Right side: GitHub chart on top, StatsBar on bottom */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 flex flex-col w-full h-full">
            <GitHubContributionCard />
            <StatsBar />
          </div>
        </SpotlightGrid>
      </div>

      <ProjectModal
        projects={projects}
        infoOpen={infoOpen}
        onClose={() => setInfoOpen(null)}
      />
    </>
  );
}
