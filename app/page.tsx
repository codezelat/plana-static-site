import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import EventTypes from "./components/EventTypes";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import FeaturedExperiences from "./components/FeaturedExperiences";
import Gallery from "./components/Gallery";
import Packages from "./components/Packages";
import Partners from "./components/Partners";
import FAQ from "./components/FAQ";
import ContactCTA from "./components/ContactCTA";
import ContactSection from "./components/ContactSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-brand-black bg-background">
      <Navbar />

      <main className="pt-0">
        <Hero />
        <About />
        <EventTypes />
        <Services />
        <WhyChoose />
        <FeaturedExperiences />
        <Gallery />
        <Packages />
        <Partners />
        <FAQ />
        <ContactCTA />
        <ContactSection />
        <FinalCTA />
        <Footer />
      </main>

      <WhatsAppFloat />
    </div>
  );
}
