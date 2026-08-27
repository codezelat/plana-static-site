import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { workImages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Event Portfolio",
  description:
    "View selected event moments from Plan A, including convocations, business awards, cultural welcomes and formal ceremonies in Sri Lanka.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <span className="micro-label">Selected work</span>
            <h1 className="page-title">Event work in Sri Lanka, shown honestly.</h1>
          </div>
          <p className="page-lead">
            Moments from the current Plan A event archive, from academic ceremony and business
            recognition to Sri Lankan cultural welcomes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="work-grid work-grid-archive">
            {workImages.map((item) => (
              <figure className="work-item" key={item.src}>
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 968px) 50vw, 34vw" priority={item.src === workImages[0].src} />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section closing-cta">
        <div className="shell closing-cta-inner">
          <h2>Your event should have its own point of view.</h2>
          <div>
            <p>Tell us what the audience should feel, understand or remember. We will build the event plan around that outcome.</p>
            <div className="cta-actions">
              <Link href="/contact" className="button button-primary">Start your brief <ArrowRight aria-hidden="true" size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
