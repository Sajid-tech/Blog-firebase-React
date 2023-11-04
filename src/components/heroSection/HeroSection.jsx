import { Typography } from "@material-tailwind/react";
import React from "react";

function HeroSection() {
  return (
    <div className=" relative w-full h-96 object-fill">
      <img
        className="h-full w-full  object-cover object-center "
        src="https://traveljunkies.com/wp-content/uploads/2023/01/adventure1.jpg"
        alt="nature image"
      />

      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <div color="blue-gray">Sara Lamalo</div>
          <div color="gray" className="mt-2 font-normal">
            20 July 2022
          </div>
        </div>
        <div variant="h5" color="blue-gray">
          Growth
        </div>
      </figcaption>
    </div>
  );
}

export default HeroSection;
