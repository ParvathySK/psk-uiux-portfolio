import Link from "next/link";
import { ActiveNavLink } from "@/components/layout/ActiveNavLink";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ResumeDownloadButton } from "@/components/layout/ResumeDownloadButton";
import { siteConfig } from "@/data/site-config";

const portfolioNavItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "About", href: "/my-story" },
  { label: "Process", href: "/design-system" },
] as const;

export function Navbar() {
  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label={siteConfig.wordmark + ", home"}>
          <span>{siteConfig.wordmark}</span>
          <span className="wordmark-dot" aria-hidden="true" />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {portfolioNavItems.map((item) => (
            <ActiveNavLink key={item.href} href={item.href} label={item.label} />
          ))}
          <ResumeDownloadButton
            className="resume-button"
            resumeUrl={siteConfig.resumeUrl}
          />
        </nav>

        <MobileMenu items={portfolioNavItems} resumeUrl={siteConfig.resumeUrl} />
      </div>
    </header>
  );
}
