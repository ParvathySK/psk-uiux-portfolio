import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { ProjectArtwork } from "@/components/projects/ProjectArtwork";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const cardContent = (
    <>
      <ProjectArtwork name={project.name} style={project.artwork} featured={featured} />
      <div className="project-card__meta">
        <div>
          <span className="project-card__category">UI/UX · Product design</span>
          <h3>{project.name}</h3>
        </div>
        {project.caseStudyUrl ? (
          <span className="project-card__arrow" aria-hidden="true">
            <ArrowUpRight size={18} strokeWidth={1.7} />
          </span>
        ) : null}
      </div>
      {project.description ? <p className="project-card__description">{project.description}</p> : null}
      {project.disciplines?.length ? (
        <ul className="project-card__disciplines" aria-label="Design disciplines">
          {project.disciplines.map((discipline) => <li key={discipline}>{discipline}</li>)}
        </ul>
      ) : null}
    </>
  );

  return (
    <article className={"project-card" + (featured ? " project-card--featured" : "") + (project.caseStudyUrl ? " project-card--linked" : "")}>
      {project.caseStudyUrl ? (
        <a
          className="project-card__link"
          href={project.caseStudyUrl}
          target={project.caseStudyUrl.startsWith("http") ? "_blank" : undefined}
          rel={project.caseStudyUrl.startsWith("http") ? "noreferrer" : undefined}
          aria-label={"View " + project.name + " case study"}
        >
          {cardContent}
        </a>
      ) : cardContent}
    </article>
  );
}
