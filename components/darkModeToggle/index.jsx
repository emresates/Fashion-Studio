"use client";
import React from "react";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

//* ICONS
import { BsCloudSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { WiStars } from "react-icons/wi";

function DarkModeToggle() {
  const [mode, setMode] = useThemeSwitcher("dark");

  return (
    <div className="fixed right-5 top-10 h-6 w-12 rounded-xl bg-black dark:bg-white md:right-10 md:top-1/2 md:w-16 md:-translate-y-1/2">
      <input
        type="checkbox"
        className="hidden"
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        id="checkbox"
      />
      <label
        htmlFor="checkbox"
        className="relative flex h-full w-full cursor-pointer items-center justify-between rounded-2xl p-1 text-white"
      >
        <BsCloudSunFill className="text-lg text-yellow-500" />
        <span
          className={`absolute top-1/2 h-6 w-6 -translate-y-1/2 rounded-3xl bg-white transition-all dark:bg-black ${
            mode === "dark" ? "left-0" : "left-6 md:left-10"
          }`}
        ></span>
        <div className="flex">
          <WiStars className="text-black" />
          <BsFillMoonStarsFill className="dark:text-black" />
        </div>
      </label>
    </div>
  );
}

export default DarkModeToggle;
