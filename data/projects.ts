import type { Project } from "@/types/project";

export const PROJECTS_DISPLAY_LIMIT = 4;

export const projects: Project[] = [
  {
    slug: "clozr-crm",
    name: "Clozr CRM",
    artwork: "panels",
    coverImage: "/images/clozr-crm-device-cover-v3.png",
    description: "CRM for Indian SMBs",
    disciplines: ["Lead management", "Sales dashboard", "Mobile app"],
    caseStudyUrl: "/projects/clozr-crm",
  },
  {
    slug: "amai",
    name: "AMAI",
    artwork: "orbit",
    coverImage: "/images/amai-project-cover-v3.webp",
    description: "Ayurveda Medical Association of India",
    disciplines: ["Member app", "Admin dashboard", "Membership platform"],
    caseStudyUrl: "/projects/amai",
  },
  {
    slug: "adnoex-website",
    name: "ADNOEX Website",
    artwork: "window",
    coverImage: "/images/adnoex-website-cover-v2.webp",
    description: "Website · Digital experience",
    disciplines: ["Website design", "Web experience", "Responsive design"],
    caseStudyUrl: "https://adnoex.com/",
  },
  {
    slug: "wagmi",
    name: "Wagmi Workspace",
    artwork: "window",
    coverImage: "/images/wagmi-workspace-cover-v2.webp",
    description: "Coworking workspace · Website design",
    disciplines: ["Coworking website", "Space showcase", "Responsive web design"],
    caseStudyUrl: "https://www.wagmiworkspace.com/",
  },
  { slug: "sellmate-crm", name: "SellMate CRM", artwork: "panels" },
  { slug: "halomoms", name: "HaloMoms", artwork: "ribbon" },
  { slug: "employa", name: "Employa", artwork: "grid" },
  { slug: "delios-ar", name: "Delios AR", artwork: "window" },
  { slug: "emobeat-emotune", name: "EmoBeat / EmoTune", artwork: "rings" },
  {
    slug: "doctor-availability-calendar",
    name: "Doctor Availability Calendar",
    artwork: "window",
    coverImage: "/images/doctor-availability-calendar-cover.png",
    description: "Calendify · Scheduling web app UX",
    disciplines: ["Availability calendar", "Doctor scheduling", "Web app UX"],
  },
  { slug: "mindmate", name: "MindMate", artwork: "field" },
  { slug: "kallisto", name: "Kallisto", artwork: "fold" },
];
