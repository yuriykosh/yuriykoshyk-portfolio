import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";
import SVGLOGO from "../../../public/logo.svg";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
];

const Navbar = () => {
  const { container, navigation, link, logo, icon, contact } = styles;

  return (
    // <div className={container}>
    <header className={container}>
      <nav>
        <ul className={navigation}>
          {links.map(({ id, title, url }) => (
            <Link key={id} href={url} className={link}>
              <li>{title}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <Link href="/" className={logo}>
        <Image src={SVGLOGO} fill={true} alt={""} className={icon}></Image>
      </Link>
      <button className={contact}>Contact</button>
    </header>
    // </div>
  );
};

export default Navbar;
