import { HeroSection } from "@/components/sections/HeroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HomePreloader } from "@/components/layout/HomePreloader";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";

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
        <CaseStudiesSection />
      </main>
      <Footer />
    </>
  );
}
