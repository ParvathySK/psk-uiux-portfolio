import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectGallery } from "@/components/projects/ProjectGallery";

export function SelectedWorkSection({ embedded = false }: { embedded?: boolean }) {
  const work = (
    <>
      <Reveal>
        <div className="work-gallery-intro">
          <div>
            <span className="work-gallery-intro__eyebrow">Selected work</span>
            <h2 id="work-title">Good ideas, made useful<span>.</span></h2>
          </div>
          <p>Digital products <i /> Mobile apps <i /> Websites</p>
        </div>
      </Reveal>

      <ProjectGallery />
    </>
  );

  if (embedded) {
    return (
      <section className="work-section work-section--embedded" id="work" aria-labelledby="work-title">
        {work}
      </section>
    );
  }

  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <Container size="wide">{work}</Container>
    </section>
  );
}
