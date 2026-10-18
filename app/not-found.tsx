import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found">
      <span className="eyebrow">404 — Page not found</span>
      <h1>This page wandered off.</h1>
      <p>The page you’re looking for isn’t here.</p>
      <Link className="button button--primary" href="/">
        <ArrowLeft aria-hidden="true" size={16} />
        Return home
      </Link>
    </main>
  );
}
