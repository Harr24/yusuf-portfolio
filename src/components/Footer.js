import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-20">
      <div className="container mx-auto text-center">
        <p> & copy; 2024 Yusuf Harry Setiawan. </p>{" "}
        <div className="mt-2 flex justify-center space-x-4">
          <a
            href="https://github.com/Harr24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub{" "}
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/yusuf-harry-ab8a2a284"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn{" "}
          </a>{" "}
          <a
            href="https://www.instagram.com/harrfly_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Instagram{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};

export default Footer;
