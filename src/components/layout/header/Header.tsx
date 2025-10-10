"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";

const Header: React.FC = () => {
  // Smooth scroll handler
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full bg-white shadow-sm px-4 md:px-6 py-3 sticky top-0 left-0 z-50 overflow-x-hidden">
      <nav className="flex flex-wrap items-center justify-between gap-y-3 gap-x-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo/logo.png"
            alt="Zonely Logo"
            width={130}
            height={90}
            className="object-cover"
          />
        </div>

        {/* Menu */}

        {/* Signup & Get App */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div
            className="
            hidden 
            md:flex 
            items-center 
            gap-3
            lg:gap-6 
            text-gray-600 
            font-medium 
          "
          >
            <a href="#home" onClick={(e) => handleScroll(e, "home")}>
              Home
            </a>
            <a
              href="#what-is-zonely"
              onClick={(e) => handleScroll(e, "what-is-zonely")}
            >
              What is Zonely
            </a>
            <a href="#inside" onClick={(e) => handleScroll(e, "inside")}>
              What’s Inside
            </a>
            <a href="#career" onClick={(e) => handleScroll(e, "career")}>
              Career
            </a>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
              Contact Us
            </a>
          </div>

          {/* <Link
            href="/signup"
            className="flex items-center gap-1 text-orange-600 font-medium whitespace-nowrap"
          >
            <User size={18} />
            Signup
          </Link> */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.zonely.zonelyapp"
            className="bg-orange-600 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-700 transition whitespace-nowrap"
          >
            Get App
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
