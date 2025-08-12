import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-20">
      <div className="container mx-auto text-center">
        <p>
          {" "}
          & copy; 2024 Yusuf Harry Setiawan.Dibuat dengan Next.js & Tailwind
          CSS.{" "}
        </p>{" "}
        <div className="mt-2">
          <a
            href="https://github.com/Harr24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};

export default Footer;
