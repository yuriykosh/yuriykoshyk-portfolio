"use client";

import { useState } from "react";
import Link from "next/link";

import BgPicture from "@/utils/BgPicture";
import { IconCategoryDesign, IconCategoryDev } from "@/utils/Icons";

import AboutModal from "@/components/AboutModal";
import MyStory from "@/components/MyStory";
import Hobbies from "@/components/Hobbies";
import Workflow from "@/components/Workflow";

const About = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  let content;
  if (modalContent === "bio") {
    content = <MyStory />;
  } else if (modalContent === "hobby") {
    content = <Hobbies />;
  } else if (modalContent === "workflow") {
    content = <Workflow />;
  }

  return (
    <div className="grid w-full h-full grid-cols-12 grid-rows-6 gap-0 2xl:p-6">
      <div className="flex flex-col col-start-1 col-end-11 row-start-1 row-end-4 gap-2 xs:col-end-12 xs:mt-4 xs:gap-3 md:gap-4 lg:col-end-8 lg:row-start-1 lg:row-end-4">
        <h4 className="text-white sm:text-h4L md:text-h4XL lg:text-h4L xl:text-h4XL">
          <span className="block">Hi there 👋</span>
          <span className="block">
            I'm Yuriy, a <span className="text-fox-500">UX/UI designer</span>{" "}
          </span>
          and <span className="text-whale-500">Frontend developer</span>.
        </h4>
        <p className="text-subtitle xs:text-subtitleL xl:text-subtitleXL xs:w-[90%] lg:w-full">
          My passion for creating beautiful and functional digital experiences
          has led me to develop a diverse skillset that combines design and
          development expertise.
        </p>
        <p className="hidden w-2/3 mt-1 text-subtitleL xl:text-subtitleXL xs:inline-block lg:w-11/12">
          If you're looking for a UX/UI designer and frontend developer who can
          bring your digital projects to life, feel free to
          <Link
            href="mailto:yuriy.koshyk@gmail.com"
            className="inline-block ml-2 text-white underline transition text-subtitleXL decoration-1 underline-offset-2 hover:scale-105 focus:scale-105"
          >
            {/* <p className="text-white underline transition text-subtitleXL decoration-1 underline-offset-2 hover:scale-105 focus:scale-105"> */}
            get in touch
            {/* </p> */}
          </Link>
          .
        </p>
      </div>

      {/* BUTTONS TO SEE SOME CONTENT */}
      <ul className="flex flex-col items-center justify-center h-full col-start-1 col-end-9 row-start-4 row-end-7 gap-4 px-6 border xs:gap-6 xs:row-start-4 xs:row-end-7 2xl:col-end-8 2xl:row-start-3 2xl:row-end-6 2xl:mt-[16%] border-white/80 grow bg-black/25 backdrop-blur-sm rounded-4xl sm:rounded-[60px] ">
        <li>
          <button
            onClick={() => {
              setShowAboutModal(!showAboutModal);
              setModalContent("bio");
            }}
            className="flex items-center justify-center px-6 transition border rounded-full 2xl:px-12 2xl:py-2 border-white/60 hover:border-white focus:border-white hover:bg-white focus:bg-white hover:scale-105 focus:scale-105 active:border-white/60 active:bg-transparent active:scale-100"
          >
            <p className="text-h4XS xs:text-h4S sm:text-h4L md:text-h4XL 2xl:text-h3L text-stroke">
              My Story
            </p>
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setShowAboutModal(!showAboutModal);
              setModalContent("hobby");
            }}
            className="flex items-center justify-center px-6 transition border rounded-full 2xl:px-12 2xl:py-2 border-white/60 hover:border-white focus:border-white hover:bg-white focus:bg-white hover:scale-105 focus:scale-105 active:border-white/60 active:bg-transparent active:scale-100"
          >
            <p className="text-h4XS xs:text-h4S sm:text-h4L md:text-h4XL 2xl:text-h3L text-stroke">
              Hobbies
            </p>
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setShowAboutModal(!showAboutModal);
              setModalContent("workflow");
            }}
            className="flex items-center justify-center px-6 transition border rounded-full 2xl:px-12 2xl:py-2 border-white/60 hover:border-white focus:border-white hover:bg-white focus:bg-white hover:scale-105 focus:scale-105 active:border-white/60 active:bg-transparent active:scale-100"
          >
            <p className="text-h4XS xs:text-h4S sm:text-h4L md:text-h4XL 2xl:text-h3L text-stroke">
              Workflow
            </p>
          </button>
        </li>
      </ul>

      {/* LINKS TO PORTFOLIO */}
      <ul className="flex flex-col items-stretch col-start-9 col-end-13 row-start-5 row-end-7 gap-2 ml-2 xs:ml-0 xs:col-start-10 lg:gap-8 lg:items-end lg:col-start-11 lg:col-end-13 lg:row-start-1 lg:row-end-7 md:ml-4 lg:ml-6 justify-stretch">
        <li className="h-full">
          <Link
            href="/portfolio/design"
            aria-label="Learn more about Yuriy Koshyk design work"
            className="flex items-center justify-center group lg:items-end h-full py-4 px-6 lg:p-8 xl:p-10 text-[32px] leading-none  xs:text-[40px] md:text-[66px] 2xl:text-[96px] text-fox-500/80 bg-black/25 backdrop-blur transition border  rounded-4xl sm:rounded-[60px] 2xl:rounded-[80px] hover:scale-105 focus:scale-105 group-hover:cursor-pointer outline-offset-4 border-fox-500/80 hover:border-fox-500 focus:border-fox-500"
          >
            <IconCategoryDesign className="transition group-hover:text-fox-500 group-focus:text-fox-500 group-hover:animate-spin-slow group-focus:animate-spin-slow" />
          </Link>
        </li>
        <li className="h-full">
          <Link
            href="/portfolio/dev"
            aria-label="Learn more about Yuriy Koshyk frontend development work"
            className="flex items-center justify-center group lg:items-end h-full py-4 px-6 lg:p-8 xl:p-10 text-[32px] leading-none  xs:text-[40px] md:text-[66px] 2xl:text-[96px] text-whale-500/80 bg-black/25 backdrop-blur transition border rounded-4xl sm:rounded-[60px] 2xl:rounded-[80px] hover:scale-105 focus:scale-105 group-hover:cursor-pointer outline-offset-4 border-whale-500/80 hover:border-whale-500 focus:border-whale-500"
          >
            <IconCategoryDev className="transition group-hover:text-whale-500 group-focus:text-whale-500 group-hover:animate-spin-slow group-focus:animate-spin-slow" />
          </Link>
        </li>
      </ul>

      {/* MODAL */}
      {showAboutModal && (
        <AboutModal
          // showAboutModal={showAboutModal}
          closeAboutModal={() => {
            setShowAboutModal(false);
            setModalContent("");
          }}
        >
          {content}
        </AboutModal>
      )}

      {/* PAGE BACKGROUND */}
      <BgPicture
        className="
      w-[394px] h-[394px] my-auto mx-0 top-0 bottom-0 -right-[179px]
      xs:w-[636px] xs:h-[636px] xs:my-auto xs:mx-0 xs:top-0 xs:bottom-0 xs:-right-[278px]
      sm:w-[636px] sm:h-[636px] sm:my-auto sm:mx-0 sm:top-0 sm:bottom-0 sm:-right-[278px]
      md:w-[902px] md:h-[902px] md:my-auto md:mx-0 md:top-8 md:bottom-0 md:-right-[345px]
      lg:w-[695px] lg:h-[695px] lg:my-auto lg:mx-0 lg:top-0 lg:bottom-0 lg:left-[45%] lg:-right-0
      xl:w-[800px] xl:h-[800px] xl:my-auto xl:mx-0 xl:top-0 xl:bottom-0 xl:left-[40%]
      2xl:w-[120%] 2xl:h-[120%] 2xl:my-auto 2xl:mx-0 2xl:top-0 2xl:bottom-0 2xl:left-[15%]
      "
      />
    </div>
  );
};

export default About;
