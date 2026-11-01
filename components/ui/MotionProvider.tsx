"use client";

import { animate, inView } from "motion";
import { MotionConfig } from "motion/react";
import { usePathname } from "next/navigation";
import { useLayoutEffect, type ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(
        'main section:not([class*="hero"]):not(.my-story-intro)',
      ),
    );

    if (!sections.length) return;

    const activeAnimations = new Map<HTMLElement, ReturnType<typeof animate>>();

    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(22px)";
    });

    const stopObserving = sections.map((section) =>
      inView(
        section,
        (element) => {
          const sectionElement = element as HTMLElement;
          activeAnimations.get(sectionElement)?.stop();
          activeAnimations.set(
            sectionElement,
            animate(
              sectionElement,
              { opacity: 1, y: 0 },
              { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
            ),
          );

          return () => {
            activeAnimations.get(sectionElement)?.stop();
            activeAnimations.set(
              sectionElement,
              animate(
                sectionElement,
                { opacity: 0, y: 22 },
                { duration: 0.24, ease: [0.4, 0, 1, 1] },
              ),
            );
          };
        },
        { amount: 0.06, margin: "0px 0px -6% 0px" },
      ),
    );

    return () => {
      stopObserving.forEach((stop) => stop());
      activeAnimations.forEach((controls, section) => {
        controls.stop();
        section.style.removeProperty("opacity");
        section.style.removeProperty("transform");
      });
    };
  }, [pathname]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
