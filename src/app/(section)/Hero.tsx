import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="sticky top-0 w-full">
      <div className="relative flex h-[100vh] w-full items-center justify-center px-4 py-12 md:py-24">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="min-h-full min-w-full object-cover"
            style={{ objectPosition: "center" }}
            src="/video/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster=""
          ></video>
        </div>
        <div className="absolute left-0 top-0 h-full w-full bg-black/30" />
        <div className="z-10 flex flex-col items-center justify-center gap-10 md:items-start md:px-[120px]">
          <p className="font-opensans bg-gradient-to-b from-white to-[#191717] bg-clip-text text-center text-3xl font-[200] uppercase tracking-wider text-transparent md:text-start md:text-8xl">
            {/* GREAT TAPAS IN
            <br /> MANCHESTER */}
            BOSPHORUS
          </p>

          {/* <p className="w-full text-center font-cormorant text-2xl font-[400] uppercase text-white md:text-start">
            WELCOME TO CHORLTON TAPAS RESTURANT
          </p> */}
          <Link href="/table-booking">
            <div className="flex w-full flex-wrap items-center justify-center gap-5">
              <Button
                className="font-opensans items-center justify-center rounded-none border-none bg-[#e88829] px-[30px] py-7 text-sm font-[400] tracking-[3px] text-white duration-300 hover:bg-white hover:text-black"
                variant="outline"
                size="lg"
              >
                <p>Reserve Table</p>
              </Button>
              <Button
                className="font-opensans items-center justify-center rounded-none border-none bg-[#e88829] px-[30px] py-7 text-sm font-[400] tracking-[3px] text-white duration-300 hover:bg-white hover:text-black"
                variant="outline"
                size="lg"
              >
                <p>Order Online</p>
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
