import { ExternalLink, Github } from "lucide-react";

export default function Card({
  image,
  title,
  description,
  tech,
  liveLink,
  codeLink,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-sm">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-cyan-100 text-indigo-800 text-sm px-3 py-1 rounded-md"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-5">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <span className="flex gap-1 items-center text-sm text-blue-500">
              <ExternalLink width={"1.2rem"} />
              Live Demo
            </span>
          </a>

          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <span className="flex gap-1 items-center text-sm text-gray-500">
              <Github width={"1.2rem"} />
              Code
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
