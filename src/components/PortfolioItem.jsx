"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function cn(...classes) {
  return classes.filter(Boolean).join("");
}

const PortfolioItem = ({ id, name, href, imageSrc, year }) => {
  const pathname = usePathname();
  const [isLoading, setLoading] = useState(true);

  return (
    <li className="relative h-full transition first:ml-4 last:mr-6 rounded-4xl ">
      <Link
        href={href || ""}
        className="hover:scale-95 focus:scale-95 focus:border-fox-500 rounded-4xl"
      >
        <div className="relative h-full overflow-hidden w-52 md:w-72 lg:w-60 xl:w-80 2xl:w-96 rounded-4xl bg-neutral-400/60">
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="(max-width: 767px) 18rem, (max-width: 1023px) 18rem, (max-width: 1279px) 15rem, (max-width: 1535px) 24rem, 24rem"
            quality={100}
            className={cn(
              "object-cover overflow-hidden hover:scale-110 focus:scale-110 focus:border-fox-500 transition duration-300 ease-in-out",
              isLoading
                ? "grayscale blur-2xl scale-110 duration-700 ease-in-out"
                : "grayscale-0 blur-0 scale-100 duration-700 ease-in-out"
            )}
            onLoadingComplete={() => setLoading(false)}
          />
          <div className="absolute w-full h-full bg-gradient-to-b from-white/0 from-0% via-white/0 via-70% to-white pointer-events-none"></div>
          {pathname === "/portfolio/design" ? (
            <ul className="absolute flex gap-1 left-4 bottom-4">
              <li className="flex items-center justify-center px-1 py-0.5  border border-fox-500/80 rounded-4xl backdrop-blur-sm">
                <p className="text-fox-500 text-subtitle lg:text-subtitleL 2xl:text-subtitleXL">
                  {name}
                </p>
              </li>
              <li className="flex items-center justify-center px-1 py-0.5 border border-fox-500/80 bg-fox-500/80 rounded-4xl">
                <time
                  timedate={year}
                  className="text-white text-subtitle lg:text-subtitleL 2xl:text-subtitleXL"
                >
                  {year}
                </time>
              </li>
            </ul>
          ) : (
            <ul className="absolute flex gap-1 left-4 bottom-4">
              <li className="flex items-center justify-center px-1 py-0.5  border border-whale-500/80 rounded-4xl backdrop-blur-sm">
                <p className="text-whale-500 text-subtitle 2xl:text-subtitleXL">
                  {name}
                </p>
              </li>
              <li className="flex items-center justify-center px-1 py-0.5 border border-whale-500/80 bg-whale-500/80 rounded-4xl">
                <time
                  timedate={year}
                  className="text-white text-subtitle 2xl:text-subtitleXL"
                >
                  {year}
                </time>
              </li>
            </ul>
          )}
        </div>
      </Link>
    </li>
  );
};
export default PortfolioItem;
