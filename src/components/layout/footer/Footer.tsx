"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Container from "../container/Container";

const Footer: React.FC = () => {
  return (
    <section className="bg-[#2d2d2d] padding" id="contact-us">
      <Container width>
        <section className=" ">
          <div className="grid grid-cols-1 sm:grid-cols-[50%_30%_20%] justify-between">
            {/* Logo & Location */}
            <div>
              <div className="flex items-center gap-2 ">
                <Image
                  src="/assets/logo/logo.png"
                  alt="Zonely Logo"
                  width={150}
                  height={100}
                  className="object-center"
                />
              </div>

              <p className="text-white w-full sm:w-[50%] mb-4">
                Tower B, Bhutani Alphathum, Sector 90, Noida, Uttar Pradesh
                201305
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="subTitle text-white mb-5">Quick Links</h2>
              <ul className="">
                <li className="mb-4 text-white">
                  <Link href="/">Home</Link>
                </li>
                <li className="mb-4 text-white">
                  <Link href="/what-is-zonely">What is Zonely</Link>
                </li>
                <li className="mb-4 text-white">
                  <Link href="/whats-inside">What’s Inside</Link>
                </li>
                <li className="mb-4 text-white">
                  <Link href="/buddy-zone">Buddy Zone</Link>
                </li>
                <li className="mb-4 text-white">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="subTitle text-white mb-5">Follow Us on</h2>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="https://www.linkedin.com/company/108985022/admin/dashboard/"
                  target="_blank"
                  className="bg-linear-[var(--lgs)] p-2 rounded-full "
                >
                  <Linkedin className="text-white" size={18} />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61580609085593"
                  target="_blank"
                  className="bg-linear-[var(--lgs)] p-2 rounded-full "
                >
                  <Facebook className="text-white" size={18} />
                </Link>
                <Link
                  href="https://www.instagram.com/zonely_app?igsh=MTRiaDZqMmFvNTdldg%3D%3D&utm_source=qr"
                  target="_blank"
                  className="bg-linear-[var(--lgs)] p-2 rounded-full "
                >
                  <Instagram className="text-white" size={18} />
                </Link>
                <Link
                  href="https://www.youtube.com/@Zonelyapp"
                  target="_blank"
                  className="bg-linear-[var(--lgs)] p-2 rounded-full "
                >
                  <Youtube className="text-white" size={18} />
                </Link>
                <Link
                  href="https://x.com/Zonely_app"
                  target="_blank"
                  className="bg-linear-[var(--lgs)] p-2 rounded-full "
                >
                  <FaXTwitter className="text-white" size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-[var(--text)] mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-white">
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
            <p className="text-white">Copyright © 2025. All Rights Reserved.</p>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Footer;
