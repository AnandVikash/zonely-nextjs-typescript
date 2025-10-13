"use client";

import React from "react";
import Container from "@/components/layout/container/Container";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section className="padding" id="what-is-zonely">
      <Container width>
        <section className="grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-10 ">
          <div className="">
            <div className="block sm:hidden">

              <h2 className="title">What is Zonely?</h2>

              {/* Styled separate line */}
              <p className="mb-2">
                It’s not therapy. It’s not dating. It’s just talking & chatting —
                Zonely style.
              </p>
              <div className="w-20 h-[3px] bg-[var(--primary)] rounded-full  mb-5 "></div>
            </div>
            <Image
              src="/assets/aboutus/aboutus.png"
              alt="About Us"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="">
            <div className="hidden sm:block">

              <h2 className="title">What is Zonely?</h2>

              {/* Styled separate line */}
              <p className="mb-2">
                It’s not therapy. It’s not dating. It’s just talking & chatting —
                Zonely style.
              </p>
              <div className="w-20 h-[3px] bg-[var(--primary)] rounded-full  mb-5 "></div>
            </div>


            <p className="mb-5">
              Zonely is your everyday space to just talk and chat — no labels,
              no pressure, no judgment. When you don’t want advice, therapy, or
              another round of mindless scrolling, all you want is someone to
              listen, laugh with, and keep it real. This is where Zonely Buddies
              come in. They’re not counselors or dates — just good people who
              love honest, easy conversations. In a world where sharing online
              often feels risky — with opinions, reactions, and judgment
              everywhere — Zonely gives you something different: a private,
              judgment-free space where you can simply be yourself.
            </p>

            <button className="btnLink1 hover:bg-orange-600 transition">
              Know More
            </button>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default AboutSection;
