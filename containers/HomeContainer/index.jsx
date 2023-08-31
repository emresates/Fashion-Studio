import React from "react";
import CoverVideo from "../../components/coverVideo";
import Logo from "../../components/logo";

function HomeContainer() {
  return (
    <>
      <div data-scroll-section className="relative h-[200vh] overflow-hidden">
        <CoverVideo />
        <Logo />
        <h1>Navbar</h1>
      </div>
    </>
  );
}

export default HomeContainer;
