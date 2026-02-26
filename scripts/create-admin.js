const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("Admin@09", 10);

  await prisma.user.create({
    data: {
      email: "sobom.kingdom@gmail.com", // change to your admin email
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("✅ Admin user created successfully");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
