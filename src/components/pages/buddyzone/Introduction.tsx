"use client";

import React from "react";
import Container from "@/components/layout/container/Container";

const Introduction: React.FC = () => {
  return (
    <Container width>

      <section
        id="next-section"
        className="flex flex-col md:flex-row items-center justify-between gap-10 py-20"
      >

        <div className="relative flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/buddyzone/introduction.png"
            alt="Zonely Buddy"
            className="relative z-10 w-[80%] object-contain"
          />
        </div>


        <div className="w-full md:w-1/2 space-y-5">
          <h2 className="text-3xl font-semibold text-gray-900">
            Introduction
            <div className="w-16 h-[3px] bg-orange-500 mt-1"></div>
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Zonely is a safe, judgment-free space where people have casual
            conversations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You earn for every interaction — on your own time, at your own pace.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Join in, bring your energy, and be part of India’s first platform
            built for simple, genuine conversations.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default Introduction;
