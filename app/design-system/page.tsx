import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Check,
  Circle,
  Component,
  Focus,
  Grid2X2,
  Heart,
  Layers3,
  MoveUpRight,
  MousePointer2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AnimatedReveal, ComponentPlayground, CopyablePalette, ProcessTimeline } from "@/components/design-system/DesignInteractions";
import { designPrinciples, designTokens } from "@/data/design-system";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `Behind the Pixels | ${siteConfig.wordmark}`,
  description: "A peek behind the screens: the design principles, visual system, reusable components, and UX process behind my design practice.",
};

const principleIcons: Record<(typeof designPrinciples)[number]["icon"], LucideIcon> = {
  focus: Focus,
  layers: Layers3,
  accessibility: Circle,
  sparkles: Sparkles,
};

const pageTokens = {
  "--bp-accent": designTokens.colors.lime,
  "--bp-accent-ink": designTokens.colors.limeInk,
  "--bp-ink": designTokens.colors.ink,
  "--bp-muted": designTokens.colors.muted,
  "--bp-line": designTokens.colors.line,
  "--bp-paper": designTokens.colors.paper,
  "--bp-white": designTokens.colors.softWhite,
  "--bp-sage": designTokens.colors.sage,
  "--bp-coral": designTokens.colors.coral,
} as CSSProperties;

export default function DesignSystemPage() {
  return (
    <main className="bp-page" style={pageTokens}>
      <Navbar />

      <section className="bp-hero" aria-labelledby="bp-title">
        <Container size="wide">
          <Link className="bp-back-link" href="/#work"><ArrowLeft size={15} aria-hidden="true" /> Back to projects</Link>
          <div className="bp-hero__grid">
            <div className="bp-hero__copy">
              <div className="bp-eyebrow"><span /> DESIGN NOTES <i>FIELD GUIDE № 01</i></div>
              <h1 id="bp-title">Pretty pixels.<br /><em>Purposeful decisions.</em></h1>
              <p>A peek behind the screens — the rules, reusable bits, and occasional “wait, that actually works” moments that make my designs tick.</p>
              <a className="bp-text-link" href="#principles">Let’s get into it <ArrowDown size={15} aria-hidden="true" /></a>
              <div className="bp-hero__stamp"><span>DESIGNED TO<br />MAKE SENSE</span><Sparkles size={18} aria-hidden="true" /></div>
            </div>
            <div className="bp-hero-art" aria-label="An illustrative preview of the design system">
              <div className="bp-hero-art__orbit bp-hero-art__orbit--one" />
              <div className="bp-hero-art__orbit bp-hero-art__orbit--two" />
              <div className="bp-hero-art__caption"><span>THE SHORT VERSION</span><strong>Clear first.<br />Charming second.</strong><i>← in that order</i></div>
              <div className="bp-hero-art__panel">
                <div className="bp-art-panel__bar"><span className="bp-art-dots"><i /><i /><i /></span><span>DESIGN DESK / 01</span><span className="bp-art-avatar">P</span></div>
                <div className="bp-art-panel__body">
                  <span className="bp-mini-label">GOOD MORNING, HUMAN</span>
                  <strong>Everything<br />in its place.</strong>
                  <div className="bp-art-meter"><i /><i /><i /><i /><i /></div>
                  <div className="bp-art-panel__footer"><span><Check size={12} /> Thoughtfully aligned</span><b>8px</b></div>
                </div>
              </div>
              <div className="bp-hero-art__note"><Grid2X2 size={15} /><span>Small rules.<br /><b>Less rework.</b></span></div>
              <span className="bp-hero-art__index">FIG. 01 <i>THE METHOD</i></span>
            </div>
          </div>
          <div className="bp-hero__foot"><span>SCROLL TO EXPLORE</span><span className="bp-hero__rule" /><span>COLOR · TYPE · COMPONENTS · PROCESS</span></div>
        </Container>
      </section>

      <section className="bp-intro" id="principles" aria-labelledby="bp-intro-title">
        <Container size="wide">
          <AnimatedReveal className="bp-intro__heading">
            <span className="bp-overline">THE IMPORTANT BIT</span>
            <h2 id="bp-intro-title">A system should make the work <em>feel lighter.</em></h2>
            <p>Not more rules for the sake of rules. Just enough shared structure to stop answering “which radius was that?” for the 400th time.</p>
          </AnimatedReveal>
          <div className="bp-principles">
            {designPrinciples.map((principle, index) => {
              const Icon = principleIcons[principle.icon];
              return (
                <AnimatedReveal className="bp-principle" key={principle.number} delay={index * 0.05}>
                  <div className="bp-principle__top"><span>{principle.number}</span><Icon size={19} strokeWidth={1.6} aria-hidden="true" /></div>
                  <h3>{principle.title}</h3><p>{principle.description}</p>
                </AnimatedReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bp-system" id="system" aria-labelledby="bp-system-title">
        <Container size="wide">
          <div className="bp-section-intro">
            <div><span className="bp-overline">THE VISUAL LANGUAGE</span><h2 id="bp-system-title">A small kit.<br /><em>Many good outcomes.</em></h2></div>
            <p>These are the ingredients I return to across projects: a bright lime signal, grounded by warm paper, sage, and ink.</p>
          </div>
          <AnimatedReveal className="bp-token-board">
            <div className="bp-token-board__head"><div><span className="bp-overline">01 / COLOR</span><h3>Pick a color. Take it with you.</h3></div><span className="bp-token-board__hint"><MousePointer2 size={14} /> Click any swatch to copy its HEX</span></div>
            <CopyablePalette />
          </AnimatedReveal>

          <div className="bp-system__lower">
            <AnimatedReveal className="bp-type-board">
              <div className="bp-subsection-head"><span className="bp-overline">02 / TYPOGRAPHY</span><span>MANROPE + RALEWAY</span></div>
              <div className="bp-type-sample"><span>DISPLAY / RALEWAY BOLD</span><strong>Make room<br />for the good idea.</strong></div>
              <div className="bp-type-rows">
                <div><span>SECTION / 28</span><strong>Everything in its right place</strong></div>
                <div><span>BODY / 16 · 1.7</span><p>Useful details get room to breathe and enough line-height to be read at human speed.</p></div>
                <div><span>LABEL / 10</span><b>SMALL WORDS. VERY IMPORTANT JOBS.</b></div>
              </div>
            </AnimatedReveal>
            <AnimatedReveal className="bp-rhythm-board">
              <div className="bp-subsection-head"><span className="bp-overline">03 / RHYTHM &amp; SHAPE</span><span>SPACE TO THINK</span></div>
              <h3>Spacing has a beat.<br /><em>Let it do its thing.</em></h3>
              <div className="bp-spacing-demo">{designTokens.spacing.map((space) => <div className="bp-space-token" key={space}><i style={{ width: `${Math.min(space * 2, 96)}px` }} /><span>{space}px</span></div>)}</div>
              <div className="bp-shape-demo"><span><i />4</span><span><i />8</span><span><i />16</span><p>Soft edges, not marshmallows.</p></div>
              <div className="bp-icon-demo"><Component size={18} /><Layers3 size={18} /><Heart size={18} /><MoveUpRight size={18} /><span>Icons are signposts, not confetti.</span></div>
            </AnimatedReveal>
          </div>
          <p className="bp-system__aside"><Sparkles size={15} aria-hidden="true" /> Color helps communicate a state. A word or icon makes sure it actually communicates.</p>
        </Container>
      </section>

      <section className="bp-play-section" id="playground" aria-labelledby="bp-play-title">
        <Container size="wide">
          <div className="bp-section-intro bp-section-intro--play">
            <div><span className="bp-overline">THE HANDS-ON BIT</span><h2 id="bp-play-title">A good system<br /><em>likes to be used.</em></h2></div>
            <p>Here’s a tiny, working profile form. Change the details, preview the card, and toggle the setting. It’s a demo — your data stays on this device.</p>
          </div>
          <ComponentPlayground />
        </Container>
      </section>

      <section className="bp-process-section" id="process" aria-labelledby="bp-process-title">
        <Container size="wide">
          <div className="bp-section-intro">
            <div><span className="bp-overline">FROM QUESTION TO CLICK</span><h2 id="bp-process-title">The process is a path.<br /><em>Not a prison.</em></h2></div>
            <p>Every project has its own plot twists. This is the usual route — with permission to loop back when the evidence says so.</p>
          </div>
          <ProcessTimeline />
        </Container>
      </section>

      <section className="bp-transformation" aria-labelledby="bp-transformation-title">
        <Container size="wide">
          <div className="bp-section-intro bp-section-intro--transform">
            <div><span className="bp-overline">A QUICK BEFORE &amp; AFTER</span><h2 id="bp-transformation-title">First, make sense.<br /><em>Then make it shine.</em></h2></div>
            <p>A wireframe starts with the essentials: layout, hierarchy, and how people move through a screen. Visual polish comes once the structure makes sense.</p>
          </div>
          <div className="bp-transform-grid">
            <article className="bp-wireframe-card">
              <div className="bp-transform-label"><span>01</span><div><strong>Structure first</strong><small>Illustrative wireframe concept</small></div><span className="bp-wireframe-stamp">LOW FIDELITY</span></div>
              <div className="bp-wireframe" aria-label="Illustrative wireframe showing a calendar layout">
                <div className="bp-wireframe__nav"><i /><i /><i /><b /></div>
                <div className="bp-wireframe__body"><div className="bp-wireframe__side"><i /><i /><i /><i /><b /></div><div className="bp-wireframe__main"><div className="bp-wireframe__title"><i /><b /></div><div className="bp-wireframe__calendar">{Array.from({ length: 21 }, (_, index) => <i className={index === 9 || index === 15 ? "is-marked" : ""} key={index} />)}</div></div></div>
              </div>
              <p>Hierarchy, navigation, and useful information get sorted before the decorative bits arrive.</p>
            </article>
            <article className="bp-final-card">
              <div className="bp-transform-label"><span>02</span><div><strong>Experience, realized</strong><small>Doctor Availability Calendar · scheduling interface</small></div><ArrowUpRight size={17} aria-hidden="true" /></div>
              <div className="bp-final-card__image"><Image src="/images/doctor-availability-calendar-cover.png" alt="Availability calendar scheduling web app displayed on a tablet" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
              <p>Color-coded appointments, an at-a-glance month view, and a focused list of what’s coming up.</p>
            </article>
          </div>
        </Container>
      </section>

      <Footer homeLinks />
    </main>
  );
}
