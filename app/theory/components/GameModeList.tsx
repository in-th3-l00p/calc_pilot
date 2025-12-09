import { Brain, Infinity } from "lucide-react"

import {
  ExerciseCard,
  type ExerciseCardProps,
} from "@/app/dashboard/components/ExerciseCard"

const gameModes: ExerciseCardProps[] = [
  {
    icon: Brain,
    title: "20 questions",
    description: "Answer a focused set of 20 theory prompts to prepare for an exam.",
    href: "/theory/20-questions",
    cta: "Start 20 questions",
  },
  {
    icon: Infinity,
    title: "Infinite mode",
    description: "Keep answering theory questions for as long as you like.",
    href: "/theory/infinite",
    cta: "Start infinite mode",
  },
]

export function GameModeList() {
  return (
    <section className="w-full grid gap-4 md:grid-cols-2">
      {gameModes.map((mode) => (
        <ExerciseCard key={mode.title} {...mode} />
      ))}
    </section>
  )
}


