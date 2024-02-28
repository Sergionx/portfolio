import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Header from "./Header";
import "./SideMenu.css";
import { cn } from "../../utils/classnames";

export default function SideMenu() {
  const [activeLink, setActiveLink] = useState(5);
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
    { name: "Home", offset: 0 },
    { name: "Projects", offset: 0 },
    { name: "Experience", offset: 0 },
    { name: "About", offset: -600 },
  ];

  // REVIEW - Hover gradient
  const anchorLinks = links.map((link, index) => (
    <li
      className={cn("link", {
        active: activeLink === index,
        open: isMenuOpen,
        closed: !isMenuOpen,
      })}
      key={index}
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
  ));

  return (
    <nav className="">
      <Header />

      <button
        className="fixed left-4 top-4 rounded-lg md:hidden z-[1000] p-1 
          text-normal-black dark:text-normal-white menu-button
        "
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

      <ul className={`menu ${isMenuOpen ? "open" : "closed"}`}>
        {anchorLinks}
      </ul>
    </nav>
  );
}
