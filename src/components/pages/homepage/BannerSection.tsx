"use client";

import React from "react";
import Container from "@/components/layout/container/Container";

const BannerSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-orange-100">
      <Container className="flex flex-col-reverse lg:flex-row items-center justify-between py-12 lg:py-20 gap-10">

        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Talk it out. Anytime.
            <br /> Anywhere.
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Your space to express without judgment. Stay connected and share
            your thoughts, wherever you are.
          </p>

          <p className="mt-6 font-semibold">Available on:</p>
          <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-4 mt-4">

            <a
              href="#"
              className="bg-orange-500 text-white flex items-center gap-2 px-5 py-2 rounded-md shadow hover:bg-orange-600 transition"
            >
              <img
                src="/apple-icon.png"
                alt="App Store"
                className="w-6 h-6"
              />
              <span>App Store</span>
            </a>


            <a
              href="#"
              className="bg-orange-500 text-white flex items-center gap-2 px-5 py-2 rounded-md shadow hover:bg-orange-600 transition"
            >
              <img
                src="/google-play-icon.png"
                alt="Google Play"
                className="w-6 h-6"
              />
              <span>Google Play</span>
            </a>
          </div>
        </div>


        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="https://placehold.jp/500x500.png"
            alt="Banner Illustration"
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </Container>
    </section>
  );
};

export default BannerSection;
