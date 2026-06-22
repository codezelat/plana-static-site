"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand-section">
            <Link href="/" className="logo-wrap">
              <img src="/logo.png" alt="Plan A Logo" className="logo-img" />
            </Link>
            <p className="footer-tagline">&ldquo;Every Great Event Starts with Plan A&rdquo;</p>
            <p className="footer-description">
              From weddings and corporate gatherings to birthdays and concerts, Plan A creates unforgettable experiences across Sri Lanka.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">LN</a>
              <a href="#" className="social-link" aria-label="Facebook">FB</a>
              <a href="#" className="social-link" aria-label="Instagram">IG</a>
              <a href="#" className="social-link" aria-label="YouTube">YT</a>
            </div>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Start Planning</Link></li>
            </ul>
          </div>

          <div className="footer-services-section">
            <h4 className="footer-title">Event Services</h4>
            <ul className="footer-links">
              <li><Link href="/services">Weddings</Link></li>
              <li><Link href="/services">Corporate Gatherings</Link></li>
              <li><Link href="/services">Birthdays & Milestones</Link></li>
              <li><Link href="/services">Concerts & Entertainment</Link></li>
            </ul>
          </div>

          <div className="footer-newsletter-section">
            <h4 className="footer-title">Event Insights</h4>
            <p className="newsletter-text">Join our mailing list to receive planning tips and vendor alerts in Sri Lanka.</p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Join
              </button>
            </form>
            {subscribed && (
              <p className="subscribe-success">✓ You&apos;re subscribed. Thank you!</p>
            )}
          </div>
        </div>

        <div className="container footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Plan A. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .site-footer {
          background-color: var(--bg-tertiary);
          border-top: 1px solid var(--glass-border);
          padding: 5rem 0 2rem;
          margin-top: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 2fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .logo-wrap {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          display: inline-flex;
        }

        .logo-img {
          height: 48px;
          width: auto;
          display: block;
        }

        .footer-tagline {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--color-powder);
          text-transform: uppercase;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }

        .footer-brand-section {
          display: flex;
          flex-direction: column;
        }

        .footer-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 320px;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-link {
          width: 36px;
          height: 36px;
          border-radius: 4px;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .social-link:hover {
          color: #020410;
          background: var(--color-powder);
          border-color: var(--color-powder);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(143, 217, 217, 0.3);
        }

        .footer-title {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .footer-links a:hover {
          color: var(--color-powder);
          padding-left: 5px;
        }

        .newsletter-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .newsletter-form {
          display: flex;
          gap: 0.5rem;
        }

        .newsletter-input {
          flex-grow: 1;
          background: var(--bg-primary);
          border: 1px solid var(--glass-border);
          padding: 0.75rem 1rem;
          border-radius: 4px;
          color: var(--text-primary);
          font-size: 0.9rem;
          outline: none;
          transition: var(--transition-smooth);
        }

        .newsletter-input:focus {
          border-color: var(--color-powder);
          box-shadow: 0 0 10px rgba(143, 217, 217, 0.2);
        }

        .newsletter-btn {
          background: var(--color-aqua);
          border: none;
          color: #fff;
          padding: 0.75rem 1.25rem;
          border-radius: 4px;
          font-family: var(--font-display);
          font-weight: 700;
          cursor: pointer;
          font-size: 0.8rem;
          text-transform: uppercase;
          transition: var(--transition-smooth);
        }

        .newsletter-btn:hover {
          background: var(--color-powder);
          color: #020410;
          box-shadow: 0 5px 15px rgba(143, 217, 217, 0.3);
        }

        .subscribe-success {
          color: var(--color-powder);
          font-size: 0.85rem;
          margin-top: 0.75rem;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid var(--glass-border);
          padding-top: 2rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-bottom-links a:hover {
          color: var(--text-secondary);
        }

        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
