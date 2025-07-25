// src/services/backend.js

export const submitLead = async (apiPayload) => {
  try {
    const baseUrl =
      "https://glawebapi.glaonline.com/api/ChannelPartner/GLACampaignPostAPI";

    // Convert undefined values to empty strings instead of filtering them out
    const processedPayload = Object.fromEntries(
      Object.entries(apiPayload).map(([key, value]) => [
        key,
        value === undefined ? "" : value,
      ])
    );

    // Log the processed payload to see what's being sent
    console.log("Processed payload for API:", processedPayload);
    console.log("State and City in processed payload:", {
      State: processedPayload.State,
      state: processedPayload.state,
      City: processedPayload.City,
      city: processedPayload.city
    });

    const queryParams = new URLSearchParams(processedPayload).toString();
    const apiUrl = `${baseUrl}?${queryParams}`;

    console.log("Sending GET request to API:", apiUrl);

    const response = await fetch(apiUrl, {
      method: "GET",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response:", errorText);
      throw new Error(
        `API request failed with status ${response.status}: ${errorText}`
      );
    }

    // The API returns a JSON-encoded string.
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error submitting lead:", error);
    throw error;
  }
};
