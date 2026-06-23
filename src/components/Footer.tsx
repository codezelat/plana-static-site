"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand-section">
            <Link href="/" className="logo-wrap">
              <img src="/logo.png" alt="Plan A Logo" className="logo-img" />
            </Link>
            <p className="footer-tagline">Every Great Event Starts with Plan A</p>
            <p className="footer-description">
              Sri Lanka&apos;s premier corporate event management company. We design and deliver conferences, convocations, awards ceremonies, and celebrations that move audiences and build brands.
            </p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                <YouTubeIcon />
              </a>
            </div>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-title">Navigate</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Get a Proposal</Link></li>
            </ul>
          </div>

          <div className="footer-services-section">
            <h4 className="footer-title">What We Do</h4>
            <ul className="footer-links">
              <li><Link href="/services">Conferences & Summits</Link></li>
              <li><Link href="/services">Convocations & Awards</Link></li>
              <li><Link href="/services">Product Launches</Link></li>
              <li><Link href="/services">Corporate Galas</Link></li>
              <li><Link href="/services">Weddings & Celebrations</Link></li>
            </ul>
          </div>

          <div className="footer-cta-section">
            <h4 className="footer-title">Ready to Plan?</h4>
            <p className="footer-cta-text">Tell us about your next event. Our team in Colombo will respond within 24 hours with a tailored proposal.</p>
            <Link href="/contact" className="footer-cta-btn">
              Start a Conversation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="container footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Plan A. A subsidiary of <a href="https://codezela.com" target="_blank" rel="noopener noreferrer" className="codezela-link">Codezela Technologies</a>. All rights reserved.</p>
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
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .logo-wrap {
          display: inline-flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .logo-img {
          height: 48px;
          width: auto;
          display: block;
        }

        .footer-tagline {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--color-powder);
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }

        .footer-brand-section {
          display: flex;
          flex-direction: column;
        }

        .footer-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 340px;
          line-height: 1.7;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--card-icon-bg);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .social-link:hover {
          color: #fff;
          background: var(--color-navy);
          border-color: var(--color-navy);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(29, 78, 216, 0.3);
        }

        .footer-title {
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-primary);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .footer-links a {
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: var(--transition-smooth);
        }

        .footer-links a:hover {
          color: var(--color-powder);
          padding-left: 4px;
        }

        .footer-cta-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--color-powder);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.75rem 1.5rem;
          border: 1px solid var(--color-powder);
          border-radius: 8px;
          transition: var(--transition-smooth);
        }

        .footer-cta-btn:hover {
          background: var(--color-powder);
          color: #020410;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(143, 217, 217, 0.25);
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

        :global(.codezela-link) {
          color: var(--color-powder);
          font-weight: 600;
          transition: var(--transition-smooth);
        }

        :global(.codezela-link:hover) {
          color: var(--color-aqua);
          text-decoration: underline;
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
