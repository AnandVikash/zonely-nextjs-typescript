"use client";

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
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</h2>
          <div className="w-16 h-1 bg-orange-500 mb-6"></div>

          <p className="font-semibold text-gray-800 mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <p className="text-gray-600 mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>

          <div className="flex items-start gap-3 mt-6">
            <div className="text-orange-500 text-2xl mt-1">
              <MdOutlineMailOutline />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Mail us</p>
              <p className="text-gray-600 text-sm">support@zonely.app</p>
            </div>
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
            className="w-full border border-orange-300 focus:border-orange-500 rounded-md px-4 py-3 outline-none placeholder-gray-400"
            required
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your mail id"
            className="w-full border border-orange-300 focus:border-orange-500 rounded-md px-4 py-3 outline-none placeholder-gray-400"
            required
            name="email"
          />
          <textarea
            placeholder="Enter your Message"
            rows={5}
            className="w-full border border-orange-300 focus:border-orange-500 rounded-md px-4 py-3 outline-none placeholder-gray-400 resize-none"
            required
            name="message"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-2.5 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
