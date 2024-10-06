import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      {/* Main Container */}
      <div
        className="overflow-x-hidden text-neutral-900 dark:text-neutral-300
                   bg-light-gradient-bg dark:bg-gradient-bg bg-[400%] antialiased selection:bg-cyan-200 selection:text-cyan-900"
      >
        {/* Background Animation */}
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="h-screen w-screen bg-gradient-bg bg-[400%] animate-gradient"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-10">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
