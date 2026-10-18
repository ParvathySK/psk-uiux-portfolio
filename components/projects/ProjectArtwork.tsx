import type { ProjectArtworkStyle } from "@/types/project";

interface ProjectArtworkProps {
  name: string;
  style: ProjectArtworkStyle;
  featured?: boolean;
}

export function ProjectArtwork({ name, style, featured = false }: ProjectArtworkProps) {
  return (
    <div
      className={"project-artwork artwork--" + style + (featured ? " project-artwork--featured" : "")}
      role="img"
      aria-label={"Abstract portfolio artwork for " + name}
    >
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
    </div>
  );
}
