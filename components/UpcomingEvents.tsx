import { events } from "@/data/events";

export default function UpcomingEvents() {
  return (
    <section className="mt-16">
      <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg shadow-black/70 max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-deep-blue mb-8 text-center">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div key={index} className="border border-deep-blue p-6 rounded">
              <h3 className="text-xl text-deep-blue font-semibold">{event.title}</h3>
              <p className="mt-2 text-blue italic">{event.date}</p>
              <p className="text-sm text-blue opacity-90">{event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
