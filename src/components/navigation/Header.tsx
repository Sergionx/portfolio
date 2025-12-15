import { useEffect, useState } from "react";
import { useParams, useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import spainFlag from "@/assets/es.svg";
import usaFlag from "@/assets/us.svg";

import Switch from "../Switch";

export default function Header() {
  const { t } = useTranslation();
  const { locale } = useParams({ from: "/$locale" });
  const navigate = useNavigate({ from: "/$locale" });

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
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    // REVIEW - Considerar hacerlo sticky
    <header
      className="absolute md:fixed flex gap-4 justify-between z-50 px-6 py-4 glass hover:glass-lg
        xs:border-t-0! xs:rounded-b-2xl  rounded-l-2xl xs:rounded-t-none transition-all
        right-0 max-xs:top-10 top-0 xs:right-5 flex-col xs:flex-row 
    "
    >
      <section className="flex gap-2 items-center">
        <img src={spainFlag} alt={t("header.spainFlag")} className="w-6 h-6" />

        <Switch
          value={locale !== "es"}
          onCheck={(checked) => {
            const newLocale = checked ? "en" : "es";
            navigate({
              params: (prev) => ({ ...prev, locale: newLocale }),
            });
          }}
        />

        <img src={usaFlag} alt={t("header.usaFlag")} className="w-6 h-6" />
      </section>

      <div
        id="separator"
        className="border border-tertiary-400 dark:border-tertiary-950 h-6.25 max-xs:hidden"
      />

      <section className="flex gap-2 items-center text-tertiary-800 dark:text-tertiary-300">
        <BsFillSunFill aria-label={t("header.sun")} size={24} />

        <Switch
          value={isDarkMode}
          onCheck={(checked) => {
            setIsDarkMode(checked);
          }}
        />

        <BsFillMoonFill aria-label={t("header.moon")} size={24} />
      </section>
    </header>
  );
}
