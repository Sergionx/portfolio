import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  return (
    <>
      <section
        id="Home"
        className="p-5 max-w-3xl flex items-center pt-32 md:pt-64"
      >
        <Hero />
      </section>

      <section id="Projects" className="flex flex-col items-center pt-32">
        <Projects />
      </section>

      <section id="Experience" className="flex flex-col items-center pt-48">
        <Experience />
      </section>

      <section id="About" className="flex flex-col pt-32 pb-72">
        <About />
      </section>
    </>
  );
}

export default App;
