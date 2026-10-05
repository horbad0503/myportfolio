import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import CertModal from "./components/CertModal";
import ServiceModal from "./components/ServiceModal";

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeCert, setActiveCert] = useState(null);
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-[0.35]" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-neon-400/20 to-transparent animate-scan" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services onExplore={setActiveService} />
        <Portfolio
          onOpenProject={setActiveProject}
          onOpenCert={setActiveCert}
        />
        <Contact />
      </main>
      <Footer />

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
      <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
      <ServiceModal
        serviceId={activeService}
        onClose={() => setActiveService(null)}
      />
    </div>
  );
}