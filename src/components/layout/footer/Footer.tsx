"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d2d2d] text-white px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Location */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/assets/logo/logo.png"
              alt="Zonely Logo"
              width={150}
              height={100}
            />
          </div>

          <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
            Tower B, Bhutani Alphathum, Sector 90, Noida, Uttar Pradesh 201305
          </p>
        </div>

        {/* Quick Links */}
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

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us on</h3>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="https://www.linkedin.com/company/108985022/admin/dashboard/"
              target="_blank"
              className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition"
            >
              <Linkedin className="text-white" size={18} />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61580609085593"
              target="_blank"
              className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition"
            >
              <Facebook className="text-white" size={18} />
            </Link>
            <Link
              href="https://www.instagram.com/zonely_app?igsh=MTRiaDZqMmFvNTdldg%3D%3D&utm_source=qr"
              target="_blank"
              className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition"
            >
              <Instagram className="text-white" size={18} />
            </Link>
            <Link
              href="https://www.youtube.com/@Zonelyapp"
              target="_blank"
              className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition"
            >
              <Youtube className="text-white" size={18} />
            </Link>
            <Link
              href="https://x.com/Zonely_app"
              target="_blank"
              className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition"
            >
              <Twitter className="text-white" size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <div className="flex flex-wrap gap-6 mb-2 md:mb-0 text-center md:text-left">
          <Link href="https://zonely.app/terms" target="_blank">
            Terms & Conditions
          </Link>
          <Link href="https://zonely.app/privacy" target="_blank">
            Privacy Policy
          </Link>
          <Link href="https://zonely.app/refund" target="_blank">
            Refund & Cancellation Policy
          </Link>
        </div>
        <p>Copyright © 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
