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
      href: "/design",
      color: "rgba(236, 104, 62, 0.8)",
    },
    {
      id: 2,
      headingStart: "Frontend",
      headingEnd: "Development",
      icon: "carbon:navaid-tacan",
      href: "/dev",
      color: "rgba(86, 118, 191, 0.8)",
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full ">
      <h1 className="before:content-['Koshyk'] before:block before:absolute before:text-subtitle">
        Yuriy
      </h1>
      <div className="flex flex-col w-3/5 gap-4 ml-auto">
        {category.map((item) => (
          <Category key={item.id} {...item} />
        ))}
      </div>

      <BgPicture className=" w-[729px] h-[727px] -top-[54px] -left-[377px] lg:w-[1573px] lg:h-[1571px] lg:-top-[274px] lg:-left-[461px]" />
    </div>
  );
}
