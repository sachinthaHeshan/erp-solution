/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from "../trpc";
import { postRouter } from "./user";

export const appRouter = router({
  healthcheck: publicProcedure.query(() => "yay!"),

  user: postRouter,
});

export type AppRouter = typeof appRouter;
