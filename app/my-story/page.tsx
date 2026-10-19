import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { StoryIllustration, type StoryScene } from "@/components/story/StoryIllustration";
import { ToolStack } from "@/components/story/ToolStack";

const storyCards: {
  chapter: string;
  title: string;
  description: string;
  note: string;
  scene: StoryScene;
}[] = [
  {
    chapter: "2022–2025 · SOFTWARE QA",
    title: "I learned to look closer.",
    description: "My first chapter was in Software QA. I learned to question assumptions, spot problems, understand requirements, and think about what could go wrong before it reached the user.",
    note: "Unexpected side effect: I started noticing not just whether a product worked, but how it felt to use it.",
    scene: "qa",
  },
  {
    chapter: "THE TURNING POINT",
    title: "Curiosity became a plan.",
    description: "I began exploring UI/UX design and learning how research, information architecture, wireframes, prototypes, and visual decisions shape an experience.",
    note: "Turns out, a pretty screen is only the beginning.",
    scene: "shift",
  },
  {
    chapter: "THE LEARNING PHASE",
    title: "Practice. Feedback. Repeat.",
    description: "I invested time in learning, practising, refining my work, and building a portfolio while developing my design skills.",
    note: "My first idea wasn’t always my best idea. Thank goodness for iterations.",
    scene: "practice",
  },
  {
    chapter: "AN IMPORTANT MILESTONE",
    title: "Learning turned into action.",
    description: "Earning my UI/UX Design certification from Keltron was one milestone in my journey. Working on design projects helped me keep applying what I learned beyond the classroom.",
    note: "Certificate unlocked. The real learning continues.",
    scene: "milestone",
  },
];

export default function MyStoryPage() {
  return (
    <div className="my-story-page">
      <Navbar />
      <main>
        <section className="my-story-intro" aria-labelledby="my-story-title">
          <Container size="wide">
            <div className="my-story-intro__copy">
              <div className="my-story-intro__title">
                <span className="my-story-intro__eyebrow">My story</span>
                <h1 id="my-story-title">
                  <span>I used to break things<span className="my-story-intro__period">.</span></span>
                  <span>Now, I design things<span className="my-story-intro__period">.</span></span>
                </h1>
              </div>
              <p>Well… technically, I still break things. It&apos;s called testing a prototype.</p>
            </div>
          </Container>
        </section>

        <section className="my-story-journey" aria-label="My journey from quality assurance to design">
          <Container size="wide">
            <ol className="my-story-cards">
              {storyCards.map((card, index) => (
                <li key={card.chapter}>
                  <article className="my-story-card">
                    <div className="my-story-card__head">
                      <div className="my-story-card__art">
                        <StoryIllustration scene={card.scene} />
                      </div>
                      <div className="my-story-card__title">
                        <span>{card.chapter}</span>
                        <h2>{card.title}</h2>
                      </div>
                      <span className="my-story-card__number" aria-label={`Chapter ${index + 1}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p>{card.description}</p>
                    <p className="my-story-card__note">{card.note}</p>
                  </article>
                </li>
              ))}
            </ol>
          </Container>
        </section>
        <ToolStack />
      </main>
      <Footer homeLinks />
    </div>
  );
}
