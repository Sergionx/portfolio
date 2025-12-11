import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";
import { IoMailSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="shadow-gradient">
      <header className="text-center font-bold relative">
        {/* <h1 className="text-8xl mt-2 text-welcome">Welcome</h1> */}
        <h2 className="font-bold text-4xl min-[300px]:text-6xl sm:text-8xl text-gradient-color">
          {t("hero.greeting")} Sergionx
        </h2>
      </header>

      <p className="text-lg sm:text-xl font-semibold text-center mt-4">
        {t("hero.realNamePrefix")}{" "}
        <span className="font-bold underline underline-offset-2">
          Sergio Suárez
        </span>
      </p>

      {/* TODO - Iconos con gradientes */}
      <footer
        className="flex flex-col sm:flex-row items-center 
          max-sm:w-fit max-w-[500px] mx-auto 
          rounded-xl p-2 gap-4 mt-8 shadow-xs 
          glass-sm hover:glass-lg"
      >
        <a
          className="cursor-pointer hover:text-primary-400 dark:hover:text-primary-700 "
          href="https://github.com/Sergionx"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub aria-label={t("hero.github")} size={32} />
        </a>

        <a
          className="cursor-pointer hover:text-primary-400 dark:hover:text-primary-700"
          href="https://www.linkedin.com/in/sergio-su%C3%A1rez-98266a201/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin aria-label={t("hero.linkedin")} size={32} />
        </a>

        <a
          className="cursor-pointer hover:text-primary-400 dark:hover:text-primary-700"
          href="mailto:sergionx.dev@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <IoMailSharp aria-label={t("hero.email")} size={32} />
        </a>

        <a
          className="sm:ml-auto cursor-pointer bg-primary-400 dark:bg-primary-700 rounded-lg
            text-normal-white font-medium 
            flex items-center gap-2 h-12 p-4"
          href="https://drive.google.com/file/d/1cGySz_gzeF8RiSZucsZBeec2lcLmWfTv/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineDownload size={28} className="hidden sm:block" />
          {t("hero.resume")}
        </a>
      </footer>
    </div>
  );
}
