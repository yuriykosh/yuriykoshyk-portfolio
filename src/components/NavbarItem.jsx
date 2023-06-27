"use client";

import { IconChevronDown } from "@/utils/Icons";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const NavbarItem = ({
  id,
  label,
  active,
  href,
  category,
  // color,
  pathname,
  className,
  closeNavModal,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleMouseLeave = () => {
    setOpen(!open);
  };

  function handleLink() {
    handleOpen;
    closeNavModal;
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li ref={ref} className={`${className}`}>
      {id === 2 ? (
        <>
          <button
            onClick={handleOpen}
            className={twMerge(
              `relative group text-white/60 transition max-lg:w-fit max-lg:mx-auto hover:text-white focus:text-white active:text-white outline-offset-4`,

              // active && `${className} text-white`,
              pathname === "/portfolio/design"
                ? `text-fox-500 hover:text-fox-500 focus:text-fox-500 active:text-fox-500`
                : "",
              pathname === "/portfolio/dev"
                ? `text-whale-500 hover:text-whale-500 focus:text-whale-500 active:text-whale-500`
                : ""
            )}
          >
            {label}
            <IconChevronDown
              className={
                open
                  ? "absolute translate-x-1 -translate-y-1/2 opacity-100 left-full top-1/2 transition rotate-180"
                  : "hidden absolute translate-x-1 -translate-y-1/2 opacity-0 left-full top-1/2 transition rotate-0 group-hover:block group-hover:opacity-100 group-focus:block group-focus:opacity-100"
              }
            />
          </button>
          {open ? (
            <ul
              onMouseLeave={handleMouseLeave}
              className="flex flex-col max-lg:w-fit max-lg:justify-center max-lg:items-center max-lg:gap-6 max-lg:mb-6 max-lg:mt-10 lg:absolute lg:z-10 lg:gap-1 lg:p-4 lg:-ml-4 lg:rounded-lg lg:bg-black/60"
            >
              {category.map(({ label, href, className }) => (
                <li
                  key={label}
                  className="flex max-lg:justify-center max-lg:items-center max-lg:w-fit"
                >
                  <Link
                    onClick={() => {
                      closeNavModal();
                      handleOpen;
                    }}
                    href={href}
                    className={className}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </>
      ) : (
        <>
          <Link
            href={href}
            onClick={() => {
              closeNavModal();
              setOpen(false);
            }}
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
