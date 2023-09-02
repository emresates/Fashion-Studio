import React from "react";
function AboutSection() {
  return (
    <>
      <div
        id="fixed-target"
        className="relative mx-auto flex flex-col lg:flex-row min-h-screen px-5 md:px-20 xl:px-0 w-full xl:w-4/5 mb-20 xl:mb-0"
      >
        <h1
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
          className="font-kaushan absolute text-center xl:left-20 xl:top-4 z-[5] text-6xl md:text-9xl font-light"
        >
          About Us
        </h1>
        <div
          data-scroll
          data-scroll-sticky
          data-scroll-target="#fixed-target"
          className="relative z-[5] mt-20 md:mt-40 w-full xl:w-1/2 text-lg md:text-xl xl:text-2xl font-light"
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
        <div className="relative mx-auto w-4/5 md:w-1/2">
          <img src="./img1.webp" alt="" />
          <img
            src="./img2.webp"
            data-scroll
            data-scroll-speed="5"
            alt=""
            className="absolute bottom-[10%] right-2/3 md:right-[95%] w-2/5"
          />
          <img
            src="./img3.webp"
            data-scroll
            data-scroll-speed="-2"
            alt=""
            className="absolute bottom-[30%] left-[80%] w-2/5"
          />
        </div>
      </div>
    </>
  );
}

export default AboutSection;
