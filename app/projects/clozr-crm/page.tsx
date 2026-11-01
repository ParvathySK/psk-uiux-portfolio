import type { Metadata } from "next";
import Image from "next/image";
import { LifeBuoy, PanelsTopLeft, Plus, Search, Workflow } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ReadNextProjects } from "@/components/projects/ReadNextProjects";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `Clozr CRM case study | ${siteConfig.wordmark}`,
  description: "A connected product design system for Clozr CRM, PMO, Helpdesk, and mobile workflows.",
};

const modules = [
  {
    number: "01",
    title: "CRM",
    description: "Bring lead management, customer context, and sales activity into one clear workspace.",
    detail: "Leads · Follow-ups · Customers",
    Icon: PanelsTopLeft,
  },
  {
    number: "02",
    title: "PMO",
    description: "Give teams a consistent place to coordinate projects and keep work moving.",
    detail: "Projects · Teams · Progress",
    Icon: Workflow,
  },
  {
    number: "03",
    title: "Helpdesk",
    description: "Make support work easier to scan, prioritize, and follow through on.",
    detail: "Requests · Ownership · Status",
    Icon: LifeBuoy,
  },
];

const designSteps = [
  {
    number: "01",
    title: "Research & references",
    description: "I explored CRM, PMO, and Helpdesk products, collecting references to understand familiar patterns and what each team needs to see quickly.",
  },
  {
    number: "02",
    title: "Explore the visual direction",
    description: "I tested different palettes before choosing deep navy (#00113B) as the primary color, with clear supporting colors for statuses and actions.",
  },
  {
    number: "03",
    title: "Iterate, then refine",
    description: "I tried different layouts and component styles, then refined hierarchy, spacing, and navigation for a consistent desktop and mobile experience.",
  },
];

export default function ClozrCrmCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className="clozr-study" id="top">
        <section className="clozr-study__hero" aria-labelledby="clozr-title">
          <Container size="wide">
            <div className="clozr-study__heading">
              <div>
                <p className="clozr-study__eyebrow">Product design · SaaS · Mobile</p>
                <h1 id="clozr-title">One workspace.<br />Three connected workflows<span>.</span></h1>
              </div>
              <p className="clozr-study__summary">
                Designing a coherent experience across Clozr CRM, PMO, and Helpdesk, with mobile access for work on the move.
              </p>
            </div>

            <dl className="clozr-study__facts" aria-label="Project details">
              <div><dt>Product</dt><dd>Clozr business suite</dd></div>
              <div><dt>Focus</dt><dd>CRM · PMO · Helpdesk</dd></div>
              <div><dt>Platforms</dt><dd>Web · Mobile</dd></div>
              <div><dt>Contribution</dt><dd>UI/UX design</dd></div>
            </dl>

            <figure className="clozr-study__hero-art">
              <Image
                className="clozr-study__hero-image"
                src="/images/clozr-crm-glassmorphism-device-mockup.png"
                alt="Clozr PMO projects dashboard on a laptop beside the CRM mobile dashboard, presented in glass device mockups on a dark gradient background"
                fill
                sizes="(max-width: 760px) 100vw, 92vw"
              />
            </figure>
          </Container>
        </section>

        <section className="clozr-study__overview" id="overview" aria-labelledby="clozr-overview-title">
          <Container size="wide" className="clozr-study__overview-inner">
            <div className="clozr-study__section-heading">
              <p className="clozr-study__eyebrow">The product</p>
              <h2 id="clozr-overview-title">Different teams.<br />A shared way of working.</h2>
            </div>
            <div className="clozr-study__overview-copy">
              <p>
                Clozr brings customer relationships, project operations, and support into one business suite. The design challenge was to make the product feel connected without flattening the needs of each team.
              </p>
              <div className="clozr-study__tags" aria-label="Project areas">
                <span>CRM</span><span>PMO</span><span>Helpdesk</span><span>Mobile</span>
              </div>
            </div>
          </Container>
        </section>

        <section className="clozr-study__approach" aria-labelledby="clozr-approach-title">
          <Container size="wide">
            <div className="clozr-study__approach-heading">
              <div>
                <p className="clozr-study__eyebrow">Design process</p>
                <h2 id="clozr-approach-title">Research first.<br />Refine through iterations.</h2>
              </div>
              <p>A considered visual direction grew from references, color exploration, and repeated design passes.</p>
            </div>

            <div className="clozr-study__approach-grid">
              {designSteps.map(({ number, title, description }) => (
                <article className="clozr-study__approach-step" key={number}>
                  <span className="clozr-study__approach-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>

            <div className="clozr-study__approach-role">
              <span>My role</span>
              <p>UI/UX design · Research and references · Visual direction · Iteration · Responsive screens</p>
            </div>
          </Container>
        </section>

        <section className="clozr-study__modules" aria-labelledby="clozr-modules-title">
          <Container size="wide">
            <div className="clozr-study__section-topline">
              <div>
                <p className="clozr-study__eyebrow">One platform, three work areas</p>
                <h2 id="clozr-modules-title">Built around the work.</h2>
              </div>
              <p>Shared foundations make the suite feel familiar. Focused workflows keep each team moving.</p>
            </div>

            <div className="clozr-study__module-grid">
              {modules.map(({ number, title, description, detail, Icon }) => (
                <article className="clozr-study__module" key={number}>
                  <div className="clozr-study__module-top"><span>{number}</span><Icon size={20} strokeWidth={1.6} aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="clozr-study__module-detail">{detail}</span>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="clozr-study__components" aria-labelledby="clozr-components-title">
          <Container size="wide">
            <div className="clozr-study__components-heading">
              <div>
                <p className="clozr-study__eyebrow">A system behind the screens</p>
                <h2 id="clozr-components-title">Small patterns.<br />A smoother workflow.</h2>
              </div>
              <p>Shared components keep dense CRM work easy to scan, from lead status and ownership to the next action.</p>
            </div>

            <div className="clozr-study__components-board">
              <article className="clozr-study__components-main" aria-label="Lead list component example">
                <header className="clozr-study__components-bar">
                  <span><i aria-hidden="true" /> CRM / Lead list</span>
                  <span>Core components · 01</span>
                </header>
                <div className="clozr-study__components-filters" aria-label="Lead status filters">
                  <span className="is-current">All <b>24</b></span>
                  <span><i className="is-new" /> New <b>12</b></span>
                  <span><i className="is-active" /> Active <b>08</b></span>
                  <span><i className="is-pending" /> Pending <b>05</b></span>
                </div>
                <div className="clozr-study__components-table-wrap">
                  <table className="clozr-study__components-table">
                    <thead><tr><th scope="col">Contact</th><th scope="col">Company</th><th scope="col">Status</th><th scope="col">Score</th></tr></thead>
                    <tbody>
                      <tr><td><span className="clozr-study__components-person"><i>AM</i><span><b>Ananya Menon</b><small>ananya.m@example.com</small></span></span></td><td>Northstar Studio</td><td><span className="clozr-study__status is-new">New</span></td><td className="is-score">82</td></tr>
                      <tr><td><span className="clozr-study__components-person"><i>RV</i><span><b>Rahul Varma</b><small>rahul.v@example.com</small></span></span></td><td>Orbit Systems</td><td><span className="clozr-study__status is-active">Active</span></td><td className="is-score">74</td></tr>
                      <tr><td><span className="clozr-study__components-person"><i>SK</i><span><b>Sana Khan</b><small>sana.k@example.com</small></span></span></td><td>Fieldnote Labs</td><td><span className="clozr-study__status is-pending">Pending</span></td><td className="is-score">68</td></tr>
                    </tbody>
                  </table>
                </div>
                <footer className="clozr-study__components-footer"><span>Showing 3 of 24 leads</span><span><b>‹</b><b className="is-current">1</b><b>2</b><b>›</b></span></footer>
              </article>

              <div className="clozr-study__components-side">
                <article className="clozr-study__components-card">
                  <p className="clozr-study__components-kicker">01 · Status language</p>
                  <h3>At a glance, in context.</h3>
                  <div className="clozr-study__status-set"><span className="clozr-study__status is-new">New</span><span className="clozr-study__status is-active">Active</span><span className="clozr-study__status is-pending">Pending</span><span className="clozr-study__status is-closed">Closed</span></div>
                  <p className="clozr-study__components-note">Color and labels work together, so status is never color alone.</p>
                </article>
                <article className="clozr-study__components-card clozr-study__components-action-card">
                  <p className="clozr-study__components-kicker">02 · Inputs & actions</p>
                  <h3>Clear next steps.</h3>
                  <div className="clozr-study__components-controls">
                    <span className="clozr-study__components-search"><Search size={14} aria-hidden="true" /> Search leads</span>
                    <span className="clozr-study__components-add"><Plus size={14} aria-hidden="true" /> Add lead</span>
                  </div>
                  <p className="clozr-study__components-note">Shared spacing and hierarchy keep common actions predictable.</p>
                </article>
              </div>
            </div>

            <div className="clozr-study__component-gallery" aria-label="Clozr CRM component examples">
              <figure className="clozr-study__component-example">
                <div className="clozr-study__component-image clozr-study__component-image--search">
                  <Image src="/images/clozr-component-lead-search-clean.png" alt="Lead search and multi-select component with a selected lead" width={444} height={600} />
                </div>
                <figcaption><span>01 / Search & select</span><p>Find a lead by ID, name, or email, then select one or more records with clear check states.</p></figcaption>
              </figure>
              <figure className="clozr-study__component-example">
                <div className="clozr-study__component-image clozr-study__component-image--filter">
                  <Image src="/images/clozr-component-filter-panel.png" alt="Date range and lead status filter panel with reset and apply actions" width={535} height={680} />
                </div>
                <figcaption><span>02 / Filter panel</span><p>Date presets and status controls bring broad and precise searches into one predictable panel.</p></figcaption>
              </figure>
              <figure className="clozr-study__component-example">
                <div className="clozr-study__component-image clozr-study__component-image--status">
                  <Image src="/images/clozr-component-status-select.png" alt="Status selector expanded to show Active, Attempted, and Pending options" width={480} height={535} />
                </div>
                <figcaption><span>03 / Status selector</span><p>A compact field opens into a readable multi-select list, with color paired with labels.</p></figcaption>
              </figure>
            </div>
          </Container>
        </section>

        <section className="clozr-study__system" aria-labelledby="clozr-system-title">
          <Container size="wide">
            <div className="clozr-study__system-heading">
              <div>
                <p className="clozr-study__eyebrow">Clozr design system</p>
                <h2 id="clozr-system-title">A clear foundation<br />for busy work.</h2>
              </div>
              <p>A focused set of color, type, spacing, and status rules keeps CRM, PMO, and Helpdesk screens readable and consistent.</p>
            </div>

            <div className="clozr-study__system-grid">
              <article className="clozr-study__system-card clozr-study__system-card--colors">
                <div className="clozr-study__system-card-head"><span>01</span><h3>Color</h3><p>Purposeful color helps users read state and take action.</p></div>
                <div className="clozr-study__swatches">
                  <div><i className="is-primary" /><span><b>Primary</b><small>#00113B</small></span></div>
                  <div><i className="is-canvas" /><span><b>Canvas</b><small>#F7F9FC</small></span></div>
                  <div><i className="is-surface" /><span><b>Surface</b><small>#FFFFFF</small></span></div>
                  <div><i className="is-text" /><span><b>Text</b><small>#344054</small></span></div>
                  <div><i className="is-active" /><span><b>Active</b><small>#22A35A</small></span></div>
                  <div><i className="is-warning" /><span><b>Attention</b><small>#F39B2B</small></span></div>
                  <div><i className="is-pending" /><span><b>Pending</b><small>#9414C5</small></span></div>
                </div>
              </article>

              <article className="clozr-study__system-card clozr-study__system-card--type">
                <div className="clozr-study__system-card-head"><span>02</span><h3>Typography</h3><p>One clean sans-serif hierarchy keeps dense screens calm.</p></div>
                <div className="clozr-study__type-samples">
                  <div><small>MANROPE · PAGE TITLE · 24 / 32 · SEMIBOLD</small><b className="is-title">Leads</b></div>
                  <div><small>SECTION · 16 / 24 · SEMIBOLD</small><b className="is-section">Today's activity</b></div>
                  <div><small>BODY · 14 / 20 · REGULAR</small><span>Follow up with the team this afternoon.</span></div>
                  <div><small>LABEL · 12 / 16 · MEDIUM</small><span className="is-label">ACTIVE · 8 ITEMS</span></div>
                </div>
              </article>

              <article className="clozr-study__system-card clozr-study__system-card--scale">
                <div className="clozr-study__system-card-head"><span>03</span><h3>Spacing & shape</h3><p>Consistent rhythm and restrained corners help the product feel related.</p></div>
                <div className="clozr-study__spacing-scale" aria-label="Spacing tokens: 4, 8, 12, 16, 24, and 32 pixels">
                  {[4, 8, 12, 16, 24, 32].map((size) => <div key={size}><i style={{ width: `${size * 2}px` }} /><small>{size}px</small></div>)}
                </div>
                <div className="clozr-study__radius-scale"><span><i className="is-small" />6 px</span><span><i className="is-medium" />10 px</span><span><i className="is-pill" />Pill</span></div>
              </article>
            </div>
          </Container>
        </section>

        <section className="clozr-study__screens" aria-labelledby="clozr-screens-title">
          <Container size="wide">
            <div className="clozr-study__screens-heading">
              <div>
                <p className="clozr-study__eyebrow">The connected workspace</p>
                <h2 id="clozr-screens-title">One suite.<br />Every team in view.</h2>
              </div>
              <div>
                <p>CRM, PMO, and Helpdesk share the same workspace frame, so teams can move between customer, project, and support work without losing their bearings.</p>
                <div className="clozr-study__nav-map" aria-label="Shared workspace navigation">Dashboard <i /> CRM <i /> PMO <i /> Help Desk <i /> Teams <i /> Reports</div>
              </div>
            </div>
            <div className="clozr-study__screen-grid">
              <figure className="clozr-study__screen-card">
                <div className="clozr-study__screen-image">
                  <Image src="/images/clozr-pmo-projects-screen-frameless.png" alt="Clozr PMO projects dashboard showing project status, progress, and the shared Help Desk navigation" width={1147} height={709} />
                </div>
                <figcaption><span>02 / PMO</span><div><h3>Keep projects moving.</h3><p>Projects, timelines, progress, and the shared Help Desk entry sit inside one familiar workspace.</p></div></figcaption>
              </figure>
              <figure className="clozr-study__screen-card">
                <div className="clozr-study__screen-image">
                  <Image src="/images/clozr-helpdesk-screen-frameless.png" alt="Clozr Help Desk ticket workspace with shared CRM, PMO, and Help Desk navigation" width={1014} height={661} />
                </div>
                <figcaption><span>03 / HELPDESK</span><div><h3>Make support easy to scan.</h3><p>Ticket state, service levels, ownership, and next steps stay visible in the same product frame.</p></div></figcaption>
              </figure>
            </div>
          </Container>
        </section>

        <ReadNextProjects currentProjectSlug="clozr-crm" />
      </main>
      <Footer />
    </>
  );
}
