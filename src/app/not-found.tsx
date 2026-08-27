import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="system-page" aria-labelledby="not-found-heading">
      <div className="shell system-page-inner">
        <span className="system-code" aria-hidden="true">
          404
        </span>
        <div className="system-copy">
          <span className="micro-label">Page not found</span>
          <h1 id="not-found-heading">This page missed the cue.</h1>
          <p>
            The address may have changed, or the page may no longer exist. The main Plan A
            website and event services are still ready below.
          </p>
          <div className="hero-actions">
            <Link href="/" className="button button-primary">
              Return home <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link href="/services" className="button button-secondary">
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
