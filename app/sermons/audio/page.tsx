import { prisma } from "prisma/lib/prisma";

export default async function AudioPage() {
  const sermons = await prisma.sermon.findMany({
    where: { mediaType: "AUDIO" },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="container py-12">
      <h1 className="text-3xl text-deep-blue font-bold mb-6">Audio Messages</h1>

      {sermons.map((sermon) => (
        <div key={sermon.id} className="mb-6">
          <h3 className="font-bold">{sermon.title}</h3>
          <audio controls className="w-full">
            <source src={sermon.mediaUrl} />
          </audio>
        </div>
      ))}
    </div>
  );
}
