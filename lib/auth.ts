import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function requireAdminRole(
  allowedRoles: ("SUPER_ADMIN" | "ADMIN" | "EDITOR")[]
) {
  const cookieStore = await cookies(); // 👈 await here
  const token = cookieStore.get("admin_token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET!
  ) as { id: string; role: string };

  if (!allowedRoles.includes(decoded.role as any)) {
    throw new Error("Forbidden");
  }

  return decoded;
}