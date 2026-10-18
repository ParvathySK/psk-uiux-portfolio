export type ProjectArtworkStyle =
  | "orbit"
  | "panels"
  | "grid"
  | "ribbon"
  | "stack"
  | "window"
  | "rings"
  | "blocks"
  | "fold"
  | "field";

export interface Project {
  slug: string;
  name: string;
  artwork: ProjectArtworkStyle;
  featured?: boolean;
  description?: string;
  disciplines?: readonly string[];
  caseStudyUrl?: string;
  year?: string;
}
