"use client";

import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("https://formsubmit.co/ajax/saurabhchauhan1785@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: email,
          message: `A visitor with email ${email} wants to get in touch with you from your portfolio.`
        })
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <footer className="w-full relative transition-all duration-300 border-t border-edge/15 mt-16 bg-page overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-accent/[0.03] blur-3xl pointer-events-none" />

      {/* Main Container - full width, columns spread edge-to-edge */}
      <div className="max-w-[1280px] mx-auto w-full px-12 pt-9 pb-6 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 relative z-10">

        {/* Left Column: Info & Socials & Map */}
        <div className="flex flex-col items-center gap-4 w-full md:w-[320px] shrink-0">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-black tracking-tighter text-foreground group cursor-default text-center whitespace-nowrap">
              <span className="text-accent group-hover:text-foreground transition-colors duration-300">
                SAURABH CHAUHAN
              </span>
            </h2>
            <div className="flex items-center justify-center gap-1.5 text-secondary/60 text-xs font-semibold tracking-wider uppercase whitespace-nowrap">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
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

          {/* Realistic High-Fidelity GIS Vector Map */}
          <div className="hidden md:block relative w-full h-[100px] rounded-xl overflow-hidden border border-edge/30 group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)] bg-card dark:bg-[#050505]">
            <div className="absolute inset-0 bg-gradient-to-br from-card-alt to-card dark:from-[#101010] dark:to-[#050505] transition-colors duration-500">

              <svg className="absolute inset-0 w-full h-full opacity-70" viewBox="0 0 400 120" preserveAspectRatio="none">
                {/* Topographic Contours */}
                <path d="M-50,20 Q100,-10 250,30 T450,10" fill="none" stroke="currentColor" className="text-accent/10" strokeWidth="0.5" />
                <path d="M-50,40 Q120,0 260,50 T450,30" fill="none" stroke="currentColor" className="text-accent/10" strokeWidth="0.5" />
                <path d="M-50,60 Q140,10 270,70 T450,50" fill="none" stroke="currentColor" className="text-accent/10" strokeWidth="0.5" />
                <path d="M-50,80 Q160,20 280,90 T450,70" fill="none" stroke="currentColor" className="text-accent/10" strokeWidth="0.5" />
                <path d="M-50,100 Q180,30 290,110 T450,90" fill="none" stroke="currentColor" className="text-accent/10" strokeWidth="0.5" />

                {/* River Path (Beas River) */}
                <path d="M-20,130 C40,110 120,60 200,80 C280,100 340,40 420,20" fill="none" stroke="url(#riverGradient)" strokeWidth="12" strokeLinecap="round" />
                <path d="M-20,130 C40,110 120,60 200,80 C280,100 340,40 420,20" fill="none" stroke="url(#riverHighlight)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

                <defs>
                  <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0d9488" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="riverHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Main Highway NH-70 */}
                <path d="M50,-10 C90,40 180,50 250,120" fill="none" stroke="currentColor" className="text-accent/30" strokeWidth="2.5" />
                <path d="M50,-10 C90,40 180,50 250,120" fill="none" stroke="#14b8a6" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />

                {/* Secondary Roads */}
                <path d="M0,50 Q100,50 140,80 T250,120" fill="none" stroke="currentColor" className="text-edge/60" strokeWidth="1.2" />
                <path d="M140,80 Q200,20 300,30" fill="none" stroke="currentColor" className="text-edge/60" strokeWidth="1.2" />
                <path d="M300,30 Q350,80 420,90" fill="none" stroke="currentColor" className="text-edge/60" strokeWidth="1.2" />

                {/* Local Streets Network */}
                <path d="M80,30 L110,40 L120,20 M100,50 L90,70 L120,80 M180,50 L200,30 L220,40 L210,60 M220,40 L250,30 L280,40" fill="none" stroke="currentColor" className="text-secondary/20" strokeWidth="0.8" />
                <path d="M250,70 L280,60 L290,80 L260,90 Z M300,30 L320,10 L350,20 M330,50 L350,40 L380,60" fill="none" stroke="currentColor" className="text-secondary/20" strokeWidth="0.8" />

                {/* Map Grids / Coordinates lines */}
                <line x1="80" y1="0" x2="80" y2="120" stroke="currentColor" className="text-secondary/10" strokeWidth="0.5" strokeDasharray="2 2" />
                <line x1="280" y1="0" x2="280" y2="120" stroke="currentColor" className="text-secondary/10" strokeWidth="0.5" strokeDasharray="2 2" />
                <line x1="0" y1="40" x2="400" y2="40" stroke="currentColor" className="text-secondary/10" strokeWidth="0.5" strokeDasharray="2 2" />

                {/* Landmarks / Scatter Points */}
                <circle cx="110" cy="40" r="1.5" fill="currentColor" className="text-accent/60" />
                <circle cx="200" cy="30" r="1.5" fill="currentColor" className="text-accent/60" />
                <circle cx="320" cy="10" r="1.5" fill="currentColor" className="text-accent/60" />
                <circle cx="280" cy="60" r="1.5" fill="currentColor" className="text-accent/60" />

                <text x="330" y="65" fill="currentColor" className="text-secondary/40 font-mono text-[6px] italic">BEAS RIVER</text>
                <text x="210" y="25" fill="currentColor" className="text-secondary/50 font-mono text-[5px] tracking-widest">TOWN CENTER</text>

                <text x="83" y="110" fill="currentColor" className="text-accent/40 font-mono text-[5px]">76.5218° E</text>
                <text x="283" y="110" fill="currentColor" className="text-accent/40 font-mono text-[5px]">31.6862° N</text>

                {/* Compass & Scale */}
                <path d="M375,105 L385,105 M375,103 L375,107 M385,103 L385,107" stroke="currentColor" className="text-secondary/40" strokeWidth="0.5" fill="none" />
                <text x="375" y="100" fill="currentColor" className="text-secondary/40 font-mono text-[4px]">500m</text>

                <polygon points="380,10 382,20 380,18 378,20" fill="currentColor" className="text-accent/60" />
                <text x="378.5" y="8" fill="currentColor" className="text-secondary/60 font-mono text-[4px] font-bold">N</text>
              </svg>

              {/* Glowing Location Indicator & Label */}
              <div className="absolute top-[60%] left-[35%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
                <div className="relative">
                  <div className="absolute -inset-2.5 bg-accent/30 rounded-full blur-md animate-pulse" />
                  <div className="absolute -inset-1 border border-accent/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                  <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_rgba(20,184,166,0.9)] relative z-10 border border-white/30" />
                </div>
                <span className="text-[7px] font-bold text-foreground dark:text-white uppercase tracking-widest bg-card/90 dark:bg-black/80 px-2 py-0.5 rounded shadow-sm select-none border border-edge/20 backdrop-blur-sm">
                  NIT Hamirpur
                </span>
              </div>

              {/* Subtle Vignette */}
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_0_30px_rgba(0,0,0,0.4)] pointer-events-none" />
            </div>

            <a
              href="https://www.google.com/maps/place/Hamirpur,+Himachal+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-accent/5 backdrop-blur-[1px] group/mapbtn"
            >
              <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em] transition-all duration-300 group-hover/mapbtn:translate-y-[-2px]">
                VIEW MAPS →
              </span>
            </a>
          </div>
        </div>

        {/* Middle Column: Navigation Links */}
        <div className="flex flex-col items-center flex-1 w-full mt-4 md:mt-0">
          <div className="flex flex-col items-start w-full max-w-[180px]">
            <div className="flex flex-col gap-1 items-start mb-3">
              <h3 className="text-sm font-bold text-accent uppercase tracking-widest leading-none">
                NAVIGATION
              </h3>
              <div className="w-8 h-[2px] bg-accent/60 mt-1.5 rounded" />
            </div>

            <ul className="w-full flex flex-col items-start">
              {[
                { name: "Home", href: "/" },
                { name: "Work", href: "/work" },
                { name: "Projects", href: "/projects" },
              ].map((link, idx) => (
                <li key={link.name} className={`w-full border-t border-edge/10 py-1.5 ${idx === 2 ? "border-b" : ""}`}>
                  <Link
                    href={link.href}
                    className="text-secondary/70 hover:text-accent transition-all duration-250 text-sm font-bold flex items-center justify-between group px-1"
                  >
                    <span>{link.name}</span>
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-secondary/30 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Icons - Moved from Left Column */}
            <div className="flex gap-4 mt-4 items-center justify-start w-full px-1">
              <a
                href="https://www.linkedin.com/in/saurabh-chauhan-a96413323/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/70 hover:text-accent hover:scale-110 transition-all duration-300 transform"
                aria-label="LinkedIn"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/Saurabh-1785"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/70 hover:text-accent hover:scale-110 transition-all duration-300 transform"
                aria-label="GitHub"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://x.com/master_Saurabh_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/70 hover:text-accent hover:scale-110 transition-all duration-300 transform"
                aria-label="Twitter / X"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex flex-col items-start w-full md:w-[300px] shrink-0 gap-4 mt-4 md:mt-0">
          <div className="flex flex-col gap-1 items-start">
            <h3 className="text-sm font-bold text-accent uppercase tracking-widest leading-none">
              GET IN TOUCH
            </h3>
            <div className="w-8 h-[2px] bg-accent/60 mt-1.5 rounded" />
          </div>

          <div className="w-full flex flex-col items-start">
            <form onSubmit={handleSubscribe} className="relative group w-full flex flex-col gap-2.5">
              <div className="relative w-full">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary/40">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full bg-card/60 dark:bg-[#08080a]/60 border border-edge/20 rounded-lg pl-9 pr-4 py-2 text-xs focus:border-accent/40 focus:ring-1 focus:ring-accent/25 outline-none transition-all duration-300 placeholder:text-muted/40 font-bold text-foreground"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-accent/20 hover:border-accent bg-accent/[0.02] hover:bg-accent/5 text-accent hover:text-accent/90 text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{status === "loading" ? "SENDING..." : "SEND MESSAGE"}</span>
                {status !== "loading" && (
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                )}
              </button>
            </form>
            {status === "success" && (
              <p className="text-xs font-medium text-emerald-500 mt-2 text-left select-none animate-pulse">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-xs font-medium text-rose-500 mt-2 text-left select-none">
                Something went wrong. Please try again.
              </p>
            )}
            {status === "idle" && (
              <p className="text-xs font-medium text-secondary/40 mt-2 text-left select-none whitespace-nowrap">
                I'll get back to you as soon as possible!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-[1280px] mx-auto w-full px-12 border-t border-edge/10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-3.5">
          <div className="flex flex-col gap-0.5 items-start select-none whitespace-nowrap">
            <p className="text-muted text-[10px] font-bold tracking-[0.1em] uppercase">
              © 2026 SAURABH CHAUHAN
            </p>
            <p className="text-muted/40 text-[9px] font-bold tracking-[0.05em] uppercase">
              All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-muted text-[10px] font-bold tracking-[0.1em] uppercase select-none">
              LAST UPDATED: 2026-06-29
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-7 h-7 rounded-lg border border-edge/20 hover:border-accent/40 bg-accent/5 hover:bg-accent/10 flex items-center justify-center text-accent hover:scale-[1.05] transition-all duration-300 cursor-pointer shadow-sm"
              aria-label="Scroll to top"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
