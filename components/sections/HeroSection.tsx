import { ArrowDown, ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <Container className="hero-grid" size="wide">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {siteConfig.role}
          </p>
          <h1 id="hero-title">
            Designing digital products <em>with clarity.</em>
          </h1>
          <p className="hero-description">
            I bring user-centered thinking, thoughtful structure, and considered visual design to
            digital experiences.
          </p>
          <div className="hero-actions">
            <Link className="button button--primary" href="#work">
              View selected work <ArrowDownRight aria-hidden="true" size={16} />
            </Link>
            <Link className="text-link" href="#contact">
              Contact me <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
          </div>
          <a className="hero-scroll" href="#work">
            <span>Scroll to explore</span>
            <ArrowDown aria-hidden="true" size={15} />
          </a>
        </div>

        <div className="hero-visual" role="img" aria-label="Abstract graphic placeholder for a portrait">
          <div className="hero-visual__orbit hero-visual__orbit--outer" aria-hidden="true" />
          <div className="hero-visual__orbit hero-visual__orbit--inner" aria-hidden="true" />
          <div className="hero-visual__disc" aria-hidden="true" />
          <div className="hero-visual__cutout" aria-hidden="true" />
          <div className="hero-visual__mark" aria-hidden="true">
            <span>PSK</span>
            <span>Design portfolio</span>
          </div>
          <div className="hero-visual__caption">
            <span>01 / 06</span>
            <span>Curiosity, made visible.</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
