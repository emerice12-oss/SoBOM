import { events } from "../../data/events";

export const metadata = {
  title: "Events | Showers of Blessing Outreach Ministry",
  description: "Discover upcoming events and service times at Showers of Blessing Outreach Ministry.",
};

export default function EventsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-deep-blue mb-8">
        Church Events
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white/30 backdrop-blur-md rounded-xl p-6 hover:shadow-md shadow-lg shadow-black/70 transition"
          >
            <h2 className="text-2xl text-deep-blue font-semibold">
              {event.title}
            </h2>

            <p className="mt-2 text-blue">
              <strong>Date:</strong> {event.date}
            </p>

            <p className="mt-1 text-blue">
              <strong>Location:</strong> {event.location}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
