import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "prisma/lib/prisma";

const requestMap = new Map<string, number>();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name || "");
    const email = String(body.email || "");
    const message = String(body.message || "");
    const website = String(body.website || "");

    const ip =
      req.headers.get("x-forwarded-for") || "unknown";

    const lastRequest = requestMap.get(ip) || 0;
    const now = Date.now();

    if (now - lastRequest < 10000) {
      return NextResponse.json(
        { error: "Too many requests. Please wait." },
        { status: 429 }
      );
    }

    requestMap.set(ip, now);

    if (!name || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // 🚫 Honeypot trap
    if (website) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // Validation
    if (name.length < 2 || message.length < 10) {
      return NextResponse.json(
        { error: "Please provide valid information." },
        { status: 400 }
      );
    }

    // Save to database
    await prisma.testimony.create({
      data: {
        name,
        email,
        message,
      },
    });

    // Email tranporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send to church
    await transporter.sendMail({
      from: `"SoBOM Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Testimony Submission",
      html: `
        <h2>New Testimony</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send confirmation email to the person
    await transporter.sendMail({
      from: `"Showers of Blessing Outreach Ministry" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Testimony Has Been Received 🙏",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for sharing your testimony with us.</p>
        <p>Your message may be reviewed before being published.</p>
        <p>May God continue to bless you.</p>
        <p>— SoBOM Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
