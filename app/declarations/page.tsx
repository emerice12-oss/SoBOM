import { declarations } from "@/data/declarations";

export default function DeclarationsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-deep-blue mb-12">
        Faith Declarations
      </h1>

      <div className="space-y-6 text-blue">
        {declarations.map((item, index) => (
          <p
            key={index}
            className="text-2xl font-semibold"
          >
            {item}
          </p>
        ))}
      </div>
    </main>
  );
}
