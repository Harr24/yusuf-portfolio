import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {" "}
        {/* Header */}{" "}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-4">
            Tentang Saya{" "}
          </h2>{" "}
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full">
            {" "}
          </div>{" "}
        </div>
        {/* About Content */}{" "}
        <div className="relative group">
          {" "}
          {/* Enhanced Background decoration */}{" "}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl group-hover:from-blue-500/15 group-hover:to-cyan-500/15 transition-all duration-500">
            {" "}
          </div>{" "}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm rounded-3xl border border-gray-700/40 group-hover:border-blue-500/30 transition-all duration-500">
            {" "}
          </div>
          {/* Subtle glow effect */}{" "}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5">
            {" "}
          </div>
          {/* Content */}{" "}
          <div className="relative z-10 p-8 md:p-12 text-center">
            {" "}
            {/* Enhanced Quote decoration */}{" "}
            <div className="text-6xl text-blue-400/30 font-serif mb-4 group-hover:text-blue-400/40 transition-colors duration-300">
              {" "}
              "
            </div>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 font-light">
              Saya adalah seorang{" "}
              <span className="font-semibold text-cyan-300 hover:text-cyan-200 transition-colors duration-200">
                mahasiswa Informatika{" "}
              </span>{" "}
              yang aktif dan memiliki ketertarikan besar pada{" "}
              <span className="font-semibold text-blue-300 hover:text-blue-200 transition-colors duration-200">
                pengembangan perangkat lunak{" "}
              </span>{" "}
              serta{" "}
              <span className="font-semibold text-indigo-300 hover:text-indigo-200 transition-colors duration-200">
                teknologi berbasis IoT{" "}
              </span>
              .Saya memiliki pengalaman dalam pemrograman, manajemen basis data,
              dan pengembangan aplikasi menggunakan bahasa seperti{" "}
              <span className="font-semibold text-yellow-300 hover:text-yellow-200 transition-colors duration-200">
                Python{" "}
              </span>{" "}
              dan{" "}
              <span className="font-semibold text-purple-300 hover:text-purple-200 transition-colors duration-200">
                {" "}
                PHP{" "}
              </span>
              . Saya mampu bekerja secara mandiri maupun dalam tim, dengan
              pendekatan yang terstruktur dan analitis untuk menyelesaikan
              tantangan teknis dan menyelesaikan proyek dengan baik.{" "}
            </p>
            {/* Bottom quote decoration */}{" "}
            <div className="text-6xl text-blue-400/30 font-serif rotate-180 mb-6 group-hover:text-blue-400/40 transition-colors duration-300">
              {" "}
              "
            </div>
            {/* Enhanced Informasi Pribadi */}{" "}
            <div className="relative border-t border-gray-700/50 pt-6 mt-8 text-center">
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent">
                  {" "}
                </div>{" "}
              </div>{" "}
              <div className="space-y-1">
                <p className="text-sm text-gray-400 font-medium hover:text-gray-300 transition-colors duration-200">
                  Lahir di Yogyakarta, 24 Juli 2003{" "}
                </p>{" "}
                <p className="text-sm text-gray-400 font-medium hover:text-gray-300 transition-colors duration-200">
                  Saat ini tinggal di Depok, Jawa Barat{" "}
                </p>{" "}
              </div>{" "}
            </div>
            {/* Enhanced Key highlights */}{" "}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="group/badge flex items-center gap-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400/50 px-4 py-2 rounded-full hover:scale-105 transition-all duration-200">
                <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover/badge:animate-pulse">
                  {" "}
                </div>{" "}
                <span className="text-sm font-medium text-cyan-200 group-hover/badge:text-cyan-100 transition-colors duration-200">
                  Pengembangan Perangkat Lunak{" "}
                </span>{" "}
              </div>{" "}
              <div className="group/badge flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 px-4 py-2 rounded-full hover:scale-105 transition-all duration-200">
                <div className="w-2 h-2 bg-blue-400 rounded-full group-hover/badge:animate-pulse">
                  {" "}
                </div>{" "}
                <span className="text-sm font-medium text-blue-200 group-hover/badge:text-blue-100 transition-colors duration-200">
                  Teknologi IoT{" "}
                </span>{" "}
              </div>{" "}
              <div className="group/badge flex items-center gap-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-400/50 px-4 py-2 rounded-full hover:scale-105 transition-all duration-200">
                <div className="w-2 h-2 bg-indigo-400 rounded-full group-hover/badge:animate-pulse">
                  {" "}
                </div>{" "}
                <span className="text-sm font-medium text-indigo-200 group-hover/badge:text-indigo-100 transition-colors duration-200">
                  Kolaborasi Tim{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          {/* Enhanced Floating elements */}{" "}
          <div className="absolute top-8 left-8 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-60 group-hover:opacity-80 transition-opacity duration-300">
            {" "}
          </div>{" "}
          <div
            className="absolute bottom-8 right-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-40 group-hover:opacity-60 transition-opacity duration-300"
            style={{ animationDelay: "1s" }}
          ></div>{" "}
          <div
            className="absolute top-1/2 right-12 w-1 h-1 bg-indigo-400 rounded-full animate-pulse opacity-50 group-hover:opacity-70 transition-opacity duration-300"
            style={{ animationDelay: "0.5s" }}
          ></div>
          {/* Additional floating elements for more visual interest */}{" "}
          <div
            className="absolute top-16 right-16 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-30 group-hover:opacity-50 transition-opacity duration-300"
            style={{ animationDelay: "2s" }}
          ></div>{" "}
          <div
            className="absolute bottom-16 left-16 w-2.5 h-2.5 bg-cyan-300 rounded-full animate-pulse opacity-25 group-hover:opacity-45 transition-opacity duration-300"
            style={{ animationDelay: "1.5s" }}
          ></div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default AboutSection;
