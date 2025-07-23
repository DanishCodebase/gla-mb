import { RankingsAccreditations } from "@/components/RankingsAccreditations";
import ProgramSection from "@/components/ProgramSection";
import WhyGLA from "@/components/WhyGLA";
import { Recruiters } from "@/components/Recruiters";

export default function Home() {
  return (
    <main>
      <RankingsAccreditations />
      <ProgramSection />
      <WhyGLA />
      <Recruiters />
    </main>
  );
}

