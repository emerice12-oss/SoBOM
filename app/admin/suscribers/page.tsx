export const dynamic = 'force-dynamic';

import { revalidatePath } from "next/cache";
import { prisma } from "prisma/lib/prisma";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "prisma/lib/auth";

export async function deleteSubscriber(id: string) {
  "use server";

  await prisma.subscriber.delete({
    where: { id },
  });

  revalidatePath("/admin/subscribers");
}

export default async function SubscribersPage() {
  const session = await getServerSession(authOptions);

  // Protect route
  if (!session || session.user.role !== "ADMIN") {
    notFound();
  }

  const subscribers = await prisma.subscriber.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Newsletter Subscribers</h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-4">Email</th>
              <th className="p-4">Subscribed At</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.length === 0 && (
              <tr>
                <td colSpan={2} className="p-4 text-center text-gray-500">
                  No subscribers yet
                </td>
              </tr>
            )}

            <tbody>
              {subscribers.length === 0 && (
                <tr>
                  <td colSpan={3} className="p-4 text-center text-gray-500">
                    No subscribers yet
                  </td>
                </tr>
              )}

              {subscribers.map((sub) => (
                <tr key={sub.id} className="border-t">
                  <td className="p-4">{sub.email}</td>
                  <td className="p-4">
                    {new Date(sub.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-right">
                    <form
                      action={async () => {
                        "use server";
                        await deleteSubscriber(sub.id);
                     }}
                    >
                     <button
                       type="submit"
                       className="text-red-600 hover:text-red-800 font-medium"
                       onClick={(e) => {
                         if (!confirm("Delete this subscriber?")) {
                           e.preventDefault();
                         }
                       }}
                     >
                       Delete
                     </button>
                   </form>
                 </td>
               </tr>
             ))}
            </tbody>

          </tbody>
        </table>
      </div>
    </div>
  );



}
