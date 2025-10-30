"use client";

import Image from "next/image";
import React from "react";

const steps = [
  {
    id: 1,
    step: "STEP 1",
    title: "Sign Up",
    img: "/assets/buddyzone/how-to-start/image1.png",
  },
  {
    id: 2,
    step: "STEP 2",
    title: "Get Verified",
    img: "/assets/buddyzone/how-to-start/image2.png",
  },
  {
    id: 3,
    step: "STEP 3",
    title: "Complete Onboarding",
    img: "/assets/buddyzone/how-to-start/image3.png",
  },
  {
    id: 4,
    step: "STEP 4",
    title: "Start Chatting",
    img: "/assets/buddyzone/how-to-start/image4.png",
  },
];

const Started = () => {
  return (
    <section className="bg-[#fff8f5] py-20">
      <div className="max-w-7xl mx-auto px-4 relative overflow-visible">
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
            How to Get Started
          </h2>
          <p className="text-gray-600 text-lg">Sign up as a buddy on Zonely App.</p>
        </div>

        <div className="relative flex flex-wrap justify-center gap-6 lg:gap-6">
          {steps.map((item, index) => (
            <div key={item.id} className="relative flex flex-col items-center">
              {/* Connector Lines */}
              {index !== steps.length - 1 && (
                <div
                  className={`absolute hidden lg:block w-[180px] h-[3px] bg-[#ff6b35] ${index % 2 === 0
                    ? "bottom-[30px] right-[-180px]"
                    : "top-[30px] right-[-180px]"
                    }`}
                ></div>
              )}

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] pt-14 pb-4 px-5 flex flex-col items-center text-center w-[220px] sm:w-[230px] relative z-10">
                <div className="absolute -top-10 flex justify-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={90}
                    height={70}
                    className="object-contain"
                  />
                </div>

                {/* Reduced space between image and text */}
                <p className="text-[#ff6b35] font-semibold tracking-[3px] text-sm uppercase mt-2 mb-0">
                  {item.step}
                </p>
                <h3 className="text-base font-semibold text-gray-800 mt-1">
                  {item.title}
                </h3>
              </div>

              {/* Left and Right connecting lines */}
              {index === 0 && (
                <div className="hidden lg:block absolute w-[calc(100vw/2-550px)] h-[3px] bg-[#ff6b35] bottom-[30px] right-full"></div>
              )}
              {index === steps.length - 1 && (
                <div className="hidden lg:block absolute w-[calc(100vw/2-550px)] h-[3px] bg-[#ff6b35] top-[30px] left-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Started;
