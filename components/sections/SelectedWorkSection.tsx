import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

const featuredProject = projects.find((project) => project.slug === "sellmate-crm") ?? projects[0];

const systemColors = [
  { name: "Lime", color: "#c9f36b" },
  { name: "Coral", color: "#ed8c81" },
  { name: "Teal", color: "#79b9b5" },
  { name: "Lavender", color: "#d7d2eb" },
  { name: "Ink", color: "#171a15" },
] as const;

export function SelectedWorkSection({ embedded = false }: { embedded?: boolean }) {
  const gallery = (
    <>
        <Reveal>
          <div className="work-gallery-heading">
            <span aria-hidden="true" />
            <h2 id="work-title">A few things I made</h2>
            <span aria-hidden="true" />
          </div>
        </Reveal>

        <div className="work-showcase-grid">
          <Reveal className="work-showcase-grid__item" delay={0.04}>
            <article className="work-showcase-card">
              <div className="work-showcase-card__visual work-showcase-card__visual--project">
                <div className="featured-project-preview" role="img" aria-label={`${featuredProject.name} project feature overview`}>
                  <div className="featured-project-preview__board">
                    <div className="featured-project-preview__feature featured-project-preview__feature--checkout">
                      <div className="featured-project-preview__illustration" aria-hidden="true"><i /><i /><i /><b /></div>
                      <span><strong>Predictable recurring revenue</strong><small>Flexible plans that grow with you.</small></span>
                    </div>
                    <div className="featured-project-preview__feature featured-project-preview__feature--customers">
                      <div className="featured-project-preview__illustration" aria-hidden="true"><i /><i /><i /><b /></div>
                      <span><strong>Every customer, in sync</strong><small>People and payment details together.</small></span>
                    </div>
                    <div className="featured-project-preview__feature featured-project-preview__feature--profiles">
                      <div className="featured-project-preview__illustration" aria-hidden="true"><i /><i /><i /><b /></div>
                      <span><strong>One clear customer view</strong><small>Find the details that matter, faster.</small></span>
                    </div>
                    <div className="featured-project-preview__feature featured-project-preview__feature--payments">
                      <div className="featured-project-preview__illustration" aria-hidden="true"><i /><i /><i /><b /></div>
                      <span><strong>Fewer failed payments</strong><small>Smart retries keep revenue moving.</small></span>
                    </div>
                    <div className="featured-project-preview__feature featured-project-preview__feature--growth">
                      <div className="featured-project-preview__illustration" aria-hidden="true"><i /><i /><i /><b /></div>
                      <span><strong>Growth at a glance</strong><small>Turn live numbers into next steps.</small></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work-showcase-card__content work-showcase-card__content--featured">
                <h3>Featured projects</h3>
                <span className="work-showcase-card__arrow" aria-hidden="true" />
              </div>
            </article>
          </Reveal>

          <Reveal className="work-showcase-grid__item" delay={0.1}>
            <article className="work-showcase-card">
              <div className="work-showcase-card__visual work-showcase-card__visual--system">
                <div className="design-language-preview">
                  <div className="design-language-preview__page design-language-preview__page--left" aria-hidden="true">
                    <span className="design-language-preview__page-kicker" />
                    <span className="design-language-preview__page-line design-language-preview__page-line--long" />
                    <span className="design-language-preview__page-line" />
                    <span className="design-language-preview__page-block" />
                    <span className="design-language-preview__page-line design-language-preview__page-line--short" />
                  </div>
                  <div className="design-language-preview__page design-language-preview__page--right" aria-hidden="true">
                    <span className="design-language-preview__page-kicker" />
                    <span className="design-language-preview__page-line design-language-preview__page-line--long" />
                    <span className="design-language-preview__page-block design-language-preview__page-block--small" />
                    <span className="design-language-preview__page-line" />
                  </div>
                  <div className="design-language-preview__book" role="img" aria-label="Design language and UI system guide">
                    <span>PSK · DESIGN GUIDE</span>
                    <strong>Thoughtful<br />by design.</strong>
                    <span className="design-language-preview__book-swatches" aria-hidden="true">
                      {systemColors.slice(0, 4).map((color) => (
                        <i key={color.name} style={{ backgroundColor: color.color }} />
                      ))}
                    </span>
                    <small>Color, type &amp; components</small>
                  </div>
                </div>
              </div>
              <div className="work-showcase-card__content">
                <h3>Design system &amp; style</h3>
                <p>Color · type · components</p>
              </div>
            </article>
          </Reveal>

          <Reveal className="work-showcase-grid__item" delay={0.16}>
            <article className="work-showcase-card">
              <div className="work-showcase-card__visual work-showcase-card__visual--journey">
                <div className="journey-preview">
                  <div className="journey-preview__topline">
                    <span>MY DESIGN JOURNEY</span>
                    <span>01 → 02</span>
                  </div>
                  <div className="journey-preview__route">
                    <div className="journey-preview__step">
                      <span>01 / FOUNDATION</span>
                      <strong>Software<br />+ QA</strong>
                    </div>
                    <span className="journey-preview__arrow" aria-hidden="true">→</span>
                    <div className="journey-preview__step journey-preview__step--design">
                      <span>02 / NOW</span>
                      <strong>UI/UX<br />design</strong>
                    </div>
                  </div>
                  <span className="journey-preview__caption">From checking experiences to shaping them.</span>
                </div>
              </div>
              <div className="work-showcase-card__content">
                <h3>From QA to design</h3>
                <p>My journey · process</p>
              </div>
            </article>
          </Reveal>
        </div>
    </>
  );

  if (embedded) {
    return (
      <section className="work-section work-section--embedded" id="work" aria-labelledby="work-title">
        {gallery}
      </section>
    );
  }

  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <Container size="wide">{gallery}</Container>
    </section>
  );
}
