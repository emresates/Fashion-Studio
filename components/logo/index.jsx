import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { pathVariants, textVariants } from "../../motionVariants";

function Logo() {
  return (
    <div className="absolute left-4 top-4 z-[5] w-full text-white">
      <Link href="/" className="flex items-end">
        <svg
          className="h-auto w-16 overflow-visible stroke-white stroke-1"
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="none"
        >
          <g>
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
            />
          </g>
        </svg>
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg"
        >
          Lumina Studio
        </motion.h1>
      </Link>
    </div>
  );
}

export default Logo;
