import { useLayoutEffect, useState, useCallback } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

import { Button } from "../../atoms";

import styles from "./darkModeToggle.module.scss";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkModeStyle = classNames(styles.button, {
    [styles.isDark]: isDarkMode,
  });

  const setDarkModeInBrowser = (isDark) => {
    localStorage.setItem("_theme", isDark ? "dark" : "light");

    const htmlElem = document.querySelector("html");
    htmlElem.setAttribute("data-theme", isDark ? "dark" : "light");
  };

  const setDarkModeValue = useCallback((value) => {
    setDarkModeInBrowser(value);
    setIsDarkMode(value);
  }, []);

  useLayoutEffect(() => {
    const isOSThemeDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const localStoreTheme = localStorage.getItem("_theme");

    if ((!localStoreTheme && isOSThemeDark) || localStoreTheme === "dark") {
      setDarkModeValue(true);
    } else {
      setDarkModeValue(false);
    }
  }, [setDarkModeValue]);

  const handleToggle = () => {
    setDarkModeValue(!isDarkMode);
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
