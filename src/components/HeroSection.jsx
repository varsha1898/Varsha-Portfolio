import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const titles = [
  "React Developer",
  "MERN Stack Engineer",
  "Frontend Specialist",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false,amount:0.2 }}
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2b2b] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I&apos;m <span className="text-purple-600">Varsha</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
            {titles[index]}
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
            Passionate about creating responsive and interactive web
            applications.
          </p>

          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href="#work"
              className="bg-purple-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-purple-700 hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="border border-purple-600 font-medium text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-purple-700 hover:text-white hover:shadow-lg transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right side image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Gradient glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 animate-pulse opacity-70"></div>
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 shadow-lg"
              src={assets.profile}
              alt="Varsha's profile picture"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
