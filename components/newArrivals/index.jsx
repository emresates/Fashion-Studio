"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

const Product = ({ img, title = "" }) => {
  return (
    <div className="my-20 flex flex-col items-center justify-center">
      <img className="z-[5] h-auto w-full" src={img} alt={title} />
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
};

function NewArrivals() {
  gsap.registerPlugin(ScrollTrigger);

  const refArrival = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = refArrival.current;
    let scrollingElement = ScrollingRef.current;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App",
          scrub: 1,
          pin: true,
        },
        ease: "none",
      });

      //   Vertical scrolling
      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App",
            scrub: 1,
          },
        },
      );
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
      ref={refArrival}
      id="newarrival"
      className="relative mx-auto flex min-h-screen w-full items-center justify-center"
    >
      <div className="absolute left-1/2 top-1/2 z-10 h-[95%] w-2/3 -translate-x-1/2 -translate-y-1/2 border-4 border-black shadow-xxlLight dark:border-white dark:shadow-xxlDark xl:h-5/6 xl:w-1/3" />

      <h1
        data-scroll
        data-scroll-speed="-1"
        data-scroll-direction="horizontal"
        className="absolute right-20 top-4 z-50 font-kaushan text-6xl font-light shadow-black text-shadow-sm md:text-8xl"
      >
        New Arrivals
      </h1>

      <div
        ref={ScrollingRef}
        className="absolute left-1/2 top-10 flex h-auto w-2/4 -translate-x-1/2 flex-col items-center justify-center xl:w-1/4"
      >
        <Product img="./newarrival/img1.webp" title="Sun Glasses" />
        <Product img="./newarrival/img2.webp" title="Coats" />
        <Product img="./newarrival/img3.webp" title="Shirts" />
        <Product img="./newarrival/img4.webp" title="Spring Outfits" />
        <Product img="./newarrival/img5.webp" title="Jeans" />
      </div>

      <p
        data-scroll
        data-scroll-speed="-4"
        className="absolute left-0 top-0 z-10 mt-10 hidden w-1/5 p-8 text-2xl xl:block"
      >
        Each season, we bring you the latest pieces that redefine style and
        elegance. Our New Arrivals collection is a carefully curated selection
        of items designed to keep your style fresh and captivating for every
        occasion. From everyday essentials to statement pieces, our new arrivals
        showcase the hottest trends and timeless classics, ensuring that you're
        always ahead in the fashion game.
      </p>
    </section>
  );
}

export default NewArrivals;
