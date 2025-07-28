"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
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

/**
 * Reusable Lead Form Component
 * Handles form validation, submission to CRM and Google Sheets
 * Used by both desktop and mobile hero sections
 */
export function LeadForm({ 
  className = "", 
  cardClassName = "",
  title = "Enquire Now",
  submitButtonText = "Submit Now",
  componentName = "LeadForm"
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coursesid: "OGLAMBA201",
    state: "",
    city: "",
    page: "getdegree.online",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [utmParams, setUtmParams] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    console.log(`${componentName} - Form submission started`);

    // Prevent multiple submissions
    if (isSubmitting) {
      toast.warning("Form is already being submitted. Please wait...");
      return;
    }

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
      console.log(`${componentName} - Form validation failed:`, newErrors);
      return;
    }

    console.log(`${componentName} - Form validation passed`);

    // Frontend check for duplicate phone number using localStorage
    let submittedPhoneNumbers =
      JSON.parse(localStorage.getItem("submittedPhoneNumbers")) || [];

    // Check if this phone number was submitted in the last 5 minutes
    const now = Date.now();
    const recentSubmissions =
      JSON.parse(localStorage.getItem("recentSubmissions")) || {};
    const lastSubmissionTime = recentSubmissions[formData.phone];

    if (lastSubmissionTime && now - lastSubmissionTime < 300000) {
      // 5 minutes
      toast.warning(
        "This phone number was recently submitted. Please wait a few minutes before trying again."
      );
      return;
    }

    if (submittedPhoneNumbers.includes(formData.phone)) {
      toast.warning(
        "This phone number has already been used to submit a query during this session."
      );
      return;
    }

    setIsLoading(true);
    setIsSubmitting(true);

    try {
      console.log(`${componentName} - Starting form submission process`);
      
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
        page: "getdegree.online",
      };

      // Log the data being sent for debugging
      console.log("Submitting form data:", sanitizedFormData);
      console.log("UTM parameters:", utmParams);

      // Prepare data with UTM parameters for sheets
      const submissionId = `${formData.phone}_${Date.now()}`;
      const dataForSheet = {
        ...sanitizedFormData,
        submission_id: submissionId,
        campaign: utmParams?.utm_campaign || utmParams?.campaign || "",
        utm_source: utmParams?.utm_source || "Stealth",
        utm_medium: utmParams?.utm_medium || "",
        utm_term: utmParams?.utm_term || "",
        utm_content: utmParams?.utm_content || "",
      };

      // SUBMIT TO CRM FIRST (more important)
      let crmResult = { success: false };
      try {
        console.log(`${componentName} - About to submit to CRM with data:`, sanitizedFormData);
        console.log(`${componentName} - UTM params:`, utmParams);
        crmResult = await submitAdmissionQuery(sanitizedFormData, utmParams);
        console.log(`${componentName} - CRM submission result:`, crmResult);
      } catch (crmError) {
        console.error(`${componentName} - CRM submission failed:`, crmError);
        crmResult = { success: false, error: crmError.message };
      }

      // Only submit to sheets if CRM was successful
      let sheetsData = { success: false };
      if (crmResult.success) {
        try {
          const sheetsResponse = await fetch("/api/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataForSheet),
          });

          sheetsData = await sheetsResponse.json();
          console.log("Sheets submission result:", sheetsData);
        } catch (sheetsError) {
          console.error("Sheets submission failed:", sheetsError);
          sheetsData = { success: false, error: sheetsError.message };
        }
      } else {
        console.log("Skipping sheets submission because CRM failed");
      }

      // Handle success case - CRM success is primary
      if (crmResult.success) {
        toast.success("Form submitted successfully!");
        if (!submittedPhoneNumbers.includes(formData.phone)) {
          submittedPhoneNumbers.push(formData.phone);
          localStorage.setItem(
            "submittedPhoneNumbers",
            JSON.stringify(submittedPhoneNumbers)
          );
        }

        // Update recent submissions timestamp
        recentSubmissions[formData.phone] = now;
        localStorage.setItem(
          "recentSubmissions",
          JSON.stringify(recentSubmissions)
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          coursesid: "OGLAMBA201",
          state: "",
          city: "",
          page: "getdegree.online",
        });
        setErrors({});
        setCities([]); // Reset cities array
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

        // Update recent submissions timestamp even on error to prevent spam
        recentSubmissions[formData.phone] = now;
        localStorage.setItem(
          "recentSubmissions",
          JSON.stringify(recentSubmissions)
        );
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <Card className={cardClassName}>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-slate-900">
            {title}
          </CardTitle>
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
              disabled={isLoading || isSubmitting}
              className="w-full bg-gradient-to-r from-green-600 animate-bounce to-green-500 hover:from-green-700 hover:to-green-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="rounded-full h-5 w-5 border-b-2 border-white mr-2 animate-spin"></div>
                  Processing...
                </div>
              ) : (
                submitButtonText
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 