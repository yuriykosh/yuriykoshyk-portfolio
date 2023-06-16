import Image from "next/image";
import { twMerge } from "tailwind-merge";
import image from "/public/portfolio-bg.png";

const BgPicture = ({ className }) => {
  return (
    <div className={twMerge(`absolute -z-10`, className)}>
      <Image src={image} fill alt="" quality={100} className="object-contain" />
    </div>
  );
};
export default BgPicture;
