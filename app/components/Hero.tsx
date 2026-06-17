import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-screen w-full overflow-hidden">
        <Image src="/images/placeholder-1.png" alt="Events background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-brand-deep/35 to-brand-black/65" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
                Every Great Event Starts with Plan A
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-white/90">
                From weddings and corporate gatherings to birthdays and concerts, Plan A creates unforgettable experiences across Sri Lanka.
              </p>

              <div className="mt-8 flex gap-4">
                <Link href="#contact" className="bg-brand-navy px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-brand-deep hover:scale-99 transition-transform">
                  Plan Your Event
                </Link>
                <a href="https://wa.me/947xxxxxxxx" className="px-6 py-3 rounded-full bg-brand-aqua/90 text-brand-black font-semibold hover:opacity-95 transition">
                  WhatsApp Us
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl">
                <Stat number="100+" label="Events Planned" />
                <Stat number="500+" label="Happy Guests" />
                <Stat number="Islandwide" label="Coverage" />
                <Stat number="24/7" label="Support" />
              </div>
            </div>
          </div>
        </div>

        <FloatingDecorations />
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="min-h-24 bg-brand-aqua/15 backdrop-blur rounded-xl p-4 text-center flex flex-col items-center justify-center">
      <div className="text-xl sm:text-2xl font-extrabold leading-tight break-words">{number}</div>
      <div className="text-sm text-white/80">{label}</div>
    </div>
  );
}

function FloatingDecorations() {
  return (
    <>
      <div className="pointer-events-none absolute left-12 top-24 w-36 h-36 rounded-full bg-brand-aqua/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute right-12 bottom-28 w-44 h-44 rounded-full bg-brand-steel/30 blur-3xl animate-pulse" />
    </>
  );
}
