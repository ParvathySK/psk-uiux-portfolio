import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";
import type { Project } from "@/types/project";

export const metadata: Metadata = {
  title: `My case studies | ${siteConfig.wordmark}`,
  description: "Selected product design case studies, process, and final screens.",
};

const bookMyShowRedesign: Project = {
  slug: "bookmyshow-redesign",
  name: "BookMyShow App Redesign",
  artwork: "window",
  coverImage: "/images/bookmyshow-mobile-redesign-cover-v2.webp",
  description: "Mobile app · Redesign",
  caseStudyUrl: "https://www.behance.net/gallery/240569735/BookMyShow-App-Redesign",
};

const eHealthKerala: Project = {
  slug: "ehealth-kerala-heuristic-evaluation",
  name: "eHealth Kerala",
  artwork: "window",
  coverImage: "/images/ehealth-kerala-heuristic-cover.svg",
  description: "Heuristic evaluation · Healthcare",
  caseStudyUrl:
    "https://www.behance.net/gallery/240684127/-Heuristic-Evaluation-Case-Study-eHealth-Kerala?tracking_source=project_owner_other_projects",
};

const swiggyRedesign: Project = {
  slug: "swiggy-mood-based-food-discovery-redesign",
  name: "Swiggy UX Redesign",
  artwork: "window",
  coverImage: "/images/swiggy-mood-redesign-cover.png",
  description: "Mobile app · Mood-based food discovery",
  caseStudyUrl: "https://dribbble.com/shots/26837095--What-s-Your-Mood-Today-Swiggy-UX-Redesign",
};

const crazyCtaHover: Project = {
  slug: "crazy-cta-hover-effect",
  name: "Crazy CTA Hover Effect",
  artwork: "window",
  coverImage: "/images/crazy-cta-hover-cover.png",
  description: "Interaction design · Figma experiment",
  caseStudyUrl: "https://dribbble.com/shots/26856104-Crazy-CTA-Hover-Effect",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="case-studies-page" id="top">
        <section className="case-studies-page__section">
          <Container size="wide">
            <div className="case-studies-page__grid">
              <ProjectCard project={bookMyShowRedesign} />
              <ProjectCard project={eHealthKerala} />
              <ProjectCard project={swiggyRedesign} />
              <ProjectCard project={crazyCtaHover} />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
