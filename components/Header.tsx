"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { StaggeredMenu } from "./StaggeredMenu";

const navLinks = [
  { href: "/projects", label: "PROJECTS" },
  { href: "/work", label: "WORK" },
  { href: "/other", label: "OTHER" },
];

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Projects", ariaLabel: "View projects", link: "/projects" },
  { label: "Work", ariaLabel: "View work experience", link: "/work" },
  { label: "Other", ariaLabel: "View blogs and other info", link: "/other" },
];

const socialItems = [
  { label: "LinkedIn", link: "https://www.linkedin.com/in/saurabh-chauhan-a96413323/" },
  { label: "GitHub", link: "https://github.com/Saurabh-1785" },
  { label: "Twitter", link: "https://x.com/master_Saurabh_" },
];

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true); // Default to dark as per layout
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.getAttribute("data-theme") === "dark");

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <header
      className={`py-4 sticky top-0 w-full z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-page/85 backdrop-blur-md border-b border-edge/10 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto flex justify-between items-center px-4 md:px-6 gap-2 overflow-hidden">
        <Link
          href="/"
          className="text-[12px] md:text-[14px] font-black text-foreground no-underline tracking-[0.15em] transition-all duration-200 hover:text-accent shrink-0 truncate max-w-[65%] md:max-w-none"
        >
          <span className="hidden md:inline text-foreground">SAURABH <span className="text-secondary font-medium tracking-normal ml-2 opacity-50">| DEVELOPER</span></span>
          <span className="md:hidden">SAURABH</span>
        </Link>
        <div className="flex items-center gap-3">
          {/* Desktop Navigation Links */}
          <ul
            className="hidden md:flex list-none md:flex-row md:items-center md:gap-3"
            ref={navRef}
            id="navMenu"
          >
            {navLinks.map((link) => (
              <li key={link.href} className="w-auto">
                <Link
                  href={link.href}
                  className={`block text-center py-2 text-[12px] px-2 cursor-pointer transition-all duration-300 no-underline tracking-[0.2em] font-black uppercase relative group ${
                    pathname === link.href ? "text-accent" : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {/* Active/Hover indicator line */}
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full ${
                    pathname === link.href ? "w-full" : ""
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <button
            className="w-10 h-10 rounded-full bg-transparent text-foreground cursor-pointer flex items-center justify-center transition-all duration-200 shrink-0 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            suppressHydrationWarning
          >
            {!mounted ? (
              <div className="w-[18px] h-[18px]" />
            ) : dark ? (
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

          {/* Staggered Navigation Menu for Mobile Devices */}
          <div className="md:hidden flex items-center">
            <StaggeredMenu
              position="right"
              items={menuItems}
              socialItems={socialItems}
              displaySocials={true}
              displayItemNumbering={true}
              accentColor="#14b8a6"
              colors={["#27272a", "#14b8a6"]}
              dark={dark}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
