"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import { useEffect } from "react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".special-one", {
        scrollTrigger: {
          trigger: ".special-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });

      gsap.to(".special-two", {
        scrollTrigger: {
          trigger: ".special-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });
    });

    mm.add("(min-width:501px)", () => {
      gsap.to(".special-one", {
        scrollTrigger: {
          trigger: ".special-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
      gsap.to(".special-two", {
        scrollTrigger: {
          trigger: ".special-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
    });

    const splitType = document.querySelectorAll(".head-special");
    splitType.forEach((char, i) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" });
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.2,
        });
      }
    });
    gsap.to(".special-arrow", {
      scrollTrigger: {
        trigger: ".special-arrow",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      duration: 0.8,
    });

    gsap.to(".special-items", {
      scrollTrigger: {
        trigger: ".special-items",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      ease: Power4.easeOut,
      duration: 1.5,
    });
  }, []);
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background py-12 md:py-24">
      <div className="z-40 flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4">
        {/* <h3 className="special-one font-open uppercase md:-ml-[50px] text-primary">NEW</h3> */}
        <div className="flex w-full items-center justify-start">
          <p className="rounded-full border-[1px] border-[#f095ac] px-5 py-3 text-center font-cormorant text-3xl font-[300] capitalize text-white">
            Our Menu
          </p>
        </div>
        <div
          className="special-items relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2"
          style={{
            transform: "scale(1.3)",
          }}
        >
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
        <div className="flex w-full items-center justify-center">
          <Button className="rounded-none bg-primary-foreground px-7 py-8 font-cormorant text-lg font-[600] uppercase tracking-[3px] text-white">
            <Link href="/menu"> View Menu </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Special;
