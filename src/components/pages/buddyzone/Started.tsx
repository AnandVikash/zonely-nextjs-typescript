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
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 relative inline-block">
            How to Get Started
            <span className="absolute left-1/2 -bottom-2 w-12 h-[3px] bg-[#ff6b35] -translate-x-1/2 rounded-full"></span>
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            Sign up as a buddy on Zonely App.
          </p>
        </div>



        <div className="relative flex flex-wrap justify-center gap-8 lg:gap-10">
          {steps.map((item, index) => (
            <div key={item.id} className="relative flex flex-col items-center">

              {index !== steps.length - 1 && index !== 2 && (
                <div
                  className={`absolute hidden lg:block w-[180px] h-[3px] bg-[#ff6b35] ${index % 2 === 0
                    ? "bottom-[35px] right-[-180px]"
                    : "bottom-[70px] right-[-180px]"
                    }`}
                ></div>
              )}

              {index === 2 && (
                <div className="absolute hidden lg:block w-[180px] h-[3px] bg-[#ff6b35] bottom-[98px] right-[-180px]"></div>
              )}

              <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] pt-24 pb-8 px-6 flex flex-col items-center text-center w-[250px] sm:w-[270px] relative z-10">
                <div className="absolute -top-20 flex justify-center w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="object-contain"
                  />
                </div>

                <p className="text-[#ff6b35] font-semibold tracking-[3px] text-sm uppercase mb-2 mt-6">
                  {item.step}
                </p>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>

              {index === 0 && (
                <div className="hidden lg:block absolute w-[calc(100vw/2-550px)] h-[3px] bg-[#ff6b35] bottom-[35px] right-full"></div>
              )}
              {index === steps.length - 1 && (
                <div className="hidden lg:block absolute w-[calc(100vw/2-608px)] h-[3px] bg-[#ff6b35] top-[35px] left-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Started;
