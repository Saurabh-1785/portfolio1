import React from "react";

export default function HeroCard() {
  return (
    <div data-spotlight-card className="bg-card overflow-hidden transition-colors duration-200 delay-75 relative p-5 flex flex-col items-center md:min-h-[380px] lg:min-h-[420px] lg:row-span-2 w-full h-full">
      <div className="hidden md:flex w-full flex-1 rounded-2xl overflow-hidden relative group/photo">
        <img
          src="/Saurabh(white).webp"
          alt="Saurabh Chauhan"
          className="w-full h-full object-cover block dark:hidden"
          loading="eager"
          fetchPriority="high"
        />
        <img
          src="/Saurabh(dark).webp"
          alt="Saurabh Chauhan"
          className="w-full h-full object-cover hidden dark:block"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <h1 className="hidden md:block text-[28px] md:text-[24px] lg:text-[32px] font-extrabold leading-[1.15] text-foreground text-center pt-4 pb-2">
        Saurabh<br />
        Chauhan
      </h1>
      <div className="flex md:hidden flex-col items-center py-4 gap-1">
        <h1 className="text-2xl font-extrabold leading-tight text-foreground text-center">
          Saurabh Chauhan
        </h1>
        <p className="text-sm text-muted font-medium tracking-wide">
          Full-Stack Developer
        </p>
      </div>
    </div>
  );
}
