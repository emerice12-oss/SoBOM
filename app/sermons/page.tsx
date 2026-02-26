import { prisma } from "prisma/lib/prisma";

const PAGE_SIZE = 6;

export default async function SermonsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; type?: string }>;
}) {
  const { page = "1", type } = await searchParams;

  const currentPage = parseInt(page);
  const skip = (currentPage - 1) * PAGE_SIZE;

  const where = type ? { mediaType: type as any } : {};

  const sermons = await prisma.sermon.findMany({
    where,
    skip,
    take: PAGE_SIZE,
    orderBy: { createdAt: "desc" },
  });

  const total = await prisma.sermon.count({ where });
  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <div className="container py-12 space-y-6">
      <h1 className="text-3xl text-deep-blue font-bold">Sermons</h1>

      <div className="flex gap-4">
        <a href="/sermons" className="underline shadow-lg shadow-black/70 bg-white hover:text-white hover:bg-deep-blue">All</a>
        <a href="/sermons?type=AUDIO" className="underline shadow-lg shadow-black/70 bg-white hover:text-white hover:bg-deep-blue">Audio</a>
        <a href="/sermons?type=VIDEO" className="underline shadow-lg shadow-black/70 bg-white hover:text-white hover:bg-deep-blue">Video</a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {sermons.map((sermon) => (
          <a
            key={sermon.id}
            href={`/sermons/${sermon.slug}`}
            className="border rounded p-4 hover:shadow"
          >
            <h3 className="font-bold">{sermon.title}</h3>
            <p className="text-sm text-gray-500">{sermon.mediaType}</p>
          </a>
        ))}
      </div>

      <div className="flex gap-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <a
            key={i}
            href={`/sermons?page=${i + 1}${type ? `&type=${type}` : ""}`}
            className="px-3 py-1 border rounded"
          >
            {i + 1}
          </a>
        ))}
      </div>
    </div>
  );
}
