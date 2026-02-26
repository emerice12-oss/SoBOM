import { prayerRequests } from "@/data/prayers";
import PrayerForm from "../../components/PrayerForm";

export const metadata = {
  title: "Prayer Requests | SoBOM",
};

export default function PrayersPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-deep-blue mb-12">
        Prayer Requests
      </h1>

      <p className="mb-10 text-lg text-blue">
        We stand with you in faith. Submit your prayer request and our
        intercessory team will pray with you.
      </p>

      <div className="grid md:grid-cols-2 gap-8 ">
        {prayerRequests.map((item, index) => (
          <div
            key={index}
            className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg shadow-black/70"
          >
            <h2 className="text-xl font-semibold text-deep-blue">
              {item.title}
            </h2>
            <p className="mt-3 text-blue">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Client form component */}
      <PrayerForm />
    </main>
  );
}
