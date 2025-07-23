import { HeroBanner } from "@/components/mba/HeroBanner";
import { RankingsAccreditations } from "@/components/RankingsAccreditations";
import { Programmes } from "@/components/mba/Programmes";
import { WhyGLAOnline } from "@/components/mba/WhyGLAOnline";
import { WhyChooseGLA } from "@/components/mba/WhyChooseGLA";
import { Recruiters } from "@/components/mba/Recruiters";
import { JourneyAtGLA } from "@/components/mba/JourneyAtGLA";
import { Testimonials } from "@/components/mba/Testimonials";

export default function MBAPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Banner Section */}
      <HeroBanner />
      
      {/* Rankings & Accreditation Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 dark:to-slate-900/50"></div>
        <div className="relative">
          <RankingsAccreditations />
        </div>
      </div>
      
      {/* Programmes Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-slate-50/50 dark:from-slate-900/50 dark:to-slate-800/50"></div>
        <div className="relative">
          <Programmes />
        </div>
      </div>
      
      {/* Why GLA Online Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-blue-50/30 dark:from-slate-800/50 dark:to-slate-900/50"></div>
        <div className="relative">
          <WhyGLAOnline />
        </div>
      </div>
      
      {/* Why Choose GLA Section */}
      <WhyChooseGLA />
      
      {/* Recruiters Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white/50 dark:from-slate-900/50 dark:to-slate-800/50"></div>
        <div className="relative">
          <Recruiters />
        </div>
      </div>
      
      {/* Journey at GLA Online Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-indigo-50/30 dark:from-slate-800/50 dark:to-slate-900/50"></div>
        <div className="relative">
          <JourneyAtGLA />
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 to-white/50 dark:from-slate-900/50 dark:to-slate-800/50"></div>
        <div className="relative">
          <Testimonials />
        </div>
      </div>
    </main>
  );
} 