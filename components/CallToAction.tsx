import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="mt-16">
      <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg shadow-black/70 max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-deep-green mb-4">
          Join Us This Sunday
        </h2>

        <p className="mt-4 text-lg text-green">
          Experience the Word, Worship, and the Power of God at SoBOM.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 bg-deep-green text-white px-8 py-3 font-semibold rounded hover:bg-gold hover:text-deep-green shadow-lg shadow-black/70 transition"
        >
          Plan Your Visit
        </Link>
      </div>
    </section>
  );
}
