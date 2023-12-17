import React from "react";
import Image from "next/image";

const Timeline = () => {
  return (
    <>
      <section className="flex flex-col relative mt-[118px] sm:mt-[160px]">
        <div className="flex items-center justify-center absolute top-0 bottom-auto left-auto -right-[289px]">
          <Image
            className="w-[494px]"
            src="/assets/images/backdrop/ethSea-Items2.png"
            alt="Eth Sea (Items 2 - Backdrop)"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            height={602}
            width={494}
            quality="87"
          />
        </div>

        <div className="flex flex-col px-0 sm:px-8">
          <h2 className="text-white font-beliau text-[34px] sm:text-[56px] lg:text-[64px] leading-[34px] sm:leading-[66px] lg:leading-[64px] font-normal capitalize text-center w-full">
            Timeline
          </h2>
        </div>
        <div className="flex flex-col justify-center relative py-6 lg:py-[147px] pl-3 sm:pl-8 lg:pl-0 mt-8 sm:mt-15 lg:mt-19 mx-auto w-full max-w-full xl:max-w-[947px]">
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
                  Vietnam, Bangkok, Jakarta
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
