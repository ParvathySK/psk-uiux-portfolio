import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner" size="wide">
        <Link className="wordmark wordmark--footer" href="#top">
          <span>{siteConfig.wordmark}</span>
          <span className="wordmark-dot" aria-hidden="true" />
        </Link>
        <p>© {new Date().getFullYear()} {siteConfig.wordmark}. All rights reserved.</p>
        <SocialLinks className="site-footer__social" />
        <a className="back-to-top" href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </Container>
    </footer>
  );
}
