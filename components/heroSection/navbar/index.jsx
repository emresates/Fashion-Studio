"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import DarkModeToggle from "../../darkModeToggle";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);

    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 2, delay: 2 }}
      className={`absolute z-50 h-10 w-full text-white transition-all ease-in md:h-20 ${
        clicked ? "top-0 " : "-top-10 md:-top-20"
      }`}
    >
      <motion.div
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 70,
        }}
        dragElastic={0.05}
        dragSnapToOrigin
        className="relative flex h-full w-full items-center justify-between bg-slate-500 px-2 sm:px-20 md:px-40"
      >
        <div
          onClick={() => setClicked(!clicked)}
          className="absolute left-1/2 top-full flex h-6 w-24 -translate-x-1/2 cursor-pointer items-center justify-center rounded-bl-3xl rounded-br-3xl bg-white text-sm font-bold uppercase text-black md:h-10 md:w-40 md:text-xl"
        >
          Menu
        </div>
        <motion.div className="flex w-full items-center justify-around text-sm uppercase sm:text-xl">
          <span
            className="transition-all hover:scale-110 active:scale-90"
            onClick={() => handleScroll("#hero")}
          >
            Home
          </span>
          <span
            className="transition-all hover:scale-110 active:scale-90"
            onClick={() => handleScroll("#fixed-target")}
          >
            About
          </span>
          <span
            className="transition-all hover:scale-110 active:scale-90"
            onClick={() => handleScroll("#shop")}
          >
            Shop
          </span>
          <span
            className="transition-all hover:scale-110 active:scale-90"
            onClick={() => handleScroll("#newarrival")}
          >
            New Arrival
          </span>
        </motion.div>
      </motion.div>
      <DarkModeToggle />
    </motion.nav>
  );
}

export default Navbar;
