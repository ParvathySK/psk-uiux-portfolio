import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

export function Footer({ homeLinks = false }: { homeLinks?: boolean }) {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner" size="wide">
        <p>© {new Date().getFullYear()} {siteConfig.wordmark}. All rights reserved.</p>
        <nav className="site-footer__nav" aria-label="Footer navigation">
          {navigationItems.map((item) => (
            <Link key={item.href} href={homeLinks ? `/${item.href}` : item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="site-footer__social-group">
          <SocialLinks className="site-footer__social" />
        </div>
        <a className="back-to-top" href="#top" aria-label="Back to top">
          <span aria-hidden="true" />
        </a>
      </Container>
    </footer>
  );
}
