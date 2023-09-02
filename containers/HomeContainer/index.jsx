import React from "react";
import HeroSection from "../../components/heroSection";
import AboutSection from "../../components/aboutSection";
import ShopSection from "../../components/shopSection";
import Banners from "../../components/banners";
import NewArrivals from "../../components/newArrivals";

function HomeContainer() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ShopSection />
      <Banners />
      <NewArrivals />
    </>
  );
}

export default HomeContainer;
