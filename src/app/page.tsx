import { FeaturedCourses } from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Teachers from "@/components/Teachers";
import TestimonialPart from "@/components/TestimonialPart";
import UpcomingWebiner from "@/components/UpcomingWebiner";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialPart/>
      <UpcomingWebiner/>
      <Teachers/>
      <Footer/>
    </main>
  );
}
