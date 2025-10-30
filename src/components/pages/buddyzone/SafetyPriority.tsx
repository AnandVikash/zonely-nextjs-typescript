"use client";

import React from "react";
import Container from "@/components/layout/container/Container";

const SafetyPriority: React.FC = () => {
  return (
    <section className="bg-white py-24 text-center">
      <Container width>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Your Safety, Our Priority

        </h2>



        <p className="text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed">
          Every conversation on Zonely is designed to be secure, respectful, and worry-free.
        </p>


        <div className="flex justify-center">
          <img
            src="https://placehold.jp/800x500.png"
            alt="Your Safety, Our Priority"
            className="w-[539px] md:w-[848px] h-auto object-contain"
          />
        </div>
      </Container>
    </section>
  );
};

export default SafetyPriority;
