import { NextResponse } from "next/server";
import { prisma } from "prisma/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email required" },
        { status: 400 }
      );
    }

    const subscriber = await prisma.subscriber.create({
      data: { email },
    });

    return NextResponse.json(subscriber);
  } catch (error) {
    return NextResponse.json(
      { error: "Email already subscribed" },
      { status: 400 }
    );
  }
}
