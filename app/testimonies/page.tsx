import { testimonies } from "@/data/testimonies";
import TestimonyForm from "../../components/TestimonyForm";

export const metadata = {
  title: "Testimonies | SoBOM",
};

export default function TestimoniesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-deep-green mb-12">
        Testimonies
      </h1>

      <div className="space-y-8">
        {testimonies.map((item, index) => (
          <div
            key={index}
            className="bg-white/30 backdrop-blur-md rounded-xl p-6 border-l-5 border-deep-green shadow-lg shadow-black/70"
          >
            <p className="text-lg text-green italic">"{item.message}"</p>
            <p className="mt-4 font-semibold text-deep-green">
              — {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* Client form component */}
      <TestimonyForm />
    </main>
  );
}
