import { NextResponse } from "next/server";
import { prisma } from "prisma/lib/prisma";
import nodemailer from "nodemailer";

const requestMap = new Map<string, number>();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name || "");
    const email = String(body.email || "");
    const prayerRequest = String(body.request || "");
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

    if (!name || !email || !prayerRequest) {
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
    if (name.length < 2 || prayerRequest.length < 10) {
      return NextResponse.json(
        { error: "Please provide valid information." },
        { status: 400 }
      );
    }

    // Save to database
    await prisma.prayer.create({
      data: {
        name,
        email,
        request: prayerRequest,
      },
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"SoBOM Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Prayer Request Submission",
      html: `
        <h2>New Prayer Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Prayer Request:</strong></p>
        <p>${prayerRequest}</p>
      `,
    });

    // Send confirmation email to the person
    await transporter.sendMail({
      from: `"Showers of Blessing Outreach Ministry" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We Received Your Prayer Request 🙏",
      html: `
        <div style="font-family: Arial; line-height: 1.6;">
          <h2 style="color:#0b1f3a;">Showers of Blessing Outreach Ministry</h2>
          <p>Dear ${name},</p>

          <p>We have received your prayer request and our intercessory team will stand with you in faith.</p>

          <p><strong>Your Request:</strong></p>
          <p style="background:#f4f4f4;padding:10px;border-radius:6px;">
            ${prayerRequest}
          </p>

          <p>May the Lord bless you and keep you.</p>

          <p>— SoBOM Team</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send prayer request." },
      { status: 500 }
    );
  }
}
