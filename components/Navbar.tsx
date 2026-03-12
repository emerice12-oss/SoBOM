"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/navigation";
import { DesktopDropdown } from "./DesktopDropdown";
import { MobileDropdown } from "./MobileDropdown";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <motion.header
        layout
        className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 rounded transition">
            <Image
              src="/images/sb/logo.jpg"
              alt="SoBOM Logo"
              width={40}
              height={40}
            />
            <span className="font-bold text-lg text-deep-green hidden sm:block hover:text-green">
              SoBOM
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="text-deep-green hidden md:flex items-center space-x-8">
            {navigation.map((menu) => (
              <DesktopDropdown
                key={menu.label}
                label={menu.label}
                items={menu.items}
                setDropdownOpen={setDropdownOpen}
              />
            ))}

            <Link
              href="/contact"
              className="text-deep-green font-medium hover:text-green transition"
            >
              Contact
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: open ? 90 : 0 }}
              className="text-3xl text-deep-green hover:text-green"
            >
              ☰
            </motion.span>
          </button>
        </div>

        {/* MOBILE MENU ANIMATION */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-green border-t border-deep-green px-6 py-4 overflow-hidden"
            >
              <nav className="space-y-4 text-white">
                {navigation.map((menu) => (
                  <MobileDropdown
                    key={menu.label}
                    label={menu.label}
                    items={menu.items}
                    closeMenu={() => setOpen(false)}
                  />
                ))}

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block text-lg font-medium hover:text-white/80"
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* BLUR BACKDROP FOR DESKTOP DROPDOWN */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 hidden md:block"
          />
        )}
      </AnimatePresence>
    </>
  );
}
