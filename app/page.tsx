import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SelectedWorkSection />
        <AboutSection />
        <SkillsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
