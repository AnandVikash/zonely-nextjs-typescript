"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/layout/container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Verified Expert",
    description: "Trusted guidance from certified professionals.",
    image: "/assets/why-choose-us/verifiedexpert.jpg",
  },
  {
    id: 2,
    title: "Real Human Support",
    description: "Friendly assistant when you need it.",
    image: "/assets/why-choose-us/realhumansupport.jpg",
  },
  {
    id: 3,
    title: "Privacy First",
    description: "Your Data is safeguarded.",
    image: "/assets/why-choose-us/privacyfirst.jpg",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="padding">
      <Container width>
        <section>
          <div className="flex flex-col items-center  mb-10">
            <h2 className="title mb-2">Why Choose Us</h2>
            <div className="w-20 h-1 bg-[var(--primary)]  rounded-full" />
          </div>
          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item) => (
              <div
                key={item.id}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-[350px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-orange-500/40 to-transparent opacity-90" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="subTitle">{item.title}</h3>
                  <p className="text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swiper */}
          <div className="sm:hidden">
            <div className="sm:hidden">
              <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: ".choose-next-slide",
                  prevEl: ".choose-prev-slide",
                }}
                breakpoints={{
                  350: {
                    slidesPerView: 1,
                  },
                  650: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                {features.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={400}
                        className="w-full h-[350px] object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-orange-500/40 to-transparent opacity-90" />

                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="subTitle">{item.title}</h3>
                        <p className="text-white">{item.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex  items-center justify-center gap-5  z-10">
              <div className="choose-prev-slide  text-[20px] font-medium border-2 border-[var(--text)]  rounded-full p-2">
                <FaArrowLeft />
              </div>
              <div className="choose-next-slide text-[20px] font-medium border-2 border-[var(--text)]  rounded-full p-2">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
