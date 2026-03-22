import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';

const SUBMISSIONS_FILE = path.join(process.cwd(), 'submissions.json');

// Stricter in-memory rate limiter: max 2 submissions per IP per 1 hour (3,600,000 ms)
const requestCounts = new Map<string, number[]>();

function normalizeFromAddress(rawFrom: string | undefined, fallbackEmail: string): string {
  if (!rawFrom) return fallbackEmail;

  const value = rawFrom.trim();
  if (!value) return fallbackEmail;

  // Already in RFC-like format: Name <email@domain.com>
  if (value.includes('<') && value.includes('>')) return value;

  // Pure email address
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return value;

  // Gracefully handle "Name email@domain.com" from env providers/UI
  const nameAndEmail = value.match(/^(.*)\s+([^\s@]+@[^\s@]+\.[^\s@]+)$/);
  if (nameAndEmail) {
    const name = nameAndEmail[1].trim();
    const email = nameAndEmail[2].trim();
    return `${name} <${email}>`;
  }

  return fallbackEmail;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  // Filter out requests older than 1 hour (3,600,000 ms)
  const times = (requestCounts.get(ip) ?? []).filter((t) => now - t < 3_600_000);
  if (times.length >= 2) return true;
  times.push(now);
  requestCounts.set(ip, times);
  return false;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const { firstName, lastName, email, program, message, honeypot } = body as Record<
    string,
    string
  >;

  // Honeypot check - if a bot filled this out, act like it succeeded but do nothing.
  if (honeypot) {
    return NextResponse.json({
      success: true,
      message: "Thanks for reaching out! We'll get back to you shortly.",
    });
  }

  // Validate required fields
  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { success: false, message: 'Please fill in all required fields.' },
      { status: 400 }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, message: 'Please enter a valid email address.' },
      { status: 400 }
    );
  }

  // Sanitize
  const submission = {
    id: Date.now(),
    firstName: firstName.trim().substring(0, 100),
    lastName: lastName.trim().substring(0, 100),
    email: email.trim().substring(0, 200),
    program: (program || 'Not specified').trim().substring(0, 100),
    message: message.trim().substring(0, 2_000),
    submittedAt: new Date().toISOString(),
  };

  // Persist to JSON file
  try {
    let submissions: unknown[] = [];
    if (fs.existsSync(SUBMISSIONS_FILE)) {
      try {
        submissions = JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, 'utf8'));
      } catch {
        submissions = [];
      }
    }
    submissions.push(submission);
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
  } catch {
    // non-fatal — continue and still send email
  }

  // Send email if configured
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  if (emailUser && emailPass) {
    try {
      const nodemailer = await import('nodemailer');
      const smtpAuthUser = process.env.SMTP_AUTH_USER || emailUser;
      const smtpHost = process.env.SMTP_HOST || 'smtp.zoho.com';
      const smtpPort = Number(process.env.SMTP_PORT || 465);
      const smtpSecure = (process.env.SMTP_SECURE || 'true').toLowerCase() === 'true';

      const transporter = nodemailer.default.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: { user: smtpAuthUser, pass: emailPass },
        connectionTimeout: 20_000,
        greetingTimeout: 20_000,
        socketTimeout: 30_000,
      });

      const emailTo = process.env.EMAIL_TO || emailUser;
      const emailFrom = normalizeFromAddress(process.env.EMAIL_FROM, emailUser);
      const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
      const safeFirstName = escapeHtml(submission.firstName);
      const safeLastName = escapeHtml(submission.lastName);
      const safeEmail = escapeHtml(submission.email);
      const safeProgram = escapeHtml(submission.program);
      const safeMessageHtml = escapeHtml(submission.message).replace(/\n/g, '<br>');

      try {
        await transporter.sendMail({
          from: emailFrom,
          to: emailTo,
          replyTo: submission.email,
          subject: `New Inquiry from ${submission.firstName} ${submission.lastName}`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e2e8f0;border-radius:12px;">
              <h2 style="color:#0D9488;margin:0 0 16px;">New Contact Submission</h2>
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:8px 0;color:#64748b;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;">${safeFirstName} ${safeLastName}</td></tr>
                <tr><td style="padding:8px 0;color:#64748b;">Email</td><td style="padding:8px 0;"><a href="mailto:${safeEmail}" style="color:#0D9488;">${safeEmail}</a></td></tr>
                <tr><td style="padding:8px 0;color:#64748b;">Interested In</td><td style="padding:8px 0;">${safeProgram}</td></tr>
              </table>
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;">
              <p style="color:#64748b;font-size:13px;margin:0 0 8px;">Message:</p>
              <p style="margin:0;line-height:1.6;">${safeMessageHtml}</p>
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;">
              <p style="color:#94a3b8;font-size:11px;margin:0;">Submitted on ${submittedAt} IST via aymorix.com</p>
            </div>`,
          text: `New inquiry from ${submission.firstName} ${submission.lastName}\nEmail: ${submission.email}\nInterested In: ${submission.program}\n\n${submission.message}`,
        });
      } catch (error) {
        console.error('Admin contact email send failed:', error);
      }

      try {
        await transporter.sendMail({
          from: emailFrom,
          to: submission.email,
          replyTo: emailTo,
          subject: 'We received your inquiry - Aymorix',
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e2e8f0;border-radius:12px;">
              <h2 style="color:#0D9488;margin:0 0 12px;">Thanks for contacting Aymorix</h2>
              <p style="margin:0 0 12px;line-height:1.6;color:#0f172a;">Hi ${safeFirstName}, we have received your inquiry and our team will get back to you shortly.</p>
              <p style="margin:0 0 16px;line-height:1.6;color:#334155;">Here is a copy of what you submitted:</p>
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px;">
                <p style="margin:0 0 8px;"><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
                <p style="margin:0 0 8px;"><strong>Email:</strong> ${safeEmail}</p>
                <p style="margin:0 0 8px;"><strong>Interested In:</strong> ${safeProgram}</p>
                <p style="margin:0 0 6px;"><strong>Message:</strong></p>
                <p style="margin:0;line-height:1.6;color:#334155;">${safeMessageHtml}</p>
              </div>
              <p style="margin:16px 0 0;line-height:1.6;color:#64748b;font-size:12px;">Submitted on ${submittedAt} IST</p>
            </div>`,
          text: `Hi ${submission.firstName},\n\nThanks for contacting Aymorix. We have received your inquiry and will get back to you shortly.\n\nSubmitted details:\nName: ${submission.firstName} ${submission.lastName}\nEmail: ${submission.email}\nInterested In: ${submission.program}\nMessage: ${submission.message}`,
        });
      } catch (error) {
        console.error('Acknowledgement email send failed:', error);
      }
    } catch (error) {
      // Email configuration/import failed — submission is already saved, don't block the response
      console.error('Contact email initialization failed:', error);
    }
  }

  return NextResponse.json({
    success: true,
    message: "Thanks for reaching out! We'll get back to you shortly.",
  });
}
