import Link from "next/link"
import { currentUser } from "@clerk/nextjs/server"
import { Brain, PenSquare, Headphones } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default async function DashboardPage() {
  const user = await currentUser()
  const name = user?.firstName || user?.username || "there"

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl flex flex-col items-center text-center gap-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            hello {name}
          </h1>
          <p className="max-w-xl mx-auto text-sm text-muted-foreground">
            Your first-year calculus cockpit. Choose how you want to practice today,
            manage your Clerk account identity, and keep your explanations sharp, {name}.
          </p>
        </div>

        <section className="w-full grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="items-center space-y-2">
              <Brain className="size-6 mx-auto" />
              <CardTitle className="text-sm">
                Theory questions
              </CardTitle>
              <CardDescription className="text-xs">
                Explain limits, derivatives, and integrals in your own words.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <Button size="sm" variant="outline" asChild>
                <Link href="/theory">
                  Start session
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="items-center space-y-2">
              <PenSquare className="size-6 mx-auto" />
              <CardTitle className="text-sm">
                Exam practice
              </CardTitle>
              <CardDescription className="text-xs">
                Work through first‑year exam-style problems with guided steps.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <Button size="sm" variant="outline" asChild>
                <Link href="/exam">
                  Start drills
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="items-center space-y-2">
              <Headphones className="size-6 mx-auto" />
              <CardTitle className="text-sm">
                Voice tutor
              </CardTitle>
              <CardDescription className="text-xs">
                Use ElevenLabs-powered voice to talk through tricky questions.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <Button size="sm" variant="outline" asChild>
                <Link href="/voice">
                  Start listening
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}


