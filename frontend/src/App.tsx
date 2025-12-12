import Home from "./pages/Home";
import Info from "./pages/Info";
import SkillsAndCertifications from "./pages/SkillsAndCertifications";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Chatbot from "./pages/ChatBot";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const pages = [
    "home",
    "info",
    "skills-and-certifications",
    "projects",
    "contact",
  ];

  useGSAP(() => {
    pages.forEach((pageId) => {
      gsap.from(`#${pageId}`, {
        opacity: 0,
        duration: 1,
        ease: "power2.in",
        scrollTrigger: {
          trigger: `#${pageId}`,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.from("#chatBot", {
      opacity: 0,
      display: "none",
      duration: 1,
      delay: 0.5,
      ease: "power2.in",
    });
  }, []);

  return (
    <main>
      <div id="home">
        <Home />
      </div>
      <div id="info">
        <Info />
      </div>
      <div id="skills-and-certifications">
        <SkillsAndCertifications />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <div id="chatBot">
        <Chatbot />
      </div>
    </main>
  );
}

export default App;
