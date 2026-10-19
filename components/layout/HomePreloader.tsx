"use client";

import { useEffect, useRef, useState } from "react";

const duration = 2200;
let hasPlayedHomePreloader = false;

export function HomePreloader() {
  const shouldPlayRef = useRef<boolean | null>(null);
  if (shouldPlayRef.current === null) shouldPlayRef.current = !hasPlayedHomePreloader;

  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(() => Boolean(shouldPlayRef.current));
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!shouldPlayRef.current) {
      document.documentElement.dataset.homeReady = "true";
      document.documentElement.dataset.homePixels = "true";
      const pixelStartTimer = window.setTimeout(() => {
        window.dispatchEvent(new Event("home:pixel-start"));
      }, 0);

      return () => {
        window.clearTimeout(pixelStartTimer);
        delete document.documentElement.dataset.homeReady;
        delete document.documentElement.dataset.homePixels;
      };
    }

    hasPlayedHomePreloader = true;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const totalDuration = reducedMotion ? 650 : duration;
    const previousOverflow = document.body.style.overflow;
    let frame = 0;
    let exitTimer = 0;
    let hideTimer = 0;
    let pixelStartTimer = 0;
    let startedAt = 0;

    document.body.style.overflow = "hidden";

    const tick = (timestamp: number) => {
      if (!startedAt) startedAt = timestamp;
      const nextProgress = Math.min(100, Math.round(((timestamp - startedAt) / totalDuration) * 100));
      setProgress(nextProgress);

      if (nextProgress < 100) {
        frame = window.requestAnimationFrame(tick);
        return;
      }

      exitTimer = window.setTimeout(() => {
        setIsExiting(true);
        hideTimer = window.setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = previousOverflow;
          document.documentElement.dataset.homeReady = "true";
          pixelStartTimer = window.setTimeout(() => {
            document.documentElement.dataset.homePixels = "true";
            window.dispatchEvent(new Event("home:pixel-start"));
          }, reducedMotion ? 0 : 2750);
        }, reducedMotion ? 0 : 440);
      }, reducedMotion ? 40 : 120);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
      window.clearTimeout(pixelStartTimer);
      document.body.style.overflow = previousOverflow;
      delete document.documentElement.dataset.homeReady;
      delete document.documentElement.dataset.homePixels;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`home-preloader${isExiting ? " home-preloader--exiting" : ""}`}
      role="progressbar"
      aria-label="Loading home page"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
    >
      <div
        className="home-preloader__black"
        style={{ height: `${progress}%` }}
        aria-hidden="true"
      />
      <span className="home-preloader__counter" aria-hidden="true">{progress}</span>
    </div>
  );
}
