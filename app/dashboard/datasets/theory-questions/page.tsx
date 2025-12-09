"use client"

import { useEffect, useMemo, useState } from "react"
import { useMutation, useQuery } from "convex/react"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api"

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
                <section
                  key={id}
                  className="rounded-xl border bg-card text-card-foreground p-4 sm:p-6 space-y-4"
                >
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Question
                    </p>
                    <Textarea
                      value={draft.question}
                      onChange={(e) =>
                        setDrafts((prev) => ({
                          ...prev,
                          [id]: {
                            ...draft,
                            question: e.target.value,
                          },
                        }))
                      }
                      className="min-h-[80px]"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Reference answer
                    </p>
                    <Textarea
                      value={draft.answer}
                      onChange={(e) =>
                        setDrafts((prev) => ({
                          ...prev,
                          [id]: {
                            ...draft,
                            answer: e.target.value,
                          },
                        }))
                      }
                      className="min-h-[80px]"
                    />
                  </div>
                  <div className="flex flex-wrap justify-end gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      type="button"
                      onClick={async () => {
                        await deleteQuestion({ id: q._id })
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      type="button"
                      onClick={() =>
                        setDrafts((prev) => ({
                          ...prev,
                          [id]: {
                            question: q.question,
                            answer: q.answer,
                          },
                        }))
                      }
                    >
                      Reset
                    </Button>
                    <Button
                      size="sm"
                      type="button"
                      onClick={async () => {
                        await updateQuestion({
                          id: q._id,
                          question: draft.question,
                          answer: draft.answer,
                        })
                      }}
                    >
                      Save changes
                    </Button>
                  </div>
                </section>
              )
            })}
          </div>
        )}
        <section className="rounded-xl border bg-card text-card-foreground p-4 sm:p-6 space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  New question
                </p>
                <Textarea
                  value={newDraft.question}
                  onChange={(e) =>
                    setNewDraft((prev) => ({
                      ...prev,
                      question: e.target.value,
                    }))
                  }
                  placeholder="Type a new theory question here..."
                  className="min-h-[80px]"
                />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Reference answer
                </p>
                <Textarea
                  value={newDraft.answer}
                  onChange={(e) =>
                    setNewDraft((prev) => ({
                      ...prev,
                      answer: e.target.value,
                    }))
                  }
                  placeholder="Optional: add a reference answer or outline."
                  className="min-h-[80px]"
                />
              </div>
              <div className="flex flex-wrap justify-end gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  type="button"
                  onClick={() =>
                    setNewDraft({ question: "", answer: "" })
                  }
                >
                  Clear
                </Button>
                <Button
                  size="sm"
                  type="button"
                  onClick={async () => {
                    if (!newDraft.question.trim() && !newDraft.answer.trim()) return
                    await createQuestion({
                      question: newDraft.question,
                      answer: newDraft.answer,
                    })
                    setNewDraft({ question: "", answer: "" })
                  }}
                >
                  Save new question
                </Button>
              </div>
            </section>
      </div>
    </main>
  )
}



