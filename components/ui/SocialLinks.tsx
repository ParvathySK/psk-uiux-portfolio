import { socialProfiles } from "@/data/site-config";

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className = "" }: SocialLinksProps) {
  if (socialProfiles.length === 0) return null;

  return (
    <ul className={"social-links social-links--icons " + className}>
      {socialProfiles.map((profile) => (
        <li key={profile.label}>
          <a
            href={profile.url}
            target="_blank"
            rel="noreferrer"
            aria-label={profile.label}
            title={profile.label}
          >
            <SocialIcon label={profile.label} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M5.2 8.6h3.1v10.1H5.2zM6.75 4.1a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM10.2 8.6h3v1.4h.05a3.3 3.3 0 0 1 2.95-1.62c3.15 0 3.75 2.07 3.75 4.77v5.55h-3.12v-4.92c0-1.18-.02-2.7-1.65-2.7-1.66 0-1.92 1.3-1.92 2.62v5h-3.1z" />
      </svg>
    );
  }

  if (label === "Behance") {
    return <span className="social-links__behance" aria-hidden="true">Be</span>;
  }

  if (label === "Dribbble") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <circle cx="12" cy="12" r="8.6" />
        <path d="M7 5.5c3.4 3.1 5.8 7.4 7.2 13M4 10.2c4.9.2 10.6-1.7 14.7-5M5.1 16.8c3.5-3.2 8.5-4.6 14-3.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
