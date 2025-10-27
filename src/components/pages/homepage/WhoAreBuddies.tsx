import Container from "@/components/layout/container/Container";
import Image from "next/image";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const WhoAreBuddies = () => {
  return (
    <section className="bg-[#fef9f5] padding">
      <Container width>
        <section className="sm:grid grid-cols-2 justify-between gap-10">
          <div className="">
            <Image
              src="/assets/buddies/buddies.jpg"
              alt="Who are Buddies?"
              width={600}
              height={400}
              className="rounded-2xl w-full h-full object-cover mb-5 sm:mb-0"
            />
          </div>

          <div className="">
            <h2 className="title mb-2">Who are Buddies?</h2>
            <div className="w-20 h-1 bg-orange-500  mb-5  rounded-full"></div>

            <p className="mb-5">
              Zonely is a digital platform that offers casual, everyday
              conversations with real people –{" "}
              <span className="font-semibold">we call them Buddies.</span>
            </p>
            <p className="mb-5">
              Whether you’re feeling a little off, want to talk about your day,
              or simply crave light-hearted company.
            </p>
            <p className="mb-5">
              Zonely provides a{" "}
              <span className="font-semibold">non-judgmental space.</span>
            </p>

            <h3 className="font-semibold text-lg text-gray-900 mb-3">
              Where you can feel -
            </h3>
            <ul className="">
              <li className="mb-1">
                <div className="flex gap-3 items-center">
                  <IoMdCheckmarkCircleOutline className="text-[var(--primary)] text-xl" />
                  <p className="text-[var(--primary)]">Seen</p>
                </div>
              </li>
              <li className="mb-1">
                <div className="flex gap-3 items-center">
                  <IoMdCheckmarkCircleOutline className="text-[var(--primary)] text-xl" />
                  <p className="text-[var(--primary)]">Heard</p>
                </div>
              </li>
              <li className="">
                <div className="flex gap-3 items-center">
                  <IoMdCheckmarkCircleOutline className="text-[var(--primary)] text-xl" />
                  <p className="text-[var(--primary)]">Understood</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default WhoAreBuddies;
