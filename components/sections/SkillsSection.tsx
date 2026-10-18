import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="section skills-section" aria-labelledby="skills-title">
      <Container size="wide">
        <Reveal>
          <div className="skills-intro">
            <span className="eyebrow">What I bring</span>
            <h2 id="skills-title">A considered toolkit, from first questions to final details.</h2>
          </div>
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal delay={index * 0.06} key={group.title}>
              <article className="skill-group">
                <span className="skill-group__number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
