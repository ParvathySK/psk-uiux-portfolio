import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectHover } from "@/components/ui/ProjectHover";
import { projects } from "@/data/projects";

export function SelectedWorkSection() {
  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="work-title"
            eyebrow="A selection"
            title="Selected work"
            description="A collection of projects in product and interface design."
            number="01 — 10"
          />
        </Reveal>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal
              className={
                "project-grid__item" +
                (project.featured ? " project-grid__item--feature" : "") +
                (index === 1 ? " project-grid__item--support" : "")
              }
              delay={Math.min(index % 3, 2) * 0.07}
              key={project.slug}
            >
              <ProjectHover>
                <ProjectCard project={project} featured={project.featured} />
              </ProjectHover>
            </Reveal>
          ))}
        </div>
        <p className="work-note">
          Case study details and project links can be added as they are ready to share.
        </p>
      </Container>
    </section>
  );
}
