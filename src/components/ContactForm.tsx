"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

type TurnstileOptions = {
  sitekey: string;
  action: string;
  theme: "dark";
  size: "flexible";
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
  "timeout-callback": () => void;
};

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: TurnstileOptions) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [statusMessage, setStatusMessage] = useState(
    "Complete the verification, then send your brief directly to Plan A.",
  );
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileUnavailable, setTurnstileUnavailable] = useState(false);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);

  const resetTurnstile = useCallback(() => {
    setTurnstileToken("");
    if (window.turnstile && turnstileWidgetIdRef.current) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
    }
  }, []);

  const renderTurnstile = useCallback(() => {
    if (
      !turnstileSiteKey ||
      !window.turnstile ||
      !turnstileContainerRef.current ||
      turnstileWidgetIdRef.current
    ) {
      return;
    }

    turnstileWidgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
      sitekey: turnstileSiteKey,
      action: "plana_contact",
      theme: "dark",
      size: "flexible",
      callback: (token) => {
        setTurnstileToken(token);
        setTurnstileUnavailable(false);
        setSubmissionState("idle");
        setStatusMessage("Verification complete. Your event brief is ready to send.");
      },
      "expired-callback": () => {
        setTurnstileToken("");
        setStatusMessage("Verification expired. Please complete it again before sending.");
      },
      "error-callback": () => {
        setTurnstileToken("");
        setTurnstileUnavailable(true);
        setSubmissionState("error");
        setStatusMessage("Verification could not load. Check your connection and try again.");
      },
      "timeout-callback": resetTurnstile,
    });
  }, [resetTurnstile]);

  useEffect(() => {
    return () => {
      if (window.turnstile && turnstileWidgetIdRef.current) {
        window.turnstile.remove(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!turnstileToken) {
      setSubmissionState("error");
      setStatusMessage("Please complete the verification before sending your event brief.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmissionState("submitting");
    setStatusMessage("Sending your event brief to Plan A...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submissionId: crypto.randomUUID(),
          turnstileToken,
          website: formData.get("website"),
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          eventType: formData.get("eventType"),
          date: formData.get("date"),
          location: formData.get("location"),
          guests: formData.get("guests"),
          message: formData.get("message"),
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.message || "Your brief could not be sent. Please try again.");
      }

      form.reset();
      setSubmissionState("success");
      setStatusMessage(result?.message || "Thank you. Your event brief has been sent to Plan A.");
      resetTurnstile();
    } catch (error) {
      setSubmissionState("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Your brief could not be sent. Please try again.",
      );
      resetTurnstile();
    }
  }

  const cannotSubmit =
    submissionState === "submitting" || !turnstileToken || turnstileUnavailable;

  return (
    <>
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={renderTurnstile}
        onError={() => {
          setTurnstileUnavailable(true);
          setSubmissionState("error");
          setStatusMessage("Verification could not load. Check your connection and try again.");
        }}
      />
      <form
        className="event-form"
        onSubmit={handleSubmit}
        aria-describedby="form-note form-status"
        aria-busy={submissionState === "submitting"}
      >
        <label className="form-honeypot" aria-hidden="true">
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
        <div className="form-grid">
          <label>
            Your name
            <input name="name" autoComplete="name" maxLength={80} required />
          </label>
          <label>
            Email address
            <input name="email" type="email" autoComplete="email" maxLength={160} required />
          </label>
          <label>
            Phone number
            <input name="phone" type="tel" autoComplete="tel" maxLength={30} />
          </label>
          <label>
            Event type
            <select name="eventType" defaultValue="" required>
              <option value="" disabled>
                Select one
              </option>
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
            <input
              name="location"
              autoComplete="address-level2"
              placeholder="Colombo, Galle, Kandy..."
              maxLength={120}
              required
            />
          </label>
          <label>
            Estimated guests
            <input name="guests" inputMode="numeric" pattern="[0-9, ]*" maxLength={20} />
          </label>
        </div>
        <label>
          Tell us what you are planning
          <textarea
            name="message"
            rows={6}
            placeholder="Share the objective, audience, venue ideas, production needs or anything already decided."
            minLength={20}
            maxLength={2000}
            required
          />
        </label>
        <div className="turnstile-area">
          <div ref={turnstileContainerRef} className="turnstile-widget" />
          {!turnstileSiteKey ? (
            <p className="turnstile-config-error" role="alert">
              Verification is not configured. Please email info@plana.lk.
            </p>
          ) : null}
        </div>
        <button
          className="button button-primary form-submit"
          type="submit"
          disabled={cannotSubmit}
        >
          {submissionState === "submitting" ? (
            <>
              Sending <LoaderCircle className="loading-icon" aria-hidden="true" size={18} />
            </>
          ) : (
            <>
              Send event brief <ArrowUpRight aria-hidden="true" size={18} />
            </>
          )}
        </button>
        <p id="form-note" className="form-note">
          Protected by Cloudflare Turnstile. Your brief is emailed directly to Plan A and is not
          stored by this website.
        </p>
        <p
          id="form-status"
          className={`form-status is-${submissionState}`}
          role={submissionState === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {submissionState === "success" ? (
            <CheckCircle2 aria-hidden="true" size={18} />
          ) : null}
          {statusMessage}
        </p>
      </form>
    </>
  );
}
