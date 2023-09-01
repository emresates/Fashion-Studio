import React from "react";
function AboutSection() {
  return (
    <>
      <div
        data-scroll-section
        className="relative min-h-screen w-full overflow-hidden"
      >
        <div
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
          className="font-kaushan absolute left-20 top-4 z-[5] text-9xl font-light"
        >
          About Us
        </div>
        <div>
            text
        </div>
        <div>
            images
        </div>
      </div>
    </>
  );
}

export default AboutSection;
