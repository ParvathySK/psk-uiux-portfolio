import type { Project } from "@/types/project";

export const PROJECTS_DISPLAY_LIMIT = 6;

export const projects: Project[] = [
  {
    slug: "clozr-crm",
    name: "Clozr CRM",
    artwork: "panels",
    coverImage: "/images/clozr-crm-cover-clean.png",
    description: "CRM for Indian SMBs",
    disciplines: ["Lead management", "Sales dashboard", "Mobile app"],
  },
  {
    slug: "amai",
    name: "AMAI",
    artwork: "orbit",
    coverImage: "/images/amai-project-cover.png",
    description: "Ayurveda Medical Association of India",
    disciplines: ["Member app", "Admin dashboard", "Membership platform"],
    caseStudyUrl: "https://ayurveda-amai.org/",
  },
  {
    slug: "doctor-availability-calendar",
    name: "Doctor Availability Calendar",
    artwork: "window",
    coverImage: "/images/doctor-availability-calendar-cover.png",
    description: "Calendify · Scheduling web app UX",
    disciplines: ["Availability calendar", "Doctor scheduling", "Web app UX"],
  },
  {
    slug: "adnoex-website",
    name: "ADNOEX Website",
    artwork: "window",
    coverImage: "/images/adnoex-website-cover.png",
    description: "Website · Digital experience",
    disciplines: ["Website design", "Web experience", "Responsive design"],
  },
  {
    slug: "wagmi",
    name: "Wagmi Workspace",
    artwork: "window",
    coverImage: "/images/wagmi-workspace-cover.png",
    description: "Coworking workspace · Website design",
    disciplines: ["Coworking website", "Space showcase", "Responsive web design"],
  },
  {
    slug: "bookmyshow-mobile-redesign",
    name: "BookMyShow Mobile App Redesign",
    artwork: "window",
    coverImage: "/images/bookmyshow-mobile-redesign-cover.png",
    description: "Entertainment · Mobile app redesign",
    disciplines: ["Movie discovery", "Ticket booking", "Entertainment app"],
  },
  { slug: "sellmate-crm", name: "SellMate CRM", artwork: "panels" },
  { slug: "halomoms", name: "HaloMoms", artwork: "ribbon" },
  { slug: "employa", name: "Employa", artwork: "grid" },
  { slug: "delios-ar", name: "Delios AR", artwork: "window" },
  { slug: "emobeat-emotune", name: "EmoBeat / EmoTune", artwork: "rings" },
  { slug: "likee", name: "Likee", artwork: "blocks" },
  { slug: "mindmate", name: "MindMate", artwork: "field" },
  { slug: "kallisto", name: "Kallisto", artwork: "fold" },
];
