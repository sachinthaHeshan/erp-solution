import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { prisma } from "../prisma";

export const companyRouter = router({
  list: publicProcedure
    .input(
      z.object({
        skip: z.number(),
        take: z.number(),
      })
    )
    .query(async ({ input }) => {
      const { skip, take } = input;
      const companies = await prisma.company.findMany({
        skip,
        take,
      });

      return {
        companies,
      };
    }),
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        website: z.string(),
        industryId: z.string().nullable(),
        numOfEmpslug: z.string().nullable(),
      })
    )
    .mutation(async ({ input }) => {
      const { name, website, industryId, numOfEmpslug } = input;
      const newCompany = await prisma.company.create({
        data: {
          name,
          website,
          industryId,
          numOfEmpslug,
        },
      });

      return {
        newCompany,
      };
    }),
  detailsForCreateForm: publicProcedure.query(async () => {
    const industries = await prisma.industry.findMany();
    const numOfEmps = await prisma.numOfEmp.findMany();
    return {
      numOfEmps,
      industries,
    };
  }),
});
