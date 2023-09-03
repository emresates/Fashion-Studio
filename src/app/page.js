"use client";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import HomeContainer from "../../containers/HomeContainer";
import { useEffect, useRef, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import ScrollTriggerProxy from "../../components/hooks/scrollTriggerProxy";
import Loader from "../../components/loader";

export default function App() {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

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
      <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>
      <ScrollTriggerProxy />
      <AnimatePresence>
        <main className="App" data-scroll-container ref={containerRef}>
          <HomeContainer />
        </main>
      </AnimatePresence>
    </LocomotiveScrollProvider>
  );
}
