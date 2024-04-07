import { useEffect, useState } from "react";

import { IconClose } from "@/utils/Icons";
import RoundButton from "./RoundButton";

const AboutModal = ({ children, showAboutModal, closeAboutModal }) => {
  // State to manage modal position
  const [modalOpen, setModalOpen] = useState(false);

  return (
    // backdrop
    <div className="absolute z-50 h-full px-6 bg-black/50 -right-3 -left-3 2xl:top-0 backdrop-blur-sm">
      {/* modal */}
      <div
        className={`relative p-4 pr-2 ${
          modalOpen
            ? "-translate-y-[120%] delay-900 duration-300 ease-out"
            : "duration-300 delay-900 ease-out"
        } sm:p-6 sm:pr-3 md:pr-4 xl:p-8 xl:pr-4 border border-t-0 bg-black/30 backdrop-blur border-white/60 h-4/5 2xl:h-[88%] rounded-b-4xl md:rounded-b-[60px]`}
      >
        {children}

        <RoundButton
          action={closeAboutModal}
          className="absolute bottom-0 gap-2 p-4 transition -translate-x-1/2 translate-y-1/2 bg-transparent bg-black border-white/40 text-white/60 w-fit hover:text-white hover:border-white/80 focus:text-white focus:border-white/80 hover:scale-105 focus:scale-105 outline-offset-4 left-1/2"
        >
          <IconClose className="text-[32px] leading-none xs:text-[40px] md:text-[66px] 2xl:text-[96px] transition text-white/80" />
        </RoundButton>
      </div>
    </div>
  );
};
export default AboutModal;
