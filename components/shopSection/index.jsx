"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";

const Product = ({ img, title = "" }) => {
  return (
    <motion.div
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
      className="mr-24 inline-block w-80"
    >
      <img className="h-auto w-full cursor-pointer" src={img} alt={title} />
      <h1 className="font-sedgwick mt-3 text-center text-3xl font-medium tracking-widest">
        {title}
      </h1>
    </motion.div>
  );
};

function ShopSection() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App",
          scrub: 1,
          pin: true,
        },
        // we have to increase scrolling height of this section same as the scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      //   Horizontal scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App",
          scrub: 1,
        },

        x: -pinWrapWidth,
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);

    ScrollTrigger.refresh();
    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative mx-auto my-0 flex h-auto min-h-screen w-full items-start justify-start overflow-hidden"
    >
      <h1
        data-scroll
        data-scroll-speed="-1"
        className="font-kaushan absolute left-20 top-4 z-10 text-9xl font-light text-white shadow-black text-shadow-md dark:text-black dark:shadow-white"
      >
        New Collection
      </h1>

      <div className="fixed left-0 z-[5] flex min-h-screen w-2/5 items-center justify-center bg-gray-800 dark:bg-gray-300">
        <p className="w-4/5 text-lg font-thin text-white dark:text-black">
          Elevate your style with our brand-new collection that just arrived.
          We've carefully curated this selection of fashion-forward pieces to
          keep you on-trend and ready for any occasion. From casual chic to
          elegant evening wear, our new collection has it all.
          <br />
          <br />
          Explore the season's hottest trends, from vibrant prints and bold
          colors to timeless classics with a modern twist. Our new arrivals are
          designed to inspire and empower your unique fashion journey. Whether
          you're updating your wardrobe or searching for that perfect statement
          piece, our latest collection has something to suit every style and
          preference. Stay ahead of the fashion curve and shop the freshest
          looks of the season today.
        </p>
      </div>

      <div
        data-scroll
        ref={horizontalRef}
        className="absolute left-[40%] flex min-h-screen items-center justify-start pl-[30%]"
      >
        <Product img="./newarrival/img1.webp" title="Street Fashion" />
        <Product img="./newarrival/img2.webp" title="Casual" />
        <Product img="./newarrival/img3.webp" title="Compatible" />
        <Product img="./newarrival/img5.webp" title="Relaxed" />
        <Product img="./newarrival/img6.webp" title="Elegant" />
        <Product img="./newarrival/img7.webp" title="Harmonious" />
        <Product img="./newarrival/img8.webp" title="Western" />
        <Product img="./newarrival/img9.webp" title="Coherent" />
      </div>
    </section>
  );
}

export default ShopSection;
