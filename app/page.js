import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    
      <main className="flex min-h-screen flex-col bg-black ">
        <NavBar />
        < div className="container mt-24 md:mt-36 mx-auto px-12 py-4">
       <HeroSection />
       <AboutSection />
       <ProjectsSection />
       <EmailSection />
       </div>
       <Footer />
      </main>
      
  
  );
}
