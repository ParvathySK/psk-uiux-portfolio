export interface SocialProfile {
  label: string;
  url: string | null;
}

const configuredSocialProfiles: SocialProfile[] = [
  { label: "LinkedIn", url: null },
  { label: "Dribbble", url: null },
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
