import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import CertificationsPreview from "@/components/CertificationsPreview";
import Projects from "@/components/Projects";
// import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Hero />
      <Education />
      <Skills />
      <CertificationsPreview />
      <Projects />
      {/* <About /> */}
      <Contact />
      <Footer />
    </main>
  );
}
