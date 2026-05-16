import HeroSection from "@/components/home/HeroSection";
import NewsTicker from "@/components/home/NewsTicker";
import Capabilities from "@/components/home/Capabilities";
import Services from "@/components/home/Services";
import AboutSection from "@/components/home/AboutSection";
import DepartmentsGrid from "@/components/home/DepartmentsGrid";
import CtaBanner from "@/components/home/CtaBanner";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GallerySection from "@/components/home/GallerySection";
import ContactForm from "@/components/home/ContactForm";
import Facilities from "@/components/home/Facilities";
import CampusLife from "@/components/home/CampusLife";
import MaternityCare from "@/components/home/MaternityCare";
import Announcements from "@/components/home/Announcements";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsTicker />
      <AboutSection />
      <Capabilities />
      <Services />
      <Facilities />
      <CampusLife />
      <MaternityCare />
      <Announcements />
      <DepartmentsGrid />
      <CtaBanner />
      <WhyChooseUs />
      <GallerySection />
      <ContactForm />
    </>
  );
}
