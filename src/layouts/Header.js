import React from "react";
import Link from "next/link";
import Image from "next/image";

// @components
import Container from "@components/Container";

const Header = () => {
  return (
    <>
      <header className="overflow-hidden relative mb-15 pt-[125px] sm:pt-[187px] h-auto sm:h-[940px] w-full">
        {/* Header Backdrop (Cover Line) */}
        <div className="absolute inset-y-0 inset-x-0 -z-px">
          <Image
            className="object-bottom object-cover h-full w-full"
            src="/assets/images/backdrop/ethSeaLines.svg"
            alt="ETH Sea (Header Backdrop (Cover Line)"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            height={940}
            width={1440}
            loading="lazy"
            quality="87"
          />
        </div>

        {/* Header Items Backdrop (Polygon) */}
        <div className="absolute inset-y-0 left-auto -right-[89px] sm:-right-[219px] xl:right-0 h-[487px] sm:h-full -z-px">
          <Image
            className="object-bottom object-cover h-full w-full"
            src="/assets/images/ethSeaPolygon-Header.png"
            alt="ETH Sea (Header (Polygon)"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            height={673}
            width={888}
            loading="lazy"
            quality="87"
          />
        </div>
        <Container>
          <div className="flex flex-col w-full max-w-[735px]">
            <span className="text-gradient-label font-spaceGrotesk text-xl font-semibold w-max">
              April — May 2024
            </span>
            <h1 className="text-white font-beliau text-[46px] sm:text-[96px] leading-[46px] sm:leading-[96px] font-normal mt-4">
              Unveiling Web3 Marvels from Southeast Asia
            </h1>
            <p className="text-white font-spaceGrotesk text-base sm:text-2xl font-light mt-4">
              {
                "ETH South East Asia (SEA) taps into the rich talent pool within emerging markets through an online hackathon coupled with IRL workshops."
              }
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center flex-wrap mt-8 w-full">
              <Link
                className="flex-1 inline-flex flex-row items-center justify-center bg-gradient-primary border border-solid border-white rounded-xl text-white font-spaceGrotesk text-base sm:text-lg font-medium capitalize outline-none focus-visible:outline-none py-4 sm:py-6 px-6 w-full max-w-full sm:max-w-fit"
                href=""
              >
                <svg
                  className="mr-1 h-4.5 sm:h-6 w-4.5 sm:w-6"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.7861 13.1448C21.8341 18.5968 17.7779 23.2753 12.3794 23.8901C12.2654 23.9028 12.1507 23.9089 12.036 23.9086C10.9614 23.9086 5.15308 23.9086 3.00771 23.8218C2.58993 23.7718 2.19285 23.612 1.85687 23.3588C1.5209 23.1055 1.25801 22.7677 1.09497 22.3798C1.41605 22.5215 1.76004 22.604 2.11042 22.6235C2.84893 22.69 4.1524 22.6235 5.93036 22.6235C7.82278 22.6235 9.86845 22.6402 10.8488 22.6494C11.372 22.6568 11.8948 22.6166 12.4108 22.5294C14.8909 22.0972 17.1531 20.8419 18.8321 18.9661C20.4629 17.1653 21.495 14.9031 21.7861 12.4912V13.1448Z"
                    fill="white"
                  />
                  <path
                    d="M20.9258 10.7999C20.9385 13.4679 19.9549 16.0444 18.1674 18.0251C16.38 20.0058 13.9176 21.248 11.2624 21.5083H2.21566C1.59595 21.4189 1.02975 21.1076 0.622269 20.6322C0.214786 20.1568 -0.00628142 19.5496 0.000135889 18.9235V2.67633C0.000135889 1.38394 0.923272 0.0915527 2.21566 0.0915527H11.447C14.0854 0.354163 16.5274 1.60299 18.2848 3.58833C20.0421 5.57367 20.9853 8.1492 20.9258 10.7999Z"
                    fill="white"
                  />
                </svg>
                Applications open soon
              </Link>
              <Link
                className="flex-1 inline-flex flex-col items-center justify-center bg-transparent border border-solid border-transparent rounded-xl text-white font-spaceGrotesk text-base sm:text-lg font-medium capitalize hover:underline outline-none focus-visible:outline-none py-4 sm:py-6 px-6 w-full max-w-full sm:max-w-fit"
                href="https://share.hsforms.com/15eAlxOlASAiSLpqC_YyMqAcjggg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Interested in hosting a track?
              </Link>
            </div>
            <div className="inline-flex flex-row flex-wrap mt-19 gap-x-[42px] w-full max-w-full">
              {/* <div className="flex-1 flex flex-col items-center justify-center w-full max-w-fit">
                <Image
                  className="object-bottom object-cover h-auto sm:h-[89px] w-[160px] sm:w-auto"
                  src="/assets/images/partner/header/ethsea-ETHGlobal.svg"
                  alt="ETH Sea (ETH GLobal - Partner Header)"
                  height={89}
                  width={238}
                  loading="lazy"
                  quality="87"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center w-full max-w-fit">
                <Image
                  className="flex-1 object-bottom object-cover h-auto sm:h-[89px] w-[160px] sm:w-auto"
                  src="/assets/images/partner/header/ethsea-AseanIndonesia2023.svg"
                  alt="ETH Sea (Asean Indonesia 2023 - Partner Header)"
                  height={89}
                  width={238}
                  loading="lazy"
                  quality="87"
                />
              </div> */}
              <span>Organized by ICN, the organizer of Coinfest Asia.</span>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
export default Header;
