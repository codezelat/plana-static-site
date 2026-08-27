const MAX_BODY_BYTES = 25_000;
const TURNSTILE_TIMEOUT_MS = 8_000;
const RESEND_TIMEOUT_MS = 10_000;
const DEFAULT_ALLOWED_HOSTNAMES = ["plana.lk", "www.plana.lk", "localhost", "127.0.0.1"];
const EVENT_TYPES = new Set([
  "Corporate event",
  "Conference or MICE programme",
  "Convocation or awards ceremony",
  "Wedding or private celebration",
  "Product launch or brand activation",
  "Event production",
  "Something else",
]);

type ContactPayload = {
  submissionId: string;
  turnstileToken: string;
  website: string;
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  location: string;
  guests: string;
  message: string;
};

type TurnstileResult = {
  success?: boolean;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
};

function json(message: string, status: number, extra: Record<string, unknown> = {}) {
  return Response.json(
    { message, ...extra },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    },
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function textField(record: Record<string, unknown>, key: string) {
  const value = record[key];
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

function isValidDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value;
}

function allowedHostnames() {
  const configured = process.env.TURNSTILE_ALLOWED_HOSTNAMES?.split(",")
    .map((hostname) => hostname.trim().toLowerCase())
    .filter(Boolean);
  return new Set(configured?.length ? configured : DEFAULT_ALLOWED_HOSTNAMES);
}

function requestIp(request: Request) {
  return (
    request.headers.get("cf-connecting-ip")?.trim() ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    ""
  );
}

async function fetchWithTimeout(url: string, init: RequestInit, timeoutMs: number) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

async function verifyTurnstile(
  secret: string,
  token: string,
  ip: string,
  idempotencyKey: string,
) {
  const formData = new FormData();
  formData.set("secret", secret);
  formData.set("response", token);
  formData.set("idempotency_key", idempotencyKey);
  if (ip) formData.set("remoteip", ip);

  let lastError: unknown;

  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const response = await fetchWithTimeout(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        { method: "POST", body: formData, cache: "no-store" },
        TURNSTILE_TIMEOUT_MS,
      );

      if (!response.ok) {
        if (response.status >= 500 && attempt === 0) continue;
        throw new Error(`Turnstile returned HTTP ${response.status}`);
      }

      return (await response.json()) as TurnstileResult;
    } catch (error) {
      lastError = error;
      if (attempt === 1) break;
    }
  }

  throw lastError instanceof Error ? lastError : new Error("Turnstile verification failed");
}

function validatePayload(record: Record<string, unknown>) {
  const payload: ContactPayload = {
    submissionId: textField(record, "submissionId"),
    turnstileToken: textField(record, "turnstileToken"),
    website: textField(record, "website"),
    name: textField(record, "name"),
    email: textField(record, "email").toLowerCase(),
    phone: textField(record, "phone"),
    eventType: textField(record, "eventType"),
    date: textField(record, "date"),
    location: textField(record, "location"),
    guests: textField(record, "guests"),
    message: textField(record, "message"),
  };

  if (payload.website) return { payload, honeypot: true as const };

  const invalid =
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      payload.submissionId,
    ) ||
    payload.turnstileToken.length < 1 ||
    payload.turnstileToken.length > 2048 ||
    payload.name.length < 2 ||
    payload.name.length > 80 ||
    payload.email.length > 160 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) ||
    payload.phone.length > 30 ||
    (payload.phone.length > 0 && !/^[0-9+().\-\s]+$/.test(payload.phone)) ||
    !EVENT_TYPES.has(payload.eventType) ||
    (payload.date.length > 0 && !isValidDate(payload.date)) ||
    payload.location.length < 2 ||
    payload.location.length > 120 ||
    payload.guests.length > 20 ||
    (payload.guests.length > 0 && !/^[0-9,\s]+$/.test(payload.guests)) ||
    payload.message.length < 20 ||
    payload.message.length > 2000;

  return invalid ? null : { payload, honeypot: false as const };
}

function emailContent(payload: ContactPayload) {
  const fields = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Phone", payload.phone || "Not provided"],
    ["Event type", payload.eventType],
    ["Tentative date", payload.date || "Not provided"],
    ["Location", payload.location],
    ["Estimated guests", payload.guests || "Not provided"],
  ];
  const submittedAt = new Date().toISOString();
  const plainFields = fields.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlFields = fields
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:8px 16px 8px 0;color:#738093;font-weight:600;vertical-align:top">${escapeHtml(label)}</th><td style="padding:8px 0;color:#102033">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return {
    subject: `New ${payload.eventType} brief from ${payload.name}`,
    text: `A new event brief was submitted through plana.lk.\n\n${plainFields}\n\nEvent brief:\n${payload.message}\n\nSubmitted: ${submittedAt}\nSubmission ID: ${payload.submissionId}`,
    html: `<!doctype html><html><body style="margin:0;background:#f3f6f8;font-family:Arial,sans-serif;color:#102033"><div style="max-width:680px;margin:0 auto;padding:32px 20px"><div style="background:#061729;border-radius:12px 12px 0 0;padding:24px 28px;color:#ffffff"><p style="margin:0 0 8px;color:#29c5ee;font-size:12px;letter-spacing:2px;text-transform:uppercase">Plan A event brief</p><h1 style="margin:0;font-size:25px;line-height:1.25">New enquiry from ${escapeHtml(payload.name)}</h1></div><div style="background:#ffffff;border:1px solid #dbe2e8;border-top:0;padding:24px 28px"><table role="presentation" style="width:100%;border-collapse:collapse">${htmlFields}</table><h2 style="margin:28px 0 10px;font-size:18px">Event brief</h2><p style="margin:0;white-space:pre-wrap;line-height:1.65;color:#344458">${escapeHtml(payload.message)}</p><hr style="margin:28px 0 16px;border:0;border-top:1px solid #e3e8ed"><p style="margin:0;color:#738093;font-size:12px;line-height:1.6">Submitted ${escapeHtml(submittedAt)}<br>Submission ID: ${escapeHtml(payload.submissionId)}</p></div></div></body></html>`,
  };
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.startsWith("application/json")) {
    return json("Please submit the form in the expected format.", 415);
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return json("This event brief is too large to process.", 413);
  }

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return json("This event brief is too large to process.", 413);
    }
    body = JSON.parse(rawBody);
  } catch {
    return json("Please check the form and try again.", 400);
  }

  if (!isRecord(body)) return json("Please check the form and try again.", 400);

  const validated = validatePayload(body);
  if (!validated) return json("Please check every field and try again.", 400);

  if (validated.honeypot) {
    return json("Thank you. Your event brief has been sent to Plan A.", 200, { ok: true });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (!resendApiKey || !turnstileSecret) {
    console.error("Contact form is missing required server configuration");
    return json("The contact form is temporarily unavailable. Please email info@plana.lk.", 503);
  }

  const allowed = allowedHostnames();
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (!allowed.has(new URL(origin).hostname.toLowerCase())) {
        return json("This form submission was not accepted.", 403);
      }
    } catch {
      return json("This form submission was not accepted.", 403);
    }
  }

  const { payload } = validated;
  let verification: TurnstileResult;
  try {
    verification = await verifyTurnstile(
      turnstileSecret,
      payload.turnstileToken,
      requestIp(request),
      payload.submissionId,
    );
  } catch (error) {
    console.error("Turnstile verification service error", error instanceof Error ? error.message : error);
    return json("Verification is temporarily unavailable. Please try again.", 502);
  }

  const expectedAction = process.env.TURNSTILE_EXPECTED_ACTION?.trim() || "plana_contact";
  const verifiedHostname = verification.hostname?.toLowerCase() ?? "";
  if (
    !verification.success ||
    verification.action !== expectedAction ||
    !allowed.has(verifiedHostname)
  ) {
    console.warn("Turnstile rejected contact form", {
      action: verification.action,
      hostname: verification.hostname,
      errorCodes: verification["error-codes"],
    });
    return json("Verification failed or expired. Please complete it again.", 400);
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || "notifications@plana.lk";
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || "info@plana.lk";
  const content = emailContent(payload);

  try {
    const response = await fetchWithTimeout(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
          "Idempotency-Key": `plana-contact-${payload.submissionId}`,
        },
        body: JSON.stringify({
          from: `Plan A Notifications <${fromEmail}>`,
          to: [toEmail],
          reply_to: payload.email,
          subject: content.subject,
          text: content.text,
          html: content.html,
        }),
        cache: "no-store",
      },
      RESEND_TIMEOUT_MS,
    );

    const result = (await response.json().catch(() => null)) as
      | { id?: string; message?: string; name?: string }
      | null;

    if (!response.ok || !result?.id) {
      console.error("Resend rejected contact email", {
        status: response.status,
        name: result?.name,
        message: result?.message,
      });
      return json("Your brief could not be sent. Please try again or email info@plana.lk.", 502);
    }
  } catch (error) {
    console.error("Resend delivery service error", error instanceof Error ? error.message : error);
    return json("Your brief could not be sent. Please try again or email info@plana.lk.", 502);
  }

  return json("Thank you. Your event brief has been sent to Plan A.", 200, { ok: true });
}
