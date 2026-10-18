export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "Get clear on the problem, context, people, and constraints.",
  },
  {
    number: "02",
    title: "Research",
    description: "Gather useful signals and define what the experience needs to do.",
  },
  {
    number: "03",
    title: "Structure",
    description: "Shape the information and workflows before polishing the interface.",
  },
  {
    number: "04",
    title: "Design",
    description: "Explore visual directions and turn the strongest ideas into prototypes.",
  },
  {
    number: "05",
    title: "Refine",
    description: "Review the experience, test assumptions, and improve the details.",
  },
  {
    number: "06",
    title: "Handoff",
    description: "Document decisions and collaborate through implementation.",
  },
];
