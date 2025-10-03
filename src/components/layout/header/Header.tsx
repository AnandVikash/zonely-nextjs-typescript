"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm px-6 py-3">
      <nav className="flex items-center justify-between">

        <div className="flex items-center gap-2">
          <Image
            src="/logo-icon.png"
            alt="Zonely Logo"
            width={28}
            height={28}
          />
          <span className="text-xl font-bold text-orange-600">ZONELY</span>
        </div>


        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/inside">What’s Inside</Link>
          <Link href="/career">Career</Link>
          <Link href="/contact">Contact Us</Link>
        </div>


        <div className="flex items-center gap-4">
          <Link
            href="/signup"
            className="flex items-center gap-1 text-orange-600 font-medium"
          >
            <User size={18} />
            Signup
          </Link>
          <Link
            href="/get-app"
            className="bg-orange-600 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-700 transition"
          >
            Get App
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
