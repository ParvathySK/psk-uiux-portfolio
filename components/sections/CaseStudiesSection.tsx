import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import type { Project } from "@/types/project";

const creativeWorkHub: Project = {
  slug: "experiments-and-case-studies",
  name: "Experiments & case studies",
  artwork: "window",
  coverImage: "/images/experiments-cover.svg",
  description: "Design explorations · Selected projects",
  caseStudyUrl: "/case-studies",
};

export function CaseStudiesSection() {
  return (
    <section className="case-studies-section" id="case-studies" aria-labelledby="case-studies-heading">
      <Container size="wide">
        <div className="case-studies__intro">
          <h2 id="case-studies-heading">A few things I made</h2>
        </div>

        <div className="case-studies__grid">
          <ProjectCard project={creativeWorkHub} showArrow />
        </div>
      </Container>
    </section>
  );
}
