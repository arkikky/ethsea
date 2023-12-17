import React, { useState } from "react";
import Image from "next/image";

const Benefit = () => {
  return (
    <>
      <section>
        <div className="flex flex-col">
          <div className="relative w-max">
            <Image
              className="h-[50px] sm:h-[64px] w-auto"
              src="/assets/images/ethSea-White.svg"
              alt="Eth Sea (Brand Primary - Benefit)"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              height={32}
              width={32}
              quality="87"
            />
          </div>
          <h2 className="text-white font-spaceGrotesk text-base sm:text-2xl font-light first-letter:uppercase mt-6">
            ETH South East Asia (SEA) taps into the rich talent pool within
            emerging markets through an online hackathon coupled with IRL
            workshops.
          </h2>
        </div>
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-2 sm:gap-y-4 gap-x-4 mt-6 relative">
          <div className="col-span-full sm:col-span-4 lg:col-span-6 xl:col-span-4">
            <div className="ethseaBenefitCard flex flex-col rounded-xl sm:rounded-[14px] relative py-4 sm:py-6 px-4 sm:px-6 h-full">
              <div className="block relative w-max">
                <Image
                  className="h-6 lg:h-8 w-6 lg:w-8"
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
                  Global Exposure
                </h3>
                <p className="text-white font-spaceGrotesk text-sm sm:text-base lg:text-xl font-light first-letter:uppercase mt-2 min-h-min lg:min-h-[112px]">
                  Gain unparalleled exposure attracting international attention
                  and investment opportunities
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-full sm:col-span-4 lg:col-span-6 xl:col-span-4">
            <div className="ethseaBenefitCard flex flex-col rounded-xl sm:rounded-[14px] relative py-4 sm:py-6 px-4 sm:px-6 h-full">
              <div className="block relative w-max">
                <Image
                  className="h-6 lg:h-8 w-6 lg:w-8"
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
                  Holistic Ecosystem
                </h3>
                <p className="text-white font-spaceGrotesk text-sm sm:text-base lg:text-xl font-light first-letter:uppercase mt-2 min-h-min lg:min-h-[112px]">
                  Build connections and networks through strong community bonds
                  across the region
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-full sm:col-span-4 lg:col-span-6 xl:col-span-4">
            <div className="ethseaBenefitCard flex flex-col rounded-xl sm:rounded-[14px] relative py-4 sm:py-6 px-4 sm:px-6 h-full">
              <div className="block relative w-max">
                <Image
                  className="h-6 lg:h-8 w-6 lg:w-8"
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
                  Accessible Opportunities
                </h3>
                <p className="text-white font-spaceGrotesk text-sm sm:text-base lg:text-xl font-light first-letter:uppercase mt-2 min-h-min lg:min-h-[112px]">
                  Regardless of background or experience, everyone has the
                  opportunity to participate and contribute to Web3 development
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
