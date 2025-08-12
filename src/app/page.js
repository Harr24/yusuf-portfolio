import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection"; // <-- 1. TAMBAHKAN IMPORT INI
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // Menggunakan background gradient baru yang kamu buat
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />

      <div className="container mx-auto px-4">
        <HeroSection />
        <AboutSection />
        <EducationSection /> {/* <-- 2. TAMBAHKAN KOMPONEN INI DI SINI */}{" "}
        <SkillsSection />
        <CertificationsSection />
        <ProjectsSection />
      </div>

      <Footer />
    </main>
  );
}
