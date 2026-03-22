import React from "react";

export default function HeroCard() {
  return (
    <div className="bg-card border-[1.5px] border-edge rounded-[20px] overflow-hidden transition-colors duration-200 delay-75 hover:border-edge-hover relative p-4 flex flex-col items-center md:min-h-[420px] lg:row-span-2">
      {/* Photo — hidden on mobile */}
      <div className="hidden md:flex w-full flex-1 rounded-2xl overflow-hidden">
        <img
          src="/Saurabh(white).webp"
          alt="Saurabh Chauhan"
          className="w-full h-full object-cover block dark:hidden"
        />
        <img
          src="/Saurabh(dark).webp"
          alt="Saurabh Chauhan"
          className="w-full h-full object-cover hidden dark:block"
        />
      </div>
      {/* Desktop name */}
      <h1 className="hidden md:block text-[28px] md:text-[32px] font-extrabold leading-[1.15] text-foreground text-center pt-4 pb-2">
        Saurabh<br />
        Chauhan
      </h1>
      {/* Mobile name + subtitle */}
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
