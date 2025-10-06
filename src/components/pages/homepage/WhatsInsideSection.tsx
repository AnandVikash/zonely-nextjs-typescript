"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Chat with Buddies",
    description: "Connect with friends anytime and share your thoughts.",
    icon: "/assets/icons/icon1.png",
  },
  {
    title: "Voice Calls",
    description:
      "Calls that feel like company. Sometimes hearing someone is all it takes to feel less alone.",
    icon: "/assets/icons/icon2.png",
  },
  {
    title: "Daily Quiz Challenge",
    description: "Take a fun daily quiz to challenge your knowledge.",
    icon: "/assets/icons/icon3.png",
  },
  {
    title: "Zonely Coins",
    description: "Earn and use Zonely Coins for rewards and perks.",
    icon: "/assets/icons/icon4.png",
  },
  {
    title: "Mood o’ Meter",
    description: "Check in with your moods, daily. Track how you’re feeling, reflect on your mood and earn rewords for simply showing up.",
    icon: "/assets/icons/icon5.png",
  },
];

const WhatsInsideSection: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section className="bg-orange-50 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">What’s Inside</h2>
        <div className="w-20 h-1 bg-orange-500 mt-2 mb-6 rounded-full inline-block"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          From casual chats to quick laughs, Zonely makes space for the
          conversations you need most
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {swiperReady && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {features.map((feature, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative bg-white rounded-2xl shadow-md flex flex-col items-center justify-center cursor-pointer overflow-hidden group h-64">
                  {/* Default view */}
                  <div className="flex flex-col items-center justify-center absolute inset-0 z-10 transform transition-all duration-500 ease-in-out group-hover:-translate-y-10 group-hover:opacity-0">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={64}
                      height={64}
                      className="mb-2"
                    />
                    <h3 className="font-semibold text-lg mt-4">{feature.title}</h3>
                  </div>

                  {/* Hover view */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500 to-orange-400 text-white flex flex-col items-center justify-center px-4 py-6 transform translate-y-full transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="font-semibold text-lg text-center">{feature.title}</h3>
                    <p className="text-sm text-center mt-2">{feature.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Navigation arrows BELOW the slider, centered */}
        <div className="flex justify-center gap-6 mt-6">
          <div
            ref={prevRef}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-orange-500 text-lg cursor-pointer select-none"
          >
            &#8592;
          </div>
          <div
            ref={nextRef}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-orange-500 text-lg cursor-pointer select-none"
          >
            &#8594;
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsInsideSection;
