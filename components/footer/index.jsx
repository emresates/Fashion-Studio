import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Footer() {
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
    <footer className="relative my-20 flex min-h-screen w-full flex-col items-center justify-center bg-gray-700">
      <div className="flex flex-col items-center justify-center">
        <img
          data-scroll
          data-scroll-speed="-2"
          className="h-auto w-40"
          src="./star.svg"
          alt="Lumina Studio"
        />
        <h3 className="mt-10 font-kaushan text-3xl">Lumina Studio</h3>
      </div>
      <motion.div
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1,
        }}
        className="mt-16 flex w-3/5 flex-wrap items-center justify-between border-b-2 border-t-2 p-10 font-slab text-2xl font-bold uppercase"
      >
        <span
          className="cursor-pointer transition-all hover:scale-110 active:scale-95"
          onClick={() => handleScroll("#hero")}
        >
          Home
        </span>
        <span
          className="cursor-pointer transition-all hover:scale-110 active:scale-95"
          onClick={() => handleScroll("#fixed-target")}
        >
          About
        </span>
        <span
          className="cursor-pointer transition-all hover:scale-110 active:scale-95"
          onClick={() => handleScroll("#shop")}
        >
          Shop
        </span>
        <span
          className="cursor-pointer transition-all hover:scale-110 active:scale-95"
          onClick={() => handleScroll("#newarrival")}
        >
          New Arrival
        </span>
      </motion.div>
      <div className="my-4 flex w-3/5 items-center justify-between px-4 text-2xl">
        <span
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="horizontal"
        >
          &copy; {new Date().getFullYear()}. All Rights Reserved.
        </span>
        <span
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          Made with &hearts; by{" "}
          <a
            href="https://github.com/emresates"
            className="text-red-300 underline"
            target="_blank"
          >
            Secenory
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
