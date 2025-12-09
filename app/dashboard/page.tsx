import { currentUser } from "@clerk/nextjs/server"

import { DashboardHeader } from "./components/DashboardHeader"
import { ExerciseList } from "./components/ExerciseList"

export default async function DashboardPage() {
  const user = await currentUser()
  const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(" ")
  const name = fullName || user?.username || "there"

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl flex flex-col items-center text-center gap-8">
        <DashboardHeader name={name} />
        <ExerciseList />
      </div>
    </main>
  )
}
