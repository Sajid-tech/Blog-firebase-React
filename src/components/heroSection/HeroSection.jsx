import { Typography } from "@material-tailwind/react";
import React from "react";

function HeroSection() {
  return (
    <div className="relative">
      <div>
        <img
          className="w-full h-96 lg:mt-2 object-cover object-center"
          src="https://traveljunkies.com/wp-content/uploads/2023/01/adventure1.jpg"
          alt="nature image"
        />
      </div>
      <div>
        <span className="absolute top-[50%] left-[50%] font-bold text-5xl text-light-green-800 ">
          hello world
        </span>
      </div>
    </div>
  );
}

export default HeroSection;
