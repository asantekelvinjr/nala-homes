import Image from "next/image";
import React from "react";
import { FaFacebook, FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import {
  FaEnvelope,
  FaEnvelopeOpen,
  FaInstagram,
  FaMessage,
  FaPaperPlane,
  FaPhone,
  FaWhatsapp,
  FaX,
  FaXTwitter,
} from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" bg-footer-bg min-h-screen">
      <section className="w-[85%] justify-between pr-30 mx-auto flex flex-col ">
        <div className="flex flex-col w-full mx-auto pt-20">
          {/* Top section */}
          <div className="flex justify-between  gap-20 w-full">
            {/* Name & Newsletter */}
            <div className="flex flex-col">
              <div>
                {/* Name */}
                <div className="flex gap-4 items-center ">
                  <Image
                    src="/images/nala logo.png"
                    width={30}
                    height={30}
                    alt="logo"
                  />
                  <p className="text-white text-2xl mt-2 font-sans font-bold">Nala Homes</p>
                </div>

                {/* Description */}
                <p className="text-white/80 max-w-[350px] mt-3 tracking-wide  font-light text-[18px] font-sans  ">
                  We are a mordern real estate platform dedicated to helping
                  buyers, sellers and renters find the perfect property with
                  ease.
                </p>
              </div>

              <div className="mt-5">
                <div>
                  <h3 className=" text-white text-[20px] font-sans font-bold">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="max-w-[360px] tracking-wide text-white/80 text-[18px] font-sans font-light mt-3 ">
                    Stay informed with the latest market insights property
                    updates and curated opportunities.
                  </p>
                </div>

                <div className="relative w-full max-w-md mt-7">
                  {/* <Image src="/images/footer_email.png" width={100} height={100} alt="logo"/> */}
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="bg-white text-[#928D8D] border py-4 pl-14 pr-30 rounded-full"
                  />

                  <button
                    className="
                    absolute left-86 top-1/2 -translate-y-1/2
                    bg-primary text-white 
                    w-10 h-10 
                    rounded-full 
                    flex items-center justify-center
                    hover:bg-blue-600
                  "
                  >
                    <FaPaperPlane className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Pages */}
            <div className="">
              <h2 className="text-white text-[22px]  font-sans font-bold">Pages</h2>
              <ul className="text-lg font-sans mt-3  text-white/80 space-y-2">
                <li>Our Team</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>Support</li>
                <li>Properties</li>
                <li>Listings</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h2 className="text-white text-[22px] font-sans font-bold">Company</h2>
              <ul className="text-lg font-sans text-white/80 mt-3 space-y-2">
                <li>About</li>
                <li>Properties</li>
                <li>Agents</li>
                <li>Gallery</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between mt-10">
            {/* Social Links */}
            <div className="flex gap-3">
              <div className="h-10 w-10 flex items-center justify-center bg-white rounded-full">
                <FaFacebookF className="w-5 h-5 text-[#1500FF] " />
              </div>

              <div className="h-10 w-10 flex items-center justify-center bg-white rounded-full">
                <FaInstagram className="w-5 h-5 text-[#F332C9] " />
              </div>

              <div className="h-10 w-10 flex items-center justify-center bg-white rounded-full">
                <FaXTwitter className="w-5 h-5 text-[#000000] " />
              </div>

              <div className="h-10 w-10 flex items-center justify-center bg-white rounded-full">
                <FaWhatsapp className="w-5 h-5 text-[#25D366] " />
              </div>
            </div>

            {/* Email and call */}
            <div className="flex gap-15">
              {/* Email */}
              <div className="flex gap-2 items-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary">
                  <FaEnvelope className="w-8 h-8 text-white" />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-white text-[16px] ">Drop Us an Email</p>
                  <p className="text-[#928D8D] text-[16px] ">
                    nalahomes@gmail.com
                  </p>
                </div>
              </div>

              {/* Call */}
              <div className="flex gap-2 items-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-[#FD0000] ">
                  <FaPhone className="w-8 h-8 text-white" />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-white text-[16px] ">Toll Free</p>
                  <p className="text-[#928D8D] text-[16px] ">0800 123 456 97</p>
                </div>
              </div>
            </div>
          </div>
        </div>

         
      </section>

      {/* Line Below and Copyright */}
          <div className="flex justify-between w-[95%] mx-auto border-[#928D8D] border-t-2 mt-20 pt-8">
            {/* Copyright Text */}
            <div>
              <p className="text-white ml-10">
                © 2025 Nala Homes All rights reserved
              </p>
            </div>

            {/* Legal terms etc. */}
            <div>
              <ul className="flex space-x-5  mr-10">
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
