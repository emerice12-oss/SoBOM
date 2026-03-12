import { weeklyScripture } from "@/data/scripture";

export default function WeeklyScripture() {
  return (
    <section className="mt-16">
      <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg shadow-black/70 max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-deep-green">
          Scripture of the Week
        </h2>

        <p className="mt-6 text-xl text-green italic">
          “{weeklyScripture.text}”
        </p>

        <p className="text-deep-green mt-4 font-semibold">
          — {weeklyScripture.reference}
        </p>
      </div>
    </section>
  );
}
