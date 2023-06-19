"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { IconCategoryDesign, IconCategoryDev } from "@/utils/Icons";

const CategoryItem = ({
  id,
  headingStart,
  headingEnd,
  icon,
  href,
  color,
  className,
  classes,
}) => {
  const renderContent = () => {
    const pathname = usePathname();

    if (id === 1 && pathname === "/portfolio/design") {
      // Render content if id === 1 and pathname === "/portfolio/design"
      return (
        <Link
          href={href}
          className={`group flex flex-col xs:justify-between lg:h-full gap-3 xs:gap-12 sm:gap-12 md:gap-14 2xl:gap-20 py-4 md:py-6 px-6 lg:p-8 border rounded-4xl lg:rounded-[60px] backdrop-blur bg-black/25 transition hover:scale-105 focus:scale-105 group-hover:cursor-pointer outline-offset-4 ${classes}`}
        >
          <h4 className="group-hover:text-white group-focus:text-white">
            {headingStart} <span className="block">{headingEnd}</span>
          </h4>
          <IconCategoryDesign
            className={`text-[32px] leading-none  xs:text-[40px] md:text-[66px] 2xl:text-[96px] ${color} transition   group-hover:animate-spin-slow  group-focus:animate-spin-slow`}
          />
        </Link>
      );
      // } else if (condition3) {
      //   // Render content if condition3 is true
      //   return (
      //     <>
      //       <div>Content 3</div>
      //       <div>Content 4</div>
      //     </>
      //   );
    } else {
      // Render default content
      return (
        <Link
          href={href}
          className={`group flex flex-col xs:justify-between lg:h-full gap-3 xs:gap-12 sm:gap-12 md:gap-14 2xl:gap-20 py-4 md:py-6 px-6 lg:p-8 border rounded-4xl lg:rounded-[60px] backdrop-blur bg-black/25 transition hover:scale-105 focus:scale-105 group-hover:cursor-pointer outline-offset-4 ${classes}`}
        >
          <h4 className="group-hover:text-white group-focus:text-white">
            {headingStart} <span className="block">{headingEnd}</span>
          </h4>

          {icon === "carbon:navaid-ndb" ? (
            <IconCategoryDesign
              className={`text-[32px] leading-none  xs:text-[40px] md:text-[66px] 2xl:text-[96px] ${color} transition   group-hover:animate-spin-slow  group-focus:animate-spin-slow`}
            />
          ) : (
            <IconCategoryDev
              className={`text-[32px] leading-none  xs:text-[40px] md:text-[66px] 2xl:text-[96px] ${color} transition   group-hover:animate-spin-slow  group-focus:animate-spin-slow`}
            />
          )}
        </Link>
      );
    }
  };

  return <>{renderContent()}</>;
};

export default CategoryItem;
