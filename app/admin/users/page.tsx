"use client";

import { useEffect, useState } from "react";

type Admin = {
  id: string;
  email: string;
  role: "SUPER_ADMIN" | "ADMIN" | "EDITOR";
  createdAt: string;
};

export default function UsersPage() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Admin["role"]>("ADMIN");

  async function fetchAdmins() {
    const res = await fetch("/api/admin/users");
    if (!res.ok) return;

    const data = await res.json();
    setAdmins(data);
  }

  useEffect(() => {
    fetchAdmins();
  }, []);

  async function handleCreate() {
    if (!email || !password) return;

    await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    });

    setEmail("");
    setPassword("");
    setRole("ADMIN");
    fetchAdmins();
  }

  async function handleDelete(id: string) {
    await fetch("/api/admin/users", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    fetchAdmins();
  }

  async function handleRoleChange(id: string, newRole: Admin["role"]) {
    await fetch("/api/admin/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, role: newRole }),
    });

    fetchAdmins();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Users</h1>

      {/* Create Admin */}
      <div className="mb-8 p-4 border rounded bg-white">
        <h2 className="font-semibold mb-4">Create Admin</h2>

        <div className="flex gap-2 flex-wrap">
          <input
            className="border p-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="border p-2"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select
            className="border p-2"
            value={role}
            onChange={(e) =>
              setRole(e.target.value as Admin["role"])
            }
          >
            <option value="ADMIN">ADMIN</option>
            <option value="EDITOR">EDITOR</option>
            <option value="SUPER_ADMIN">SUPER_ADMIN</option>
          </select>

          <button
            onClick={handleCreate}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Create
          </button>
        </div>
      </div>

      {/* Admin Table */}
      <table className="w-full border bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border text-left">Email</th>
            <th className="p-2 border text-left">Role</th>
            <th className="p-2 border text-left">Created</th>
            <th className="p-2 border text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td className="p-2 border">{admin.email}</td>

              <td className="p-2 border">
                <select
                  value={admin.role}
                  onChange={(e) =>
                    handleRoleChange(
                      admin.id,
                      e.target.value as Admin["role"]
                    )
                  }
                  className="border p-1"
                >
                  <option value="ADMIN">ADMIN</option>
                  <option value="EDITOR">EDITOR</option>
                  <option value="SUPER_ADMIN">SUPER_ADMIN</option>
                </select>
              </td>

              <td className="p-2 border">
                {new Date(admin.createdAt).toLocaleDateString()}
              </td>

              <td className="p-2 border">
                <button
                  onClick={() => {
                    if (
                      confirm(
                        "Are you sure you want to delete this admin?"
                      )
                    ) {
                      handleDelete(admin.id);
                    }
                  }}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {admins.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="p-4 text-center text-gray-500"
              >
                No admins found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}