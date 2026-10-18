import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section className="section process-section" id="process" aria-labelledby="process-title">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="process-title"
            eyebrow="A thoughtful process"
            title="Make room for the right answer."
            description="A flexible approach that keeps the problem, the people, and the details in view."
            number="03"
          />
        </Reveal>
        <ol className="process-list">
          {processSteps.map((step, index) => (
            <Reveal delay={index * 0.045} key={step.number}>
              <li className="process-step">
                <span className="process-step__number">{step.number}</span>
                <div className="process-step__content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < processSteps.length - 1 ? (
                  <ArrowRight aria-hidden="true" className="process-step__arrow" size={17} strokeWidth={1.4} />
                ) : null}
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
