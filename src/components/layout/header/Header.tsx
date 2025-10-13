"use client";

import React, { useEffect, useState } from "react";
//container
import Container from "../container/Container";
//image
import Image from "next/image";
//icons
import { IoIosSearch, IoMdCall, IoMdMenu } from "react-icons/io";
//link
import Link from "next/link";
//json
import navbar from "@/components/assets/data/navbar/NavBar.json";
//params
import { useParams } from "next/navigation";
//sidebar
import Sidebar from "./Sidebar";

const Header = () => {
  const [activeLink, setActiveLink] = useState("null"); // Set default active link
  const [sidebar, setSidebar] = useState(false);

  const params = useParams();

  useEffect(() => {
    setSidebar(false);
  }, [params]);
  return (
    <section className=" ">
      <Container width>
        <section className="flex justify-between items-center ">
          <div className="flex gap-10 items-center">
            <Image
              src="/assets/logo/logo.png"
              alt="Zonely Logo"
              width={150}
              height={100}
              className="object-cover"
            />
          </div>

          <div className="hidden sm:flex gap-10 items-center text-[var(--header-color)] ">
            <div className="flex gap-10 ">
              {navbar.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  onClick={() => setActiveLink(item.link)}
                  className={`hover:text-[var(--black)] font-medium ${
                    activeLink === item.link
                      ? "bg-[var(--white)] text-[--white]"
                      : ""
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <section className=" text-[var(--black)] sm:hidden">
            <button onClick={() => setSidebar(true)} className="text-3xl">
              <IoMdMenu />
            </button>
          </section>
        </section>
      </Container>
      {sidebar && <Sidebar setSidebar={setSidebar} />}
    </section>
  );
};

export default Header;
