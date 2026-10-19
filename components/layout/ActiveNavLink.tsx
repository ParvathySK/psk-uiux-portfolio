"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveNavLinkProps {
  href: string;
  label: string;
}

export function ActiveNavLink({ href, label }: ActiveNavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={isActive ? "is-active" : undefined}
      aria-current={pathname === href ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
