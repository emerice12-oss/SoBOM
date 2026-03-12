"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function DesktopDropdown({
  label,
  items,
  setDropdownOpen,
}: {
  label: string;
  items: { label: string; href: string }[];
  setDropdownOpen: (value: boolean) => void;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = items.some(
    (item) =>
      pathname === item.href || pathname.startsWith(item.href + "/")
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setOpen(true);
        setDropdownOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
        setDropdownOpen(false);
      }}
    >
      <button
        className={`inline-flex items-center font-medium transition ${
          isActive ? "text-deep-green" : "text-deep-green hover:text-green"
        }`}
      >
        {label}

        <svg
          className={`ml-1 h-4 w-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full mt-3 w-52 bg-white text-deep-green shadow-xl rounded-xl overflow-hidden z-50"
          >
            {items.map((item) => {
              const childActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-5 py-3 transition ${
                    childActive
                      ? "bg-green text-white font-semibold"
                      : "hover:bg-deep-green hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
