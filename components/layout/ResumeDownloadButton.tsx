interface ResumeDownloadButtonProps {
  resumeUrl: string | null;
  className?: string;
}

export function ResumeDownloadButton({ resumeUrl, className }: ResumeDownloadButtonProps) {
  const label = (
    <span>CV</span>
  );

  if (!resumeUrl) {
    return (
      <button
        className={className}
        type="button"
        disabled
        title="Add a resume file in data/site-config.ts to enable this download."
        aria-label="CV download (not configured)"
      >
        {label}
      </button>
    );
  }

  return (
    <a className={className} href="/cv" aria-label="View CV and download resume">
      {label}
    </a>
  );
}
