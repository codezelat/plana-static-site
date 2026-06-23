"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Services() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const servicesDetails = [
    {
      title: "Conferences & Summits",
      tagline: "Multi-Day Corporate & Industry Events",
      description: "Full-scale corporate conferences, industry summits, and leadership retreats spanning multiple halls, breakout rooms, and networking zones. We manage everything from speaker coordination and AV production to delegate transfers and branded experiences.",
      deliverables: ["Multi-Hall Stage Design & LED Production", "Delegate Registration & Engagement Apps", "Speaker & VIP Coordination Logistics", "Live Streaming & Satellite Venue Linking", "Corporate Transfer & Accommodation Management"],
      metric: "5k+",
      metricLabel: "Delegates Managed Per Event",
      theme: "navy",
    },
    {
      title: "Convocations & Awards Ceremonies",
      tagline: "Ceremonial Precision at Scale",
      description: "University convocations, corporate recognition awards, and institutional ceremonies staged with meticulous processional coordination, VIP protocol, and commemorative production. We handle the ceremonial scripting, seating hierarchies, and media coordination so every moment unfolds flawlessly.",
      deliverables: ["Ceremonial Stage & Processional Design", "VIP & Dignitary Protocol Management", "Graduate/Recipient Seating Coordination", "Live Projection & Overflow Venue Management", "Commemorative Photo & Video Production"],
      metric: "10k+",
      metricLabel: "Graduates & Awardees Staged",
      theme: "sunset",
    },
    {
      title: "Product Launches & Corporate Galas",
      tagline: "High-Impact Brand Moments",
      description: "Product reveals, investor dinners, annual general meetings, and corporate gala nights designed to generate maximum brand impression, media coverage, and stakeholder engagement.",
      deliverables: ["Themed Stage & Lighting Design", "Media Wall & Press Coordination", "Catering & Hospitality Management", "Entertainment & Speaker Sourcing", "Post-Event Analytics & Reporting"],
      metric: "100%",
      metricLabel: "On-Time Delivery Rate",
      theme: "coral",
    },
    {
      title: "Weddings & Celebrations",
      tagline: "Bespoke Personal & Social Events",
      description: "Intimate beachfront vows in Galle, grand ballroom receptions in Colombo, milestone birthdays, and private celebrations curated entirely to your personal vision with the same precision we bring to corporate events.",
      deliverables: ["Custom Venue & Staging Designs", "Premium Floral & Visual Styling", "Catering & Mixology Coordination", "Entertainment & Band Sourcing", "Onsite Timeline Control Directors"],
      metric: "Bespoke",
      metricLabel: "Designed from Scratch",
      theme: "stadium",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Brief & Scope Alignment",
      desc: "We align on event objectives, conduct venue audits, define delegate/attendee parameters, and draft a comprehensive budget blueprint with fixed and variable cost projections.",
    },
    {
      step: "02",
      title: "Vendor & Venue Coordination",
      desc: "Leveraging our enterprise network, we source and align convention centres, AV production houses, caterers, and transfer services under strict Plan A SLAs.",
    },
    {
      step: "03",
      title: "Operational Blueprinting",
      desc: "We produce granular hour-by-hour run sheets, safety grids, crowd flow models, speaker schedules, and VIP arrival coordination plans.",
    },
    {
      step: "04",
      title: "Live Execution & Reporting",
      desc: "Our onsite team supervises every rigging link, catering slot, audio cue, and attendee touchpoint. Post-event, we deliver analytics and feedback reports.",
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "Do you handle multi-day corporate conferences?",
      answer: "Absolutely. Multi-day conferences are our flagship service. We manage everything from multi-hall stage production and delegate registration apps to breakout room logistics, speaker coordination, live streaming to satellite venues, and corporate transfer scheduling across all days.",
    },
    {
      question: "Can you coordinate university convocations at scale?",
      answer: "Yes. We have staged convocations for over 10,000 graduates in a single ceremony. Our team handles ceremonial processional scripting, graduate seating hierarchies, VIP and dignitary protocol, live projection for overflow venues, and commemorative media production.",
    },
    {
      question: "How far in advance should we book a corporate event?",
      answer: "For large-scale conferences and convocations, we recommend booking 4 to 6 months in advance to secure premium venues and coordinate multi-vendor logistics. Awards galas and product launches can typically be executed with 2 to 3 months notice.",
    },
    {
      question: "What makes Plan A different from standard event coordinators?",
      answer: "We combine corporate-grade structural precision with creative brand alignment. We don't just 'place vendor calls'—we design the entire staging flow, manage multi-channel attendee logistics, integrate your corporate identity into every touchpoint, and hold vendors to strict SLAs through our interconnected network.",
    },
    {
      question: "Can you work with our preferred venue or suppliers?",
      answer: "Absolutely. While we maintain a premium network of verified venues, AV providers, and caterers across Sri Lanka, we are always happy to coordinate with your preferred suppliers, ensuring they integrate seamlessly into our master event timeline.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <span className="section-tag">What We Do</span>
          <h1 className="hero-title">
            Expertise that scales.<br /><span className="gradient-text">Experiences that endure.</span>
          </h1>
          <p className="hero-subtitle">
            We plan and execute every type of corporate and social event, from multi-day conferences and formal convocations to product launches and intimate celebrations.
          </p>
        </div>
      </section>

      {/* Services Grid Detail */}
      <section className="services-detail-section">
        <div className="container">
          <div className="services-detail-list">
            {servicesDetails.map((service, idx) => (
              <div key={idx} className={`service-detail-item glass-card ${service.theme}`}>
                <div className="service-detail-header">
                  <div className="service-header-text">
                    <span className="service-tagline">{service.tagline}</span>
                    <h2 className="service-title">{service.title}</h2>
                  </div>
                  <div className="service-metric-badge">
                    {service.metric}
                  </div>
                </div>

                <p className="service-desc">{service.description}</p>

                <div className="deliverables-block">
                  <h4 className="deliverables-title">Deliverables Blueprint:</h4>
                  <ul className="deliverables-list">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx}>✓ {item}</li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="glow-btn service-item-cta">
                  Initiate Booking Design
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="workflow-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">Our Process</h2>
            <p className="section-desc">A proven four-stage framework that takes your event from initial brief to flawless live execution.</p>
          </div>

          <div className="grid-4">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="workflow-card glass-card">
                <span className="workflow-number gradient-text">{step.step}</span>
                <h3 className="workflow-title">{step.title}</h3>
                <p className="workflow-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Planning Alignments</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="faq-item glass-card" onClick={() => toggleFaq(idx)}>
                  <div className="faq-question-row">
                    <h3 className="faq-question">{faq.question}</h3>
                    <span className={`faq-toggle-icon ${isOpen ? "open" : ""}`}>+</span>
                  </div>
                  <div className={`faq-answer-wrap ${isOpen ? "open" : ""}`}>
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="services-cta-section">
        <div className="container cta-box glass-card">
          <h2>Ready to get started?</h2>
          <p>Tell us about your event and we&apos;ll come back with a tailored proposal within 24 hours.</p>
          <Link href="/contact" className="glow-btn">
            Get a Proposal
          </Link>
        </div>
      </section>

      <style jsx>{`
        .services-hero {
          padding: 8rem 0 4rem;
          text-align: center;
        }

        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .services-detail-section {
          padding: 2rem 0 6rem;
        }

        .services-detail-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }

        .service-detail-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
        }

        .service-detail-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          width: 100%;
        }

        .service-header-text {
          flex-grow: 1;
        }

        .service-tagline {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .service-title {
          font-size: 1.6rem;
          color: var(--text-primary);
        }

        .service-metric-badge {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 0.85rem;
          padding: 0.4rem 1rem;
          border-radius: 4px;
          border: 1px solid var(--color-powder);
          background: rgba(143, 217, 217, 0.1);
          color: var(--color-powder);
        }

        /* Color accents for cards */
        .service-detail-item.sunset {
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.12) 0%, rgba(245, 158, 11, 0.03) 100%);
          border-color: rgba(245, 158, 11, 0.22);
        }
        .service-detail-item.sunset .service-metric-badge {
          border-color: var(--color-sunset-gold);
          background: rgba(245, 158, 11, 0.1);
          color: var(--color-sunset-gold);
        }

        .service-detail-item.navy {
          background: linear-gradient(135deg, var(--section-bg-subtle) 0%, var(--section-bg) 100%);
          border-color: var(--glass-border);
        }

        .service-detail-item.coral {
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.12) 0%, rgba(0, 240, 255, 0.03) 100%);
          border-color: rgba(255, 107, 107, 0.22);
        }
        .service-detail-item.coral .service-metric-badge {
          border-color: var(--color-sunset-coral);
          background: rgba(255, 107, 107, 0.1);
          color: var(--color-sunset-coral);
        }

        .service-detail-item.stadium {
          background: linear-gradient(135deg, var(--section-bg) 0%, var(--section-bg-subtle) 100%);
          border-color: var(--glass-border);
        }

        .service-desc {
          margin-bottom: 2rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .deliverables-block {
          width: 100%;
          margin-bottom: 2.5rem;
          background: var(--deliverable-bg);
          border: 1px solid var(--glass-border);
          padding: 1.5rem;
          border-radius: 4px;
        }

        .deliverables-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .deliverables-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .deliverables-list li {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .service-item-cta {
          width: 100%;
          padding: 0.9rem;
          font-size: 0.9rem;
        }

        /* Workflow styles */
        .workflow-section {
          padding: 8rem 0;
          background: var(--section-bg-alt);
          border-top: 1px solid var(--glass-border);
        }

        .workflow-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
        }

        .workflow-number {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 1rem;
        }

        .workflow-title {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .workflow-desc {
          font-size: 0.9rem;
        }

        /* FAQ Section styles */
        .faq-section {
          padding: 8rem 0;
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .faq-item {
          padding: 1.5rem 2rem;
          cursor: pointer;
        }

        .faq-question-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .faq-question {
          font-size: 1.15rem;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-weight: 600;
        }

        .faq-toggle-icon {
          font-size: 1.5rem;
          color: var(--color-powder);
          transition: transform 0.3s ease;
        }

        .faq-toggle-icon.open {
          transform: rotate(45deg);
          color: var(--color-aqua);
        }

        .faq-answer-wrap {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease-in-out;
          opacity: 0;
        }

        .faq-answer-wrap.open {
          max-height: 200px;
          opacity: 1;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--faq-border);
        }

        .faq-answer {
          font-size: 0.95rem;
        }

        /* CTA box */
        .services-cta-section {
          padding: 4rem 0 8rem;
        }

        .cta-box {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .cta-box h2 {
          font-size: 2.25rem;
        }

        .cta-box p {
          max-width: 500px;
          margin: 0 auto;
        }

        @media (max-width: 968px) {
          .services-detail-list {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.75rem;
          }
        }
      `}</style>
    </>
  );
}
