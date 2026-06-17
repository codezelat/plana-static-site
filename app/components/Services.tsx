import FadeInSection from "./FadeInSection";

const services = [
  { title: "Event Planning", desc: "Complete coordination from concept to completion.", icon: '📅' },
  { title: "Wedding Management", desc: "Elegant and stress-free wedding planning.", icon: '💖' },
  { title: "Corporate Events", desc: "Professional meetings and launches.", icon: '💼' },
  { title: "Private Celebrations", desc: "Birthdays and anniversaries.", icon: '🎁' },
  { title: "Entertainment & Production", desc: "Music, lighting, staging, performances.", icon: '🎵' },
  { title: "Custom Event Solutions", desc: "Tailored event experiences.", icon: '⚙️' },
];

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <h3 className="text-sm text-brand-steel font-semibold">We Plan. You Celebrate.</h3>
          <h2 className="text-3xl font-bold mt-2">Services</h2>
          <p className="mt-3 text-brand-deep max-w-2xl">Premium services built for unforgettable experiences.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article key={s.title} className="rounded-2xl p-6 shadow-lg bg-background hover:scale-[1.02] transition">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-navy to-brand-steel text-white flex items-center justify-center text-xl">{s.icon}</div>
                <h4 className="mt-4 font-semibold text-lg">{s.title}</h4>
                <p className="mt-2 text-brand-deep">{s.desc}</p>
              </article>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
