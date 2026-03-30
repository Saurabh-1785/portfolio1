"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";

const navLinks = [
  { href: "/projects", label: "PROJECTS" },
  { href: "/experience", label: "EXPERIENCE" },
  { href: "/other", label: "OTHER" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.getAttribute("data-theme") === "dark";
    }
    return false;
  });
  const navRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  const toggleTheme = useCallback(() => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute(
      "data-theme",
      next ? "dark" : "light"
    );
    localStorage.setItem("theme", next ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navRef.current &&
        toggleRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="bg-page/80 backdrop-blur-md py-4 sticky top-0 w-full z-[1000] transition-colors duration-300">
      <nav className="max-w-[1280px] mx-auto flex justify-between items-center px-4 md:px-6 gap-2 overflow-hidden">
        <Link
          href="/"
          className="text-[10px] md:text-sm font-semibold text-foreground no-underline tracking-wide border-[1.5px] border-edge rounded-3xl px-3 md:px-5 py-2 transition-all duration-200 delay-75 hover:bg-btn-hover hover:text-foreground shrink-0 truncate max-w-[65%] md:max-w-none hover:border-edge-hover"
        >
          <span className="hidden md:inline">SAURABH CHAUHAN | DEVELOPER</span>
          <span className="md:hidden">SAURABH CHAUHAN</span>
        </Link>
        <div className="flex items-center gap-3">
          <button
            className="flex md:hidden flex-col gap-[5px] bg-transparent border-[1.5px] border-edge rounded-3xl px-3 py-2.5 cursor-pointer hover:border-edge-hover"
            ref={toggleRef}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <span className="w-5 h-0.5 bg-foreground rounded-sm transition-all duration-300" />
            <span className="w-5 h-0.5 bg-foreground rounded-sm transition-all duration-300" />
            <span className="w-5 h-0.5 bg-foreground rounded-sm transition-all duration-300" />
          </button>
          <ul
            className={`flex list-none ${menuOpen ? "left-0" : "-left-full"
              } fixed top-[70px] w-full h-[calc(100vh-70px)] bg-page flex-col justify-start items-center pt-10 gap-4 transition-[left] duration-300 ease-in-out md:static md:w-auto md:h-auto md:bg-transparent md:pt-0 md:gap-3 md:flex-row`}
            ref={navRef}
            id="navMenu"
          >
            {navLinks.map((link) => (
              <li key={link.href} className="w-4/5 md:w-auto">
                <Link
                  href={link.href}
                  className={`block text-center py-3.5 text-sm md:py-2 md:text-[13px] px-5 cursor-pointer rounded-3xl transition-all duration-200 delay-75 border-[1.5px] no-underline tracking-wide font-semibold focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${pathname === link.href
                    ? "bg-btn-hover text-foreground border-edge-hover"
                    : "border-edge text-foreground hover:bg-btn-hover hover:text-foreground hover:border-edge-hover"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="w-10 h-10 rounded-full border-[1.5px] border-edge bg-transparent text-foreground cursor-pointer flex items-center justify-center transition-all duration-200 delay-75 shrink-0 hover:bg-btn-hover hover:text-foreground hover:border-edge-hover focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg
                className="w-[18px] h-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                className="w-[18px] h-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
