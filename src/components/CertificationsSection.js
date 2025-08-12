"use client";
import React, { useState } from "react";
import Image from "next/image";

// Data untuk sertifikat
const certifications = [
  {
    title: "PCAP: Programming Essentials in Python",
    imageSrc: "/sertifikat-python.png",
  },
  {
    title: "CCNAv7: Introduction to Networks",
    imageSrc: "/sertifikat-ccna.png",
  },
];

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCert(null);
    setIsModalOpen(false);
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {" "}
        {/* Header */}{" "}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            Sertifikasi Saya{" "}
          </h2>{" "}
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sertifikasi profesional yang telah saya peroleh dalam bidang
            programming dan networking{" "}
          </p>{" "}
        </div>{" "}
        {/* Certifications Grid */}{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {" "}
          {certifications.map((cert, index) => (
            <div
              key={index}
              onClick={() => openModal(cert)}
              className="group relative block bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 cursor-pointer"
            >
              {/* Certificate Badge */}{" "}
              <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                VERIFIED{" "}
              </div>{" "}
              {/* Glowing overlay */}{" "}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {" "}
              </div>{" "}
              {/* Certificate Image */}{" "}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10">
                  {" "}
                </div>{" "}
                <Image
                  src={cert.imageSrc}
                  alt={`Sertifikat ${cert.title}`}
                  width={720}
                  height={540}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />{" "}
                {/* Shine effect */}{" "}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[300%] transition-transform duration-1000">
                    {" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              {/* Certificate Info */}{" "}
              <div className="relative z-20 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"> </div>{" "}
                  <span className="text-green-400 text-sm font-medium">
                    Certified{" "}
                  </span>{" "}
                </div>{" "}
                <h3 className="font-bold text-lg text-white group-hover:text-orange-300 transition-colors duration-300 mb-3">
                  {" "}
                  {cert.title}{" "}
                </h3>{" "}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Klik untuk melihat sertifikat{" "}
                  </div>{" "}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Progress bar animation */}{" "}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left">
                  {" "}
                </div>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        {/* Bottom Stats */}{" "}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">
                {" "}
                {certifications.length}{" "}
              </div>{" "}
              <div className="text-sm text-gray-400"> Sertifikasi </div>{" "}
            </div>{" "}
            <div className="w-px h-8 bg-gray-600"> </div>{" "}
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400"> 100 % </div>{" "}
              <div className="text-sm text-gray-400"> Verified </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Modal */}{" "}
      {isModalOpen && selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-gray-900/90 rounded-2xl overflow-hidden border border-gray-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}{" "}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-30 bg-gray-800/80 hover:bg-gray-700/80 text-white p-2 rounded-full transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>{" "}
            </button>{" "}
            {/* Modal Header */}{" "}
            <div className="bg-gradient-to-r from-orange-600/20 to-yellow-600/20 p-6 border-b border-gray-700/50">
              <h3 className="text-2xl font-bold text-white">
                {" "}
                {selectedCert.title}{" "}
              </h3>{" "}
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"> </div>{" "}
                <span className="text-green-400 text-sm font-medium">
                  {" "}
                  Verified Certificate{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
            {/* Certificate Image */}{" "}
            <div className="p-4">
              <div className="relative">
                <Image
                  src={selectedCert.imageSrc}
                  alt={`Sertifikat ${selectedCert.title}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-2xl"
                  style={{ maxHeight: "70vh", objectFit: "contain" }}
                />{" "}
              </div>{" "}
            </div>{" "}
            {/* Modal Footer */}{" "}
            <div className="p-6 bg-gray-800/50 text-center">
              <p className="text-gray-400 text-sm">
                Klik di luar modal atau tombol✕ untuk menutup{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </section>
  );
};

export default CertificationsSection;
