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
    image:
      "/Shalini-Chaudhry.png",
    headline: "Degree from a NAAC A+ Accredited University",
    testimonial:
      "Pursuing Online MBA program at GLA Online was one of the best decisions of my career. The curriculum was comprehensive, and the flexibility allowed me to balance work and studies seamlessly. The faculty was exceptional, providing real-world insights and personalized support. The interactive sessions and practical assignments enhanced my learning experience. GLA Online didn't just provide education but empowered me with the skills to excel in my professional journey. Highly recommended",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    title: "Faculty Member",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    headline: "Highly Experienced Pool of Faculty Members",
    testimonial:
      "Our faculty brings decades of industry experience and academic excellence to every course. We combine theoretical knowledge with practical insights, ensuring students receive world-class education that prepares them for real-world challenges in their professional careers.",
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    title: "Alumni Relations Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    headline: "Join a Global Network of 36,000+ Alumni",
    testimonial:
      "The power of our alumni network is incredible. With over 36,000 graduates worldwide, students gain access to mentorship opportunities, career guidance, and professional connections that open doors to exciting career prospects across various industries and geographical locations.",
  },
  {
    id: 4,
    name: "David Kumar",
    title: "Learning Experience Designer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    headline: "Peer Learning through Group Projects & Presentations",
    testimonial:
      "Our collaborative learning approach encourages students to work together on meaningful projects and presentations. This peer-to-peer interaction enhances critical thinking, communication skills, and builds lasting professional relationships that extend beyond the classroom experience.",
  },
  {
    id: 5,
    name: "Emma Thompson",
    title: "Technology Integration Specialist",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
    headline: "Live & Recorded Lectures",
    testimonial:
      "Our flexible learning platform offers both live interactive sessions and recorded lectures, allowing students to learn at their own pace while maintaining engagement. This hybrid approach ensures that working professionals can balance their studies with their career commitments effectively.",
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
