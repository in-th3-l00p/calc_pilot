import { query, mutation } from "../_generated/server"
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

export const createTheoryQuestion = mutation({
  args: {
    question: v.string(),
    answer: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("theoryQuestions", {
      question: args.question,
      answer: args.answer,
    })

    return id
  },
})

export const updateTheoryQuestion = mutation({
  args: {
    id: v.id("theoryQuestions"),
    question: v.optional(v.string()),
    answer: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args

    await ctx.db.patch(id, rest)
  },
})

export const deleteTheoryQuestion = mutation({
  args: {
    id: v.id("theoryQuestions"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id)
  },
})


