import Image from "next/image";
import banner from "../../public/mystory-banner.webp";

const MyStory = () => {
  return (
    <div className="flex flex-col w-full h-full gap-6 pt-2 pr-4 overflow-hidden overflow-y-scroll lg:gap-8 2xl:gap-10 xs:pt-4 scrollbar scrollbar-thumb-white/20 scrollbar-track-rounded-full scrollbar-w-3 scrollbar-thumb-rounded-full rounded-b-3xl">
      <Image
        src={banner}
        alt="Picture of Yuriy in botanical garden"
        quality="100"
        className="object-cover max-w-full max-h-72 rounded-4xl xl:rounded-[60px]"
      />

      <h2 className="text-white lg:ml-8">My Story</h2>
      <div className="flex flex-col gap-6 lg:w-[90%] lg:ml-8">
        <p className="text-subtitleXL 2xl:text-bodyXL">
          As a UX/UI designer, I have a deep understanding of user-centered
          design principles and have worked on a wide range of projects, from
          web and mobile applications to e-commerce platforms and marketing
          websites.
        </p>
        <p className="text-subtitleXL 2xl:text-bodyXL">
          I'm proficient in user research, wireframing, prototyping, and
          creating high-fidelity designs using tools like Sketch, Figma, and
          Adobe Creative Suite. In addition to my design skills, I'm also a
          skilled frontend developer with expertise in HTML, CSS, JavaScript,
          and frontend frameworks/libraries such as React and Next.js. I'm
          experienced in building responsive, cross-browser compatible, and
          accessible web applications that adhere to modern web standards and
          best practices.
        </p>
        <p className="pb-6 xs:pb-12 text-subtitleXL 2xl:text-bodyXL">
          My strong communication and collaboration skills make me an effective
          team player who can work seamlessly with designers, developers, and
          other stakeholders to ensure the success of a project. I'm always
          seeking new challenges and opportunities to grow my skills and make a
          positive impact through design and technology.
        </p>
      </div>
    </div>
  );
};
export default MyStory;
