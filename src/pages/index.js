import React, { useState, useEffect } from "react";
import getConfig from "next/config";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

// @Get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";

// @layouts
import FAQ from "@layouts/FAQ";

const Home = () => {
  // @preline (Add Plugins - Active)
  useEffect(() => {
    import("preline");

    return () => {
      undefined;
    };
  }, []);

  return (
    <main>
      awdawdwa
      <h1 className="text-white font-beliau text-2xl font-bold">
        Unveiling Web3 Marvels from Southeast Asia
      </h1>
      <Container>
        <section className="flex flex-col">
          <div className="flex flex-col px-4 sm:px-8">
            <h2 className="text-white font-beliau text-[34px] sm:text-[56px] lg:text-[64px] leading-[34px] sm:leading-[66px] lg:leading-[64px] font-bold capitalize text-center w-full">
              What’s on ETH SEA
            </h2>
          </div>
          <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-2 sm:gap-y-0 gap-x-8 px-1 mt-3 sm:mt-8 relative">
            <div className="col-span-full sm:col-span-4 lg:col-span-6">
              <div className="flex flex-col bg-[#1A1A1A] relative py-6 px-6 h-full">
                <h3 className="text-white font-spaceGrotesk font-2xl font-bold first-letter:uppercase">
                  Hackathon
                </h3>
                <p className="text-white font-spaceGrotesk font-2xl font-normal first-letter:uppercase">
                  Present your solutions globally, enhancing visibility and
                  unlocking new opportunities.
                </p>
                <Link
                  className="text-[#DEABB5] font-spaceGrotesk font-2xl font-normal first-letter:uppercase hover:underline mt-2"
                  href=""
                >
                  Apply Now
                </Link>
              </div>
            </div>
            <div className="col-span-full sm:col-span-4 lg:col-span-6">
              <div className="flex flex-col bg-[#1A1A1A] relative py-6 px-6 h-full">
                <h3 className="text-white font-spaceGrotesk font-2xl font-bold first-letter:uppercase">
                  Hacker House
                </h3>
                <p className="text-white font-spaceGrotesk font-2xl font-normal first-letter:uppercase">
                  Unite at meetups, building key networks and fostering
                  community in the Web3 space.
                </p>
                <Link
                  className="text-[#DEABB5] font-spaceGrotesk font-2xl font-normal first-letter:uppercase hover:underline mt-2"
                  href=""
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Prize */}
        <section className="flex flex-col mt-[82px]">
          <div className="flex flex-col px-4 sm:px-8">
            <span className="text-white font-spaceGrotesk text-base font-normal text-center first-letter:uppercase">
              Total prize pool
            </span>
            <h2 className="text-white font-beliau text-[82px] leading-[82px] font-medium capitalize text-center mt-4 w-full">
              $50,000
            </h2>
          </div>
          <div>Marquee</div>
          <div className="flex flex-col text-center mt-12">
            <Link
              className="inline-flex flex-col items-center justify-center border-2 border-solid border-white rounded-3xl text-white font-spaceGrotesk text-[32px] leading-[42px] font-medium py-6 px-8 mx-auto w-full max-w-[530px]"
              href=""
            >
              See prize details
            </Link>
          </div>
        </section>

        {/* Mentor & Judges */}
        <section className="flex flex-col mt-28">
          <div className="flex flex-col px-4 sm:px-8">
            <h2 className="text-white font-beliau text-[34px] sm:text-[56px] lg:text-[64px] leading-[34px] sm:leading-[66px] lg:leading-[64px] font-bold capitalize text-center w-full">
              Mentor & Judges
            </h2>
          </div>
          <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-2 sm:gap-y-0 gap-x-8 px-1 mt-3 sm:mt-8 relative">
            <div className="col-span-3"> awd</div>
          </div>
        </section>

        {/* @FAQ (Layouts) */}
        <FAQ />
      </Container>
    </main>
  );
};

export default Home;
