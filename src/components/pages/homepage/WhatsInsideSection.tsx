"use client";

import React from "react";
import { FiMessageSquare, FiPhone, FiGift, FiZap } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Chat with Buddies",
    description: "Connect with friends anytime and share your thoughts.",
    icon: <FiMessageSquare size={50} />,
  },
  {
    title: "Voice Calls",
    description:
      "Calls that feel like company. Sometimes hearing someone is all it takes to feel less alone.",
    icon: <FiPhone size={50} />,
  },
  {
    title: "Daily Quiz Challenge",
    description: "Take a fun daily quiz to challenge your knowledge.",
    icon: <FiGift size={50} />,
  },
  {
    title: "Zonely Coins",
    description: "Earn and use Zonely Coins for rewards and perks.",
    icon: <FiZap size={50} />,
  },
];

const WhatsInsideSection: React.FC = () => {
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
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {features.map((feature, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative bg-white rounded-2xl shadow-md flex flex-col items-center justify-center cursor-pointer overflow-hidden group h-64">

                <div className="flex flex-col items-center justify-center absolute inset-0 z-10 transform transition-all duration-500 ease-in-out group-hover:-translate-y-10 group-hover:opacity-0">
                  {feature.icon}
                  <h3 className="font-semibold text-lg mt-4">{feature.title}</h3>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-orange-500 to-orange-400 text-white flex flex-col items-center justify-center px-4 py-6 transform translate-y-full transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="font-semibold text-lg text-center">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-center mt-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4 pointer-events-none">
          <div className="swiper-button-prev pointer-events-auto text-3xl font-bold text-orange-500 cursor-pointer select-none">
            &lt;
          </div>
          <div className="swiper-button-next pointer-events-auto text-3xl font-bold text-orange-500 cursor-pointer select-none">
            &gt;
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsInsideSection;
