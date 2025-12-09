import { GameModeList } from "./components/GameModeList"

export default function TheoryPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl flex flex-col items-center text-center gap-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Theory sessions
          </h1>
          <p className="max-w-xl mx-auto text-sm text-muted-foreground">
            Choose how you want to practice conceptual calculus questions today:
            a fixed set of 20 prompts, or an infinite stream you can dip in and out of.
          </p>
        </div>

        <GameModeList />
      </div>
    </main>
  )
}

