import { ArrowUpRight } from "lucide-react";
import { socialProfiles } from "@/data/site-config";

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className = "" }: SocialLinksProps) {
  if (socialProfiles.length === 0) return null;

  return (
    <ul className={"social-links " + className}>
      {socialProfiles.map((profile) => (
        <li key={profile.label}>
          <a href={profile.url} target="_blank" rel="noreferrer">
            {profile.label}
            <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.7} />
          </a>
        </li>
      ))}
    </ul>
  );
}
