import { prisma } from "prisma/lib/prisma";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return new Response(JSON.stringify({ error: "Email is required" }), {
      status: 400,
    });
  }

  // Check for duplicates
  const exists = await prisma.subscriber.findUnique({ where: { email } });
  if (exists) {
    return new Response(JSON.stringify({ error: "Email already subscribed" }), {
      status: 400,
    });
  }

  await prisma.subscriber.create({ data: { email } });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
