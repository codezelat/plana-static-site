"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function ContactForm() {
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "Not provided"}`,
      `Event type: ${data.get("eventType")}`,
      `Date: ${data.get("date") || "Not confirmed"}`,
      `Location: ${data.get("location")}`,
      `Guests: ${data.get("guests") || "Not confirmed"}`,
      "",
      `${data.get("message")}`,
    ];
    const subject = encodeURIComponent(`Plan A event brief from ${data.get("name")}`);
    const body = encodeURIComponent(lines.join("\n"));
    setOpened(true);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Your name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Email address
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          Event type
          <select name="eventType" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option>Corporate event</option>
            <option>Conference or MICE programme</option>
            <option>Convocation or awards ceremony</option>
            <option>Wedding or private celebration</option>
            <option>Product launch or brand activation</option>
            <option>Event production</option>
            <option>Something else</option>
          </select>
        </label>
        <label>
          Tentative date
          <input name="date" type="date" />
        </label>
        <label>
          Location
          <input name="location" placeholder="Colombo, Galle, Kandy..." required />
        </label>
        <label>
          Estimated guests
          <input name="guests" inputMode="numeric" />
        </label>
      </div>
      <label>
        Tell us what you are planning
        <textarea
          name="message"
          rows={6}
          placeholder="Share the objective, audience, venue ideas, production needs or anything already decided."
          required
        />
      </label>
      <button className="button button-primary form-submit" type="submit">
        Open email draft <ArrowUpRight aria-hidden="true" size={18} />
      </button>
      <p className="form-note" aria-live="polite">
        {opened
          ? "Your email app should now have the brief ready to send."
          : `This form opens a prepared email to ${siteConfig.email}. No details are stored on this website.`}
      </p>
    </form>
  );
}
