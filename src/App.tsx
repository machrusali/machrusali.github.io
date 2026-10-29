import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { EducationSection } from "./sections/EducationSection";
import { ExpertiseSection } from "./sections/ExpertiseSection";
import { HeroSection } from "./sections/HeroSection";
import { JourneySection } from "./sections/JourneySection";
import { Navigation } from "./sections/Navigation";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SiteFooter } from "./sections/SiteFooter";

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <div className="section-transition" aria-hidden="true">
          <span className="transition-line" />
          <span className="transition-chip">scroll_to_about()</span>
          <span className="transition-node" />
          <span className="transition-line transition-line-right" />
        </div>
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <JourneySection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
