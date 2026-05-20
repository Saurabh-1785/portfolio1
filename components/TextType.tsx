"use client";

import { useEffect, useState, useMemo, useCallback } from "react";

interface TextTypeProps {
  text: string | string[];
  as?: React.ElementType;
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  initialDelay?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorCharacter?: string;
  cursorClassName?: string;
  variableSpeed?: boolean;
}

export default function TextType({
  text,
  as: Component = "span",
  className = "",
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  initialDelay = 500,
  loop = true,
  showCursor = true,
  cursorCharacter = "|",
  cursorClassName = "",
  variableSpeed = true,
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    // Add realistic variation (+/- 30% speed variation) to make it feel human
    const variance = typingSpeed * 0.35;
    return typingSpeed + (Math.random() * variance * 2 - variance);
  }, [variableSpeed, typingSpeed]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const currentString = textArray[currentTextIndex];

    const runAnimation = () => {
      if (isDeleting) {
        if (displayedText === "") {
          setIsDeleting(false);
          // If we reached the end of the text list and loop is false, stop here
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }
          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, 500); // Small rest before typing next sentence
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < currentString.length) {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + currentString[currentCharIndex]);
            setCurrentCharIndex((prev) => prev + 1);
          }, getRandomSpeed());
        } else {
          // Finished typing current string
          if (!loop && currentTextIndex === textArray.length - 1) return;
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(runAnimation, initialDelay);
    } else {
      runAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    getRandomSpeed,
  ]);

  return (
    <Component className={`inline-block whitespace-pre-wrap ${className}`} {...props}>
      <span>{displayedText}</span>
      {showCursor && (
        <span
          className={`inline-block ml-0.5 font-normal text-teal-400 animate-cursor-blink ${cursorClassName}`}
        >
          {cursorCharacter}
        </span>
      )}
    </Component>
  );
}
