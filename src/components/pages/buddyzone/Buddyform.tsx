"use client";

import React, { useState } from "react";

const Buddyform: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    languages: "",
    hobbies: "",
    reason: "",
    photo: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, photo: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="container mx-auto">
      <section
        className="relative flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://placehold.jp/1920x1080.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 px-4 py-20 w-full">
          <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-2xl border border-white rounded-2xl shadow-lg p-10 text-center">
            <h2 className="text-3xl font-semibold mb-3 text-gray-900">
              Join{" "}
              <span className=" underline decoration-orange-500">
                Zonely
              </span>{" "}
              as a buddy
            </h2>

            <p className="text-gray-800 mb-1">
              Connect, chat, earn in a safe, verified space built for genuine
              conversations.
            </p>
            <p className="text-gray-800 mb-8">
              Fill out this form and we'll reach out for a quick conversation
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border border-white bg-white/60 text-white rounded-lg px-4 py-3 w-full placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="border border-white bg-white/60 text-white rounded-lg px-4 py-3 w-full placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-white bg-white/60 text-white rounded-lg px-4 py-3 w-full placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <select
                  name="languages"
                  value={formData.languages}
                  onChange={handleChange}
                  required
                  className="border border-white bg-white/60 text-white rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option value="">Select languages</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Kannada">Kannada</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Telugu">Telugu</option>
                </select>

                <input
                  type="text"
                  name="hobbies"
                  placeholder="Your interest or hobbies"
                  value={formData.hobbies}
                  onChange={handleChange}
                  required
                  className="border border-white bg-white/60 text-white rounded-lg px-4 py-3 w-full placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                <label
                  htmlFor="photo-upload"
                  className="flex items-center justify-center border border-dashed border-white bg-white/60 text-white rounded-lg px-4 py-3 cursor-pointer w-full hover:bg-white/80 transition"
                >
                  ＋ Upload your recent photo
                  <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    hidden
                  />
                </label>
              </div>

              <textarea
                name="reason"
                placeholder="Why you want to be a Zonely Buddy"
                value={formData.reason}
                onChange={handleChange}
                required
                className="border border-white bg-white/60 text-white rounded-lg px-4 py-3 w-full placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                Apply Now
              </button>
            </form>

            <div className="text-gray-800 mt-8 text-sm">
              Scroll Down For More
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buddyform;
