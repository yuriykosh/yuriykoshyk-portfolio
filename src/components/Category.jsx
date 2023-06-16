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
}) => {
  return (
    <Link
      href={href}
      className={`flex flex-col gap-3 py-4 px-6 border rounded-4xl backdrop-blur bg-black/25 hover:border-orange-500`}
      style={{
        borderColor: `${color}`,
      }}
    >
      <h4>
        {headingStart} <span className="block">{headingEnd}</span>
      </h4>
      <Icon icon={icon} color={color} className="text-4xl" />
    </Link>
  );
};

export default Category;
