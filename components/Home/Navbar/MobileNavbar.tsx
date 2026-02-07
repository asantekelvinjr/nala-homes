"use client";

import React, { useState } from "react";
import Image from "next/image";

const sections = ["Home", "About", "Properties", "Agents", "Contact"];

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black lg:hidden">
      {/* Top bar */}
      <div className="w-[90%] mx-auto flex justify-between items-center py-4">
        <div className="flex items-center gap-3 text-white text-xl">
          <Image src="/images/nala logo.png" width={30} height={30} alt="logo" />
          <span>Nala Homes</span>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="text-white">
          {open ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Side menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/5 bg-black text-white transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
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

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[-1]"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
};

export default MobileNavbar;
