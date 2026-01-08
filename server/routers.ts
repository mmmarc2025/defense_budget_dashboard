import { COOKIE_NAME } from "@shared/const";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createComment, getAllComments, getRecentCommentsByIp } from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  comments: router({
    list: publicProcedure.query(async () => {
      return await getAllComments();
    }),
    
    create: publicProcedure
      .input(
        z.object({
          name: z.string().min(1).max(100).optional(),
          content: z.string().min(1).max(1000),
          honeypot: z.string().optional(), // Honeypot field - should be empty
        })
      )
      .mutation(async ({ input, ctx }) => {
        // Anti-bot: Check honeypot field
        if (input.honeypot && input.honeypot.trim() !== "") {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Invalid submission detected",
          });
        }

        // Get client IP address
        const ipAddress =
          (ctx.req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
          (ctx.req.headers["x-real-ip"] as string) ||
          ctx.req.socket.remoteAddress ||
          "unknown";

        // Rate limiting: Check recent comments from this IP
        const recentComments = await getRecentCommentsByIp(ipAddress, 5);
        if (recentComments.length >= 3) {
          throw new TRPCError({
            code: "TOO_MANY_REQUESTS",
            message: "留言太頻繁，請稍後再試",
          });
        }

        // Create comment
        await createComment({
          name: input.name || "匿名網友",
          content: input.content,
          ipAddress,
          honeypot: null,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
