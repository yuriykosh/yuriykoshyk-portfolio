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
import { IconArrowRight } from "@/utils/Icons";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [showNavModal, setShowNavModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
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
          className:
            "transition max-lg:text-center text-fox-500/60 hover:text-fox-500 focus:text-fox-500 active:text-fox-500 outline-offset-4",
        },
        {
          label: "Frontend Development",
          href: "/portfolio/dev",
          className:
            "transition max-lg:text-center text-whale-500/60 hover:text-whale-500 focus:text-whale-500 active:text-whale-500 outline-offset-4",
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
    <header className="relative flex items-baseline justify-end px-0 py-1 mx-4 lg:justify-between lg:mx-8">
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
          pathname={pathname}
          showNavModal={showNavModal}
          closeNavModal={() => setShowNavModal(false)}
          showContactModal={showContactModal}
          setShowContactModal={setShowContactModal}
          closeContactModal={() => setShowContactModal(!showContactModal)}
        />
      )}

      {/* Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex gap-12">
          {routes.map((item) => (
            <NavbarItem
              key={item.id}
              pathname={pathname}
              color={
                item.category && item.category[0] && item.category[0].color
              }
              className="text-subtitle lg:text-subtitleL 2xl:text-subtitleXL"
              {...item}
            />
          ))}
        </ul>
      </nav>

      <button
        onClick={() => setShowContactModal(!showContactModal)}
        className="hidden group lg:flex flex-row items-center justify-center gap-2 py-1 px-2 duration-300 bg-transparent cursor-pointer border-[0.5px] border-white/40 rounded-4xl text-subtitle lg:text-subtitleL 2xl:text-subtitleXL text-white/60 transition hover:text-white hover:border-white/60 focus:text-white focus:border-white/60 outline-offset-4 hover:scale-105 focus:scale-105 animate-pulse"
      >
        Contact
        <IconArrowRight className="hidden text-white transition duration-500 opacity-0 group-hover:block group-hover:opacity-100" />
      </button>

      {showContactModal && (
        <ContactModal
          closeContactModal={() => setShowContactModal(!showContactModal)}
        />
      )}
    </header>
  );
};

export default Navbar;
