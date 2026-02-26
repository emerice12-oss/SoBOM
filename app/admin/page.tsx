import { prisma } from "prisma/lib/prisma";
import { requireAdminRole } from "@/lib/auth";

export default async function AdminDashboard() {
  await requireAdminRole(["SUPER_ADMIN", "ADMIN", "EDITOR"]);

  const totalAdmins = await prisma.admin.count();
  const totalSuperAdmins = await prisma.admin.count({
    where: { role: "SUPER_ADMIN" },
  });

  const totalLogs = await prisma.auditLog.count();

  const recentLogs = await prisma.auditLog.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: { performedBy: true },
  });
  
  const [eventCount, sermonCount, subscriberCount] =
    await Promise.all([
      prisma.event.count(),
      prisma.sermon.count(),
      prisma.subscriber.count(),
    ]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard Overview
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <DashboardCard
          title="Total Events"
          value={eventCount}
        />
        <DashboardCard
          title="Total Sermons"
          value={sermonCount}
        />
        <DashboardCard
          title="Subscribers"
          value={subscriberCount}
        />
      </div>
  
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-white border rounded">
          <h2 className="text-lg font-semibold">Total Admins</h2>
          <p className="text-3xl">{totalAdmins}</p>
        </div>

        <div className="p-6 bg-white border rounded">
          <h2 className="text-lg font-semibold">Super Admins</h2>
          <p className="text-3xl">{totalSuperAdmins}</p>
        </div>

        <div className="p-6 bg-white border rounded">
          <h2 className="text-lg font-semibold">Audit Logs</h2>
          <p className="text-3xl">{totalLogs}</p>
        </div>
      </div>

      <div className="bg-white p-6 border rounded">
        <h2 className="text-lg font-semibold mb-4">
          Recent Activity
        </h2>

        <ul>
          {recentLogs.map((log) => (
            <li key={log.id} className="mb-2">
              <strong>{log.performedBy.email}</strong> —{" "}
              {log.action} {log.entity} (
              {new Date(log.createdAt).toLocaleString()})
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

function DashboardCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6">
      <h2 className="text-gray-500 font-medium">
        {title}
      </h2>
      <p className="text-4xl font-bold mt-3">
        {value}
      </p>
    </div>
  );
}