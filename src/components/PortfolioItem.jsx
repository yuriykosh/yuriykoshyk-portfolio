import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function cn(...classes) {
  return classes.filter(Boolean).join("");
}

const PortfolioItem = ({ item }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <li className="relative h-full ml-4 transition rounded-4xl ">
      <Link
        href={item.href}
        className="hover:scale-95 focus:scale-95 focus:border-fox-500 rounded-4xl"
      >
        <div className="relative w-56 h-full overflow-hidden md:w-72 lg:w-60 xl:w-80 2xl:w-96 rounded-4xl">
          <Image
            src={item.imageSrc}
            alt={item.name}
            fill
            quality={100}
            className={cn(
              "object-cover overflow-hidden  duration-700 ease-in-out",
              isLoading
                ? "grayscale blur-2xl scale-110 "
                : "grayscale-0 blur-0 scale-100 "
            )}
            onLoadingComplete={() => setLoading(false)}
          />
          <ul className="absolute flex gap-1 left-4 bottom-4">
            <li className="flex items-center justify-center px-1 py-0.5 border border-fox-500/80 rounded-4xl">
              <p className="text-fox-500 text-subtitle 2xl:text-subtitleXL">
                {item.name}
              </p>
            </li>
            <li className="flex items-center justify-center px-1 py-0.5 border border-fox-500/80 bg-fox-500/80 rounded-4xl">
              <time
                timedate={item.year}
                className="text-white text-subtitle 2xl:text-subtitleXL"
              >
                {item.year}
              </time>
            </li>
          </ul>
        </div>
      </Link>
    </li>
  );
};
export default PortfolioItem;
