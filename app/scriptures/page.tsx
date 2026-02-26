import { scriptures } from "@/data/scriptures";

export default function ScripturesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-deep-blue mb-12">
        Scriptures
      </h1>

      <div className="space-y-8 text-blue">
        {scriptures.map((item, index) => (
          <div
            key={index}
            className="bg-white/30 backdrop-blur-md rounded-xl p-6 border-l-4 border-gold shadow-lg shadow-black/70"
          >
            <h2 className="font-bold text-deep-blue">
              {item.reference}
            </h2>
            <p className="mt-3 italic">{item.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
