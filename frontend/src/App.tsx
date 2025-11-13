import Home from "./pages/Home";
import Info from "./pages/Info";
import SkillsAndCertifications from "./pages/SkillsAndCertifications";
import Contact from "./pages/Contact";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const pages = ["home", "info", "skills-and-certifications", "contact"];

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
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}

export default App;
