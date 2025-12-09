import { motion } from "motion/react"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

type Draft = {
  question: string
  answer: string
}

type QuestionCardProps = {
  draft: Draft
  onChangeQuestion: (value: string) => void
  onChangeAnswer: (value: string) => void
  onDelete: () => void
  onReset: () => void
  onSave: () => void
}

export function QuestionCard({
  draft,
  onChangeQuestion,
  onChangeAnswer,
  onDelete,
  onReset,
  onSave,
}: QuestionCardProps) {
  return (
    <motion.section
      layout
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="rounded-xl border bg-card text-card-foreground p-4 sm:p-6 space-y-4"
    >
      <div className="space-y-1">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Question
        </p>
        <Textarea
          value={draft.question}
          onChange={(e) => onChangeQuestion(e.target.value)}
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
          className="min-h-[80px]"
        />
      </div>
      <div className="flex flex-wrap justify-end gap-2">
        <Button
          size="sm"
          variant="outline"
          type="button"
          onClick={onDelete}
        >
          Delete
        </Button>
        <Button
          size="sm"
          variant="outline"
          type="button"
          onClick={onReset}
        >
          Reset
        </Button>
        <Button
          size="sm"
          type="button"
          onClick={onSave}
        >
          Save changes
        </Button>
      </div>
    </motion.section>
  )
}


