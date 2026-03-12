import { prisma } from "prisma/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function ArchivePage() {
  const sermons = await prisma.sermon.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="container py-12">
      <h1 className="text-3xl text-deep-green font-bold mb-6">Sermon Archive</h1>

      <ul className="space-y-3">
        {sermons.map((sermon) => (
          <li key={sermon.id}>
            <a href={`/sermons/${sermon.slug}`} className="underline">
              {sermon.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
