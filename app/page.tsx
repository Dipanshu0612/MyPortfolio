import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import {
  EducationTimeline,
  ExperienceTimeline,
} from "@/components/sections/timeline";
import Certifications from "@/components/sections/certifications";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";
import CommandPalette from "@/components/command-palette";
import MouseSpotlight from "@/components/mouse-spotlight";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <MouseSpotlight />
      <Header />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <ExperienceTimeline />
      <div className="section-divider" />
      <EducationTimeline />
      <div className="section-divider" />
      <Certifications />
      <div className="section-divider" />
      <Gallery />
      <div className="section-divider" />
      <Contact />
      <Footer />
      <CommandPalette />
    </main>
  );
}
