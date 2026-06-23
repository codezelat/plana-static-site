"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "",
    date: "",
    location: "",
    guests: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.category && formData.location) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          category: "",
          date: "",
          location: "",
          guests: "",
          message: "",
        });
      }, 1500);
    }
  };

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <span className="section-tag">START PLANNING</span>
          <h1 className="hero-title">
            Let&apos;s build <span className="gradient-text">your Plan A.</span>
          </h1>
          <p className="hero-subtitle">
            Submit your corporate event requirements below. Our Colombo coordination office will review your brief, draft early timelines, and propose venue and vendor allocations.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container grid-2">
          {/* Contact Details */}
          <div className="contact-details-wrap">
            <div className="contact-detail-card glass-card">
              <h2 className="details-title">Colombo Office</h2>
              <p className="details-desc">Connect directly with our event directors to check venue availability and licensing requirements.</p>
              
              <div className="details-list">
                <div className="detail-item">
                  <span className="detail-icon">✉</span>
                  <div className="detail-text">
                    <span className="detail-label">General Enquiries</span>
                    <a href="mailto:hello@plana.lk" className="detail-link">hello@plana.lk</a>
                  </div>
                </div>

                <div className="detail-item">
                  <span className="detail-icon">☎</span>
                  <div className="detail-text">
                    <span className="detail-label">Coordination Hotline</span>
                    <a href="tel:+94112903921" className="detail-link">+94 11 290 3921</a>
                  </div>
                </div>

                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <div className="detail-text">
                    <span className="detail-label">Colombo Headquarters</span>
                    <p className="detail-link-static">104 Galle Road, Colombo 03<br />Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-status-card glass-card">
              <span className="status-indicator"></span>
              <div className="status-text">
                <h4>Now Booking Q3 & Q4 Corporate Events</h4>
                <p>Currently onboarding conferences, convocations, awards ceremonies, and corporate galas for the upcoming quarter.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrap glass-card">
            {formSubmitted ? (
              <div className="form-success">
                <span className="success-icon">✓</span>
                <h2>Inquiry Successfully Received</h2>
                <p>Thank you for choosing Plan A. Our corporate event directors in Colombo are reviewing your brief against venue availability and vendor schedules. We will follow up via email within 24 hours to schedule your planning call.</p>
                <button onClick={() => setFormSubmitted(false)} className="glow-btn-outline reset-btn">
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-header-title">Corporate Event Brief</h3>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Name / Company *</label>
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
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. lead@company.com"
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="company">Secondary Contact / Title</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Operations Director"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Event Category *</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a category...</option>
                      <option value="conference">Conference / Summit</option>
                      <option value="convocation">Convocation Ceremony</option>
                      <option value="awards">Awards / Recognition Gala</option>
                      <option value="launch">Product Launch</option>
                      <option value="corporate-gala">Corporate Gala / Dinner</option>
                      <option value="seminar">Seminar / Workshop</option>
                      <option value="agm">AGM / Shareholder Meeting</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday / Milestone</option>
                      <option value="concert">Concert / Entertainment</option>
                      <option value="other">Other Event Type</option>
                    </select>
                  </div>
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
                      placeholder="e.g. 350"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="location">Target Location in Sri Lanka *</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Colombo, Galle, Kandy, Bentota..."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Event Brief / Special Requirements</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your event objectives, staging requirements, AV needs, VIP coordination, or any special logistics..."
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="glow-btn contact-submit-btn">
                  {isSubmitting ? "Submitting Parameters..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-hero {
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

        .contact-section {
          padding: 2rem 0 8rem;
        }

        .contact-details-wrap {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .details-title {
          font-size: 1.75rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .details-desc {
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }

        .details-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .detail-item {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }

        .detail-icon {
          font-size: 1.25rem;
          color: var(--color-powder);
          background: var(--card-icon-bg);
          width: 44px;
          height: 44px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--glass-border);
          flex-shrink: 0;
        }

        .detail-text {
          display: flex;
          flex-direction: column;
        }

        .detail-label {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }

        .detail-link {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .detail-link:hover {
          color: var(--color-powder);
        }

        .detail-link-static {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .contact-status-card {
          display: flex;
          gap: 1.25rem;
          align-items: center;
          background: linear-gradient(135deg, var(--success-bg) 0%, var(--section-bg-subtle) 100%);
          border-color: var(--glass-border);
          padding: 1.5rem 2rem;
        }

        .status-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #27c93f;
          box-shadow: 0 0 10px #27c93f;
          display: inline-block;
          flex-shrink: 0;
          animation: float 2s ease-in-out infinite;
        }

        .status-text h4 {
          font-size: 1rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .status-text p {
          font-size: 0.85rem;
        }

        /* Form styles */
        .contact-form-wrap {
          padding: 3rem;
          border-color: var(--glass-border);
        }

        .form-header-title {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 2rem;
        }

        .contact-form {
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
        .form-group select,
        .form-group textarea {
          background: var(--input-bg);
          border: 1px solid var(--glass-border);
          padding: 0.8rem 1.25rem;
          border-radius: 4px;
          color: var(--text-primary);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition-smooth);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--color-cerulean);
          box-shadow: 0 0 10px rgba(12, 33, 196, 0.1);
        }

        .form-group select option {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .contact-submit-btn {
          width: 100%;
          padding: 0.95rem;
          margin-top: 1rem;
        }

        .contact-submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .form-success {
          text-align: center;
          padding: 3rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }

        .success-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: var(--success-bg);
          color: var(--color-powder);
          border: 2px solid var(--color-powder);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.25rem;
          font-weight: 800;
          box-shadow: 0 0 20px var(--success-glow);
          margin-bottom: 1rem;
        }

        .form-success h2 {
          font-size: 2rem;
          color: var(--text-primary);
        }

        .form-success p {
          max-width: 450px;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .reset-btn {
          padding: 0.75rem 1.5rem;
          font-size: 0.9rem;
        }

        @media (max-width: 968px) {
          .form-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.75rem;
          }
          .contact-form-wrap {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
