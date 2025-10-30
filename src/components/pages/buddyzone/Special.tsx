"use client";

import React from "react";
import Container from "@/components/layout/container/Container";

const Special: React.FC = () => {
  return (
    <section className="bg-[#fff8f4] py-24 overflow-hidden">
      <Container width>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div className="z-10 md:pl-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              What Makes <span className="text-black">Zonely</span> Special?
            </h2>
            <div className="w-16 h-[3px] bg-orange-500 mb-5 mx-auto md:mx-0"></div>
            <p className="text-gray-600 max-w-md mx-auto md:mx-0 leading-relaxed">
              Zonely isn’t a dating app — it’s a space for authentic connection.
              In a noisy world, Zonely helps you feel heard, seen, and human
              again.
            </p>
          </div>


          <div className="flex justify-center md:justify-end">
            <img
              src="https://placehold.jp/400x500.png"
              alt="Zonely phone mockup"
              className="w-[320px] md:w-[420px] h-auto object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Special;
