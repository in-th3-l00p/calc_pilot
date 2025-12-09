"use client"

import { useEffect, useMemo, useState } from "react"
import { useMutation, useQuery } from "convex/react"

import { api } from "@/convex/_generated/api"
import { QuestionCard } from "./components/QuestionCard"
import { NewQuestionCard } from "./components/NewQuestionCard"

type Draft = {
  question: string
  answer: string
}

export default function TheoryQuestionsEditorPage() {
  const questions = useQuery(api.theory.listTheoryQuestions)
  const updateQuestion = useMutation(api.theory.updateTheoryQuestion)
  const createQuestion = useMutation(api.theory.createTheoryQuestion)
  const deleteQuestion = useMutation(api.theory.deleteTheoryQuestion)

  const [drafts, setDrafts] = useState<Record<string, Draft>>({})
  const [newDraft, setNewDraft] = useState<Draft>({ question: "", answer: "" })

  useEffect(() => {
    if (!questions) return
    setDrafts((prev) => {
      const next = { ...prev }
      for (const q of questions) {
        const id = q._id as string
        if (!next[id]) {
          next[id] = { question: q.question, answer: q.answer }
        }
      }
      return next
    })
  }, [questions])

  const hasQuestions = useMemo(() => (questions ?? []).length > 0, [questions])

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl flex flex-col gap-8">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Edit theory questions
          </h1>
          <p className="max-w-2xl mx-auto text-sm text-muted-foreground">
            These questions are stored in Convex and power the theory sessions.
            Update the wording or reference answers, then save your changes.
          </p>
        </div>

        {!questions && (
          <p className="text-center text-sm text-muted-foreground">
            Loading questions from Convex&hellip;
          </p>
        )}

        {questions && hasQuestions && (
          <div className="space-y-6">
            {questions.map((q) => {
              const id = q._id as string
              const draft = drafts[id] ?? { question: q.question, answer: q.answer }

              return (
                <QuestionCard
                  key={id}
                  draft={draft}
                  onChangeQuestion={(value) =>
                    setDrafts((prev) => ({
                      ...prev,
                      [id]: {
                        ...draft,
                        question: value,
                      },
                    }))
                  }
                  onChangeAnswer={(value) =>
                    setDrafts((prev) => ({
                      ...prev,
                      [id]: {
                        ...draft,
                        answer: value,
                      },
                    }))
                  }
                  onDelete={async () => {
                    await deleteQuestion({ id: q._id })
                  }}
                  onReset={() =>
                    setDrafts((prev) => ({
                      ...prev,
                      [id]: {
                        question: q.question,
                        answer: q.answer,
                      },
                    }))
                  }
                  onSave={async () => {
                    await updateQuestion({
                      id: q._id,
                      question: draft.question,
                      answer: draft.answer,
                    })
                  }}
                />
              )
            })}
          </div>
        )}

        <NewQuestionCard
          draft={newDraft}
          onChangeQuestion={(value) =>
            setNewDraft((prev) => ({
              ...prev,
              question: value,
            }))
          }
          onChangeAnswer={(value) =>
            setNewDraft((prev) => ({
              ...prev,
              answer: value,
            }))
          }
          onClear={() => setNewDraft({ question: "", answer: "" })}
          onSave={async () => {
            if (!newDraft.question.trim() && !newDraft.answer.trim()) return
            await createQuestion({
              question: newDraft.question,
              answer: newDraft.answer,
            })
            setNewDraft({ question: "", answer: "" })
          }}
        />
      </div>
    </main>
  )
}




