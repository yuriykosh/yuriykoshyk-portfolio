"use client";

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
              `relative  text-white/60 transition hover:text-white focus:text-white active:text-white outline-offset-4`,

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
          </button>
          {open ? (
            <ul className="flex flex-col max-lg:justify-center max-lg:items-center max-lg:gap-6 max-lg:mb-6 max-lg:mt-10 lg:absolute lg:z-10 lg:gap-1 lg:p-4 lg:-ml-4 lg:rounded-lg lg:bg-black/60">
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
