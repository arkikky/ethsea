import React from "react";
import Link from "next/link";
import Image from "next/image";

const Organized = () => {
  return (
    <>
      <section className="flex flex-col mt-19">
        <div className="flex flex-col px-0 sm:px-8">
          <h2 className="text-white font-beliau text-[34px] sm:text-[56px] lg:text-[64px] leading-[34px] sm:leading-[66px] lg:leading-[64px] font-normal capitalize text-center w-full">
            Organized by
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
          <Link
            className="rounded-xl overflow-hidden bg-white outline-none focus-visible:outline-none"
            href="https://indonesiacrypto.network/"
          >
            <Image
              className="h-[116px] sm:h-full w-full lg:w-[414px] xl:w-[592px]"
              src="/assets/images/partner/organized/ethSea-ICN.svg"
              alt="Eth Sea (Indonesia Crypto Network - Organized Partner)"
              height={324}
              width={592}
              quality="87"
            />
          </Link>
        </div>
      </section>
    </>
  );
};
export default Organized;
