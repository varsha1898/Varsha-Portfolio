import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Created By TheVarshaCodes. All rights
          reserved.
        </p>
        {/* <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/varsha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/varsha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:varshapatil2004@gmail.com"
            className="text-gray-400 hover:text-purple-500 transition"
          >
            Email
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
