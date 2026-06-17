"use client";
import { useState } from "react";

const faqs = [
  { q: "What events do you organize?", a: "Weddings, corporate events, birthdays, concerts, festivals and custom experiences." },
  { q: "Do you provide islandwide service?", a: "Yes — we operate across Sri Lanka." },
  { q: "Can packages be customized?", a: "Absolutely. Packages are starting points and can be tailored." },
  { q: "How early should I book?", a: "We recommend booking as early as possible, ideally 3-6 months for large events." },
  { q: "Do you provide complete event management?", a: "Yes — from concept and design to onsite execution." },
  { q: "Can I request a quotation?", a: "Yes — use our contact form or WhatsApp to request a quote." },
];

export default function FAQ(){
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-sm text-brand-steel font-semibold">FAQ</h3>
        <h2 className="text-3xl font-bold mt-2">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f, idx)=> (
            <div key={f.q} className="border border-brand-aqua/50 rounded-lg overflow-hidden">
              <button className="w-full text-left p-4 flex items-center justify-between" onClick={()=> setOpen(open===idx? null: idx)}>
                <div>
                  <div className="font-semibold">{f.q}</div>
                </div>
                <div className="text-brand-steel">{open===idx? '−': '+'}</div>
              </button>
              {open===idx && (
                <div className="px-4 pb-4 text-brand-deep">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
