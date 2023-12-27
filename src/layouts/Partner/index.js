import React from "react";
import Image from "next/image";

const Partner = () => {
  return (
    <>
      <section id="ethseaPartners" className="flex flex-col mt-19">
        <div className="flex flex-col px-4 sm:px-8">
          <h2 className="text-white font-beliau text-[34px] sm:text-[56px] lg:text-[64px] leading-[34px] sm:leading-[66px] lg:leading-[64px] font-normal capitalize text-center w-full">
            Partners
          </h2>
        </div>
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 gap-y-2 sm:gap-y-4 gap-x-2 sm:gap-x-4 px-1 mt-3 sm:mt-8 relative">
          <div className="col-span-2 sm:col-span-6 lg:col-span-6">
            <div className="bg-white rounded-[10px] flex flex-col items-center justify-center relative h-[135px] sm:h-[231px] xl:h-[324px] w-full">
              <Image
                className="object-center object-cover mx-auto h-auto w-full"
                src="/assets/images/partner/ethsea-Fireblock.svg"
                alt="ETH Sea (Fireblock - Partner)"
                height={172}
                width={390}
                loading="lazy"
                quality="87"
              />
            </div>
          </div>
          <div className="col-span-2 sm:col-span-6 lg:col-span-6">
            <div className="bg-white rounded-[10px] flex flex-col items-center justify-center relative h-[135px] sm:h-[231px] xl:h-[324px] w-full">
              <Image
                className="object-center object-cover mx-auto h-auto w-full"
                src="/assets/images/partner/ethsea-1inch.svg"
                alt="ETH Sea (1inch - Partner)"
                height={172}
                width={390}
                loading="lazy"
                quality="87"
              />
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-4">
            <div className="bg-white rounded-[10px] flex flex-col items-center justify-center relative h-[99px] sm:h-[125px] lg:h-[172px] w-full">
              <Image
                className="object-center object-cover mx-auto h-auto w-full"
                src="/assets/images/partner/ethsea-Ripple.svg"
                alt="ETH Sea (Ripple - Partner)"
                height={172}
                width={390}
                loading="lazy"
                quality="87"
              />
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-4">
            <div className="bg-white rounded-[10px] flex flex-col items-center justify-center relative h-[99px] sm:h-[125px] lg:h-[172px] w-full">
              <Image
                className="object-center object-cover mx-auto h-auto w-full"
                src="/assets/images/partner/ethsea-Fastex.svg"
                alt="ETH Sea (Fastex - Partner)"
                height={172}
                width={390}
                loading="lazy"
                quality="87"
              />
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-4">
            <div className="bg-white rounded-[10px] flex flex-col items-center justify-center relative h-[99px] sm:h-[125px] lg:h-[172px] w-full">
              <Image
                className="object-center object-cover mx-auto h-auto w-full"
                src="/assets/images/partner/ethsea-MetaMask.svg"
                alt="ETH Sea (MetaMask - Partner)"
                height={172}
                width={390}
                loading="lazy"
                quality="87"
              />
            </div>
          </div>
          <div className="col-span-2 sm:col-span-3 lg:col-span-3">
            <div className="bg-white rounded-[10px] flex flex-col items-center justify-center relative h-[99px] sm:h-[125px] lg:h-[172px] w-full">
              <Image
                className="object-center object-cover mx-auto h-auto w-full"
                src="/assets/images/partner/ethsea-Safe.svg"
                alt="ETH Sea (Safe - Partner)"
                height={172}
                width={390}
                loading="lazy"
                quality="87"
              />
            </div>
          </div>
          <div className="col-span-2 sm:col-span-3 lg:col-span-3">
            <div className="bg-white rounded-[10px] flex flex-col items-center justify-center relative h-[99px] sm:h-[125px] lg:h-[172px] w-full">
              <Image
                className="object-center object-cover mx-auto h-auto w-full"
                src="/assets/images/partner/ethsea-ethereumFoundation.svg"
                alt="ETH Sea (ethereumFoundation - Partner)"
                height={172}
                width={390}
                loading="lazy"
                quality="87"
              />
            </div>
          </div>
          <div className="col-span-2 sm:col-span-3 lg:col-span-3">
            <div className="bg-white rounded-[10px] flex flex-col items-center justify-center relative h-[99px] sm:h-[125px] lg:h-[172px] w-full">
              <Image
                className="object-center object-cover mx-auto h-auto w-full"
                src="/assets/images/partner/ethsea-Chainlink.svg"
                alt="ETH Sea (Chainlink - Partner)"
                height={172}
                width={390}
                loading="lazy"
                quality="87"
              />
            </div>
          </div>
          <div className="col-span-2 sm:col-span-3 lg:col-span-3">
            <div className="bg-white rounded-[10px] flex flex-col items-center justify-center relative h-[99px] sm:h-[125px] lg:h-[172px] w-full">
              <Image
                className="object-center object-cover mx-auto h-auto w-full"
                src="/assets/images/partner/ethsea-Safe.svg"
                alt="ETH Sea (Safe - Partner)"
                height={172}
                width={390}
                loading="lazy"
                quality="87"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Partner;
