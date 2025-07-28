"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Program data - easily expandable
const programs = [
  {
    id: 1,
    name: "Marketing Management",
    color: "text-blue-600",
    bgColor: "bg-white",
    hoverColor: "bg-blue-100",
    image: "/marketing-management.png",
  },
  {
    id: 2,
    name: "Human Resource Management",
    color: "text-green-600",
    bgColor: "bg-white",
    hoverColor: "bg-green-100",
    image: "/job-interview.png",
  },
  {
    id: 3,
    name: "Financial Management",
    color: "text-purple-600",
    bgColor: "bg-white",
    hoverColor: "bg-purple-100",
    image: "/budget.png",
  },
  {
    id: 4,
    name: "Information Technology Management",
    color: "text-red-600",
    bgColor: "bg-white",
    hoverColor: "bg-red-100",
    image: "/developer.png",
  },
  {
    id: 5,
    name: "Operations Management",
    color: "text-orange-600",
    bgColor: "bg-white",
    hoverColor: "bg-orange-100",
    image: "/team.png",
  },
  {
    id: 6,
    name: "Banking & Financial Services",
    color: "text-indigo-600",
    bgColor: "bg-white",
    hoverColor: "bg-indigo-100",
    image: "/bank-teller.png",
  },
  {
    id: 7,
    name: "Business Analytics",
    color: "text-teal-600",
    bgColor: "bg-white",
    hoverColor: "bg-teal-100",
    image: "/monitor.png",
  },
  {
    id: 8,
    name: "Supply Chain Management",
    color: "text-amber-600",
    bgColor: "bg-white",
    hoverColor: "bg-amber-100",
    image: "/supply-chain-management.png",
  },
];

export default function ProgramSection() {
  const isMobile = window.innerWidth < 640; // sm breakpoint
  let targetId; 
  if (isMobile) {
    targetId = "contact"; // Mobile form ID
  } else {
    targetId = "contact-form"; // Desktop form ID
  }
  const handleApplyNowClick = (e) => {
    e.preventDefault();
    const contactForm = document.getElementById(targetId);
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section className="w-full pb-16 pt-6 sm:py-20 bg-gradient-to-b from-white to-gray-50 relative">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute z-0 inset-0 h-full w-full fill-neutral-400/80 [mask-image:radial-gradient(200px_circle_at_center,white,transparent, top-0 left-0 right-50 bottom-50,)]"
      >
        <defs>
          <pattern
            id=":ru:"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
            x="0"
            y="0"
          >
            <circle id="pattern-circle" cx="1" cy="1" r="1"></circle>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#:ru:)"
        ></rect>
      </svg>
      <div className="container max-w-7xl mx-auto relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Our Specialisations
          </h2>
          {/* <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our 8 specialisations covers all management aspects
          </p> */}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {programs.map((program) => {
            const IconComponent = program.icon;

            return (
              <Card
                key={program.id}
                className={`group cursor-pointer border-0 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 ${program.hoverColor}`}
              >
                <CardContent className="text-center">
                  {/* Icon Container */}
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl ${program.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {/* <IconComponent
                      className={`w-10 h-10 md:w-12 md:h-12 ${program.color} group-hover:scale-110 transition-transform duration-300`}
                    /> */}
                    <Image
                      src={program.image}
                      alt={program.name}
                      width={100}
                      height={100}
                      className="w-10 h-10 md:w-16 md:h-16"
                    />
                  </div>

                  {/* Program Name */}
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {program.name}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="#contact-form"
            onClick={handleApplyNowClick}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
