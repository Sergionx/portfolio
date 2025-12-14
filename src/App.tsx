import { useTranslation } from "react-i18next";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

import "react-tooltip/dist/react-tooltip.css";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <section
        id={t("sidemenu.home")}
        className="p-5 max-w-3xl flex items-center pt-32 md:pt-64"
      >
        <Hero />
      </section>

      <section
        id={t("sidemenu.projects")}
        className="flex flex-col items-center pt-32"
      >
        <Projects />
      </section>

      <section
        id={t("sidemenu.experience")}
        className="flex flex-col items-center pt-48"
      >
        <Experience />
      </section>

      <section id={t("sidemenu.about")} className="flex flex-col pt-32 pb-72">
        <About />
      </section>
    </>
  );
}

export default App;
