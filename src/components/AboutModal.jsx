import { IconClose } from "@/utils/Icons";
import RoundButton from "./RoundButton";

const AboutModal = ({ children, showAboutModal, closeAboutModal }) => {
  return (
    <div className="absolute z-50 h-full px-6 bg-black/70 -right-3 -left-3 ">
      <div className="relative p-4 border border-t-0 bg-black/20 backdrop-blur border-white/60 h-4/5 rounded-b-4xl">
        {children}
        <RoundButton
          action={closeAboutModal}
          className="absolute bottom-0 -translate-x-1/2 translate-y-1/2 bg-black border-white/30 left-1/2"
        >
          <IconClose className="text-[32px] leading-none xs:text-[40px] md:text-[66px] 2xl:text-[96px] transition text-white/80" />
        </RoundButton>
      </div>
    </div>
  );
};
export default AboutModal;
