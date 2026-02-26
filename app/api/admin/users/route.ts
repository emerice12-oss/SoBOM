import { NextResponse } from "next/server";
import { requireAdminRole } from "@/lib/auth";
import { prisma } from "prisma/lib/prisma";
import { logAction } from "@/lib/audit";
import bcrypt from "bcrypt";


export async function GET() {
  try {
    await requireAdminRole(["SUPER_ADMIN"]);

    const admins = await prisma.admin.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return NextResponse.json(admins);
  } catch {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 403 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const current = await requireAdminRole(["SUPER_ADMIN"]);

    const { email, password, role } = await req.json();

    const hashed = await bcrypt.hash(password, 10);

    const admin = await prisma.admin.create({
      data: {
        email,
        password: hashed,
        role,
      },
    });

    await logAction("CREATE", "Admin", admin.id, current.id);

    return NextResponse.json(admin);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Error creating admin" },
      { status: 400 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const current = await requireAdminRole(["SUPER_ADMIN"]);
    const { id } = await req.json();

    await prisma.admin.delete({
        where: { id },
    });

    await logAction("DELETE", "Admin", id, current.id);

    // Prevent deleting yourself
    if (current.id === id) {
      return NextResponse.json(
        { error: "You cannot delete yourself." },
        { status: 400 }
      );
    }

    

    // Check if target is SUPER_ADMIN
    const target = await prisma.admin.findUnique({
      where: { id },
    });

    if (!target) {
      return NextResponse.json(
        { error: "Admin not found." },
        { status: 404 }
      );
    }

    if (target.role === "SUPER_ADMIN") {
      const superAdmins = await prisma.admin.count({
        where: { role: "SUPER_ADMIN" },
      });

      if (superAdmins <= 1) {
        return NextResponse.json(
          { error: "Cannot delete the last SUPER_ADMIN." },
          { status: 400 }
        );
      }
    }

    await prisma.admin.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 403 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const current = await requireAdminRole(["SUPER_ADMIN"]);

    const { id, role } = await req.json();

    await prisma.admin.update({
      where: { id },
      data: { role },
    });

    await logAction("UPDATE_ROLE", "Admin", id, current.id);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 403 }
    );
  }
}


