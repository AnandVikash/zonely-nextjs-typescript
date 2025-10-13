"use client";

import Container from "@/components/layout/container/Container";
import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HowItsWork = () => {
  return (
    <section className="padding " id="work">
      <Container width>
        <section className="">
          <div className="flex flex-col items-center   mb-10 sm:mb-25">
            <h2 className="title mb-2">How It Works</h2>
            <div className="w-20 h-1 bg-[var(--primary)]  rounded-full" />
          </div>
          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-30 sm:gap-10 relative py-10 sm:py-20 ">
            <div className="flex flex-col items-center justify-center p-5 shadow-2xl rounded-xl  relative pt-24 bg-white mb-5 sm:mb-0">
              <div className="absolute -top-28">
                <Image
                  src="/assets/work/pickyouevibe.png"
                  alt="Pick your vibe"
                  width={300}
                  height={200}
                  className="object-center"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <p className="text-orange-500 mb-2  tracking-[4] font-medium ">
                  STEP 1
                </p>
                <h3 className="text-2xl font-medium mb-3">Pick your vibe</h3>
                <p className="text-center">
                  Feeling chatty, bored, lonely, or just want to talk? Choose
                  what fits your mood and connect with a right Buddy.
                </p>
              </div>
            </div>
            <div className="hidden sm:block w-20 h-1 bg-orange-500 mt-2 mb-6  absolute bottom-70 left-90 -z-1"></div>

            <div className="flex flex-col items-center justify-center p-5 shadow-2xl rounded-xl  relative pt-24 bg-white mb-8 sm:mb-0">
              <div className="absolute -top-35">
                <Image
                  src="/assets/work/startachat.png"
                  alt="Start the chat"
                  width={300}
                  height={200}
                  className=" object-center "
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <p className="text-orange-500   mb-2 tracking-[4] font-medium ">
                  STEP 2
                </p>
                <h3 className="text-2xl font-medium mb-3">Start the chat</h3>
                <p className="text-center">
                  Hop into a friendly conversation , text or voice. Talk about
                  your day, random thoughts, your loneliness or whatever’s on
                  your mind, no filters, no pressure.
                </p>
              </div>
            </div>

            <div className="hidden sm:block w-20 h-1 bg-orange-500 mt-2 mb-6  absolute bottom-30 right-90 -z-50 "></div>

            <div className="flex flex-col items-center justify-center p-5 shadow-2xl rounded-xl  relative pt-24 bg-white">
              <div className="absolute -top-35">
                <Image
                  src="/assets/work/enjoythemovement.png"
                  alt="Enjoy the moment"
                  width={300}
                  height={200}
                  className=" object-center "
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <p className="text-orange-500 tracking-[4] font-medium  mb-2 ">
                  STEP 3
                </p>
                <h3 className="text-2xl font-medium mb-3">Enjoy the moment</h3>
                <p className="text-center">
                  Sometimes, a good chat is all you need to unwind or share a
                  laugh. That’s what Zonely’s about — easy conversations,
                  anytime.
                </p>
              </div>
            </div>
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
                  nextEl: ".next-slide",
                  prevEl: ".prev-slide",
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
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center p-5 shadow-2xl rounded-xl  relative pt-24 bg-white  mt-30 ">
                    <div className="absolute -top-28">
                      <Image
                        src="/assets/work/pickyouevibe.png"
                        alt="Pick your vibe"
                        width={300}
                        height={200}
                        className="object-center"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                      <p className="text-[var(--primary)]  mb-2  tracking-[4] font-medium ">
                        STEP 1
                      </p>
                      <h3 className="subTitle">Pick your vibe</h3>
                      <p className="text-center">
                        Feeling chatty, bored, lonely, or just want to talk?
                        Choose what fits your mood and connect with a right
                        Buddy.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center p-5 shadow-2xl rounded-xl  relative pt-24 bg-white mt-35">
                    <div className="absolute -top-35">
                      <Image
                        src="/assets/work/startachat.png"
                        alt="Start the chat"
                        width={300}
                        height={200}
                        className=" object-center "
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                      <p className="text-[var(--primary)]    mb-2 tracking-[4] font-medium ">
                        STEP 2
                      </p>
                      <h3 className="subTitle">Start the chat</h3>
                      <p className="text-center">
                        Hop into a friendly conversation , text or voice. Talk
                        about your day, random thoughts, your loneliness or
                        whatever’s on your mind, no filters, no pressure.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center p-5 shadow-2xl rounded-xl  relative pt-24 bg-white mt-35">
                    <div className="absolute -top-35">
                      <Image
                        src="/assets/work/enjoythemovement.png"
                        alt="Enjoy the moment"
                        width={300}
                        height={200}
                        className=" object-center "
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                      <p className="text-[var(--primary)]  tracking-[4] font-medium  mb-2 ">
                        STEP 3
                      </p>
                      <h3 className="subTitle">Enjoy the moment</h3>
                      <p className="text-center">
                        Sometimes, a good chat is all you need to unwind or
                        share a laugh. That’s what Zonely’s about — easy
                        conversations, anytime.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="flex  items-center justify-center gap-5  z-10">
              <div className="prev-slide  text-[20px] font-medium border-2 border-[var(--text)]  rounded-full p-2">
                <FaArrowLeft />
              </div>
              <div className="next-slide text-[20px] font-medium border-2 border-[var(--text)]  rounded-full p-2">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default HowItsWork;
