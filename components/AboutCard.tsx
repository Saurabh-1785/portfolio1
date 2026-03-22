import React from "react";
import Link from "next/link";

export default function AboutCard() {
  return (
    <div className="bg-card border-[1.5px] border-edge rounded-[20px] p-7 transition-colors duration-200 delay-75 hover:border-edge-hover overflow-hidden lg:col-span-2 flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-label uppercase tracking-wide">
        About
      </h3>
      <p className="text-[15px] text-secondary leading-[1.7] flex-1">
        Hello, my name is Saurabh Chauhan, and I&apos;m a software development enthusiast with a keen interest
        in creating efficient, effective, and robust digital solutions. My area of expertise includes backend
        development and algorithms. My area of interest involves creating high-performance solutions,
        solving complex computational problems, and creating solutions with strong engineering principles and real-world applicability.
      </p>
      <Link
        href="/projects"
        className="flex items-center justify-between py-3.5 px-5 bg-btn text-btn-text no-underline rounded-xl text-sm font-semibold transition-colors duration-200 delay-75 hover:bg-btn-hover border-[1.5px] border-edge focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        View My Work
        <span className="text-lg">↗</span>
      </Link>
    </div>
  );
}
