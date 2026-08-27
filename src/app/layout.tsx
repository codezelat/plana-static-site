import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services, siteConfig } from "@/lib/site";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  category: "Event management",
  title: {
    default: "Event Management Company in Sri Lanka | Plan A",
    template: "%s | Plan A Sri Lanka",
  },
  description: siteConfig.description,
  keywords: [
    "event management Sri Lanka",
    "event management company Sri Lanka",
    "event planner Sri Lanka",
    "event management Colombo",
    "corporate event management Sri Lanka",
    "conference organisers Sri Lanka",
    "MICE Sri Lanka",
    "wedding planners Sri Lanka",
    "convocation management Sri Lanka",
    "event production Sri Lanka",
  ],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Event Management Company in Sri Lanka | Plan A",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_LK",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Management Company in Sri Lanka | Plan A",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "en-LK",
};

const organizationSchema = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/plan-a/plan-a-icon.webp`,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    ...siteConfig.addressParts,
  },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "event enquiries",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: "LK",
    availableLanguage: "English",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Event management services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: `${siteConfig.url}/services/${service.slug}`,
      },
    })),
  },
  parentOrganization: {
    "@type": "Organization",
    name: siteConfig.parentName,
    url: siteConfig.parentUrl,
  },
};

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [websiteSchema, organizationSchema],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={instrumentSans.variable} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
