import { useLayoutEffect, useState } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

import { Button } from "../../atoms";

import styles from "./darkModeToggle.module.scss";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkModeStyle = classNames(styles.button, {
    [styles.isDark]: isDarkMode,
  });

  const setAppDarkMode = (isDark) => {
    const htmlElem = document.querySelector("html");
    htmlElem.setAttribute("data-theme", isDark ? "dark" : "light");
  };

  useLayoutEffect(() => {
    if (localStorage.getItem("_theme") === "dark") {
      setAppDarkMode(true);
      setIsDarkMode(true);
    } else {
      setAppDarkMode(false);
      setIsDarkMode(false);
    }
  }, []);

  const handleToggle = () => {
    localStorage.setItem("_theme", isDarkMode ? "light" : "dark");
    setAppDarkMode(!isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  const icon = isDarkMode ? faMoon : faSun;

  return (
    <Button
      aria-label={`Dark mode toggle. Current mode: ${
        isDarkMode ? "dark" : "light"
      }`}
      aria-checked={isDarkMode}
      className={darkModeStyle}
      onClick={handleToggle}
      icon={icon}
    />
  );
};

export default DarkModeToggle;
