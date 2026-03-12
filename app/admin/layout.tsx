"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const handleLogout = async () => {
    await fetch("/api/admin/logout", {
      method: "POST",
    });
    window.location.href = "/admin/login";
  };

  

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-deep-green text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

          <nav className="space-y-4">
            <Link href="/admin" className="block hover:text-gold">
              Dashboard
            </Link>

            <Link href="/admin/events" className="block hover:text-gold">
              Manage Events
            </Link>

            <Link href="/admin/sermons" className="block hover:text-gold">
              Manage Sermons
            </Link>

            <Link href="/admin/subscribers" className="block hover:text-gold">
              Newsletter Subscribers
            </Link>
          </nav>
        </div>

        {/* Logout Button */}
        <button
          onClick={() =>
            signOut({
              callbackUrl: "/admin/login",
            })
          }
          className="mt-10 bg-gold text-white px-4 py-2 rounded-lg hover:bg-white hover:text-deep-blue transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
