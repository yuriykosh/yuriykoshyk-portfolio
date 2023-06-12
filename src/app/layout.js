import localFont from "next/font/local";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import "./globals.scss";
import NoiseEffect from "../../public/noise-effect.png";

const fixel = localFont({
  src: "../../public/fonts/fixel.ttf",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yuriy Koshyk",
  description:
    "Welcome to Yuriy Koshyk's personal website. Here you can find my UX/UI Design and Frontend Development portfolio, as well as my personal info",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fixel.className} suppressHydrationWarning={true}>
        <Navbar />
        <main>
          {children}

          <Image
            src={NoiseEffect}
            fill={true}
            quality={100}
            alt="noise effect overlay"
            style={{
              backgroundBlendMode: "exclusion",
              zIndex: "40",
              pointerEvents: "none",
            }}
          ></Image>
        </main>
      </body>
    </html>
  );
}
