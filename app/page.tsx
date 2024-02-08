import Intro from "@/components/intro";
import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <About />
      <Education />
      <Experience />
      <Projects />
    </main>
  );
}
