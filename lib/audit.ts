import { prisma } from "prisma/lib/prisma";

export async function logAction(
  action: string,
  entity: string,
  entityId: string | null,
  performedById: string
) {
  await prisma.auditLog.create({
    data: {
      action,
      entity,
      entityId,
      performedById,
    },
  });
}