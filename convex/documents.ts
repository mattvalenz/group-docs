import { ConvexError, v } from "convex/values";
import { query } from "./_generated/server";

export const create = mutation({
  args: {
    title: v.optional(v.string()),
    initialContent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("Unauthorized User");
    }

    return await ctx.db.insert("documents", {
      title: args.title ?? "Untitled document",
      ownerId: user.subject,
      initialContent: args.initialContent,
    });
  },
});

export const get = query({
  handler: async (ctx) => {
    return await ctx.db.query("documents").collect();
    // do something with `tasks`
  },
});
