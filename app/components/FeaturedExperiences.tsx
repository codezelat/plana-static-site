import Image from "next/image";

const experiences = ["Luxury Weddings","Corporate Conferences","Beach Parties","Birthday Celebrations","Live Concerts","Outdoor Festivals"];

export default function FeaturedExperiences(){
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-sm text-brand-steel font-semibold">Our Signature Experiences</h3>
        <h2 className="text-3xl font-bold mt-2">Featured Experiences</h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((e, idx) => (
            <div key={e} className="rounded-2xl overflow-hidden shadow-lg bg-background transition hover:scale-[1.03]">
              <div className="relative h-48">
                <Image src={`/images/placeholder-${(idx%4)+1}.svg`} alt={e} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold">{e}</h4>
                <p className="mt-2 text-sm text-brand-deep">Experience the very best in production, design and hospitality.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
