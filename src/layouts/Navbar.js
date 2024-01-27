import React, { useRef, useState, useEffect, useCallback } from "react";
import Marquee from "react-fast-marquee";
import { useRouter } from "next/router";
import { Link } from "react-scroll";
import Links from "next/link";
import Image from "next/image";

// @components
import Container from "@components/Container";

const Navbar = () => {
  const router = useRouter();
  const rfNavbar = useRef(null);
  const intNavMenuPrimry = useRef(null);
  const intNavBtnToggle = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [isScroll, setScroll] = useState(false);
  const [isMenu, setMenu] = useState(false);

  const intToggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  // @scroll
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > 85) {
      setScroll(true);
    } else {
      setScroll(false);
    }

    setScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      undefined;
    };
  }, [scrollPos, isScroll, handleScroll]);

  useEffect(() => {
    var Scroll = require("react-scroll");
    var Events = Scroll.Events;

    const nvBtnToggle = intNavBtnToggle.current;
    const nvMnu = intNavMenuPrimry.current;

    Events.scrollEvent.register("end", (to, element) => {
      if (nvMnu.classList.contains("active") == true) {
        setTimeout(() => {
          nvBtnToggle.click();
        }, 300);
      }
    });

    return () => {
      undefined;
    };
  }, []);

  useEffect(() => {
    const nvBtnToggle = intNavBtnToggle.current;
    const nvMnu = intNavMenuPrimry.current;

    const hndleComplete = () => {
      if (nvMnu.classList.contains("active") == true) {
        nvBtnToggle.click();
      }
    };

    router.events.on("routeChangeComplete", hndleComplete);
    router.events.on("routeChangeError", hndleComplete);

    return () => {
      router.events.off("routeChangeComplete", hndleComplete);
      router.events.off("routeChangeError", hndleComplete);
    };
  }, [router]);

  return (
    <>
      <navbar
        ref={rfNavbar}
        className={`ethseaNavbar fixed top-0 inset-x-0 w-full ${
          isMenu ? "active" : isScroll ? "active" : "z-sm"
        } transition-all duration-300 ease-linear`}
      >
        <Container>
          <div
            className={`ethseaNavbarMain flex flex-row items-center justify-between ${
              isMenu ? "active" : isScroll ? "active" : "deflt"
            } w-full`}
          >
            <Links
              href="/"
              className={`outline-none focus-visible:outline-none relative transition ease-in-out`}
            >
              <Image
                className="h-[34px] sm:h-[49px] w-auto"
                src="/assets/images/ethSea-White.svg"
                alt="Eth Sea (Brand Primary)"
                height={49}
                width={107}
                quality="87"
              />
            </Links>
            <div className="flex flex-row items-center justify-end">
              {/* @Button Nav (Toggle) */}
              <button
                ref={intNavBtnToggle}
                className={`hmbrgrStairs flex lg:hidden flex-col items-center justify-center border border-solid border-white outline-none focus:outline-none -mr-1 lg:mr-0 ${
                  isMenu ? "deactive" : "active"
                }`}
                id="navBtnToggle"
                aria-label="Button Nav (Toggle)"
                onClick={intToggleMenu}
              >
                <span className="hmbrgrStairsLine"></span>
                <span className="hmbrgrStairsLine"></span>
                <span className="hmbrgrStairsLine"></span>
              </button>
            </div>
            <div
              ref={intNavMenuPrimry}
              className={`ethseaNavbarMainMenu flex flex-col lg:flex-row items-center lg:items-center justify-start lg:justify-center ${
                isMenu ? "active" : "false"
              }`}
            >
              <ul
                className={`ethseaNavbarMenu ${
                  isMenu ? "active" : isScroll ? "active" : "false"
                } w-full lg:w-max`}
              >
                {router.route === "/" ? (
                  <>
                    <li>
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
                    <li>
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
                    <li>
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
                    <li>
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
                    <li>
                      <Links href="/">Back To Home</Links>
                    </li>
                  </>
                )}
              </ul>
              <div
                className={`flex flex-col sm:flex-row items-center justify-start mt-4 lg:mt-0 ml-0 sm:ml-4 w-full lg:w-max`}
              >
                <Links
                  className="inline-flex flex-row items-center justify-center bg-transparent border border-solid border-white rounded-xl text-white font-spaceGrotesk text-base font-medium capitalize outline-none focus-visible:outline-none py-4 px-4 mb-3 sm:mb-0 last:mb-0 mr-0 sm:mr-3 last:mr-0 w-full"
                  href="https://share.hsforms.com/15eAlxOlASAiSLpqC_YyMqAcjggg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Partner Inquiry
                </Links>
                <Links
                  className="inline-flex flex-row items-center justify-center bg-gradient-primary border border-solid border-white rounded-xl text-white font-spaceGrotesk text-base font-medium capitalize outline-none focus-visible:outline-none py-4 px-4 mb-3 sm:mb-0 last:mb-0 mr-0 sm:mr-3 last:mr-0 w-full min-w-fit"
                  href=""
                >
                  <svg
                    className="mr-1 h-4.5 w-4.5"
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
                </Links>
              </div>
            </div>
          </div>
        </Container>
        <div className="bg-gradient-secondary flex flex-col items-center justify-center h-8 sm:h-15">
          <Marquee
            autoFill={true}
            pauseOnHover={false}
            direction="right"
            speed={30}
          >
            <div className="flex flex-row text-black-900 font-spaceGrotesk text-sm sm:text-base font-medium capitalize">
              <div className="mr-6">Ho Chi Minh City · Bangkok · Jakarta</div>
              <div className="mr-6">Ho Chi Minh City · Bangkok · Jakarta</div>
              <div className="mr-6">Ho Chi Minh City · Bangkok · Jakarta</div>
              <div className="mr-6">Ho Chi Minh City · Bangkok · Jakarta</div>
              <div className="mr-6">Ho Chi Minh City · Bangkok · Jakarta</div>
            </div>
          </Marquee>
        </div>
      </navbar>
    </>
  );
};
export default Navbar;
