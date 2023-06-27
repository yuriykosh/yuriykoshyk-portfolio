import {
  IconToolAdobeAE,
  IconToolAdobeIllustrator,
  IconToolAdobeIndesign,
  IconToolAdobePhotoshop,
  IconToolAdobePremiere,
  IconToolAdobeXD,
  IconToolBlender,
  IconToolFigma,
  IconToolSketch,
} from "@/utils/Icons";

const DesignTools = () => {
  return (
    <ul className="flex flex-wrap items-center gap-1 xl:gap-2">
      <li>
        <IconToolFigma className="w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 text-fox-500" />
      </li>
      <li>
        <IconToolSketch className="w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 text-fox-500" />
      </li>
      <li>
        <IconToolBlender className="w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 text-fox-500" />
      </li>
      <li>
        <IconToolAdobeXD className="w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 text-fox-500" />
      </li>
      <li>
        <IconToolAdobePhotoshop className="w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 text-fox-500" />
      </li>
      <li>
        <IconToolAdobeIllustrator className="w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 text-fox-500" />
      </li>
      <li>
        <IconToolAdobeAE className="w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 text-fox-500" />
      </li>
      <li>
        <IconToolAdobePremiere className="w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 text-fox-500" />
      </li>
      <li>
        <IconToolAdobeIndesign className="w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 text-fox-500" />
      </li>
    </ul>
  );
};
export default DesignTools;
