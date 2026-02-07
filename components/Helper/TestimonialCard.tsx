"use client";
import { testimonialDetails } from "@/constants";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import { BiRightArrow, BiSolidStar } from "react-icons/bi";

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialDetails.length - 1 : prev - 1,
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonialDetails.length - 1 ? 0 : prev + 1,
    );
  };

  const testimonial = testimonialDetails[currentIndex];

  return (
    <div>
      {/* Card */}
      <div className="bg-white py-12 px-10 flex gap-16 rounded-3xl shadow-lg">
        <div className="relative w-[360px] h-[320px] rounded-2xl overflow-hidden">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 relative">
          <p className="quote text-7xl font-bold">“ </p>
          <p className="max-w-[430px] text-[17px] leading-7.5 text-text">
            {testimonial.message}
          </p>
          <p className="font-bold mt-5 text-[26px] ">{testimonial.name} </p>

          {/* Stars */}
          <p className="flex mt-2">
            {Array.from({ length: testimonial.rating }).map((_, idx) => (
              <BiSolidStar key={idx} className="w-7 h-7 text-yellow-400" />
            ))}
          </p>

          <div className="flex gap-4 mt-5 justify-end">
            {/* Left Arrow */}
            <div
              onClick={prevTestimonial}
              className="bg-primary w-9 h-9 flex items-center justify-center rounded-full cursor-pointer"
            >
              <ChevronLeftIcon className="w-6 h-6 text-white" />
            </div>

            {/* Right Arrow */}
            <div
              onClick={nextTestimonial}
              className="bg-primary w-9 h-9 flex items-center justify-center rounded-full cursor-pointer"
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
