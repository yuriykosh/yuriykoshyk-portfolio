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
          I am originally from Ukraine, but my adventurous spirit has led me to
          explore different parts of the world. I embarked on my educational
          journey as a sound engineer in Bournemouth, UK, but later transferred
          and successfully completed my
          <strong> Media Communications Diploma</strong> in the vibrant city of
          Toronto, Canada.
        </p>
        <p className="text-subtitleXL 2xl:text-bodyXL">
          My professional journey began quite some time ago, and it has been a
          diverse and enriching experience. Initially, I worked full-time in the
          telecommunications field, honing my skills and gaining valuable
          insights. However, my passion for creating exceptional user
          experiences led me to venture into the realm of
          <strong> UX/UI design</strong>. Eager to expand my knowledge, I delved
          into various aspects of the discipline, including User Research,
          Information Architecture, Interaction Design, Visual Design, and tools
          like <strong>Figma</strong>.
        </p>
        <p className="text-subtitleXL 2xl:text-bodyXL">
          As a <strong> UX/UI designer</strong>, I soon realized the importance
          of effective collaboration with developers. Determined to bridge the
          gap between design and development, I decided to enhance my skill set
          by learning frontend development. This enabled me to comprehend the
          intricacies of working directly with developers, fostering a stronger
          symbiotic relationship between design and development teams.
        </p>
        <p className="text-subtitleXL 2xl:text-bodyXL">
          Driven by a relentless pursuit of growth, I pursued an opportunity to
          join the government program &quot;IT Generation&quot; and embarked on
          an intensive 7-month course in <strong>Frontend Development</strong>.
          This experience not only solidified my understanding but also provided
          me with the practical skills necessary, like <strong>React</strong>,
          to excel in the field.
        </p>
        <p className="text-subtitleXL 2xl:text-bodyXL">
          Following a successful year as a freelancer, I yearned to immerse
          myself in a collaborative work environment, where I could contribute
          to a team and further challenge myself. It was during this period of
          intense study in frontend development that I secured a position at
          <strong> Heimdal Data ApS</strong>, where I currently serve as a
          <strong> UX/UI Designer & Developer</strong>. This role has allowed me
          to apply my comprehensive skill set, work closely with colleagues, and
          contribute to the creation of exceptional digital experiences.
        </p>
        <p className="pb-6 xs:pb-12 text-subtitleXL 2xl:text-bodyXL">
          As I continue to embark on exciting adventures across Europe, I am
          actively seeking new opportunities that will further push the
          boundaries of my expertise. I am eager to contribute my skills and
          passion as a <strong>Product Designer</strong> to organizations that
          value innovation, teamwork, and the pursuit of excellence.
        </p>
      </div>
    </div>
  );
};
export default MyStory;
