import React from "react";
import { motion } from "framer-motion";
import { workData } from "../assets/assets";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Work = () => {
  return (
    <motion.section
      id="experience"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Work<span className="text-purple-500">Experience</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          My Professional journey so far
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {workData.map((work, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                className="relative flex items-center gap-6 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-purple-500 cursor-pointer hover:-translate-y-2 transition-all duration-300"
              >
                {/* Timeline dot */}
                <div className="timeline-dot top-0 w-6 h-6 rounded-full bg-purple-500 flex-shrink-0"></div>
                {/* timeline-dot absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple */}
                {/* Work card */}
                <div className="bg-neutral-800 rounded-2xl p-6 card-hover flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{work.role}</h3>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-xs md:text-sm">
                      {work.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">{work.company}</p>
                  <p className="text-gray-300">{work.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
