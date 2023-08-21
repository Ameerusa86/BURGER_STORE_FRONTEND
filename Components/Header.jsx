"use client";

import Navbarlinks from "@/data/NavbarLinks";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import ThemeButton from "./ThemeButton";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-primaryColor dark:bg-darkColor fixed top-0 left-0 w-full z-50 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <nav className="container relative h-14 flex justify-between items-center">
        <div>
          <Link href="/" className="text-2xl uppercase  font-oswald">
            Food
            <span className="text-secondaryColor">Mania</span>
          </Link>
        </div>

        <div className="hidden absolute top-0 left-0 w-full py-14 bg-primaryColor dark:bg-darkColor border-b border-secondaryColor md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto">
          <ul className="flex flex-col text-center gap-5 md:flex-row">
            {Navbarlinks.map((item) => (
              <li key={item.name}>
                <Link
                  className="nav__link hover:text-secondaryColor ease-in duration-200"
                  href={item.link}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="absolute top-[0.7rem] right-4 text-2xl cursor-pointer md:hidden"
            id="nav-close"
          >
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="flex items-center gap-5 px-3">
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
