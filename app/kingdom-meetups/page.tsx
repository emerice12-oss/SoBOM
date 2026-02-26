import Link from "next/link";

export const metadata = {
  title: "Kingdom Meetups (KM) | SoBOM",
};

export default function KingdomMeetupsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-deep-blue mb-6">
        Kingdom Meetups (KM)
      </h1>
      <p className="text-lg text-blue">
        Kingdom Meetups is a gathering focused on fellowship,
        discipleship, and spiritual growth.
      </p>

      <p></p>

      <Link
        href="events/calendar"
        className="inline-block mt-6 bg-deep-blue text-white px-8 py-3 font-semibold rounded hover:bg-gold hover:text-deep-blue shadow-lg shadow-black/70 transition"
      >
        See Our Next Meetings
      </Link>
    </main>
  );
}
