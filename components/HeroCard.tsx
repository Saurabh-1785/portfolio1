import React from "react";
import TextType from "./TextType";
import PixelTransition from "./PixelTransition";

export default function HeroCard() {
  return (
    <div data-spotlight-card className="bg-[#048379] overflow-hidden transition-colors duration-200 delay-75 relative p-5 flex flex-col items-center md:min-h-[380px] lg:min-h-[420px] lg:row-span-2 w-full h-full">
      <div className="hidden md:flex w-full flex-1 rounded-2xl overflow-hidden relative group/photo">
        <PixelTransition
          firstContent={
            <img
              src="/Saurabh.webp"
              alt="Saurabh Chauhan"
              className="w-full h-full object-contain object-bottom"
              loading="eager"
              fetchPriority="high"
            />
          }
          secondContent={
            <img
              src="/Saurabh.webp"
              alt="Saurabh Chauhan Active"
              className="w-full h-full object-contain object-bottom"
              loading="eager"
              fetchPriority="high"
            />
          }
          gridSize={12}
          pixelColor="#048379"
          animationStepDuration={0.3}
          once={false}
          className="w-full h-full"
        />
      </div>
      <h1 className="hidden md:block text-[28px] md:text-[24px] lg:text-[32px] font-extrabold leading-[1.15] text-white text-center pt-4 pb-2 min-h-[88px] lg:min-h-[100px]">
        <TextType
          text="Saurabh Chauhan"
          typingSpeed={100}
          deletingSpeed={50}
          pauseDuration={3000}
          loop={true}
          showCursor={true}
          cursorCharacter="|"
          cursorClassName="text-white"
        />
      </h1>
      <div className="flex md:hidden flex-col items-center py-4 gap-1">
        {/* Mobile Profile Photo (Centered, no transition effect) */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 mb-3 shadow-md bg-white/5">
          <img
            src="/Saurabh.webp"
            alt="Saurabh Chauhan"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h1 className="text-2xl font-extrabold leading-tight text-white text-center min-h-[32px]">
          <TextType
            text="Saurabh Chauhan"
            typingSpeed={100}
            deletingSpeed={50}
            pauseDuration={3000}
            loop={true}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="text-white"
          />
        </h1>
        <p className="text-sm text-white/80 font-medium tracking-wide">
          Full-Stack Developer
        </p>
      </div>
    </div>
  );
}
