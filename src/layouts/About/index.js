import React, { useState } from "react";
import Image from "next/image";

const Benefit = () => {
  return (
    <>
      <section id="ethSeaAbout" className="flex flex-col pt-12">
        <div className="flex flex-col px-0 sm:px-8">
          <h2 className="text-white font-beliau text-[34px] sm:text-[56px] lg:text-[64px] leading-[34px] sm:leading-[66px] lg:leading-[64px] font-normal capitalize text-center mx-auto w-full max-w-full sm:max-w-[627px]">
            Why Participate at ETH SEA
          </h2>
        </div>
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-2 sm:gap-y-4 gap-x-4 mt-6 sm:mt-10 relative">
          <div className="col-span-full sm:col-span-4 lg:col-span-6 xl:col-span-4">
            <div className="ethseaBenefitCard flex flex-col rounded-xl sm:rounded-[14px] relative py-4 sm:py-6 px-4 sm:px-6 h-full">
              <div className="block relative mt-2 ml-2 w-max">
                <Image
                  className="rotate-45 h-6 lg:h-8 w-6 lg:w-8"
                  src="/assets/images/backdrop/ethSea-Benefit.png"
                  alt="Eth Sea (Icons - Benefit)"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  height={32}
                  width={32}
                  quality="87"
                />
              </div>
              <div className="flex flex-col mt-4 sm:mt-6">
                <h3 className="text-white font-spaceGrotesk text-lg lg:text-2xl font-bold first-letter:uppercase">
                  Talent Pool
                </h3>
                <p className="text-white font-spaceGrotesk text-sm sm:text-base lg:text-xl font-light first-letter:uppercase mt-2 min-h-min lg:min-h-[112px]">
                  Instantly tap into the rich talent pool of developers across
                  South East Asia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-full sm:col-span-4 lg:col-span-6 xl:col-span-4">
            <div className="ethseaBenefitCard flex flex-col rounded-xl sm:rounded-[14px] relative py-4 sm:py-6 px-4 sm:px-6 h-full">
              <div className="block relative mt-2 ml-2 w-max">
                <Image
                  className="rotate-45 h-6 lg:h-8 w-6 lg:w-8"
                  src="/assets/images/backdrop/ethSea-Benefit.png"
                  alt="Eth Sea (Icons - Benefit)"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  height={32}
                  width={32}
                  quality="87"
                />
              </div>
              <div className="flex flex-col mt-4 sm:mt-6">
                <h3 className="text-white font-spaceGrotesk text-lg lg:text-2xl font-bold first-letter:uppercase">
                  Emerging Markets
                </h3>
                <p className="text-white font-spaceGrotesk text-sm sm:text-base lg:text-xl font-light first-letter:uppercase mt-2 min-h-min lg:min-h-[112px]">
                  Uncover the fastest growing tech markets where unicorns are
                  born.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-full sm:col-span-4 lg:col-span-6 xl:col-span-4">
            <div className="ethseaBenefitCard flex flex-col rounded-xl sm:rounded-[14px] relative py-4 sm:py-6 px-4 sm:px-6 h-full">
              <div className="block relative mt-2 ml-2 w-max">
                <Image
                  className="rotate-45 h-6 lg:h-8 w-6 lg:w-8"
                  src="/assets/images/backdrop/ethSea-Benefit.png"
                  alt="Eth Sea (Icons - Benefit)"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  height={32}
                  width={32}
                  quality="87"
                />
              </div>
              <div className="flex flex-col mt-4 sm:mt-6">
                <h3 className="text-white font-spaceGrotesk text-lg lg:text-2xl font-bold first-letter:uppercase">
                  Opportunities
                </h3>
                <p className="text-white font-spaceGrotesk text-sm sm:text-base lg:text-xl font-light first-letter:uppercase mt-2 min-h-min lg:min-h-[112px]">
                  Amplify your brand to hyper growth market through our online &
                  offline programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Benefit;
