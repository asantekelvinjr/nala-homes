"use client";

import { testimonialDetails } from "@/constants";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import { BiSolidStar } from "react-icons/bi";


const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialDetails.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonialDetails.length - 1 ? 0 : prev + 1
    );
  };

  const testimonial = testimonialDetails[currentIndex];

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-0 flex justify-center">
      {/* Card */}
      <div className="bg-white w-[95%] sm:w-[92%] md:w-[90%] lg:w-fit py-8 px-6 lg:py-12 lg:px-10 flex flex-col lg:flex-row gap-6 lg:gap-16 rounded-3xl shadow-lg">

        {/* Image */}
        <div className="relative w-full lg:w-[360px] h-[220px] sm:h-[260px] md:h-[300px] lg:h-80 rounded-2xl overflow-hidden">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 relative text-center lg:text-left">

          <p className="quote text-[40px] sm:text-[55px] md:text-[60px] lg:text-7xl font-bold">
            “
          </p>

          <p className="max-w-full sm:max-w-[420px] md:max-w-[500px] lg:max-w-[430px] text-[14px] sm:text-[16px] md:text-[17px] leading-7 -mt-2 lg:mt-0 text-text mx-auto lg:mx-0">
            {testimonial.message}
          </p>

          <p className="font-bold mt-4 sm:mt-5 text-[20px] sm:text-[24px] md:text-[26px]">
            {testimonial.name}
          </p>

          {/* Stars */}
          <p className="flex mt-2 justify-center lg:justify-start gap-1">
            {Array.from({ length: testimonial.rating }).map((_, idx) => (
              <BiSolidStar
                key={idx}
                className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-400"
              />
            ))}
          </p>

          {/* Navigation */}
          <div className="flex gap-4 mt-4 lg:mt-5 justify-center lg:justify-end">
            <div
              onClick={prevTestimonial}
              className="bg-primary hover:bg-blue-600 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer"
            >
              <ChevronLeftIcon className="w-6 h-6 text-white" />
            </div>

            <div
              onClick={nextTestimonial}
              className="bg-primary hover:bg-blue-600 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer"
            >
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;