import { ActiveNavLink } from "@/components/layout/ActiveNavLink";
import { ResumeDownloadButton } from "@/components/layout/ResumeDownloadButton";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { siteConfig } from "@/data/site-config";

const portfolioNavItems = [
  { label: "Home", href: "/#top" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/my-story" },
] as const;

export function Navbar() {
  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <nav className="desktop-nav" aria-label="Main navigation">
          {portfolioNavItems.map((item) => (
            <ActiveNavLink key={item.href} href={item.href} label={item.label} />
          ))}
          <ResumeDownloadButton
            className="resume-button"
            resumeUrl={siteConfig.resumeUrl}
          />
          <ThemeToggle />
        </nav>

      </div>
    </header>
  );
}
