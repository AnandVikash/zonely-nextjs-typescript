"use client";

import React from "react";
import Container from "@/components/layout/container/Container";

const Whybuddy: React.FC = () => {
  const features = [
    {
      img: "https://placehold.jp/128x128.png",
      title: "Earn for every conversation",
    },
    {
      img: "https://placehold.jp/128x128.png",
      title: "Choose your own hours and location of your choice",
    },
    {
      img: "https://placehold.jp/128x128.png",
      title: "Safe, verified environment",
    },
    {
      img: "https://placehold.jp/128x128.png",
      title: "Just clean, respectful conversations",
    },
  ];

  return (
    <Container width>
      <section className="bg-[#fff6f0] py-20 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            Why Become a Zonely Buddy?
          </h2>
          <div className="w-16 h-[3px] bg-orange-500 mx-auto mb-3"></div>
          <p className="text-gray-600 mb-12">
            Earn by talking and chatting – it’s as simple as that.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-10 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-16 h-16 mb-5 object-contain"
                />
                <p className="text-gray-800 text-lg font-medium leading-relaxed">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Whybuddy;
