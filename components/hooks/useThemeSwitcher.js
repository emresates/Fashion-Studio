"use client"
import React, { useEffect, useState } from "react";

function useThemeSwitcher() {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("themePortfolio");
    let check = userPref === "dark" ? "dark" : "light";
    setMode(check);
    if (userPref) {
      if (check == "dark") {
        document.documentElement.classList.add("dark");
        setMode(check);
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      let check = mediaQuery.matches ? "dark" : "light";
      setMode(check);
      if (check === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("themePortfolio", "dark");
      document.documentElement.classList.add("dark");
    }

    if (mode === "light") {
      window.localStorage.setItem("themePortfolio", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
}

export default useThemeSwitcher;
