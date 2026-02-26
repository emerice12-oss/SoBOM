"use client";

import { useState } from "react";

export default function PrayerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    request: "",
  });

  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    request: formData.get("request"),
    website: formData.get("website"), // honeypot
  };

  const res = await fetch("/api/prayer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  setStatus(res.ok ? "Submitted successfully 🙏" : data.error);
}

  return (
    <div className="mt-16 bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg shadow-black/70">
      <h2 className="text-2xl font-bold text-deep-blue mb-6">
        Submit a Prayer Request
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="website"
          autoComplete="off"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full p-3 border border-blue rounded text-black bg-white"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full p-3 border border-blue rounded text-black bg-white"
          required
        />

        <input
          name="name"
          type="text"
          autoComplete="off"
          className="hidden"
        />

        <textarea
          placeholder="Your Prayer Request"
          value={form.request}
          onChange={(e) =>
            setForm({ ...form, request: e.target.value })
          }
          className="w-full p-3 border border-blue rounded text-black bg-white"
          rows={4}
          required
        />

        <button
          type="submit"
          className="bg-deep-blue text-white px-6 py-3 rounded font-semibold hover:bg-gold hover:text-deep-blue shadow-lg shadow-black/70 transition"
        >
          Submit
        </button>
      </form>

      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
