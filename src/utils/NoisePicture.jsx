import Image from "next/image";
import image from "/public/noise-effect.webp";

const NoisePicture = () => {
  return (
    <Image
      src={image}
      fill
      quality={100}
      alt="noise effect overlay"
      className="z-40 pointer-events-none bg-blend-exclusion"
    />
  );
};
export default NoisePicture;
