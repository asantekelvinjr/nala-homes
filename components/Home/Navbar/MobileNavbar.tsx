"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const sections = ["Home", "About", "Properties", "Agents", "Contact"];

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 lg:hidden">
      {/* Top Bar */}
      <div
        className={`backdrop-blur-md transition-colors duration-300
      border-b border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]
      ${scrolled ? 'bg-black/30' : 'bg-none'}`}
      >
        <div
          className="w-[90%] mx-auto flex justify-between items-center py-4
                      "
        >
          <div className="flex items-center gap-3 text-white text-xl font-semibold">
            <Image
              src="/images/nala logo.png"
              width={30}
              height={30}
              alt="Nala Homes logo"
            />
            <span>Nala Homes</span>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40
          transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-3/5 bg-footer-bg text-white z-50
          border-r border-white/20 shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="mt-24 px-6 space-y-6">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-lg py-3 px-4 rounded hover:bg-primary transition"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
