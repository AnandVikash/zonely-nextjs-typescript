"use client";

import React from "react";
import Container from "@/components/layout/container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

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
            <Container className="flex flex-col-reverse lg:flex-row items-center justify-between w-full h-full py-2  gap-6 relative">
              <div className="text-center lg:text-left max-w-xl self-center z-10">
                <h1 className="bannerTitle leading-tight">
                  You don’t have to keep it all inside share it here
                </h1>
                <p className="mb-8">
                  Zonely is your safe, judgment-free space for real
                  conversations — chat or call with friendly Buddies anytime NOT
                  a dating app
                </p>

                <p className="font-bold">Available on:</p>
                <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-5 mt-3">
                  <Link
                    href="#"
                    className="bg-[var(--primary)] text-white flex items-center gap-5 btnLink"
                  >
                    <Image
                      src="/assets/banner/icon1.png"
                      alt="App Store"
                      width={30}
                      height={30}
                      className="object-cover"
                    />

                    <div className="">
                      <span className="text-white text-xs">
                        Download on the
                      </span>
                      <p className="text-xl text-white font-semibold">
                        App Store
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="https://play.google.com/store/apps/details?id=com.zonely.zonelyapp"
                    className="bg-[var(--primary)] text-white flex items-center gap-5 btnLink"
                  >
                    <Image
                      src="/assets/banner/icon2.png"
                      alt="Google Play"
                      width={30}
                      height={30}
                      className="object-cover"
                    />

                    <div>
                      <span className="text-white text-xs">
                        Download on the
                      </span>
                      <p className="text-xl text-white font-semibold">
                        Google Play
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative h-full">
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
