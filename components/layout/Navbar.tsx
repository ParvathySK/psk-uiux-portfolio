import Link from "next/link";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ResumeDownloadButton } from "@/components/layout/ResumeDownloadButton";
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
          <ResumeDownloadButton
            className="resume-button"
            resumeUrl={siteConfig.resumeUrl}
          />
        </nav>

        <MobileMenu items={navigationItems} resumeUrl={siteConfig.resumeUrl} />
      </div>
    </header>
  );
}
