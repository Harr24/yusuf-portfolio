import React from "react";

// Daftar skill ini diambil dari Cv
const skills = [
  "Python",
  "JS", // Diambil dari "JS"
  "PHP",
  "MySQL",
  "Basic Networking",
  "System Administration",
  "Problem Solving",
  "Microsoft Word, Excel, PowerPoint", // Diambil dari "Microsoft Word, Excel, PowerPoint"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {" "}
        {/* Header */}{" "}
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Keahlian Saya{" "}
        </h2>{" "}
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Teknologi dan tools yang saya kuasai dalam pengembangan dan
          administrasi sistem{" "}
        </p>{" "}
        {/* Skills Grid */}{" "}
        <div className="flex flex-wrap justify-center gap-4">
          {" "}
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm border border-gray-600/30 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600/20 hover:to-purple-600/20 hover:border-blue-400/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              {/* Glowing effect on hover */}{" "}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {" "}
              </div>{" "}
              {/* Skill text */}{" "}
              <span className="relative z-10 group-hover:text-blue-200 transition-colors duration-300">
                {" "}
                {skill}{" "}
              </span>{" "}
              {/* Bottom accent line */}{" "}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full group-hover:left-0 transition-all duration-500 rounded-full">
                {" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        {/* Bottom decorative element */}{" "}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse">
              {" "}
            </div>{" "}
            <div
              className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            >
              {" "}
            </div>{" "}
            <div
              className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            >
              {" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default SkillsSection;
