import React from "react";
import Image from "next/image";

const MentorJudges = () => {
  return (
    <>
      <section className="flex flex-col mt-28">
        <div className="flex flex-col px-4 sm:px-8">
          <h2 className="text-white font-beliau text-[34px] sm:text-[56px] lg:text-[64px] leading-[34px] sm:leading-[66px] lg:leading-[64px] font-normal capitalize text-center w-full">
            Mentor & Judges
          </h2>
        </div>
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-0 px-1 mt-4 sm:mt-10 relative">
          <div className="col-span-2 sm:col-span-4 xl:col-span-3">
            <div className="flex flex-col py-4 sm:py-6 px-4 sm:px-[46px]">
              <div className="text-center relative">
                <Image
                  className="object-center object-cover mx-auto h-auto w-full sm:w-[208px]"
                  src="/assets/images/mentorjudges/ethsea-DavidBlumenfeld.png"
                  alt="ETH Sea (David Blumenfeld- Mentor Judges)"
                  height={258}
                  width={258}
                  loading="lazy"
                  quality="87"
                />
              </div>
              <div className="flex flex-col text-center mt-4 sm:mt-6">
                <h3 className="text-white font-spaceGrotesk text-base sm:text-2xl first-letter:uppercase">
                  David Blumenfeld
                </h3>
                <span className="text-white font-spaceGrotesk text-base sm:text-2xl first-letter:uppercase mt-1">
                  Apecoin
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 xl:col-span-3">
            <div className="flex flex-col py-4 sm:py-6 px-4 sm:px-[46px]">
              <div className="text-center relative">
                <Image
                  className="object-center object-cover mx-auto h-auto w-full sm:w-[208px]"
                  src="/assets/images/mentorjudges/ethsea-DavidBlumenfeld.png"
                  alt="ETH Sea (David Blumenfeld- Mentor Judges)"
                  height={258}
                  width={258}
                  loading="lazy"
                  quality="87"
                />
              </div>
              <div className="flex flex-col text-center mt-4 sm:mt-6">
                <h3 className="text-white font-spaceGrotesk text-base sm:text-2xl first-letter:uppercase">
                  David Blumenfeld
                </h3>
                <span className="text-white font-spaceGrotesk text-base sm:text-2xl first-letter:uppercase mt-1">
                  Apecoin
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 xl:col-span-3">
            <div className="flex flex-col py-4 sm:py-6 px-4 sm:px-[46px]">
              <div className="text-center relative">
                <Image
                  className="object-center object-cover mx-auto h-auto w-full sm:w-[208px]"
                  src="/assets/images/mentorjudges/ethsea-DavidBlumenfeld.png"
                  alt="ETH Sea (David Blumenfeld- Mentor Judges)"
                  height={258}
                  width={258}
                  loading="lazy"
                  quality="87"
                />
              </div>
              <div className="flex flex-col text-center mt-4 sm:mt-6">
                <h3 className="text-white font-spaceGrotesk text-base sm:text-2xl first-letter:uppercase">
                  David Blumenfeld
                </h3>
                <span className="text-white font-spaceGrotesk text-base sm:text-2xl first-letter:uppercase mt-1">
                  Apecoin
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 xl:col-span-3">
            <div className="flex flex-col py-4 sm:py-6 px-4 sm:px-[46px]">
              <div className="text-center relative">
                <Image
                  className="object-center object-cover mx-auto h-auto w-full sm:w-[208px]"
                  src="/assets/images/mentorjudges/ethsea-DavidBlumenfeld.png"
                  alt="ETH Sea (David Blumenfeld- Mentor Judges)"
                  height={258}
                  width={258}
                  loading="lazy"
                  quality="87"
                />
              </div>
              <div className="flex flex-col text-center mt-4 sm:mt-6">
                <h3 className="text-white font-spaceGrotesk text-base sm:text-2xl first-letter:uppercase">
                  David Blumenfeld
                </h3>
                <span className="text-white font-spaceGrotesk text-base sm:text-2xl first-letter:uppercase mt-1">
                  Apecoin
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MentorJudges;
