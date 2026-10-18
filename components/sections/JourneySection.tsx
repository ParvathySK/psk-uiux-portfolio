import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";

export function JourneySection() {
  return (
    <section className="section journey-section" id="journey" aria-labelledby="journey-title">
      <Container size="wide">
        <div className="journey-editorial">
          <Reveal>
            <h2 className="journey-editorial__title" id="journey-title">
              Oh, hi! I&apos;m Parvathy.
            </h2>
            <p className="journey-editorial__lede">
              A UI/UX Designer &amp; Product Designer who asks “But why?” before asking “What color?”
            </p>

            <div className="journey-editorial__copy">
              <p>A designer, yes. A design robot, no.</p>
              <p>
                I like asking questions, challenging assumptions, and figuring out why a perfectly
                good-looking screen still feels wrong.
              </p>
              <p>
                My goal? Make digital products that are thoughtful, useful, and just a little
                delightful.
              </p>
              <p>
                I started my career in software engineering and QA, learning how digital products
                work and where they can fall short. Then I moved into design—from checking
                the experience to shaping it.
              </p>
              <p>
                Now, I turn ideas into clear, intuitive interfaces with a quality-first eye and a
                focus on the people using them.
              </p>
            </div>
          </Reveal>

          <SelectedWorkSection embedded />
        </div>
      </Container>
    </section>
  );
}
