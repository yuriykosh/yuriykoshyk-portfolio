"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { IconCategoryDesign, IconCategoryDev } from "@/utils/Icons";
import BgPicture from "@/utils/BgPicture";
import PortfolioList from "@/components/PortfolioList";
import DesignTools from "@/components/DesignTools";
import DesignSkills from "@/components/DesignSkills";

const Category = () => {
  const pathname = usePathname();
  const [additionalInfo, setAdditionalInfo] = useState(false);

  const category = [
    {
      id: 1,
      headingStart: "UX/UI",
      headingEnd: "Design",
      icon: "carbon:navaid-ndb",
      href: "/portfolio/design",
      color:
        "text-fox-500/80 group-hover:text-fox-500 group-focus:text-fox-500",
      classes: "border-fox-500/80 hover:border-fox-500 focus:border-fox-500",
    },
    {
      id: 2,
      headingStart: "Frontend",
      headingEnd: "Development",
      icon: "carbon:navaid-tacan",
      href: "/portfolio/dev",
      color:
        "text-whale-500/80 group-hover:text-whale-500 group-focus:text-whale-500",
      classes:
        "border-whale-500/80 hover:border-whale-500 focus:border-whale-500",
    },
  ];

  const designData = category.find((item) => item.id === 1);
  const devData = category.find((item) => item.id === 2);

  return (
    <div className="flex flex-col justify-between h-full xs:pb-10 lg:p-0">
      {/* <div className="flex flex-col gap-4">
        {category.map((item) => (
          <CategoryItem key={item.id} {...item} />
        ))}
      </div> */}

      {pathname === "/portfolio/design" ? (
        <div className="flex flex-col w-full h-full gap-4 xs:gap-8">
          {/* MAIN CONTENT */}
          <div className="flex overflow-hidden flex-col  grow xs:justify-between lg:relative lg:h-full pb-4 xs:pb-4 lg:pl-8 xl:pl-10 lg:pr-0 lg:py-4 border border-fox-500 rounded-4xl lg:rounded-[60px] backdrop-blur bg-black/25 transition">
            <div className="flex flex-row-reverse items-center justify-end gap-3 m-6 lg:absolute lg:top-8 lg:bottom-8 lg:m-0 lg:flex-col lg:justify-between lg:items-start xl:top-10 xl:bottom-10">
              <h4 className="text-white">
                {designData.headingStart}{" "}
                <span className="lg:block">{designData.headingEnd}</span>
              </h4>
              <IconCategoryDesign className="text-[32px] leading-none  xs:text-[40px] md:text-[66px] 2xl:text-[96px] text-fox-500 transition animate-spin-slow-5" />
            </div>

            <div className="grow lg:w-5/6 lg:ml-auto">
              <PortfolioList />
            </div>
          </div>

          <div className="flex w-full gap-4 h-1/3 lg:h-full lg:gap-8">
            {/* ADDITIONAL INFO */}
            <div className="flex px-6 py-4 lg:p-8 lg:gap-6 grow transition lg:w-2/3 2xl:w-2/5 border border-transparent rounded-4xl lg:rounded-[60px] backdrop-blur bg-[#62565640]">
              <div className="flex flex-col w-full h-full gap-3 lg:w-1/2 xs:gap-4 xl:gap-6 ">
                <div className="flex justify-between xs:justify-start xs:gap-14">
                  <button onClick={() => setAdditionalInfo(!additionalInfo)}>
                    {additionalInfo ? (
                      <h4 className="text-white/60">Tools</h4>
                    ) : (
                      <h4 className="text-white">Tools</h4>
                    )}
                  </button>
                  <button
                    className="lg:hidden"
                    onClick={() => setAdditionalInfo(!additionalInfo)}
                  >
                    {additionalInfo ? (
                      <h4 className="text-white">Skills</h4>
                    ) : (
                      <h4 className="text-white/60">Skills</h4>
                    )}
                  </button>
                </div>
                {additionalInfo ? <DesignSkills /> : <DesignTools />}
              </div>
              <div className="hidden w-full h-full gap-3 lg:flex lg:flex-col xs:gap-4 xl:gap-6 lg:w-1/2">
                <h4 className="text-white">Skills</h4>
                <DesignSkills />
              </div>
            </div>

            {/* LINK TO OTHER CATEGORY */}
            <Link
              href={devData.href}
              className="group/category flex flex-col justify-end sm:justify-between sm:w-1/2 lg:w-1/3 2xl:w-2/5 h-full gap-3 xs:gap-12 sm:gap-0 2xl:gap-20 py-4 md:py-6 px-6 lg:p-8 border rounded-4xl lg:rounded-[60px] backdrop-blur bg-black/25 transition hover:scale-95 focus:scale-95 group-hover/category:cursor-pointer outline-offset-4 border-whale-500/80 hover:border-whale-500 focus:border-whale-500"
            >
              <h4 className="hidden sm:block group-hover/category:text-white group-focus/category:text-white">
                {devData.headingStart}{" "}
                <span className="block">{devData.headingEnd}</span>
              </h4>

              <IconCategoryDev
                className={`text-[32px] leading-none  xs:text-[40px] md:text-[66px] 2xl:text-[96px] ${devData.color} transition group-hover/category:animate-spin-slow  group-focus/category:animate-spin-slow`}
              />
            </Link>
          </div>
        </div>
      ) : (
        // <>
        //   <CategoryItem
        //     id={devData.id}
        //     headingStart={devData.headingStart}
        //     headingEnd={devData.headingEnd}
        //     icon={devData.icon}
        //     href={devData.href}
        //     color={devData.color}
        //     classes={devData.classes}
        //   />
        // </>
        <div className="flex flex-col w-full h-full gap-4 xs:gap-8">
          <div className="flex w-full gap-4 h-1/3 lg:h-full lg:gap-8">
            {/* ADDITIONAL INFO */}
            <div className="flex px-6 py-4 lg:p-8 lg:gap-6 grow transition lg:w-2/3 2xl:w-2/5 border border-transparent rounded-4xl lg:rounded-[60px] backdrop-blur bg-[#56566240]">
              <div className="flex flex-col w-full h-full gap-3 lg:w-1/2 xs:gap-4 xl:gap-6 ">
                <div className="flex justify-between xs:justify-start xs:gap-14">
                  <button onClick={() => setAdditionalInfo(!additionalInfo)}>
                    {additionalInfo ? (
                      <h4 className="text-white/60">Tools</h4>
                    ) : (
                      <h4 className="text-white">Tools</h4>
                    )}
                  </button>
                  <button
                    className="lg:hidden"
                    onClick={() => setAdditionalInfo(!additionalInfo)}
                  >
                    {additionalInfo ? (
                      <h4 className="text-white">Skills</h4>
                    ) : (
                      <h4 className="text-white/60">Skills</h4>
                    )}
                  </button>
                </div>
                {additionalInfo ? <DesignSkills /> : <DesignTools />}
              </div>
              <div className="hidden w-full h-full gap-3 lg:flex lg:flex-col xs:gap-4 xl:gap-6 lg:w-1/2">
                <h4 className="text-white">Skills</h4>
                <DesignSkills />
              </div>
            </div>

            {/* LINK TO OTHER CATEGORY */}
            <Link
              href={designData.href}
              className="group/category flex flex-col justify-end sm:justify-between sm:w-1/2 lg:w-1/3 2xl:w-2/5 h-full gap-3 xs:gap-12 sm:gap-0 2xl:gap-20 py-4 md:py-6 px-6 lg:p-8 border rounded-4xl lg:rounded-[60px] backdrop-blur bg-black/25 transition hover:scale-95 focus:scale-95 group-hover/category:cursor-pointer outline-offset-4 border-fox-500/80 hover:border-fox-500 focus:border-fox-500"
            >
              <h4 className="hidden sm:block group-hover/category:text-white group-focus/category:text-white">
                {designData.headingStart}{" "}
                <span className="block">{designData.headingEnd}</span>
              </h4>

              <IconCategoryDesign
                className={`text-[32px] leading-none  xs:text-[40px] md:text-[66px] 2xl:text-[96px] ${designData.color} transition group-hover/category:animate-spin-slow  group-focus/category:animate-spin-slow`}
              />
            </Link>
          </div>
          {/* MAIN CONTENT */}
          <div className="flex overflow-hidden flex-col  grow xs:justify-between lg:relative lg:h-full pb-4 xs:pb-4 lg:pl-8 xl:pl-10 lg:pr-0 lg:py-4 border border-whale-500 rounded-4xl lg:rounded-[60px] backdrop-blur bg-black/25 transition">
            <div className="flex flex-row-reverse items-center justify-end gap-3 m-6 lg:absolute lg:top-8 lg:bottom-8 lg:m-0 lg:flex-col lg:justify-between lg:items-start xl:top-10 xl:bottom-10">
              <h4 className="text-white">
                {devData.headingStart}{" "}
                <span className="lg:block">{devData.headingEnd}</span>
              </h4>
              <IconCategoryDev className="text-[32px] leading-none  xs:text-[40px] md:text-[66px] 2xl:text-[96px] text-whale-500 transition animate-spin-slow-5" />
            </div>

            <div className="grow lg:w-5/6 lg:ml-auto">
              <PortfolioList />
            </div>
          </div>
        </div>
      )}

      <BgPicture
        className={twMerge(
          `
        blur
      w-[729px] h-[727px] -top-[54px] -left-[377px]
      xs:w-[630px] xs:h-[1034px] xs:-top-[76px] xs:-left-[325px]
      sm:w-[1106px] sm:h-[1034px] sm:-top-[76px] sm:-left-[572px]
      md:w-[1335px] md:h-[1341px] md:-top-[99px] md:-left-[690px]
      lg:w-[1573px] lg:h-[1571px] lg:-top-[274px] lg:-left-[461px]
      xl:w-[1671px] xl:h-[1327px] xl:-top-[147px] xl:-left-[426px]
      2xl:w-[1983px] 2xl:h-[1793px] 2xl:-top-[293px] 2xl:-left-[498px]
        `,
          pathname === "/portfolio/design" ? "sepia-[.25]" : ""
        )}
      />
    </div>
  );
};

export default Category;
