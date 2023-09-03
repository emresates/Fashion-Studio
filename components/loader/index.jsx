import React from "react";
import { pathVariantLoader, textVariantLoader } from "../../motionVariants";
import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "100%",
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
      className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-screen w-screen touch-none flex-col items-center justify-center overflow-hidden bg-black"
    >
      <svg
        className="h-auto w-10 overflow-visible stroke-white stroke-1 md:w-40"
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="48px"
        viewBox="0 0 24 24"
        width="48px"
        fill="none"
      >
        <g>
          <motion.path
            variants={pathVariantLoader}
            initial="hidden"
            animate="visible"
            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
          />
        </g>
      </svg>
      <motion.h1
        variants={textVariantLoader}
        initial="hidden"
        animate="visible"
        className="text-md text-white md:text-6xl"
      >
        Lumina Studio
      </motion.h1>
    </motion.div>
  );
}

export default Loader;
