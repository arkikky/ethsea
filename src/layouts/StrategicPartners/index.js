import React from "react";
import Link from "next/link";
import Image from "next/image";

const StrategicPartners = () => {
  return (
    <>
      <section className="flex flex-col mt-[155px] lg:mt-[215px]">
        <div className="flex flex-col px-0 sm:px-8">
          <h2 className="text-white font-beliau text-[34px] sm:text-[56px] lg:text-[64px] leading-[34px] sm:leading-[66px] lg:leading-[64px] font-normal capitalize text-center w-full">
            Strategic Partners
          </h2>
        </div>
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-2 sm:gap-y-4 gap-x-2 sm:gap-x-4 mt-8 relative">
          <div className="col-span-2 sm:col-span-4 lg:col-span-6">
            <Link
              className="flex flex-col items-center rounded-xl overflow-hidden bg-white outline-none focus-visible:outline-none h-auto"
              href="https://coinvestasi.com/"
            >
              <Image
                className="h-[91px] sm:h-full w-full"
                src="/assets/images/partner/strategies/ethSea-Coinvestasi.svg"
                alt="Eth Sea (Coinvestasi - Strategic Partners Partner)"
                sizes="(max-width: 768px) 150vw, (max-width: 1200px) 50vw, 50vw"
                height={324}
                width={592}
                quality="87"
              />
            </Link>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-6">
            <Link
              className="flex flex-col items-center rounded-xl overflow-hidden bg-white outline-none focus-visible:outline-none h-auto"
              href="https://www.coindesk.id/"
            >
              <Image
                className="h-[91px] sm:h-full w-full"
                src="/assets/images/partner/strategies/ethSea-Coindesk.svg"
                alt="Eth Sea (CoinDesk Indonesia - Strategic Partners Partner)"
                sizes="(max-width: 768px) 150vw, (max-width: 1200px) 50vw, 50vw"
                height={324}
                width={592}
                quality="87"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default StrategicPartners;
