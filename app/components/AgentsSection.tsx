export function AgentsSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-3">
      <div className="flex flex-col items-center text-center gap-2">
        <h3 className="text-sm font-medium">Concept Coach</h3>
        <p className="text-xs text-muted-foreground">
          Asks you to explain limits, derivatives, and integrals in plain
          language. Highlights missing pieces in your intuition.
        </p>
      </div>
      <div className="flex flex-col items-center text-center gap-2">
        <h3 className="text-sm font-medium">Exam Drills</h3>
        <p className="text-xs text-muted-foreground">
          Generates first–year exam‑style questions and walks through solutions
          step by step when you get stuck.
        </p>
      </div>
      <div className="flex flex-col items-center text-center gap-2">
        <h3 className="text-sm font-medium">Whisper Tutor</h3>
        <p className="text-xs text-muted-foreground">
          Uses voice to quietly talk through tricky problems so you can stay
          focused without staring at a wall of text.
        </p>
      </div>
    </section>
  );
}


