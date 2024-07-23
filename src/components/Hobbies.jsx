import Image from "next/image";
import banner from "../../public/hobbies-banner.webp";

const Hobbies = () => {
  return (
    <div className="flex flex-col w-full h-full gap-6 pt-2 pr-4 overflow-hidden overflow-y-scroll lg:gap-8 2xl:gap-10 xs:pt-4 scrollbar scrollbar-thumb-white/20 scrollbar-track-rounded-full scrollbar-w-3 scrollbar-thumb-rounded-full rounded-b-3xl">
      <Image
        src={banner}
        alt="An illustration of a woman carrying a heavy clock with hobbies floating around her"
        quality="100"
        className="object-cover max-w-full max-h-72 rounded-4xl xl:rounded-[60px]"
      />

      <h2 className="text-white lg:ml-8">My Philosophy</h2>
      <div className="flex flex-col gap-6 lg:w-[90%] lg:ml-8 ">
        <p className="pb-6 text-subtitleXL 2xl:text-bodyXL">
          Design is not just about creating visually appealing interfaces; it&#39;s about solving problems and enhancing the human experience. My philosophy centers around a few core principles that guide my work as a Product Designer:
        </p>

        <div className="flex flex-col gap-4">
          <h3>User-Centric Approach</h3>
          <p className="text-subtitleXL 2xl:text-bodyXL">
            I believe that the best designs emerge from a deep understanding of the users&#39; needs, behaviors, and motivations. Every project starts with thorough research and empathy, ensuring that the end product is not only functional but also intuitive and enjoyable to use.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Continuous Learning and Innovation</h3>
          <p className="text-subtitleXL 2xl:text-bodyXL">
            The digital landscape is constantly evolving, and staying at the forefront requires a commitment to continuous learning. I am passionate about exploring new technologies, design trends, and methodologies to bring fresh, innovative solutions to the table.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Collaboration and Communication</h3>
          <p className="text-subtitleXL 2xl:text-bodyXL">
            Great design is a team effort. I value open communication and collaboration with cross-functional teams, from stakeholders to developers. Building strong relationships and working together ensures that the final product aligns with business goals and user needs.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Attention to Detail</h3>
          <p className="text-subtitleXL 2xl:text-bodyXL">
            Details matter. Whether it&#39;s the placement of a button, the choice of a color palette, or the wording of a microcopy, every element contributes to the overall user experience. I am meticulous in my work, ensuring that every aspect of the design is thoughtfully considered and executed.
          </p>
        </div>
        <div className="flex flex-col gap-4 pb-6 xs:pb-12">
          <h3>Ethical and Inclusive Design</h3>
          <p className="text-subtitleXL 2xl:text-bodyXL">
            Design has the power to influence and shape society. I am committed to creating inclusive and accessible experiences that cater to diverse audiences. Ethical considerations are at the forefront of my design process, ensuring that the solutions I create are responsible and beneficial for all users.
          </p>
        </div>
        
        <p className="pb-6 text-subtitleXL xs:pb-12 2xl:text-bodyXL">
          By adhering to these principles, I strive to create digital experiences that not only meet business objectives but also resonate deeply with users, making their interactions more meaningful and impactful.
        </p>
      </div>
    </div>
  );
};
export default Hobbies;
