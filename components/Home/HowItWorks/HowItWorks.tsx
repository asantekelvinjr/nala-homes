import { howItWorks } from "@/constants";
import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-alt-bg pt-25 pb-20">
      <div className="w-[87%] mx-auto min-h-screen ">
        {/* Heading */}
        <div className="flex flex-col items-center justify-self-center mx-auto">
          <h3 className="uppercase text-red-accent leading-[35px] ">
            -- How It Works --
          </h3>

          <h2 className="text-3xl font-bold text-center text-primary leading-[50px] max-w-[450px]">
            How We Guide You Through Our Simple Process
          </h2>
        </div>

        {/* Cards */}
        <div className="flex items-center justify-center mt-10 gap-10">
          {howItWorks.map((items) => (
            <div 
            key={items.id}
            className="w-fit bg-[#FAFAFA] px-8 py-9 rounded-2xl shadow-lg h-[360px] flex flex-col justify-between ">
              {/* Icon and name */}
              <div className="flex items-center justify-between">
                <Image
                  src={items.imageUrl}
                  width={80}
                  height={80}
                  alt={items.altText}
                />

                <p className="bg-linear-to-r font-semibold title from-[#928D8D]/30 to-[#928D8D]/50 bg-clip-text text-transparent text-6xl">
                  {items.number}
                </p>
              </div>

              <div className="mt-4">
                <h2 className="font-semibold text-[26px]">
                  {items.title}
                </h2>
                <p className="text-text text-[16px] max-w-[260px] leading-9 mt-3 ">
                  {items.description}
                </p>
              </div>
              {/* Arrow Button */}
              <div className="flex justify-end">
                <div className="flex justify-center mt-2 bg-primary w-8 h-8 items-center rounded-full">
                  <ArrowRightIcon className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-25">
          <button className="bg-primary py-3 px-7 rounded-full text-white"> Book Now</button>
        </div>

        
      </div>
    </section>
  );
};

export default HowItWorks;
