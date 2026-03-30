"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

type ThemeMode = "light" | "dark";

export default function GitHubContributionCard() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
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

  return (
    <section data-spotlight-card className="col-span-1 md:col-span-3 lg:col-span-4 bg-card border-[1.5px] border-edge rounded-[20px] transition-colors duration-200 delay-75 hover:border-edge-hover p-4 md:p-6 overflow-hidden">
      <h3 className="text-sm font-semibold text-label uppercase tracking-wide">
        GitHub Contributions
      </h3>
      <div className="mt-4 flex justify-center overflow-x-auto md:overflow-hidden pb-2 md:pb-0 [&_svg]:h-auto md:[&_svg]:max-w-full">
        <GitHubCalendar
          username="Saurabh-1785"
          year="last"
          colorScheme={theme}
          blockSize={14}
          blockMargin={4}
          fontSize={14}
          showTotalCount
          showWeekdayLabels
          showColorLegend
          showMonthLabels
          theme={{
            light: ["#ebedf0", "#14b8a6"],
            dark: ["#161b22", "#07332f", "#0E5D57", "#128C84", "#14B8A6"],
          }}
        />
      </div>
    </section>
  );
}