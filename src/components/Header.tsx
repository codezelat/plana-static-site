"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="site-header">
        <div className="container header-container">
          <Link href="/" className="logo-wrap">
            <img src="/logo.png" alt="Plan A Logo" className="logo-img" />
          </Link>

          <nav className="desktop-nav">
            {navLinks.map((link) => {
              const cleanPathname = pathname?.replace(/\/$/, "") || "";
              const cleanPath = link.path.replace(/\/$/, "");
              const isActive = link.path === "/"
                ? (pathname === "/" || pathname === "")
                : (cleanPathname === cleanPath || cleanPathname.startsWith(cleanPath + "/"));
              
              const shouldUnderline = isActive && link.path !== "/";

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`nav-link ${isActive ? "active" : ""} ${shouldUnderline ? "active-underline" : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span className="theme-toggle-track">
                <span className="theme-toggle-icon theme-toggle-sun">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                </span>
                <span className="theme-toggle-icon theme-toggle-moon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </span>
                <span className="theme-toggle-knob" />
              </span>
            </button>

            <Link href="/contact" className="glow-btn header-cta">
              Start Planning
            </Link>

            <button
              className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <nav className="mobile-nav-links">
          {navLinks.map((link) => {
            const cleanPathname = pathname?.replace(/\/$/, "") || "";
            const cleanPath = link.path.replace(/\/$/, "");
            const isActive = link.path === "/"
              ? (pathname === "/" || pathname === "")
              : (cleanPathname === cleanPath || cleanPathname.startsWith(cleanPath + "/"));

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`mobile-nav-link ${isActive ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="glow-btn mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start Planning
          </Link>
        </nav>
      </div>

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border-bottom: 1px solid var(--glass-border);
          transition: var(--transition-smooth);
        }

        .header-container {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        :global(.logo-wrap) {
          display: flex;
          align-items: center;
        }

        .logo-img {
          height: 48px;
          width: auto;
          display: block;
        }

        .desktop-nav {
          display: flex;
          gap: 2.5rem;
        }

        :global(.nav-link) {
          position: relative;
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-secondary);
          padding: 0.5rem 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        :global(.nav-link:hover) {
          color: var(--color-powder);
        }

        :global(.nav-link.active) {
          color: var(--color-aqua);
        }

        :global(.nav-link.active-underline) {
          text-decoration: underline;
          text-underline-offset: 6px;
          text-decoration-thickness: 2px;
        }



        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        :global(.header-cta) {
          padding: 0.6rem 1.5rem;
          font-size: 0.75rem;
        }

        :global(.theme-toggle) {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          z-index: 101;
        }

        :global(.theme-toggle-track) {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 52px;
          height: 28px;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          border-radius: 999px;
          padding: 0 6px;
          transition: var(--transition-smooth);
        }

        :global(.theme-toggle-track:hover) {
          border-color: var(--color-powder);
          box-shadow: 0 0 12px var(--success-glow);
        }

        :global(.theme-toggle-icon) {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: var(--transition-smooth);
          z-index: 1;
        }

        :global(.theme-toggle-knob) {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--color-navy);
          transition: var(--transition-bounce);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        :global([data-theme="light"] .theme-toggle-knob) {
          left: 27px;
          background: var(--color-sunset-gold);
        }

        :global([data-theme="light"] .theme-toggle-sun) {
          color: var(--color-sunset-gold);
        }

        :global([data-theme="dark"] .theme-toggle-moon) {
          color: var(--color-aqua);
        }

        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 16px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 101;
        }

        .mobile-menu-toggle span {
          width: 100%;
          height: 2px;
          background-color: var(--text-primary);
          transition: all 0.3s ease-in-out;
        }

        .mobile-menu-toggle.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
          background-color: var(--color-aqua);
        }

        .mobile-menu-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-toggle.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
          background-color: var(--color-aqua);
        }

        /* Mobile drawer */
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          max-width: 320px;
          height: 100%;
          background: var(--drawer-bg);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          z-index: 99;
          transition: var(--transition-smooth);
          border-left: 1px solid var(--glass-border);
          padding: 120px 2.5rem 2rem;
          display: flex;
          flex-direction: column;
        }

        .mobile-nav-drawer.open {
          right: 0;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        :global(.mobile-nav-link) {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        :global(.mobile-nav-link:hover),
        :global(.mobile-nav-link.active) {
          color: var(--color-aqua);
          padding-left: 0.5rem;
          border-left: 2px solid var(--color-cerulean);
        }

        :global(.mobile-cta) {
          margin-top: 2.5rem;
          padding: 0.85rem;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-toggle {
            display: flex;
          }
          .header-cta {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
