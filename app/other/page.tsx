"use client";

import React from "react";

const blogs = [
  {
    title: "Bloom Filters Explained Like You’re Building a Real System",
    date: "June 2026",
    description: "A deep dive into Bloom Filters, explaining the mechanics of space-efficient probabilistic data structures, hashing algorithms, and how they prevent unnecessary disk lookups in real-world databases.",
    tags: ["System Design", "Algorithms", "Databases"],
    link: "https://medium.com/@saurabhchauhan1785/bloom-filters-explained-like-youre-building-a-real-system-061a79191558",
  }
];

export default function OtherPage() {
  return (
    <div className="relative min-h-screen">
      {/* Minimal Professional Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 flex justify-center overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-[-20%] w-[80%] md:w-[60%] h-[500px] bg-accent/10 blur-[120px] rounded-full" />
        {/* Lightweight Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.03] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 md:pb-12 border-b border-edge/20">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-accent"></div>
              <span className="text-accent font-mono text-sm tracking-widest">04</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-foreground mb-6">
              Blogs <span className="text-accent">& Articles</span>
            </h2>
            <p className="text-secondary max-w-md leading-relaxed text-sm">
              My technical articles, blog posts, and documentations. Read about my learnings, architectural insights, and tutorials.
            </p>
          </div>

          <div className="hidden md:block relative group">
            <div className="absolute inset-0 bg-accent/5 rounded-xl border border-accent/20 border-dashed transform -skew-x-6 transition-transform duration-500 group-hover:skew-x-0" />
            <div className="relative p-6 font-mono text-xs text-secondary leading-loose">
              <div className="flex items-center gap-3">
                <span className="text-accent">{'>'}</span>
                Writing. Sharing.
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent">{'>'}</span>
                Teaching developer communities.
              </div>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {[...blogs]
            .sort((a, b) => {
              const months: Record<string, number> = {
                jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
                jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
              };
              const parseDate = (d: string) => {
                const parts = d.trim().split(/\s+/);
                if (parts.length === 2) {
                  const m = parts[0].toLowerCase().substring(0, 3);
                  const y = parseInt(parts[1], 10);
                  return new Date(y, months[m] ?? 0).getTime();
                }
                return 0;
              };
              return parseDate(b.date) - parseDate(a.date);
            })
            .map((blog) => (
              <div
                key={blog.title}
                className="group flex flex-col bg-card/50 border border-edge rounded-[24px] overflow-hidden hover:border-accent/50 hover:bg-card transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] cursor-pointer"
                onClick={() => blog.link && window.open(blog.link, "_blank", "noopener,noreferrer")}
              >
                {/* Image Container (Green Dot Grid Layout) */}
                <div className="relative h-[120px] overflow-hidden bg-card-alt shrink-0 transition-colors duration-500">
                  <div className="absolute inset-0 bg-[radial-gradient(circle,#10b981_1.5px,transparent_1.5px)] bg-[size:20px_20px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />
                </div>

                {/* Card Content */}
                <div className="p-5 md:p-6 flex flex-col flex-1 relative z-10">
                  {/* Date Tag */}
                  <div className="flex items-center gap-2 mb-3 text-accent font-mono text-xs font-bold uppercase">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {blog.date}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-xl font-black text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                    {blog.title}
                  </h3>

                  {/* Description Excerpt */}
                  <p className="text-secondary/80 text-xs leading-relaxed mb-4 line-clamp-3">
                    {blog.description}
                  </p>

                  {/* Tech / Tag list */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-accent/5 text-[10px] font-bold text-accent px-2.5 py-1 rounded-md border border-accent/10 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer links */}
                  <div className="flex items-center justify-between pt-4 border-t border-edge/40 mt-auto">
                    <a
                      href={blog.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent text-[11px] font-black tracking-widest uppercase flex items-center gap-1.5 group/link hover:text-accent/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      READ ARTICLE
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center pb-10">
          <p className="text-secondary text-sm opacity-60">
            More articles coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
