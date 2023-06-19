"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { IconCategoryDesign, IconCategoryDev } from "@/utils/Icons";
import BgPicture from "@/utils/BgPicture";
import abroyPic from "/public/abroy-img.png";
import CategoryItem from "@/components/CategoryItem";

const Category = () => {
  const pathname = usePathname();

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
    <div className="flex flex-col justify-between h-full xs:pb-10 lg:flex-row lg:items-end">
      {/* <div className="flex flex-col gap-4">
        {category.map((item) => (
          <CategoryItem key={item.id} {...item} />
        ))}
      </div> */}

      {pathname === "/portfolio/design" ? (
        <div className="flex flex-col w-full h-full gap-4 xs:gap-8">
          {/* MAIN CONTENT */}
          <div className="flex overflow-hidden flex-col lg:flex-row grow xs:justify-between lg:h-full pb-4 xs:pb-4 lg:px-8 lg:py-4 border border-fox-500 rounded-4xl lg:rounded-[60px] backdrop-blur bg-black/25 transition">
            <div className="flex flex-row-reverse items-center justify-end gap-3 m-6 lg:ml-0 lg:my-4 lg:mr-8 lg:flex-col lg:justify-between lg:items-start">
              <h4 className="text-white">
                {designData.headingStart} <span>{designData.headingEnd}</span>
              </h4>
              <IconCategoryDesign className="text-[32px] leading-none  xs:text-[40px] md:text-[66px] 2xl:text-[96px] text-fox-500 transition animate-spin-slow" />
            </div>

            <div className="grow ">
              <ul className="flex items-start h-full gap-4 px-2 overflow-x-scroll md:overflow-x-scroll lg:overflow-x-scroll flex-nowrap">
                <li className="relative h-full ml-4 border border-transparent rounded-4xl">
                  <article className="">
                    <Link
                      href="/"
                      className="block w-[216px] md:w-[240px] h-full overflow-hidden "
                    >
                      <Image
                        src={abroyPic}
                        alt=""
                        fill
                        quality={100}
                        className="object-cover border border-transparent -z-10 rounded-4xl"
                      />
                      <ul className="absolute flex gap-1 left-4 bottom-4">
                        <li className="flex items-center justify-center px-1 py-0.5 border border-fox-500/80 rounded-4xl">
                          <p className="text-fox-500 text-subtitle 2xl:text-subtitleXL">
                            ABROY Law Firm
                          </p>
                        </li>
                        <li className="flex items-center justify-center px-1 py-0.5 border border-fox-500/80 bg-fox-500/80 rounded-4xl">
                          <time
                            timedate="2022"
                            className="text-white text-subtitle 2xl:text-subtitleXL"
                          >
                            2022
                          </time>
                        </li>
                      </ul>
                    </Link>
                  </article>
                </li>
                <li className="relative h-full border border-transparent rounded-4xl">
                  <article className="">
                    <Link
                      href="/"
                      className="block w-[216px] md:w-[240px] h-full overflow-hidden "
                    >
                      <Image
                        src={abroyPic}
                        alt=""
                        fill
                        quality={100}
                        className="object-cover border border-transparent -z-10 rounded-4xl"
                      />
                      <ul className="absolute flex gap-1 left-4 bottom-4">
                        <li className="flex items-center justify-center px-1 py-0.5 border border-fox-500/80 rounded-4xl">
                          <p className="text-fox-500 text-subtitle 2xl:text-subtitleXL">
                            ABROY Law Firm
                          </p>
                        </li>
                        <li className="flex items-center justify-center px-1 py-0.5 border border-fox-500/80 bg-fox-500/80 rounded-4xl">
                          <time
                            timedate="2022"
                            className="text-white text-subtitle 2xl:text-subtitleXL"
                          >
                            2022
                          </time>
                        </li>
                      </ul>
                    </Link>
                  </article>
                </li>
                <li className="relative h-full border border-transparent rounded-4xl">
                  <article className="">
                    <Link
                      href="/"
                      className="block w-[216px] md:w-[240px] h-full overflow-hidden "
                    >
                      <Image
                        src={abroyPic}
                        alt=""
                        fill
                        quality={100}
                        className="object-cover border border-transparent -z-10 rounded-4xl"
                      />
                      <ul className="absolute flex gap-1 left-4 bottom-4">
                        <li className="flex items-center justify-center px-1 py-0.5 border border-fox-500/80 rounded-4xl">
                          <p className="text-fox-500 text-subtitle 2xl:text-subtitleXL">
                            ABROY Law Firm
                          </p>
                        </li>
                        <li className="flex items-center justify-center px-1 py-0.5 border border-fox-500/80 bg-fox-500/80 rounded-4xl">
                          <time
                            timedate="2022"
                            className="text-white text-subtitle 2xl:text-subtitleXL"
                          >
                            2022
                          </time>
                        </li>
                      </ul>
                    </Link>
                  </article>
                </li>
                <li className="relative h-full border border-transparent rounded-4xl">
                  <article className="">
                    <Link
                      href="/"
                      className="block w-[216px] md:w-[240px] h-full overflow-hidden "
                    >
                      <Image
                        src={abroyPic}
                        alt=""
                        fill
                        quality={100}
                        className="object-cover border border-transparent -z-10 rounded-4xl"
                      />
                      <ul className="absolute flex gap-1 left-4 bottom-4">
                        <li className="flex items-center justify-center px-1 py-0.5 border border-fox-500/80 rounded-4xl">
                          <p className="text-fox-500 text-subtitle 2xl:text-subtitleXL">
                            ABROY Law Firm
                          </p>
                        </li>
                        <li className="flex items-center justify-center px-1 py-0.5 border border-fox-500/80 bg-fox-500/80 rounded-4xl">
                          <time
                            timedate="2022"
                            className="text-white text-subtitle 2xl:text-subtitleXL"
                          >
                            2022
                          </time>
                        </li>
                      </ul>
                    </Link>
                  </article>
                </li>
                <li className="relative h-full border border-transparent rounded-4xl">
                  <article className="">
                    <Link
                      href="/"
                      className="block w-[216px] md:w-[240px] h-full overflow-hidden "
                    >
                      <Image
                        src={abroyPic}
                        alt=""
                        fill
                        quality={100}
                        className="object-cover border border-transparent -z-10 rounded-4xl"
                      />
                      <ul className="absolute flex gap-1 left-4 bottom-4">
                        <li className="flex items-center justify-center px-1 py-0.5 border border-fox-500/80 rounded-4xl">
                          <p className="text-fox-500 text-subtitle 2xl:text-subtitleXL">
                            ABROY Law Firm
                          </p>
                        </li>
                        <li className="flex items-center justify-center px-1 py-0.5 border border-fox-500/80 bg-fox-500/80 rounded-4xl">
                          <time
                            timedate="2022"
                            className="text-white text-subtitle 2xl:text-subtitleXL"
                          >
                            2022
                          </time>
                        </li>
                      </ul>
                    </Link>
                  </article>
                </li>
                <li className="relative h-full border border-transparent rounded-4xl">
                  <article className="">
                    <Link
                      href="/"
                      className="block w-[216px] md:w-[240px] h-full overflow-hidden "
                    >
                      <Image
                        src={abroyPic}
                        alt=""
                        fill
                        quality={100}
                        className="object-cover border border-transparent -z-10 rounded-4xl"
                      />
                      <ul className="absolute flex gap-1 left-4 bottom-4">
                        <li className="flex items-center justify-center px-1 py-0.5 border border-fox-500/80 rounded-4xl">
                          <p className="text-fox-500 text-subtitle 2xl:text-subtitleXL">
                            ABROY Law Firm
                          </p>
                        </li>
                        <li className="flex items-center justify-center px-1 py-0.5 border border-fox-500/80 bg-fox-500/80 rounded-4xl">
                          <time
                            timedate="2022"
                            className="text-white text-subtitle 2xl:text-subtitleXL"
                          >
                            2022
                          </time>
                        </li>
                      </ul>
                    </Link>
                  </article>
                </li>
                <li className="relative h-full mr-6 border border-transparent rounded-4xl">
                  <article className="">
                    <Link
                      href="/"
                      className="block w-[216px] md:w-[240px] h-full overflow-hidden "
                    >
                      <Image
                        src={abroyPic}
                        alt=""
                        fill
                        quality={100}
                        className="object-cover border border-transparent -z-10 rounded-4xl"
                      />
                      <ul className="absolute flex gap-1 left-4 bottom-4">
                        <li className="flex items-center justify-center px-1 py-0.5 border border-fox-500/80 rounded-4xl">
                          <p className="text-fox-500 text-subtitle 2xl:text-subtitleXL">
                            ABROY Law Firm
                          </p>
                        </li>
                        <li className="flex items-center justify-center px-1 py-0.5 border border-fox-500/80 bg-fox-500/80 rounded-4xl">
                          <time
                            timedate="2022"
                            className="text-white text-subtitle 2xl:text-subtitleXL"
                          >
                            2022
                          </time>
                        </li>
                      </ul>
                    </Link>
                  </article>
                </li>
              </ul>
            </div>
          </div>

          {/* ADDITIONAL INFO */}
          <div className="flex w-full gap-4 h-1/3 lg:h-full">
            <div className="flex flex-col gap-3 xs:gap-4 grow px-6 py-4 transition border border-transparent  rounded-4xl backdrop-blur bg-[#62565640]">
              <div className="flex justify-between xs:justify-start xs:gap-14">
                <button>
                  <h4 className="text-white">Tools</h4>
                </button>
                <button>
                  <h4 className="text-white/60">Skills</h4>
                </button>
              </div>

              <ul className="flex flex-wrap items-center gap-1">
                <li className="w-6 h-6 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-neutral-300"></li>
                <li className="w-6 h-6 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-neutral-300"></li>
                <li className="w-6 h-6 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-neutral-300"></li>
                <li className="w-6 h-6 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-neutral-300"></li>
                <li className="w-6 h-6 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-neutral-300"></li>
                <li className="w-6 h-6 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-neutral-300"></li>
                <li className="w-6 h-6 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-neutral-300"></li>
                <li className="w-6 h-6 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-neutral-300"></li>
                <li className="w-6 h-6 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-neutral-300"></li>
              </ul>
            </div>

            {/* LINK TO OTHER CATEGORY */}
            <Link
              href={devData.href}
              className="group flex flex-col justify-end sm:justify-between h-full gap-3 xs:gap-12 sm:gap-12 md:gap-14 2xl:gap-20 py-4 md:py-6 px-6 lg:p-8 border rounded-4xl lg:rounded-[60px] backdrop-blur bg-black/25 transition hover:scale-105 focus:scale-105 group-hover:cursor-pointer outline-offset-4 border-whale-500/80 hover:border-whale-500 focus:border-whale-500"
            >
              <h4 className="hidden sm:block group-hover:text-white group-focus:text-white">
                {devData.headingStart}{" "}
                <span className="block">{devData.headingEnd}</span>
              </h4>

              <IconCategoryDev
                className={`text-[32px] leading-none  xs:text-[40px] md:text-[66px] 2xl:text-[96px] ${devData.color} transition group-hover:animate-spin-slow  group-focus:animate-spin-slow`}
              />
            </Link>
          </div>
        </div>
      ) : (
        <>
          <CategoryItem
            id={devData.id}
            headingStart={devData.headingStart}
            headingEnd={devData.headingEnd}
            icon={devData.icon}
            href={devData.href}
            color={devData.color}
            classes={devData.classes}
          />
        </>
      )}

      <BgPicture
        className=" 
        blur
      w-[729px] h-[727px] -top-[54px] -left-[377px]
      xs:w-[630px] xs:h-[1034px] xs:-top-[76px] xs:-left-[325px]
      sm:w-[1106px] sm:h-[1034px] sm:-top-[76px] sm:-left-[572px]
      md:w-[1335px] md:h-[1341px] md:-top-[99px] md:-left-[690px]
      lg:w-[1573px] lg:h-[1571px] lg:-top-[274px] lg:-left-[461px]
      xl:w-[1671px] xl:h-[1327px] xl:-top-[147px] xl:-left-[426px]
      2xl:w-[1983px] 2xl:h-[1793px] 2xl:-top-[293px] 2xl:-left-[498px]
      "
      />
    </div>
  );
};

export default Category;
