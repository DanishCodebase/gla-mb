"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function FixedApplyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 600);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleApplyClick = () => {
    // Check if we're on mobile or desktop
    const isMobile = window.innerWidth < 640; // sm breakpoint
    
    let targetId;
    if (isMobile) {
      targetId = "contact"; // Mobile form ID
    } else {
      targetId = "contact-form"; // Desktop form ID
    }
    
    console.log("FixedApplyButton - Screen width:", window.innerWidth);
    console.log("FixedApplyButton - Is mobile:", isMobile);
    console.log("FixedApplyButton - Target ID:", targetId);
    
    const contactForm = document.getElementById(targetId);
    console.log("FixedApplyButton - Found form:", contactForm);
    
    if (contactForm) {
      console.log("FixedApplyButton - Scrolling to form");
      contactForm.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: try both IDs
      console.log("FixedApplyButton - Trying fallback");
      const fallbackForm = document.getElementById("contact") || document.getElementById("contact-form");
      console.log("FixedApplyButton - Fallback form found:", fallbackForm);
      if (fallbackForm) {
        fallbackForm.scrollIntoView({ behavior: "smooth" });
      } else {
        console.log("FixedApplyButton - No form found!");
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed block sm:hidden bottom-0 w-full z-50"
        >
          <Button
            onClick={handleApplyClick}
            className="bg-gradient-to-r from-green-600 w-full to-green-500 hover:from-green-700 hover:to-green-700 text-white px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
            size="lg"
          >
            🎓 Apply Now
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
