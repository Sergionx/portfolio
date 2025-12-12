import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useTranslation } from "react-i18next";

import Header from "./Header";

import { cn } from "@/utils/classnames";

export default function SideMenu() {
  const { t } = useTranslation();

  const [activeLink, setActiveLink] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (!event.target!.closest(".menu-button")) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  const links = [
    { name: t("sidemenu.home"), offset: 0 },
    { name: t("sidemenu.projects"), offset: 0 },
    { name: t("sidemenu.experience"), offset: 0 },
    { name: t("sidemenu.about"), offset: -600 },
  ];

  // REVIEW - Hover gradient
  const anchorLinks = links.map((link, index) => {
    const isActive = activeLink === index;

    // Styles for the decorative line (pseudo-element)
    const lineStyles =
      "after:absolute after:bg-secondary-400 after:top-1/2 after:right-0 after:content-[''] after:transition-all after:duration-300 after:translate-x-[220px] after:-translate-y-1/2 after:h-[3px] after:w-[200px]";

    return (
      <li
        key={index}
        className={cn(
          "text-2xl font-bold w-full text-foreground hover:text-primary-400 transition-all duration-300 ease-in-out opacity-75 hover:opacity-100 hover:scale-110",
          {
            // Active State
            "text-gradient-color scale-125 opacity-100 hover:scale-125":
              isActive,

            // Desktop/Closed Menu positioning
            "-translate-x-10 hover:-translate-x-12.5": !isMenuOpen && !isActive,
            "-translate-x-25": !isMenuOpen && isActive,

            // Decorative Line Logic
            [lineStyles]: !isMenuOpen, // Apply line styles only when menu is closed
            "after:bg-linear-to-r after:from-primary-500 after:to-primary-600":
              !isMenuOpen && isActive,
          }
        )}
      >
        <Link
          spy={true}
          to={link.name}
          activeClass="active"
          onSetActive={() => setActiveLink(index)}
          offset={link.offset}
          onClick={() => setIsMenuOpen(false)}
          className="cursor-pointer"
        >
          {link.name}
        </Link>
      </li>
    );
  });

  return (
    <nav className="">
      <Header />

      <button
        aria-label="Menu"
        className="fixed left-4 top-4 rounded-lg md:hidden z-1000 p-1 
          text-foreground menu-button"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <AiOutlineMenu
          size={28}
          id="menu"
          className={`${isMenuOpen ? "hidden" : "block"}`}
        />
        <AiOutlineClose
          size={28}
          className={`${isMenuOpen ? "block" : "hidden"}`}
        />
      </button>

      <ul
        className={cn(
          "fixed flex flex-col gap-6 items-center z-999 transition-opacity duration-500 ease-in-out opacity-0 md:opacity-100 w-screen right-0 md:w-auto",
          {
            "h-screen backdrop-blur-xl opacity-100 justify-center text-center":
              isMenuOpen,
            "md:right-5 top-1/2 -translate-y-1/2 max-md:invisible text-right":
              !isMenuOpen,
          }
        )}
      >
        {anchorLinks}
      </ul>
    </nav>
  );
}
