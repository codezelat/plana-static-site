"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          background: rgba(11, 15, 25, 0.98);
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
