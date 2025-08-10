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

      <div className="flex flex-col sm:flex-row flex-wrap justify-around items-center w-full mt-8">
        {/* Frontend */}
        <div className="skillsCard flex flex-col items-center gap-4">
          <div className="w-18 bg-sky-100 p-4 rounded-full flex items-center justify-center">
            <img src={assets.reactIcon} alt="React Icon" />
          </div>
          <p className="font-semibold">Frontend</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="technologies">React</span>
            <span className="technologies">Next.js</span>
            <span className="technologies">TypeScript</span>
            <span className="technologies">Tailwind CSS</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skillsCard flex flex-col items-center gap-4">
          <div className="w-18 bg-emerald-100 p-4 rounded-full flex items-center justify-center">
            <img src={assets.nodeIcon} alt="Node.js Icon" />
          </div>
          <p className="font-semibold">Backend</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="technologies">Node.js</span>
            <span className="technologies">Express.js</span>
            <span className="technologies">Python</span>
            <span className="technologies">MongoDB</span>
          </div>
        </div>

        {/* Tools */}
        <div className="skillsCard flex flex-col items-center gap-4">
          <div className="w-18 bg-rose-100 p-4 rounded-full flex items-center justify-center">
            <img src={assets.githubIcon} alt="GitHub Icon" />
          </div>
          <p className="font-semibold">Tools</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="technologies">Git</span>
            <span className="technologies">GitHub</span>
            <span className="technologies">Docker</span>
            <span className="technologies">Figma</span>
          </div>
        </div>
      </div>
    </div>
  );
}
