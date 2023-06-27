import localFont from "next/font/local";
import "./globals.scss";

import Navbar from "@/components/Navbar";
import NoisePicture from "@/utils/NoisePicture";

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
        <main className="relative w-full h-full max-w-full max-h-full px-2 py-4 overflow-hidden bg-transparent lg:px-4 lg:py-6 rounded-3xl lg:rounded-4xl">
          {children}

          <NoisePicture />
          <p className="absolute left-4 bottom-2 text-[6px] leading-[14px] lg:text-[8px] lg:leading-4 lg:left-6  text-white/40">
            Copyright ©2023 By Yuriy Koshyk
          </p>
        </main>
      </body>
    </html>
  );
}
