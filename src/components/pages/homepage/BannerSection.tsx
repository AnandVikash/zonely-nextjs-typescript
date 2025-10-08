"use client";

import React from "react";
import Container from "@/components/layout/container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const BannerSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className='relative z-10 bg-[url("/assets/banner/banner11.jpg")] bg-contain backdrop-blur-sm min-h-[300px] lg:min-h-[400px]'>
            <Container className="flex flex-col-reverse lg:flex-row items-center justify-between py-6 lg:py-10 gap-6">
              <div className="text-center lg:text-left max-w-xl">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                  Talk it out. Anytime.
                  <br /> Anywhere.
                </h1>
                <p className="mt-3 text-gray-700 text-base">
                  Your space to express without judgment. Stay connected and
                  share your thoughts.
                </p>

                <p className="mt-4 font-semibold">Available on:</p>
                <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-3 mt-3">
                  <a
                    href="#"
                    className="bg-orange-500 text-white flex items-center gap-2 px-4 py-2 rounded-md shadow hover:bg-orange-600 transition"
                  >
                    <img
                      src="/assets/banner/icon1.png"
                      alt="App Store"
                      className="w-5 h-5"
                    />
                    <span>App Store</span>
                  </a>

                  <a
                    href="#"
                    className="bg-orange-500 text-white flex items-center gap-2 px-4 py-2 rounded-md shadow hover:bg-orange-600 transition"
                  >
                    <img
                      src="/assets/banner/icon2.png"
                      alt="Google Play"
                      className="w-5 h-5"
                    />
                    <span>Google Play</span>
                  </a>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <img
                  src="/assets/banner/boy.png"
                  alt="Banner Illustration"
                  className="w-3/4 h-auto object-cover static lg:relative -bottom-10"
                />
              </div>
            </Container>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className="relative z-10 bg-orange-50/50 backdrop-blur-sm min-h-[300px] lg:min-h-[400px]">
            <Container className="flex flex-col-reverse lg:flex-row items-center justify-between py-6 lg:py-10 gap-6">
              <div className="text-center lg:text-left max-w-xl">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                  Talk it out. Anytime.<br /> Anywhere.
                </h1>
                <p className="mt-3 text-gray-700 text-base">
                  Your space to express without judgment. Stay connected and share your thoughts.
                </p>

                <p className="mt-4 font-semibold">Available on:</p>
                <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-3 mt-3">
                  <a
                    href="#"
                    className="bg-orange-500 text-white flex items-center gap-2 px-4 py-2 rounded-md shadow hover:bg-orange-600 transition"
                  >
                    <img src="/apple-icon.png" alt="App Store" className="w-5 h-5" />
                    <span>App Store</span>
                  </a>

                  <a
                    href="#"
                    className="bg-orange-500 text-white flex items-center gap-2 px-4 py-2 rounded-md shadow hover:bg-orange-600 transition"
                  >
                    <img src="/google-play-icon.png" alt="Google Play" className="w-5 h-5" />
                    <span>Google Play</span>
                  </a>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <img
                  src="https://placehold.jp/500x500.png"
                  alt="Banner Illustration"
                  className="w-3/4 h-auto object-cover rounded-xl shadow-lg"
                />
              </div>
            </Container>
          </div>
        </SwiperSlide> */}

        {/* <SwiperSlide>
          <div className="relative z-10 bg-orange-50/50 backdrop-blur-sm min-h-[300px] lg:min-h-[400px]">
            <Container className="flex flex-col-reverse lg:flex-row items-center justify-between py-6 lg:py-10 gap-6">
              <div className="text-center lg:text-left max-w-xl">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                  Talk it out. Anytime.<br /> Anywhere.
                </h1>
                <p className="mt-3 text-gray-700 text-base">
                  Your space to express without judgment. Stay connected and share your thoughts.
                </p>

                <p className="mt-4 font-semibold">Available on:</p>
                <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-3 mt-3">
                  <a
                    href="#"
                    className="bg-orange-500 text-white flex items-center gap-2 px-4 py-2 rounded-md shadow hover:bg-orange-600 transition"
                  >
                    <img src="/apple-icon.png" alt="App Store" className="w-5 h-5" />
                    <span>App Store</span>
                  </a>

                  <a
                    href="#"
                    className="bg-orange-500 text-white flex items-center gap-2 px-4 py-2 rounded-md shadow hover:bg-orange-600 transition"
                  >
                    <img src="/google-play-icon.png" alt="Google Play" className="w-5 h-5" />
                    <span>Google Play</span>
                  </a>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <img
                  src="https://placehold.jp/500x500.png"
                  alt="Banner Illustration"
                  className="w-3/4 h-auto object-cover rounded-xl shadow-lg"
                />
              </div>
            </Container>
          </div>
        </SwiperSlide> */}
      </Swiper>

      <Container>
        <div className="custom-pagination flex justify-start pb-6 mt-2" />
      </Container>
    </section>
  );
};

export default BannerSection;
