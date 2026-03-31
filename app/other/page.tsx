"use client";

import React from "react";

export default function OtherPage() {
  return (
    <div className="max-w-4xl mx-auto min-h-[70vh] flex flex-col items-center justify-center py-20 px-6">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase">
          Blog and Documentation
        </h1>
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-[2px] bg-accent/30 rounded-full" />
          <p className="text-secondary text-base md:text-lg font-bold tracking-[0.3em] uppercase opacity-40 animate-pulse">
            Coming soon...
          </p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[-1]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] opacity-50" />
      </div>
    </div>
  );
}
