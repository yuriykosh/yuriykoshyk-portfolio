import Image from "next/image";
import banner from "../../public/workflow-banner.webp";

const Workflow = () => {
  return (
    <div className="flex flex-col w-full h-full gap-6 pt-2 pr-4 overflow-hidden overflow-y-scroll lg:gap-8 2xl:gap-10 xs:pt-4 scrollbar scrollbar-thumb-white/20 scrollbar-track-rounded-full scrollbar-w-3 scrollbar-thumb-rounded-full rounded-b-3xl">
      <Image
        src={banner}
        alt="Graphic artwork with multiple title WORKFLOW"
        quality="100"
        className="object-cover max-w-full max-h-72 rounded-4xl xl:rounded-[60px]"
      />

      <h2 className="text-white lg:ml-8">How I Work</h2>
      
      <div className="flex flex-col gap-6 lg:w-[90%] lg:ml-8 ">
        <div className="flex flex-col gap-4">
          <h3>Research</h3>
          <p className="text-subtitleXL 2xl:text-bodyXL">
            Understanding more about the problem space, considering potential solutions, and learning about the customer.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Principles</h3>
          <p className="text-subtitleXL 2xl:text-bodyXL">
            Crafting design principles to help guide project and experience decisions, and ensure alignment amongst the team.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3>User Journey</h3>
          <p className="text-subtitleXL 2xl:text-bodyXL">
            Diving deep into the user journey and exploring user stories, personas, channels, and user decision-making.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Design Exploration</h3>
          <p className="text-subtitleXL 2xl:text-bodyXL">
            Diverging wide and exploring a range of possible solutions. Testing, iterating, discussing, and working through the problem.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Design Refinement</h3>
          <p className="text-subtitleXL 2xl:text-bodyXL">
            Refining a chosen direction and polishing the visual design, preparing designs for engineering handoff, and documenting decisions made.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Handoff</h3>
          <p className="text-subtitleXL 2xl:text-bodyXL">
            Working closely with engineering and product to ensure a successful handoff and implementation process.
          </p>
        </div>
        <div className="flex flex-col gap-4 pb-6 xs:pb-12">
          <h3>Monitoring</h3>
          <p className="text-subtitleXL 2xl:text-bodyXL">
            Just because a project is live doesn&#39;t mean the work is done. We monitor its performance to discover ideas for improvement.
          </p>
        </div>
        
      </div>
    </div>
  );
};
export default Workflow;
