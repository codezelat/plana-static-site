import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Plan A | Premium Event Planners Sri Lanka",
  description: "From weddings and corporate gatherings to birthdays and concerts, Plan A creates unforgettable experiences across Sri Lanka. Every great event starts with Plan A.",
  keywords: ["Event Planner Sri Lanka", "Wedding Planner Colombo", "Corporate Events Sri Lanka", "Concert Organizer Colombo", "Birthday Planner Sri Lanka", "Plan A Events"],
  authors: [{ name: "Plan A Events Agency" }],
  openGraph: {
    title: "Plan A | Premium Event Planners Sri Lanka",
    description: "From weddings and corporate gatherings to birthdays and concerts, Plan A creates unforgettable experiences across Sri Lanka.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
