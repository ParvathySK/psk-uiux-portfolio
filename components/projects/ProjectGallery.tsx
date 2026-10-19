"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects, PROJECTS_DISPLAY_LIMIT } from "@/data/projects";

function ProjectStackCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end start"],
  });
  const reduceMotion = useReducedMotion();
  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [1, 1, 1] : [0.86, 1, 0.86]);
  const scaleY = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [1, 1, 1] : [0.92, 1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [1, 1, 1] : [0.76, 1, 0.76]);

  return (
    <motion.div
      ref={trackRef}
      className="project-gallery__track"
      style={{ zIndex: index + 1 }}
    >
      <motion.div className="project-gallery__card-motion" style={{ scaleX, scaleY, opacity }}>
        <ProjectCard project={project} index={index} />
      </motion.div>
    </motion.div>
  );
}

export function ProjectGallery() {
  const visibleProjects = projects.slice(0, PROJECTS_DISPLAY_LIMIT);

  return (
    <div className="project-grid project-gallery-grid">
      {visibleProjects.map((project, index) => (
        <ProjectStackCard
          key={project.slug}
          project={project}
          index={index}
        />
      ))}
    </div>
  );
}
