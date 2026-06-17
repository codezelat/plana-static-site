export default function Partners(){
  const partners = new Array(8).fill(0).map((_,i)=>`Partner ${i+1}`);
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-sm text-brand-steel font-semibold">Trusted By Great Brands</h3>
        <h2 className="text-3xl font-bold mt-2">Trusted Partners</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 items-center">
          {partners.map(p=> (
            <div key={p} className="p-4 bg-background rounded-lg shadow text-center text-sm text-brand-deep">{p}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
