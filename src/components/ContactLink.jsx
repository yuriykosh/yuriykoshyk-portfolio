import { IconArrowUpRight } from "@/utils/Icons";
import Link from "next/link";

const ContactLink = ({ children, href }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="inline-flex items-center justify-center gap-2 px-2 py-1 text-white/80 border-[0.5px] rounded-full border-white/30 group hover:text-white hover:border-white/60 focus:text-white focus:border-white/60 transition hover:scale-105 outline-offset-2 focus:scale-105 cursor-pointer"
    >
      <h4 className="lg:text-subtitleL xl:text-subtitleXL 2xl:text-h4S">
        {children}
      </h4>
      <IconArrowUpRight className="text-xs" />
    </Link>
  );
};
export default ContactLink;
