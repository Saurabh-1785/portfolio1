"use client";

import React from "react";

export default function StatsBar() {
  return (
    <div
      className="group bg-[#048379] overflow-hidden transition-colors duration-200 delay-75 h-full relative w-full flex items-center justify-center"
      data-spotlight-card
    >
      {/* Subtle HUD Grid Crosshairs (Dividing Lines) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/40 via-transparent to-white/40 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-white/40 via-transparent to-white/40 -translate-y-1/2 pointer-events-none" />

      {/* Target Focus/Scan Brackets overlay in the exact center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] md:w-[32%] max-w-[140px] aspect-square pointer-events-none transition-transform duration-500 group-hover:scale-105">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-white/90"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          {/* Outer Brackets Group */}
          <g>
            {/* Top Left Outer */}
            <path
              d="M 38 25 H 30 A 5 5 0 0 0 25 30 V 38"
              className="transition-transform duration-500 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1"
            />
            {/* Top Right Outer */}
            <path
              d="M 62 25 H 70 A 5 5 0 0 1 75 30 V 38"
              className="transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
            />
            {/* Bottom Left Outer */}
            <path
              d="M 25 62 V 70 A 5 5 0 0 0 30 75 H 38"
              className="transition-transform duration-500 ease-out group-hover:-translate-x-1 group-hover:translate-y-1"
            />
            {/* Bottom Right Outer */}
            <path
              d="M 75 62 V 70 A 5 5 0 0 1 70 75 H 62"
              className="transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </g>

          {/* Inner Brackets Group */}
          <g>
            {/* Top Left Inner */}
            <path
              d="M 43 36 H 39 A 3 3 0 0 0 36 39 V 43"
              className="transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
            {/* Top Right Inner */}
            <path
              d="M 57 36 H 61 A 3 3 0 0 1 64 39 V 43"
              className="transition-transform duration-500 ease-out group-hover:-translate-x-0.5 group-hover:translate-y-0.5"
            />
            {/* Bottom Left Inner */}
            <path
              d="M 36 57 V 61 A 3 3 0 0 0 39 64 H 43"
              className="transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
            {/* Bottom Right Inner */}
            <path
              d="M 64 57 V 61 A 3 3 0 0 1 61 64 H 57"
              className="transition-transform duration-500 ease-out group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </g>
        </svg>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 h-full w-full relative z-10 p-6 md:p-8">
        <div className="flex flex-col items-center justify-center text-center p-2">
          <p className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white leading-none tracking-tight">40+</p>
          <p className="text-white/80 text-xs md:text-sm lg:text-base font-semibold mt-2 md:mt-3">Projects</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-2">
          <p className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white leading-none tracking-tight">400+</p>
          <p className="text-white/80 text-xs md:text-sm lg:text-base font-semibold mt-2 md:mt-3">GitHub Commits</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-2">
          <p className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white leading-none tracking-tight">450+</p>
          <p className="text-white/80 text-xs md:text-sm lg:text-base font-semibold mt-2 md:mt-3">Contributions Made</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-2">
          <p className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white leading-none tracking-tight">5</p>
          <p className="text-white/80 text-xs md:text-sm lg:text-base font-semibold mt-2 md:mt-3">Events Organized</p>
        </div>
      </div>
    </div>
  );
}
