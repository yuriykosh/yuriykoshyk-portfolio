import Image from "next/image";
import styles from "./page.module.scss";
import BgImage from "../../public/portfolio-bg.png";
import Link from "next/link";

const imageContainerStyles = {
  width: "1573px",
  height: "1571px",
  top: "-274px",
  left: "-461px",
};
const imageStyle = {
  objectFit: "contain",
};

export default function Home() {
  const { container, bgContainer } = styles;

  return (
    <div className={container}>
      <h1>Some overlay things go in here</h1>
      <Link href="/">this is some link</Link>

      <div className={bgContainer} style={imageContainerStyles}>
        <Image
          src={BgImage}
          fill={true}
          alt=""
          quality={100}
          style={imageStyle}
        />
      </div>
    </div>
  );
}
