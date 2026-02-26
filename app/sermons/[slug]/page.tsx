import { prisma } from "prisma/lib/prisma";
import { notFound } from "next/navigation";

export default async function SermonDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const sermon = await prisma.sermon.findUnique({
    where: { slug },
  });

  if (!sermon) return notFound();

  return (
    <div className="container py-12 space-y-6 text-deep-blue">
      <h1 className="text-3xl font-bold">{sermon.title}</h1>

      {sermon.mediaType === "VIDEO" ? (
        <iframe
          src={sermon.mediaUrl}
          className="w-full h-[400px]"
          allowFullScreen
        />
      ) : (
        <audio controls className="w-full">
          <source src={sermon.mediaUrl} />
        </audio>
      )}

      <p>{sermon.description}</p>
    </div>
  );
}
