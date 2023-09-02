import React from "react";

function Banners() {
  return (
    <div className="relative mx-auto flex min-h-screen w-4/5 items-center justify-center">
      <div
        id="up"
        className="flex min-h-screen flex-col items-center justify-evenly text-xl sm:text-4xl md:text-5xl xl:text-8xl"
      >
        <h1 className="whitespace-nowrap font-kaushan uppercase">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
            className="block px-2 py-1"
          >
            Fashion is the armor to survive
          </span>
        </h1>
        <h1 className="whitespace-nowrap font-kaushan uppercase">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#up"
            className="block px-2 py-1"
          >
            the reality of everyday life.
          </span>
        </h1>
        <h1 className="whitespace-nowrap font-kaushan uppercase">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
            className="block px-2 py-1"
          >
            Dress like you've made
          </span>
        </h1>
        <h1 className="whitespace-nowrap font-kaushan uppercase">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#up"
            className="block px-2 py-1"
          >
            something of yourself, even
          </span>
        </h1>
        <h1 className="whitespace-nowrap font-kaushan uppercase">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
            className="block px-2 py-1"
          >
            if you haven't.
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Banners;
