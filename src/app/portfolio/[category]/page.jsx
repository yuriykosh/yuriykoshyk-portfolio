import CategoryItem from "@/components/CategoryItem";
import BgPicture from "@/utils/BgPicture";

const Category = () => {
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

  return (
    <div className="flex flex-col justify-between h-full lg:flex-row lg:items-end">
      <div className="flex flex-col gap-4">
        {category.map((item) => (
          <CategoryItem key={item.id} {...item} />
        ))}
      </div>

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
