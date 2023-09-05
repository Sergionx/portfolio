import React, { useState } from "react";
import "./SideMenu.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Header from "./Header";

export default function SideMenu() {
  const [activeLink, setActiveLink] = useState(5);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = ["Home", "Projects", "About", "Contact"];

  // REVIEW - Hover gradient
  const anchorLinks = links.map((link, index) => (
    <li
      className={`link ${activeLink === index ? "active" : ""} ${
        isMenuOpen ? "open" : "closed"
      }`}
      key={index}
      onClick={() => setActiveLink(index)}
    >
      <a href={`#${link}`} className="w-8">
        {link}
      </a>
    </li>
  ));

  return (
    <nav className="">
      <Header />

      <button
        className="fixed left-4 top-4 rounded-lg md:hidden z-[1000] p-1 
          text-normal-black dark:text-normal-white
        "
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <AiOutlineMenu
          size={28}
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
