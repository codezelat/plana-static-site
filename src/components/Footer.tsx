import Link from "next/link";
import Brand from "@/components/Brand";
import { navItems, services, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>
            Event management in Colombo and across Sri Lanka for business, ceremony,
            culture and celebration.
          </p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-column footer-services">
          <h2>Services</h2>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              {service.shortName}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <h2>Start a brief</h2>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
          <address>{siteConfig.address}</address>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Plan A. All rights reserved.</p>
        <p>
          A subsidiary of{" "}
          <a href={siteConfig.parentUrl} target="_blank" rel="noopener noreferrer">
            Codezela Technologies
          </a>
          . Built with <span className="love-mark" aria-label="love">❤️</span> by Codezela Technologies.
        </p>
      </div>
    </footer>
  );
}
