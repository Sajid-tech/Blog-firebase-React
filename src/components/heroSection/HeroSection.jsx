import { Typography } from "@material-tailwind/react";
import React from "react";

function HeroSection() {
  const scrollToHeroSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative w-full h-screen   mb-5 overflow-hidden">
      <img
        className="w-full h-full object-cover object-center"
        src="/bg-hero.jpg"
        alt="nature image"
      />

      {/* Overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <Typography tag="h1" variant="h3" className="mb-4 font-bold">
          Explore the Beauty of the Beautiful World
        </Typography>

        <Typography tag="p" variant="body1">
          Discover amazing places, create unforgettable memories.
        </Typography>
        {/* Scroll down button */}
        <button
          onClick={scrollToHeroSection}
          className="mt-8 text-white bg-transparent border border-solid border-white font-bold uppercase px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black active:bg-white active:text-black focus:outline-none"
          type="button"
          style={{ transition: "all .15s ease" }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
