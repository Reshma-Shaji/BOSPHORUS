"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white px-4 py-12 md:pb-44 md:pt-[200px]"
    >
      <div className="absolute left-0 top-0 z-40 hidden h-full w-full items-center justify-center py-24 md:flex">
        <div className="flex h-full w-full items-start justify-between px-4 md:px-[190px]">
          <p className="font-Inter w-full items-center justify-center text-center text-xl font-[300] uppercase text-[#ce892f] md:text-5xl">
            EXPLORE OUR TASTE
          </p>
        </div>
        <div className="absolute right-36 top-24 ">
          <button className="bg-[#d19d25] px-6 py-5 text-black shadow-sm duration-300 hover:cursor-pointer hover:bg-white hover:shadow-sm hover:shadow-gray-500">
            VIEW MENU
          </button>
        </div>
      </div>

      <div className="flex w-full items-center justify-center md:px-[120px]">
        {/* <div className="absolute -z-10 h-[700px] w-full rounded-xl border border-[#ce892f] md:w-[90%]" /> */}

        <div className="relative flex flex-wrap justify-center gap-4 md:flex-nowrap">
          <div className="about-one">
            <Image
              src="/images/image3"
              width={500}
              height={650}
              alt="Image 1"
              className="rounded border border-[#ce892f] shadow-lg"
            />
          </div>
          <div className="about-two">
            <Image
              src="/images/image2"
              width={500}
              height={650}
              alt="Image 2"
              className="rounded border border-[#ce892f] shadow-lg"
            />
          </div>
          <div className="about-three">
            <Image
              src="/images/image1"
              width={500}
              height={650}
              alt="Image 3"
              className="rounded border border-[#ce892f] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
