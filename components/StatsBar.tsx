"use client";

import React, { useState, useCallback } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import type { DotLottie } from "@lottiefiles/dotlottie-react";

export default function StatsBar() {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

  const dotLottieRefCallback = useCallback((instance: DotLottie | null) => {
    if (instance) {
      setDotLottie(instance);
      // Pause immediately so it shows the static first frame
      instance.addEventListener("load", () => {
        instance.pause();
      });
      // When a loop cycle completes while not hovered, stop and reset to frame 0
      instance.addEventListener("complete", () => {
        instance.pause();
        instance.setFrame(0);
      });
    }
  }, []);

  const handleMouseEnter = () => {
    if (dotLottie) {
      dotLottie.setLoop(true);
      dotLottie.play();
    }
  };

  const handleMouseLeave = () => {
    // Stop looping so the current cycle finishes, then the 'complete' event handles the rest
    dotLottie?.setLoop(false);
  };

  return (
    <div
      className="col-span-1 md:col-span-2 bg-code border-[1.5px] border-edge rounded-[20px] overflow-hidden transition-colors duration-200 delay-75 hover:border-edge-hover h-full relative"
      data-spotlight-card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Lottie Animation overlay - always visible, plays only on hover */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[70%] md:w-[50%] aspect-square dark:brightness-75 dark:saturate-150 transition-[filter] duration-300">
          <DotLottieReact
            src="https://lottie.host/da007cef-0fe3-44c1-b89a-176f561b099d/w78GrXdpDz.lottie"
            loop
            autoplay={false}
            dotLottieRefCallback={dotLottieRefCallback}
          />
        </div>
      </div>

      <div className="flex flex-wrap h-full relative z-10">
        <div className="w-1/2 flex flex-col items-center justify-center text-center border-r border-b border-edge p-4 md:p-6 group">
          <p className="text-3xl md:text-4xl font-extrabold text-code-text leading-none">15+</p>
          <p className="text-code-text text-xs md:text-sm font-medium mt-2">Projects</p>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center text-center border-b border-edge p-4 md:p-6">
          <p className="text-3xl md:text-4xl font-extrabold text-code-text leading-none">240+</p>
          <p className="text-code-text text-xs md:text-sm font-medium mt-2">GitHub Commits</p>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center text-center border-r border-edge p-4 md:p-6">
          <p className="text-3xl md:text-4xl font-extrabold text-code-text leading-none">300+</p>
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
