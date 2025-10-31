"use client";

import React from "react";
import Container from "@/components/layout/container/Container";

const Whybuddy: React.FC = () => {
  const features = [
    {
      img: "/assets/buddyzone/why/earn-for-every-conversation.png",
      title: "Earn for every conversation",
    },
    {
      img: "/assets/buddyzone/why/working-time.png",
      title: "Choose your own hours and location of your choice",
    },
    {
      img: "/assets/buddyzone/why/shield.png",
      title: "Safe, verified environment",
    },
    {
      img: "/assets/buddyzone/why/communication.png",
      title: "Just clean, respectful conversations",
    },
  ];

  return (
    <section className="w-full bg-[#fff6f0] py-24">
      <Container width>
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            Why Become a Zonely Buddy?
          </h2>
          <div className="w-16 h-[3px] bg-orange-500 mx-auto mb-3"></div>
          <p className="text-gray-600 mb-12">
            Earn by talking and chatting – it’s as simple as that.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-md p-10 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                {/* 🟠 Animated gradient background */}
                <div
                  className="absolute bottom-0 left-0 w-10 h-10 rounded-full scale-0 group-hover:scale-[30] transition-transform duration-700 ease-in-out z-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,190,138,1) 0%, rgba(245,99,4,1) 100%)",
                  }}
                ></div>

                {/* Foreground content */}
                <div className="relative z-[5] flex flex-col items-center justify-center transition-colors duration-500 group-hover:text-white">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-16 h-16 mb-5 object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert"
                  />
                  <p className="text-gray-800 text-lg font-semibold leading-relaxed group-hover:text-white">
                    {feature.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Whybuddy;
