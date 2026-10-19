export interface StoryBeatItem {
  label: string;
  line: string;
  aside?: string;
}

export function StoryBeats({ beats, className = "" }: { beats: readonly StoryBeatItem[]; className?: string }) {
  return (
    <ol className={`story-beats ${className}`}>
      {beats.map((beat, index) => (
        <li className="story-beat" key={beat.label}>
          <span className="story-beat__index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <span className="story-beat__label">{beat.label}</span>
          <strong>{beat.line}</strong>
          {beat.aside && <span className="story-beat__aside">{beat.aside}</span>}
        </li>
      ))}
    </ol>
  );
}
