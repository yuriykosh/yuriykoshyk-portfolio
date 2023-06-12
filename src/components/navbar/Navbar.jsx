"use client"; // this is a client component
import Link from "next/link";
import Image from "next/image";
import SVGLOGO from "../../../public/logo.svg";
import SVGBURGER from "../../../public/burger-icon.svg";
import { useState } from "react";
import { Icon } from "@iconify/react";
import NavModal from "../navModal/NavModal";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
];

const Navbar = () => {
  const [showNavModal, setShowNavModal] = useState(false);

  return (
    <header className="relative pt-1.5 pb-[5px] px-0 lg:mx-8">
      {/* LOGO */}
      <Link href="/" className="absolute z-10 w-[30px] h-[26px] mx-[50%]">
        <Image src={SVGLOGO} fill={true} alt="Yuriy Koshyk Logo" />
      </Link>

      {/* Burger Button */}
      <button
        className="w-[28px] h-[26px] lg:hidden"
        onClick={() => setShowNavModal(!showNavModal)}
      >
        <Image src={SVGBURGER} alt="Burger menu" />
      </button>

      {/* Mobile Navigation */}
      {showNavModal && (
        <NavModal
          links={links}
          showNavModal={showNavModal}
          closeNavModal={() => setShowNavModal(false)}
        />
      )}

      {/* Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex gap-12">
          {links.map(({ id, title, url }) => (
            <li key={id}>
              <Link href={url} className="text-subtitle text-white/60">
                {title}
              </Link>
            </li>
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
