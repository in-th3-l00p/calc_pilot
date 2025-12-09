import { AuthButtons } from "./AuthButtons";

export function HeroSection() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center gap-6 px-4">
      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Calc Pilot
      </span>
      <h1 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
        First–year calculus, mastered with calm AI guidance.
      </h1>
      <p className="max-w-xl text-sm sm:text-base text-muted-foreground">
        Short theory prompts, focused feedback, and exam‑style questions.
        Designed to feel like a patient tutor sitting next to you, not another
        noisy dashboard.
      </p>
      <AuthButtons />
    </section>
  );
}


