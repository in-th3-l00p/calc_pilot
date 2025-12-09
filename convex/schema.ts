import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  theoryQuestions: defineTable({
    question: v.string(),
    answer: v.string(),
  }),
})


