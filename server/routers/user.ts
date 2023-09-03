/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { router, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma } from "../prisma";

/**
 * Default selector for Post.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */

export const postRouter = router({
  list: publicProcedure.query(async () => {
    /**
     * For pagination docs you can have a look here
     * @see https://trpc.io/docs/useInfiniteQuery
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/pagination
     */

    const items = await prisma.user.findMany();

    let nextCursor: typeof name | undefined = undefined;

    return {
      items: items.reverse(),
      nextCursor,
    };
  }),
  userById: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { name } = input;
      const user = await prisma.user.findFirst({
        where: { name },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `No post with id '${name}'`,
        });
      }
      return user;
    }),
});
