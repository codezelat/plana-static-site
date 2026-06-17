"use client";

type Props = { className?: string };

export default function BackToTop({ className }: Props) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={"flex items-center justify-center w-14 h-14 bg-brand-aqua text-black rounded-full shadow-lg hover:scale-105 transition-transform " + (className || "")}
    >
      <span className="text-xl">↑</span>
    </button>
  );
}
