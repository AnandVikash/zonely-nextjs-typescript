"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/layout/container/Container";

const features = [
  {
    id: 1,
    title: "Verified Expert",
    description: "Trusted guidance from certified professionals.",
    image: "/assets/why-choose-us/verifiedexpert.jpg",
  },
  {
    id: 2,
    title: "Real Human Support",
    description: "Friendly assistant when you need it.",
    image: "/assets/why-choose-us/realhumansupport.jpg",
  },
  {
    id: 3,
    title: "Privacy First",
    description: "Your Data is safeguarded.",
    image: "/assets/why-choose-us/privacyfirst.jpg",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="w-full h-[350px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-orange-500/40 to-transparent opacity-90" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
