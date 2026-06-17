import FadeInSection from "./FadeInSection";

const features = [
  { title: "Creative Concepts", desc: "Fresh and unique ideas." },
  { title: "Professional Team", desc: "Experienced event specialists." },
  { title: "Islandwide Service", desc: "Available throughout Sri Lanka." },
  { title: "Stress-Free Experience", desc: "We handle everything while you enjoy." },
];

export default function WhyChoose() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <h3 className="text-sm text-brand-steel font-semibold">Why Choose Plan A</h3>
          <h2 className="text-3xl font-bold mt-2">The Plan A Advantage</h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 bg-background rounded-2xl shadow text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-brand-aqua/35 text-brand-navy flex items-center justify-center">✓</div>
                <h4 className="mt-4 font-semibold">{f.title}</h4>
                <p className="mt-2 text-brand-deep">{f.desc}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
