import React from "react";
import HeroSection from "../../components/heroSection";
import AboutSection from "../../components/aboutSection";
import ShopSection from "../../components/shopSection";
import Banners from "../../components/banners";
import NewArrivals from "../../components/newArrivals";
import Footer from "../../components/footer";

function HomeContainer() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <ShopSection />
      <Banners />
      <NewArrivals />
      <Footer />
    </div>
  );
}

export default HomeContainer;
