export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-extrabold text-brand-aqua">Plan A</div>
          <p className="mt-3 text-sm text-white/80">Creating unforgettable experiences, one event at a time.</p>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 text-sm text-white/80 space-y-2">
            <li><a href="#home" className="hover:text-brand-aqua">Home</a></li>
            <li><a href="#about" className="hover:text-brand-aqua">About</a></li>
            <li><a href="#services" className="hover:text-brand-aqua">Services</a></li>
            <li><a href="#gallery" className="hover:text-brand-aqua">Gallery</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Services</h4>
          <ul className="mt-3 text-sm text-white/80 space-y-2">
            <li>Weddings</li>
            <li>Corporate</li>
            <li>Concerts</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 text-sm text-white/80">WhatsApp • Facebook • Instagram • YouTube</p>
          <p className="mt-3 text-sm text-white/60">Islandwide, Sri Lanka</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-white/60">© Plan A. All Rights Reserved.</div>
    </footer>
  );
}
