"use client";

import React, { useRef, useEffect, useState } from "react";

interface PixelTransitionProps {
  firstContent: React.ReactNode;
  secondContent: React.ReactNode;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number; // Duration of one phase (show or hide) in seconds
  once?: boolean;
  className?: string;
}

export default function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 10,
  pixelColor = "#048379",
  animationStepDuration = 0.3,
  once = false,
  className = "",
}: PixelTransitionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pixelGridRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);
  
  const timeoutsRef = useRef<number[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);

  const isTouchDevice = typeof window !== "undefined" && (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );

  // Initialize the pixel grid elements
  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = "";

    const totalGrid = gridSize * gridSize;
    const size = 100 / gridSize;

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement("div");
        pixel.className = "pixelated-image-card__pixel";
        pixel.style.backgroundColor = pixelColor;
        pixel.style.width = `${size + 0.1}%`; // Slight overlap to avoid tiny lines between pixels
        pixel.style.height = `${size + 0.1}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;
        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeoutsRef.current.forEach((id) => clearTimeout(id));
    };
  }, []);

  const animatePixels = (activate: boolean): void => {
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    if (!pixelGridEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll<HTMLDivElement>(
      ".pixelated-image-card__pixel"
    );
    if (!pixels.length) return;

    // Clear all existing timeouts
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];

    // Reset all pixels to hidden
    pixels.forEach((pixel) => {
      pixel.style.display = "none";
    });

    const totalPixels = pixels.length;
    
    // Create random list of indices
    const indices = Array.from({ length: totalPixels }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    const staggerDuration = (animationStepDuration * 1000) / totalPixels;

    // Phase 1: Reveal pixels randomly to cover the content
    indices.forEach((pixelIndex, seqIndex) => {
      const showTimeout = window.setTimeout(() => {
        if (pixels[pixelIndex]) {
          pixels[pixelIndex].style.display = "block";
        }
      }, seqIndex * staggerDuration);
      
      timeoutsRef.current.push(showTimeout);
    });

    // Midpoint: Swap contents once fully covered
    const midTimeout = window.setTimeout(() => {
      if (activeEl) {
        activeEl.style.display = activate ? "block" : "none";
        activeEl.style.pointerEvents = activate ? "none" : "";
      }
    }, animationStepDuration * 1000);
    timeoutsRef.current.push(midTimeout);

    // Phase 2: Hide pixels randomly to reveal the new content
    indices.forEach((pixelIndex, seqIndex) => {
      const hideTimeout = window.setTimeout(() => {
        if (pixels[pixelIndex]) {
          pixels[pixelIndex].style.display = "none";
        }
      }, (animationStepDuration * 1000) + (seqIndex * staggerDuration));
      
      timeoutsRef.current.push(hideTimeout);
    });
  };

  const handleEnter = (): void => {
    if (!isActive) animatePixels(true);
  };

  const handleLeave = (): void => {
    if (isActive && !once) animatePixels(false);
  };

  const handleClick = (): void => {
    if (!isActive) animatePixels(true);
    else if (isActive && !once) animatePixels(false);
  };

  return (
    <div
      ref={containerRef}
      className={`pixelated-image-card ${className}`}
      onMouseEnter={!isTouchDevice ? handleEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleLeave : undefined}
      onClick={isTouchDevice ? handleClick : undefined}
      onFocus={!isTouchDevice ? handleEnter : undefined}
      onBlur={!isTouchDevice ? handleLeave : undefined}
      tabIndex={0}
      role="button"
      aria-label="Pixel transition animation"
    >
      <div className="pixelated-image-card__default" aria-hidden={isActive}>
        {firstContent}
      </div>
      <div
        className="pixelated-image-card__active"
        ref={activeRef}
        aria-hidden={!isActive}
      >
        {secondContent}
      </div>
      <div className="pixelated-image-card__pixels" ref={pixelGridRef} />
    </div>
  );
}
