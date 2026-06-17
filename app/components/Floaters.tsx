"use client";
import { useEffect, useState } from "react";
import BackToTop from "./BackToTop";
import WhatsAppFloat from "./WhatsAppFloat";

export default function Floaters() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={
        "fixed right-6 bottom-6 z-50 flex items-center gap-4 transition-all duration-300 ease-out transform " +
        (visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none")
      }
    >
      <BackToTop className="order-1" />
      <WhatsAppFloat className="order-2" />
    </div>
  );
}
