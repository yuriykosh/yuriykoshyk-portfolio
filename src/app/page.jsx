import Link from "next/link";

import Category from "@/components/Category";
import BgPicture from "@/utils/BgPicture";

export default function Home() {
  const category = [
    {
      id: 1,
      headingStart: "UX/UI",
      headingEnd: "Design",
      icon: "carbon:navaid-ndb",
      href: "/portfolio/design",
      color: "text-fox-500/80 group-hover:text-fox-500",
      classes: "border-fox-500/80 hover:border-fox-500",
    },
    {
      id: 2,
      headingStart: "Frontend",
      headingEnd: "Development",
      icon: "carbon:navaid-tacan",
      href: "/portfolio/dev",
      color: "text-whale-500/80 group-hover:text-whale-500",
      classes: "border-whale-500/80 hover:border-whale-500",
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full ">
      <h1 className="before:content-['Koshyk'] before:block before:absolute before:text-subtitle text-white">
        Yuriy
      </h1>
      <div className="flex flex-col w-3/5 gap-4 ml-auto sm:w-2/5 md:w-1/2 xs:h-fit xs:gap-10">
        {category.map((item) => (
          <Category key={item.id} {...item} />
        ))}
      </div>

      <BgPicture className=" w-[729px] h-[727px] -top-[54px] -left-[377px] xs:w-[630px] xs:h-[1034px] xs:-top-[76px] xs:-left-[325px] sm:w-[1106px] sm:h-[1034px] sm:-top-[76px] sm:-left-[572px] md:w-[1335px] md:h-[1341px] md:-top-[99px] md:-left-[690px] lg:w-[1573px] lg:h-[1571px] lg:-top-[274px] lg:-left-[461px]" />
    </div>
  );
}
