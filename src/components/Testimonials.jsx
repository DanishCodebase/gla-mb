"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import Image from "next/image";

// GLA Online features data with testimonial-style content
const features = [
  {
    id: 1,
    name: "Shalini Chaudhry",
    title: "Online MBA (Batch 2022-24)",
    image: "/Shalini-Chaudhry.png",
    headline: "Degree from a NAAC A+ Accredited University",
    testimonial:
      "Pursuing Online MBA program at GLA Online was one of the best decisions of my career. The curriculum was comprehensive, and the flexibility allowed me to balance work and studies seamlessly. The faculty was exceptional, providing real-world insights and personalized support. The interactive sessions and practical assignments enhanced my learning experience. GLA Online didn't just provide education but empowered me with the skills to excel in my professional journey. Highly recommended",
  },
  {
    id: 2,
    name: "Anmol Nagpal",
    title: "Online MBA (Current Student)",
    image: "/anmol.png",
    headline: "Highly Experienced Pool of Faculty Members",
    testimonial:
      "Enrolling in the Online MBA program at GLA Online has been a transformative experience. The flexible schedule, expert faculty, and industry-relevant curriculum allow me to balance my career and education seamlessly. The interactive sessions and real-world case studies provide valuable insights, enhancing my decision-making and leadership skills. I am thrilled to be part of the 2024-26 batch, and l'm confident this program will be a cornerstone in my journey toward professional excellence.",
  },
  {
    id: 3,
    name: "Mukul",
    title: "Online MBA (Batch 2023-25)",
    image: "/mukul.png",
    headline: "Join a Global Network of 36,000+ Alumni",
    testimonial:
      "GLA Online's MBA program was a game-changer for me! The flexible schedule allowed me to balance my job while gaining invaluable insights into business management. The interactive sessions, expert faculty, and real-world case studies enhanced my skills and confidence. The support system, from doubt-clearing to career guidance, was exceptional. Today, I apply the knowledge and leadership skills gained here in my professional life. I'm proud to be an alumnus of GLA Online!",
  },
  {
    id: 4,
    name: "Deeksha Agrawal",
    title: "Online MBA (Batch 2022- 24)",
    image: "/deeksha.png",
    headline: "Peer Learning through Group Projects & Presentations",
    testimonial:
      "GLA Online provided a transformative experience through its Online MBA program. The flexible learning environment, industry-relevant curriculum, and exceptional faculty support made it possible for me to balance work and studies seamlessly. The interactive sessions and real-world case studies enhanced my managerial skills and broadened my career horizons. GLA Online truly empowered me with knowledge and confidence, paving the way for professional growth. I'm proud to be an alumna of this esteemed institution!",
  },
  {
    id: 5,
    name: "Ashwini Chaudhry",
    title: "Online MBA (Batch 2024-26)",
    image: "/ashwini.png",
    headline: "Live & Recorded Lectures",
    testimonial:
      "Studying MBA online from GLA University has been an enriching experience! The course is designed to fit my busy schedule, and the faculty is always available to guide and support me. The practical insights, coupled with academic excellence, have not only enhanced my business acumen but also broadened my perspective. I feel well-prepared for the corporate world, and the interactive learning environment has made every session insightful. GLA Online has truly exceeded my expectations!",
  },
  {
    id: 6,
    name: "James Wilson",
    title: "Career Services Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    headline: "Placements Powered by GLA University",
    testimonial:
      "Our dedicated placement cell works tirelessly to connect students with top employers. With GLA University's strong industry partnerships and proven track record, we ensure that our graduates have access to excellent career opportunities and professional growth prospects.",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState();

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const handleAvatarClick = (index) => {
    setActiveIndex(index);
    api?.scrollTo(index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 px-4">
            What Students Are Saying <br className="sm:block hidden" /> About
            GLA Online
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
            This practical guide is your roadmap to success, offering invaluable
            insights, strategies, and actionable advice tailored to the unique
            challenges faced by creative entrepreneurs.
          </p>
        </div>

        {/* Avatar Navigation */}
        <div className="mb-12 px-4">
          {/* Desktop: Grid layout */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="grid grid-cols-6 gap-8 max-w-5xl">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="cursor-pointer transition-all duration-300 hover:scale-105 flex flex-col items-center"
                  onClick={() => handleAvatarClick(index)}
                >
                  <div className="relative w-20 h-20 rounded-sm overflow-hidden mx-auto">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center min-h-auto flex flex-col justify-center">
                    <div className="text-xs text-white leading-tight mt-1">
                      {feature.name}
                    </div>
                    {/* <div className="text-xs text-gray-400 leading-tight">{feature.title}</div> */}
                  </div>
                  {/* Active indicator */}
                  {activeIndex === index && (
                    <div className="w-full h-0.5 bg-orange-500 rounded-full mt-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={feature.id}>
                  <Card className="bg-transparent border border-gray-800 rounded-xl sm:mx-4">
                    <CardContent className="">
                      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                        {/* Large Profile Image */}
                        <div className="relative w-full sm:w-80 h-80 sm:h-80 lg:w-80 lg:h-80 rounded-xl overflow-hidden flex-shrink-0 mx-auto lg:mx-0">
                          <Image
                            src={feature.image || "/placeholder.svg"}
                            alt={feature.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center lg:text-left">
                          <div className="mb-4 lg:mb-6">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                              {feature.name}
                            </h3>
                            <p className="text-orange-500 font-medium text-sm sm:text-base">
                              {feature.title}
                            </p>
                          </div>

                          {/* <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                            {feature.headline}
                          </h4> */}

                          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                            {feature.testimonial}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
            <CarouselPrevious className="left-[-10px] sm:left-2 bg-gray-800/80 border-gray-600 text-white hover:bg-gray-700 w-8 h-8 z-10" />
            <CarouselNext className="right-[-10px] sm:right-2 bg-gray-800/80 border-gray-600 text-white hover:bg-gray-700 w-8 h-8 z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
