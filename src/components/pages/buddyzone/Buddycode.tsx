"use client";

import Image from "next/image";
import React from "react";
import Container from "@/components/layout/container/Container";

const BuddyCode = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <Container width>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          <div className="px-6 lg:px-0">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Buddy Code: How We <br />Keep It Real
            </h2>
            <div className="w-12 h-[3px] bg-[#ff6b35] mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Every Buddy follows the principles of empathy, respect, kindness,
              confidentiality, and authenticity. We listen to understand,
              protect privacy, and keep every chat safe and uplifting.
            </p>
          </div>


          <div className="relative flex justify-end -mr-20 lg:-mr-32 xl:-mr-40">
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <Image
                src="/assets/buddyzone/buddycode1.png"
                alt="Buddy chatting"
                width={600}
                height={400}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BuddyCode;
