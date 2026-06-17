const packages = [
  { name: "Basic", price: "Starts at $999", features: ["Venue coordination","Basic decor","Day-of management"] },
  { name: "Premium", price: "Starts at $3,499", features: ["Full planning","Design & styling","Entertainment & AV","Onsite team"] , highlight: true},
  { name: "Custom", price: "Contact us", features: ["Fully tailored solutions","Flexible budgeting","Dedicated planner"] },
];

export default function Packages(){
  return (
    <section className="py-16 bg-brand-aqua/20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-sm text-brand-steel font-semibold">Choose Your Perfect Event Package</h3>
        <h2 className="text-3xl font-bold mt-2">Packages</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name} className={`p-6 rounded-2xl shadow transition hover:-translate-y-1.5 ${p.highlight ? 'bg-background border-2 border-brand-steel' : 'bg-background'}`}>
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold">{p.name}</h4>
                <div className="text-sm text-brand-steel">{p.price}</div>
              </div>
              <ul className="mt-4 text-sm text-brand-deep space-y-2">
                {p.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <div className="mt-6">
                <a className="inline-block bg-brand-navy text-white px-4 py-2 rounded-full hover:bg-brand-deep transition">Get a Custom Quote</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
