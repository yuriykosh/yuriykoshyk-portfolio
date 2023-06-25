"use client";

import { useEffect, useState } from "react";
import useEscape from "@/hooks/useEscape";

import { IconClose } from "@/utils/Icons";
import RoundButton from "./RoundButton";
import ContactLink from "./ContactLink";

const ContactModal = ({ closeContactModal }) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    // backdrop
    <div
      onClick={() => matches && closeContactModal()}
      className="absolute -top-2 -right-7 w-screen h-screen p-3 bg-black md:bg-black/60 md:backdrop-blur-sm z-[100]"
    >
      {/* MODAL */}
      <div
        onClick={(e) => {
          e.stopPropagation(); // alternative to pointer-events:none
        }}
        className="flex flex-col lg:flex-row lg:items-start gap-8 bg-black border border-r-0 border-transparent md:ml-auto md:w-[600px] lg:w-[512px] xl:w-[600px] 2xl:w-[656px] md:p-8 md:border-white/60 xs:gap-16 rounded-l-4xl md:rounded-l-[60px] 2xl:p-10"
      >
        {/* close btn */}
        <RoundButton
          action={closeContactModal}
          className="gap-2 p-4 transition bg-transparent border-white/40 text-white/60 w-fit hover:text-white hover:border-white/80 focus:text-white focus:border-white/80 hover:scale-105 focus:scale-105 outline-offset-4"
        >
          <IconClose className="text-4xl md:text-h4XL lg:text-3xl" />
        </RoundButton>

        {/* content */}
        <div className="flex flex-col items-end mx-3 sm:mx-8 gap-14 lg:ml-0 lg:pt-2 lg:gap-12 xl:pt-0 2xl:pt-2">
          <h3 className="text-white sm:text-h3L lg:text-h4L xl:text-h4XL 2xl:text-h3L">
            Contact me
          </h3>

          <div className="flex flex-col items-end gap-6 md:mb-8">
            <ul className="flex flex-col items-end gap-2">
              <li>
                <ContactLink href="mailto:yuriy.koshyk@gmail.com">
                  yuriy.koshyk@gmail.com
                </ContactLink>
              </li>
              <li>
                <ContactLink href="tel:+420776182501">
                  +420 776 182 501
                </ContactLink>
              </li>
              <li>
                <ContactLink href="Yuriy Koshyk - Resume.pdf">CV</ContactLink>
              </li>
            </ul>
            <ul className="flex flex-col items-end gap-2">
              <li>
                <ContactLink href="https://www.linkedin.com/in/yuriy-koshyk/">
                  LinkedIn
                </ContactLink>
              </li>
              <li>
                <ContactLink href="https://github.com/yuriykosh">
                  GitHub
                </ContactLink>
              </li>
              <li>
                <ContactLink href="https://www.behance.net/yuriykosh">
                  Behance
                </ContactLink>
              </li>
              <li>
                <ContactLink href="https://dribbble.com/yuriy_kosh">
                  Dribbble
                </ContactLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactModal;
