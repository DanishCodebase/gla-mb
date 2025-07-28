// src/app/api/submit/route.js

export async function POST(request) {
  // Allow CORS for frontend requests
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle OPTIONS request for CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Method not allowed. Use POST.",
      }),
      {
        status: 405,
        headers: { ...headers, "Content-Type": "application/json" },
      }
    );
  }

  try {
    // Parse JSON body
    const formData = await request.json();
    
    // Debug logging to check received data
    console.log("API received form data:", formData);
    console.log("State in API:", formData.state);
    console.log("City in API:", formData.city);

    // Validate required fields with better handling of empty strings
    const required = ["page","name", "email", "phone", "state", "city"];
    const missing = required.filter((k) => !formData[k] || formData[k].trim() === '');
    if (missing.length > 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Missing fields: " + missing.join(", "),
        }),
        {
          status: 400,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid email format." }),
        {
          status: 400,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    }

    // Validate phone number
    if (!/^[6-9][0-9]{9}$/.test(formData.phone)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid phone number." }),
        {
          status: 400,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    }

    // Google Apps Script integration
    const googleScriptUrl =
      "https://script.google.com/macros/s/AKfycbwNlNdUk0dhyu3rXla1HkHskibDUOjRQ6nXzrB7lFcnsAuJIRUf0Q94FSgGjKG6_mBJ/exec";

    // Combined check and write operation to prevent duplicates
    const combinedPayload = { 
      ...formData, 
      city: formData.city ? formData.city.trim().replace(/\s/g, "") : "",
      state: formData.state ? formData.state.trim() : "",
      action: "checkAndWrite",
      submission_id: formData.submission_id || `${formData.phone}_${Date.now()}`
    };
    
    // Debug logging for Google Apps Script payload
    console.log("Google Apps Script payload:", combinedPayload);
    console.log("State in payload:", combinedPayload.state);
    console.log("City in payload:", combinedPayload.city);
    
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(combinedPayload),
    });

    if (!response.ok) {
      throw new Error(`Google Script failed: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.isDuplicate === true) {
      return new Response(
        JSON.stringify({
          success: false,
          isDuplicate: true,
          message:
            "This phone number has already been used to submit an inquiry.",
        }),
        {
          status: 200,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    }

    if (result.success === true) {
      return new Response(
        JSON.stringify({
          success: true,
          message: result.message || "Form submitted successfully.",
        }),
        {
          status: 200,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          message:
            result.message ||
            "Data submission failed due to script error.",
        }),
        {
          status: 500,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Server error: " + error.message,
      }),
      {
        status: 500,
        headers: { ...headers, "Content-Type": "application/json" },
      }
    );
  }
}
