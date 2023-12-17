import React from "react";

const Timeline = () => {
  return (
    <>
      <div className="flex flex-col justify-center py-6 lg:py-12">
        <div class="flex flex-row items-start gap-x-3">
          <div>
            <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
              <div class="relative z-10 w-7 h-7 flex justify-center items-center">
                <div class="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
              </div>
            </div>

            <div class="grow pt-0.5 pb-8">
              <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                <svg
                  class="flex-shrink-0 w-4 h-4 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <line x1="10" x2="8" y1="9" y2="9" />
                </svg>
                Created "Preline in React" task
              </h3>
              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Find more detailed insctructions here.
              </p>
              <button
                type="button"
                class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <img
                  class="flex-shrink-0 w-4 h-4 rounded-full"
                  src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                  alt="Image Description"
                />
                James Collins
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-row items-end gap-x-3">
          <div>
            <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
              <div class="relative z-10 w-7 h-7 flex justify-center items-center">
                <div class="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
              </div>
            </div>

            <div class="grow pt-0.5 pb-8">
              <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                <svg
                  class="flex-shrink-0 w-4 h-4 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <line x1="10" x2="8" y1="9" y2="9" />
                </svg>
                Created "Preline in React" task
              </h3>
              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Find more detailed insctructions here.
              </p>
              <button
                type="button"
                class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <img
                  class="flex-shrink-0 w-4 h-4 rounded-full"
                  src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                  alt="Image Description"
                />
                James Collins
              </button>
            </div>
          </div>
        </div>

        <div class="flex gap-x-3">
          <div class="w-16 text-end">
            <span class="text-xs text-gray-500 dark:text-gray-400">
              12:05PM
            </span>
          </div>

          <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div class="relative z-10 w-7 h-7 flex justify-center items-center">
              <div class="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
            </div>
          </div>

          <div class="grow pt-0.5 pb-8">
            <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Release v5.2.0 quick bug fix 🐞
            </h3>
            <button
              type="button"
              class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <span class="flex flex-shrink-0 justify-center items-center w-4 h-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                A
              </span>
              Alex Gregarov
            </button>
          </div>
        </div>

        <div class="flex gap-x-3">
          <div class="w-16 text-end">
            <span class="text-xs text-gray-500 dark:text-gray-400">
              12:05PM
            </span>
          </div>

          <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div class="relative z-10 w-7 h-7 flex justify-center items-center">
              <div class="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
            </div>
          </div>

          <div class="grow pt-0.5 pb-8">
            <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Marked "Install Charts" completed
            </h3>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Finally! You can check it out here.
            </p>
            <button
              type="button"
              class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <img
                class="flex-shrink-0 w-4 h-4 rounded-full"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Image Description"
              />
              James Collins
            </button>
          </div>
        </div>

        <div class="flex gap-x-3">
          <div class="w-16 text-end">
            <span class="text-xs text-gray-500 dark:text-gray-400">
              12:05PM
            </span>
          </div>

          <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div class="relative z-10 w-7 h-7 flex justify-center items-center">
              <div class="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
            </div>
          </div>

          <div class="grow pt-0.5 pb-8">
            <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Take a break ⛳️
            </h3>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Just chill for now... 😉
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center py-6 lg:py-12">
        <div class="w-full mx-auto lg:max-w-4xl">
          <div class="relative">
            <div class="absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"></div>
            <div class="space-y-12 lg:space-y-8">
              <div>
                <div class="flex flex-col items-center">
                  <div class="flex items-center justify-start w-full mx-auto">
                    <div class="w-full lg:w-1/2 lg:pr-8">
                      <div class="p-4 bg-white rounded shadow-lg shadow-cyan-300">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur dolor elit.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                    <span class="text-white">1</span>
                  </div>
                </div>
              </div>

              <div>
                <div class="flex flex-col items-center">
                  <div class="flex items-center justify-end w-full mx-auto">
                    <div class="w-full lg:w-1/2 lg:pl-8">
                      <div class="p-4 bg-white rounded shadow-lg shadow-red-300">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur dolor elit.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                    <span class="text-white">2</span>
                  </div>
                </div>
              </div>

              <div>
                <div class="flex flex-col items-center">
                  <div class="flex items-center justify-start w-full mx-auto">
                    <div class="w-full lg:w-1/2 lg:pr-8">
                      <div class="p-4 bg-white rounded shadow-lg shadow-yellow-300">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur dolor elit.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                    <span class="text-white">3</span>
                  </div>
                </div>
              </div>

              <div>
                <div class="flex flex-col items-center">
                  <div class="flex items-center justify-end w-full mx-auto">
                    <div class="w-full lg:w-1/2 lg:pl-8">
                      <div class="p-4 bg-white rounded shadow-lg shadow-lime-300">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur dolor elit.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                    <span class="text-white">4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
