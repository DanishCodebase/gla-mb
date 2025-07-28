"use client"

import {
  UserPlus,
  FileText,
  CreditCard,
  Shield,
  BookOpen,
  GraduationCap,
  Award,
  ArrowRight,
  Check,
  ChevronRight,
  Star,
  Sparkles,
  TrendingUp,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function JourneyAtGLA() {
  const [hoveredStep, setHoveredStep] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [progressWidth, setProgressWidth] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState([])
  const sectionRef = useRef(null)

  const handleApplyNowClick = (e) => {
    e.preventDefault();
    const isMobile = window.innerWidth < 640; // sm breakpoint
    let targetId;
    if (isMobile) {
      targetId = "contact"; // Mobile form ID
    } else {
      targetId = "contact-form"; // Desktop form ID
    }
    const contactForm = document.getElementById(targetId);
    if (contactForm) {
      contactForm.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };
  useEffect(() => {
    setIsVisible(true)

    // Generate particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }))
    setParticles(newParticles)

    // Animate progress line
    const timer = setTimeout(() => {
      setProgressWidth(100)
    }, 1000)

    // Cycle through active steps
    const stepTimer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 7)
    }, 4000)

    // Mouse move parallax effect
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      clearTimeout(timer)
      clearInterval(stepTimer)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const steps = [
    {
      number: "01",
      title: "Register yourself",
      description: "Create your account and complete your profile",
      icon: UserPlus,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Submit your application",
      description: "Fill out and submit your application form",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Pay your fee",
      description: "Complete the payment process securely",
      icon: CreditCard,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "04",
      title: "Get your documents verified",
      description: "Upload and verify your academic documents",
      icon: Shield,
      color: "from-orange-500 to-red-500",
    },
    {
      number: "05",
      title: "Access Learning Management System",
      description: "Access your courses and learning materials",
      icon: BookOpen,
      color: "from-indigo-500 to-purple-500",
    },
    {
      number: "06",
      title: "Appear in Exams",
      description: "Take your scheduled examinations",
      icon: GraduationCap,
      color: "from-pink-500 to-rose-500",
    },
    {
      number: "07",
      title: "Get your Degree",
      description: "Receive your official degree certificate",
      icon: Award,
      color: "from-amber-500 to-yellow-500",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0 animate-mesh-1"
            style={{
              background: `radial-gradient(circle at ${20 + mousePosition.x * 10}% ${30 + mousePosition.y * 10}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at ${80 + mousePosition.x * -5}% ${70 + mousePosition.y * -5}%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        {/* Dynamic Particle System */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-slate-400 to-amber-400 animate-particle-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDelay: `${particle.id * 0.5}s`,
              animationDuration: `${particle.speed * 3}s`,
              transform: `translate(${mousePosition.x * particle.speed * 5}px, ${mousePosition.y * particle.speed * 5}px)`,
            }}
          ></div>
        ))}

        {/* Morphing Geometric Shapes */}
        <div className="absolute top-20 left-20">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full animate-morph-1 blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-20">
          <div className="w-40 h-40 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full animate-morph-2 blur-xl"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-24 h-24 bg-gradient-to-br from-green-200/20 to-cyan-200/20 rounded-full animate-morph-3 blur-xl"></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full animate-grid-shift"
            style={{
              backgroundImage: `
                linear-gradient(rgba(30, 41, 59, 0.1) 2px, transparent 2px),
                linear-gradient(90deg, rgba(30, 41, 59, 0.1) 2px, transparent 2px)
              `,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="container px-6 md:px-8 mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-24">
          <div
            className={`transform transition-all duration-1200 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
          >
            {/* Animated Badge */}
            {/* <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-full text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-500 group">
              <div className="relative">
                <Sparkles className="w-5 h-5 text-amber-500 animate-spin-slow" />
                <div className="absolute inset-0 bg-amber-400 rounded-full blur-md opacity-30 animate-pulse-gentle"></div>
              </div>
              <span className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-clip-text text-transparent animate-text-shimmer">
                MBA Program Journey
              </span>
              <div className="flex items-center gap-1 px-2 py-1 bg-amber-100 rounded-full">
                <Star className="w-3 h-3 text-amber-600 fill-current animate-pulse" />
                <span className="text-amber-700 text-xs font-bold">4.9</span>
              </div>
            </div> */}

            {/* Main Heading with Advanced Animation */}
            <div className="relative mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                <span className="inline-block animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  Your Journey
                </span>{" "}
                <span className="inline-block animate-slide-up" style={{ animationDelay: "0.4s" }}>
                  at
                </span>{" "}
                <span
                  className="inline-block animate-slide-up bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent"
                  style={{ animationDelay: "0.6s" }}
                >
                  GLA Online
                </span>
              </h2>

              {/* Animated Underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full animate-width-expand-center"></div>
            </div>

            {/* Subtitle with Staggered Animation */}
            <p
              className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.8s" }}
            >
              Follow these simple steps to complete your MBA educational journey with excellence
            </p>

            {/* Animated Stats */}
            {/* <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div
                className="flex items-center gap-3 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/50 animate-fade-up"
                style={{ animationDelay: "1s" }}
              >
                <TrendingUp className="w-5 h-5 text-green-500 animate-bounce-gentle" />
                <span className="text-slate-700 font-semibold">96% Success Rate</span>
              </div>
              <div
                className="flex items-center gap-3 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/50 animate-fade-up"
                style={{ animationDelay: "1.2s" }}
              >
                <Award className="w-5 h-5 text-amber-500 animate-pulse" />
                <span className="text-slate-700 font-semibold">Top 50 Program</span>
              </div>
              <div
                className="flex items-center gap-3 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/50 animate-fade-up"
                style={{ animationDelay: "1.4s" }}
              >
                <Check className="w-5 h-5 text-blue-500 animate-check" />
                <span className="text-slate-700 font-semibold">AACSB Accredited</span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Enhanced Desktop Layout */}
        <div className="hidden lg:block mb-20">
          {/* Advanced Progress Line */}
          <div className="relative mb-20">
            <div className="absolute top-12 left-20 right-20 h-0.5 bg-slate-200 rounded-full"></div>
            <div
              className="absolute top-12 left-20 h-0.5 bg-gradient-to-r from-blue-500 via-amber-500 to-green-500 rounded-full transition-all duration-3000 ease-out shadow-lg"
              style={{ width: `${(progressWidth / 100) * (100 - 40)}%` }}
            ></div>

            {/* Animated Progress Dot */}
            <div
              className="absolute top-10 w-2 h-2 bg-amber-500 rounded-full shadow-lg animate-pulse transition-all duration-3000 ease-out"
              style={{ left: `${20 + (progressWidth / 100) * (100 - 40)}%` }}
            ></div>

            <div className="grid grid-cols-7 gap-6">
              {steps.map((step, index) => {
                const IconComponent = step.icon
                const isActive = index === activeStep
                const isCompleted = index < activeStep

                return (
                  <div
                    key={index}
                    className={`relative text-center group cursor-pointer transform transition-all duration-800 ease-out ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${index * 200 + 600}ms`,
                    }}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Enhanced Step Container */}
                    <div
                      className={`relative transition-all duration-700 ease-out ${
                        isActive
                          ? "transform -translate-y-4 scale-105"
                          : hoveredStep === index
                            ? "transform -translate-y-2 scale-102"
                            : ""
                      }`}
                    >
                      {/* Animated Background Glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-2xl transition-all duration-700 ${
                          isActive
                            ? "opacity-20 scale-110"
                            : hoveredStep === index
                              ? "opacity-15 scale-105"
                              : "opacity-0"
                        }`}
                      ></div>

                      {/* Main Card */}
                      <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500">
                        {/* Step Number with Advanced Animation */}
                        <div
                          className={`relative w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                            isActive || isCompleted
                              ? "bg-gradient-to-br from-amber-400 to-amber-600 border-amber-500 text-white shadow-lg"
                              : "bg-white border-slate-300 text-slate-700 group-hover:border-slate-400"
                          }`}
                        >
                          {/* Animated Ring */}
                          {isActive && (
                            <div className="absolute inset-0 rounded-full border-2 border-amber-400 animate-ping-slow"></div>
                          )}

                          {/* Success Check Animation */}
                          {isCompleted ? (
                            <Check className="w-6 h-6 animate-check-in" />
                          ) : (
                            <span
                              className={`font-bold text-sm transition-all duration-300 ${isActive ? "animate-pulse" : ""}`}
                            >
                              {step.number}
                            </span>
                          )}
                        </div>

                        {/* Icon with Morphing Animation */}
                        <div
                          className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-500 ${
                            isActive
                              ? "bg-gradient-to-br from-amber-50 to-amber-100 scale-110"
                              : hoveredStep === index
                                ? "bg-slate-50 scale-105"
                                : "bg-slate-50/50"
                          }`}
                        >
                          <IconComponent
                            className={`w-7 h-7 transition-all duration-500 ${
                              isActive
                                ? "text-amber-600 animate-bounce-gentle"
                                : hoveredStep === index
                                  ? "text-slate-700"
                                  : "text-slate-600"
                            }`}
                          />
                        </div>

                        {/* Content with Smooth Transitions */}
                        <div
                          className={`transition-all duration-500 ${isActive || hoveredStep === index ? "transform -translate-y-1" : ""}`}
                        >
                          <h3
                            className={`font-semibold text-sm mb-3 leading-tight transition-all duration-300 ${
                              isActive ? "text-amber-700" : "text-slate-800"
                            }`}
                          >
                            {step.title}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                        </div>

                        {/* Interactive Elements */}
                        {(hoveredStep === index || isActive) && (
                          <div className="mt-4 animate-fade-in">
                            <div className="w-8 h-8 mx-auto bg-amber-50 rounded-full flex items-center justify-center shadow-sm">
                              <ArrowRight className="w-4 h-4 text-amber-600 animate-pulse-x" />
                            </div>
                          </div>
                        )}

                        {/* Active Step Indicator */}
                        {isActive && (
                          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                            <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce-gentle shadow-lg"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Layout */}
        <div className="lg:hidden mb-20">
          <div className="relative max-w-lg mx-auto">
            {/* Vertical Progress Line */}
            <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-slate-200 rounded-full"></div>
            <div
              className="absolute left-10 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-amber-500 to-green-500 rounded-full transition-all duration-3000 ease-out"
              style={{ height: `${progressWidth}%` }}
            ></div>

            <div className="space-y-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon
                const isActive = index === activeStep
                const isCompleted = index < activeStep

                return (
                  <div
                    key={index}
                    className={`relative flex items-start group transform transition-all duration-800 ease-out ${
                      isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 200 + 600}ms` }}
                  >
                    {/* Step Circle */}
                    <div
                      className={`relative z-10 w-20 h-20 mr-6 flex-shrink-0 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        isActive || isCompleted
                          ? "bg-gradient-to-br from-amber-400 to-amber-600 border-amber-500 text-white shadow-lg"
                          : "bg-white border-slate-300 text-slate-700"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute inset-0 rounded-full border-2 border-amber-400 animate-ping-slow"></div>
                      )}

                      {isCompleted ? (
                        <Check className="w-8 h-8 animate-check-in" />
                      ) : (
                        <span className={`font-bold ${isActive ? "animate-pulse" : ""}`}>{step.number}</span>
                      )}
                    </div>

                    {/* Content Card */}
                    <div
                      className={`flex-1 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-xl p-6 shadow-lg transition-all duration-500 ${
                        isActive ? "transform -translate-y-1 shadow-xl" : ""
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 mr-4 rounded-lg flex items-center justify-center transition-all duration-500 ${
                            isActive ? "bg-gradient-to-br from-amber-50 to-amber-100" : "bg-slate-50"
                          }`}
                        >
                          <IconComponent
                            className={`w-6 h-6 transition-all duration-500 ${
                              isActive ? "text-amber-600 animate-bounce-gentle" : "text-slate-600"
                            }`}
                          />
                        </div>
                        <h3
                          className={`font-semibold text-lg transition-all duration-300 ${
                            isActive ? "text-amber-700" : "text-slate-800"
                          }`}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>

                      {/* Active Indicator */}
                      {isActive && (
                        <div className="mt-4 flex items-center gap-2 animate-fade-in">
                          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-amber-600 font-medium">Current Step</span>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div
            className={`transform transition-all duration-1200 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
            style={{ transitionDelay: "1600ms" }}
          >
            {/* Animated Award Icon */}
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full animate-pulse-gentle"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur-xl opacity-30 animate-ping-slow"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-xl">
                <Award className="w-12 h-12 text-white animate-bounce-gentle" />
              </div>
            </div>

            {/* Heading */}
            <h3 className="text-3xl font-bold text-slate-800 mb-4 animate-text-shimmer bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent">
              Ready to start your MBA journey?
            </h3>

            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of professionals who have advanced their careers through our world-class MBA program
            </p>

            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              {/* Primary Button */}
              <a href="#contact-form" onClick={handleApplyNowClick} className="group relative inline-flex justify-center items-center gap-3 px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="relative z-10">Start Application</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary Button */}
              {/* <button className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-xl border border-slate-300 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-slate-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="relative z-10">Learn More</span>
                <ChevronRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </button> */}
            </div>

            {/* Trust Indicators */}
            {/* <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-600">
              {[
                { icon: Star, text: "AACSB Accredited", delay: "1.8s" },
                { icon: TrendingUp, text: "Top 50 MBA Program", delay: "2s" },
                { icon: Check, text: "95% Job Placement", delay: "2.2s" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/50 animate-fade-up"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-amber-600" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes mesh-1 {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(180deg); }
        }
        
        @keyframes particle-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes morph-1 {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        
        @keyframes morph-2 {
          0%, 100% { border-radius: 40% 60% 60% 40% / 60% 30% 60% 40%; }
          50% { border-radius: 60% 40% 40% 60% / 40% 60% 40% 60%; }
        }
        
        @keyframes morph-3 {
          0%, 100% { border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; }
          50% { border-radius: 80% 20% 60% 40% / 40% 60% 20% 80%; }
        }
        
        @keyframes grid-shift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
        
        @keyframes slide-up {
          0% { transform: translateY(100px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fade-up {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes width-expand-center {
          0% { width: 0; }
          100% { width: 120px; }
        }
        
        @keyframes text-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.98); }
        }
        
        @keyframes pulse-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes check {
          0% { transform: scale(0) rotate(45deg); }
          50% { transform: scale(1.2) rotate(45deg); }
          100% { transform: scale(1) rotate(45deg); }
        }
        
        @keyframes check-in {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-mesh-1 { animation: mesh-1 20s ease-in-out infinite; }
        .animate-particle-float { animation: particle-float 6s ease-in-out infinite; }
        .animate-morph-1 { animation: morph-1 8s ease-in-out infinite; }
        .animate-morph-2 { animation: morph-2 10s ease-in-out infinite; }
        .animate-morph-3 { animation: morph-3 12s ease-in-out infinite; }
        .animate-grid-shift { animation: grid-shift 15s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-fade-up { animation: fade-up 0.8s ease-out forwards; }
        .animate-width-expand-center { animation: width-expand-center 1.5s ease-out forwards; }
        .animate-text-shimmer { animation: text-shimmer 3s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 3s ease-in-out infinite; }
        .animate-pulse-x { animation: pulse-x 1.5s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-check { animation: check 0.6s ease-out forwards; }
        .animate-check-in { animation: check-in 0.6s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>
    </section>
  );
}
