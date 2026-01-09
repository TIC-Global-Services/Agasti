import ProjectHero from "@/components/ProjectHero";
import ProjectAbout from "@/components/ProjectAbout";
import ProjectVillaDescription from "@/components/ProjectVillaDescription";
import ProjectContentGrid from "@/components/ProjectContentGrid";
import ProjectShowcase from "@/components/ProjectShowcase";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectHero />
      <ProjectAbout />
      <ProjectVillaDescription />
      <ProjectContentGrid />
      <ProjectShowcase />
      <AboutCTA />
      <Footer />
    </main>
  );
}