import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center"
    >
      <Image
        src="/profile.jpg"
        alt="Foto profil Yusuf Harry Setiawan"
        width={160}
        height={160}
        className="rounded-full border-4 border-slate-500 mb-4"
      />
      <div>
        {" "}
        {/* Nama CV */}{" "}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
          Yusuf Harry Setiawan{" "}
        </h1>{" "}
        {/* Titel ini diambil dari CV yang diberikan sebelumnya */}{" "}
        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          Informatics Student{" "}
        </p>{" "}
        <a
          href="#projects"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Lihat Proyek Saya{" "}
        </a>{" "}
      </div>{" "}
    </section>
  );
};

export default HeroSection;
