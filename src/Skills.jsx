import { assets } from "./assets/assets";
import Heading from "./Heading";

export default function Skills() {
  return (
    <div className="py-12">
      <Heading
        title={"Skills & Technologies"}
        desc={
          "Here are the technologies and tools I work with to bring ideas to life."
        }
      />

      <div className="flex w-full justify-around">
        <div className="skillsCard">
          <div className="w-18 bg-sky-100 p-4 rounded-full">
            <img className="" src={assets.reactIcon} alt="React Icon" />
          </div>
          <p>Frontend</p>
          <div className="flex gap-2">
            <span className="technologies">React.js</span>
            <span className="technologies">Tailwind CSS</span>
          </div>
        </div>

        <div className="skillsCard">
          <div className="w-18 bg-emerald-100 p-4 rounded-full">
            <img src={assets.nodeIcon} />
          </div>
          <p>Backend</p>
          <div className="flex gap-2">
            <span className="technologies">Node.js</span>
            <span className="technologies">Express.js</span>
            <span className="technologies">MongoDB</span>
          </div>
        </div>

        <div className="skillsCard">
          <div className="w-18 bg-rose-100 p-4 rounded-full">
            <img src={assets.githubIcon} />
          </div>
          <p>Tools</p>
          <div className="flex gap-2">
            <span className="technologies">Git</span>
            <span className="technologies">GitHub</span>
            <span className="technologies">Docker</span>
          </div>
        </div>
      </div>
    </div>
  );
}
