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
          Originally from Ukraine, my adventurous spirit has driven me to explore various parts of the world. My educational journey began in Bournemouth, UK, where I studied Computing. I then transferred to Toronto, Canada, and completed my Media Communications Diploma at Humber College. My pursuit of excellence in UX design led me to further my studies at the Projector Institute and IT School GoIT.
        </p>
        <p className="text-subtitleXL 2xl:text-bodyXL">
          My professional journey has been diverse and enriching. I started full-time in the telecommunications field, where I honed my skills and gained valuable insights. However, my passion for creating exceptional user experiences led me to transition into the realm of UX/UI design. I immersed myself in various aspects of the discipline, including User Research, Information Architecture, Interaction Design, Visual Design, and tools like Figma.
        </p>
        <p className="text-subtitleXL 2xl:text-bodyXL">
          Recognizing the importance of effective collaboration with developers, I decided to bridge the gap between design and development by learning frontend development. This decision enhanced my understanding of working directly with developers and fostered a stronger symbiotic relationship between design and development teams. My relentless pursuit of growth led me to join the "IT Generation" program at IT School GoIT, where I completed an intensive course in Frontend Development, mastering skills such as HTML5/CSS3, JavaScript, React, and Next.js.
        </p>
        <p className="text-subtitleXL 2xl:text-bodyXL">
          After successful years as a freelancer, delivering over 35 projects, I sought a collaborative work environment where I could contribute to a team and further challenge myself. This pursuit led me to Heimdal Data ApS, where I worked as a UX/UI Designer & Frontend Developer. In this role, I applied my comprehensive skill set, developed user-friendly interfaces, conducted user research, and wrote scalable code to enhance website performance.
        </p>
        <p className="text-subtitleXL 2xl:text-bodyXL">
          My journey continued at DF Druckluft-Fachhandel GmbH, where I served as Head of Systems & IT. I led the tech side of a multimillion e-commerce company, managed teams and external partners, implemented agile methodologies, and optimized UX and system processes to increase revenue by 10%.
        </p>
        <p className="pb-6 xs:pb-12 text-subtitleXL 2xl:text-bodyXL">
          Currently, as a Product Designer, I stay at the forefront of creative design trends and emerging technologies, delivering high-performance digital solutions that drive business growth. As I continue my adventures across Europe, I am actively seeking new opportunities to push the boundaries of my expertise. I am eager to contribute my skills and passion as a Product Designer to organizations that value innovation, teamwork, and the pursuit of excellence.
        </p>
      </div>
    </div>
  );
};
export default MyStory;
