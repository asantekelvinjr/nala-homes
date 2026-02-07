import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPaperPlane,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-footer-bg pb-15 pt-20">
      <section className="w-[85%] lg:w-[85%] mx-auto flex flex-col gap-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
          {/* Name & Newsletter */}
          <div className="flex flex-col flex-1 min-w-[250px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/nala logo.png"
                  width={30}
                  height={30}
                  alt="logo"
                />
                <p className="text-white text-2xl font-sans font-bold mt-2">
                  Nala Homes
                </p>
              </div>
              <p className="text-white/80 text-[16px] sm:text-[18px] w-full sm:max-w-full font-light tracking-wide">
                We are a modern real estate platform dedicated to helping
                buyers, sellers, and renters find the perfect property with
                ease.
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-3 w-full">
              <h3 className="text-white text-[18px] sm:text-[20px] font-bold">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-white/80 text-[14px] sm:text-[18px] w-full sm:max-w-full font-light tracking-wide">
                Stay informed with the latest market insights, property updates,
                and curated opportunities.
              </p>

              <div className="relative w-full max-w-md mt-3">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-white text-[#928D8D] border py-3 sm:py-4 pl-12 pr-20 sm:pr-30 rounded-full w-full"
                />
                <button className="absolute right-2 sm:right-2 top-1/2 -translate-y-1/2 bg-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600">
                  <FaPaperPlane className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Pages & Company (Tablet side by side) */}
          <div className="flex flex-col sm:flex-row gap-10 flex-1 min-w-[250px]">
            {/* Pages */}
            <div className="flex-1">
              <h2 className="text-white text-[20px] sm:text-[22px] font-bold">
                Pages
              </h2>
              <ul className="text-white/80 text-[14px] sm:text-lg mt-3 space-y-2">
                <li>Our Team</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>Support</li>
                <li>Properties</li>
                <li>Listings</li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex-1">
              <h2 className="text-white text-[20px] sm:text-[22px] font-bold">
                Company
              </h2>
              <ul className="text-white/80 text-[14px] sm:text-lg mt-3 space-y-2">
                <li>About</li>
                <li>Properties</li>
                <li>Agents</li>
                <li>Gallery</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0">
          {/* Social Links */}
          <div className="flex gap-3">
            <div className="h-10 w-10 flex items-center justify-center bg-white rounded-full">
              <FaFacebookF className="w-5 h-5 text-[#1500FF]" />
            </div>
            <div className="h-10 w-10 flex items-center justify-center bg-white rounded-full">
              <FaInstagram className="w-5 h-5 text-[#F332C9]" />
            </div>
            <div className="h-10 w-10 flex items-center justify-center bg-white rounded-full">
              <FaXTwitter className="w-5 h-5 text-black" />
            </div>
            <div className="h-10 w-10 flex items-center justify-center bg-white rounded-full">
              <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
            </div>
          </div>

          {/* Email & Call */}
          <div className="flex flex-col  sm:flex-row gap-6 lg:gap-15">
            {/* Email */}
            <div className="flex gap-2 items-center">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary">
                <FaEnvelope className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-white text-[14px] sm:text-[16px]">
                  Drop Us an Email
                </p>
                <p className="text-[#928D8D] text-[14px] sm:text-[16px]">
                  nalahomes@gmail.com
                </p>
              </div>
            </div>

            {/* Call */}
            <div className="flex gap-2 items-center">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-[#FD0000]">
                <FaPhone className="w-8 h-8 text-white rotate-90" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-white text-[14px] sm:text-[16px]">
                  Toll Free
                </p>
                <p className="text-[#928D8D] text-[14px] sm:text-[16px]">
                  0800 123 456 97
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line & Copyright */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-[95%] mx-auto border-t-2 border-[#928D8D] mt-10 pt-6 gap-4 sm:gap-0">
        <div>
          <p className="text-white text-[14px] sm:text-[16px]">
            © 2025 Nala Homes All rights reserved
          </p>
        </div>

        <div>
          <ul className="flex flex-wrap mt-5 lg:mt-0 gap-3 sm:gap-5 text-[14px] sm:text-[16px]">
            <li className="text-white">Legal Notice</li>
            <li className="text-white">Privacy Policy</li>
            <li className="text-white">Terms and Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
