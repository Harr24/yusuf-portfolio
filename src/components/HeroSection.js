import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 text-white"
    >
      {/* Profile Image */}{" "}
      <div className="relative mb-6">
        <Image
          src="/profile.jpg"
          alt="Foto profil Yusuf Harry Setiawan"
          width={160}
          height={160}
          className="rounded-full border-4 border-blue-500 shadow-lg transition-transform duration-300 hover:scale-105"
        />{" "}
        {/* Status Indicator */}{" "}
        <div className="absolute bottom-2 right-2 w-3 h-3 bg-green-400 border-2 border-white rounded-full animate-pulse" />
      </div>
      {/* Name */}{" "}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-wide">
        Yusuf Harry Setiawan{" "}
      </h1>
      {/* Title */}{" "}
      <p className="mt-3 text-lg sm:text-xl md:text-2xl text-blue-300 font-light">
        Informatics Student & Creative Web Developer{" "}
      </p>
      {/* Description */}{" "}
      <p className="mt-4 max-w-xl text-sm sm:text-base text-gray-300 leading-relaxed">
        Passionate about building elegant user interfaces, exploring IoT, and crafting meaningful
        digital experiences.{" "}
      </p>
      {/* CTA Button */}{" "}
      <a
        href="#projects"
        className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
      >
        Lihat Proyek Saya{" "}
      </a>
      {/* Contact Info */}{" "}
      <div className="mt-6 text-sm text-gray-400">
        <p> Hubungi saya di: </p>{" "}
        <a href="mailto:Yusufharrysetiawan@gmail.com" className="text-blue-400 hover:underline">
          Yusufharrysetiawan @gmail.com{" "}
        </a>{" "}
      </div>{" "}
    </section>
  );
};

export default HeroSection;
