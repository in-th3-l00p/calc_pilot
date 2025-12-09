import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const MOCK_QUESTION =
  "In your own words, explain what it means for a sequence (a_n) to converge to a limit L."

export default function InfiniteTheoryPage() {
  const questionNumber = 1

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl flex flex-col items-center text-center gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">
            Question {questionNumber}
          </h1>
          <p className="max-w-xl mx-auto text-sm text-muted-foreground">
            {MOCK_QUESTION}
          </p>
        </div>

        <div className="w-full max-w-xl space-y-4">
          <Textarea
            placeholder="Type your explanation here..."
            className="min-h-[180px]"
          />
          <div className="flex flex-wrap justify-center gap-3">
            <Button>
              Submit answer
            </Button>
            <Button variant="outline">
              Finish session
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}


