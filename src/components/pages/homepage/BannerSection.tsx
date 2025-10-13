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
          <div className='relative z-10 bg-[url("/assets/banner/banner12.jpg")] bg-cover bg-no-repeat bg-top-right backdrop-blur-sm min-h-[300px] lg:min-h-[400px] flex'>
            <Container className="flex flex-col-reverse lg:flex-row items-center justify-between w-full h-full py-6 lg:py-16 gap-6 relative">

              <div className="order-2 lg:order-1 text-center lg:text-left max-w-xl self-center z-10">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
                  You don’t have to keep it all inside share it here
                </h1>
                <p className="mt-3 text-gray-700 text-base md:text-lg">
                  Zonely is your safe, judgment-free space for real conversations — chat or call with friendly Buddies anytime
                  NOT a dating app
                </p>

                <div className="flex flex-col items-start px-4 sm:px-0">
                  <p className="mt-5 font-semibold">Available on:</p>
                </div>

                <div className="flex  flex-row items-center sm:justify-start gap-3 mt-3">
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
                    href="https://play.google.com/store/apps/details?id=com.zonely.zonelyapp"
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


              <div className=" order-1 lg:order-2 w-full lg:w-1/2 flex justify-center lg:justify-end relative h-full">
                <img
                  src="/assets/banner/boy.png"
                  alt="Banner Illustration"
                  className="w-2/3 sm:w-1/2 lg:w-auto h-auto object-contain relative translate-y-6 lg:translate-y-16"
                />
              </div>

            </Container>
          </div>
        </SwiperSlide>
      </Swiper>

      <Container>
        <div className="custom-pagination flex justify-start pb-6 mt-2" />
      </Container>
    </section>
  );
};

export default BannerSection;
