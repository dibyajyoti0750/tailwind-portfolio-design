import Button from "@mui/material/Button";
import { Github, Linkedin, Mail } from "lucide-react";
import { ArrowForward, Download } from "@mui/icons-material";
import { assets } from "./assets/assets";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row px-6 md:px-14 py-8 items-center lg:items-start">
      <div className="w-full lg:w-2/3 text-start">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold">
          Hi, I'm <span className="text-indigo-500">John Doe</span>
        </h1>

        <p className="text-stone-500 text-xl sm:text-lg lg:text-xl py-8 max-w-xl lg:mx-0">
          A passionate full-stack developer creating beautiful and functional
          web experiences. I love turning ideas into reality through clean code
          and thoughtful design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <Button variant="contained" size="large" endIcon={<ArrowForward />}>
            <span>View My Work</span>
          </Button>
          <Button variant="outlined" size="large" startIcon={<Download />}>
            <span>Download CV</span>
          </Button>
        </div>

        <div className="flex gap-4 my-10 justify-center md:justify-start">
          <a
            href="https://github.com/dibyajyoti0750"
            className="opacity-50 hover:opacity-75"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/dibyajyotipramanick/"
            className="opacity-50 hover:opacity-75"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:dibyajyotipramanick0750@gmail.com"
            className="opacity-50 hover:opacity-75"
          >
            <Mail />
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/3 lg:mt-0 flex justify-center">
        <img
          className="w-84 h-84 border-[6px] border-stone-100 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.2)] object-cover"
          src={assets.hero1}
          alt="Profile"
        />
      </div>
    </div>
  );
}
