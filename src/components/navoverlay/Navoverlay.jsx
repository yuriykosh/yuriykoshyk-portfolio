"use client";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";

const Navoverlay = ({ links, className }) => {
  const [showNavoverlay, setShowNavoverlay] = useState(false);

  return (
    <div className={`${className}`}>
      <div className="flex flex-col w-full h-full">
        <button
          onClick={() => setShowNavoverlay(!showNavoverlay)}
          className="flex flex-row items-center justify-center gap-2 p-4 bg-transparent border rounded-full cursor-pointer border-white/40 text-white/60 w-fit"
        >
          <Icon icon="carbon:close" className="text-4xl" />
        </button>

        <div className="flex flex-col items-center justify-center flex-grow gap-8">
          <ul className="flex flex-col items-center justify-center gap-8">
            {links.map(({ id, title, url }) => (
              <li>
                <Link
                  key={id}
                  href={url}
                  className="text-subtitle text-white/60"
                >
                  <h3>{title}</h3>
                </Link>
              </li>
            ))}
          </ul>
          <button className="flex flex-row items-center justify-center gap-2 py-1 px-4 bg-transparent cursor-pointer border-[0.5px] border-white/40 rounded-4xl text-subtitle text-white/60">
            <h3>Contact</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navoverlay;
