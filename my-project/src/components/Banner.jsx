import React from "react";

export const Banner = () => {
  return (
    <section class="Section_background">
      <div class=" mx-auto pt-10 container">
        <div class="text-gray-600">
          <div class="flex flex-row px-5 pb-24 text-center">
            <div class="grid grid-cols-2  gap-4 ">
              <div class="w-full mx-auto">
                <img
                  alt="hero-img"
                  src="https://ik.imagekit.io/aq3ybtarw/landing/mobile-landing.webp?updatedAt=1680626119244"
                  class="bannerimg_class flex m-auto"
                  loading="lazy"
                  fetchpriority="high"
                  width="550"
                />
              </div>
              <div class="mt-1">
                <div class="Text_container mx-auto ">
                  <h1 class="mb-5 ">
                    Gauge Water Purifier
                    <span>
                      <span>
                        <span class="letter_Gradient">puts an end</span>
                        <span></span>
                      </span>
                    </span>
                    <span class="mr "> To RO service pain</span>
                  </h1>
                </div>
                <p class=" text-xl max-w-2xl customer-para-one mb-12 px-4 leading-relaxed text-center font-medium">
                  Fully automatic water purifier provides the highest water
                  savings while ensuring a seamless service experience.
                </p>
                <div class="flex flex-col justify-center items-center mx-auto relative">
                  <button class="inline-flex text-white focus:outline-none border-1 rounded-full bg-blue-500 hover:bg-blue-600 py-4 lg:py-5 px-12 mb-7 text-base font-semibold">
                    Take a product Tour
                  </button>
                  <p class="leading-relaxed text-center font-medium text-base mt-4 customer-para-two text-slate-400">
                    Experience Convenience Like Never Before With Our Smart
                    Water Purifier
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
