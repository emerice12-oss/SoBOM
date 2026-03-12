"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");

  async function handleMessageSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setName("");
      setEmail("");
      setMessage("");
      setSuccess(true);
    }
  }

  async function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNewsletterError("");

    const res = await fetch("/api/subscribers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: newsletterEmail }),
    });

    if (res.ok) {
      setNewsletterEmail("");
      setNewsletterSuccess(true);
    } else {
      const data = await res.json();
      setNewsletterError(data.error || "Subscription failed");
    }
  }

  return (
    <footer className="mt-15">

      {/* ================= TOP SECTION ================= */}
      <div className="px-1 py-1  bg-green border-t-20 border-gold">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">

        <div className="p-6">
          <p className="text-white">
            Showers of Blessing Outreach Ministry - Meeting area: <strong className="italic text-gold">
            Akyem Asuom, DGM Temple.</strong>
          </p>
          <p className="mt-4 text-white">
            Showers of Blessing Outreach Ministry - Virtual Meeting Links: <strong className="italic text-gold">
            https://call.whatsapp.com/voice/acToUVEzf5re0rfjJ2I5DV;
            https://meet.google.com/eoo-mieh-mkj;
            https//wacren.zoom.us/j/63502774590?pwd=PdQMQrukLi-T18Hecpxrah9d5Ylr9RB.1</strong>
          </p>
          <p className="mt-4 text-white">
            Showers of Blessing Outreach Ministry - Contact Email and General Informations: <strong className="italic text-gold">sobom.kingdom@gmail.com</strong>
            </p>
          <p className="mt-4 text-white">
            Phone: <strong className="italic text-gold">+233 59 887 0883</strong>
          </p>
        </div>

        {/* Write to Us */}
        <div className="p-6">
          <h3 className="text-gold font-bold mb-2">WRITE TO US</h3>
          <form onSubmit={handleMessageSubmit} className="space-y-2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded border border-white bg-gray"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded border border-white bg-gray"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 rounded border border-white bg-gray"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-gold text-deep-green px-4 py-2 rounded hover:text-white shadow-lg shadow-black/30 transition"
            >
              Submit
            </button>
            {success && (
              <p className="text-green-600 mt-1">
                Message submitted successfully!
              </p>
            )}
          </form>
        </div>

        {/* Social Media */}
        <div>
        <div className="p-6 transition-all duration-300">
          <h3 className="text-gold font-bold text-lg mb-3">
            FOLLOW US ON OUR HANDLES
          </h3>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-gold transition"
            >
              <FaFacebookF className="text-red text-lg" />
            </a>

            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-gold transition"
            >
              <FaInstagram className="text-red text-lg" />
            </a>

            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-gold transition"
            >
              <FaYoutube className="text-red text-lg" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-6 md:mt-10">
          <h3 className="text-gold font-bold mb-2">SIGN UP TO RECEIVE OUR NEWSLETTERS</h3>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded border border-white bg-gray"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-gold text-deep-green px-4 py-2 rounded hover:text-white shadow-lg shadow-black/30 transition"
            >
              Subscribe
            </button>
            {newsletterSuccess && (
              <p className="text-green-600">Subscribed successfully!</p>
            )}
            {newsletterError && <p className="text-red-600">{newsletterError}</p>}
          </form>
        </div>
      </div>
      </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="bg-deep-green border-t border-gold">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Logo Left */}
          <Link href="/kingdom-meetups"
          className="text-gold font-bold text-lg px-3 py-1 rounded hover:text-white transition">
          <Image
            src="/images/km/logo.jpg"
            alt="KM Logo"
            width={70}
            height={70}
          />
        </Link>

          {/* Rights Right */}
          <p className="text-sm text-center text-white md:text-right">
            © {new Date().getFullYear()} Showers of Blessing Outreach Ministry. 
            All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
