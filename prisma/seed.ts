const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // "Do not update existing values. You can only add and remove. If you try to update, it will create a new record and delete the existing one."
  const industries: string[] = ["Accounting", "Animations", "Banking"];

  try {
    await prisma.industry.deleteMany({
      where: { name: { notIn: industries } },
    });

    for (const industry of industries) {
      await prisma.industry.upsert({
        where: { name: industry },
        create: { name: industry },
        update: { name: industry },
      });
    }
    console.log("Seed data for industries has been upserted successfully.");
  } catch (error) {
    console.error("Error upserting industries:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
