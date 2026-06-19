"use client";

import React, { useState } from "react";
import Link from "next/link";

interface PortfolioItem {
  id: number;
  title: string;
  location: string;
  type: string;
  guests: string;
  solution: string;
  colorClass: string;
  image: string;
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    date: "",
    location: "",
    guests: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const pillars = [
    {
      title: "Structural Precision",
      copy: "Meticulous logistics, timeline management, and structural blueprinting. We handle the heavy lifting so you can stay in the moment.",
      iconColors: ["#8FD9D9", "rgba(143, 217, 217, 0.1)", "transparent"],
    },
    {
      title: "Interconnected Network",
      copy: "Strategic partnerships with Sri Lanka&rsquo;s top-tier venues, caterers, and production crews to guarantee premium execution.",
      iconColors: ["#3F89A6", "rgba(63, 137, 166, 0.1)", "transparent"],
    },
    {
      title: "Bespoke Curation",
      copy: "Tailored concept designs unique to your narrative. No templates, no repeats—just unforgettable atmospheres.",
      iconColors: ["var(--color-sunset-gold)", "rgba(245, 158, 11, 0.15)", "transparent"],
    },
  ];

  const services = [
    {
      title: "Weddings",
      accent: "glass-sunset",
      desc: "From intimate beach vows to grand ballroom celebrations, we design flawless timelines for your milestone day.",
      badge: "Elegant & Bespoke",
    },
    {
      title: "Corporate Gatherings",
      accent: "midnight-navy",
      desc: "Product launches, high-profile galas, and corporate conferences executed with absolute logistical precision.",
      badge: "Sleek & Seamless",
    },
    {
      title: "Birthdays & Milestones",
      accent: "glass-coral",
      desc: "Curated personal celebrations, milestone parties, and bespoke thematic dinners tailored entirely to you.",
      badge: "Vibrant & Unique",
    },
    {
      title: "Concerts & Entertainment",
      accent: "deep-blue-stadium",
      desc: "Full-scale event production, technical sound/lighting coordination, crowd management, and flawless stage execution.",
      badge: "Stadium Scale",
    },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Sunset Coast Wedding",
      location: "Galle Beachfront",
      type: "Wedding",
      guests: "150 Guests",
      solution: "Bespoke glass pavilion on the shore with multi-tier lighting and offshore fireworks.",
      colorClass: "ocean-blue",
      image: "/images/wedding.png",
    },
    {
      id: 2,
      title: "Tech Summit Keynote",
      location: "Colombo Exhibition Centre",
      type: "Corporate",
      guests: "1,200 Attendees",
      solution: "Overlapping curved projection walls, custom attendee app flow, and seamless logistical execution.",
      colorClass: "navy",
      image: "/images/corporate.png",
    },
    {
      id: 3,
      title: "Open Air Concert",
      location: "Kandy Stadium Grounds",
      type: "Concert",
      guests: "5,000+ Fans",
      solution: "Rigged truss stage construction, high-fidelity sound array, and robust crowd navigation gates.",
      colorClass: "stadium",
      image: "/images/concert.png",
    },
    {
      id: 4,
      title: "Bespoke Heritage Gala",
      location: "Mount Lavinia Hotel",
      type: "Milestone",
      guests: "250 Guests",
      solution: "Colonial theme visual elements paired with classical orchestra coordination and custom projection maps.",
      colorClass: "heritage",
      image: "/images/gala.png",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.category && formData.location) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
        setFormData({
          name: "",
          category: "",
          date: "",
          location: "",
          guests: "",
        });
      }, 1500);
    }
  };

  return (
    <>
      {/* Section 1: Hero Frame */}
      <section className="hero-frame">
        <div className="hero-overlay-glow"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="section-tag animate-float">EST. IN SRI LANKA</span>
            <h1 className="hero-title">
              Every Great Event Starts with <span className="gradient-text">Plan A</span>
            </h1>
            <p className="hero-subtitle">
              From weddings and corporate gatherings to birthdays and concerts, Plan A creates unforgettable experiences across Sri Lanka.
            </p>
            <div className="hero-ctas">
              <Link href="#consultation" className="glow-btn">
                Start Planning
              </Link>
              <Link href="/portfolio" className="glow-btn-outline">
                Portfolio
              </Link>
            </div>
          </div>

          <div className="hero-empty-right"></div>
        </div>
      </section>

      {/* Section 2: The Core Pillars */}
      <section className="core-pillars-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">OUR METHODOLOGY</span>
            <h2 className="section-title">The Plan A Network</h2>
            <p className="section-desc">We represent the seamless convergence of precise logistics, creative collaboration, and vendor trust.</p>
          </div>

          <div className="grid-3">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card glass-card">
                <div className="pillar-icon-wrap">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="20" r="10" stroke={pillar.iconColors[0]} strokeWidth="2" />
                    <circle cx="25" cy="20" r="10" stroke={pillar.iconColors[0]} strokeWidth="1.5" strokeDasharray="2 2" />
                  </svg>
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-copy" dangerouslySetInnerHTML={{ __html: pillar.copy }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Pillars of Service */}
      <section className="services-grid-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">CATEGORIES</span>
            <h2 className="section-title">Pillars of Service</h2>
            <p className="section-desc">Tailored frameworks engineered to match your event profile and scale targets.</p>
          </div>

          <div className="grid-2">
            {services.map((service, idx) => (
              <div key={idx} className={`service-card-flat glass-card ${service.accent}`}>
                <div className="service-card-meta">
                  <span className="service-badge">{service.badge}</span>
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
                <Link href="/services" className="service-card-link">
                  Detailed Workflow <span className="arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Visual Portfolio & Case Studies */}
      <section className="asymmetrical-portfolio-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">PAST EVENTS</span>
            <h2 className="section-title">Sri Lankan Landscape Showcase</h2>
            <p className="section-desc">Explore how we execute premium logistics across Colombo, Galle, and Kandy.</p>
          </div>

          <div className="asymmetrical-grid">
            {portfolioItems.map((item) => {
              const isHovered = hoveredProject === item.id;
              return (
                <div
                  key={item.id}
                  className={`asymmetrical-item glass-card ${item.colorClass}`}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onMouseEnter={() => setHoveredProject(item.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="item-meta-top">
                    <span className="item-tag">{item.type}</span>
                    <span className="item-location">{item.location}</span>
                  </div>
                  <h3 className="item-title">{item.title}</h3>

                  <div className={`hover-stat-panel ${isHovered ? "visible" : ""}`}>
                    <div className="stat-row">
                      <span className="stat-label">Guest Count:</span>
                      <span className="stat-value">{item.guests}</span>
                    </div>
                    <div className="stat-row border-top">
                      <span className="stat-label">Plan A Solution:</span>
                      <p className="stat-solution">{item.solution}</p>
                    </div>
                  </div>

                  <div className="item-footer">
                    <span className="view-detail-hint">Hover to view details</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: The Conversion Funnel */}
      <section id="consultation" className="conversion-funnel-section">
        <div className="container conversion-container glass-card">
          <div className="grid-2 align-center">
            <div className="conversion-info">
              <span className="section-tag">SCHEDULE</span>
              <h2 className="conversion-title">Let&apos;s build your Plan A.</h2>
              <p className="conversion-desc">
                Contact our Austin or Colombo coordination office to lock down dates, draft early timelines, and discuss vendor allocations.
              </p>
              <ul className="conversion-bullets">
                <li>✓ Integrated Vendor Allocation</li>
                <li>✓ Feasibility & Budget Outline</li>
                <li>✓ Multi-Channel Operations</li>
              </ul>
            </div>

            <div className="conversion-form-wrap">
              {formSubmitted ? (
                <div className="form-success-box">
                  <div className="success-check">✓</div>
                  <h3>Planning Started</h3>
                  <p>Our event coordination directors will review your parameters and follow up within 24 hours with a custom proposal outline.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="funnel-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name / Company Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Acme Corporation"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Event Category</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a category...</option>
                      <option value="wedding">Wedding Planning</option>
                      <option value="corporate">Corporate Gathering</option>
                      <option value="birthday">Birthday & Milestone</option>
                      <option value="concert">Concert & Entertainment</option>
                      <option value="other">Other Event Type</option>
                    </select>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="date">Tentative Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="guests">Estimated Guest Count</label>
                      <input
                        type="text"
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        placeholder="e.g. 200"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Target Location in Sri Lanka</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Colombo, Galle, Kandy..."
                    />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="glow-btn submit-btn">
                    {isSubmitting ? "Submitting Parameters..." : "Submit Inquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Hero Frame styling */
        .hero-frame {
          position: relative;
          padding: 8rem 0;
          overflow: hidden;
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          background-image: linear-gradient(to right, rgba(11, 15, 25, 0.95) 0%, rgba(11, 15, 25, 0.65) 50%, rgba(11, 15, 25, 0.3) 100%), url('/images/hero_event_main.png');
          background-size: cover;
          background-position: center;
        }

        .hero-overlay-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          top: -100px;
          left: -100px;
          border-radius: 50%;
          filter: blur(160px);
          background: rgba(2, 6, 89, 0.4);
          z-index: -1;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: center;
          gap: 4rem;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-title {
          font-size: 3.75rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 550px;
        }

        .hero-ctas {
          display: flex;
          gap: 1.5rem;
        }

        .hero-empty-right {
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* Pillars of Service section styling */
        .core-pillars-section {
          padding: 8rem 0;
          background: rgba(5, 11, 28, 0.3);
          border-top: 1px solid var(--glass-border);
        }

        .pillar-card {
          text-align: center;
          padding: 3rem 2rem;
        }

        .pillar-icon-wrap {
          display: inline-flex;
          margin-bottom: 1.5rem;
          padding: 0.5rem;
          background: rgba(22, 44, 64, 0.2);
          border-radius: 50%;
        }

        .pillar-title {
          font-size: 1.25rem;
          color: #fff;
          margin-bottom: 1rem;
        }

        .pillar-copy {
          font-size: 0.95rem;
        }

        /* Service Cards styling */
        .services-grid-section {
          padding: 8rem 0;
        }

        .service-card-flat {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
        }

        .service-card-meta {
          margin-bottom: 1.25rem;
        }

        .service-badge {
          background: rgba(143, 217, 217, 0.1);
          color: var(--color-powder);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1px solid rgba(143, 217, 217, 0.15);
        }

        .service-card-title {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 1rem;
        }

        .service-card-desc {
          margin-bottom: 2rem;
          font-size: 0.95rem;
          flex-grow: 1;
        }

        .service-card-link {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--color-powder);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .service-card-link:hover .arrow {
          transform: translateX(5px);
        }

        .arrow {
          transition: transform 0.2s ease;
        }

        /* Service Visual Accents */
        .glass-sunset {
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.12) 0%, rgba(245, 158, 11, 0.03) 100%);
          border-color: rgba(245, 158, 11, 0.22);
        }
        .glass-sunset:hover {
          border-color: rgba(245, 158, 11, 0.45) !important;
          box-shadow: 0 10px 25px rgba(245, 158, 11, 0.15) !important;
        }
        .midnight-navy {
          background: linear-gradient(135deg, rgba(5, 11, 28, 0.7) 0%, rgba(2, 6, 89, 0.3) 100%);
          border-color: rgba(2, 6, 89, 0.3);
        }
        .glass-coral {
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.12) 0%, rgba(0, 240, 255, 0.03) 100%);
          border-color: rgba(255, 107, 107, 0.22);
        }
        .glass-coral:hover {
          border-color: rgba(255, 107, 107, 0.45) !important;
          box-shadow: 0 10px 25px rgba(255, 107, 107, 0.15) !important;
        }
        .deep-blue-stadium {
          background: linear-gradient(135deg, rgba(2, 6, 89, 0.4) 0%, rgba(5, 11, 28, 0.5) 100%);
          border-color: rgba(63, 137, 166, 0.15);
        }

        /* Asymmetrical Portfolio styling */
        .asymmetrical-portfolio-section {
          padding: 8rem 0;
          background: rgba(5, 11, 28, 0.2);
          border-top: 1px solid var(--glass-border);
        }

        .asymmetrical-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
        }

        .asymmetrical-item {
          display: flex;
          flex-direction: column;
          min-height: 280px;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        /* Background overlays for smooth hover transitions */
        .asymmetrical-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(2, 4, 16, 0.72), rgba(2, 4, 16, 0.88));
          transition: opacity 0.5s ease;
          z-index: 0;
          opacity: 1;
        }

        .asymmetrical-item::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: opacity 0.5s ease;
          z-index: 0;
          opacity: 0;
        }

        .asymmetrical-item.ocean-blue::after {
          background: linear-gradient(135deg, rgba(11, 15, 25, 0.9) 0%, rgba(255, 107, 107, 0.45) 60%, rgba(245, 158, 11, 0.65) 100%);
        }

        .asymmetrical-item.navy::after {
          background: linear-gradient(135deg, rgba(11, 15, 25, 0.9) 0%, rgba(29, 78, 216, 0.45) 60%, rgba(0, 240, 255, 0.6) 100%);
        }

        .asymmetrical-item.stadium::after {
          background: linear-gradient(135deg, rgba(11, 15, 25, 0.9) 0%, rgba(5, 11, 28, 0.45) 60%, rgba(29, 78, 216, 0.65) 100%);
        }

        .asymmetrical-item.heritage::after {
          background: linear-gradient(135deg, rgba(11, 15, 25, 0.9) 0%, rgba(255, 107, 107, 0.45) 60%, rgba(0, 240, 255, 0.6) 100%);
        }

        .asymmetrical-item:hover::after {
          opacity: 1;
        }

        .asymmetrical-item > * {
          position: relative;
          z-index: 1;
        }

        .item-location, .view-detail-hint {
          transition: var(--transition-smooth);
        }

        .asymmetrical-item:hover .item-location {
          color: #e2e8f0;
        }

        .asymmetrical-item:hover .view-detail-hint {
          color: #ffffff;
        }

        @media (max-width: 968px) {
          .asymmetrical-grid {
            grid-template-columns: 1fr;
          }
        }

        .item-meta-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .item-tag {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.75rem;
          color: var(--color-powder);
          text-transform: uppercase;
        }

        .item-location {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .item-title {
          font-size: 1.5rem;
          color: #fff;
          margin-top: 1rem;
          margin-bottom: auto;
        }

        .hover-stat-panel {
          background: rgba(5, 11, 28, 0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border);
          border-radius: 4px;
          padding: 1.25rem;
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          box-shadow: var(--glass-shadow);
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .hover-stat-panel.visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
          border-color: rgba(143, 217, 217, 0.4);
        }

        .stat-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
        }

        .stat-row.border-top {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 0.75rem;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
        }

        .stat-label {
          color: var(--text-muted);
          font-weight: 600;
        }

        .stat-value {
          color: #fff;
          font-weight: 700;
        }

        .stat-solution {
          color: var(--text-secondary);
          line-height: 1.4;
          font-size: 0.8rem;
        }

        .item-footer {
          margin-top: 1.5rem;
          width: 100%;
        }

        .view-detail-hint {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Conversion Funnel styling */
        .conversion-funnel-section {
          padding: 8rem 0;
        }

        .conversion-container {
          padding: 4rem;
          border-color: var(--glass-border);
          background: linear-gradient(135deg, rgba(2, 6, 89, 0.3) 0%, rgba(5, 11, 28, 0.4) 100%);
        }

        .align-center {
          align-items: center;
        }

        .conversion-title {
          font-size: 2.25rem;
          margin-bottom: 1.5rem;
        }

        .conversion-desc {
          font-size: 1.05rem;
          margin-bottom: 2rem;
          max-width: 450px;
        }

        .conversion-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .conversion-form-wrap {
          width: 100%;
        }

        .form-success-box {
          text-align: center;
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }

        .success-check {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(143, 217, 217, 0.1);
          color: var(--color-powder);
          border: 2px solid var(--color-powder);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          font-weight: 800;
          box-shadow: 0 0 20px rgba(143, 217, 217, 0.3);
        }

        .form-success-box h3 {
          font-size: 1.75rem;
          color: #fff;
        }

        .funnel-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.75rem;
          font-family: var(--font-display);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
        }

        .form-group input,
        .form-group select {
          background: var(--bg-primary);
          border: 1px solid var(--glass-border);
          padding: 0.8rem 1.25rem;
          border-radius: 4px;
          color: var(--text-primary);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition-smooth);
        }

        .form-group input:focus,
        .form-group select:focus {
          border-color: var(--color-cerulean);
          box-shadow: 0 0 10px rgba(12, 33, 196, 0.1);
        }

        .form-group select option {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .submit-btn {
          width: 100%;
          padding: 0.95rem;
          margin-top: 1rem;
        }

        @media (max-width: 968px) {
          .hero-frame {
            background-image: linear-gradient(rgba(11, 15, 25, 0.93), rgba(11, 15, 25, 0.85)), url('/images/hero_event_main.png') !important;
            background-position: center;
          }
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
          .hero-content {
            align-items: center;
          }
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .conversion-container {
            padding: 3rem 2rem;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-ctas {
            flex-direction: column;
            width: 100%;
            gap: 1rem;
          }
          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
