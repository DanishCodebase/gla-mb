"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { 
  User, 
  FileText, 
  DollarSign, 
  CheckCircle, 
  Monitor, 
  FileCheck, 
  GraduationCap 
} from "lucide-react";

// Journey steps data
const journeySteps = [
  {
    id: 1,
    number: "01",
    title: "Register yourself",
    icon: User,
    color: "bg-orange-500",
    borderColor: "border-orange-500",
    textColor: "text-orange-500"
  },
  {
    id: 2,
    number: "02", 
    title: "Submit your application",
    icon: FileText,
    color: "bg-pink-500",
    borderColor: "border-pink-500",
    textColor: "text-pink-500"
  },
  {
    id: 3,
    number: "03",
    title: "Pay your fee", 
    icon: DollarSign,
    color: "bg-purple-500",
    borderColor: "border-purple-500",
    textColor: "text-purple-500"
  },
  {
    id: 4,
    number: "04",
    title: "Get your documents verified",
    icon: CheckCircle,
    color: "bg-indigo-600",
    borderColor: "border-indigo-600", 
    textColor: "text-indigo-600"
  },
  {
    id: 5,
    number: "05",
    title: "Gain access to Learning Management System",
    icon: Monitor,
    color: "bg-blue-500",
    borderColor: "border-blue-500",
    textColor: "text-blue-500"
  },
  {
    id: 6,
    number: "06",
    title: "Appear in Exams",
    icon: FileCheck,
    color: "bg-cyan-500", 
    borderColor: "border-cyan-500",
    textColor: "text-cyan-500"
  },
  {
    id: 7,
    number: "07",
    title: "Get your Degree",
    icon: GraduationCap,
    color: "bg-green-500",
    borderColor: "border-green-500",
    textColor: "text-green-500"
  }
];

export default function JourneyAtGLA() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Journey at{" "}
            <span className="text-orange-500">GLA Online</span>
          </h2>
        </div>

        {/* Journey Circle */}
        <div className="relative flex justify-center items-center">
          {/* Central Image */}
          <div className="relative z-10">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-orange-400 via-green-400 via-blue-400 to-purple-400 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                    alt="Student Journey"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Journey Steps - Desktop Layout */}
          <div className="hidden lg:block absolute inset-0">
            {journeySteps.map((step, index) => {
              // Calculate position on the circle
              const angle = (index * 360) / journeySteps.length;
              const radius = 280; // Distance from center
              const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
              const y = Math.sin((angle - 90) * Math.PI / 180) * radius;

              return (
                <div
                  key={step.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  {/* Connecting Line */}
                  <div 
                    className="absolute w-24 h-0.5 bg-gray-300 transform origin-left"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translateY(-50%) rotate(${angle}deg)`,
                    }}
                  />
                  
                  {/* Step Card */}
                  <div className="relative bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-48 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-3">
                      {/* Icon */}
                      <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", step.color)}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className={cn("text-2xl font-bold", step.textColor)}>
                          {step.number}
                        </div>
                        <div className="text-sm font-medium text-gray-900 leading-tight">
                          {step.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Journey Steps - Mobile/Tablet Layout */}
          <div className="lg:hidden mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {journeySteps.map((step) => (
                <Card key={step.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      {/* Icon */}
                      <div className={cn("w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0", step.color)}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className={cn("text-2xl font-bold mb-1", step.textColor)}>
                          {step.number}
                        </div>
                        <div className="text-sm font-medium text-gray-900 leading-tight">
                          {step.title}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicator for Mobile */}
        <div className="lg:hidden mt-8">
          <div className="flex justify-center">
            <div className="flex space-x-2">
              {journeySteps.map((step, index) => (
                <div
                  key={step.id}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors duration-300",
                    index === 0 ? step.color : "bg-gray-300"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 