import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <motion.nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="" className="text-3xl font-bold text-white">
            Varsha
            <span className="text-purple-600">Suryawanshi</span>
            {/* <div className='w-4 h-4 bg-purple-500 rounded-full'> </div> */}
          </a>
        </div>
        <div className="hidden md:flex space-x-10">
          <a
            href="#home"
            className="relative text-white/80 transition duration-300  hover:text-purple-500 group"
          >
            <span>Home</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="relative text-white/80 transition duration-300  hover:text-purple-500 group"
          >
            <span>About</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            className="relative text-white/80 transition duration-300  hover:text-purple-500 group"
          >
            <span>Skills</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#experience"
            className="relative text-white/80 transition duration-300  hover:text-purple-500 group"
          >
            <span>Experience</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#project"
            className="relative text-white/80 transition duration-300  hover:text-purple-500 group"
          >
            <span>Project</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="relative text-white/80 transition duration-300  hover:text-purple-500 group"
          >
            <span>Contact</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        {/* Mobile button */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer text-white"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer text-white"
            />
          )}
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden mt-4 bg-gray-800 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center">
          <a
            href="#home"
            onClick={() => setShowMenu(false)}
            className="relative text-white/80 transition duration-300 hover:text-purple-500 group"
          >
            <span>Home</span>
          </a>

          <a
            href="#about"
            onClick={() => setShowMenu(false)}
            className="relative text-white/80 transition duration-300 hover:text-purple-500 group"
          >
            <span>About</span>
          </a>

          <a
            href="#skills"
            onClick={() => setShowMenu(false)}
            className="relative text-white/80 transition duration-300 hover:text-purple-500 group"
          >
            <span>Skills</span>
          </a>

          <a
            href="#experience"
            onClick={() => setShowMenu(false)}
            className="relative text-white/80 transition duration-300 hover:text-purple-500 group"
          >
            <span>Experience</span>
          </a>

          <a
            href="#project"
            onClick={() => setShowMenu(false)}
            className="relative text-white/80 transition duration-300 hover:text-purple-500 group"
          >
            <span>Project</span>
          </a>

          <a
            href="#contact"
            onClick={() => setShowMenu(false)}
            className="relative text-white/80 transition duration-300 hover:text-purple-500 group"
          >
            <span>Contact</span>
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
