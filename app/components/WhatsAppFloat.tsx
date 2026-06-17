type Props = { className?: string };

export default function WhatsAppFloat({ className }: Props) {
  return (
    <a
      href="https://wa.me/947xxxxxxxx"
      target="_blank"
      rel="noreferrer"
      className={"flex items-center gap-3 bg-brand-steel text-white px-4 py-3 rounded-full shadow-lg animate-pulse " + (className || "")}
    >
      <span className="text-2xl">💬</span>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
