"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useState, useEffect } from "react"
import Image from "next/image"

// GLA Online features data with testimonial-style content
const features = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Academic Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    headline: "Degree from a NAAC A+ Accredited University",
    testimonial:
      "As an academic professional, I understand the importance of accreditation. GLA Online provides students with degrees from a NAAC A+ accredited university, ensuring that their qualifications are recognized globally and meet the highest educational standards in the industry.",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    title: "Faculty Member",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    headline: "Highly Experienced Pool of Faculty Members",
    testimonial:
      "Our faculty brings decades of industry experience and academic excellence to every course. We combine theoretical knowledge with practical insights, ensuring students receive world-class education that prepares them for real-world challenges in their professional careers.",
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    title: "Alumni Relations Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    headline: "Join a Global Network of 36,000+ Alumni",
    testimonial:
      "The power of our alumni network is incredible. With over 36,000 graduates worldwide, students gain access to mentorship opportunities, career guidance, and professional connections that open doors to exciting career prospects across various industries and geographical locations.",
  },
  {
    id: 4,
    name: "David Kumar",
    title: "Learning Experience Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    headline: "Peer Learning through Group Projects & Presentations",
    testimonial:
      "Our collaborative learning approach encourages students to work together on meaningful projects and presentations. This peer-to-peer interaction enhances critical thinking, communication skills, and builds lasting professional relationships that extend beyond the classroom experience.",
  },
  {
    id: 5,
    name: "Emma Thompson",
    title: "Technology Integration Specialist",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
    headline: "Live & Recorded Lectures",
    testimonial:
      "Our flexible learning platform offers both live interactive sessions and recorded lectures, allowing students to learn at their own pace while maintaining engagement. This hybrid approach ensures that working professionals can balance their studies with their career commitments effectively.",
  },
  {
    id: 6,
    name: "James Wilson",
    title: "Career Services Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    headline: "Placements Powered by GLA University",
    testimonial:
      "Our dedicated placement cell works tirelessly to connect students with top employers. With GLA University's strong industry partnerships and proven track record, we ensure that our graduates have access to excellent career opportunities and professional growth prospects.",
  },
]

export default function WhyGLATestimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [api, setApi] = useState()

  useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap())
    })
  }, [api])

  const handleAvatarClick = (index) => {
    setActiveIndex(index)
    api?.scrollTo(index)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 px-4">
            What Students Are Saying <br className="sm:block hidden" /> About GLA Online
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
            This practical guide is your roadmap to success, offering invaluable insights, strategies, and actionable
            advice tailored to the unique challenges faced by creative entrepreneurs.
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
                    <Image src={feature.image || "/placeholder.svg"} alt={feature.name} fill className="object-cover" />
                  </div>
                  <div className="text-center min-h-auto flex flex-col justify-center">
                    <div className="text-xs text-white leading-tight">{feature.name}</div>
                    {/* <div className="text-xs text-gray-400 leading-tight">{feature.title}</div> */}
                  </div>
                  {/* Active indicator */}
                  {activeIndex === index && <div className="w-full h-0.5 bg-orange-500 rounded-full mt-2" />}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet: Horizontal scroll */}
          <div className="lg:hidden">
            <div
              className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitScrollbar: { display: "none" },
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="cursor-pointer transition-all duration-300 hover:scale-105 flex flex-col items-center flex-shrink-0"
                  onClick={() => handleAvatarClick(index)}
                >
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden mb-3">
                    <Image src={feature.image || "/placeholder.svg"} alt={feature.name} fill className="object-cover" />
                  </div>
                  <div className="text-center min-h-[50px] flex flex-col justify-center w-24">
                    <div className="text-xs font-medium text-white mb-1 leading-tight">{feature.name}</div>
                    <div className="text-xs text-gray-400 leading-tight">{feature.title}</div>
                  </div>
                  {/* Active indicator */}
                  {activeIndex === index && <div className="w-full h-0.5 bg-orange-500 mt-2 rounded-full" />}
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
                  <Card className="bg-transparent border border-gray-800 rounded-xl mx-4">
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
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{feature.name}</h3>
                            <p className="text-orange-500 font-medium text-sm sm:text-base">{feature.title}</p>
                          </div>

                          <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                            {feature.headline}
                          </h4>

                          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">{feature.testimonial}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
            <CarouselPrevious className="left-1 sm:left-2 bg-gray-800/80 border-gray-600 text-white hover:bg-gray-700 w-8 h-8 sm:w-10 sm:h-10" />
            <CarouselNext className="right-1 sm:right-2 bg-gray-800/80 border-gray-600 text-white hover:bg-gray-700 w-8 h-8 sm:w-10 sm:h-10" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
