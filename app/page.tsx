import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { AgentsSection } from "./components/AgentsSection";
import { CallToActionSection } from "./components/CallToActionSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 py-10">
      <HeroSection />
      <ProblemSection />
      <AgentsSection />
      <CallToActionSection />
    </main>
  );
}
