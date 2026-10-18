interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  number?: string;
  align?: "left" | "right";
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  number,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={"section-heading section-heading--" + align}>
      <div className="section-heading__topline">
        <span className="eyebrow">{eyebrow}</span>
        {number ? <span className="section-number">{number}</span> : null}
      </div>
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
