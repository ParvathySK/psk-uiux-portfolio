import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `Featured projects | ${siteConfig.wordmark}`,
  description: "A selection of product, mobile, and web design projects.",
};

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <Navbar />

      <section className="project-gallery" aria-labelledby="project-gallery-title">
        <Container size="wide">
          <div className="project-gallery__intro">
            <div>
              <div className="project-gallery__eyebrow">
                <span>Selected work</span>
              </div>
              <h1 id="project-gallery-title">Featured projects<span aria-hidden="true">.</span></h1>
            </div>
            <p>Dashboards <i /> apps <i /> websites</p>
          </div>

          <ProjectGallery />

          <Link className="project-gallery__home-link" href="/#work">
            <span>Back to portfolio</span>
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </Container>
      </section>
    </main>
  );
}
