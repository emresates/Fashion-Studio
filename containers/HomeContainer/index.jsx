import React from "react";
import CoverVideo from "../../components/coverVideo";
import Logo from "../../components/logo";
import Navbar from "../../components/navbar";

function HomeContainer() {
  return (
    <>
      <div data-scroll-section className="relative h-[200vh] overflow-hidden">
        <CoverVideo />
        <Logo />
        <Navbar />
      </div>
    </>
  );
}

export default HomeContainer;
