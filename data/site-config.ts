export interface SocialProfile {
  label: string;
  url: string | null;
}

const configuredSocialProfiles: SocialProfile[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/parvathy-s-kumar-psk" },
  { label: "Behance", url: "https://www.behance.net/parvathyskumar2" },
  { label: "Dribbble", url: "https://dribbble.com/parvathy_s_kumar" },
  { label: "Instagram", url: "https://www.instagram.com/___parvathy_________?srtk=cGFrNzl5eGhhOWRo" },
  { label: "Email", url: "mailto:parvathyskumarpsk@gmail.com" },
];

export const siteConfig = {
  wordmark: "PSK",
  role: "UI/UX & Product Designer",
  email: null as string | null,
  resumeUrl: null as string | null,
  socialProfiles: configuredSocialProfiles,
  metadata: {
    title: "PSK — UI/UX & Product Designer",
    description:
      "A portfolio for UI/UX and product design, focused on clear digital experiences, thoughtful workflows, and useful products.",
  },
};

export const socialProfiles = siteConfig.socialProfiles.filter(
  (profile): profile is SocialProfile & { url: string } => profile.url !== null,
);
