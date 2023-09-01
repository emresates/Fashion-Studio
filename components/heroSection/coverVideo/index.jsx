import React from "react";
import HeroVideo from "../../../public/hero.mp4";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../../motionVariants";

function CoverVideo() {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[1] bg-neutral-950 opacity-50"></div>
      <video
        src={HeroVideo}
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        type="video/mp4"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 right-0 top-0 z-[5] flex flex-col items-center justify-center text-white shadow-red-300 text-shadow-md"
      >
        <div className="flex flex-row text-4xl md:text-9xl">
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.20"
          >
            L
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.16"
          >
            u
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.12"
          >
            m
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.08"
          >
            i
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.06"
          >
            n
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.04"
          >
            a
          </motion.h1>
        </div>
        <motion.h2
          variants={itemVariants}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
          className="mt-6 text-lg xl:text-2xl text-center"
        >
          Inspire. Create. Believe
        </motion.h2>
      </motion.div>
    </section>
  );
}

export default CoverVideo;
