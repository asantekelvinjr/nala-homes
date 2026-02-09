import TestimonialCard from "@/components/Helper/TestimonialCard";
import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-off-white pt-25 pb-20">
      <div className="w-[87%] mx-auto min-h-screen ">
        {/* Heading */}
        <div className="flex flex-col items-center justify-self-center mx-auto">
          <h3 className="uppercase text-[13px] lg:text-[16px] text-red-accent leading-[35px] ">
            -- TESTIMONIALS --
          </h3>

          <h2 className="text-2xl lg:text-3xl font-bold text-primary text-center  leading-[40px] lg:leading-[50px] max-w-full  lg:max-w-[400px]">
            What Our Customers Say About Us
          </h2>
        </div>

        {/* Card */}
        <div className="mt-10 flex justify-center">
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
