import Image from "next/image";
import styles from "./page.module.scss";
import BgImage from "../../public/portfolio-bg.png";
import Link from "next/link";
import { DesignIcon } from "@/components/icons/designIcon/DesignIcon";
import Category from "@/components/category/Category";

const imageContainerStyles = {
  width: "1573px",
  height: "1571px",
  top: "-274px",
  left: "-461px",
};

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-full">
      <h1 className="before:content-['Koshyk'] before:block before:absolute before:text-subtitle">
        Yuriy
      </h1>
      <div className="flex flex-col w-3/5 gap-4 ml-auto">
        <Category />

        <Link href="/dev">
          <h4>
            Frontend <span className="block">Development</span>
          </h4>
        </Link>
      </div>

      <div className="absolute -z-10" style={imageContainerStyles}>
        <Image
          src={BgImage}
          fill={true}
          alt=""
          quality={100}
          className="object-contain"
        />
      </div>
    </div>
  );
}
