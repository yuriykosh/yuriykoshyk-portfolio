import Image from "next/image";
import { twMerge } from "tailwind-merge";
import image from "/public/picture-bg.webp";

const BgPicture = ({ className }) => {
  return (
    <div className={twMerge(`absolute -z-10`, className)}>
      <Image
        src={image}
        fill
        alt="Yuriy Koshyk portrait"
        quality={100}
        placeholder="blur"
        className="object-contain"
      />
    </div>
  );
};
export default BgPicture;
