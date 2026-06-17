"use client";
import { useState } from "react";

export default function ContactSection(){
  const [form, setForm] = useState({ name:'', phone:'', email:'', type:'', date:'', message:'' });
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-sm text-brand-steel font-semibold">Contact</h3>
          <h2 className="text-3xl font-bold mt-2">Get in Touch</h2>
          <p className="mt-3 text-brand-deep">Phone: +94 7XXXXXXXX • WhatsApp: +94 7XXXXXXXX • Email: hello@plana.example</p>
          <p className="mt-4">Islandwide, Sri Lanka</p>
          <div className="mt-6 space-y-3">
            <div className="text-sm">Follow us on social media for updates.</div>
          </div>
        </div>

        <form onSubmit={(e)=>{e.preventDefault(); alert('Form submitted (demo)');}} className="space-y-4 bg-brand-aqua/20 p-6 rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input className="p-3 rounded-md" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
            <input className="p-3 rounded-md" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
          </div>
          <input className="p-3 rounded-md w-full" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <select className="p-3 rounded-md" value={form.type} onChange={e=>setForm({...form,type:e.target.value})}>
              <option value="">Event Type</option>
              <option>Wedding</option>
              <option>Corporate</option>
              <option>Birthday</option>
            </select>
            <input type="date" className="p-3 rounded-md" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} />
          </div>
          <textarea className="p-3 rounded-md w-full" placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
          <div>
            <button className="bg-brand-navy text-white px-5 py-3 rounded-full hover:bg-brand-deep transition">Plan Your Event</button>
          </div>
        </form>
      </div>
    </section>
  );
}
