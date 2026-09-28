import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Playlist from "@/components/Playlist";
import Currently from "@/components/Currently";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Playlist />
        <Currently />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
