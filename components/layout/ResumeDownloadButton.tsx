import { Download } from "lucide-react";

interface ResumeDownloadButtonProps {
  resumeUrl: string | null;
  className?: string;
}

export function ResumeDownloadButton({ resumeUrl, className }: ResumeDownloadButtonProps) {
  const label = (
    <>
      <span>Download resume</span>
      <Download aria-hidden="true" size={15} />
    </>
  );

  if (!resumeUrl) {
    return (
      <button
        className={className}
        type="button"
        disabled
        title="Add a resume file in data/site-config.ts to enable this download."
        aria-label="Download resume (not configured)"
      >
        {label}
      </button>
    );
  }

  return (
    <a className={className} href={resumeUrl} download>
      {label}
    </a>
  );
}
