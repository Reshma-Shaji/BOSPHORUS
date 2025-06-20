// "use client";
// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitType from "split-type";
// import Image from "next/image";
// import { Bounce } from "gsap";
// import Link from "next/link";

// const WelcomeRes = ({}) => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     const mm = gsap.matchMedia();
//     mm.add("(max-width:500px)", () => {
//       gsap.to(".welcome-one", {
//         scrollTrigger: {
//           trigger: ".welcome-one",
//           toggleActions: "restart none none none",
//           // start: "top 80%", // When the top of the .title enters 80% of the viewport
//           // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
//           // scrub: true
//         },
//         x: 0,
//         duration: 0.8,
//       });

//       gsap.to(".welcome-two", {
//         scrollTrigger: {
//           trigger: ".welcome-two",
//           toggleActions: "restart none none none",
//           // start: "top 80%", // When the top of the .title enters 80% of the viewport
//           // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
//           // scrub: true
//         },
//         x: 0,
//         duration: 0.8,
//       });
//     });

//     mm.add("(min-width:501px)", () => {
//       gsap.to(".welcome-one", {
//         scrollTrigger: {
//           trigger: ".welcome-one",
//           toggleActions: "restart none none none",
//           // start: "top 80%", // When the top of the .title enters 80% of the viewport
//           // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
//           // scrub: true
//         },
//         x: 30,
//         scale: 1,
//         ease: Bounce.easeOut,
//         duration: 1.2,
//       });
//       gsap.to(".welcome-two", {
//         scrollTrigger: {
//           trigger: ".welcome-two",
//           toggleActions: "restart none none none",
//           // start: "top 80%", // When the top of the .title enters 80% of the viewport
//           // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
//           // scrub: true
//         },
//         x: 30,
//         scale: 1,
//         ease: Bounce.easeOut,
//         duration: 0.8,
//       });
//     });

//     const splitType = document.querySelectorAll(".head-welcome");
//     splitType.forEach((char, i) => {
//       if (char instanceof HTMLElement) {
//         const text = new SplitType(char, { types: "chars" });
//         gsap.from(text.chars, {
//           scrollTrigger: {
//             trigger: char,
//             start: "top 80%",
//             end: "top 20%",
//             scrub: true,
//             markers: false,
//           },
//           opacity: 0.2,
//           stagger: 0.3,
//         });
//       }
//     });
//     gsap.to(".about-arrow", {
//       scrollTrigger: {
//         trigger: ".about-arrow",
//         toggleActions: "restart none none none",
//         // start: "top 80%", // When the top of the .title enters 80% of the viewport
//         // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
//         // scrub: true
//       },
//       scale: 1,
//       ease: Bounce.easeInOut,
//       duration: 1.2,
//     });
//   }, []);

//   return (
//     <section
//       id="welcome"
//       className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#fdfdfd]"
//     >
//       <div className="relative z-40 flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden bg-[#fdfdfd] px-4 py-12 md:px-3 lg:flex-row lg:gap-0 lg:py-24">
//         <div className="absolute left-0 top-0 h-full w-full py-12 md:py-24">
//           <div
//             className="h-full w-full"
//             style={{
//               backgroundImage: "url('/images/home/about/bg.png')",
//               backgroundPosition: "center center",
//               backgroundSize: "cover",
//               backgroundRepeat: "no-repeat",
//             }}
//           />
//         </div>
//         <div className="z-30 flex h-full w-full flex-col items-center justify-center gap-5 md:px-[120px] lg:gap-24">
//           {/* <div className="md:px-5 py-6 rounded-full flex flex-col md:flex-row gap-4 items-center justify-center">
//                         <Image
//                             src="/images/home/about/delivery.png"
//                             width={60}
//                             height={39}
//                             alt="welcome"
//                             className=""
//                         />
//                         <div className="font-cormorant font-[400] text-lg md:text-3xl text-black uppercase">Now delivering with{' '}<Link href='/' className="font-cormorant text-primary-foreground border-b-[1px] border-b-primary-foreground">UberEats!</Link></div>
//                     </div> */}

//           <p className="font-opensans text-center text-3xl font-[400] uppercase text-primary-foreground md:text-7xl">
//             {/* WE DO OUR BEST TO<br />
//                         PROVIDE PURE AND<br />
//                         SIMPLE FOOD */}
//             STORY OF BOSPHORUS
//           </p>
//           <p className="font-opensans text-center font-normal text-primary-foreground md:text-2xl">
//             At Bosphorus, you`ll always be greeted with genuine Turkish
//             hospitality from our friendly and <br /> attentive team. Our staff
//             takes pride in making every guest feel at home, ensuring your dining
//             <br />
//             experience is warm, welcoming, and truly memorable.
//           </p>
//           <div className="relative flex w-full items-center justify-center">
//             <Image
//               src="/images/1.webp"
//               width={200}
//               height={600}
//               alt="welcome"
//               className="w-full max-w-[150px] md:max-w-[200px]"
//             />
//             <Image
//               src="/images/3.webp"
//               width={200}
//               height={600}
//               alt="welcome"
//               className="w-full max-w-[150px] md:max-w-[200px]"
//             />
//             <Image
//               src="/images/5.webp"
//               width={200}
//               height={600}
//               alt="welcome"
//               className="w-full max-w-[150px] md:max-w-[200px]"
//             />
//           </div>
//           {/* <div className="flex w-full flex-col items-center justify-center gap-5 md:gap-20">
//             <div className="flex w-full flex-col items-start justify-start md:w-3/4">
//               <p className="w-full font-cormorant text-3xl font-[400] uppercase leading-[35px] text-primary-foreground">
//                 Every day, tapas in manchester offers delicious Tapas made with
//                 the freshest and highest quality meats. With carefully selected
//                 fresh meats, we promise to bring the unique flavors of Spanish
//                 cuisine to life. Quality and freshness are our passions, so
//                 every dish on our menu is designed to provide you with an
//                 unforgettable dining experience
//               </p>
//             </div>
//             <div className="flex w-full flex-col items-center justify-center gap-2 md:w-3/4 md:flex-row md:justify-between">
//               <div className="flex flex-col md:gap-3">
//                 <p className="w-full text-center font-playfair text-4xl font-[400] uppercase text-primary-foreground md:max-w-[60%] md:text-start md:text-7xl">
//                   1,280+
//                 </p>
//                 <p className="w-full text-center font-cormorant text-xl font-[400] text-primary-foreground md:text-start">
//                   Customers
//                 </p>
//               </div>
//               <div className="flex flex-col md:gap-3">
//                 <p className="w-full text-center font-playfair text-4xl font-[400] uppercase text-primary-foreground md:max-w-[60%] md:text-start md:text-7xl">
//                   100%
//                 </p>
//                 <p className="w-full text-center font-cormorant text-xl font-[400] text-primary-foreground md:text-start">
//                   Proven Quality
//                 </p>
//               </div>
//               <div className="flex flex-col md:gap-3">
//                 <p className="w-full text-center font-playfair text-4xl font-[400] uppercase text-primary-foreground md:max-w-[60%] md:text-start md:text-7xl">
//                   36+
//                 </p>
//                 <p className="w-full text-center font-cormorant text-xl font-[400] text-primary-foreground md:text-start">
//                   Tapas Types
//                 </p>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WelcomeRes;
// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitType from "split-type";
// import Image from "next/image";
// import { Bounce } from "gsap";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const WelcomeRes = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     const mm = gsap.matchMedia();

//     mm.add("(max-width:500px)", () => {
//       gsap.to(".welcome-one", {
//         scrollTrigger: {
//           trigger: ".welcome-one",
//           toggleActions: "restart none none none",
//         },
//         x: 0,
//         duration: 0.8,
//       });
//       gsap.to(".welcome-two", {
//         scrollTrigger: {
//           trigger: ".welcome-two",
//           toggleActions: "restart none none none",
//         },
//         x: 0,
//         duration: 0.8,
//       });
//     });

//     mm.add("(min-width:501px)", () => {
//       gsap.to(".welcome-one", {
//         scrollTrigger: {
//           trigger: ".welcome-one",
//           toggleActions: "restart none none none",
//         },
//         x: 30,
//         scale: 1,
//         ease: Bounce.easeOut,
//         duration: 1.2,
//       });
//       gsap.to(".welcome-two", {
//         scrollTrigger: {
//           trigger: ".welcome-two",
//           toggleActions: "restart none none none",
//         },
//         x: 30,
//         scale: 1,
//         ease: Bounce.easeOut,
//         duration: 0.8,
//       });
//     });

//     const splitType = document.querySelectorAll(".head-welcome");
//     splitType.forEach((char) => {
//       if (char instanceof HTMLElement) {
//         const text = new SplitType(char, { types: "chars" });
//         gsap.from(text.chars, {
//           scrollTrigger: {
//             trigger: char,
//             start: "top 80%",
//             end: "top 20%",
//             scrub: true,
//             markers: false,
//           },
//           opacity: 0.2,
//           stagger: 0.3,
//         });
//       }
//     });

//     gsap.to(".about-arrow", {
//       scrollTrigger: {
//         trigger: ".about-arrow",
//         toggleActions: "restart none none none",
//       },
//       scale: 1,
//       ease: Bounce.easeInOut,
//       duration: 1.2,
//     });
//   }, []);

//   return (
//     <section
//       id="welcome"
//       className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#fdfdfd]"
//     >
//       <div className="relative z-40 flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden bg-[#fdfdfd] px-4 py-12 md:px-3 lg:flex-row lg:gap-0 lg:py-24">
//         {/* ✅ Background Image */}
//         <div className="absolute left-0 top-0 h-full w-full py-12 md:py-24">
//           <div
//             className="h-full w-full"
//             style={{
//               backgroundImage: "url('/images/home/about/bg.png')",
//               backgroundPosition: "center center",
//               backgroundSize: "cover",
//               backgroundRepeat: "no-repeat",
//             }}
//           />
//         </div>

//         {/* ✅ Foreground Content */}
//         <div className="z-30 flex h-full w-full flex-col items-center justify-center gap-5 md:px-[120px] lg:gap-24">
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="font-opensans text-center text-3xl font-[400] uppercase text-primary-foreground md:text-7xl"
//           >
//             STORY OF BOSPHORUS
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="font-opensans text-center font-normal text-primary-foreground md:text-2xl"
//           >
//             At Bosphorus, you`ll always be greeted with genuine Turkish
//             hospitality from our friendly and <br /> attentive team. Our staff
//             takes pride in making every guest feel at home, ensuring your dining
//             <br />
//             experience is warm, welcoming, and truly memorable.
//           </motion.p>

//           {/* ✅ Animated Image Group */}
//           <motion.div
//             className="relative flex w-full items-center justify-center gap-4"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <Image
//                 src="/images/1.webp"
//                 width={200}
//                 height={600}
//                 alt="Dish 1"
//                 className="w-full max-w-[150px] md:max-w-[200px]"
//               />
//             </motion.div>

//             <motion.div
//               initial={{ y: 60, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.9, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Image
//                 src="/images/3.webp"
//                 width={200}
//                 height={600}
//                 alt="Dish 2"
//                 className="w-full max-w-[150px] md:max-w-[200px]"
//               />
//             </motion.div>

//             <motion.div
//               initial={{ y: 70, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 1, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               <Image
//                 src="/images/5.webp"
//                 width={200}
//                 height={600}
//                 alt="Dish 3"
//                 className="w-full max-w-[150px] md:max-w-[200px]"
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WelcomeRes;

"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import { Bounce } from "gsap";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger); // moved outside for performance

const WelcomeRes = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 500px)", () => {
      gsap.to(".welcome-one", {
        scrollTrigger: {
          trigger: ".welcome-one",
          toggleActions: "restart none none none",
        },
        x: 0,
        duration: 0.8,
      });
      gsap.to(".welcome-two", {
        scrollTrigger: {
          trigger: ".welcome-two",
          toggleActions: "restart none none none",
        },
        x: 0,
        duration: 0.8,
      });
    });

    mm.add("(min-width: 501px)", () => {
      gsap.to(".welcome-one", {
        scrollTrigger: {
          trigger: ".welcome-one",
          toggleActions: "restart none none none",
        },
        x: 30,
        scale: 1,
        ease: Bounce.easeOut,
        duration: 1.2,
      });
      gsap.to(".welcome-two", {
        scrollTrigger: {
          trigger: ".welcome-two",
          toggleActions: "restart none none none",
        },
        x: 30,
        scale: 1,
        ease: Bounce.easeOut,
        duration: 0.8,
      });
    });

    const splitElements = document.querySelectorAll(".head-welcome");
    splitElements.forEach((el) => {
      if (el instanceof HTMLElement) {
        const split = new SplitType(el, { types: "chars" });
        gsap.from(split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.3,
        });
      }
    });

    gsap.to(".about-arrow", {
      scrollTrigger: {
        trigger: ".about-arrow",
        toggleActions: "restart none none none",
      },
      scale: 1,
      ease: Bounce.easeInOut,
      duration: 1.2,
    });
  }, []);

  return (
    <section
      id="welcome"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black"
    >
      <div className="relative z-40 flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden bg-black px-4 py-12 md:px-3 lg:flex-row lg:gap-0 lg:py-24">
        {/* <div className="absolute left-0 top-0 h-full w-full py-12 md:py-24">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "url('/images/home/about/bg.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div> */}

        <div className="z-30 flex h-full w-full flex-col items-center justify-center gap-5 md:px-[120px] lg:gap-14">
          <p className="sans-serif text-center font-inter text-xl font-[400] uppercase text-[#ce892f] text-primary-foreground md:text-6xl">
            STORY OF BOSPHORUS
          </p>

          <p className="sans-serif text-center font-inter text-sm font-light text-[#ce892f] text-primary-foreground md:text-lg">
            At Bosphorus, you`ll always be greeted with genuine Turkish
            hospitality from our friendly and <br />
            attentive team. Our staff takes pride in making every guest feel at
            home, ensuring your dining <br /> experience is warm, welcoming, and
            truly memorable.
          </p>

          <motion.div
            className="relative flex flex-wrap items-center justify-center gap-6 md:gap-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            {/* {["1", "3", "5"].map((img, i) => (
              <motion.div
                key={img}
                initial={{ y: 50 + i * 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 + i * 0.1, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={`/images/${img}.webp`}
                  width={200}
                  height={600}
                  alt={`Dish ${i + 1}`}
                  className="w-full max-w-[150px] md:max-w-[200px]"
                />
              </motion.div>
            ))} */}
            {["1", "3", "5"].map((img, i) => (
              <motion.div
                key={img}
                initial={{ y: 100 + i * 20, opacity: 0, rotate: -10 }}
                whileInView={{ y: 0, opacity: 1, rotate: 0, scale: 1.05 }}
                transition={{
                  duration: 0.5 + i * 0.2,
                  delay: i * 0.2,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <Image
                  src={`/images/${img}.webp`}
                  width={600}
                  height={500}
                  alt={`Dish ${i + 1}`}
                  className="h-[500px] max-w-[150px] sm:w-[350px] md:max-w-[360px]"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeRes;
