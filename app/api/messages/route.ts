import { prisma } from "prisma/lib/prisma";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  await prisma.message.create({
    data: { name, email, message },
  });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
