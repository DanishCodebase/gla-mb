"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    state: "",
    city: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      style={{
        backgroundImage: "url('/herobg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/50"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-semibold shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              UGC & AICTE Approved
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Get Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Online MBA
              </span>{" "}
              Degree in 2 Years
            </h1>

            {/* Supporting Text */}
            <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl">
              Transform your career with our accredited online MBA program.
              Flexible learning, industry-relevant curriculum, and expert
              faculty to help you achieve your professional goals.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-white">
                  100% Online
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-white">
                  AICTE Approved
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-white">
                  Flexible Schedule
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Get Started Today
              </Button>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:pl-8">
            <Card
              id="contact-form"
              className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 max-w-sm ms-auto"
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Get Free Consultation
                </CardTitle>
                <p className="text-slate-600 text-base">
                  Speak with our admissions team today
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="h-12 text-base border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="h-12 text-base border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Mobile Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="mobile"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Mobile Number *
                    </Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="Enter your mobile number"
                      className="h-12 text-base border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* State and City Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="state"
                        className="text-sm font-semibold text-slate-700"
                      >
                        State *
                      </Label>
                      <Input
                        id="state"
                        name="state"
                        type="text"
                        placeholder="Your state"
                        className="h-12 text-base border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="city"
                        className="text-sm font-semibold text-slate-700"
                      >
                        City *
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Your city"
                        className="h-12 text-base border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mt-6"
                  >
                    Get Free Consultation
                  </Button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-slate-500 text-center leading-relaxed">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      privacy policy
                    </a>{" "}
                    and consent to being contacted by our team.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
