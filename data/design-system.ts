export const designTokens = {
  colors: {
    lime: "#C9F36B",
    limeInk: "#526A27",
    ink: "#171A15",
    muted: "#73766E",
    line: "#D8DBD0",
    paper: "#F3F3ED",
    softWhite: "#FBFBF7",
    sage: "#E9EBE1",
    sageTint: "#F0F2E9",
    coral: "#EE7553",
    success: "#426631",
    warning: "#92621B",
    error: "#A94737",
    info: "#526A27",
  },
  spacing: [4, 8, 16, 24, 40, 64],
  radii: [4, 8, 16],
  typeScale: [
    { name: "Display", sample: "Make room for the good idea.", size: 56, weight: 700, lineHeight: 1.02, family: "display" },
    { name: "Section heading", sample: "Everything in its right place", size: 28, weight: 700, lineHeight: 1.15, family: "display" },
    { name: "Body", sample: "Useful details get room to breathe and enough line-height to be read at human speed.", size: 16, weight: 400, lineHeight: 1.7, family: "text" },
    { name: "Supporting", sample: "A little extra context, without the extra noise.", size: 13, weight: 400, lineHeight: 1.55, family: "text" },
    { name: "Label", sample: "SMALL WORDS. VERY IMPORTANT JOBS.", size: 10, weight: 700, lineHeight: 1.4, family: "text" },
  ],
  shadows: {
    quiet: "0 4px 14px rgb(23 26 21 / 6%)",
    lifted: "0 14px 34px rgb(23 26 21 / 12%)",
  },
} as const;

export const colorGroups = [
  {
    label: "Brand",
    note: "A bright signal, used with a light touch.",
    tokens: [
      { name: "Accent / lime", value: designTokens.colors.lime, use: "Primary actions", foreground: designTokens.colors.ink },
      { name: "Accent / ink", value: designTokens.colors.limeInk, use: "Readable emphasis", foreground: "#FFFFFF" },
      { name: "Accent / coral", value: designTokens.colors.coral, use: "Destructive actions", foreground: designTokens.colors.ink },
    ],
  },
  {
    label: "Neutrals",
    note: "Warm backgrounds let the content do the talking.",
    tokens: [
      { name: "Ink", value: designTokens.colors.ink, use: "Text · structure", foreground: "#FFFFFF" },
      { name: "Muted", value: designTokens.colors.muted, use: "Supporting text", foreground: "#FFFFFF" },
      { name: "Warm paper", value: designTokens.colors.paper, use: "Page canvas", foreground: designTokens.colors.ink },
      { name: "Soft white", value: designTokens.colors.softWhite, use: "Raised surface", foreground: designTokens.colors.ink },
      { name: "Soft sage", value: designTokens.colors.sage, use: "Quiet selection", foreground: designTokens.colors.ink },
      { name: "Border", value: designTokens.colors.line, use: "Useful separation", foreground: designTokens.colors.ink },
    ],
  },
  {
    label: "Feedback",
    note: "Color helps; a clear label finishes the sentence.",
    tokens: [
      { name: "Success", value: designTokens.colors.success, use: "Completed", foreground: "#FFFFFF" },
      { name: "Warning", value: designTokens.colors.warning, use: "Needs attention", foreground: "#FFFFFF" },
      { name: "Error", value: designTokens.colors.error, use: "Action needed", foreground: "#FFFFFF" },
      { name: "Information", value: designTokens.colors.info, use: "Helpful context", foreground: "#FFFFFF" },
    ],
  },
] as const;

export const designPrinciples = [
  {
    number: "01",
    title: "Clarity over cleverness",
    description: "If users need a tutorial to understand the button, the button has some explaining to do.",
    icon: "focus",
  },
  {
    number: "02",
    title: "Consistency beats improvisation",
    description: "A design system is cheaper than reinventing the same button seventeen times.",
    icon: "layers",
  },
  {
    number: "03",
    title: "Accessibility from the start",
    description: "Usability shouldn't depend on perfect eyesight, perfect timing, or perfect luck.",
    icon: "accessibility",
  },
  {
    number: "04",
    title: "Every detail needs a reason",
    description: "Decoration is welcome. Decoration pretending to be functionality is not.",
    icon: "sparkles",
  },
] as const;

export const designProcess = [
  {
    number: "01",
    title: "Understand",
    prompt: "What problem are we actually solving?",
    description: "Explore the brief, users, goals, constraints, and business needs before reaching for the shiny colors.",
    deliverables: ["Problem framing", "Goals & constraints", "User questions"],
  },
  {
    number: "02",
    title: "Explore",
    prompt: "Less guessing. More understanding.",
    description: "Review the current experience, research users where possible, and find the friction worth fixing.",
    deliverables: ["Experience audit", "Research notes", "Opportunity areas"],
  },
  {
    number: "03",
    title: "Structure",
    prompt: "Make it make sense.",
    description: "Shape information architecture, user flows, navigation, and the decisions people need to make.",
    deliverables: ["Information architecture", "User flows", "Content structure"],
  },
  {
    number: "04",
    title: "Wireframe",
    prompt: "Boxes with a purpose.",
    description: "Explore layout, content hierarchy, and interactions before investing in visual polish.",
    deliverables: ["Page layouts", "Interaction notes", "Low-fidelity screens"],
  },
  {
    number: "05",
    title: "Design",
    prompt: "Pixels, under control.",
    description: "Apply the visual system, responsive layouts, and reusable components to make the idea feel real.",
    deliverables: ["Visual direction", "Responsive UI", "Reusable components"],
  },
  {
    number: "06",
    title: "Prototype & test",
    prompt: "Break it before launch.",
    description: "Validate important interactions, gather feedback, and look for usability issues while change is still easy.",
    deliverables: ["Clickable prototype", "Feedback notes", "Usability fixes"],
  },
  {
    number: "07",
    title: "Refine",
    prompt: "Better, not just newer.",
    description: "Improve the experience based on findings, feedback, constraints, and implementation considerations.",
    deliverables: ["Final refinements", "Handoff details", "Next questions"],
  },
] as const;
