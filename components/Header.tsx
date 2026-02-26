"use client";

import { FaFacebookF, FaInstagram, FaYoutube, FaPlay } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-deep-blue text-white hidden md:block bg-deep">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        {/* LEFT SIDE — SOCIAL ICONS */}
        <div className="flex items-center space-x-3">
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-full hover:bg-gold hover:scale-110 transition-all duration-300"
          >
            <FaFacebookF size={14} />
          </a>

          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-full hover:bg-gold hover:scale-110 transition-all duration-300"
          >
            <FaInstagram size={14} />
          </a>

          <a
            href="https://youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-full hover:bg-gold hover:scale-110 transition-all duration-300"
          >
            <FaYoutube size={14} />
          </a>
        </div>

        {/* RIGHT SIDE — LIVE SERVICES */}
        <a
          href="https://www.sobom.com/live/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-gold transition"
        >
          <FaPlay size={14} />
          <span className="text-sm font-medium">Live Services</span>
        </a>

      </div>
    </header>
  );
}
