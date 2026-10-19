import type { ReactNode } from "react";
import { AnimatedReveal } from "@/components/design-system/DesignInteractions";
import { StoryIllustration, type StoryScene } from "@/components/story/StoryIllustration";

interface StoryChapterProps {
  id: string;
  number: string;
  label: string;
  title: string;
  scene: StoryScene;
  note: string;
  children: ReactNode;
  alternate?: boolean;
}

export function StoryChapter({ id, number, label, title, scene, note, children, alternate = false }: StoryChapterProps) {
  return (
    <section className={`story-chapter${alternate ? " story-chapter--alternate" : ""}`} id={id} aria-labelledby={`${id}-title`}>
      <div className="story-container">
        <AnimatedReveal className="story-chapter__grid">
          <div className="story-chapter__copy">
            <span className="story-chapter__label"><b>{number}</b>{label}</span>
            <h2 id={`${id}-title`}>{title}</h2>
            <div className="story-chapter__body">{children}</div>
            <p className="story-note"><span aria-hidden="true">✳</span>{note}</p>
          </div>
          <div className="story-chapter__art">
            <StoryIllustration scene={scene} />
            <span className="story-chapter__figure">FIG. {number} <i>FIELD NOTES</i></span>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
