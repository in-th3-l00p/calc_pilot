import { EntityList } from "./components/EntityList"

export default function DatasetsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl flex flex-col items-center text-center gap-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Dataset editor
          </h1>
          <p className="max-w-xl mx-auto text-sm text-muted-foreground">
            Choose which part of Calc Pilot&apos;s data you want to edit. For now,
            you can adjust the theory questions used by the agents.
          </p>
        </div>

        <EntityList />
      </div>
    </main>
  )
}


