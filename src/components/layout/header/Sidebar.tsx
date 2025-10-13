"use client";

import React, { useState } from "react";
//link
import Link from "next/link";
//json
import navbar from "@/components/assets/data/navbar/NavBar.json";
//icons
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

export default function Sidebar({
  setSidebar,
}: {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [activeLink, setActiveLink] = useState("null");

  return (
    <section className=" fixed top-0 left-0 w-[100%] h-[100%] z-10000 bg-white  p-5">
      <section className=" w-[100%] h-[100%] mt-0 mr-0 mb-0 ml-auto  ">
        <nav className="  h-full ">
          <section className=" h-1/7 text-4xl text-[var(--text)] flex justify-end  items-center ">
            <IoMdClose onClick={() => setSidebar(false)} />
          </section>
          {navbar.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={() => {
                setActiveLink(item.link);
                setSidebar(false); // ✅ Close sidebar on link click
              }}
              className={` p-5 text-lg  flex   text-[var(--text)] font-bold ${
                activeLink === item.link ? "" : ""
              } border-b-1    h-1/6 uppercase  `}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </section>
    </section>
  );
}
