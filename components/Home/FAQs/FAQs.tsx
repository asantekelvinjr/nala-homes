"use client"
import { faqs } from "@/constants";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

// Define the FAQ type
interface FAQ {
  id: number;
  question: string;
  description: string;
}

const FAQs: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null); // Track which FAQ is open

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id); // Close if already open, otherwise open
  };

  return (
    <section className="bg-off-white pt-25 ">
      <div className="w-[87%] mx-auto min-h-screen">
        {/* Heading */}
        <div className="flex flex-col items-center mx-auto">
          <h3 className="uppercase text-red-accent leading-[35px]">
            -- FAQs --
          </h3>

          <h2 className="text-3xl font-bold text-center text-primary leading-[50px] max-w-[450px]">
            Your Questions Answered
          </h2>
        </div>

        {/* FAQ Cards */}
        <div className="flex flex-col gap-8 justify-center items-center mt-10 sm:mt-15">
          {faqs.map((item: FAQ) => (
            <div
              key={item.id}
              className="flex flex-col w-full max-w-[750px] bg-[#FAFAFA] shadow-lg border border-black/10 border-t-0 rounded-3xl"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="flex items-center justify-between px-6 sm:px-12 py-6 w-full"
              >
                <h3 className="font-semibold max-w-[250px] lg:max-w-full text-[16px] sm:text-[21px] text-left">
                  {item.question}
                </h3>
                <div className="text-2xl text-primary">
                  {openId === item.id ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              {/* Answer */}
              {openId === item.id && (
                <p className="px-6 sm:px-12 pb-10 text-text text-[14px] sm:text-[16px] leading-7">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
