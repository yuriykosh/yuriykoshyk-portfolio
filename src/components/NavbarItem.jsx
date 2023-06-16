"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

const NavbarItem = ({ id, label, active, href, className, closeNavModal }) => {
  return (
    <li className={`${className}`}>
      <Link
        href={href}
        onClick={() => closeNavModal()}
        className={twMerge(
          ` text-white/60 hover:text-white`,

          active && `${className} text-white`,
          active && id === 2 && `text-fox-500 hover:text-fox-500`
        )}
      >
        {label}
      </Link>
    </li>
  );
};
export default NavbarItem;
