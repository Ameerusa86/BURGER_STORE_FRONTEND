"use client";

import { useTheme } from "next-themes";
import React, { useState } from "react";
import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [toggleTheme, setToggleTheme] = useState(false);
  return (
    <>
      <BsMoon
        className="ri-moon-line cursor-pointer text-xl"
        size={15}
        onClick={() => setToggleTheme(false)}
      />

      <div>
        <FiSun
          className="ri-sun-line cursor-pointer text-xl"
          size={15}
          onClick={() => setToggleTheme(true)}
        />
      </div>
    </>
  );
};

export default ThemeButton;
