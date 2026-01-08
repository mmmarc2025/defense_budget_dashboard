import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createMockContext(ipAddress: string = "127.0.0.1"): TrpcContext {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {
        "x-forwarded-for": ipAddress,
      },
      socket: {
        remoteAddress: ipAddress,
      },
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("comments router", () => {
  it("should create a comment successfully", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.comments.create({
      name: "測試用戶",
      content: "這是一則測試留言",
      honeypot: "",
    });

    expect(result).toEqual({ success: true });
  });

  it("should reject comment with honeypot filled", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.comments.create({
        name: "Bot",
        content: "Spam message",
        honeypot: "http://spam.com",
      })
    ).rejects.toThrow("Invalid submission detected");
  });

  it("should use default name when name is not provided", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.comments.create({
      content: "匿名留言測試",
      honeypot: "",
    });

    expect(result).toEqual({ success: true });
  });

  it("should list comments", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const comments = await caller.comments.list();

    expect(Array.isArray(comments)).toBe(true);
  });

  it("should reject empty content", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.comments.create({
        name: "測試用戶",
        content: "",
        honeypot: "",
      })
    ).rejects.toThrow();
  });

  it("should reject content exceeding max length", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const longContent = "a".repeat(1001);

    await expect(
      caller.comments.create({
        name: "測試用戶",
        content: longContent,
        honeypot: "",
      })
    ).rejects.toThrow();
  });
});
