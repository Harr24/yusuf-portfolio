import React from "react";

const educationHistory = [
  {
    institution: "Universitas Bina Sarana Informatika",
    degree: "S1 Informatika (Semester 7)",
    year: "2022 - Sekarang",
  },
  {
    institution: "SMK Muhammadiyah 1 Playen",
    degree: "Sekolah Menengah Kejuruan",
    year: "2018 - 2021",
  },
  {
    institution: "SMP Negeri 1 Playen",
    degree: "Sekolah Menengah Pertama",
    year: "2016 - 2019",
  },
  {
    institution: "SDN Karangmojo Dua",
    degree: "Sekolah Dasar",
    year: "2011 - 2016",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {" "}
        {/* Header */}{" "}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Riwayat Pendidikan{" "}
          </h2>{" "}
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Perjalanan pendidikan yang telah membentuk fondasi pengetahuan dan
            keahlian saya{" "}
          </p>{" "}
        </div>
        {/* Timeline Container */}{" "}
        <div className="relative max-w-4xl mx-auto">
          {" "}
          {/* Timeline Line */}{" "}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500">
            {" "}
          </div>
          {educationHistory.map((edu, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {" "}
              {/* Timeline Dot */}{" "}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 z-10 shadow-lg shadow-blue-500/20">
                {" "}
              </div>
              {/* Content Card */}{" "}
              <div
                className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                  {" "}
                  {/* Year Badge */}{" "}
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {" "}
                    {edu.year}{" "}
                  </div>
                  {/* Institution */}{" "}
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-2">
                    {" "}
                    {edu.institution}{" "}
                  </h3>
                  {/* Degree */}{" "}
                  <p className="text-gray-400 font-medium mb-3">
                    {" "}
                    {edu.degree}{" "}
                  </p>
                  {/* Progress Bar */}{" "}
                  <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left">
                      {" "}
                    </div>{" "}
                  </div>
                  {/* Glow Effect */}{" "}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {" "}
                  </div>{" "}
                </div>
                {/* Floating Icon */}{" "}
                <div
                  className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${
                    index % 2 === 0
                      ? "right-0 translate-x-1/2"
                      : "left-0 -translate-x-1/2"
                  } w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  {" "}
                  {index === 0
                    ? "🎓"
                    : index === 1
                    ? "🏫"
                    : index === 2
                    ? "📚"
                    : "🎒"}{" "}
                </div>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>
        {/* Bottom Stats */}{" "}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                {new Date().getFullYear() - 2011}{" "}
              </div>{" "}
              <div className="text-sm text-gray-400"> Tahun Belajar </div>{" "}
            </div>{" "}
            <div className="w-px h-8 bg-gray-600"> </div>{" "}
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {" "}
                {educationHistory.length}{" "}
              </div>{" "}
              <div className="text-sm text-gray-400"> Institusi </div>{" "}
            </div>{" "}
            <div className="w-px h-8 bg-gray-600"> </div>{" "}
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                S1{" "}
              </div>{" "}
              <div className="text-sm text-gray-400"> Current Level </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default EducationSection;
