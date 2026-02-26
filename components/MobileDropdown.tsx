"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function MobileDropdown({
  label,
  items,
  closeMenu,
}: {
  label: string;
  items: { label: string; href: string }[];
  closeMenu: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-lg font-medium py-2"
      >
        {label}

        <span
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pl-4 space-y-3 pt-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    closeMenu();
                    setOpen(false);
                  }}
                  className="block text-base text-gray-700 hover:bg-deep-blue hover:text-white transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
