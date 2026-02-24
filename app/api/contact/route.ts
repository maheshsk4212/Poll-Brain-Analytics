import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import sendgrid from "@sendgrid/mail";

export const runtime = "nodejs";
export const maxDuration = 10;
export const preferredRegion = ["bom1", "sin1"];

const payloadSchema = z.object({
  name: z.string().trim().min(2),
  designation: z.string().trim().min(2),
  constituency: z.string().trim().min(2),
  phone: z.string().trim().min(10),
  email: z.string().trim().email(),
  message: z.string().trim().min(10)
});

type ContactPayload = z.infer<typeof payloadSchema>;

const ipHits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const previous = ipHits.get(ip) ?? [];
  const recent = previous.filter((stamp) => stamp > windowStart);

  if (recent.length >= MAX_REQUESTS) {
    ipHits.set(ip, recent);
    return true;
  }

  recent.push(now);
  ipHits.set(ip, recent);
  return false;
}

function buildEmail(data: ContactPayload) {
  const to = process.env.CONTACT_TO_EMAIL ?? "contact@pollbrainanalytics.com";
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Poll Brain Analytics <noreply@pollbrainanalytics.com>";
  const subject = `New consultation request: ${data.name}`;

  const text = [
    "New contact form submission",
    "",
    `Name: ${data.name}`,
    `Designation: ${data.designation}`,
    `Constituency: ${data.constituency}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    "",
    "Message:",
    data.message
  ].join("\n");

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Designation:</strong> ${data.designation}</p>
    <p><strong>Constituency:</strong> ${data.constituency}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, "<br />")}</p>
  `;

  return { to, from, subject, text, html };
}

async function sendWithResend(data: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return false;
  }

  const resend = new Resend(apiKey);
  const email = buildEmail(data);

  await resend.emails.send({
    from: email.from,
    to: email.to,
    subject: email.subject,
    text: email.text,
    html: email.html,
    replyTo: data.email
  });

  return true;
}

async function sendWithSendGrid(data: ContactPayload) {
  const apiKey = process.env.SENDGRID_API_KEY;

  if (!apiKey) {
    return false;
  }

  sendgrid.setApiKey(apiKey);
  const email = buildEmail(data);

  await sendgrid.send({
    to: email.to,
    from: email.from,
    subject: email.subject,
    text: email.text,
    html: email.html,
    replyTo: data.email
  });

  return true;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again after 10 minutes." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = payloadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid form data." }, { status: 400 });
    }

    const data = parsed.data;

    const sentByResend = await sendWithResend(data);

    if (!sentByResend) {
      const sentBySendGrid = await sendWithSendGrid(data);

      if (!sentBySendGrid) {
        return NextResponse.json(
          { message: "Email provider is not configured. Please set RESEND_API_KEY or SENDGRID_API_KEY." },
          { status: 503 }
        );
      }
    }

    return NextResponse.json({ message: "Thank you. Our strategy team will reach out shortly." });
  } catch (error) {
    console.error("Contact form submission failed", error);
    return NextResponse.json({ message: "Unexpected error. Please try again." }, { status: 500 });
  }
}
