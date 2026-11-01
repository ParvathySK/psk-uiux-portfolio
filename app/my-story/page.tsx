import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export default function MyStoryPage() {
  return (
    <div className="my-story-page">
      <Navbar />
      <main>
        <section className="my-story-intro" aria-label="Introduction">
          <Container size="wide">
            <div className="my-story-greeting">
              <p className="my-story-greeting__bubble">Hello, I&apos;m Parvathy!</p>
              <div className="my-story-greeting__portrait">
                <Image
                  src="/images/parvathy-about-portrait.png"
                  alt="Parvathy smiling"
                  width={401}
                  height={531}
                  priority
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="my-about-copy" aria-label="About Parvathy">
          <Container size="wide">
            <div className="my-about-copy__body">
              <section className="my-about-copy__section" aria-labelledby="about-who-title">
                <h2 id="about-who-title">Who am I?</h2>
                <p>
                  I&apos;m a <strong>UI/UX Designer at Kallisto Innovations</strong>, with
                  <strong> 1+ year of experience</strong> turning ideas into intuitive digital
                  experiences. I enjoy understanding problems, exploring possibilities, and
                  designing interfaces that make technology feel simple and meaningful.
                </p>
              </section>

              <section className="my-about-copy__section" aria-labelledby="about-switch-title">
                <h2 id="about-switch-title">The switch</h2>
                <p>
                  My journey started in <strong>Quality Assurance (QA)</strong>, where I learned to
                  look closely at details, question how things work, and think from a user&apos;s
                  perspective. Eventually, my interest in creativity and problem-solving led me
                  towards UI/UX design. Today, I bring both perspectives together to create better
                  digital experiences. I have <strong>4+ years of experience overall</strong>,
                  including 3+ years in QA.
                </p>
              </section>

              <section className="my-about-copy__section" aria-labelledby="about-experience-title">
                <h2 id="about-experience-title">Experience</h2>
                <ul className="my-about-experience">
                  <li>
                    <h3>UI/UX Designer</h3>
                    <div>
                      <strong>Kallisto Innovations</strong>
                      <span>Mar 2026 – Present</span>
                    </div>
                  </li>
                  <li>
                    <h3>UI/UX Designer (Intern)</h3>
                    <div>
                      <strong>Nexotech Solutions</strong>
                      <span>Sep 2025 – Mar 2026</span>
                    </div>
                  </li>
                  <li>
                    <h3>Software Engineer – QA</h3>
                    <div>
                      <strong>Seqato Solutions</strong>
                      <span>Apr 2022 – Sep 2025</span>
                    </div>
                  </li>
                </ul>
              </section>

              <section className="my-about-copy__section" aria-labelledby="about-beyond-title">
                <h2 id="about-beyond-title">Beyond the pixels</h2>
                <p>
                  When I&apos;m not designing, you&apos;ll probably find me watching movies or
                  endlessly scrolling through Instagram. What kind of movies do I like? Honestly,
                  it depends on my mood. My watchlist has no fixed genre, and neither does my
                  scrolling habit!
                </p>
              </section>

              <section className="my-about-copy__section" aria-labelledby="about-tools-title">
                <h2 id="about-tools-title">Tools I use</h2>
                <ul className="my-about-tools">
                  <li><strong>Figma</strong><span>Interface design, shared ideas, and interactive prototypes.</span></li>
                  <li><strong>Framer</strong><span>Responsive websites and polished interactions.</span></li>
                  <li><strong>Adobe XD</strong><span>Wireframes, prototypes, and user flows.</span></li>
                  <li><strong>Adobe Illustrator</strong><span>Vector graphics, icons, and interface assets.</span></li>
                  <li><strong>Adobe Photoshop</strong><span>Image editing and visual refinement.</span></li>
                  <li><strong>Canva</strong><span>Quick visual assets and presentations.</span></li>
                  <li><strong>Antigravity</strong><span>AI-assisted experiments and rapid prototyping.</span></li>
                  <li><strong>Claude</strong><span>Brainstorming, research synthesis, and refining ideas.</span></li>
                </ul>
              </section>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
