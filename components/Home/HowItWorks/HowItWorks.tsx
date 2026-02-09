import { howItWorks } from "@/constants";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-alt-bg pt-25 pb-20">
      <div className="w-[87%] mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center mx-auto">
          <h3 className="uppercase text-[13px] lg:text-[16px] text-red-accent leading-[35px]">
            -- How It Works --
          </h3>

          <h2 className="text-2xl lg:text-3xl font-bold text-primary text-center lg:text-left leading-[40px] lg:leading-[50px] max-w-full  lg:max-w-[400px]">
            How We Guide You Through Our Simple Process
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {howItWorks.map((items) => (
            <div
              key={items.id}
              className="flex flex-col justify-between bg-[#FAFAFA] px-6 py-8 sm:px-8 sm:py-9 rounded-2xl shadow-lg min-w-[250px] max-w-[320px] flex-1"
            >
              {/* Top: Icon and Number */}
              <div className="flex items-center justify-between mb-4">
                <Image
                  src={items.imageUrl}
                  width={80}
                  height={80}
                  alt={items.altText}
                />
                <p className="bg-linear-to-r font-semibold title from-[#928D8D]/30 to-[#928D8D]/50 bg-clip-text text-transparent text-5xl sm:text-6xl">
                  {items.number}
                </p>
              </div>

              {/* Middle: Title & Description */}
              <div className="mt-2">
                <h2 className="font-semibold text-[22px] sm:text-[24px] md:text-[26px]">
                  {items.title}
                </h2>
                <p className="text-text text-[14px] sm:text-[16px] max-w-full leading-7 sm:leading-9 mt-2">
                  {items.description}
                </p>
              </div>

              {/* Bottom: Arrow */}
              <div className="flex justify-end mt-4">
                <div className="flex justify-center bg-primary w-8 h-8 items-center rounded-full">
                  <ArrowRightIcon className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Now Button */}
        <div className="flex items-center justify-center mt-10 sm:mt-16">
          <button className="bg-primary py-3 px-7 rounded-full text-white text-sm sm:text-base">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
