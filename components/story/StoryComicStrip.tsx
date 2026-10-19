import { StoryIllustration, type StoryScene } from "@/components/story/StoryIllustration";

const frames: { number: string; label: string; line: string; dialogue: string; scene: StoryScene }[] = [
  { number: "01", label: "THE QA CHAPTER", line: "I learned to look for what breaks.", dialogue: "Found one.", scene: "qa" },
  { number: "02", label: "THE QUESTION", line: "Then I noticed what feels confusing.", dialogue: "Could this be clearer?", scene: "shift" },
  { number: "03", label: "THE DESIGN CHAPTER", line: "Now I help shape what works.", dialogue: "Much better.", scene: "today" },
];

export function StoryComicStrip() {
  return (
    <section className="story-comic" id="story-comic" aria-labelledby="story-comic-title">
      <div className="story-container">
        <header className="story-comic__heading">
          <span className="story-overline">THE QUICK COMIC VERSION</span>
          <h2 id="story-comic-title">Three frames.<br /><em>One career plot twist.</em></h2>
        </header>
        <ol className="story-comic__grid">
          {frames.map((frame) => (
            <li className="story-frame" key={frame.number}>
              <span className="story-frame__tape" aria-hidden="true" />
              <div className="story-frame__art">
                <StoryIllustration scene={frame.scene} />
                <span className="story-frame__dialogue">{frame.dialogue}</span>
              </div>
              <div className="story-frame__caption">
                <span><b>{frame.number}</b> {frame.label}</span>
                <strong>{frame.line}</strong>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
