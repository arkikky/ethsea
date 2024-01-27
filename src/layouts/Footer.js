import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Links from "next/link";
import { Link } from "react-scroll";

// @components
import Container from "@components/Container";

const Footer = () => {
  const router = useRouter();

  // @Year
  const currentYear = new Date();
  let isYear = currentYear.getFullYear();

  return (
    <>
      <footer className="flex flex-col mt-28 sm:mt-32 xl:mt-[165px] relative">
        <div className="w-full">
          <Container>
            <div className="flex flex-col xl:flex-row items-start justify-between">
              <div className="flex flex-col w-max max-w-full sm:max-w-[557px] z-10">
                <div className="flex flex-col items-start w-max">
                  <Image
                    className="h-[44px] sm:h-[59px] w-auto"
                    src="/assets/images/ethSea-White.svg"
                    alt="Eth Sea (Brand Primary)"
                    height={49}
                    width={107}
                    quality="87"
                  />
                </div>
                <p className="text-white font-spaceGrotesk text-base sm:text-xl mt-6">
                  ETH South East Asia (SEA) taps into the rich talent pool
                  within emerging markets through an online hackathon coupled
                  with IRL workshops.
                </p>
                <ul className="flex flex-row relative pl-0 mt-6">
                  <li className="relative mr-4 last:mr-0">
                    <Links
                      className="outline-none focus-visible:outline-none hover:underline"
                      href="https://twitter.com/ethereum_sea"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className="mx-auto h-6 w-6"
                        src={"/assets/svg/ethTwitter-White.svg"}
                        alt={`Eth Sea (LinkedIn - Social Media)`}
                        height={24}
                        width={24}
                        quality="87"
                      />
                    </Links>
                  </li>
                  <li className="relative mr-4 last:mr-0">
                    <Links
                      className="outline-none focus-visible:outline-none hover:underline"
                      href="https://www.linkedin.com/showcase/ethereum-sea/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className="mx-auto h-6 w-6"
                        src={"/assets/svg/ethLinkedin-White.svg"}
                        alt={`Eth Sea (LinkedIn - Social Media)`}
                        height={24}
                        width={24}
                        quality="87"
                      />
                    </Links>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col mt-10 lg:mt-0 lg:mr-0 xl:mr-24">
                <h2 className="text-white font-spaceGrotesk text-xl font-semibold uppercase">
                  ETHSea
                </h2>
                <ul className="menu mt-6">
                  {router.route === "/" ? (
                    <>
                      <li className="menu-items">
                        <Link
                          href="ethSeaAbout"
                          activeClass="active"
                          to="ethSeaAbout"
                          spy={true}
                          hashSpy={false}
                          smooth={"easeInOutCubic"}
                          offset={-223}
                          duration={500}
                        >
                          About
                        </Link>
                      </li>
                      <li className="menu-items">
                        <Link
                          href="ethSeaTimeline"
                          activeClass="active"
                          to="ethSeaTimeline"
                          spy={true}
                          hashSpy={false}
                          smooth={"easeInOutCubic"}
                          offset={-223}
                          duration={500}
                        >
                          Timeline
                        </Link>
                      </li>
                      <li className="menu-items">
                        <Link
                          href="ethSeaPartners"
                          activeClass="active"
                          to="ethSeaPartners"
                          spy={true}
                          hashSpy={false}
                          smooth={"easeInOutCubic"}
                          offset={-223}
                          duration={500}
                        >
                          Partners
                        </Link>
                      </li>
                      <li className="menu-items">
                        <Link
                          href="ethSeaFAQ"
                          activeClass="active"
                          to="ethSeaFAQ"
                          spy={true}
                          hashSpy={false}
                          smooth={"easeInOutCubic"}
                          offset={-223}
                          duration={500}
                        >
                          FAQ
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="menu-items">
                        <Links href="/">Back To Home</Links>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pt-20 pb-8">
            <p className="text-white font-spaceGrotesk text-base font-normal uppercase mt-4 lg:mt-0">
              ©{isYear} EthSea, Organized by{" "}
              <Links
                className="hover:text-[#DEABB5] hover:underline outline-none focus-visible:outline-none transition ease-in-out duration-300"
                href="https://indonesiacrypto.network/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ICN
              </Links>
              , the organizer of{" "}
              <Links
                className="hover:text-[#DEABB5] hover:underline outline-none focus-visible:outline-none transition ease-in-out duration-300"
                href="https://coinfest.asia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coinfest Asia
              </Links>
              .
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
