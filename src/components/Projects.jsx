import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import ProjectsCard from "../components/ProjectsCard";
import { projects } from "../assets/assets"; // ✅ make sure you have this array

const Projects = () => {
  return (
    <motion.section
      id="project"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple-500">Projects</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          A showcase of my recent work and contributions
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectsCard key={index} {...project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-purple-600 rounded-lg font-medium hover:bg-purple/20 transition duration-300"
          >
            View More Projects <HiArrowRight />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
