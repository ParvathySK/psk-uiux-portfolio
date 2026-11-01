"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface ActiveNavLinkProps {
  href: string;
  label: string;
}

function scrollToSection(target: Element) {
  target.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start",
  });
}

export function ActiveNavLink({ href, label }: ActiveNavLinkProps) {
  const pathname = usePathname();
  const hash = href.includes("#") ? href.slice(href.indexOf("#")) : "";
  const [isAnchorActive, setIsAnchorActive] = useState(false);
  const [isWorkSectionActive, setIsWorkSectionActive] = useState(false);

  useEffect(() => {
    if (!hash) return;

    const section = document.querySelector(hash);
    if (!section) return;

    const syncHashState = () => {
      setIsAnchorActive(window.location.hash === hash);
    };

    const initialSync = window.requestAnimationFrame(syncHashState);
    window.addEventListener("hashchange", syncHashState);

    const observer = new IntersectionObserver(
      ([entry]) => setIsAnchorActive(entry.isIntersecting),
      { rootMargin: "-20% 0px -55% 0px", threshold: 0 },
    );
    observer.observe(section);

    return () => {
      window.cancelAnimationFrame(initialSync);
      window.removeEventListener("hashchange", syncHashState);
      observer.disconnect();
    };
  }, [hash, pathname]);

  useEffect(() => {
    const homePath = href.slice(0, href.indexOf("#"));
    if (!hash || pathname !== homePath || window.location.hash !== hash) return;

    const target = document.querySelector(hash);
    if (!target) return;

    let frame = 0;
    const readyObserver = new MutationObserver(() => {
      if (document.documentElement.dataset.homeReady !== "true") return;
      readyObserver.disconnect();
      frame = window.requestAnimationFrame(() => scrollToSection(target));
    });

    if (document.documentElement.dataset.homeReady === "true") {
      frame = window.requestAnimationFrame(() => scrollToSection(target));
    } else {
      readyObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-home-ready"],
      });
    }

    return () => {
      window.cancelAnimationFrame(frame);
      readyObserver.disconnect();
    };
  }, [hash, href, pathname]);

  useEffect(() => {
    if (href !== "/" || pathname !== "/") return;

    const workSection = document.querySelector("#work");
    if (!workSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsWorkSectionActive(entry.isIntersecting),
      { rootMargin: "-20% 0px -55% 0px", threshold: 0 },
    );
    observer.observe(workSection);

    return () => observer.disconnect();
  }, [href, pathname]);

  const isActive = hash
    ? pathname === href.slice(0, href.indexOf("#")) && isAnchorActive
    : href === "/"
      ? pathname === "/" && !isWorkSectionActive
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={isActive ? "is-active" : undefined}
      aria-current={isActive ? (hash ? "location" : "page") : undefined}
      onClick={() => {
        if (!hash || pathname !== href.slice(0, href.indexOf("#"))) return;

        const target = document.querySelector(hash);
        if (!target) return;

        window.setTimeout(() => {
          scrollToSection(target);
        }, 0);
      }}
    >
      {label}
    </Link>
  );
}
