"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

type ThemeMode = "light" | "dark";

export default function GitHubContributionCard() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    setMounted(true);
    const syncTheme = () => {
      setTheme(
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "dark"
          : "light"
      );
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  // Helper to slice GitHub calendar contributions to a balanced timeframe (34 weeks)
  const selectContributions = (contributions: any[]) => {
    return contributions.slice(-238);
  };

  // Skeleton loader during hydration
  if (!mounted) {
    return (
      <section
        data-spotlight-card
        className="bg-card transition-colors duration-200 delay-75 p-5 md:p-6 overflow-hidden w-full h-full"
      >
        <div className="animate-pulse">
          <div className="h-4 bg-accent/10 rounded w-1/3 mb-2" />
          <div className="h-[2px] bg-accent/10 rounded w-8 mb-5" />
          <div className="h-[130px] bg-accent/5 rounded w-full" />
        </div>
      </section>
    );
  }

  return (
    <section
      data-spotlight-card
      className="bg-card transition-colors duration-200 delay-75 p-5 md:p-6 overflow-hidden w-full h-full relative flex flex-col"
    >
      <h3 className="text-xs font-bold text-accent uppercase tracking-widest leading-none">
        Github Contributions
      </h3>
      <div className="w-7 h-[2px] bg-accent/60 mt-1.5 rounded mb-4" />
      <div className="overflow-x-auto no-scrollbar w-full py-2 flex justify-start min-[480px]:justify-center">
        <GitHubCalendar
          username="Saurabh-1785"
          transformData={selectContributions}
          colorScheme={theme}
          blockSize={13}
          blockMargin={4}
          fontSize={12}
          showTotalCount
          showWeekdayLabels
          showColorLegend
          showMonthLabels
          theme={{
            light: ["#ebedf0", "#ccebe8", "#99ded6", "#4db6ac", "#14B8A6"],
            dark: ["#161b22", "#07332f", "#0E5D57", "#128C84", "#14B8A6"],
          }}
        />
      </div>
    </section>
  );
}