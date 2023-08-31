import React from "react";
import useThemeSwitcher from "../../components/hooks/useThemeSwitcher";

function Header() {
  const [mode, setMode] = useThemeSwitcher("dark");

  return (
    <div>
      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className='bg-red-300'
      >
        Button {mode}
      </button>
    </div>
  );
}

export default Header;
