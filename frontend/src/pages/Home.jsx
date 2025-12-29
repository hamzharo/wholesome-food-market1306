import React from "react";
import Hero from "../components/sections/Hero.jsx";
import Highlights from "../components/sections/Highlights.jsx";
import FeaturedProducts from "../components/sections/FeaturedProducts.jsx";
import LocationCTA from "../components/sections/LocationCTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <FeaturedProducts />
      <LocationCTA />
    </>
  );
}
