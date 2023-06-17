"use client";

import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const NavbarItem = ({
  id,
  label,
  active,
  href,
  category,
  className,
  closeNavModal,
  pathname,
}) => {
  const [open, setOpen] = useState(false);

  // const subLinks = item.category.map(({ color }) => {
  //   color;
  // });

  return (
    <li className={`${className}`}>
      {id === 2 ? (
        <>
          <button
            onClick={() => {}}
            className={twMerge(
              ` text-white/60 transition hover:text-white focus:text-white active:text-white outline-offset-4`,

              // active && `${className} text-white`,
              pathname === "/portfolio/design"
                ? `${category.map((item) => console.log(item.color))}`
                : ""
            )}
          >
            {label}
          </button>
          <ul>
            <li>
              <Link href="/portfolio/design" className="">
                UX/UI Design
              </Link>
            </li>
            <li>
              <Link href="/portfolio/dev">Frontend Development</Link>
            </li>
          </ul>
        </>
      ) : (
        <>
          <Link
            href={href}
            onClick={() => closeNavModal()}
            className={twMerge(
              ` text-white/60 transition hover:text-white focus:text-white active:text-white outline-offset-4`,

              active && `${className} text-white`
            )}
          >
            {label}
          </Link>
        </>
      )}
    </li>
  );
};
export default NavbarItem;
