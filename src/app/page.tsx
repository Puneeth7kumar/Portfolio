import { SiteHeader } from "@/components/layout/site-header";
import { ParallaxSection } from "@/components/animations/parallax-section";
import { SectionReveal } from "@/components/animations/section-reveal";
import { AboutSection } from "@/features/home/components/about-section";
import { ContactSection } from "@/features/home/components/contact-section";
import { HeroSection } from "@/features/home/components/hero-section";
import { MoreThanDeveloperSection } from "@/features/home/components/more-than-developer-section";
import { ProjectsSection } from "@/features/home/components/projects-section";
import { SkillsSection } from "@/features/home/components/skills-section";
import { TimelineSection } from "@/features/home/components/timeline-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <SectionReveal>
        <HeroSection />
      </SectionReveal>
      <ParallaxSection offset={18}>
        <SectionReveal>
          <MoreThanDeveloperSection />
        </SectionReveal>
      </ParallaxSection>
      <ParallaxSection offset={24}>
        <SectionReveal>
          <AboutSection />
        </SectionReveal>
      </ParallaxSection>
      <ParallaxSection>
        <SectionReveal>
          <SkillsSection />
        </SectionReveal>
      </ParallaxSection>
      <ParallaxSection offset={36}>
        <SectionReveal>
          <ProjectsSection />
        </SectionReveal>
      </ParallaxSection>
      <ParallaxSection>
        <SectionReveal>
          <TimelineSection />
        </SectionReveal>
      </ParallaxSection>
      <ParallaxSection offset={30}>
        <SectionReveal>
          <ContactSection />
        </SectionReveal>
      </ParallaxSection>
    </main>
  );
}
