"use client";

import React, { useRef } from "react";
import Container from "@/components/layout/container/Container";

const testimonials = [
  {
    id: 1,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    name: "Client 1",
    profession: "Profession 1",
  },
  {
    id: 2,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    name: "Client 2",
    profession: "Profession 2",
  },
  {
    id: 3,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    name: "Client 3",
    profession: "Profession 3",
  },
  {
    id: 4,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    name: "Client 4",
    profession: "Profession 4",
  },
  {
    id: 5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    name: "Client 5",
    profession: "Profession 5",
  },
  {
    id: 6,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    name: "Client 6",
    profession: "Profession 6",
  },
];

const FeedbackSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll one card smoothly
  const handleScroll = () => {
    if (containerRef.current) {
      const card = containerRef.current.firstChild as HTMLElement;
      if (card) {
        containerRef.current.scrollBy({
          top: card.offsetHeight + 24, // card height + gap (gap-6 = 1.5rem ~ 24px)
          behavior: "smooth",
        });
      }
    }
  };

  //Auto scroll every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      handleScroll();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // again scroll to top when reaching the bottom
  React.useEffect(() => {
    const current = containerRef.current;
    if (!current) return;
    const onScroll = () => {
      if (
        current.scrollTop + current.clientHeight >=
        current.scrollHeight - 10
      ) {
        current.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    current.addEventListener("scroll", onScroll);
    return () => current.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-[#fce9e3] py-20">
      <Container className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-6 lg:pr-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Real feedback from
            <br />
            our happy users
          </h2>

          <p className="text-gray-700 mb-8 max-w-xl">
            We take pride in the success of our clients and the relationships we
            build along the way. Their stories reflect the trust in us and the
            impact we create every day.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition">
            View More
          </button>
        </div>

        {/* Right side: testimonial cards */}
        <div className="w-full lg:w-1/2 flex justify-center px-6">
          <div className="relative w-[420px] md:w-[420px] h-[700px] rounded-[28px] border-4 border-black bg-white shadow-lg overflow-hidden">
            <div className="h-10 flex items-center justify-center mt-3">
              <div className="w-20 h-1.5 bg-black rounded-full" />
            </div>

            <div
              ref={containerRef}
              className="px-6 py-6 flex flex-col gap-6 overflow-auto h-[600px] scroll-smooth"
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="relative bg-white border border-orange-400 rounded-2xl p-5 flex flex-col justify-between shadow-sm"
                >
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="text-orange-400 text-2xl align-top mr-1">
                      “
                    </span>
                    {t.text}
                    <span className="text-orange-400 text-2xl align-top ml-1">
                      ”
                    </span>
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          viewBox="0 0 24 24"
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z"
                            fill="#F97316"
                          />
                        </svg>
                      ))}
                    </div>

                    <div className="text-right">
                      <div className="text-orange-600 font-semibold">
                        {t.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {t.profession}
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute -bottom-3 right-5 w-0 h-0
                               border-t-[14px] border-t-orange-400
                               border-l-[14px] border-l-transparent
                               border-r-[14px] border-r-transparent"
                  />
                  <div
                    className="absolute -bottom-2 right-5 w-0 h-0
                               border-t-[12px] border-t-white
                               border-l-[12px] border-l-transparent
                               border-r-[12px] border-r-transparent"
                  />
                </div>
              ))}
            </div>

            {/* Arrow button */}
            <div
              onClick={handleScroll}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white text-lg cursor-pointer select-none"
            >
              ↓
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeedbackSection;
