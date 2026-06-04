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
