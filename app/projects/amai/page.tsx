import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  CalendarDays,
  HeartPulse,
  IdCard,
  Search,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ReadNextProjects } from "@/components/projects/ReadNextProjects";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `AMAI case study | ${siteConfig.wordmark}`,
  description:
    "A member-focused digital experience for Ayurveda Medical Association of India, connecting membership, events, and Aswas Plus policy journeys.",
};

const memberJourney = [
  {
    number: "01",
    title: "Join the association",
    description: "Make membership details and member services easy for doctors to find and manage.",
    Icon: IdCard,
  },
  {
    number: "02",
    title: "Find an event",
    description: "Browse upcoming programmes with the date, venue, and key details in one clear view.",
    Icon: Search,
  },
  {
    number: "03",
    title: "Register & participate",
    description: "Give doctors a direct path from event details to registration and participation.",
    Icon: CalendarDays,
  },
  {
    number: "04",
    title: "Manage Aswas Plus",
    description: "Keep policy status, validity, and renewal actions close to the member profile.",
    Icon: ShieldCheck,
  },
];

const designSteps = [
  {
    number: "01",
    title: "Research the patterns",
    description:
      "I reviewed references for association membership, event discovery, and policy services to understand what members need before each action.",
  },
  {
    number: "02",
    title: "Map the member flow",
    description:
      "I connected the key journeys—membership, events, and Aswas Plus—so members can move between them without losing context.",
  },
  {
    number: "03",
    title: "Build a visual system",
    description:
      "I explored the palette and interface references, then settled on maroon, warm blush, and clear status colors for a recognisable association experience.",
  },
  {
    number: "04",
    title: "Refine across screens",
    description:
      "I iterated on layouts and component hierarchy for the mobile member app and the desktop administration dashboard.",
  },
];

export default function AmaiCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className="amai-case" id="top">
        <section className="amai-case__hero" aria-labelledby="amai-title">
          <Container size="wide">
            <div className="amai-case__intro">
              <div>
                <p className="amai-case__eyebrow">AMAI · Membership · Events · Benefits</p>
                <h1 id="amai-title">A stronger connection<br />to the association<span>.</span></h1>
              </div>
              <p className="amai-case__summary">
                A member-focused app and admin experience that brings doctors closer to AMAI, its events, and Aswas Plus policy services.
              </p>
            </div>

            <dl className="amai-case__facts" aria-label="Project details">
              <div><dt>Product</dt><dd>AMAI member experience</dd></div>
              <div><dt>For</dt><dd>Doctors · Association admins</dd></div>
              <div><dt>Platforms</dt><dd>Mobile app · Web dashboard</dd></div>
              <div><dt>My role</dt><dd>UI/UX design</dd></div>
            </dl>

            <figure className="amai-case__hero-art">
              <Image
                src="/images/amai-project-cover-v3.webp"
                alt="AMAI administration dashboard and member app displayed together on a laptop and mobile devices"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 92vw"
              />
            </figure>
          </Container>
        </section>

        <section className="amai-case__overview" aria-labelledby="amai-overview-title">
          <Container size="wide" className="amai-case__overview-grid">
            <div>
              <p className="amai-case__eyebrow">The opportunity</p>
              <h2 id="amai-overview-title">Make member services<br />feel connected.</h2>
            </div>
            <div className="amai-case__overview-copy">
              <p>
                Doctors need a straightforward way to stay connected with their association: keep membership details close, discover and register for events, and manage policy information when they need it.
              </p>
              <p>
                I designed the experience around those practical moments, pairing a member-facing mobile app with an administration dashboard for the teams supporting them.
              </p>
              <div className="amai-case__tags" aria-label="Project areas">
                <span>Membership</span><span>Events & CME</span><span>Aswas Plus</span><span>Administration</span>
              </div>
            </div>
          </Container>
        </section>

        <section className="amai-case__journey" id="journey" aria-labelledby="amai-journey-title">
          <Container size="wide">
            <div className="amai-case__section-heading">
              <div>
                <p className="amai-case__eyebrow">The member flow</p>
                <h2 id="amai-journey-title">From joining to staying involved.</h2>
              </div>
              <p>A clear route through the services doctors use most, supported by one familiar visual language.</p>
            </div>

            <div className="amai-case__journey-grid">
              {memberJourney.map(({ number, title, description, Icon }) => (
                <article className="amai-case__journey-card" key={number}>
                  <div className="amai-case__journey-top"><span>{number}</span><Icon size={19} strokeWidth={1.7} aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <div className="amai-case__journey-note">
              <UsersRound size={17} aria-hidden="true" />
              <p><strong>One member home.</strong> Quick access to membership, events, and benefits keeps the next useful action within reach.</p>
            </div>
          </Container>
        </section>

        <section className="amai-case__process" aria-labelledby="amai-process-title">
          <Container size="wide">
            <div className="amai-case__section-heading">
              <div>
                <p className="amai-case__eyebrow">How I approached it</p>
                <h2 id="amai-process-title">Research, system,<br />then careful iterations.</h2>
              </div>
              <p>I used references to frame the problem, then tested the visual direction against the real member and admin journeys.</p>
            </div>
            <div className="amai-case__process-list">
              {designSteps.map(({ number, title, description }) => (
                <article className="amai-case__process-row" key={number}>
                  <span className="amai-case__process-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <div className="amai-case__role">
              <span>My contribution</span>
              <p>Reference research · Journey mapping · UI/UX design · Design system · Mobile and admin screens</p>
            </div>
          </Container>
        </section>

        <section className="amai-case__screens" aria-labelledby="amai-screens-title">
          <Container size="wide">
            <div className="amai-case__section-heading">
              <div>
                <p className="amai-case__eyebrow">Designed for members and admins</p>
                <h2 id="amai-screens-title">A shared system.<br />Two useful perspectives.</h2>
              </div>
              <p>The dashboard supports association operations, while mobile keeps membership and event journeys accessible to doctors.</p>
            </div>

            <figure className="amai-case__dashboard-screen">
              <div className="amai-case__dashboard-image">
                <Image
                  src="/images/amai-admin-dashboard.png"
                  alt="AMAI admin dashboard with member and subscription summaries, pending approvals, upcoming events, and recent activity"
                  width={1440}
                  height={1168}
                  sizes="(max-width: 760px) 100vw, 90vw"
                />
              </div>
              <figcaption><span>01 / ADMIN DASHBOARD</span><div><h3>See association activity at a glance.</h3><p>Member totals, approvals, upcoming events, and recent activity are grouped to support everyday administration.</p></div></figcaption>
            </figure>

            <div className="amai-case__mobile-grid">
              <figure className="amai-case__mobile-screen">
                <div className="amai-case__mobile-image">
                  <Image
                    src="/images/amai-member-home.png"
                    alt="AMAI member app home screen with membership card, quick actions, and Aswas Plus policy details"
                    width={430}
                    height={932}
                    sizes="(max-width: 760px) 70vw, 24vw"
                  />
                </div>
                <figcaption><span>02 / MEMBER HOME</span><div><h3>Membership & policy, together.</h3><p>Member status, quick services, and Aswas Plus details share one starting point.</p></div></figcaption>
              </figure>
              <figure className="amai-case__mobile-screen">
                <div className="amai-case__mobile-image">
                  <Image
                    src="/images/amai-events-upcoming.png"
                    alt="AMAI member app event screen with upcoming Ayurveda conference details and registration action"
                    width={430}
                    height={932}
                    sizes="(max-width: 760px) 70vw, 24vw"
                  />
                </div>
                <figcaption><span>03 / EVENTS</span><div><h3>Find a programme. Register with clarity.</h3><p>Dates, venue, and registration are easy to scan before a doctor commits to an event.</p></div></figcaption>
              </figure>
            </div>
          </Container>
        </section>

        <section className="amai-case__system" aria-labelledby="amai-system-title">
          <Container size="wide">
            <div className="amai-case__section-heading">
              <div>
                <p className="amai-case__eyebrow">AMAI design system</p>
                <h2 id="amai-system-title">A warm, trusted<br />visual foundation.</h2>
              </div>
              <p>Maroon anchors the association identity. Warm surfaces keep long screens approachable, while accent colors help important states stand out.</p>
            </div>

            <div className="amai-case__system-grid">
              <article className="amai-case__system-card amai-case__system-card--palette">
                <span className="amai-case__system-index">01 / COLOR</span>
                <h3>Color with purpose.</h3>
                <p>Brand recognition, clear actions, and readable status cues work together.</p>
                <div className="amai-case__swatches">
                  <div><i className="is-maroon" /><span><b>Association</b><small>#60212E</small></span></div>
                  <div><i className="is-rose" /><span><b>Event accent</b><small>#C97C8C</small></span></div>
                  <div><i className="is-blush" /><span><b>Warm blush</b><small>#F8E8E8</small></span></div>
                  <div><i className="is-surface" /><span><b>Surface</b><small>#FFFFFF</small></span></div>
                  <div><i className="is-ink" /><span><b>Text</b><small>#30272A</small></span></div>
                  <div><i className="is-active" /><span><b>Active</b><small>#22A35A</small></span></div>
                </div>
              </article>

              <article className="amai-case__system-card">
                <span className="amai-case__system-index">02 / TYPE</span>
                <h3>Clear hierarchy.</h3>
                <p>Friendly sans-serif typography keeps member content and admin data easy to scan.</p>
                <div className="amai-case__type-samples">
                  <div><small>PAGE TITLE · SEMIBOLD</small><b className="is-title">Events</b></div>
                  <div><small>SECTION · MEDIUM</small><b className="is-section">Upcoming programmes</b></div>
                  <div><small>BODY · REGULAR</small><span>Register for an event near you.</span></div>
                </div>
              </article>

              <article className="amai-case__system-card">
                <span className="amai-case__system-index">03 / COMPONENTS</span>
                <h3>Familiar actions.</h3>
                <p>Reusable patterns help members make decisions without relearning each screen.</p>
                <div className="amai-case__component-samples">
                  <span><CalendarDays size={15} aria-hidden="true" /> Upcoming event <ArrowUpRight size={14} aria-hidden="true" /></span>
                  <span><HeartPulse size={15} aria-hidden="true" /> Aswas Plus <i>Active</i></span>
                  <span><IdCard size={15} aria-hidden="true" /> Membership <i>Current</i></span>
                </div>
              </article>
            </div>
          </Container>
        </section>

        <ReadNextProjects currentProjectSlug="amai" />
      </main>
      <Footer />
    </>
  );
}
