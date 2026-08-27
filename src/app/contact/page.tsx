import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact an Event Planner in Sri Lanka",
  description:
    "Contact Plan A to discuss an event in Colombo or elsewhere in Sri Lanka. Share your date, location, audience and event objective.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <span className="micro-label">Start an event brief</span>
            <h1 className="page-title">Tell us what needs to happen.</h1>
          </div>
          <p className="page-lead">
            A confirmed date is useful, but not essential. Start with the audience, objective and
            location, and we can help organise the next decisions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell contact-layout">
          <aside className="contact-sidebar">
            <span className="micro-label">Direct contact</span>
            <h2>Plan A, Colombo</h2>
            <p>Based at the Codezela Technologies Sri Lanka Head Office.</p>
            <a className="contact-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a className="contact-link" href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
            <address className="contact-link">{siteConfig.address}</address>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
