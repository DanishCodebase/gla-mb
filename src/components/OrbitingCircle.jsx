"use client";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { UserPlus, FileText, GraduationCap, Rocket, CreditCard, Shield, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function OrbitingCircle() {
  const [radius, setRadius] = useState(270);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      // 640px is the sm breakpoint in Tailwind
      if (width < 640) {
        setRadius(150);
      } else {
        setRadius(270);
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <div className="relative flex min-h-[500px] sm:min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={60} radius={radius} reverse speed={2}>
        <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <UserPlus className="w-7 h-7 text-white" />
          </div>
          <span className="text-black text-base font-bold mt-1 whitespace-nowrap">
            Step 1
          </span>
          <span className="text-black text-lg font-bold mt-1 whitespace-nowrap text-center">
            Registration
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
            <FileText className="w-7 h-7 text-white" />
          </div>
          <span className="text-black text-base font-bold mt-1 whitespace-nowrap">
            Step 2
          </span>
          <span className="text-black text-lg font-bold mt-1 whitespace-nowrap text-center">
            Application <br /> Submission
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <CreditCard className="w-7 h-7 text-white" />
          </div>
          <span className="text-black text-base font-bold mt-1 whitespace-nowrap">
            Step 3
          </span>
          <span className="text-black text-lg font-bold mt-1 whitespace-nowrap text-center">
            Fee <br /> Payment
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <span className="text-black text-base font-bold mt-1 whitespace-nowrap">
            Step 4
          </span>
          <span className="text-black text-lg font-bold mt-1 whitespace-nowrap text-center">
            Document <br /> Verification
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-7 h-7 text-white" />
          </div>
          <span className="text-black text-base font-bold mt-1 whitespace-nowrap">
            Step 5
          </span>
          <span className="text-black text-lg font-bold mt-1 whitespace-nowrap text-center">
            LMS <br /> Access
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
            <FileText className="w-7 h-7 text-white" />
          </div>
          <span className="text-black text-base font-bold mt-1 whitespace-nowrap">
            Step 6
          </span>
          <span className="text-black text-lg font-bold mt-1 whitespace-nowrap text-center">
            Appear in <br /> Exams
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <span className="text-black text-base font-bold mt-1 whitespace-nowrap">
            Step 7
          </span>
          <span className="text-black text-lg font-bold mt-1 whitespace-nowrap text-center">
            Get Your <br /> Degree
          </span>
        </div>
      </OrbitingCircles>
    </div>
  );
}
