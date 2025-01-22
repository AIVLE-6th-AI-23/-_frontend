"use client";

import { useState, useEffect } from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("darkMode", isDarkMode.toString());
      document.body.classList.toggle("dark-mode", isDarkMode);
    }
  }, [isDarkMode]);

  const toggleDarkMode = (): void => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return { isDarkMode, toggleDarkMode };
}
