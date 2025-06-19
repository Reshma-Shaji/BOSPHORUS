"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const images = [".about-one", ".about-two", ".about-three", ".about-four"];

    images.forEach((cls, index) => {
      gsap.fromTo(
        cls,
        {
          opacity: 0,
          scale: 0.8,
          rotate: index % 2 === 0 ? -10 : 10,
        },
        {
          scrollTrigger: {
            trigger: cls,
            toggleActions: "restart none none none",
            scrub: true,

            start: "top 90%",
          },
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1,
          delay: index * 0.3,
          ease: "power3.out",
        },
      );
    });
  }, []);

  return (
    <section
      id="about"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#63051c] px-4 py-12 md:pb-44 md:pt-[350px]"
    >
      <div className="absolute left-0 top-0 z-40 hidden h-full w-full items-center justify-center py-24 md:flex">
        <div className="flex h-full w-full items-start justify-between px-4 md:px-[190px]">
          <p className="font-opensans w-full max-w-[850px] items-center justify-center text-center text-xl font-[400] uppercase text-[#ECE6D6] md:text-7xl">
            EXPLORE OUR TASTE
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-center md:px-[120px]">
        <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap">
          <div className="about-one">
            <Image
              src="/images/image3"
              width={300}
              height={400}
              alt="Image 1"
              className="rounded border border-yellow-500 shadow-lg"
            />
          </div>
          <div className="about-two">
            <Image
              src="/images/image2"
              width={300}
              height={400}
              alt="Image 2"
              className="rounded border border-yellow-500 shadow-lg"
            />
          </div>
          <div className="about-three">
            <Image
              src="/images/image1"
              width={300}
              height={400}
              alt="Image 3"
              className="rounded border border-yellow-500 shadow-lg"
            />
          </div>
          <div className="about-four">
            <div className="about-four">
              <Image
                src="/images/3.webp"
                alt="Image 4"
                width={200}
                height={300}
                className="h-[400px] w-[300px] rounded border border-yellow-500 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
