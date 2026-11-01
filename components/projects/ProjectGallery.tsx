import { ProjectCard } from "@/components/projects/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { projects, PROJECTS_DISPLAY_LIMIT } from "@/data/projects";

interface ProjectGalleryProps {
  limit?: number;
}

export function ProjectGallery({ limit = PROJECTS_DISPLAY_LIMIT }: ProjectGalleryProps) {
  const visibleProjects = projects.slice(0, limit);

  return (
    <div className="project-grid project-gallery-grid">
      {visibleProjects.map((project, index) => (
        <ScrollReveal
          key={project.slug}
          className="project-grid__item project-gallery__item"
          delay={(index % 2) * 0.08}
        >
          <ProjectCard project={project} />
        </ScrollReveal>
      ))}
    </div>
  );
}
