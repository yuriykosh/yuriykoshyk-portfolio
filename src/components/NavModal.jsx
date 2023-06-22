"use client";

import { Icon } from "@iconify/react";
import NavbarItem from "./NavbarItem";

const NavModal = ({ routes, pathname, showNavModal, closeNavModal }) => {
  return (
    <aside
      className={`absolute -left-7 -top-2 xs:-top-5 w-screen h-screen p-3 bg-black  z-[60] lg:hidden ${
        showNavModal ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      {/* container */}
      <div className="flex flex-col w-full h-full gap-24 xs:gap-36 md:gap-28">
        {/* close button */}
        <button
          onClick={() => closeNavModal()}
          className="flex flex-row items-center justify-center gap-2 p-4 transition bg-transparent border rounded-full cursor-pointer border-white/40 text-white/60 w-fit hover:text-white "
        >
          <Icon icon="carbon:close" className="text-4xl" />
        </button>

        {/* navigation */}
        <div className="flex flex-col items-center justify-center gap-8">
          <ul className="flex flex-col items-center justify-center gap-8">
            {routes.map((item) => (
              <NavbarItem
                key={item.id}
                closeNavModal={closeNavModal}
                pathname={pathname}
                color={
                  item.category && item.category[0] && item.category[0].color
                }
                className="flex flex-col transition text-h3S md:text-h3L 2xl:text-h3XL"
                {...item}
              />
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
