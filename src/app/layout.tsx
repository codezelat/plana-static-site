import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Plan A | Corporate Event Planners Sri Lanka",
  description: "Sri Lanka's premier corporate event management company. Plan A delivers world-class conferences, convocations, awards ceremonies, product launches, and business events alongside weddings and celebrations.",
  keywords: ["Corporate Event Planner Sri Lanka", "Business Conference Organizer Colombo", "Convocation Planner Sri Lanka", "Awards Ceremony Management", "Corporate Event Management", "Product Launch Events", "Plan A Events", "Wedding Planner Colombo"],
  authors: [{ name: "Plan A Events Agency" }],
  openGraph: {
    title: "Plan A | Corporate Event Planners Sri Lanka",
    description: "Sri Lanka's premier corporate event management company. Conferences, convocations, awards ceremonies, and business events executed with precision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('plana-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t)}else{var m=window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.setAttribute('data-theme',m?'dark':'light')}}catch(e){document.documentElement.setAttribute('data-theme','dark')}})()`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
