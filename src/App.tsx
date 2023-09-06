import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import 'react-tooltip/dist/react-tooltip.css'

function App() {
  return (
    <main
      className="flex flex-col items-center  min-h-[200vh] px-8 md:px-48
      dark:text-normal-white text-normal-black bg-normal-white dark:bg-normal-black
      "
      // transition-colors duration-500
    >
      <section className="p-5 max-w-3xl flex items-center  pt-64" id="Home">
        <Hero />
      </section>

      <section className="flex flex-col items-center pt-64"  id="Projects">
        <Projects />
      </section>

      <section className="flex flex-col items-center pt-64"  id="Experience">
        <Experience />
      </section>

      <section id="About" className="flex flex-col pt-64">
        <About />
      </section>
    </main>
  );
}

export default App;
