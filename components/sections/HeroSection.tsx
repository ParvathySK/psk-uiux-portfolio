import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

const heroPixels = Array.from({ length: 72 }, (_, index) => ({
  x: (index * 47 + 13) % 100,
  y: 8 + ((index * 29 + 17) % 84),
  size: index % 8 === 0 ? 4 : index % 3 === 0 ? 3 : 2,
  color: ["#d4aa4b", "#df978b", "#73aead"][index % 3],
  delay: -(((index * 13) % 42) / 10),
}));

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
          <a className="hero-cta" href="#work">
            <span>Hire me (Why not?)</span>
            <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.2} />
          </a>
          <SocialLinks className="hero-social-links" />
          <div className="hero-pixel-field" aria-hidden="true">
            {heroPixels.map((pixel, index) => (
              <span
                key={index}
                style={{
                  left: `${pixel.x}%`,
                  top: `${pixel.y}%`,
                  width: `${pixel.size}px`,
                  height: `${pixel.size}px`,
                  backgroundColor: pixel.color,
                  animationDelay: `${pixel.delay}s`,
                }}
              />
            ))}
          </div>
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
