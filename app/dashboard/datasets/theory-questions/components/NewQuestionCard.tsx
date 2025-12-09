import { motion } from "motion/react"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

type Draft = {
  question: string
  answer: string
}

type NewQuestionCardProps = {
  draft: Draft
  onChangeQuestion: (value: string) => void
  onChangeAnswer: (value: string) => void
  onClear: () => void
  onSave: () => void
}

export function NewQuestionCard({
  draft,
  onChangeQuestion,
  onChangeAnswer,
  onClear,
  onSave,
}: NewQuestionCardProps) {
  return (
    <motion.section
      layout
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="rounded-xl border bg-card text-card-foreground p-4 sm:p-6 space-y-4"
    >
      <div className="space-y-1">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          New question
        </p>
        <Textarea
          value={draft.question}
          onChange={(e) => onChangeQuestion(e.target.value)}
          placeholder="Type a new theory question here..."
          className="min-h-[80px]"
        />
      </div>
      <div className="space-y-1">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Reference answer
        </p>
        <Textarea
          value={draft.answer}
          onChange={(e) => onChangeAnswer(e.target.value)}
          placeholder="Optional: add a reference answer or outline."
          className="min-h-[80px]"
        />
      </div>
      <div className="flex flex-wrap justify-end gap-2">
        <Button
          size="sm"
          variant="outline"
          type="button"
          onClick={onClear}
        >
          Clear
        </Button>
        <Button
          size="sm"
          type="button"
          onClick={onSave}
        >
          Save new question
        </Button>
      </div>
    </motion.section>
  )
}


