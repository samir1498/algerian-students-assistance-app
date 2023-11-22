// src/infrastructure/api/helpRequests.ts
import axios from "axios";
//TODO create an axios instance with interceptor for jwt and csrf

const API_BASE_URL = "/api/help";

export const submitHelpRequest = async (helpRequestData: any) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/submit`,
      helpRequestData
    );
    if (response.status === 200) {
      console.log("Help request submitted successfully");
    } else {
      console.error("Failed to submit help request");
    }
  } catch (error) {
    console.error("Error submitting help request:", error);
  }
};

export const getAllHelpRequests = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/requests`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Failed to fetch help requests");
      return [];
    }
  } catch (error) {
    console.error("Error fetching help requests:", error);
    return [];
  }
};
