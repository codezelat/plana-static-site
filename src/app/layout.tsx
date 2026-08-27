import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
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
        url: "/images/plan-a/colombo-waterfront-corporate-event.webp",
        width: 1915,
        height: 821,
        alt: "Plan A event management in Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Management Company in Sri Lanka | Plan A",
    description: siteConfig.description,
    images: ["/images/plan-a/colombo-waterfront-corporate-event.webp"],
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
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/plan-a/plan-a-icon.webp`,
  image: `${siteConfig.url}/images/plan-a/colombo-waterfront-corporate-event.webp`,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    ...siteConfig.addressParts,
  },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  parentOrganization: {
    "@type": "Organization",
    name: siteConfig.parentName,
    url: siteConfig.parentUrl,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={instrumentSans.variable} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
