import React from "react";
import { projectsData } from "@/data/projects";
import { Github } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {" "}
        {/* Header Section */}{" "}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Proyek Saya{" "}
          </h2>{" "}
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Koleksi proyek yang telah saya kerjakan untuk tugas Kuliah.{" "}
          </p>{" "}
        </div>{" "}
        {/* Projects Grid */}{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Decorative gradient overlay */}{" "}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {" "}
              </div>{" "}
              <div className="relative z-10">
                {" "}
                {/* Project Title */}{" "}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {" "}
                    {project.title}{" "}
                  </h3>{" "}
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse">
                      {" "}
                    </div>{" "}
                    <span className="text-xs text-green-400 font-medium">
                      {" "}
                      Live{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Project Description */}{" "}
                <p className="text-gray-400 mb-6 leading-relaxed min-h-[3rem]">
                  {" "}
                  {project.description}{" "}
                </p>{" "}
                {/* Tech Stack Tags */}{" "}
                <div className="flex flex-wrap gap-2 mb-6">
                  {" "}
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-500/20 hover:border-blue-400/40 transition-colors duration-200"
                    >
                      {tag}{" "}
                    </span>
                  ))}{" "}
                </div>{" "}
                {/* Action Button */}{" "}
                <div className="flex items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5"
                  >
                    <Github size={16} /> <span> Lihat Kode </span>{" "}
                  </a>{" "}
                </div>{" "}
                {/* Progress indicator for loading state (optional) */}{" "}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left">
                  {" "}
                </div>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        {/* View More Button */}{" "}
        <div className="text-center mt-12">
          <a
            href="https://github.com/harr24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-1"
          >
            <Github size={20} /> <span> Lihat Semua Proyek </span>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default ProjectsSection;
