"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
}
export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}
export interface StaggeredMenuProps {
  position?: "left" | "right";
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  changeMenuColorOnOpen?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  dark?: boolean;
}

const getSocialIcon = (label: string) => {
  const cleanLabel = label.toLowerCase();
  if (cleanLabel.includes("github")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    );
  }
  if (cleanLabel.includes("linkedin")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    );
  }
  if (cleanLabel.includes("twitter") || cleanLabel.includes("x")) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (cleanLabel.includes("leetcode")) {
    return (
      <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
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
    );
  }
  return <span className="text-xs uppercase font-black">{label}</span>;
};

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = "right",
  colors = ["#B497CF", "#5227FF"],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoUrl,
  menuButtonColor,
  openMenuButtonColor = "#000",
  changeMenuColorOnOpen = true,
  accentColor = "#14b8a6",
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose,
  dark = true,
}: StaggeredMenuProps) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const [mounted, setMounted] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);
  const colorTweenRef = useRef<gsap.core.Tween | null>(null);

  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const busyRef = useRef(false);

  const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const panel = panelRef.current;
    const preContainer = preLayersRef.current;

    if (!panel) return;

    let preLayers: HTMLElement[] = [];
    if (preContainer) {
      preLayers = Array.from(
        preContainer.querySelectorAll(".sm-prelayer")
      ) as HTMLElement[];
    }
    preLayerElsRef.current = preLayers;

    const offscreen = position === "left" ? -100 : 100;
    gsap.set([panel, ...preLayers], { xPercent: offscreen, opacity: 1 });
    if (preContainer) {
      gsap.set(preContainer, { xPercent: 0, opacity: 1 });
    }

    const initialColor = menuButtonColor || (dark ? "#fff" : "#000");
    if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: initialColor });
  }, [mounted, menuButtonColor, position, dark]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(
      panel.querySelectorAll(".sm-panel-itemLabel")
    ) as HTMLElement[];
    const numberEls = Array.from(
      panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")
    ) as HTMLElement[];
    const socialTitle = panel.querySelector(
      ".sm-socials-title"
    ) as HTMLElement | null;
    const socialLinks = Array.from(
      panel.querySelectorAll(".sm-socials-link")
    ) as HTMLElement[];

    const offscreen = position === "left" ? -100 : 100;
    const layerStates = layers.map((el) => ({ el, start: offscreen }));
    const panelStart = offscreen;

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (numberEls.length)
      gsap.set(numberEls, { ["--sm-num-opacity" as any]: 0 });
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(
        ls.el,
        { xPercent: ls.start },
        { xPercent: 0, duration: 0.5, ease: "power4.out" },
        i * 0.07
      );
    });

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;

    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: "power4.out" },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStartRatio = 0.15;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;

      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: "power4.out",
          stagger: { each: 0.1, from: "start" },
        },
        itemsStart
      );

      if (numberEls.length) {
        tl.to(
          numberEls,
          {
            duration: 0.6,
            ease: "power2.out",
            ["--sm-num-opacity" as any]: 1,
            stagger: { each: 0.08, from: "start" },
          },
          itemsStart + 0.1
        );
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4;

      if (socialTitle)
        tl.to(
          socialTitle,
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          socialsStart
        );
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power3.out",
            stagger: { each: 0.08, from: "start" },
            onComplete: () => {
              gsap.set(socialLinks, { clearProps: "opacity" });
            },
          },
          socialsStart + 0.04
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, [position]);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback("onComplete", () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all: HTMLElement[] = [...layers, panel];
    closeTweenRef.current?.kill();

    const offscreen = position === "left" ? -100 : 100;

    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.32,
      ease: "power3.in",
      overwrite: "auto",
      onComplete: () => {
        const itemEls = Array.from(
          panel.querySelectorAll(".sm-panel-itemLabel")
        ) as HTMLElement[];
        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });

        const numberEls = Array.from(
          panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")
        ) as HTMLElement[];
        if (numberEls.length)
          gsap.set(numberEls, { ["--sm-num-opacity" as any]: 0 });

        const socialTitle = panel.querySelector(
          ".sm-socials-title"
        ) as HTMLElement | null;
        const socialLinks = Array.from(
          panel.querySelectorAll(".sm-socials-link")
        ) as HTMLElement[];
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

        busyRef.current = false;
      },
    });
  }, [position]);

  const animateColor = useCallback(
    (opening: boolean) => {
      const btn = toggleBtnRef.current;
      if (!btn) return;
      colorTweenRef.current?.kill();
      if (changeMenuColorOnOpen) {
        const defaultColor = menuButtonColor || (dark ? "#fff" : "#000");
        const targetColor = opening ? openMenuButtonColor : defaultColor;
        colorTweenRef.current = gsap.to(btn, {
          color: targetColor,
          delay: 0.18,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        const defaultColor = menuButtonColor || (dark ? "#fff" : "#000");
        gsap.set(btn, { color: defaultColor });
      }
    },
    [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen, dark]
  );

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);

    if (target) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose();
    }

    animateColor(target);
  }, [
    playOpen,
    playClose,
    animateColor,
    onMenuOpen,
    onMenuClose,
  ]);

  const closeMenu = useCallback(() => {
    if (openRef.current) {
      openRef.current = false;
      setOpen(false);
      onMenuClose?.();
      playClose();
      animateColor(false);
    }
  }, [playClose, animateColor, onMenuClose]);

  useEffect(() => {
    if (!closeOnClickAway || !open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeOnClickAway, open, closeMenu]);

  const buttonColorVal = menuButtonColor || (dark ? "#fff" : "#000");

  return (
    <>
      <button
        ref={toggleBtnRef}
        className={`sm-toggle relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-foreground/10 bg-foreground/[0.02] dark:bg-white/[0.02] hover:bg-accent/5 hover:text-accent hover:border-accent/40 text-foreground cursor-pointer transition-all duration-300 pointer-events-auto select-none ${
          className || ""
        }`}
        style={{ color: open ? openMenuButtonColor : buttonColorVal }}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="staggered-menu-panel"
        onClick={toggleMenu}
        type="button"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300"
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {mounted &&
        createPortal(
          <div
            className="sm-scope fixed inset-0 z-[9999] pointer-events-none"
            style={
              accentColor
                ? ({ ["--sm-accent" as any]: accentColor } as React.CSSProperties)
                : undefined
            }
            data-position={position}
            data-open={open || undefined}
          >
            <div
              ref={preLayersRef}
              className="sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none z-[5] w-screen h-screen"
              aria-hidden="true"
            >
              {(() => {
                const raw =
                  colors && colors.length ? colors.slice(0, 4) : ["#B497CF", "#5227FF"];
                let arr = [...raw];
                if (arr.length >= 3) {
                  const mid = Math.floor(arr.length / 2);
                  arr.splice(mid, 1);
                }
                return arr.map((c, i) => (
                  <div
                    key={i}
                    className="sm-prelayer absolute top-0 right-0 h-full w-full translate-x-0"
                    style={{ background: c }}
                  />
                ));
              })()}
            </div>

            <aside
              id="staggered-menu-panel"
              ref={panelRef}
              className="staggered-menu-panel absolute top-0 right-0 h-full bg-white/95 dark:bg-zinc-900/95 flex flex-col p-[6em_2em_2em_2em] overflow-y-auto z-10 backdrop-blur-[12px] pointer-events-auto border-l border-edge/20 w-full sm:w-[420px] shadow-2xl"
              style={{ WebkitBackdropFilter: "blur(12px)" }}
              aria-hidden={!open}
            >
              {/* Close Button at top right */}
              <button
                onClick={closeMenu}
                className="absolute top-6 right-6 text-foreground hover:text-accent flex items-center justify-center cursor-pointer transition-colors duration-300 focus:outline-none z-20"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="sm-panel-inner flex-1 flex flex-col gap-5">
                {/* Logo in top left of panel when open */}
                <div
                  className="sm-logo flex items-center select-none mb-8 border-b border-edge/10 pb-4"
                  aria-label="Logo"
                >
                  <span className="text-lg font-black tracking-[0.15em] text-foreground">
                    SAURABH <span className="text-accent">CHAUHAN</span>
                  </span>
                </div>

                <ul
                  className="sm-panel-list list-none m-0 p-0 flex flex-col gap-4"
                  role="list"
                  data-numbering={displayItemNumbering || undefined}
                >
                  {items && items.length ? (
                    items.map((it, idx) => (
                      <li
                        className="sm-panel-itemWrap relative overflow-hidden leading-none"
                        key={it.label + idx}
                      >
                        <a
                          className="sm-panel-item relative text-foreground hover:text-accent font-extrabold text-[1.8rem] sm:text-[2.2rem] cursor-pointer leading-none tracking-[-1px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.5em]"
                          href={it.link}
                          aria-label={it.ariaLabel}
                          data-index={idx + 1}
                          onClick={closeMenu}
                        >
                          <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                            {it.label}
                          </span>
                        </a>
                      </li>
                    ))
                  ) : (
                    <li
                      className="sm-panel-itemWrap relative overflow-hidden leading-none"
                      aria-hidden="true"
                    >
                      <span className="sm-panel-item relative text-foreground font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]">
                        <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                          No items
                        </span>
                      </span>
                    </li>
                  )}
                </ul>

                {displaySocials && socialItems && socialItems.length > 0 && (
                  <div
                    className="sm-socials mt-auto pt-8 flex flex-col gap-3 border-t border-edge/10"
                    aria-label="Social links"
                  >
                    <h3 className="sm-socials-title m-0 text-xs font-bold uppercase tracking-widest text-accent">
                      Socials
                    </h3>
                    <ul
                      className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap"
                      role="list"
                    >
                      {socialItems.map((s, i) => (
                        <li key={s.label + i} className="sm-socials-item">
                          <a
                            href={s.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sm-socials-link w-10 h-10 rounded-xl border border-foreground/15 dark:border-foreground/10 bg-foreground/[0.02] dark:bg-white/[0.02] text-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 hover:-translate-y-0.5"
                            aria-label={s.label}
                          >
                            {getSocialIcon(s.label)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>,
          document.body
        )}

      {/* Styled Styles */}
      <style>{`
.sm-toggle {
  background: transparent;
  border: none;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.sm-toggle-textWrap {
  margin-right: 0.5em;
}
.sm-toggle-textInner {
  display: flex;
  flex-direction: column;
  line-height: 1;
}
.sm-toggle-line {
  display: block;
  height: 1em;
  line-height: 1;
}
.sm-icon {
  position: relative;
  width: 14px;
  height: 14px;
  flex: 0 0 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
}
.sm-icon-line {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 2px;
  background: currentColor;
  border-radius: 2px;
  transform: translate(-50%, -50%);
  will-change: transform;
}
.sm-icon-line-v {
  transform: translate(-50%, -50%) rotate(90deg);
}

.sm-prelayers {
  width: 100vw;
  height: 100vh;
}
.sm-prelayer {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
}
.staggered-menu-panel {
  width: 100%;
  max-width: 420px;
}
@media (max-width: 640px) {
  .staggered-menu-panel {
    max-width: none;
    width: 100vw;
  }
}
.sm-panel-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.sm-panel-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.sm-panel-itemWrap {
  position: relative;
  overflow: hidden;
}
.sm-panel-item {
  position: relative;
  font-weight: 900;
  letter-spacing: -1px;
  transition: color 0.25s;
  display: inline-block;
  text-decoration: none;
  padding-right: 1.5em;
}
.sm-panel-itemLabel {
  display: inline-block;
  will-change: transform;
  transform-origin: 50% 100%;
}
.sm-panel-list[data-numbering] {
  counter-reset: smItem;
}
.sm-panel-list[data-numbering] .sm-panel-item::after {
  counter-increment: smItem;
  content: counter(smItem, decimal-leading-zero);
  position: absolute;
  top: 0.15em;
  right: 0.2em;
  font-size: 12px;
  font-weight: 400;
  color: var(--sm-accent, #14b8a6);
  letter-spacing: 0;
  pointer-events: none;
  user-select: none;
  opacity: var(--sm-num-opacity, 0);
}
.sm-socials {
  margin-top: auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
}
.sm-socials-title {
  margin: 0 0 0.5rem 0;
  font-size: 0.75rem;
  font-weight: 700;
}
.sm-socials-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.sm-socials-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
}
.sm-socials-list:hover .sm-socials-link:not(:hover) {
  opacity: 0.5;
}
      `}</style>
    </>
  );
};

export default StaggeredMenu;
