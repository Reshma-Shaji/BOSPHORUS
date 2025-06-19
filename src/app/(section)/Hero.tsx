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
          <p className="font-opensans bg-clip-text text-center text-3xl font-[200] uppercase tracking-wider md:text-start md:text-8xl">
            {/* GREAT TAPAS IN
            <br /> MANCHESTER */}
            BOSPHORUS
          </p>
          {/* <p className="w-full text-center font-cormorant text-2xl font-[400] uppercase text-white md:text-start">
            WELCOME TO CHORLTON TAPAS RESTURANT
          </p> */}
          <Link href="/table-booking">
            <div className="flex flex-row items-center justify-center gap-5">
              <Button
                className="items-center justify-center rounded-none border-white px-[20px] py-7 font-cormorant text-base font-[600] uppercase tracking-[3px] text-white duration-300 hover:bg-[#cccccc66]"
                variant="outline"
                size="lg"
              >
                {/* <p>book table</p> */}
                <p>Reserve Table</p>
              </Button>
              <Button
                className="items-center justify-center rounded-none border-white px-[20px] py-7 font-cormorant text-base font-[600] uppercase tracking-[3px] text-white duration-300 hover:bg-[#cccccc66]"
                variant="outline"
                size="lg"
              >
                {/* <p>book table</p> */}
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
