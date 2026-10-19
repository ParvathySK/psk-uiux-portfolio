import { HeroSection } from "@/components/sections/HeroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HomePreloader } from "@/components/layout/HomePreloader";

export default function HomePage() {
  return (
    <>
      <HomePreloader />
      <div className="top-stage">
        <Navbar />
        <HeroSection />
      </div>
      <main>
        <JourneySection />
        <ProcessSection />
      </main>
      <Footer />
    </>
  );
}
