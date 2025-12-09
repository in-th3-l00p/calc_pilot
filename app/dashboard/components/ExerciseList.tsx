import { Brain, PenSquare } from "lucide-react"

import { ExerciseCard, type ExerciseCardProps } from "./ExerciseCard"

const exercies: ExerciseCardProps[] = [
  {
    icon: Brain,
    title: "Theory questions",
    description: "Explain limits, derivatives, and integrals in your own words.",
    href: "/theory",
    cta: "Start session",
  },
  {
    icon: PenSquare,
    title: "Exam practice",
    description: "Work through first‑year exam-style problems with guided steps.",
    href: "/exam",
    cta: "Start drills",
  },
]

export function ExerciseList() {
  return (
    <section className="w-full grid gap-4 md:grid-cols-2">
      {exercies.map((exercise) => (
        <ExerciseCard key={exercise.title} {...exercise} />
      ))}
    </section>
  )
}


