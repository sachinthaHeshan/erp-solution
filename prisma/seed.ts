const { PrismaClient } = require("@prisma/client");
const util = require("util");
const parseArgs = util.parseArgs;

const prisma = new PrismaClient();

const industries: string[] = ["Accounting", "Animations", "Banking"];

const numOfEmps = [
  { slug: "5<", name: "5 <" },
  { slug: "6-10", name: "6 - 10" },
  { slug: "11-50", name: "11 - 50" },
  { slug: "51-200", name: "51 - 200" },
  { slug: "201-500", name: "201 - 500" },
  { slug: ">500", name: "> 500" },
];

async function main() {
  const {
    values: { only },
  } = parseArgs({
    options: {
      only: { type: "string" },
    },
  });

  switch (only) {
    case "seedIndustries":
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
      break;
    case "seedNumOfEmps":
      try {
        // await prisma.numOfEmps.deleteMany({
        //   where: { name: { notIn: industries } },
        // });

        for (const numOfEmp of numOfEmps) {
          await prisma.numOfEmp.upsert({
            where: { slug: numOfEmp.slug },
            create: numOfEmp,
            update: numOfEmp,
          });
        }
        console.log("Seed data for industries has been upserted successfully.");
      } catch (error) {
        console.error("Error upserting industries:", error);
      } finally {
        await prisma.$disconnect();
      }

      break;
    default:
      break;
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
