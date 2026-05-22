import React from "react";
import Link from "next/link";

export default function AboutCard() {
  return (
    <div
      data-spotlight-card
      className="bg-card p-7 transition-colors duration-200 delay-75 overflow-hidden md:col-span-2 lg:col-span-2 flex flex-col justify-between w-full h-full min-h-[340px] lg:min-h-[380px]"
    >
      {/* Header */}
      <div className="flex flex-col gap-1 items-start">
        <h3 className="text-xs font-bold text-accent uppercase tracking-widest leading-none">
          ABOUT
        </h3>
        <div className="w-7 h-[2px] bg-accent/60 mt-1.5 rounded" />
      </div>

      {/* Paragraphs - centered vertically inside flex-1 */}
      <div className="flex-1 flex flex-col justify-center gap-4 my-6 text-[15px] md:text-[16px] text-secondary leading-[1.75] text-justify">
        <p>
          Computer Science student and full-stack developer focused on building clean, practical, and user-friendly applications. Skilled in modern web technologies like React and Node.js, with a strong interest in solving real-world problems through efficient and scalable solutions.
        </p>
        <p>
          Emphasis on performance, usability, and thoughtful design, along with active involvement in tech communities to strengthen communication and leadership skills.
        </p>
      </div>

      {/* Button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-accent/25 bg-white dark:bg-zinc-950 text-accent hover:bg-accent/5 hover:border-accent hover:scale-[1.03] transition-all duration-300 text-xs md:text-sm font-bold shadow-sm no-underline w-fit focus-visible:outline-accent focus-visible:outline-offset-1"
      >
        <span>View My Work</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="inline-block"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </Link>
    </div>
  );
}
