import Container from "@/components/layout/container/Container";
import Image from "next/image";
import React from "react";

const HowItsWork = () => {
  return (
    <section className="sm:py-16 " id="work">
      <Container width>
        <section className="">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <div className="w-20 h-1 bg-orange-500 mt-2 mb-6 rounded-full inline-block"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-30 sm:gap-10 relative py-20 ">
            <div className="flex flex-col items-center justify-center p-5 shadow-2xl rounded-xl border relative pt-24 bg-white mb-3 sm:mb-0">
              <div className="absolute -top-25">
                <Image
                  src="/assets/work/img-1.png"
                  alt="Pick your vibe"
                  width={300}
                  height={200}
                  className="object-center"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <p className="text-orange-500 mb-2  tracking-[4] font-medium ">
                  STEP 1
                </p>
                <h3 className="text-2xl font-medium mb-3">Pick your vibe</h3>
                <p className="text-center">
                  Feeling chatty, bored, lonely, or just want to talk? Choose
                  what fits your mood and connect with a right Buddy.
                </p>
              </div>
            </div>
            <div className="hidden sm:block w-20 h-1 bg-orange-500 mt-2 mb-6  absolute bottom-70 left-90 -z-1"></div>

            <div className="flex flex-col items-center justify-center p-5 shadow-2xl rounded-xl border relative pt-24 bg-white mb-3 sm:mb-0">
              <div className="absolute -top-25">
                <Image
                  src="/assets/work/img-1.png"
                  alt="Start the chat"
                  width={300}
                  height={200}
                  className=" object-center "
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <p className="text-orange-500   mb-2 tracking-[4] font-medium ">
                  STEP 2
                </p>
                <h3 className="text-2xl font-medium mb-3">Start the chat</h3>
                <p className="text-center">
                  Hop into a friendly conversation , text or voice. Talk about
                  your day, random thoughts, your loneliness or whatever’s on
                  your mind, no filters, no pressure.
                </p>
              </div>
            </div>

            <div className="hidden sm:block w-20 h-1 bg-orange-500 mt-2 mb-6  absolute bottom-30 right-90 -z-50 "></div>

            <div className="flex flex-col items-center justify-center p-5 shadow-2xl rounded-xl border relative pt-24 bg-white">
              <div className="absolute -top-25">
                <Image
                  src="/assets/work/img-1.png"
                  alt="Enjoy the moment"
                  width={300}
                  height={200}
                  className=" object-center "
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <p className="text-orange-500 tracking-[4] font-medium  mb-2 ">
                  STEP 3
                </p>
                <h3 className="text-2xl font-medium mb-3">Enjoy the moment</h3>
                <p className="text-center">
                  Sometimes, a good chat is all you need to unwind or share a
                  laugh. That’s what Zonely’s about — easy conversations,
                  anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default HowItsWork;
