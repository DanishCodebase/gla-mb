import { submitLead } from "@/lib/backend";
 
export const submitAdmissionQuery = async (formData, utmParams = {}) => {
  try {
    console.log("Raw form data received for new API:", formData);
    console.log("UTM parameters received:", utmParams);
    console.log("State value:", formData.state);
    console.log("City value:", formData.city);

    // Enhanced validation for required fields
    const requiredFields = ['name', 'email', 'phone', 'state', 'city'];
    const missingFields = requiredFields.filter(field => !formData[field] || formData[field].trim() === '');
    
    if (missingFields.length > 0) {
      console.error("Missing required fields:", missingFields);
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }

    // Validate state and city specifically with better error handling
    if (!formData.state || formData.state.trim() === '') {
      console.error("Missing state data:", {
        state: formData.state,
        hasState: !!formData.state,
      });
      throw new Error("State is required");
    }

    if (!formData.city || formData.city.trim() === '') {
      console.error("Missing city data:", {
        city: formData.city,
        hasCity: !!formData.city,
      });
      throw new Error("City is required");
    }

    const apiPayload = {
      Name: formData.name,
      DOB: "12/7/2000",
      EmailId: formData.email,
      Mobile: formData.phone,
      ProgramCode: formData.coursesid || "OGLAMBA201",
      source: "Stealth",
      City: formData.city.trim(),
      State: formData.state.trim(),
      // Alternative field names that CRM might expect
      state: formData.state.trim(),
      city: formData.city.trim(),
      // Try different field names that CRM might expect
      Source: utmParams.utm_source || "Stealth",
      Medium: utmParams.utm_medium || "",
      Campaign: utmParams.utm_campaign || utmParams.campaign || "",
      Term: utmParams.utm_term || "",
      Content: utmParams.utm_content || "",
      // Keep original UTM fields as backup
      utm_source: utmParams.utm_source || "Stealth",
      utm_medium: utmParams.utm_medium || "",
      utm_campaign: utmParams.utm_campaign || utmParams.campaign || "",
      utm_term: utmParams.utm_term || "",
      utm_content: utmParams.utm_content || "",
    };

    console.log("Constructed payload for new API:", apiPayload);
    console.log("State and City in payload:", {
      State: apiPayload.State,
      state: apiPayload.state,
      City: apiPayload.City,
      city: apiPayload.city
    });
    
    const response = await submitLead(apiPayload);
    console.log("New API response:", response);
 
    if (
      response &&
      typeof response === "string" &&
      (response.startsWith("1@@") || response.includes("successful"))
    ) {
      return {
        success: true,
        message: "Your query has been submitted successfully!",
      };
    } else {
      throw new Error(response || "Failed to submit query");
    }
  } catch (error) {
    console.error("CRM submission error:", error);
    return {
      success: false,
      message: "Failed to submit your query. Please try again later.",
      error: error.message,
    };
  }
};