import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';

const SUBMISSIONS_FILE = path.join(process.cwd(), 'submissions.json');

// Simple in-memory rate limiter: max 5 submissions per IP per minute
const requestCounts = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const times = (requestCounts.get(ip) ?? []).filter((t) => now - t < 60_000);
  if (times.length >= 5) return true;
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

  const { firstName, lastName, email, program, message } = body as Record<
    string,
    string
  >;

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
  if (emailUser && emailPass && emailUser !== 'your-email@gmail.com') {
    try {
      const nodemailer = await import('nodemailer');
      const transporter = nodemailer.default.createTransport({
        service: 'gmail',
        auth: { user: emailUser, pass: emailPass },
      });

      await transporter.sendMail({
        from: emailUser,
        to: process.env.EMAIL_TO || emailUser,
        replyTo: submission.email,
        subject: `New Inquiry from ${submission.firstName} ${submission.lastName}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e2e8f0;border-radius:12px;">
            <h2 style="color:#0D9488;margin:0 0 16px;">New Contact Submission</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#64748b;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;">${submission.firstName} ${submission.lastName}</td></tr>
              <tr><td style="padding:8px 0;color:#64748b;">Email</td><td style="padding:8px 0;"><a href="mailto:${submission.email}" style="color:#0D9488;">${submission.email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#64748b;">Interested In</td><td style="padding:8px 0;">${submission.program}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;">
            <p style="color:#64748b;font-size:13px;margin:0 0 8px;">Message:</p>
            <p style="margin:0;line-height:1.6;">${submission.message.replace(/\n/g, '<br>')}</p>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;">
            <p style="color:#94a3b8;font-size:11px;margin:0;">Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST via aymorix.com</p>
          </div>`,
        text: `New inquiry from ${submission.firstName} ${submission.lastName}\nEmail: ${submission.email}\nInterested In: ${submission.program}\n\n${submission.message}`,
      });
    } catch {
      // Email failed — submission is already saved, don't block the response
    }
  }

  return NextResponse.json({
    success: true,
    message: "Thanks for reaching out! We'll get back to you shortly.",
  });
}
