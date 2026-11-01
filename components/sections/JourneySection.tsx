import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { JourneyStoryText } from "@/components/sections/JourneyStoryText";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";

export function JourneySection() {
  return (
    <section className="section journey-section" id="journey" aria-labelledby="journey-title">
      <Container size="wide">
        <div className="journey-editorial">
          <Reveal>
            <JourneyStoryText />
          </Reveal>

          <SelectedWorkSection embedded />
        </div>
      </Container>
    </section>
  );
}
