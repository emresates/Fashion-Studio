import React from "react";
function AboutSection() {
  return (
    <>
      <section
        id="fixed-target"
        className="relative mx-auto flex min-h-screen w-full overflow-hidden xl:w-5/6 xl:overflow-visible xl:px-0"
      >
        <h1
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
          className="absolute z-[5] text-center font-kaushan text-6xl font-light md:text-9xl xl:left-20 xl:top-4"
        >
          About Us
        </h1>
        <div
          data-scroll
          data-scroll-sticky
          data-scroll-target="#fixed-target"
          className="text-md relative z-[5] mx-auto mt-14 w-full rounded-xl px-3 font-light backdrop-blur-sm md:mt-40 md:text-lg xl:w-1/2 xl:rounded-none xl:text-2xl xl:backdrop-blur-0"
        >
          <br />
          We're a passionate team with a love for fashion. Our goal is simple:
          to curate stylish, affordable, and trend-setting clothing for you. We
          believe that fashion should be accessible to everyone, and we're here
          to make that a reality.
          <br />
          <br />
          Our approach is all about blending comfort with style. We handpick
          each piece in our collection, ensuring it not only looks great but
          also feels fantastic to wear. We stay ahead of the fashion curve to
          bring you the latest trends without breaking the bank.
          <br />
          <br />
          We believe that fashion is a form of self-expression and empowerment.
          We are here to inspire and provide a platform for you to explore and
          embrace your personal style journey.
        </div>
        <div className="absolute mx-auto flex w-full items-center justify-center xl:relative xl:w-1/2">
          <img src="./img1.webp" className="object-cover" alt="fashion" />
          <img
            src="./img2.webp"
            data-scroll
            data-scroll-speed="5"
            alt="fashion"
            className="absolute bottom-1/3 right-2/3 w-2/5 md:bottom-[10%] xl:right-[95%]"
          />
          <img
            src="./img3.webp"
            data-scroll
            data-scroll-speed="-2"
            alt="fashion"
            className="absolute bottom-[30%] left-2/3 w-2/5 xl:left-[80%]"
          />
        </div>
      </section>
    </>
  );
}

export default AboutSection;
