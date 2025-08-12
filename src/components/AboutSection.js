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
        <div className="relative">
          {" "}
          {/* Background decoration */}{" "}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl">
            {" "}
          </div>{" "}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700/30">
            {" "}
          </div>
          {/* Content */}{" "}
          <div className="relative z-10 p-8 md:p-12 text-center">
            {" "}
            {/* Quote decoration */}{" "}
            <div className="text-6xl text-blue-400/20 font-serif mb-4"> "</div>{" "}
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 font-light">
              Saya adalah seorang{" "}
              <span className="font-semibold text-cyan-300">
                {" "}
                mahasiswa Informatika{" "}
              </span>{" "}
              yang aktif dan memiliki ketertarikan besar pada{" "}
              <span className="font-semibold text-blue-300">
                {" "}
                pengembangan perangkat lunak{" "}
              </span>{" "}
              serta{" "}
              <span className="font-semibold text-indigo-300">
                {" "}
                teknologi berbasis IoT{" "}
              </span>
              . Saya memiliki pengalaman dalam pemrograman, manajemen basis
              data, dan pengembangan aplikasi menggunakan bahasa seperti{" "}
              <span className="font-semibold text-yellow-300">
                {" "}
                Python{" "}
              </span>{" "}
              dan <span className="font-semibold text-purple-300"> PHP </span>.
              Saya mampu bekerja secara mandiri maupun dalam tim, dengan
              pendekatan yang terstruktur dan analitis untuk menyelesaikan
              tantangan teknis dan menyelesaikan proyek dengan baik.{" "}
            </p>
            {/* Informasi Pribadi */}{" "}
            <div className="border-t border-gray-700/50 pt-6 mt-8 text-center">
              <p className="text-sm text-gray-400 font-medium">
                Lahir di Yogyakarta, 24 Juli 2003{" "}
              </p>{" "}
              <p className="text-sm text-gray-400 font-medium mt-1">
                Saat ini tinggal di Depok, Jawa Barat{" "}
              </p>{" "}
            </div>
            {/* Key highlights */}{" "}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"> </div>{" "}
                <span className="text-sm font-medium text-cyan-200">
                  Pengembangan Perangkat Lunak{" "}
                </span>{" "}
              </div>{" "}
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm border border-blue-500/30 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-blue-400 rounded-full"> </div>{" "}
                <span className="text-sm font-medium text-blue-200">
                  Teknologi IoT{" "}
                </span>{" "}
              </div>{" "}
              <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-500/30 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"> </div>{" "}
                <span className="text-sm font-medium text-indigo-200">
                  Kolaborasi Tim{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          {/* Floating elements */}{" "}
          <div className="absolute top-8 left-8 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-60">
            {" "}
          </div>{" "}
          <div
            className="absolute bottom-8 right-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-40"
            style={{ animationDelay: "1s" }}
          ></div>{" "}
          <div
            className="absolute top-1/2 right-12 w-1 h-1 bg-indigo-400 rounded-full animate-pulse opacity-50"
            style={{ animationDelay: "0.5s" }}
          ></div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default AboutSection;
