import { AmbientAudioToggle } from "@/components/ambient-audio-toggle";
import { CinematicOrchestrator } from "@/components/cinematic-orchestrator";
import { CustomCursor } from "@/components/custom-cursor";
import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { FinalBloomSection } from "@/components/sections/final-bloom-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LetterTreeSection } from "@/components/sections/letter-tree-section";
import { MemoryGardenSection } from "@/components/sections/memory-garden-section";
import { RootsTimelineSection } from "@/components/sections/roots-timeline-section";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <LoadingScreen />
      <CustomCursor />
      <CinematicOrchestrator />
      <Navbar />
      <AmbientAudioToggle />
      <main className="relative overflow-hidden">
        <HeroSection />
        <MemoryGardenSection />
        <LetterTreeSection />
        <RootsTimelineSection />
        <FinalBloomSection />
      </main>
    </SmoothScrollProvider>
  );
}
