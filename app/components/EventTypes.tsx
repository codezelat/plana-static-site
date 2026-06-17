import Image from "next/image";

const types = [
  { icon: "💒", title: "Weddings", desc: "Elegant ceremonies and receptions." },
  { icon: "🏢", title: "Corporate Events", desc: "Professional meetings and launches." },
  { icon: "🎂", title: "Birthday Parties", desc: "Memorable personal celebrations." },
  { icon: "🎵", title: "Concerts", desc: "Live performances and productions." },
  { icon: "🎓", title: "University Events", desc: "Graduations and campus events." },
  { icon: "🌿", title: "Outdoor Festivals", desc: "Large-scale outdoor festivity planning." },
  { icon: "✨", title: "Custom Events", desc: "Tailored experiences for every need." },
];

export default function EventTypes() {
  return (
    <section className="py-1 bg-gradient-to-b from-background to-brand-aqua/20">
      <div className="max-w-7xl mx-auto px-1">
        <h3 className="text-sm text-brand-steel font-semibold">Events We Bring to Life</h3>
        <h2 className="text-3xl font-bold mt-2">Event Types</h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((t) => (
            <div key={t.title} className="relative overflow-hidden rounded-3xl shadow-lg bg-background transition hover:-translate-y-1.5">
              <div className="relative h-52">
                <Image src="/images/placeholder-4.svg" alt={t.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-brand-deep/10 to-transparent" />
                <div className="absolute left-4 bottom-4 text-white">
                  <div className="text-3xl">{t.icon}</div>
                  <h4 className="text-lg font-bold">{t.title}</h4>
                  <p className="text-sm">{t.desc}</p>
                  <button className="mt-3 inline-block bg-brand-navy px-4 py-2 rounded-full text-white text-sm">Plan This Event</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
