import { RankingsAccreditations } from "@/components/RankingsAccreditations";
import ProgramSection from "@/components/ProgramSection";
import WhyGLA from "@/components/WhyGLA";
import { Recruiters } from "@/components/Recruiters";
import Testimonials from "@/components/Testimonials";
import { OrbitingCircle } from "@/components/OrbitingCircle";

export default function Home() {
  return (
    <main>
      <RankingsAccreditations />
      <ProgramSection />
      <WhyGLA />
      <Recruiters />
      <Testimonials />
      <OrbitingCircle />
    </main>
  );
}

