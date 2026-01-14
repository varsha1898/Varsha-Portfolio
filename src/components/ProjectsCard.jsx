import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";

const ProjectsCard = ({
  title,
  description,
  image,
  tech,
  demoLink,
  codeLink,
}) => {
  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 cursor-pointer shadow-md">
      {/* Project Image */}
      <img
        src={image || "/fallback.png"}
        alt={title}
        className="w-full h-60 object-cover"
        loading="lazy"
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-1 bg-gray-700 text-gray-100 rounded-2xl px-3 py-1 text-sm font-medium hover:bg-gray-600 transition-colors duration-300"
            >
              {item === "React" && <FaReact />}
              {item === "Node.js" && <FaNodeJs />}
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View demo of ${title}`}
            className="flex-1 text-center px-4 py-2 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            View Demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View code of ${title}`}
            className="flex-1 text-center px-4 py-2 border border-purple-600 rounded-lg font-medium hover:bg-purple/20 transition-colors"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
