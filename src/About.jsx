import { assets } from "./assets/assets";

export default function About() {
  return (
    <div className="w-full flex flex-col items-center bg-blue-50 py-16 px-4 text-lg">
      <div className="w-full md:w-2/4 flex flex-col items-center mb-10">
        <h1 className="text-4xl font-bold py-4 text-center">About Me</h1>
        <p className="text-center text-gray-600">
          I'm a dedicated developer with 5+ years of experience building web
          applications that solve real-world problems and deliver exceptional
          user experiences.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full md:px-12 gap-8">
        <div className="w-full md:w-2/4">
          <h2 className="text-2xl font-bold">My Journey</h2>
          <p className="py-4 text-gray-600">
            Started as a curious computer science student, I've evolved into a
            full-text-gray-600stack developer who loves creating digital
            solutions. My passion lies in writing clean, efficient code and
            building user-friendly interfaces.
          </p>
          <p className="py-4 text-gray-600">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>

          <div className="flex flex-col sm:flex-row justify-start sm:justify-around gap-4 sm:gap-8 my-4">
            <div className="smallCard">
              <p className="text-xl font-bold text-indigo-500">50+</p>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="smallCard">
              <p className="text-xl font-bold text-indigo-500">5+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/4 flex justify-center md:justify-end">
          <img
            className="w-92 rounded-2xl shadow-2xl"
            src={assets.Selfie}
            alt="Selfie"
          />
        </div>
      </div>
    </div>
  );
}
