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
      <footer className="flex flex-col relative">
        <div className="w-full">
          <Container>
            <div
              className={`flex flex-col pt-24 xl:pt-[134px] pb-12 sm:pb-15 px-0`}
            >
              <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-6 gap-x-6 relative w-full">
                <div className="col-span-full">
                  <div className="flex flex-col mx-auto w-max max-w-full sm:max-w-[449.5px]">
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
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-col">
                      <ul className="menu menu-row mt-2">
                        {router.route === "/" ? (
                          <>
                            <li className="menu-items">
                              <Link
                                href="ethseaAbout"
                                activeClass="active"
                                to="ethseaAbout"
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
                                href="ethseaPartners"
                                activeClass="active"
                                to="ethseaPartners"
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
                                href="ethseaFAQ"
                                activeClass="active"
                                to="ethseaFAQ"
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
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="relative w-full">
          <Container>
            <div className="flex flex-col items-center justify-center py-8 px-0">
              <p className="text-white font-spaceGrotesk text-base font-medium uppercase">
                ©{isYear} EthSea
              </p>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
