import FadeInSection from "./FadeInSection";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-1">
      <div className="max-w-7xl mx-auto px-1">
        <FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/placeholder-4.svg" alt="collage" width={600} height={420} className="object-cover w-full h-full" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/placeholder-2.svg" alt="collage" width={600} height={420} className="object-cover w-full h-full" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg col-span-2">
                <Image src="/images/placeholder-3.svg" alt="collage" width={1200} height={480} className="object-cover w-full h-full" />
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>Creative Planning</Badge>
                <Badge>Professional Team</Badge>
                <Badge>Islandwide Service</Badge>
                <Badge>Reliable Execution</Badge>
              </div>
              <h2 className="mt-4 text-3xl font-bold">About Plan A</h2>
              <p className="mt-4 text-brand-deep leading-relaxed">
                Plan A is a premium event management company serving clients
                across Sri Lanka. We combine creativity, meticulous planning and
                professional execution to deliver memorable events — from
                intimate gatherings to large-scale productions.
              </p>
              <div className="mt-6">
                <a href="#" className="inline-block bg-brand-navy text-white px-5 py-3 rounded-full hover:bg-brand-deep transition">Learn More</a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="px-3 py-1 bg-brand-aqua/35 text-brand-deep rounded-full text-sm font-semibold shadow-sm">{children}</span>;
}
