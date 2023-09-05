import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <main
      className="flex flex-col items-center  min-h-[200vh] px-10
      dark:text-normal-white text-normal-black bg-normal-white dark:bg-normal-black
      "
      // transition-colors duration-500
    >
      <section className="p-5 max-w-3xl flex items-center  mt-64">
        <Hero />
      </section>

      <section className="">
        <Projects />
      </section>
    </main>
  );
}

export default App;
