"use client";

import { RotateCcw } from "lucide-react";
import Link from "next/link";
import "./globals.css";

export default function GlobalError({ retry }: { retry: () => void }) {
  return (
    <html lang="en">
      <body>
        <title>Something went wrong | Plan A</title>
        <main id="main-content">
          <section className="system-page" aria-labelledby="global-error-heading">
            <div className="shell system-page-inner">
              <span className="system-code" aria-hidden="true">
                Oops
              </span>
              <div className="system-copy">
                <span className="micro-label">Something went wrong</span>
                <h1 id="global-error-heading">Plan A could not load this page.</h1>
                <p>Try again, or return to the Plan A home page.</p>
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
        </main>
      </body>
    </html>
  );
}
