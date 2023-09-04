import React, { useEffect, useState } from "react";
import spainFlag from "../assets/es.svg";
import usaFlag from "../assets/us.svg";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import Switch from "./Switch";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      console.log("hola");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    // REVIEW - Considerar hacerlo sticky
    <header
      className="absolute top-0 right-[20px] z-50 px-6 py-4
        bg-normal-white/60 dark:bg-normal-white/30 backdrop-blur
        rounded-b-2xl border-2 border-[#d8d8d8] dark:border-white/20 border-t-0
        flex gap-4 justify-between 
    "
    >
      <section className="flex gap-2 items-center">
        <img src={spainFlag} alt="Spain flag" className="w-6 h-6" />

        <Switch
          value={isDarkMode}
          onCheck={(checked) => {
            setIsDarkMode(checked);
          }}
        />

        <img src={usaFlag} alt="USA flag" className="w-6 h-6" />
      </section>

      <div
        id="separator"
        className="border border-tertiary-400 dark:border-tertiary-950 h-[25px]"
      ></div>

      <section className="flex gap-2 items-center text-tertiary-400 dark:text-tertiary-950">
        <BsFillSunFill alt="Sun" size={24} />

        <Switch
          value={isDarkMode}
          onCheck={(checked) => {
            setIsDarkMode(checked);
          }}
        />

        <BsFillMoonFill alt="Moon" size={24} />
      </section>
    </header>
  );
}
