import FadeInSection from "./FadeInSection";
import Image from "next/image";

const items = [1,2,3,4,1,2,3,4];

export default function Gallery() {
  return (
    <section id="gallery" className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <h3 className="text-sm text-brand-steel font-semibold">Gallery</h3>
          <h2 className="text-3xl font-bold mt-2">Moments We&apos;ve Created</h2>

          <div className="mt-6 columns-1 sm:columns-2 md:columns-3 gap-4">
            {items.map((i, idx) => (
              <div key={idx} className="break-inside-avoid rounded-lg overflow-hidden shadow-lg">
                <Image src={`/images/placeholder-${(i%4)+1}.svg`} alt={`gallery-${idx}`} width={1200} height={800} className="block w-full h-auto" />
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a href="#" className="inline-block bg-brand-navy text-white px-5 py-3 rounded-full hover:bg-brand-deep transition">Explore More</a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
