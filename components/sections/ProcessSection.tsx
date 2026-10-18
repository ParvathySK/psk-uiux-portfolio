import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const experience = [
  {
    company: "Kallisto Innovations (Trivandrum)",
    role: "UI/UX Designer",
    duration: "Mar 2026 - Present",
  },
  {
    company: "Nexotech Solutions (Alappuzha)",
    role: "UI/UX Designer (intern)",
    duration: "Sep 2025 – Mar 2026",
  },
  {
    company: "Seqato Software Solutions (Trivandrum)",
    role: "Software Engineer QA",
    duration: "Apr 2022 – Sep 2025",
  },
];

export function ProcessSection() {
  return (
    <section className="section process-section" id="process" aria-labelledby="process-title">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="process-title"
            eyebrow="Experience"
            title="The path so far."
            description="Every role has shaped the way I think, design, and solve problems."
          />
        </Reveal>
        <Reveal className="experience-list-reveal">
          <ol className="experience-list">
            {experience.map((item) => (
              <li className="experience-entry" key={item.company}>
                <h3 className="experience-entry__company">{item.company}</h3>
                <div className="experience-entry__details">
                  <p className="experience-entry__role">{item.role}</p>
                  <p className="experience-entry__duration">{item.duration}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
