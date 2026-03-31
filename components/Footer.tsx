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
          <div className="relative w-full h-32 rounded-xl overflow-hidden border border-edge/20 group cursor-pointer">
            {/* Smooth AI Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] dark:from-[#0d0d0e] dark:to-[#161618] transition-colors duration-500">
              
              {/* Ultra-Smooth Topographic Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.25]" viewBox="0 0 400 200" preserveAspectRatio="none">
                <g fill="none" stroke="currentColor" className="text-accent">
                  <path d="M-50,150 Q100,50 250,150 T550,150" strokeWidth="1.5">
                    <animate attributeName="d" values="M-50,150 Q100,50 250,150 T550,150; M-50,130 Q120,70 270,130 T550,130; M-50,150 Q100,50 250,150 T550,150" dur="10s" repeatCount="indefinite" />
                  </path>
                  <path d="M-50,100 Q150,0 300,100 T650,100" strokeWidth="1" opacity="0.6">
                    <animate attributeName="d" values="M-50,100 Q150,0 300,100 T650,100; M-50,120 Q130,20 280,120 T650,120; M-50,100 Q150,0 300,100 T650,100" dur="12s" repeatCount="indefinite" />
                  </path>
                  <path d="M-50,180 Q80,100 220,180 T520,180" strokeWidth="0.8" opacity="0.4">
                    <animate attributeName="d" values="M-50,180 Q80,100 220,180 T520,180; M-50,160 Q90,110 230,160 T520,160; M-50,180 Q80,100 220,180 T520,180" dur="8s" repeatCount="indefinite" />
                  </path>
                </g>
              </svg>

              {/* Smooth Grid */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" 
                style={{ backgroundImage: 'linear-gradient(currentColor 0.5px, transparent 0.5px), linear-gradient(90deg, currentColor 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />

              {/* The "AI Glow" Scan Line */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-accent/[0.03] to-transparent -translate-y-full animate-[scanLineSmooth_6s_linear_infinite]" />
              </div>

              {/* Glowing Location Indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-accent/20 rounded-full blur-xl animate-pulse" />
                  <div className="absolute -inset-2 border border-accent/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                  <div className="w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_12px_rgba(var(--accent-rgb,20,184,166),0.6)] relative z-10 border-2 border-white dark:border-[#0d0d0e]" />
                </div>
                <span className="text-[9px] font-black text-foreground uppercase tracking-wider bg-white/80 dark:bg-[#111]/80 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-sm border border-edge/10">
                  Hamirpur, HP
                </span>
              </div>

              {/* Subtle Vignette */}
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_0_40px_rgba(0,0,0,0.2)] pointer-events-none" />
            </div>

            <a
              href="https://www.google.com/maps/place/Hamirpur,+Himachal+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-accent/5 backdrop-blur-[1px] group/mapbtn"
            >
              <span className="text-[11px] font-black text-accent uppercase tracking-[0.2em] transition-all duration-300 group-hover/mapbtn:translate-y-[-2px]">
                VIEW MAPS →
              </span>
            </a>
          </div>

          <style jsx global>{`
            @keyframes scanLineSmooth {
              0% { transform: translateY(-100%); }
              100% { transform: translateY(200%); }
            }
          `}</style>
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
                name: "Twitter",
                href: "https://x.com/master_Saurabh_",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
        <div className="flex items-center justify-between gap-8 py-8">
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
