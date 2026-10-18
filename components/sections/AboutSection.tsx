import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <Container className="about-grid" size="wide">
        <Reveal>
          <SectionHeading
            id="about-title"
            eyebrow="A little about me"
            title="Design is how I make complexity feel clear."
            number="02"
          />
        </Reveal>
        <Reveal className="about-copy" delay={0.08}>
          <p className="about-lede">
            I work across UI/UX and product design, shaping thoughtful web and mobile experiences.
          </p>
          <p>
            My practice brings together usability, information architecture, and clear product
            workflows. I collaborate with developers and product stakeholders to carry ideas from
            early structure through interface design and handoff.
          </p>
          <a className="text-link text-link--underlined" href="#process">
            How I work <span aria-hidden="true">↓</span>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
