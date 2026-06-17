export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/947xxxxxxxx"
      target="_blank"
      rel="noreferrer"
      className="fixed right-6 bottom-6 z-50 flex items-center gap-3 bg-brand-steel text-white px-4 py-3 rounded-full shadow-lg animate-pulse"
    >
      <span className="text-2xl">💬</span>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
