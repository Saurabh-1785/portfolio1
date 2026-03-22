import React from "react";

export default function StatsBar() {
  return (
    <div className="col-span-1 md:col-span-2 bg-code border-[1.5px] border-edge rounded-[20px] overflow-hidden transition-colors duration-200 delay-75 hover:border-edge-hover h-full relative">
      {/* Decorative circle overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[30%] aspect-square rounded-full border-[1.5px] border-edge" />
      </div>

      <div className="flex flex-wrap h-full relative z-10">
        <div className="w-1/2 flex flex-col items-center justify-center text-center border-r border-b border-edge p-4 md:p-6">
          <p className="text-3xl md:text-4xl font-extrabold text-code-text leading-none">15+</p>
          <p className="text-code-text text-xs md:text-sm font-medium mt-2">Projects</p>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center text-center border-b border-edge p-4 md:p-6">
          <p className="text-3xl md:text-4xl font-extrabold text-code-text leading-none">215+</p>
          <p className="text-code-text text-xs md:text-sm font-medium mt-2">GitHub Commits</p>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center text-center border-r border-edge p-4 md:p-6">
          <p className="text-3xl md:text-4xl font-extrabold text-code-text leading-none">280+</p>
          <p className="text-code-text text-xs md:text-sm font-medium mt-2">Contributions Made</p>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center text-center p-4 md:p-6">
          <p className="text-3xl md:text-4xl font-extrabold text-code-text leading-none">3</p>
          <p className="text-code-text text-xs md:text-sm font-medium mt-2">Events Organized</p>
        </div>
      </div>
    </div>
  );
}
