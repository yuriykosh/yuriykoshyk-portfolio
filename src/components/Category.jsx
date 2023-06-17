"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

const Category = ({
  id,
  headingStart,
  headingEnd,
  icon,
  href,
  color,
  className,
  classes,
}) => {
  return (
    <Link
      href={href}
      className={`group flex flex-col xs:justify-between lg:h-full gap-3 xs:gap-12 sm:gap-12 md:gap-14 2xl:gap-20 py-4 md:py-6 px-6 lg:p-8 border rounded-4xl lg:rounded-[60px] backdrop-blur bg-black/25 transition hover:scale-105 focus:scale-105 group-hover:cursor-pointer outline-offset-4 ${classes}`}
      // style={{
      //   borderColor: `${color}`,
      // }}
    >
      <h4 className="group-hover:text-white group-focus:text-white">
        {headingStart} <span className="block">{headingEnd}</span>
      </h4>

      <Icon
        icon={icon}
        // color={color}
        className={`text-[32px] leading-none  xs:text-[40px] md:text-[66px] 2xl:text-[96px] ${color} transition   group-hover:animate-spin-slow  group-focus:animate-spin-slow`}
      />
    </Link>
  );
};

export default Category;
