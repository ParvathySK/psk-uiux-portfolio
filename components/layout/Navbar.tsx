import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

export function Navbar() {
  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <Link className="wordmark" href="#top" aria-label={siteConfig.wordmark + ", home"}>
          <span>{siteConfig.wordmark}</span>
          <span className="wordmark-dot" aria-hidden="true" />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          {siteConfig.resumeUrl ? (
            <a className="resume-link" href={siteConfig.resumeUrl} download>
              Resume <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          ) : null}
        </nav>

        <MobileMenu items={navigationItems} resumeUrl={siteConfig.resumeUrl} />
      </div>
    </header>
  );
}
