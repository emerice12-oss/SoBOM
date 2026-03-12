import Image from "next/image";

export const metadata = {
  title: "Give | Showers of Blessing Outreach Ministry",
  description: "Support the work of God through Showers of Blessing Outreach Ministry",
};

export default function GivePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-deep-green">
          Give to Support the Work of God
        </h1>
        <p className="mt-4 text-lg text-green">
          Your giving helps us spread the Gospel, support missions, and serve our community.
        </p>
      </section>

      {/* Scripture */}
      <section className="mt-10 bg-white/30 backdrop-blur-md rounded-xl p-6 border-l-5 border-deep-green shadow-lg shadow-black/70">
        <p className="italic text-center text-green">
          “Give, and it shall be given unto you…” <strong className="text-deep-green">— Luke 6:38</strong>
        </p>
      </section>

      {/* Giving Options */}
      <section className="mt-12 grid md:grid-cols-2 gap-10">
        {/* Paystack */}
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg shadow-black/70">
          <h2 className="text-2xl font-semibold text-deep-green">
            Give Online (Paystack)
          </h2>
          <p className="mt-3 text-green">
            Secure online giving for Ghana and Africa (Cards & Mobile Money).
          </p>

          <a
            href="https://paystack.com/pay/YOUR-PAYSTACK-LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-deep-green text-white px-6 py-3 font-semibold rounded hover:bg-gold hover:text-deep-green shadow-lg shadow-black/70 transition"
          >
            Give Now
          </a>
        </div>

        {/* Bank / Mobile Money */}
        <div className="border border-gold bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg shadow-black/70">
          <h2 className="text-2xl font-semibold text-deep-green">
            Bank / Mobile Money
          </h2>
          <ul className="mt-4 space-y-2 text-green">
            <li><strong className="text-deep-green">Bank:</strong> Your Bank Name</li>
            <li><strong className="text-deep-green">Account Name:</strong> Showers of Blessing Outreach Ministry</li>
            <li><strong className="text-deep-green">Account Number:</strong> XXXXXXXX</li>
            <li><strong className="text-deep-green">MoMo Name:</strong> Ayopå Online Shop</li>
            <li><strong className="text-deep-green">Mobile Money:</strong> 0598870883</li>
          </ul>
        </div>
      </section>

      {/* Trust Note */}
      <section className="mt-12 text-center text-md text-red">
        <p>
          All donations are used solely for ministry purposes.  
          Thank you for partnering with us.
        </p>
      </section>
    </main>
  );
}
