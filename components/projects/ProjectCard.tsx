import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Project } from "@/types/project";
import { ProjectArtwork } from "@/components/projects/ProjectArtwork";

interface ProjectCardProps {
  project: Project;
  showArrow?: boolean;
}

export function ProjectCard({ project, showArrow = false }: ProjectCardProps) {
  const hasProjectLink = Boolean(project.caseStudyUrl);
  const isExternalLink = project.caseStudyUrl?.startsWith("http") ?? false;

  const cardContent = (
    <>
      <ProjectArtwork
        name={project.name}
        style={project.artwork}
        coverImage={project.coverImage}
        description={project.description}
        showCaption={false}
      />
      <div className="project-card__meta">
        <div className="project-card__copy">
          <span className="project-card__category">
            {project.description || "Selected project"}
            {project.year ? ` · ${project.year}` : ""}
          </span>
          <h2>{project.name}</h2>
        </div>
        {showArrow ? (
          <span className="project-card__action-arrow" aria-hidden="true">
            <ChevronRight size={22} strokeWidth={1.8} />
          </span>
        ) : null}
      </div>
    </>
  );

  return (
    <article className={"project-card project-card--gallery" + (hasProjectLink ? " project-card--linked" : "")}>
      {project.caseStudyUrl ? (
        isExternalLink ? (
          <a
            className="project-card__link"
            href={project.caseStudyUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.name} project`}
          >
            {cardContent}
          </a>
        ) : (
          <Link
            className="project-card__link"
            href={project.caseStudyUrl}
            aria-label={`View ${project.name} project`}
          >
            {cardContent}
          </Link>
        )
      ) : cardContent}
    </article>
  );
}
