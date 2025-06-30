import Image from "next/image";
import HeroSection from "../components/ui/HeroSection";
import FeaturedCourses from "../components/FeaturedCourses";
import WhyChooseUs from "../components/WhyChooseUs";
import MusicSchoolTestimonials from "../components/TestimonialCards";
import UpcomingWebinars from "../components/UpcomingWebinars";
import Instructors from "../components/Instructors";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <h1 className="text-3x text text-center"> 
    <HeroSection />
    <FeaturedCourses /> 
    <WhyChooseUs />
    <MusicSchoolTestimonials />
    <UpcomingWebinars />
    <Instructors />
    <Footer />
    </h1>
    );
}
