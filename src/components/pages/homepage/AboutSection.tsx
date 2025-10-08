"use client";

import React from "react";
import Container from "@/components/layout/container/Container";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="#about">
      <Container className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/assets/aboutus/aboutus.png"
            alt="About Us"
            className="w-full h-auto  object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Us
          </h2>

          <div className="w-12 h-[3px] bg-orange-500 rounded-md mt-2 mb-6 mx-auto lg:mx-0"></div>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-lg mx-auto lg:mx-0">
            Zonely is a digital platform that offers casual, everyday
            conversations with real people — we call them Buddies. Whether
            you’re feeling a little off, want to talk about your day, or simply
            crave light-hearted company, Zonely provides a non-judgmental space
            where you can feel seen, heard, and understood. Zonely is not a
            dating service, nor do we provide therapy, advice, or coaching. This
            is a space for safe, casual conversations — nothing more, nothing
            less…
          </p>

          <button className="mt-6 bg-orange-500 text-white font-medium px-6 py-3 rounded-md shadow hover:bg-orange-600 transition">
            Know More
          </button>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
