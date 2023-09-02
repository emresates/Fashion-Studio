import React from "react";
import CoverVideo from "./coverVideo";
import Logo from "./logo";
import Navbar from "../navbar";

function HeroSection() {
  return (
    <div id="hero" className="min-h-screen overflow-hidden">
      <CoverVideo />
      <Logo />
      <Navbar />
    </div>
  );
}

export default HeroSection;
