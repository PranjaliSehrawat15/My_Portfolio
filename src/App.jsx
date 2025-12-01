

import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import SkillsSection from "./components/SkillsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onFinish={() => setLoaded(true)} />}

      {loaded && (
        <div className="fade-in">
          <Header />
          <Home />
          <About />
          <Projects />
          <SkillsSection />
          <Contact />
          <Footer />
          <BackToTop />
        </div>
      )}
    </>
  );
}
