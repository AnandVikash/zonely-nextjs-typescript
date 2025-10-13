"use client";

import React, { useRef, useState, useEffect } from "react";
import Container from "@/components/layout/container/Container";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import insideData from "@/components/assets/data/inside.json";

// Define the type for the Swiper instance
import type { Swiper as SwiperType } from "swiper";

const WhatsInsideSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="padding" id="inside">
      <Container width>
        <section>
          <div className="flex flex-col items-center  mb-10">
            <h2 className="title mb-2">What’s Inside</h2>
            <div className="w-20 h-1 bg-[var(--primary)] mb-4  rounded-full" />
            <p className="text-center">
              From casual chats to quick laughs, Zonely makes space for the
              conversations you need most
            </p>
          </div>

          <div className="relative">
            <div>
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: ".button-next-slide",
                  prevEl: ".button-prev-slide",
                }}
                breakpoints={{
                  350: {
                    slidesPerView: 1,
                  },
                  650: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
              >
                {insideData.map((item, id) => (
                  <SwiperSlide key={id} className="py-10">
                    <div
                      className="relative bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center cursor-pointer overflow-hidden group h-64"
                      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                      onMouseLeave={() => swiperRef.current?.autoplay.start()}
                    >
                      {/* Default view */}
                      <div className="flex flex-col items-center justify-center absolute inset-0 z-10 transform transition-all duration-500 ease-in-out group-hover:-translate-y-10 group-hover:opacity-0">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={64}
                          height={64}
                          className="mb-2"
                        />
                        <h3 className="font-semibold text-lg mt-4">
                          {item.title}
                        </h3>
                      </div>

                      {/* Hover view */}
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500 to-orange-400 text-white flex flex-col items-center justify-center px-4 py-6 transform translate-y-full transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                        <h3 className="subTitle">{item.title}</h3>
                        <p className=" text-center  text-white">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Navigation arrows BELOW the slider, centered */}
            <div className="flex  items-center justify-center gap-5  z-10">
              <div className="button-prev-slide  text-[20px] font-medium border-2 border-[var(--text)]  rounded-full p-2">
                <FaArrowLeft />
              </div>
              <div className="button-next-slide text-[20px] font-medium border-2 border-[var(--text)]  rounded-full p-2">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default WhatsInsideSection;
