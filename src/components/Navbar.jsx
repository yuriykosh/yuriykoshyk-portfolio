"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

import logo from "/public/logo.svg";
import burgerIcon from "/public/burger-icon.svg";
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
      active: pathname === "/portfolio/design" || pathname === "/portfolio/dev",
      href: "",
      category: [
        {
          label: "UX/UI Design",
          href: "/portfolio/design",
          color: "text-fox-500/60 hover:text-fox-500",
        },
        {
          label: "Frontend Development",
          href: "/portfolio/dev",
          color: "text-whale-500/60 hover:text-whale-500",
        },
      ],
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
        <Image
          src={logo}
          fill
          alt="Yuriy Koshyk Logo"
          className=" fill-fox-500"
        />
      </Link>

      {/* Burger Button */}
      <button
        className=" w-[28px] h-[26px] lg:hidden"
        onClick={() => setShowNavModal(!showNavModal)}
      >
        <Image src={burgerIcon} alt="Burger menu" />
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
            <NavbarItem
              key={item.id}
              pathname={pathname}
              className="text-subtitle 2xl:text-subtitleXL"
              {...item}
            />
          ))}
        </ul>
      </nav>

      <button className="hidden lg:flex flex-row items-center justify-center gap-2 py-0.5 px-1 bg-transparent cursor-pointer border-[0.5px] border-white/40 rounded-4xl text-subtitle 2xl:text-subtitleXL text-white/60 transition hover:text-white hover:border-white/60 focus:text-white focus:border-white/60 outline-offset-4 hover:cursor-pointer">
        Contact
      </button>
    </header>
  );
};

export default Navbar;
