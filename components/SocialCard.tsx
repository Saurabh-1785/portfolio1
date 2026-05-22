import React from "react";

export default function SocialCard() {
  return (
    <div
      data-spotlight-card
      className="bg-card transition-colors duration-200 delay-75 overflow-hidden md:col-span-3 lg:col-span-1 flex flex-col justify-center w-full h-full p-7 md:p-8 min-h-[340px] lg:min-h-[380px]"
    >
      {/* Decorative vertical line container */}
      <div className="border-l border-accent/20 pl-6 md:pl-7 flex flex-col gap-9 py-1">

        {/* CONNECT Section */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 items-start">
            <h3 className="text-xs font-bold text-accent uppercase tracking-widest leading-none">
              CONNECT
            </h3>
            <div className="w-7 h-[2px] bg-accent/60 mt-1.5 rounded" />
          </div>

          <div className="flex gap-4 mt-2">
            {/* GitHub Button */}
            <a
              href="https://github.com/Saurabh-1785"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-lg border border-accent/20 bg-white dark:bg-zinc-950 flex items-center justify-center text-foreground hover:text-accent hover:border-accent hover:bg-accent/5 hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/saurabh-chauhan-a96413323/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-lg border border-accent/20 bg-white dark:bg-zinc-950 flex items-center justify-center text-foreground hover:text-accent hover:border-accent hover:bg-accent/5 hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* LeetCode Button */}
            <a
              href="https://leetcode.com/Saurabh_chauhan786/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="w-11 h-11 rounded-lg border border-accent/20 bg-white dark:bg-zinc-950 flex items-center justify-center text-foreground hover:text-accent hover:border-accent hover:bg-accent/5 hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M57.7125 12.5L19.2917 50C18.4619 50.8006 17.8019 51.7602 17.3511 52.8215C16.9003 53.8828 16.668 55.024 16.668 56.1771C16.668 57.3301 16.9003 58.4714 17.3511 59.5327C17.8019 60.594 18.4619 61.5536 19.2917 62.3542L42.4375 84.9417C45.9375 88.3542 51.6042 88.3542 55.0958 84.9417L66.6667 73.65"
                  stroke="currentColor"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.3833 43.075L42.4333 27.4084C44.1316 25.7673 46.4009 24.8501 48.7625 24.8501C51.1241 24.8501 53.3933 25.7673 55.0916 27.4084L66.6625 38.7042M45.8333 54.1667H83.3333"
                  stroke="currentColor"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* X / Twitter Button */}
            <a
              href="https://x.com/master_Saurabh_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="w-11 h-11 rounded-lg border border-accent/20 bg-white dark:bg-zinc-950 flex items-center justify-center text-foreground hover:text-accent hover:border-accent hover:bg-accent/5 hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* RESUME Section */}
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex flex-col gap-1 items-start">
            <h3 className="text-xs font-bold text-accent uppercase tracking-widest leading-none">
              RESUME
            </h3>
            <div className="w-7 h-[2px] bg-accent/60 mt-1.5 rounded" />
          </div>

          <div className="flex items-center gap-6 mt-2">
            <span className="text-[40px] font-black text-[#048379] dark:text-[#14b8a6] tracking-tight leading-none select-none">
              CV
            </span>
            <a
              href="/Resume.pdf"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-accent/25 bg-white dark:bg-zinc-950 text-accent hover:bg-accent/5 hover:border-accent hover:scale-[1.03] transition-all duration-300 text-xs md:text-sm font-bold shadow-sm"
            >
              <span>Download</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
