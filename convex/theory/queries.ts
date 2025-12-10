import { query } from "../_generated/server"
import { v } from "convex/values"

export const listTheoryQuestions = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("theoryQuestions").collect()
  },
})

export const getTheoryQuestion = query({
  args: {
    id: v.id("theoryQuestions"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id)
  },
})


