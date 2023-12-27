import React from "react";
import Link from "next/link";
import Image from "next/image";

const AsPartOf = () => {
  return (
    <>
      <section className="flex flex-col mt-12 sm:mt-19">
        <div className="flex flex-col px-0 sm:px-8">
          <h2 className="text-white font-beliau text-[34px] sm:text-[56px] lg:text-[64px] leading-[34px] sm:leading-[66px] lg:leading-[64px] font-normal capitalize text-center w-full">
            As part of
          </h2>
        </div>
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-2 sm:gap-y-4 gap-x-2 sm:gap-x-4 relative mt-6 sm:mt-10 mx-auto w-full max-w-full sm:max-w-[776px]">
          <div className="col-span-2 sm:col-span-4 lg:col-span-6">
            <Link
              className="flex flex-col items-center rounded-xl overflow-hidden bg-white outline-none focus-visible:outline-none h-auto"
              href="https://coinfest.asia/"
            >
              <Image
                className="h-[102px] sm:h-full w-full"
                src="/assets/images/partner/aspart-of/ethSea-CoinfestAsia.svg"
                alt="Eth Sea (Coinfest Asia -  As part of Partner)"
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
              href="https://www.web3weekend.asia/"
            >
              <Image
                className="h-[102px] sm:h-full w-full"
                src="/assets/images/partner/aspart-of/ethSea-W3W.svg"
                alt="Eth Sea (W3W -  As part of Partner)"
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
export default AsPartOf;
