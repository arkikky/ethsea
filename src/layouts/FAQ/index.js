import React, { useState, useEffect } from "react";

// @lib
import jsnFaq from "@lib/json/faq.json";

const lyFAQ = () => {
  const [isFAQ, setFAQ] = useState(jsnFaq);

  // @preline (Add Plugins - Active)
  useEffect(() => {
    import("preline");

    return () => {
      undefined;
    };
  }, []);

  return (
    <>
      <section id="ethSeaFAQ" className="mt-24 sm:mt-32">
        <div className="flex flex-col px-4 sm:px-8">
          <h2 className="text-white font-beliau text-[40px] sm:text-[56px] lg:text-[64px] leading-[54px] sm:leading-[66px] lg:leading-[64px] font-normal uppercase text-center w-full">
            FAQ
          </h2>
        </div>
        <div className="hs-accordion-group supports-grid:grid grid-cols-4 border-t border-solid border-white relative gap-y-0 mt-6 sm:mt-8">
          {isFAQ?.map((gtRslt, i) => (
            <div
              id={`accrdnHeading${i}`}
              className="hs-accordion border-b border-solid border-white col-span-full flex flex-col"
              key={i}
            >
              <>
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-secondary inline-flex items-center justify-between gap-x-3 group text-left focus-visible:outline-none relative py-4 sm:py-[34px] w-full"
                  aria-controls={`accrdn${i}`}
                >
                  <h3 className="text-white font-spaceGrotesk text-xl sm:text-2xl font-semibold pr-8 sm:pr-20">
                    {gtRslt.label}
                  </h3>
                  <div className="flex flex-col items-center justify-center absolute inset-y-auto left-auto right-0 h-10 w-10">
                    <svg
                      className="fill-current text-secondary absolute inset-y-auto inset-x-auto hs-accordion-active:rotate-180 hs-accordion-active:opacity-0 h-6 sm:h-8 w-6 sm:w-8 transition duration-300"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.6673 21.6665V31.6665H18.334V21.6665H8.33398V18.3331H18.334V8.33313H21.6673V18.3331H31.6673V21.6665H21.6673Z" />
                    </svg>
                    <svg
                      className="stroke-current absolute inset-y-auto inset-x-auto hs-accordion-active:rotate-180 opacity-0 hs-accordion-active:opacity-100 h-4 sm:h-6 w-4 sm:w-6 transition duration-300"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.62421 7.86L13.6242 7.85999"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  id={`accrdn${i}`}
                  className="hs-accordion-content hidden overflow-hidden w-full transition-[height] duration-300"
                  aria-labelledby={`accrdnHeading${i}`}
                >
                  <div className=" text-white font-spaceGrotesk text-lg sm:text-2xl font-light pb-4 sm:pb-[34px]">
                    {gtRslt.desc}
                  </div>
                </div>
              </>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default lyFAQ;
