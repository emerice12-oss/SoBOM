import { siteInfo } from "../../data/site";

export const metadata = {
  title: "Contact Us | Showers of Blessing Outreach Ministry",
  description: "Get in touch with Showers of Blessing Outreach Ministry. Find our contact information, service times, and location.",
};

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-deep-green mb-8">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info + Service Times */}
        <section className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg shadow-black/70">
          <h2 className="text-2xl text-deep-green font-semibold mb-4">
            Meeting Times (Virtually)
          </h2>

          <ul className="space-y-2 text-green">
            <li><strong className="text-deep-green">Sunday Services:</strong> Power In The Mid-Night 12 - 1 PM</li>
            <li><strong className="text-deep-green">Midweek Services:</strong> Power In The Mid-Night 12 - 1 PM</li>
            <li><strong className="text-deep-green">Friday Services:</strong> Power In The Mid-Night 12 - 1 PM</li>
          </ul>

          <h2 className="text-2xl text-deep-green font-semibold mt-8 mb-4">
            Meeting Times (In-Person)
          </h2>

          <p className="text-green">
            Every first or second week of the Month, (it depends on the schedules.) Three day in the week, Friday to Sunday 6 - 9 PM, at the Dispensational Gospel Mission's Temple (DGM).
          </p>

          <h2 className="text-2xl text-deep-green font-semibold mt-8 mb-4">
            Get in Touch
          </h2>

          <p className="text-green">
            <strong className="text-deep-green">Email:</strong> sobom.kingdom@gmail.com</p>
          <p className="text-green"><strong className="text-deep-green">Phone:</strong> +233 XX XXX XXXX</p>
          <p className="mt-2 text-green">
            <strong className="text-deep-green">Address:</strong><br />
            Showers of Blessing Outreach Ministry<br />
            This is an Outreach Ministry
          </p>
          
        </section>

        {/* Contact Form */}
        <section className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-gold shadow-lg shadow-black/70">
          <h2 className="text-2xl text-deep-green font-semibold mb-4">
            Send Us a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border border-green p-3 rounded bg-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full border border-green p-3 rounded bg-white"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="w-full border border-green p-3 rounded bg-white"
            />

            <button
              type="submit"
              className="bg-deep-green text-white px-6 py-3 font-semibold rounded hover:bg-gold hover:text-deep-green shadow-lg shadow-black/70 transition"
            >
              Send Message
            </button>
          </form>

          <p className="text-sm text-blue mt-3">
            We’ll respond as soon as possible.
          </p>
        </section>
      </div>

      {/* Map */}
      <section className="mt-16">
        <h2 className="text-2xl text-deep-green font-semibold mb-4">
          Find Us
        </h2>

        <iframe
          src="https://www.google.com/maps?q=Showers%20of%20Blessing%20Church&output=embed"
          className="w-full h-96 border border-green rounded shadow-lg shadow-black/70"
          loading="lazy"
        />
      </section>
    </main>
  );
}
