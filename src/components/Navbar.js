import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold">
          {" "}
          Yusuf H.S.{" "}
        </a>{" "}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-gray-300">
            {" "}
            About{" "}
          </a>{" "}
          <a href="#skills" className="hover:text-gray-300">
            {" "}
            Skills{" "}
          </a>{" "}
          <a href="#projects" className="hover:text-gray-300">
            {" "}
            Projects{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
};

export default Navbar;
