"use client";

import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
    alert("Thanks for getting in touch!");
  };

  return (
    <footer className="footer-bg pt-16 pb-8 border-t-[1.5px] border-edge mt-20 container-full relative transition-all duration-300">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Main Footer Content - Using Flex for precise right-alignment */}
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row md:justify-between items-center md:items-start gap-12 md:gap-4 relative">

        {/* Left Side - Branding & Map */}
        <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-[320px] shrink-0">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-2xl font-black tracking-tighter text-foreground group cursor-default text-center md:text-left">
              <span className="text-accent group-hover:text-foreground transition-colors duration-300">
                SAURABH CHAUHAN
              </span>
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-2 text-muted text-xs font-semibold tracking-wider uppercase">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Hamirpur, Himachal Pradesh
            </div>
          </div>

          {/* Stylized Map Section */}
          <div className="relative w-full h-32 rounded-xl overflow-hidden border border-edge/20 group">
            <div className="absolute inset-0 bg-[#f9f9f9] dark:bg-[#1a1a1b] transition-colors duration-300">
              {/* Grid Lines */}
              <div className="absolute inset-0 opacity-10 dark:opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

              {/* Map Layout */}
              <svg className="absolute inset-0 w-full h-full opacity-30 dark:opacity-40" viewBox="0 0 400 200">
                <path d="M0,50 L400,50 M0,100 L400,100 M0,150 L400,150 M100,0 L100,200 M200,0 L200,200 M300,0 L300,200"
                  className="stroke-[#ccc] dark:stroke-[#444]" strokeWidth="1" fill="none" />
              </svg>

              {/* Blue Location Indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                <div className="relative">
                  <div className="absolute -inset-2 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
                  <div className="w-3 h-3 bg-accent rounded-full border-2 border-[#f9f9f9] dark:border-[#1a1a1b] relative z-10 transition-colors" />
                </div>
                <span className="text-[10px] font-bold text-foreground bg-page/80 dark:bg-[#111]/80 px-1.5 py-0.5 rounded shadow-sm">Hamirpur</span>
              </div>

              {/* Time Badge */}
              <div className="absolute top-3 right-3 bg-card/90 dark:bg-[#111]/90 border border-edge/30 px-2 py-1 rounded text-[9px] font-mono text-foreground/80 flex items-center gap-2">
                <span>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} IST</span>
                <div className="w-1 h-1 bg-accent rounded-full" />
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Hamirpur,+Himachal+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-page/90 px-3 py-1.5 rounded-full border border-accent/30 shadow-lg">View Live Map</span>
            </a>
          </div>
        </div>

        {/* Middle Side - Navigation Links (Centered) */}
        <div className="flex flex-col items-center flex-1">
          <ul className="space-y-10">
            {[
              { name: "Home", href: "/" },
              { name: "About Me", href: "/about" },
              { name: "Projects", href: "/projects" },
              { name: "Reach Out", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-secondary hover:text-accent transition-all duration-200 text-[13px] flex items-center gap-3 group"
                >
                  <span className="w-0 group-hover:w-3 h-[1px] bg-accent transition-all duration-300" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Contact & Socials (True Right-Alignment) */}
        <div className="flex flex-col items-center md:items-start md:w-[240px] shrink-0">
          <div className="flex gap-6 items-center mb-10">
            {[
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/saurabh-chauhan-a96413323/",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                ),
              },
              {
                name: "GitHub",
                href: "https://github.com/Saurabh-1785",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                ),
              },
              {
                name: "Instagram",
                href: "https://instagram.com",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent hover:scale-125 transition-all duration-300 transform"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="pt-2 w-full flex flex-col items-center md:items-start">
            <h4 className="text-foreground font-extrabold text-[12px] uppercase tracking-wider mb-5 text-center md:text-left w-full">Get In Touch</h4>
            <form onSubmit={handleSubscribe} className="relative group w-full flex flex-col items-center md:items-start">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="w-full bg-transparent border-b border-edge/40 py-2.5 text-[13px] focus:border-accent outline-none transition-all duration-300 placeholder:text-muted/50"
              />
              <div className="flex justify-center md:justify-start w-full">
                <button
                  type="submit"
                  className="mt-5 text-accent hover:text-foreground text-[11px] font-black uppercase tracking-widest transition-all duration-300 hover:translate-x-1.5"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1280px] mx-auto px-6 mt-16 border-t border-edge/10">
        <div className="flex items-center justify-between gap-8">
          <p className="text-muted text-[10px] font-bold tracking-[0.1em] uppercase">
            © 2026 SAURABH CHAUHAN
          </p>
          <p className="text-muted text-[10px] font-bold tracking-[0.1em] uppercase">
            LAST UPDATED: 2026-03-28
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
