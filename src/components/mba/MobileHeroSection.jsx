"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LeadForm } from "./LeadForm";

export function MobileHeroSection() {
  return (
    <section className="relative min-h-screen block sm:hidden overflow-hidden bg-green-50">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(black 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      {/* University Image Section */}
      <div className="relative h-40 sm:h-80 lg:h-96">
        <Image
          src="/gla.webp"
          alt="University Campus"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* University name overlay */}
        {/* <div className="absolute top-4 left-4 text-white">
          <h2 className="text-lg sm:text-xl font-bold">AMITY UNIVERSITY</h2>
        </div> */}
      </div>

      {/* Content Section */}
      <div className="px-4 py-8 sm:py-12">
        <div className="max-w-md mx-auto">
          {/* Main Heading */}
          {/* Main Headline */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-[50px] text-black leading-tight tracking-tight">
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
                    className="text-black font-bold text-2xl sm:text-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <span className="hidden sm:inline">🎓</span> ADMISSIONS OPEN
                    2025
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
          </div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LeadForm
              className="mt-10 relative z-10"
              cardClassName="bg-white border-2 border-green-600 shadow-xl rounded-xl"
              title="Apply Now"
              submitButtonText="SUBMIT"
              componentName="MobileHeroSection"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
