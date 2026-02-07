import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-off-white pb-20">
      <div className="flex flex-col w-[87%] mx-auto pt-25">
        {/* Top */}
        <div className="flex justify-center gap-30">
          {/* Left */}
          <div className="flex gap-4 h-fit overflow-hidden">
            {/* Vertical Image */}
            <div>
              <Image
                src="/images/bento-vertical.png"
                alt="left-bento image"
                width={300}
                height={100}
                className="rounded-xl "
              />
            </div>

            {/* Bento Images*/}
            <div className="flex flex-col gap-4">
              {/* Top */}
              <div>
                <Image
                  src="/images/bento-top.png"
                  alt="left-bento image"
                  width={338}
                  height={100}
                  className="rounded-lg"
                />
              </div>

              {/* Bottom */}
              <div>
                <Image
                  src="/images/bento-bottom.png"
                  alt="left-bento image"
                  width={338}
                  height={100}
                  className="rounded-lg "
                />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-10">
            {/* Heading */}
            <div>
              <h3 className="uppercase text-red-accent leading-[35px] ">
                -- About us --
              </h3>

              <h2 className="text-3xl font-bold text-primary leading-[50px] max-w-[400px]">
                Built On Trust, Driven By Excellence
              </h2>
            </div>

            <div className="max-w-[510px] text-[24px] text-text leading-[45px] ">
              With 20+ years of experience, we make buying, selling, and
              investing in real estate simple and seamless, guiding you every
              step of the way.
            </div>

            <div className="flex mt-10 gap-20">
              <div>
                <h3 className="text-5xl text-primary font-semibold title">
                  2.5k +
                </h3>

                <p className="mt-2 text-xl">Homes delivered</p>
              </div>

              <div>
                <h3 className="text-5xl text-primary font-semibold title">
                  50 +
                </h3>

                <p className="mt-2 text-xl">Expert agents</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex gap-40 items-center justify-center mt-30">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 w-fit ">
            <div className="flex items-center mx-auto justify-center rounded-full bg-primary w-[100px] h-[100px] p-5 ml-12">
              <Image
                src="/images/quality-service.png"
                width={36.75}
                height={36.75}
                alt=""
              />
            </div>

            <h2 className="font-semibold text-[26px] mt-1 ">Quality Service</h2>
            <p className="text-[18px] text-text font-regular  max-w-[250px] leading-[35px] ">
              Exceptional service for all your real estate needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 w-fit ">
            <div className="flex items-center mx-auto justify-center rounded-full bg-primary w-[100px] h-[100px] p-5 ml-12">
              <Image
                src="/images/expert-guidance.png"
                width={36.75}
                height={36.75}
                alt=""
              />
            </div>

            <h2 className="font-semibold text-[26px] mt-1 ">Expert Guidance</h2>
            <p className="text-[18px] text-text font-regular  max-w-[250px] leading-[35px] ">
              Trusted expertise to guide your property decisions.{" "}
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-4 w-fit ">
            <div className="flex items-center mx-auto justify-center rounded-full bg-primary w-[100px] h-[100px] p-5 ml-12">
              <Image
                src="/images/tailored-solution.png"
                width={36.75}
                height={36.75}
                alt=""
              />
            </div>

            <h2 className="font-semibold text-[26px] mt-1 ">Tailored Solution</h2>
            <p className="text-[18px] text-text font-normal  max-w-[250px] leading-[35px] ">
              Exceptional service for all your real estate needs.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
