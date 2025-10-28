"use client";

import Container from "@/components/layout/container/Container";
import React, { FormEvent } from "react";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactSection: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Let the form submit naturally
    console.log("Form submitted!");

    // Redirect after 1 second so form can send data
    setTimeout(() => {
      window.location.href = "/thank-you";
    }, 1000);
  };

  return (
    <section className="padding" id="contact">
      <Container width>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10 ">
          <div>
            <div className="mb-6">
              <h2 className="title mb-2">Get In Touch</h2>
              <div className="w-20 h-1 bg-[var(--primary)] rounded-full"></div>
            </div>

            <h3 className="subTitle sm:w-[68%]">
              For login issues, compliance queries, or anything about Zonely —
              connect with us anytime!
            </h3>
            {/* 
            <p className="mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p> */}

            <div className="">
              <div className="flex items-center gap-3">
                <MdOutlineMailOutline className="text-[var(--primary)] text-xl" />
                <p className="font-semibold ">Mail us</p>
              </div>
              <p className="">support@zonely.app</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            method="POST"
            action="https://mail.digikit.in/forms/zonely/send.php"
          >
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border [var(--primary)] focus:border-[var(--primary)] rounded-md px-4 py-3 outline-none placeholder-gray-400"
              required
              name="name"
            />
            <input
              type="email"
              placeholder="Enter your mail id"
              className="w-full border [var(--primary)] focus:border-[var(--primary)] rounded-md px-4 py-3 outline-none placeholder-gray-400"
              required
              name="email"
            />
            <textarea
              placeholder="Enter your Message"
              rows={5}
              className="w-full border [var(--primary)] focus:border-[var(--primary)] rounded-md px-4 py-3 outline-none placeholder-gray-400 resize-none"
              required
              name="message"
            ></textarea>
            <button
              type="submit"
              className="bg-[var(--primary)] hover:bg-[var(--primary)] text-white font-medium px-8 py-2.5 rounded-md transition"
            >
              Submit
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
