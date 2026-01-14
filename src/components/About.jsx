import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple-500">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Get to know more about my background, journey, and passion for
          building impactful digital experiences.
        </p>

        {/* Image + Story */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full h-full object-cover"
              src={assets.profile}
              alt="Profile picture"
            />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:w-1/2 text-gray-300 space-y-6"
          >
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p>
              I'm a passionate developer with a love for creating innovative
              solutions. My journey began with curiosity about how things work,
              which led me to explore the world of web development and design.
            </p>
            <p>
              Over the years, I've honed my skills in modern frameworks and
              technologies, always eager to learn and adapt. I believe in the
              power of collaboration and continuous improvement, striving to
              deliver high‑quality work that exceeds expectations.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {aboutInfo.map((data, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 rounded-2xl p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="text-purple-500 text-4xl mb-4">
                    <data.icon />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{data.title}</h4>
                  <p className="text-gray-400">{data.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
