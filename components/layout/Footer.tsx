import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner" size="wide">
        <p>© {new Date().getFullYear()} {siteConfig.wordmark}. All rights reserved.</p>
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
