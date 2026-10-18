"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRef, type KeyboardEvent, type MouseEvent } from "react";

interface MobileMenuProps {
  items: readonly { label: string; href: string }[];
  resumeUrl: string | null;
}

export function MobileMenu({ items, resumeUrl }: MobileMenuProps) {
  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const summaryRef = useRef<HTMLElement | null>(null);

  function closeMenu() {
    if (detailsRef.current) detailsRef.current.open = false;
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDetailsElement>) {
    if (event.key === "Escape" && detailsRef.current?.open) {
      closeMenu();
      summaryRef.current?.focus();
    }
  }

  function handleClick(event: MouseEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest("a")) closeMenu();
  }

  return (
    <details className="mobile-nav" ref={detailsRef} onKeyDown={handleKeyDown}>
      <summary ref={summaryRef} aria-label="Toggle navigation">
        <Menu aria-hidden="true" className="mobile-nav__menu-icon" size={20} />
        <X aria-hidden="true" className="mobile-nav__close-icon" size={20} />
      </summary>
      <nav className="mobile-nav__panel" aria-label="Mobile navigation" onClick={handleClick}>
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        {resumeUrl ? (
          <a href={resumeUrl} download>
            Resume <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        ) : null}
      </nav>
    </details>
  );
}
