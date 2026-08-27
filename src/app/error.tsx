"use client";

import Link from "next/link";
import { RotateCcw } from "lucide-react";

export default function ErrorPage({ retry }: { retry: () => void }) {
  return (
    <section className="system-page" aria-labelledby="error-heading">
      <div className="shell system-page-inner">
        <span className="system-code" aria-hidden="true">
          Oops
        </span>
        <div className="system-copy">
          <span className="micro-label">Something went wrong</span>
          <h1 id="error-heading">The plan hit an unexpected pause.</h1>
          <p>Try the page again. If the problem continues, return home and contact Plan A.</p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={retry}>
              Try again <RotateCcw aria-hidden="true" size={18} />
            </button>
            <Link href="/" className="button button-secondary">
              Return home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
