import { IconClose } from "@/utils/Icons";
import RoundButton from "./RoundButton";

const ContactModal = ({ closeContactModal }) => {
  return (
    <div className="absolute top-0 -right-8 w-600 z-[100] h-[50vh] p-4 bg-blue-400 border border-red-500 rounded-l-4xl">
      <RoundButton action={closeContactModal} className="">
        <IconClose />
      </RoundButton>
      ContactModal
    </div>
  );
};
export default ContactModal;
