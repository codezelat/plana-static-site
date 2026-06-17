"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-40 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center text-2xl font-extrabold text-white">
            <img src="/logo.png" alt="Plan A" className="h-10 w-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
          <a href="#home" className="hover:text-brand-steel">Home</a>
          <a href="#about" className="hover:text-brand-steel">About</a>
          <a href="#services" className="hover:text-brand-steel">Services</a>
          <a href="#gallery" className="hover:text-brand-steel">Gallery</a>
          <a href="#contact" className="hover:text-brand-steel">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-brand-navy text-white font-semibold hover:bg-brand-deep hover:scale-[0.99] transition"
          >
            Plan Your Event
          </a>
        </div>

        <div className="md:hidden">
            <MobileMenu />
          </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        aria-label="menu"
        onClick={() => setOpen((s) => !s)}
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
      >
        ☰
      </button>
      {open && (
        <div className="absolute right-4 mt-2 py-4 w-48 bg-background text-brand-deep rounded-lg shadow-lg">
          <a className="block px-4 py-2" href="#home">Home</a>
          <a className="block px-4 py-2" href="#about">About</a>
          <a className="block px-4 py-2" href="#services">Services</a>
          <a className="block px-4 py-2" href="#gallery">Gallery</a>
          <a className="block px-4 py-2" href="#contact">Contact</a>
          <a className="block mt-2 mx-4 px-4 py-2 bg-brand-navy text-white rounded-full text-center" href="#contact">Plan Your Event</a>
        </div>
      )}
    </div>
  );
}
