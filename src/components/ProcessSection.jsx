"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { 
  UserPlus, 
  FileText, 
  CreditCard, 
  Shield, 
  Monitor, 
  ClipboardCheck, 
  GraduationCap 
} from "lucide-react";

// Process steps data
const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Register yourself",
    description: "Create your account and complete your profile",
    icon: UserPlus,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: 2,
    number: "02",
    title: "Submit your application",
    description: "Fill out and submit your application form",
    icon: FileText,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    id: 3,
    number: "03",
    title: "Pay your fee",
    description: "Complete the payment process securely",
    icon: CreditCard,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    id: 4,
    number: "04",
    title: "Get your documents verified",
    description: "Submit and verify required documents",
    icon: Shield,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    id: 5,
    number: "05",
    title: "Gain access to Learning Management System",
    description: "Access your personalized learning platform",
    icon: Monitor,
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200"
  },
  {
    id: 6,
    number: "06",
    title: "Appear in Exams",
    description: "Take your assessments and evaluations",
    icon: ClipboardCheck,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    id: 7,
    number: "07",
    title: "Get your Degree",
    description: "Receive your accredited degree certificate",
    icon: GraduationCap,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200"
  }
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Journey to Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to begin your educational journey with GLA Online
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 via-orange-200 via-indigo-200 via-red-200 to-emerald-200 transform -translate-y-1/2" />
            
            {/* Steps */}
            <div className="relative flex justify-between items-center">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center">
                  {/* Step Card */}
                  <Card className={cn(
                    "w-64 border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2",
                    step.bgColor,
                    step.borderColor
                  )}>
                    <CardContent className="p-6 text-center">
                      {/* Icon */}
                      <div className={cn(
                        "w-16 h-16 rounded-full bg-gradient-to-r flex items-center justify-center mx-auto mb-4 shadow-lg",
                        step.color
                      )}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Step Number */}
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {step.number}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Connector */}
                  {index < processSteps.length - 1 && (
                    <div className="w-8 h-0.5 bg-gray-300 mt-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step Card */}
                <Card className={cn(
                  "border-2 shadow-lg hover:shadow-xl transition-all duration-300",
                  step.bgColor,
                  step.borderColor
                )}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      {/* Icon and Number */}
                      <div className="flex-shrink-0">
                        <div className={cn(
                          "w-16 h-16 rounded-full bg-gradient-to-r flex items-center justify-center shadow-lg",
                          step.color
                        )}>
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-center mt-2">
                          <span className="text-2xl font-bold text-gray-900">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-6 bg-gradient-to-b from-gray-300 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="flex space-x-1">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === 0 ? "bg-blue-500" : "bg-gray-300"
                  )}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600 ml-2">
              Step 1 of {processSteps.length}
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
} 