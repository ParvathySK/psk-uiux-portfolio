import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { PROJECTS_DISPLAY_LIMIT, projects } from "@/data/projects";

interface ReadNextProjectsProps {
  currentProjectSlug: string;
}

export function ReadNextProjects({ currentProjectSlug }: ReadNextProjectsProps) {
  const nextProjects = projects
    .slice(0, PROJECTS_DISPLAY_LIMIT)
    .filter((project) => project.slug !== currentProjectSlug);

  if (nextProjects.length === 0) return null;

  return (
    <section className="read-next" aria-labelledby="read-next-title">
      <Container size="wide">
        <div className="read-next__heading">
          <h2 id="read-next-title">More work to explore<span>.</span></h2>
          <p>Take a look at a few more selected projects.</p>
        </div>
        <div className="read-next__grid">
          {nextProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </Container>
    </section>
  );
}
