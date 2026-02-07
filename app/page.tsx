import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import { EducationTimeline, ExperienceTimeline } from "@/components/sections/timeline";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";
import CommandPalette from "@/components/command-palette";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <EducationTimeline />
      <ExperienceTimeline />
      <Contact />
      <Footer />
      <CommandPalette />
    </main>
  );
}
