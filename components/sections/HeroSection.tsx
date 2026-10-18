import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <Container className="hero-grid" size="wide">
        <div className="hero-copy">
          <h1 id="hero-title">
            <span>Let's make</span>
            <span>it pretty!</span>
          </h1>
          <p className="hero-description">
            Where creativity meets pixels. 🎨
          </p>
        </div>

        <figure className="hero-artwork">
          <Image
            className="hero-artwork__image"
            src="/images/hero-designer-collage-final.png"
            alt="Creative collage portrait of the designer with colorful brush strokes."
            width={1254}
            height={1254}
            preload
            sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 40vw"
          />
          <a className="hero-cta" href="#contact">
            <span>Hire me? (Why not?)</span>
            <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.2} />
          </a>
        </figure>

        <aside className="hero-side-note" aria-labelledby="hero-side-title">
          <h2 id="hero-side-title">
            <span>But does it</span>
            <span>work?</span>
          </h2>
          <p>
            Because pretty isn't enough. ✨
          </p>
        </aside>
      </Container>
    </section>
  );
}
