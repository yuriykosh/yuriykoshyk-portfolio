"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

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
      className={`group flex flex-col xs:justify-between gap-3 xs:gap-12 sm:gap-12 md:gap-14 py-4 md:py-6 px-6 border rounded-4xl backdrop-blur bg-black/25 transition ${classes}`}
      // style={{
      //   borderColor: `${color}`,
      // }}
    >
      <h4 className="group-hover:text-white">
        {headingStart} <span className="block">{headingEnd}</span>
      </h4>
      <Icon
        icon={icon}
        // color={color}
        className={`text-[32px] xs:text-[40px] md:text-[66px]  ${color} transition group-hover:text-fox-500`}
      />
    </Link>
  );
};

export default Category;
