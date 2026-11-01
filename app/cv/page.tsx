import Image from "next/image";
import { Download } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";

export default function CVPage() {
  const resumeUrl = siteConfig.resumeUrl ?? "/parvathy-uiux-resume.pdf";

  return (
    <div className="cv-page">
      <Navbar />
      <main className="cv-main">
        <Container className="cv-content" size="wide">
          <div className="cv-download-row">
            <a className="cv-download" href={resumeUrl} download="Parvathy_UIUX_Resume.pdf">
              <Download aria-hidden="true" size={16} />
              Download resume
            </a>
          </div>

          <section className="cv-pages" aria-label="Resume preview">
            <Image
              className="cv-page-image"
              src="/images/parvathy-resume-page-1.png"
              alt="Resume page 1 of 2"
              width={1655}
              height={2340}
              sizes="100vw"
              loading="eager"
            />
            <Image
              className="cv-page-image"
              src="/images/parvathy-resume-page-2.png"
              alt="Resume page 2 of 2"
              width={1655}
              height={2340}
              sizes="100vw"
              loading="lazy"
            />
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
