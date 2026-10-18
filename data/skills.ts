export interface SkillGroup {
  title: string;
  skills: readonly string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Product design",
    skills: ["Product design", "Responsive web", "Mobile applications"],
  },
  {
    title: "UX and structure",
    skills: ["UX research", "Usability", "Information architecture"],
  },
  {
    title: "Design craft",
    skills: ["Wireframing", "Prototyping", "Interaction design", "Design systems"],
  },
  {
    title: "Collaboration",
    skills: ["Developer handoff", "Stakeholder collaboration", "Figma"],
  },
];
