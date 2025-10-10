"use client";

import React from "react";
import Container from "@/components/layout/container/Container";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <Container className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/assets/aboutus/aboutus.png"
            alt="About Us"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What is Zonely?
          </h2>

          {/* Styled separate line */}
          <p className="mt-4 text-lg italic text-gray-700">
            It’s not therapy. It’s not dating. It’s just talking & chatting —
            Zonely style.
          </p>

          <div className="w-12 h-[3px] bg-orange-500 rounded-md mt-4 mb-6 mx-auto lg:mx-0"></div>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-lg mx-auto lg:mx-0">
            Zonely is your everyday space to just talk and chat — no labels, no
            pressure, no judgment. When you don’t want advice, therapy, or
            another round of mindless scrolling, all you want is someone to
            listen, laugh with, and keep it real. This is where Zonely Buddies
            come in. They’re not counselors or dates — just good people who love
            honest, easy conversations. In a world where sharing online often
            feels risky — with opinions, reactions, and judgment everywhere —
            Zonely gives you something different: a private, judgment-free space
            where you can simply be yourself.
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
