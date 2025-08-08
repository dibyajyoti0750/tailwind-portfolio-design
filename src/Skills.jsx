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
        <div className="flex flex-col items-center py-10">
          <img src={assets.Selfie} width={50} alt="" />
          <p>Frontend</p>
          <div className="flex gap-4">
            <p>React</p>
            <p>React</p>
            <p>React</p>
            <p>React</p>
          </div>
        </div>

        <div className="flex flex-col items-center py-10">
          <img src={assets.Selfie} width={50} alt="" />
          <p>Frontend</p>
          <div className="flex gap-4">
            <p>React</p>
            <p>React</p>
            <p>React</p>
            <p>React</p>
          </div>
        </div>

        <div className="flex flex-col items-center py-10">
          <img src={assets.Selfie} width={50} alt="" />
          <p>Frontend</p>
          <div className="flex gap-4">
            <p>React</p>
            <p>React</p>
            <p>React</p>
            <p>React</p>
          </div>
        </div>
      </div>
    </div>
  );
}
