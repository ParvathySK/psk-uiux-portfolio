import type { Project } from "@/types/project";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { ProjectArtwork } from "@/components/projects/ProjectArtwork";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="project-card project-card--horizontal">
      <div
        className="project-card__visual"
        style={{
          "--project-cover-image": project.coverImage ? `url("${project.coverImage}")` : "none",
        } as CSSProperties}
      >
        <ProjectArtwork
          name={project.name}
          style={project.artwork}
          coverImage={project.coverImage}
          description={project.description}
          showCaption={false}
        />
      </div>

      <div className="project-card__details">
        <div className="project-card__intro">
          <span className="project-card__eyebrow">Selected project</span>
          <span className="project-card__index" aria-label={`Project ${index + 1}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2>{project.name}</h2>
          {project.description ? <p>{project.description}</p> : null}
        </div>

        {project.disciplines?.length ? (
          <ul className="project-card__disciplines" aria-label="Project focus">
            {project.disciplines.slice(0, 3).map((discipline) => (
              <li key={discipline}>{discipline}</li>
            ))}
          </ul>
        ) : null}

        {project.caseStudyUrl ? (
          <a
            className="project-card__action"
            href={project.caseStudyUrl}
            target={project.caseStudyUrl.startsWith("http") ? "_blank" : undefined}
            rel={project.caseStudyUrl.startsWith("http") ? "noreferrer" : undefined}
          >
            View project <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        ) : null}
      </div>
    </article>
  );
}
