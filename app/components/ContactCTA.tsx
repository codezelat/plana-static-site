export default function ContactCTA(){
  return (
    <section className="py-16 bg-gradient-to-r from-brand-navy via-brand-steel to-brand-aqua text-white rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold">Let&apos;s Create Something Amazing Together</h2>
        <p className="mt-3 max-w-2xl mx-auto">Whether you&apos;re planning a small celebration or a grand event, Plan A is ready to make it unforgettable.</p>
        <div className="mt-6 flex gap-4 justify-center">
          <a href="#contact" className="bg-brand-aqua text-brand-black px-5 py-3 rounded-full font-semibold">Plan Your Event</a>
          <a href="https://wa.me/947xxxxxxxx" className="bg-brand-aqua/20 px-5 py-3 rounded-full">Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
