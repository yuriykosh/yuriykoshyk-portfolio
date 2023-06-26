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

      <h2 className="text-white lg:ml-8">My Hobbies</h2>
      <div className="flex flex-col gap-6 lg:w-[90%] lg:ml-8 ">
        <p className="pb-6 text-subtitleXL 2xl:text-bodyXL">
          Here, you&apos;ll get a glimpse into the things that ignite my passion
          and drive. I believe that hobbies play a significant role in shaping
          who we are and how we perceive the world. Let me share with you a few
          of my cherished pastimes.
        </p>

        <div className="flex flex-col gap-4">
          <h3>Basketball</h3>
          <p className="text-subtitleXL 2xl:text-bodyXL">
            Basketball isn&apos;t just a sport for me; it&apos;s a way of life.
            The sound of sneakers on the court, the thrill of sinking the
            perfect shot, and the bond with my teammates make basketball an
            incredible experience. Through this game, I&apos;ve learned about
            teamwork, discipline, and never giving up.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Movies</h3>
          <p className="text-subtitleXL 2xl:text-bodyXL">
            I&apos;m a big fan of movies. They have the power to transport us to
            different worlds and make us feel a range of emotions. Whether
            it&apos;s a drama, comedy, or action film, I love immersing myself
            in diverse stories and exploring the art of filmmaking.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Film Photography</h3>
          <p className="text-subtitleXL 2xl:text-bodyXL">
            In this digital age, film photography holds a special place in my
            heart. There's something unique and nostalgic about capturing
            moments on film. It requires patience, attention to detail, and a
            creative eye. Developing the film and seeing the final images is a
            rewarding experience.
          </p>
        </div>
        <div className="flex flex-col gap-4 pb-6 xs:pb-12">
          <h3>Traveling</h3>
          <p className="text-subtitleXL 2xl:text-bodyXL">
            Exploring the world is one of my greatest passions. I love
            experiencing new cultures, embracing different landscapes, and
            learning from diverse people. Traveling broadens my perspective and
            helps me appreciate the beauty of our planet.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hobbies;
