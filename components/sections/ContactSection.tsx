import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/data/site-config";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <Container className="contact-inner" size="wide">
        <Reveal>
          <span className="eyebrow">The next good thing</span>
          <h2 id="contact-title">Have a thoughtful project in mind?</h2>
          <p className="contact-copy">
            I’d love to hear what you’re working on and explore how design can help.
          </p>
          {siteConfig.email ? (
            <a className="button button--light" href={"mailto:" + siteConfig.email}>
              Start a conversation <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          ) : (
            <p className="contact-note">Contact details will appear here when they are ready to share.</p>
          )}
          <SocialLinks className="contact-social" />
        </Reveal>
        <div className="contact-stamp" aria-hidden="true">
          <span>Let’s</span>
          <span>make it</span>
          <span>matter<span className="contact-stamp__dot">.</span></span>
          <div className="contact-stamp__orbit" />
        </div>
      </Container>
    </section>
  );
}
