import type { Metadata } from "next";
import { ArrowUpRight, MousePointer2, Palette, Type } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `Experiments | ${siteConfig.wordmark}`,
  description: "Small UI explorations in color, typography, and interaction.",
};

const studies = [
  {
    number: "01",
    title: "Color in context",
    description: "Trying palettes against real interface states, where contrast and clarity matter as much as mood.",
    Icon: Palette,
    visual: "palette",
  },
  {
    number: "02",
    title: "Type with a purpose",
    description: "Playing with scale and hierarchy to make dense information feel easier to scan.",
    Icon: Type,
    visual: "type",
  },
  {
    number: "03",
    title: "Tiny moments of feedback",
    description: "Exploring the small cues that make buttons, states, and transitions feel clear and responsive.",
    Icon: MousePointer2,
    visual: "interaction",
  },
];

export default function ExperimentsPage() {
  return (
    <>
      <Navbar />
      <main className="experiments-page" id="top">
        <section className="experiments-page__section" aria-labelledby="experiments-page-title">
          <Container size="wide">
            <header className="experiments-page__intro">
              <p className="experiments-page__eyebrow">A little room to play</p>
              <h1 id="experiments-page-title">Small ideas,<br />tried out<span>.</span></h1>
              <p>A sketchbook for focused interface studies in color, type, and the details that make a screen feel right.</p>
            </header>

            <div className="experiments-page__grid">
              {studies.map(({ number, title, description, Icon, visual }) => (
                <article className={`experiment-study experiment-study--${visual}`} key={number}>
                  <div className="experiment-study__visual" aria-hidden="true">
                    <span className="experiment-study__number">{number}</span>
                    {visual === "palette" ? (
                      <div className="experiment-swatches"><i /><i /><i /><i /></div>
                    ) : visual === "type" ? (
                      <div className="experiment-type-sample"><b>Aa</b><span /><span /><span /></div>
                    ) : (
                      <div className="experiment-interaction-sample"><span>Save changes</span><i><ArrowUpRight size={15} /></i><b /></div>
                    )}
                    <Icon className="experiment-study__icon" size={20} strokeWidth={1.7} />
                  </div>
                  <div className="experiment-study__copy">
                    <p>{number} / UI EXPLORATION</p>
                    <h2>{title}</h2>
                    <span>{description}</span>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
