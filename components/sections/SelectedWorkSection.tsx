import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { projects } from "@/data/projects";

const featuredProject = projects.find((project) => project.slug === "sellmate-crm") ?? projects[0];

const systemColors = [
  { name: "Lime", color: "#c9f36b" },
  { name: "Sage", color: "#e9ebe1" },
  { name: "Paper", color: "#f3f3ed" },
  { name: "Coral", color: "#ee7553" },
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
          <ScrollReveal className="work-showcase-grid__item" delay={0.04}>
            <Link
              className="work-showcase-card work-showcase-card--linked"
              href="/projects"
              aria-label="Explore featured projects"
            >
              <div className="work-showcase-card__visual work-showcase-card__visual--project">
                <div className="featured-project-preview" role="img" aria-label={`${featuredProject.name} project feature overview`}>
                  <div className="featured-project-preview__stage">
                    <div className="portfolio-screen portfolio-screen--dashboard" aria-hidden="true">
                      <div className="portfolio-screen__chrome"><i /><i /><i /><span>sellmate.app / overview</span></div>
                      <div className="portfolio-dashboard">
                        <div className="portfolio-dashboard__rail"><b>S</b><i /><i /><i /><i /></div>
                        <div className="portfolio-dashboard__content">
                          <div className="portfolio-dashboard__heading"><span>OVERVIEW</span><b>•••</b></div>
                          <strong>Good morning, Parvathy</strong>
                          <div className="portfolio-dashboard__metrics"><i /><i /><i /></div>
                          <div className="portfolio-dashboard__chart"><span /><svg viewBox="0 0 220 54" preserveAspectRatio="none"><path d="M0 45 C20 39 28 14 48 27 S78 41 99 22 S129 35 150 17 S178 31 195 11 S210 18 220 5" /></svg></div>
                          <div className="portfolio-dashboard__rows"><i /><i /><i /></div>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-screen portfolio-screen--website" aria-hidden="true">
                      <div className="portfolio-screen__chrome"><i /><i /><i /><span>studio / home</span></div>
                      <div className="portfolio-website"><b>STUDIO NORTH</b><span>Made for<br />everyday.</span><i /><small>EXPLORE COLLECTION ↗</small></div>
                    </div>
                    <div className="portfolio-phone" aria-hidden="true">
                      <div className="portfolio-phone__speaker" />
                      <div className="portfolio-phone__screen">
                        <div className="portfolio-phone__top"><b>9:41</b><i>•••</i></div>
                        <span>YOUR BALANCE</span>
                        <strong>$8,240</strong>
                        <div className="portfolio-phone__chart"><i /><i /><i /><i /><i /><i /></div>
                        <div className="portfolio-phone__action"><b>↗</b><b>＋</b><b>•••</b></div>
                        <div className="portfolio-phone__line" /><div className="portfolio-phone__line portfolio-phone__line--short" />
                      </div>
                    </div>
                  </div>
                  <div className="featured-project-preview__categories"><span>Dashboards</span><span>Mobile apps</span><span>Websites</span></div>
                </div>
              </div>
              <div className="work-showcase-card__content">
                <div className="work-showcase-card__copy">
                  <h3>Featured projects</h3>
                  <p>Dashboards · apps · websites</p>
                </div>
                <span className="work-showcase-card__arrow" aria-hidden="true" />
              </div>
            </Link>
          </ScrollReveal>

          <ScrollReveal className="work-showcase-grid__item" delay={0.1}>
            <Link
              className="work-showcase-card work-showcase-card--linked"
              href="/design-system"
              aria-label="Explore my design system"
            >
              <div className="work-showcase-card__visual work-showcase-card__visual--system">
                <div className="design-language-preview">
                  <div className="design-language-preview__palette">
                    <div className="design-language-preview__section-label"><span>MY UI COLOR KIT</span><b>05 TOKENS</b></div>
                    <div className="design-language-preview__swatches" aria-hidden="true">
                      {systemColors.map((color) => (
                        <span key={color.name}><i style={{ backgroundColor: color.color }} /><small>{color.name}</small></span>
                      ))}
                    </div>
                  </div>
                  <div className="design-language-preview__middle">
                    <div className="design-language-preview__type">
                      <span className="design-language-preview__section-label">TYPE / HIERARCHY</span>
                      <strong>Aa</strong>
                      <small>Clear type, calmer screens</small>
                      <i /><i />
                    </div>
                    <div className="design-language-preview__controls">
                      <span className="design-language-preview__section-label">BUTTONS &amp; ICONS</span>
                      <span className="design-language-preview__button">Save changes <b aria-hidden="true">↗</b></span>
                      <div className="design-language-preview__icon-row" aria-hidden="true"><i>⌕</i><i>＋</i><i>•••</i></div>
                    </div>
                  </div>
                  <div className="design-language-preview__component">
                    <div className="design-language-preview__component-heading"><span>COMPONENT / CARD</span><b>01</b></div>
                    <div className="design-language-preview__sample-card">
                      <i aria-hidden="true">A</i>
                      <span><strong>A tidy little component</strong><small>Consistent down to the corners</small></span>
                      <b>↗</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work-showcase-card__content">
                <div className="work-showcase-card__copy">
                  <h3>Design system &amp; style</h3>
                  <p>My style · tokens · components</p>
                </div>
                <span className="work-showcase-card__arrow" aria-hidden="true" />
              </div>
            </Link>
          </ScrollReveal>

          <ScrollReveal className="work-showcase-grid__item" delay={0.16}>
            <Link
              className="work-showcase-card work-showcase-card--linked"
              href="/my-story"
              aria-label="Read my story: from software QA to UI/UX design"
            >
              <div className="work-showcase-card__visual work-showcase-card__visual--journey">
                <div className="journey-preview">
                  <div className="journey-preview__route">
                    <div className="journey-preview__step journey-preview__step--qa">
                      <span className="journey-preview__step-number">01</span>
                      <div className="journey-preview__step-copy">
                        <span className="journey-preview__step-label">FOUNDATION · QA</span>
                        <strong>Software engineering<br />+ QA</strong>
                        <small>Logic · testing · detail</small>
                      </div>
                    </div>
                    <div className="journey-preview__bridge" aria-hidden="true">
                      <span />
                      <b>THE SHIFT</b>
                      <i>↓</i>
                      <span />
                    </div>
                    <div className="journey-preview__step journey-preview__step--design">
                      <span className="journey-preview__step-number">02</span>
                      <div className="journey-preview__step-copy">
                        <span className="journey-preview__step-label">TODAY · DESIGN</span>
                        <strong>UI/UX design</strong>
                        <small>Research · flows · interfaces</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work-showcase-card__content">
                <div className="work-showcase-card__copy">
                  <h3>From QA to design</h3>
                  <p>My journey · process</p>
                </div>
                <span className="work-showcase-card__arrow" aria-hidden="true" />
              </div>
            </Link>
          </ScrollReveal>
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
