"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, Search, Sparkles } from "lucide-react";
import { colorGroups, designProcess } from "@/data/design-system";

export function AnimatedReveal({ children, className = "", delay = 0 }: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.48, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function CopyablePalette() {
  const [copied, setCopied] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  async function copyColor(name: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setMessage(`${name} ${value} copied to clipboard.`);
      window.setTimeout(() => setCopied((current) => current === value ? null : current), 1800);
    } catch {
      setCopied(null);
      setMessage(`Copy was blocked. The ${name} value is ${value}.`);
    }
  }

  return (
    <div className="bp-palette">
      {colorGroups.map((group) => (
        <section className="bp-palette__group" key={group.label} aria-labelledby={`palette-${group.label.toLowerCase()}`}>
          <div className="bp-palette__heading">
            <h3 id={`palette-${group.label.toLowerCase()}`}>{group.label}</h3>
            <p>{group.note}</p>
          </div>
          <div className="bp-palette__grid">
            {group.tokens.map((token) => (
              <button
                className="bp-color-token"
                type="button"
                key={token.name}
                onClick={() => void copyColor(token.name, token.value)}
                aria-label={`Copy ${token.name}, ${token.value}`}
                title={`Copy ${token.value}`}
              >
                <span className="bp-color-token__sample" style={{ backgroundColor: token.value, color: token.foreground }}>
                  {copied === token.value ? <Check size={17} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
                </span>
                <span className="bp-color-token__meta">
                  <strong>{token.name}</strong>
                  <span>{token.use}</span>
                  <code>{token.value}</code>
                </span>
              </button>
            ))}
          </div>
        </section>
      ))}
      <p className="bp-live-message" aria-live="polite" role="status">{message}</p>
    </div>
  );
}

const componentNames = ["Primary button", "Secondary button", "Text field", "Search", "Select", "Tabs", "Status badge", "Toggle", "Tooltip"];

export function ComponentPlayground() {
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"profile" | "preview">("profile");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [team, setTeam] = useState("Product design");
  const [tips, setTips] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [status, setStatus] = useState("");
  const filteredComponents = componentNames.filter((component) => component.toLowerCase().includes(query.toLowerCase()));

  function savePreferences(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setSaved(false);
    setStatus("Saving your local preview settings…");
    window.setTimeout(() => {
      try {
        window.localStorage.setItem("psk-design-preview", JSON.stringify({ name, email, team, tips }));
        setSaved(true);
        setStatus("Saved on this device. Nothing was sent anywhere.");
      } catch {
        setStatus("Preview saved for this visit. Browser storage is unavailable.");
      }
      setSaving(false);
    }, 420);
  }

  function resetPreferences() {
    setName("");
    setEmail("");
    setTeam("Product design");
    setTips(true);
    setSaved(false);
    setStatus("Preview reset.");
    try {
      window.localStorage.removeItem("psk-design-preview");
    } catch {
      setStatus("Preview reset for this visit. Browser storage is unavailable.");
    }
  }

  return (
    <div className="bp-playground">
      <div className="bp-playground__rail">
        <label className="bp-search">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Find a component</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a component" />
          <kbd>/</kbd>
        </label>
        <div className="bp-component-index" aria-label="Component index">
          {filteredComponents.map((component) => <span key={component}>{component}</span>)}
          {filteredComponents.length === 0 && <p>No matches. Try “button” or “field”.</p>}
        </div>
        <div className="bp-variant-note">
          <Sparkles size={16} aria-hidden="true" />
          <p>One clear primary action per moment. Buttons appreciate boundaries.</p>
        </div>
      </div>

      <div className="bp-playground__demo">
        <div className="bp-playground__topline">
          <div>
            <span className={`bp-status ${saved ? "is-saved" : ""}`}><i />{saved ? "Saved" : "Draft"}</span>
            <span className="bp-playground__caption">INTERACTIVE PREVIEW</span>
          </div>
          <div className="bp-segment" aria-label="Preview mode">
            <button type="button" aria-pressed={view === "profile"} onClick={() => setView("profile")}>Edit</button>
            <button type="button" aria-pressed={view === "preview"} onClick={() => setView("preview")}>Preview</button>
          </div>
        </div>

        {view === "profile" ? (
          <form className="bp-demo-form" onSubmit={savePreferences}>
            <div className="bp-demo-form__intro">
              <div><span className="bp-mini-label">YOUR DESIGN DESK</span><h3>Make yourself at home.</h3></div>
              <span className="bp-avatar" aria-hidden="true">P</span>
            </div>
            <div className="bp-form-grid">
              <label className="bp-field">Display name<input autoComplete="name" minLength={2} required value={name} onChange={(event) => { setName(event.target.value); setSaved(false); }} placeholder="e.g. Parvathy" /></label>
              <label className="bp-field">Email address<input autoComplete="email" type="email" required value={email} onChange={(event) => { setEmail(event.target.value); setSaved(false); }} placeholder="you@example.com" /></label>
              <label className="bp-field bp-field--wide">Team<select value={team} onChange={(event) => { setTeam(event.target.value); setSaved(false); }}><option>Product design</option><option>Research &amp; strategy</option><option>Design engineering</option></select></label>
            </div>
            <label className="bp-toggle-row"><span><strong>Occasional design notes</strong><small>Only the useful bits. No inbox confetti.</small></span><input type="checkbox" role="switch" checked={tips} onChange={(event) => { setTips(event.target.checked); setSaved(false); }} /><i aria-hidden="true" /></label>
            <div className="bp-form-actions">
              <button className="bp-button bp-button--primary" type="submit" disabled={saving}>{saving ? "Saving…" : saved ? "Saved" : "Save preferences"}<span aria-hidden="true">↗</span></button>
              <button className="bp-button bp-button--quiet" type="button" onClick={resetPreferences}>Reset demo</button>
              <button className="bp-button bp-button--disabled" type="button" disabled>Unavailable</button>
            </div>
            <p className="bp-live-message" role="status" aria-live="polite">{status}</p>
          </form>
        ) : (
          <div className="bp-preview-card" aria-live="polite">
            <span className="bp-mini-label">PREVIEW CARD</span>
            <span className="bp-preview-card__avatar" aria-hidden="true">{name.trim().charAt(0).toUpperCase() || "P"}</span>
            <h3>{name || "Your name goes here"}</h3>
            <p>{team} · {email || "email@example.com"}</p>
            <span className="bp-preview-card__badge">{tips ? "Notes enabled" : "Nice and quiet"}</span>
          </div>
        )}
        <div className="bp-demo-footer">
          <span className="bp-badge bp-badge--success">All systems sensible</span>
          <span className="bp-tooltip-wrap"><button type="button" className="bp-help" aria-describedby="bp-tooltip-copy">?</button><span className="bp-tooltip" role="tooltip" id="bp-tooltip-copy">Focus, error, and disabled states are visible without relying on color alone.</span></span>
        </div>
      </div>
    </div>
  );
}

export function ProcessTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = designProcess[activeIndex];

  return (
    <div className="bp-process">
      <ol className="bp-process__steps" aria-label="Design process steps">
        {designProcess.map((step, index) => (
          <li key={step.number}>
            <button type="button" aria-pressed={activeIndex === index} onClick={() => setActiveIndex(index)}>
              <span>{step.number}</span><strong>{step.title}</strong>
            </button>
          </li>
        ))}
      </ol>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          className="bp-process__detail"
          key={activeStep.number}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          aria-live="polite"
        >
          <div className="bp-process__detail-title"><span>STEP {activeStep.number}</span><h3>{activeStep.title}<i>.</i></h3></div>
          <div className="bp-process__detail-copy"><strong>“{activeStep.prompt}”</strong><p>{activeStep.description}</p><div>{activeStep.deliverables.map((item) => <span key={item}>{item}</span>)}</div></div>
        </motion.div>
      </AnimatePresence>
      <p className="bp-process__note">The process isn’t always a straight line. Sometimes testing sends me back to the wireframes. That’s not failure — that’s the point.</p>
    </div>
  );
}
