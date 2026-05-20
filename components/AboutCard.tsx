import React from "react";
import Link from "next/link";

export default function AboutCard() {
  return (
    <div data-spotlight-card className="bg-card p-7 transition-colors duration-200 delay-75 overflow-hidden md:col-span-2 lg:col-span-2 flex flex-col gap-4 w-full h-full">
      <h3 className="text-sm font-semibold text-label uppercase tracking-wide">
        About
      </h3>
      <p className="text-[15px] text-secondary leading-[1.7] flex-1 text-justify">
        Computer Science student and full-stack developer focused on building clean, practical, and user-friendly applications. Skilled in modern web technologies like React and Node.js, with a strong interest in solving real-world problems through efficient and scalable solutions. Emphasis on performance, usability, and thoughtful design, along with active involvement in tech communities to strengthen communication and leadership skills.
      </p>
      <Link
        href="/projects"
        className="pill-btn no-underline focus-visible:outline-accent focus-visible:outline-offset-1"
      >
        <span className="pill-btn-label-stack">
          <span className="pill-btn-label">
            View My Work
            <span className="text-lg">↗</span>
          </span>
          <span className="pill-btn-label-hover" aria-hidden="true">
            View My Work
            <span className="text-lg">↗</span>
          </span>
        </span>
      </Link>
    </div>
  );
}
