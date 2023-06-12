"use client";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";

const NavModal = ({ links, showNavModal, closeNavModal }) => {
  return (
    <aside
      className={`absolute -left-3 -top-5 w-screen h-screen p-3 bg-black border border-red-600 z-50 lg:hidden ${
        showNavModal ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      {/* container */}
      <div className="flex flex-col w-full h-full">
        {/* close button */}
        <button
          onClick={() => closeNavModal()}
          className="flex flex-row items-center justify-center gap-2 p-4 transition bg-transparent border rounded-full cursor-pointer border-white/40 text-white/60 w-fit hover:text-white "
        >
          <Icon icon="carbon:close" className="text-4xl" />
        </button>

        {/* navigation */}
        <div className="flex flex-col items-center justify-center flex-grow gap-8">
          <ul className="flex flex-col items-center justify-center gap-8">
            {links.map(({ id, title, url }) => (
              <li key={id}>
                <Link
                  href={url}
                  onClick={() => closeNavModal()}
                  className="transition text-subtitle text-white/60 hover:text-white"
                >
                  <h3>{title}</h3>
                </Link>
              </li>
            ))}
          </ul>
          <button className="flex flex-row items-center justify-center gap-2 py-1 px-4 bg-transparent cursor-pointer border-[0.5px] border-white/40 rounded-4xl text-white/60 hover:text-white transition">
            <h3>Contact</h3>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default NavModal;
