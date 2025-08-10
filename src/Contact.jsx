import { Mail, Linkedin, Github } from "lucide-react";
import Heading from "./Heading";

export default function Contact() {
  return (
    <div className="pt-16 px-4 text-lg max-w-6xl mx-auto">
      <Heading
        title={"Get in touch"}
        desc={
          "I'm always open to discussing new opportunities and interesting projects."
        }
      />

      <div className="flex flex-col md:flex-row gap-12 py-12">
        {/* Left Section - Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 p-6 bg-white">
          <h1 className="text-2xl font-semibold">Let's Connect</h1>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
              <Mail />
            </div>
            <div className="flex flex-col">
              <span className="font-medium">Email</span>
              <span className="text-gray-600">john.doe@example.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
              <Linkedin />
            </div>
            <div className="flex flex-col">
              <span className="font-medium">LinkedIn</span>
              <span className="text-gray-600 break-words">
                linkedin.com/in/johndoe
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
              <Github />
            </div>
            <div className="flex flex-col">
              <span className="font-medium">GitHub</span>
              <span className="text-gray-600 break-words">
                github.com/johndoe
              </span>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-1/2 p-6 bg-white">
          <form className="flex flex-col gap-4" action="#">
            <label htmlFor="name" className="font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="email" className="font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="message" className="font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message..."
              rows="4"
              className="border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
