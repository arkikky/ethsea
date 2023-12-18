import React from "react";
import Link from "next/link";

const Board = () => {
  return (
    <>
      <section className="flex flex-col mt-19">
        <div className="flex flex-col px-0 sm:px-8">
          <h2 className="text-white font-beliau text-[34px] sm:text-[56px] lg:text-[64px] leading-[34px] sm:leading-[66px] lg:leading-[64px] font-normal capitalize text-center w-full">
            What’s on ETH SEA
          </h2>
        </div>
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-2 sm:gap-y-4 lg:gap-y-0 gap-x-4 lg:gap-x-6 xl:gap-x-8 px-0 sm:px-1 mt-3 sm:mt-8 relative">
          <div className="col-span-full sm:col-span-4 lg:col-span-6">
            <div className="group flex flex-col bg-[#1A1A1A] border-gradient-primary rounded-xl sm:rounded-[14px] relative py-6 lg:py-8 px-6 h-full active">
              <h3 className="text-white font-spaceGrotesk text-xl sm:text-2xl font-bold first-letter:uppercase">
                Hackathon
              </h3>
              <p className="text-white font-spaceGrotesk text-sm sm:text-base lg:text-2xl font-light first-letter:uppercase mt-2">
                Present your solutions globally, enhancing visibility and
                unlocking new opportunities.
              </p>
              <Link
                className="text-[#DEABB5] font-spaceGrotesk text-base sm:text-2xl font-semibold first-letter:uppercase group-active:underline group-hover:underline outline-none focus-visible:outline-none relative mt-4 z-[5]"
                href=""
              >
                Apply Now
              </Link>
            </div>
          </div>
          <div className="col-span-full sm:col-span-4 lg:col-span-6">
            <div className="group flex flex-col bg-[#1A1A1A] border-gradient-primary rounded-xl sm:rounded-[14px] relative py-6 lg:py-8 px-6 h-full">
              <h3 className="text-white font-spaceGrotesk text-xl sm:text-2xl font-bold first-letter:uppercase">
                Hacker House
              </h3>
              <p className="text-white font-spaceGrotesk text-sm sm:text-base lg:text-2xl font-light first-letter:uppercase mt-2">
                Unite at meetups, building key networks and fostering community
                in the Web3 space.
              </p>
              <Link
                className="text-[#DEABB5] font-spaceGrotesk text-base sm:text-2xl font-semibold first-letter:uppercase group-hover:underline outline-none focus-visible:outline-none relative mt-4 z-[5]"
                href=""
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Board;
