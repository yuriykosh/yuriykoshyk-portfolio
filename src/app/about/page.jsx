"use client";

import { useState } from "react";
import Link from "next/link";

import BgPicture from "@/utils/BgPicture";
import { IconCategoryDesign, IconCategoryDev } from "@/utils/Icons";

import AboutModal from "@/components/AboutModal";

const About = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  let content;
  if (modalContent === "bio") {
    content = (
      <div className="flex flex-col w-full h-full gap-2 overflow-hidden overflow-y-scroll rounded-b-3xl">
        <p className="text-subtitleXL">
          As a UX/UI designer, I have a deep understanding of user-centered
          design principles and have worked on a wide range of projects, from
          web and mobile applications to e-commerce platforms and marketing
          websites.
        </p>
        <p className="text-subtitleXL">
          I'm proficient in user research, wireframing, prototyping, and
          creating high-fidelity designs using tools like Sketch, Figma, and
          Adobe Creative Suite. In addition to my design skills, I'm also a
          skilled frontend developer with expertise in HTML, CSS, JavaScript,
          and frontend frameworks such as React. I'm experienced in building
          responsive, cross-browser compatible, and accessible web applications
          that adhere to modern web standards and best practices.
        </p>
        <p className="pb-6 text-subtitleXL">
          My strong communication and collaboration skills make me an effective
          team player who can work seamlessly with designers, developers, and
          other stakeholders to ensure the success of a project. I'm always
          seeking new challenges and opportunities to grow my skills and make a
          positive impact through design and technology.
        </p>
      </div>
    );
  } else if (modalContent === "hobby") {
    content = (
      <div className="flex flex-col w-full h-full gap-2 overflow-hidden overflow-y-scroll rounded-b-3xl">
        <p className="text-subtitleXL">This is hobby</p>
      </div>
    );
  } else if (modalContent === "workflow") {
    content = (
      <div className="flex flex-col w-full h-full gap-2 overflow-hidden overflow-y-scroll rounded-b-3xl">
        <p className="text-subtitleXL">This is workflow</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between w-full h-full">
      {/* TOP CONTENT */}
      <div className="flex flex-col gap-2">
        <h4 className="text-white">
          <span className="block">Hi there 👋</span>
          <span className="block">
            I'm Yuriy, a <span className="text-fox-500">UX/UI designer</span>{" "}
          </span>
          and <span className="text-whale-500">Frontend developer</span>.
        </h4>
        <p className="w-3/4 text-subtitle">
          My passion for creating beautiful and functional digital experiences
          has led me to develop a diverse skillset that combines design and
          development expertise.
        </p>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="flex items-end gap-2 h-1/2">
        {/* BUTTONS TO SEE SOME CONTENT */}
        <ul className="flex flex-col items-center justify-end h-full gap-4 px-6 pb-20 border border-white/80 grow rounded-4xl">
          <li>
            <button
              onClick={() => {
                setShowAboutModal(!showAboutModal);
                setModalContent("bio");
              }}
              className="flex items-center justify-center px-6 border rounded-full hover:bg-white focus:bg-white"
            >
              <p className="text-h4XS text-stroke">My Story</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setShowAboutModal(!showAboutModal);
                setModalContent("hobby");
              }}
              className="flex items-center justify-center px-6 border rounded-full hover:bg-white focus:bg-white"
            >
              <p className="text-h4XS text-stroke">Hobbies</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setShowAboutModal(!showAboutModal);
                setModalContent("workflow");
              }}
              className="flex items-center justify-center px-6 border rounded-full hover:bg-white focus:bg-white"
            >
              <p className="text-h4XS text-stroke">Work Flow</p>
            </button>
          </li>
        </ul>

        {/* LINKS TO PORTFOLIO */}
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/portfolio/design"
              className="flex items-center justify-center py-4 px-6 text-[32px] leading-none  xs:text-[40px] md:text-[66px] 2xl:text-[96px] text-fox-500/80 bg-black/25 backdrop-blur transition border border-fox-500/60 rounded-4xl"
            >
              <IconCategoryDesign />
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/dev"
              className="flex items-center justify-center py-4 px-6 text-[32px] leading-none  xs:text-[40px] md:text-[66px] 2xl:text-[96px] text-whale-500/80 bg-black/25 backdrop-blur transition border border-whale-500/60 rounded-4xl"
            >
              <IconCategoryDev />
            </Link>
          </li>
        </ul>
      </div>

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

export default About;
