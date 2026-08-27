import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { services, siteConfig } from "@/lib/site";

type ServicePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

function findService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};
  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${siteConfig.url}/services/${service.slug}`,
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    provider: { "@id": `${siteConfig.url}/#organization` },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Event management services",
        item: `${siteConfig.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.shortName,
        item: `${siteConfig.url}/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <section className="service-detail-hero">
        <div className="shell service-detail-grid">
          <div className="service-detail-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services">Services</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{service.shortName}</span>
            </nav>
            <span className="micro-label">{service.shortName}</span>
            <h1 className="page-title">{service.title}</h1>
            <p className="page-lead">{service.intro}</p>
            <div className="hero-actions"><Link href="/contact" className="button button-primary">Discuss this event <ArrowRight aria-hidden="true" size={18} /></Link></div>
          </div>
          <div className="service-detail-image">
            <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 968px) 100vw, 55vw" priority />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell detail-columns">
          <div className="detail-block">
            <span className="micro-label">Planning scope</span><h2>What we can coordinate</h2>
            <ul className="check-list">{service.includes.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="detail-block">
            <span className="micro-label">Event formats</span><h2>Built for the occasion</h2>
            <ul className="check-list">{service.eventTypes.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="service-faq-heading">
        <div className="shell">
          <div className="section-heading"><div><span className="micro-label">Useful details</span><h2 id="service-faq-heading">Questions about {service.shortName.toLowerCase()}.</h2></div></div>
          <div className="faq-list">
            {service.faqs.map((faq, index) => (
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
          <h2>Start with the outcome.</h2>
          <div><p>Share what the event needs to achieve. We will help turn it into a clear scope and delivery plan.</p><div className="cta-actions"><Link href="/contact" className="button button-primary">Start your brief <ArrowRight aria-hidden="true" size={18} /></Link></div></div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
    </>
  );
}
