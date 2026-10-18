import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner" size="wide">
        <p>© {new Date().getFullYear()} {siteConfig.wordmark}. All rights reserved.</p>
        <nav className="site-footer__nav" aria-label="Footer navigation">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="back-to-top" href="#top" aria-label="Back to top">
          <span aria-hidden="true" />
        </a>
      </Container>
    </footer>
  );
}
