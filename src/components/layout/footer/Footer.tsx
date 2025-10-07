"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d2d2d] text-white px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/assets/images/logo.jpg"
              alt="Zonely Logo"
              width={100}
              height={100}
            />
            {/* <span className="text-2xl font-bold text-orange-500">ZONELY</span> */}
          </div>
          <p className="font-semibold">Registered Office</p>
          <p className="text-sm text-gray-300 mt-2 leading-relaxed">
            E-939, Gaur Cascades, Raj Nagar Extension Road,
            <br />
            Rajnagar Extension, Uttar Pradesh 201017
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Follow Us on</h3>
          <div className="flex gap-3">
            <Link
              href="#"
              className="bg-orange-500 p-2 rounded-full hover:bg-orange-600"
            >
              <Linkedin className="text-white" size={18} />
            </Link>
            <Link
              href="#"
              className="bg-orange-500 p-2 rounded-full hover:bg-orange-600"
            >
              <Facebook className="text-white" size={18} />
            </Link>
            <Link
              href="#"
              className="bg-orange-500 p-2 rounded-full hover:bg-orange-600"
            >
              <Instagram className="text-white" size={18} />
            </Link>
            <Link
              href="#"
              className="bg-orange-500 p-2 rounded-full hover:bg-orange-600"
            >
              <Youtube className="text-white" size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <div className="flex gap-6 mb-2 md:mb-0">
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
        <p>Copyright © 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
