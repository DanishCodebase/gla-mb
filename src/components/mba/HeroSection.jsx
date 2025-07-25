"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllStates, getCitiesForState } from "@/lib/stateData";
import { submitAdmissionQuery } from "@/lib/crm";
import { getUTMParams } from "@/lib/utils";

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coursesid: "OGLAMBA201",
    state: "",
    city: "",
    page: "glaOnlineMBA",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [utmParams, setUtmParams] = useState({});

  // Extract UTM parameters on component mount
  useEffect(() => {
    const utmData = getUTMParams();
    setUtmParams(utmData);
  }, []);

  const formFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      required: true,
      validation: (value) => value.trim().length >= 2,
      errorMessage: "Name must be at least 2 characters long",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "your.email@example.com",
      required: true,
      validation: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      errorMessage: "Please enter a valid email address",
    },
    {
      name: "phone",
      label: "Mobile Number",
      type: "tel",
      placeholder: "+91 98765 43210",
      required: true,
      validation: (value) => /^[6-9][0-9]{9}$/.test(value),
      errorMessage:
        "Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9",
    },
  ];

  const handleChange = (name, value) => {
    let processedValue = value;

    if (name === "name") {
      processedValue = value.replace(/[^a-zA-Z\s]/g, "");
    } else if (name === "phone") {
      processedValue = value.replace(/[^0-9]/g, "");
      if (processedValue.length > 10) {
        processedValue = processedValue.slice(0, 10);
      }
    }

    setFormData((prev) => ({ ...prev, [name]: processedValue }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, processedValue),
    }));

    if (name === "state") {
      // Reset city when state changes
      setFormData((prev) => ({ ...prev, city: "" }));
      // Get cities for selected state
      const stateCities = getCitiesForState(processedValue);
      setCities(stateCities);
    }
  };

  const validateField = (name, value) => {
    const field = formFields.find((f) => f.name === name);
    if (!field) return "";
    if (field.required && !value) return `${field.label} is required`;
    if (value && field.validation && !field.validation(value)) {
      return field.errorMessage;
    }
    return "";
  };

  const handlePhoneBlur = () => {
    const phone = formData.phone;
    if (/^[6-9][0-9]{9}$/.test(phone)) {
      let submittedPhoneNumbers =
        JSON.parse(localStorage.getItem("submittedPhoneNumbers")) || [];
      if (submittedPhoneNumbers.includes(phone)) {
        toast.warning(
          "Note: This phone number may have already been used in this session."
        );
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    formFields.forEach((field) => {
      const error = validateField(field.name, formData[field.name]);
      if (error) newErrors[field.name] = error;
    });

    // Validate state and city
    if (!formData.state || formData.state.trim() === "") {
      newErrors.state = "Please select a state";
    }
    if (!formData.city || formData.city.trim() === "") {
      newErrors.city = "Please select a city";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    // Frontend check for duplicate phone number using localStorage
    let submittedPhoneNumbers =
      JSON.parse(localStorage.getItem("submittedPhoneNumbers")) || [];
    if (submittedPhoneNumbers.includes(formData.phone)) {
      toast.warning(
        "This phone number has already been used to submit a query during this session."
      );
      return;
    }

    setIsLoading(true);

    try {
      // Additional validation to ensure all required fields are present
      if (!formData.state || formData.state.trim() === "") {
        toast.error("Please select a state");
        setIsLoading(false);
        return;
      }

      if (!formData.city || formData.city.trim() === "") {
        toast.error("Please select a city");
        setIsLoading(false);
        return;
      }

      // Double-check that form data is complete
      const requiredFields = ["name", "email", "phone", "state", "city"];
      const missingFields = requiredFields.filter(
        (field) => !formData[field] || formData[field].trim() === ""
      );

      if (missingFields.length > 0) {
        toast.error(`Missing required fields: ${missingFields.join(", ")}`);
        setIsLoading(false);
        return;
      }

      // Ensure form data is properly structured regardless of UTM parameters
      const sanitizedFormData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        coursesid: formData.coursesid || "OGLAMBA201",
        state: formData.state.trim(),
        city: formData.city ? formData.city.trim().replace(/\s/g, "") : "",
        page: "glaOnlineMBA",
      };

      // Log the data being sent for debugging
      console.log("Submitting form data:", sanitizedFormData);
      console.log("UTM parameters:", utmParams);

      // Prepare data with UTM parameters for sheets
      const dataForSheet = {
        ...sanitizedFormData,
        campaign: utmParams?.utm_campaign || utmParams?.campaign || "",
        utm_source: utmParams?.utm_source || "Stealth",
        utm_medium: utmParams?.utm_medium || "",
        utm_term: utmParams?.utm_term || "",
        utm_content: utmParams?.utm_content || "",
      };

      // PARALLEL API CALLS for faster submission
      const [crmResult, sheetsResponse] = await Promise.all([
        submitAdmissionQuery(sanitizedFormData, utmParams),
        fetch("/api/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataForSheet),
        }),
      ]);

      const sheetsData = await sheetsResponse.json();

      // Handle success case
      if (crmResult.success || sheetsData.success) {
        toast.success("Form submitted successfully!");
        if (!submittedPhoneNumbers.includes(formData.phone)) {
          submittedPhoneNumbers.push(formData.phone);
          localStorage.setItem(
            "submittedPhoneNumbers",
            JSON.stringify(submittedPhoneNumbers)
          );
        }
        setFormData({
          name: "",
          email: "",
          phone: "",
          coursesid: "OGLAMBA201",
          state: "",
          city: "",
          page: "glaOnlineMBA",
        });
        setErrors({});
        window.location.href = "/thankyou.html";
      } else {
        // Handle error case
        if (sheetsData.isDuplicate) {
          toast.error(
            "This phone number has already been used to submit an inquiry."
          );
          if (!submittedPhoneNumbers.includes(formData.phone)) {
            submittedPhoneNumbers.push(formData.phone);
            localStorage.setItem(
              "submittedPhoneNumbers",
              JSON.stringify(submittedPhoneNumbers)
            );
          }
        } else {
          toast.error("Failed to submit form. Please try again.");
        }
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[url('/herobg1.webp')] bg-cover bg-center">
      <div className="absolute inset-0 md:hidden bg-black/50"></div>
      <div className="container max-w-7xl mx-auto px-4 py-16 relative z-10">
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
              Chart your Path with our{" "}
              <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600">
                Industry-Oriented
              </span>{" "}
              Specializations
            </h1>

            {/* Supporting Text */}
            <motion.div
              className="bg-gradient-to-r from-green-600 to-amber-500 rounded-xl p-5 py-2 w-fit"
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

            {/* Key Benefits */}
            <div className="grid grid-cols-3 sm:grid-cols-1 gap-6">
              <div className="flex items-center space-x-3">
                <div className="min-w-8 min-h-8 bg-green-100 rounded-full flex items-center justify-center">
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
                <span className="text-sm sm:text-lg font-medium text-white">
                  100% Online
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="min-w-8 min-h-8 bg-blue-100 rounded-full flex items-center justify-center">
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
                {/* <span className="text-sm sm:text-lg font-medium text-white">
                  AICTE Approved
                </span> */}
                <span className="text-sm sm:text-lg font-medium text-white">
                  UGC-Entitled
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="min-w-8 min-h-8 bg-purple-100 rounded-full flex items-center justify-center">
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
                <span className="text-sm sm:text-lg font-medium text-white">
                  Flexible Schedule
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
            <Card
              id="contact-form"
              className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 max-w-sm mx-auto lg:ms-auto lg:mr-0"
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Enquire Now
                </CardTitle>
                {/* <p className="text-slate-600 text-base">
                  Speak with our admissions team today
                </p> */}
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
                      className={`h-12 text-base border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
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
                      className={`h-12 text-base border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Mobile Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your mobile number"
                      className={`h-12 text-base border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onBlur={handlePhoneBlur}
                      required
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
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
                      <Select
                        value={formData.state}
                        onValueChange={(value) => handleChange("state", value)}
                      >
                        <SelectTrigger
                          className={`h-12 text-base border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 w-full ${
                            errors.state ? "border-red-500" : ""
                          }`}
                        >
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent className="w-full">
                          {getAllStates().map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.state && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.state}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="city"
                        className="text-sm font-semibold text-slate-700"
                      >
                        City *
                      </Label>
                      <Select
                        value={formData.city}
                        onValueChange={(value) => handleChange("city", value)}
                        disabled={!formData.state}
                      >
                        <SelectTrigger
                          className={`h-12 text-base border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 w-full ${
                            errors.city ? "border-red-500" : ""
                          }`}
                        >
                          <SelectValue placeholder="Select City" />
                        </SelectTrigger>
                        <SelectContent className="w-full">
                          {cities.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.city && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.city}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-green-600 animate-bounce to-green-500 hover:from-green-700 hover:to-green-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="rounded-full h-5 w-5 border-b-2 border-white mr-2 animate-spin"></div>
                        Processing...
                      </div>
                    ) : (
                      "Submit Now"
                    )}
                  </Button>

                  {/* <p className="text-xs text-slate-500 text-center leading-relaxed">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      privacy policy
                    </a>{" "}
                    and consent to being contacted by our team.
                  </p> */}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
