"use client";

import React from "react";

interface ExpertiseCardProps {
  skills: string[];
}

const skillMap: Record<string, { iconUrl: string; darkInvert?: boolean }> = {
  "C/C++": {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
  JavaScript: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  TypeScript: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  React: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  "Next.js": {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    darkInvert: true,
  },
  "HTML/CSS": {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  "Git/Github": {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  "Node.js": {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  Express: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    darkInvert: true,
  },
  Linux: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  },
  Python: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  Tailwind: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  MongoDB: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  PostgreSQL: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  Postman: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
};

export default function ExpertiseCard({ skills }: ExpertiseCardProps) {
  return (
    <div
      data-spotlight-card
      className="bg-card border-[1.5px] border-edge rounded-[20px] p-7 transition-colors duration-200 delay-75 hover:border-edge-hover overflow-hidden md:col-span-3 lg:col-span-3 flex flex-col gap-4"
    >
      <h3 className="text-sm font-semibold text-label uppercase tracking-wide">
        Expertise
      </h3>
      <div className="flex flex-nowrap overflow-x-auto gap-6 no-scrollbar items-center">
        {skills.map((skill) => {
          const info = skillMap[skill];
          if (!info) return null;
          return (
            <div
              key={skill}
              className="flex flex-col items-center gap-2.5 shrink-0 group cursor-default"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={info.iconUrl}
                alt={skill}
                className={`w-9 h-9 transition-all duration-300 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100${
                  info.darkInvert ? " dark:invert" : ""
                }`}
              />
              <span className="text-[10px] font-semibold text-muted transition-colors duration-300 group-hover:text-foreground whitespace-nowrap">
                {skill}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
