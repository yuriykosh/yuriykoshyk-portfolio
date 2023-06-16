"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

import SVGLOGO from "/public/logo.svg";
import SVGBURGER from "/public/burger-icon.svg";
import NavModal from "./NavModal";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const [showNavModal, setShowNavModal] = useState(false);
  const pathname = usePathname();

  const routes = [
    {
      id: 1,
      label: "Home",
      active: pathname === "/",
      href: "/",
    },
    {
      id: 2,
      label: "Portfolio",
      active: pathname === "/portfolio",
      href: "/portfolio",
    },
    {
      id: 3,
      label: "About",
      active: pathname === "/about",
      href: "/about",
    },
  ];

  return (
    <header className="relative flex justify-end mx-4 lg:justify-between items-baseline pt-1.5 pb-[5px] px-0 lg:mx-8">
      {/* LOGO */}
      <Link
        href="/"
        className="absolute z-10 w-[30px] h-[26px] mr-[46%] md:mr-[48%] lg:mx-[50%]"
      >
        <Image src={SVGLOGO} fill={true} alt="Yuriy Koshyk Logo" />
      </Link>

      {/* Burger Button */}
      <button
        className=" w-[28px] h-[26px] lg:hidden"
        onClick={() => setShowNavModal(!showNavModal)}
      >
        <Image src={SVGBURGER} alt="Burger menu" />
      </button>

      {/* Mobile Navigation */}
      {showNavModal && (
        <NavModal
          routes={routes}
          showNavModal={showNavModal}
          closeNavModal={() => setShowNavModal(false)}
        />
      )}

      {/* Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex gap-12">
          {routes.map((item) => (
            <NavbarItem key={item.id} className="text-subtitle" {...item} />
          ))}
        </ul>
      </nav>

      <button className="hidden lg:flex flex-row items-center justify-center gap-2 py-0.5 px-1 bg-transparent cursor-pointer border-[0.5px] border-white/40 rounded-4xl text-subtitle text-white/60">
        Contact
      </button>
    </header>
  );
};

export default Navbar;
