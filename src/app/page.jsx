import { RankingsAccreditations } from "@/components/RankingsAccreditations";
import ProgramSection from "@/components/ProgramSection";
import WhyGLA from "@/components/WhyGLA";
import { Recruiters } from "@/components/Recruiters";
import Testimonials from "@/components/Testimonials";
import { OrbitingCircle } from "@/components/OrbitingCircle";
import JourneyAtGLA from "@/components/JourneyAtGLA";
import { HeroSection } from "@/components/mba/HeroSection";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <ProgramSection />
      <Recruiters />
      <WhyGLA />
      <RankingsAccreditations />
      <JourneyAtGLA />
      <Testimonials />
      {/* <OrbitingCircle /> */}
    </main>
  );
}
