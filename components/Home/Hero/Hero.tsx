import React from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="
        relative 
        h-screen w-screen 
        bg-[url('/images/hero-img.jpg')] 
        bg-cover bg-center bg-no-repeat flex 
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="w-[90%] flex flex-col gap-2  justify-center relative z-10 mx-auto">
        {/* Heading */}
        <div>
          <h1 className="text-white  text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[52px] 2xl:text-[52px] leading-13.5 lg:leading-16 max-w-[600px] text-center lg:text-left  lg:max-w-[690px] font-semibold">
            Find Your Dream Property in Minutes
          </h1>
        </div>

        <div className="mt-3 flex justify-center">
          <p className="text-[20px] text-white max-w-[450px] text-center lg:text-left lg:max-w-[680px]">
            Explore a wide range of homes, apartments, and lands tailored to
            your lifestyle.
          </p>
        </div>

        <div className="flex justify-center md:justify-start">
          <div className="relative w-full max-w-md mt-5">
            <FaSearch
              className="
        absolute
        left-5 sm:left-12 md:left-4
        top-1/2
        -translate-y-1/2
        text-gray-400
      "
            />

            <input
              type="text"
              placeholder="Search By Location ..."
              className="
        bg-white text-[#928D8D]
        border
        py-4
        pl-10 md:pl-14
        pr-16 md:pr-20
        rounded-full
        w-full
      "
            />

            <button
              className="
        absolute
        right-4
        top-1/2
        -translate-y-1/2
        bg-primary text-white
        w-10 h-10
        rounded-full
        flex items-center justify-center
        hover:bg-blue-600
      "
            >
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
