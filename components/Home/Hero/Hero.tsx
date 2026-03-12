"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { propertyDetails } from "@/constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Memoize unique locations to prevent infinite re-renders
  const locations = useMemo(
    () => Array.from(new Set(propertyDetails.map((p) => p.location))),
    [],
  );

  // Update suggestions when inputValue changes
  useEffect(() => {
    if (!inputValue.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = locations.filter((loc) =>
      loc.toLowerCase().includes(inputValue.toLowerCase()),
    );

    setSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
  }, [inputValue, locations]);

  // Hide suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onSuggestionClick = (loc: string) => {
    setInputValue(loc);
    setShowSuggestions(false);
  };

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out",
  });
}, []);

  return (
    <section className="relative h-screen w-screen bg-[url('/images/hero-img.jpg')] bg-cover bg-center bg-no-repeat flex">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div
        className="w-[90%] flex flex-col gap-2 justify-center relative z-10 mx-auto"
        data-aos="fade-up"
        data-aos-anchor-placement="top"
      >
        {/* Heading */}
        <div className="flex mx-auto">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[52px] 2xl:text-[52px] leading-13.5 lg:leading-16 max-w-[600px] text-center lg:text-left lg:max-w-[690px] font-semibold">
            Find Your Dream Property in Minutes
          </h1>
        </div>

        {/* Paragraph */}
        <div className="mt-3 flex mx-auto">
          <p className="text-[20px] text-white max-w-[450px] text-center lg:text-left lg:max-w-[680px]">
            Explore a wide range of homes, apartments, and lands tailored to
            your lifestyle.
          </p>
        </div>

        {/* Input with autocomplete */}
        <div
          className="flex mx-auto w-full lg:w-[690px] justify-center lg:justify-start relative"
          ref={suggestionsRef}
        >
          <div className="relative w-full max-w-md mt-5">
            <FaSearch className="absolute left-5 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search By Location ..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => inputValue && setShowSuggestions(true)}
              className="
                bg-white text-[#928D8D]
                border
                py-4
                pl-10 md:pl-14
                pr-16 md:pr-20
                rounded-full
                w-full
                focus:outline-none
                focus:ring-2
                focus:ring-primary
                focus:border-primary
              "
              autoComplete="off"
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
              aria-label="Search"
            >
              <FaArrowRight className="w-5 h-5" />
            </button>

            {/* Suggestions dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute z-20 top-full mt-1 max-h-52 w-full overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {suggestions.map((loc, index) => (
                  <li
                    key={index}
                    onClick={() => onSuggestionClick(loc)}
                    className="cursor-pointer px-4 py-2 text-gray-900 hover:bg-primary hover:text-white"
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
