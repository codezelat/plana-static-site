import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { services } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Event Management Services",
  description:
    "Explore Plan A event management services in Sri Lanka for corporate events, conferences, MICE, convocations, awards, weddings, activations and production.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <span className="micro-label">Event management services</span>
            <h1 className="page-title">The right team for every moving part.</h1>
          </div>
          <p className="page-lead">
            Planning, production and event-day direction for business events, ceremonies,
            destination programmes and celebrations across Sri Lanka.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell service-index">
          {services.map((service, index) => (
            <Link className="service-index-link" href={`/services/${service.slug}`} key={service.slug}>
              <span className="number">0{index + 1}</span>
              <h2>{service.shortName}</h2>
              <p>{service.description}</p>
              <ArrowUpRight aria-hidden="true" size={22} />
            </Link>
          ))}
        </div>
      </section>

      <section className="section closing-cta">
        <div className="shell closing-cta-inner">
          <h2>Bring us the brief.</h2>
          <div>
            <p>We can manage the complete event or strengthen the areas where your team needs specialist support.</p>
            <div className="cta-actions">
              <Link href="/contact" className="button button-primary">Discuss your event <ArrowRight aria-hidden="true" size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
