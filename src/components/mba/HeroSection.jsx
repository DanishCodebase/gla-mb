"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LeadForm } from "./LeadForm";

export function HeroSection() {
  return (
    <section className="relative min-h-screen hidden sm:flex items-center overflow-hidden sm:bg-[url('/herobg1.webp')] bg-cover bg-center">
      <div className="absolute inset-0 md:hidden bg-black/50"></div>
      <div className="container max-w-7xl mx-auto px-4 py-8 sm:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-4 sm:space-y-6">
            {/* Badge */}
            {/* <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-semibold shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              UGC & AICTE Approved
            </div> */}

            {/* Main Headline */}
            <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-[50px] text-white leading-tight tracking-tight">
              Build a Future-Ready Career With a Practical{" "}
              <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600">
                Online MBA
              </span>
            </h1>

            {/* Supporting Text */}
            <motion.div
              className="sm:bg-gradient-to-r from-green-600 to-amber-500 rounded-xl sm:p-5 sm:py-2 w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.2 }}
            >
              <div className="flex items-start gap-3 w-fit">
                {/*  */}
                <div>
                  <motion.h3
                    className="text-white font-bold text-2xl sm:text-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <span className="hidden sm:inline">🎓</span> ADMISSIONS OPEN
                    2026
                  </motion.h3>
                  {/* <motion.p
                    className="text-blue-600 text-base leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    Premium MBA education with flexible learning for ambitious
                    professionals.
                  </motion.p> */}
                </div>
              </div>
            </motion.div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-6">
              <div className="flex items-center space-x-3">
                <Image
                  src="/naac.png"
                  alt="NAAC 'A+' Accredited University"
                  width={60}
                  height={54}
                  className="w-[60px] h-[54px]"
                />
                <span className="text-sm sm:text-lg font-medium text-white">
                  NAAC 'A+' Accredited <br className="hidden sm:block" />{" "}
                  University
                </span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <Image
                  src="/money.png"
                  alt="Fee: INR 105000/- (All Inclusive)"
                  width={60}
                  height={49}
                  className="w-[60px] h-[49px]"
                /> */}
                {/* <span className="text-sm sm:text-lg font-medium text-white">
                  AICTE Approved
                </span> */}
                {/* <span className="text-sm sm:text-lg font-medium text-white">
                  Fee: INR 105000/- (All Inclusive)
                </span>
              </div> */}
              <div className="flex items-center space-x-3">
                <Image
                  src="/calendar.png"
                  alt="Duration: 24 Months"
                  width={60}
                  height={41}
                  className="w-[60px] h-[41px]"
                />
                <span className="text-sm sm:text-lg font-medium text-white">
                  Duration: 24 Months
                </span>
              </div>
              <div className="flex sm:hidden items-center justify space-x-3">
                <Image
                  src="/emi.gif"
                  alt="EMI"
                  width={60}
                  height={41}
                  className="w-[60px] h-[49px] rounded-full"
                />
                <span className="text-sm sm:text-lg font-medium text-white">
                  No Cost EMI Available
                </span>
              </div>
            </div>

            {/* CTA Button */}
            {/* <div className="pt-4">
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
            </div> */}
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:pl-8">
            <LeadForm
              id="contact-form"
              className="max-w-sm mx-auto lg:ms-auto lg:mr-0"
              cardClassName="bg-white/95 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1"
              title="Enquire Now"
              submitButtonText="Submit Now"
              componentName="HeroSection"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
