"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/layout/container/Container";

const WhoAreBuddies: React.FC = () => {
  return (
    <section className="bg-[#fef9f5] py-16">
      <Container className="flex flex-col lg:flex-row items-center gap-12">

        <div className="w-full lg:w-1/2">
          <Image
            src="https://placehold.jp/600x400.png"
            alt="Who are Buddies?"
            width={600}
            height={400}
            className="rounded-2xl shadow-md w-full h-auto object-cover"
            unoptimized
          />
        </div>


        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Who are Buddies?
          </h2>
          <div className="w-20 h-1 bg-orange-500 mt-2 mb-6 mx-auto lg:mx-0 rounded-full"></div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Zonely is a digital platform that offers casual, everyday
            conversations with real people –{" "}
            <span className="font-semibold">we call them Buddies.</span>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you’re feeling a little off, want to talk about your day, or
            simply crave light-hearted company.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Zonely provides a <span className="font-semibold">non-judgmental space.</span>
          </p>

          <h3 className="font-semibold text-lg text-gray-900 mb-3">
            Where you can feel -
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-orange-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-orange-600"></span> Seen
            </li>
            <li className="flex items-center gap-2 text-orange-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-orange-600"></span> Heard
            </li>
            <li className="flex items-center gap-2 text-orange-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-orange-600"></span> Understood
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default WhoAreBuddies;
