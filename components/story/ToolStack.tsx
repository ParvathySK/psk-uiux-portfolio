type ToolName = "figma" | "illustrator" | "photoshop" | "canva" | "framer" | "xd";

const tools: { name: string; description: string; mark: ToolName }[] = [
  { name: "Figma", description: "UI design", mark: "figma" },
  { name: "Adobe Illustrator", description: "Illustration", mark: "illustrator" },
  { name: "Adobe Photoshop", description: "Graphic & photo manipulation", mark: "photoshop" },
  { name: "Adobe XD", description: "UI design & prototyping", mark: "xd" },
  { name: "Canva", description: "Social media management", mark: "canva" },
  { name: "Framer", description: "Web design", mark: "framer" },
];

function ToolMark({ mark }: { mark: ToolName }) {
  if (mark === "figma") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#f24e1e" d="M7 2h5v6H7a3 3 0 0 1 0-6Z" />
        <path fill="#ff7262" d="M12 2h5a3 3 0 0 1 0 6h-5V2Z" />
        <path fill="#a259ff" d="M7 8h5v6H7a3 3 0 0 1 0-6Z" />
        <circle cx="15" cy="11" r="3" fill="#1abcfe" />
        <path fill="#0acf83" d="M7 14h5v3a3 3 0 1 1-5-2.24V14Z" />
      </svg>
    );
  }

  if (mark === "framer") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#fff" d="M6 3h12v6h-6l6 6h-6v6L6 15h6L6 9h6L6 3Z" />
      </svg>
    );
  }

  if (mark === "xd") return <span className="my-stack__adobe-mark my-stack__adobe-mark--xd" aria-hidden="true">Xd</span>;

  if (mark === "canva") return <span className="my-stack__canva-mark" aria-hidden="true">Canva</span>;

  return <span className={`my-stack__adobe-mark my-stack__adobe-mark--${mark}`} aria-hidden="true">{mark === "illustrator" ? "Ai" : "Ps"}</span>;
}

export function ToolStack() {
  return (
    <section className="my-stack" aria-labelledby="my-stack-title">
      <div className="container-shell container-shell--wide">
        <h2 id="my-stack-title">My stack</h2>
        <ul className="my-stack__grid">
          {tools.map((tool) => (
            <li className="my-stack__item" key={tool.mark}>
              <span className={`my-stack__icon my-stack__icon--${tool.mark}`}>
                <ToolMark mark={tool.mark} />
              </span>
              <span className="my-stack__copy">
                <strong>{tool.name}</strong>
                <span>{tool.description}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
