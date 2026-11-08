const title = "Oh, hi! I'm Parvathy.";
const lede = "A UI/UX Designer & Product Designer who asks “But why?” before asking “What color?”";
const paragraphs = [
  "A designer, yes. A design robot, no.",
  "I like asking questions, challenging assumptions, and figuring out why a perfectly good-looking screen still feels wrong.",
  "My goal? Make digital products that are thoughtful, useful, and just a little delightful.",
  "I started my career in software engineering and QA, learning how digital products work and where they can fall short. Then I moved into design—from checking the experience to shaping it.",
  "Now, I turn ideas into clear, intuitive interfaces with a quality-first eye and a focus on the people using them.",
];

export function JourneyStoryText() {
  return (
    <div>
      <h2 className="journey-editorial__title" id="journey-title">{title}</h2>
      <p className="journey-editorial__lede">{lede}</p>

      <div className="journey-editorial__copy">
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </div>
  );
}
