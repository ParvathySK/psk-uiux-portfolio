import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ProjectArtworkStyle } from "@/types/project";

interface ProjectArtworkProps {
  name: string;
  style: ProjectArtworkStyle;
  coverImage?: string;
  description?: string;
  linked?: boolean;
  showCaption?: boolean;
}

export function ProjectArtwork({ name, style, coverImage, description, linked = false, showCaption = true }: ProjectArtworkProps) {
  const caption = (
    <div className="project-artwork__caption">
      <div>
        <span className="project-artwork__eyebrow">{description || "Selected project"}</span>
        <h3>{name}</h3>
      </div>
      {linked ? (
        <span className="project-artwork__arrow" aria-hidden="true">
          <ArrowUpRight size={19} strokeWidth={1.7} />
        </span>
      ) : null}
    </div>
  );

  if (coverImage) {
    return (
      <div className="project-artwork project-artwork--cover">
        <Image
          src={coverImage}
          alt={`${name} project cover`}
          fill
          sizes="(max-width: 440px) 100vw, (max-width: 980px) 50vw, 50vw"
        />
        {showCaption ? caption : null}
      </div>
    );
  }

  return (
    <div className={"project-artwork artwork--" + style}>
      <div className="artwork__grain" aria-hidden="true" />
      <div className="artwork__shape artwork__shape--one" aria-hidden="true" />
      <div className="artwork__shape artwork__shape--two" aria-hidden="true" />
      <div className="artwork__shape artwork__shape--three" aria-hidden="true" />
      <div className="artwork__frame" aria-hidden="true">
        <div className="artwork__frame-top">
          <span />
          <span />
          <span />
          <i />
        </div>
        <div className="artwork__frame-body">
          <div className="artwork__frame-side" />
          <div className="artwork__frame-main">
            <span className="artwork__line artwork__line--long" />
            <span className="artwork__line artwork__line--short" />
            <div className="artwork__tiles">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
      <span className="artwork__index" aria-hidden="true">PSK — selected work</span>
      {showCaption ? caption : null}
    </div>
  );
}
