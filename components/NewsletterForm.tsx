"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setMessage("Successfully subscribed 🎉");
      setEmail("");
    } else {
      setMessage("Email already subscribed");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full px-4 py-2 rounded text-black"
      />

      <button
        type="submit"
        className="bg-deep-blue text-white px-4 py-2 rounded hover:bg-black transition"
      >
        Subscribe
      </button>

      {message && (
        <p className="text-sm mt-2">{message}</p>
      )}
    </form>
  );
}
