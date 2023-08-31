"use client";
import React from "react";
import useThemeSwitcher from "../../components/hooks/useThemeSwitcher";

function HomeContainer() {
  const [mode, setMode] = useThemeSwitcher("dark");
  console.log(mode);
  return (
    <div>
      HomeContainer
      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className='bg-red-300'
      >
        Button {mode}
      </button>
    </div>
  );
}

export default HomeContainer;
