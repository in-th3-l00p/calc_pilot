import { Database } from "lucide-react"

import {
  ExerciseCard,
  type ExerciseCardProps,
} from "@/app/dashboard/components/ExerciseCard"

const entities: ExerciseCardProps[] = [
  {
    icon: Database,
    title: "Theory questions",
    description: "Edit the question and answer pairs used in theory sessions.",
    href: "/dashboard/datasets/theory-questions",
    cta: "Edit questions",
  },
]

export function EntityList() {
  return (
    <section className="w-full grid gap-4 md:grid-cols-2">
      {entities.map((entity) => (
        <ExerciseCard key={entity.title} {...entity} />
      ))}
    </section>
  )
}


