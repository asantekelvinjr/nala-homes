"use client";
import { propertyDetails, propertyStatus } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import {
  HeartIcon as HeartOutline,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

const Properties = () => {
  const [isFav, setIsFav] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [activeStatus, setActiveStatus] = useState("all");

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  const filteredProperties =
    activeStatus === "all"
      ? propertyDetails
      : propertyDetails.filter(
          (property) => property.category === activeStatus,
        );

  return (
    <section className="bg-alt-bg pt-25 pb-20">
      <div className="w-[87%] mx-auto min-h-screen flex flex-col">
        {/* Heading */}
        <div className="flex flex-col items-center justify-self-center mx-auto">
          <h3 className="uppercase text-[13px] lg:text-[16px] text-red-accent leading-[35px] ">
            -- LATEST PROPERTIES --
          </h3>

          <h2 className="text-2xl lg:text-3xl font-bold text-primary text-center lg:text-left leading-[40px] lg:leading-[50px] max-w-full  lg:max-w-[400px]">
            Explore The Newest Properties On The Market
          </h2>
        </div>

        {/* Type Toggle */}

        <div className="mt-10 bg-red">
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 overflow-x-auto sm:overflow-x-visible mx-auto px-4">
            {propertyStatus.map((status) => (
              <button
                key={status.key}
                onClick={() => setActiveStatus(status.key)}
                className={`flex-shrink-0 px-6 py-3 text-lg text-center transition whitespace-nowrap
          ${
            activeStatus === status.key
              ? "bg-primary text-white hover:bg-primary"
              : "border border-primary text-black hover:bg-white/70"
          }
        `}
              >
                {status.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredProperties.map((property) => (
            //    Card
            <div key={property.id} className="shadow-md">
              {/* Image */}
              <div className="relative w-full aspect-4/2">
                <Image
                  src={property.propertyImage}
                  alt="prop"
                  fill
                  className="object-cover"
                />

                {/* <button
                  className="absolute right-3 top-3 bg-white/50 p-2 rounded-full shadow-xl"
                  onClick={() => setIsFav(!isFav)}
                >
                  {isFav ? (
                    <HeartSolid className="w-6 h-6 text-red-500" />
                  ) : (
                    <HeartOutline className="w-6 h-6 text-black" />
                  )}
                </button> */}

                <button
                  className="absolute right-3 top-3 bg-white/50 p-2 rounded-full shadow-xl"
                  onClick={() => toggleFavorite(property.id)}
                >
                  {favorites.includes(property.id) ? (
                    <HeartSolid className="w-6 h-6 text-red-500" />
                  ) : (
                    <HeartOutline className="w-6 h-6 text-black" />
                  )}
                </button>
              </div>

              {/* Content */}
              <div className="py-4 px-6 bg-[#FAFAFA]">
                <h3 className="text-lg font-semibold -tracking-tight">
                  {property.propertyName}
                </h3>
                <div className="flex flex-col mt-2">
                  <div className="flex items-center">
                    <MapPinIcon className="text-black/70 w-6 h-6" />{" "}
                    <span className="text-[12px] ml-2 text-text">
                      {property.location}
                    </span>
                  </div>

                  <div>
                    <p className="text-[12px] text-text ml-8 mt-2">
                      {property.date}
                    </p>
                  </div>

                  {/* Border */}
                  <div className="border-[0.1px] mt-5 border-black/50 "></div>

                  {/* Agent & Price */}
                  <div className=" flex justify-between items-center mt-3">
                    {/* Agent image and name */}
                    <div className=" flex items-center gap-3">
                      <Image
                        src={property.agentImage}
                        width={35}
                        height={35}
                        alt="agent"
                        className="rounded-full"
                      />

                      <span className="font-sans font-medium ">
                        {property.agentName}{" "}
                      </span>
                    </div>

                    <div className="font-semibold">{property.price}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
