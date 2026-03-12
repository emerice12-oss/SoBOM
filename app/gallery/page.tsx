import Image from "next/image";

export default function GalleryPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-deep-green mb-12">
        Church Gallery
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-green">
        <Image src="/images/gallery.jpg" alt="Gallery" width={500} height={400} />
        <Image src="/images/gallery.jpg" alt="Gallery" width={500} height={400} />
        <Image src="/images/gallery.jpg" alt="Gallery" width={500} height={400} />
      </div>
    </main>
  );
}
