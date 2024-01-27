import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const Timeline = () => {
  const rfMain = useRef(null);
  const rfItems2 = useRef(null);
  const rfItems3 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".ethItemsTimeline1", { y: "-5%" });
    gsap.set(".ethItemsTimeline2", { y: "-3%%" });
    gsap.set(".ethItemsTimeline3", { x: "0%", y: "-5%" });
    gsap.set(".ethItemsTimeline4", { y: "-4%" });

    const intScrllItems1 = gsap.context(() => {
      gsap.from(".ethItemsTimeline1", {
        y: "-15%",
        ease: "none",
        scrollTrigger: {
          trigger: rfMain.current,
          start: "top center",
          end: "center center",
          scrub: true,
        },
      });
    });

    const intScrllItems2 = gsap.context(() => {
      gsap.from(".ethItemsTimeline2", {
        y: "14%",
        ease: "none",
        scrollTrigger: {
          trigger: rfMain.current,
          start: "top center",
          end: "center center",
          scrub: true,
        },
      });
    });

    const intScrllItems3 = gsap.context(() => {
      gsap.from(".ethItemsTimeline3", {
        x: "-14%",
        y: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: ".ethItemsTimeline3",
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      });
    });

    const intScrllItems4 = gsap.context(() => {
      gsap.from(".ethItemsTimeline4", {
        y: "18%",
        ease: "none",
        scrollTrigger: {
          trigger: ".ethItemsTimeline4",
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      });
    });

    return () => {
      intScrllItems1.revert();
      intScrllItems2.revert();
      intScrllItems3.revert();
      intScrllItems4.revert();
    };
  }, []);

  return (
    <>
      <section
        id="ethSeaTimeline"
        ref={rfMain}
        className="flex flex-col relative mt-[118px] lg:mt-[160px] xl:mt-[247px]"
      >
        {/* @assets-backdrop (items)  */}
        <div className="ethItemsTimeline1 flex items-center justify-center absolute -top-[29px] xl:-top-[89px] 2xl:-top-[163px] bottom-auto left-auto lg:-left-[201px] xl:-left-[153px] 2xl:-left-[121px] -right-[205px] sm:-right-[147px] lg:right-auto pointer-events-none transition duration-[0.3s] ease-linear -z-px">
          <Image
            className="rotate-0 lg:rotate-12 xl:rotate-[8deg] 2xl:rotate-12 w-[394px] xl:w-[494px]"
            src="/assets/images/backdrop/ethSea-Items1.png"
            alt="Eth Sea (Items 1 - Timeline Backdrop)"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            height={1295}
            width={735}
            quality="87"
          />
        </div>

        <div className="ethItemsTimeline2 hidden lg:flex items-center justify-center absolute -top-[133px] xl:-top-11 2xl:-top-11 bottom-auto left-auto -right-[229px] xl:-right-[217px] 2xl:-right-[289px] pointer-events-none transition duration-[0.3s] ease-linear -z-px">
          <Image
            className="w-[394px] xl:w-[455px] 2xl:w-[494px]"
            src="/assets/images/backdrop/ethSea-Items2.png"
            alt="Eth Sea (Items 2 - Timeline Backdrop)"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            height={802}
            width={658}
            quality="87"
          />
        </div>

        <div className="ethItemsTimeline3 hidden lg:flex items-center justify-center absolute top-auto -bottom-[281px] lg:-bottom-[237px] xl:-bottom-[307px] 2xl:-bottom-[386px] -left-[271px] xl:-left-[335px] 2xl:-left-[393px] right-auto pointer-events-none -z-px">
          <Image
            className="-rotate-[44deg] w-[437px] xl:w-[525px] 2xl:w-[594px]"
            src="/assets/images/backdrop/ethSea-Items3.png"
            alt="Eth Sea (Items 3 - Timeline Backdrop)"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            height={623}
            width={641}
            quality="87"
          />
        </div>

        <div className="ethItemsTimeline4 hidden lg:flex items-center justify-center absolute top-auto -bottom-[277px] lg:-bottom-[318px] xl:-bottom-[437px] 2xl:-bottom-[416px] left-auto -right-[275px] lg:-right-[219px] xl:-right-[255px] 2xl:-right-[189px] pointer-events-none -z-px">
          <Image
            className="w-[427px] xl:w-[565px] 2xl:w-[594px]"
            src="/assets/images/backdrop/ethSea-Items4.png"
            alt="Eth Sea (Items 4 - Timeline Backdrop)"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            height={843}
            width={653}
            quality="87"
          />
        </div>

        {/* @content */}
        <div className="flex flex-col px-0 sm:px-8">
          <h2 className="text-white font-beliau text-[34px] sm:text-[56px] lg:text-[64px] leading-[34px] sm:leading-[66px] lg:leading-[64px] font-normal capitalize text-center w-full">
            Timeline
          </h2>
        </div>
        <div className="flex flex-col justify-center relative py-6 sm:py-17 lg:py-[147px] pl-3 sm:pl-8 lg:pl-0 mt-8 sm:mt-15 lg:mt-19 mx-auto w-full max-w-full xl:max-w-[947px]">
          <div className="bgLine-Timeline rounded-full absolute block left-3 sm:left-8 lg:left-1/2 h-full w-1 transform translate-x-0 lg:-translate-x-1/2 active"></div>

          <div className="flex flex-row items-center justify-start lg:justify-end mt-0">
            <div className="flex relative pl-6 sm:pl-14 lg:pl-0 w-[68%] lg:w-1/2">
              <div className="itemsLine-Timeline flex items-center justify-center absolute inset-y-0 -left-1.5 sm:-left-2.5 lg:-left-4 right-auto w-max">
                <Image
                  className="h-4 sm:h-6 lg:h-8 w-4 sm:w-6 lg:w-8 rotate-45"
                  src="/assets/images/backdrop/ethSeaItems-Timeline.png"
                  alt="Eth Sea (Items - Timeline)"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  height={42}
                  width={42}
                  quality="87"
                />
              </div>

              <div className="grow pl-0 lg:pl-[121px]">
                <span className="text-white font-spaceGrotesk text-sm sm:text-base lg:text-2xl font-light">
                  1 April — 20 May
                </span>
                <h3 className="text-white font-spaceGrotesk text-base sm:text-2xl lg:text-[32px] lg:leading-[42px] font-bold capitalize mt-1">
                  Open Registration
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start mt-[84px]">
            <div className="flex relative pl-6 sm:pl-14 lg:pl-0 w-[68%] lg:w-1/2">
              <div className="itemsLine-Timeline flex items-center justify-center absolute inset-y-0 -left-1.5 sm:-left-2.5 lg:left-auto right-auto lg:-right-4 w-max">
                <Image
                  className="h-4 sm:h-6 lg:h-8 w-4 sm:w-6 lg:w-8 rotate-45"
                  src="/assets/images/backdrop/ethSeaItems-Timeline.png"
                  alt="Eth Sea (Items - Timeline)"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  height={42}
                  width={42}
                  quality="87"
                />
              </div>

              <div className="grow pr-[121px]">
                <span className="text-white font-spaceGrotesk text-sm sm:text-base lg:text-2xl font-light">
                  2 — 28 May
                </span>
                <h3 className="text-white font-spaceGrotesk text-base sm:text-2xl lg:text-[32px] lg:leading-[42px] font-bold capitalize mt-1">
                  Open Submissions
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start lg:justify-end mt-[84px]">
            <div className="flex relative pl-6 sm:pl-14 lg:pl-0 w-[68%] lg:w-1/2">
              <div className="itemsLine-Timeline flex items-center justify-center absolute inset-y-0 -left-1.5 sm:-left-2.5 lg:-left-4 right-auto w-max">
                <Image
                  className="h-4 sm:h-6 lg:h-8 w-4 sm:w-6 lg:w-8 rotate-45"
                  src="/assets/images/backdrop/ethSeaItems-Timeline.png"
                  alt="Eth Sea (Items - Timeline)"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  height={42}
                  width={42}
                  quality="87"
                />
              </div>

              <div className="grow pl-0 lg:pl-[121px]">
                <span className="text-white font-spaceGrotesk text-sm sm:text-base lg:text-2xl font-light">
                  16 — 25 May
                </span>
                <h3 className="text-white font-spaceGrotesk text-base sm:text-2xl lg:text-[32px] lg:leading-[42px] font-bold capitalize mt-1">
                  ETH SEA Roadshow
                </h3>
                <p className="text-white font-spaceGrotesk text-sm sm:text-xl font-light mt-1">
                  Ho Chi Minh City, Bangkok, Jakarta
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start mt-[84px]">
            <div className="flex relative pl-6 sm:pl-14 lg:pl-0 w-[68%] lg:w-1/2">
              <div className="itemsLine-Timeline flex items-center justify-center absolute inset-y-0 -left-1.5 sm:-left-2.5 lg:left-auto right-auto lg:-right-4 w-max">
                <Image
                  className="h-4 sm:h-6 lg:h-8 w-4 sm:w-6 lg:w-8 rotate-45"
                  src="/assets/images/backdrop/ethSeaItems-Timeline.png"
                  alt="Eth Sea (Items - Timeline)"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  height={42}
                  width={42}
                  quality="87"
                />
              </div>

              <div className="grow pr-[121px]">
                <span className="text-white font-spaceGrotesk text-sm sm:text-base lg:text-2xl font-light">
                  9 June
                </span>
                <h3 className="text-white font-spaceGrotesk text-base sm:text-2xl lg:text-[32px] lg:leading-[42px] font-bold capitalize mt-1">
                  Winner Announcement
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
