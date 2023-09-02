import React from "react";
function AboutSection() {
  return (
    <>
      <section
        id="fixed-target"
        className="relative mx-auto mb-6 flex min-h-screen w-full overflow-hidden xl:overflow-visible px-5 md:px-20 xl:mb-0 xl:w-4/5 xl:px-0"
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
          className="relative z-[5] mx-auto mt-20 w-5/6 text-lg font-light backdrop-blur-sm md:mt-40 md:text-xl xl:w-1/2 xl:text-2xl xl:backdrop-blur-0"
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
          Our mission is to celebrate the uniqueness of each individual's style.
          We believe that fashion is a form of self-expression and empowerment.
          We are here to inspire and provide a platform for you to explore and
          embrace your personal style journey.
        </div>
        <div className="absolute top-0 mx-auto w-4/5 xl:relative xl:w-1/2">
          <img src="./img1.webp" alt="fashion" />
          <img
            src="./img2.webp"
            data-scroll
            data-scroll-speed="5"
            alt="fashion"
            className="absolute bottom-[10%] right-2/3 w-2/5 xl:right-[95%]"
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
