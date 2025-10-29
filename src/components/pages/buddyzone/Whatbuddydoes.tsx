"use client";

import React from "react";
import Container from "@/components/layout/container/Container";

const Whatbuddydoes: React.FC = () => {
  const items = [
    {
      img: "https://placehold.jp/50x50.png",
      text: "Have casual, respectful conversations.",
    },
    {
      img: "https://placehold.jp/50x50.png",
      text: "Listen, engage, and keep things positive and light.",
    },
    {
      img: "https://placehold.jp/50x50.png",
      text: "Follow community guidelines to keep zonely safe for everyone.",
    },
    {
      img: "https://placehold.jp/50x50.png",
      text: "Keep every chat safe, kind and confidential.",
    },
  ];

  return (
    <Container width>
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          <div className="flex-1">
            <div
              className="rounded-2xl overflow-hidden"

            >
              <img
                src="https://placehold.jp/900x500.png"
                alt="Buddy visual"
                className="w-full h-auto rounded-2xl mix-blend-multiply"
              />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              What You’ll Do as a Buddy?
            </h2>
            <div className="w-16 h-[3px] bg-orange-500 mb-4"></div>
            <p className="text-gray-600 mb-8">
              You don’t have to counsel — just connect and care.
            </p>

            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <img
                    src={item.img}
                    alt={item.text}
                    className="w-8 h-8 object-contain text-orange-500"
                  />
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Whatbuddydoes;
