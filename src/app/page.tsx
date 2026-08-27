import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { primaryFaqs, services, siteConfig, workImages } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Event Management Company in Sri Lanka | Plan A",
  description:
    "Plan corporate events, conferences, MICE programmes, convocations, awards, weddings and brand activations in Colombo and across Sri Lanka with Plan A.",
  path: "/",
  absoluteTitle: true,
});

const process = [
  { title: "Define the brief", copy: "We align on the audience, objective, format, timing, location and decisions that matter first." },
  { title: "Build the plan", copy: "We shape the venue, creative direction, suppliers, production, guest journey and working budget." },
  { title: "Rehearse the details", copy: "Every team works from coordinated schedules, access plans, cue sheets and contingency decisions." },
  { title: "Run the room", copy: "On event day, we direct the moving parts from guest arrival through the final cue and handover." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: primaryFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="shell hero-layout">
          <div className="hero-copy">
            <h1 className="hero-title">
              <span className="hero-line">Event management</span>
              <span className="hero-line">in Sri Lanka,</span>
              <span className="hero-line">planned with <span className="accent-word">precision.</span></span>
            </h1>
            <p className="hero-lead">
              Corporate events, conferences, award ceremonies, weddings and destination celebrations,
              managed from first brief to final cue.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button button-primary">Start planning <ArrowRight aria-hidden="true" size={18} /></Link>
              <Link href="/portfolio" className="button button-secondary">Explore our work <ArrowRight aria-hidden="true" size={18} /></Link>
            </div>
          </div>
        </div>
        <div className="hero-media" aria-hidden="true">
          <Image src="/images/plan-a/colombo-waterfront-corporate-event.webp" alt="" fill sizes="(max-width: 968px) 100vw, 68vw" priority />
        </div>
        <span className="orbit" aria-hidden="true" />
      </section>

      <section className="section" aria-labelledby="services-heading">
        <div className="shell">
          <div className="section-heading">
            <div><span className="micro-label">What we manage</span><h2 id="services-heading">One team. Every moving part.</h2></div>
            <p>Plan A brings strategy, coordination and live delivery into one connected event plan, shaped around the audience and the outcome.</p>
          </div>
          <div className="service-rail">
            {services.map((service) => (
              <Link className="service-card" href={`/services/${service.slug}`} key={service.slug}>
                <div className="service-card-media">
                  <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1180px) 33vw, 17vw" />
                </div>
                <div className="service-card-body"><h3>{service.shortName}</h3><ArrowUpRight aria-hidden="true" size={18} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="capabilities-heading">
        <div className="shell">
          <div className="section-heading">
            <div><span className="micro-label">Designed around the brief</span><h2 id="capabilities-heading">Built around the event, not a package.</h2></div>
            <p>Choose complete event management or bring us in for the areas where your internal team needs focused planning and production support.</p>
          </div>
          <ol className="capability-list">
            {services.map((service, index) => (
              <li key={service.slug}><span className="number">0{index + 1}</span><span className="copy">{service.name}</span><ArrowUpRight aria-hidden="true" size={18} /></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="work-heading">
        <div className="shell">
          <div className="section-heading">
            <div><span className="micro-label">Selected work</span><h2 id="work-heading">Real moments. Carefully managed.</h2></div>
            <p>A look at ceremony, culture, presentation and guest experience from the Plan A event archive.</p>
          </div>
          <div className="work-grid">
            {workImages.map((item) => (
              <figure className="work-item" key={item.src}>
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 968px) 50vw, 34vw" />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="section-link-row">
            <Link href="/portfolio" className="button button-secondary">View the work archive <ArrowRight aria-hidden="true" size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="process-heading">
        <div className="shell">
          <div className="section-heading">
            <div><span className="micro-label">How we work</span><h2 id="process-heading">Clarity before showtime.</h2></div>
            <p>Good event delivery begins well before doors open. Our process makes ownership, timing and decisions visible to every team involved.</p>
          </div>
          <div className="process-grid">
            {process.map((step, index) => (
              <article className="process-step" key={step.title}><span className="process-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-heading">
        <div className="shell">
          <div className="section-heading">
            <div><span className="micro-label">Planning questions</span><h2 id="faq-heading">Before the first brief.</h2></div>
            <p>Useful answers for teams and couples beginning an event in Sri Lanka.</p>
          </div>
          <div className="faq-list">
            {primaryFaqs.map((faq, index) => (
              <details className="faq-item" key={faq.question}>
                <summary><span className="faq-index">0{index + 1}</span>{faq.question}<span className="faq-icon" aria-hidden="true" /></summary>
                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section closing-cta">
        <div className="shell closing-cta-inner">
          <h2>Let&apos;s make the plan.</h2>
          <div>
            <p>Share the date, audience and ambition. We will help you identify the next useful decision, even if the brief is still taking shape.</p>
            <div className="cta-actions">
              <Link href="/contact" className="button button-primary">Start an event brief <ArrowRight aria-hidden="true" size={18} /></Link>
              <a href={`mailto:${siteConfig.email}`} className="button button-secondary">Email Plan A</a>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
    </>
  );
}
