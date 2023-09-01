"use client";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import HomeContainer from "../../containers/HomeContainer";
import { useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import ScrollTriggerProxy from "../../components/hooks/scrollTriggerProxy";

export default function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <ScrollTriggerProxy />
      <AnimatePresence>
        <main className="App" data-scroll-container ref={containerRef}>
          <HomeContainer />
        </main>
      </AnimatePresence>
    </LocomotiveScrollProvider>
  );
}
