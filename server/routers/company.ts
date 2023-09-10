import { router, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
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
      })
    )
    .mutation(async ({ input }) => {
      const { name, website } = input;
      const newCompany = await prisma.company.create({
        data: {
          name,
          website,
        },
      });

      return {
        newCompany,
      };
    }),
});
