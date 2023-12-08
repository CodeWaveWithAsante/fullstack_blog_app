import React, { useState } from "react";
import useStore from "../store";

const ThemeSwitch = () => {
  const { theme, setTheme } = useStore();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  //   console.log(isDarkMode);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      className={`switch ${isDarkMode ? "light" : "dark"}`}
      onClick={toggleTheme}
    >
      <div className={`ball ${isDarkMode ? "dark" : "light"}`}></div>
    </div>
  );
};

export default ThemeSwitch;
