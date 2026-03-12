import { prisma } from "prisma/lib/prisma";
import { revalidatePath } from "next/cache";

export const dynamic = 'force-dynamic';

export default async function AdminSermons() {
  const sermons = await prisma.sermon.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  async function createSermon(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const preacher = formData.get("preacher") as string;
    const description = formData.get("description") as string;
    const mediaUrl = formData.get("mediaUrl") as string;
    const mediaType = formData.get("mediaType") as "AUDIO" | "VIDEO";

    const slug = title.toLowerCase().replace(/\s+/g, "-");

    await prisma.sermon.create({
      data: {
        title,
        slug,
        preacher,
        description,
        mediaUrl,
        mediaType,
      },
    });

    revalidatePath("/sermons");
  }

  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold">Upload Sermon</h1>

      <form action={createSermon} className="space-y-4 max-w-lg">
        <input name="title" placeholder="Title" required className="input" />
        <textarea name="description" placeholder="Description" className="input" />
        <input name="mediaUrl" placeholder="YouTube or Audio URL" required className="input" />

        <select name="mediaType" className="input">
          <option value="VIDEO">Video</option>
          <option value="AUDIO">Audio</option>
        </select>

        <button className="bg-gold px-4 py-2 rounded text-white">
          Upload
        </button>
      </form>

      <div>
        <h2 className="text-xl font-semibold">Existing Sermons</h2>
        {sermons.map((sermon) => (
          <div key={sermon.id} className="border p-3 rounded my-2">
            {sermon.title} ({sermon.mediaType})
          </div>
        ))}
      </div>
    </div>
  );
}
